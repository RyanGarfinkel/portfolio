import { GET } from '@/app/resume/route';
import { list } from '@vercel/blob';

jest.mock('@vercel/blob');

const mockedList = list as jest.MockedFunction<typeof list>;
global.fetch = jest.fn();

const mockedFetch = fetch as jest.MockedFunction<typeof fetch>;

describe('GET /api/resume', () => {

    beforeEach(() => jest.clearAllMocks());

    it('should return resume PDF when blob exists', async () => {

        const mockPdfBuffer = new ArrayBuffer(8);
        
        mockedList.mockResolvedValue({
            blobs: [{
                url: 'https://mock-blob-url.com/resume.pdf',
                downloadUrl: 'https://mock-blob-url.com/resume.pdf',
                pathname: 'resume.pdf',
                uploadedAt: new Date(),
                size: 12345
            }],
            hasMore: false,
            cursor: undefined,
        });

        mockedFetch.mockResolvedValue({
            arrayBuffer: () => Promise.resolve(mockPdfBuffer),
        } as Response);

        const response = await GET();

        expect(response.status).toBe(200);
        expect(response.headers.get('content-type')).toBe('application/pdf');
        expect(response.headers.get('content-disposition')).toBe('inline; filename="resume.pdf"');
        expect(mockedList).toHaveBeenCalled();
        expect(mockedFetch).toHaveBeenCalledWith('https://mock-blob-url.com/resume.pdf');
    });

    it('should return 404 when no resume blob exists', async () => {

        mockedList.mockResolvedValue({
            blobs: [],
            hasMore: false,
            cursor: undefined
        });

        const response = await GET();

        expect(response.status).toBe(404);
        
        const responseData = await response.json();
        expect(responseData.error).toBe('Resume not found.');
        expect(mockedList).toHaveBeenCalled();
        expect(mockedFetch).not.toHaveBeenCalled();
    });

    it('should filter and return most recent resume when multiple files exist', async () => {
        const mockPdfBuffer = new ArrayBuffer(8);
        const oldDate = new Date('2023-01-01');
        const newDate = new Date('2024-01-01');
        
        mockedList.mockResolvedValue({
            blobs: [
                {
                    url: 'https://mock-blob-url.com/old-resume.pdf',
                    downloadUrl: 'https://mock-blob-url.com/old-resume.pdf',
                    pathname: 'resume.pdf',
                    uploadedAt: oldDate,
                    size: 12345
                },
                {
                    url: 'https://mock-blob-url.com/new-resume.pdf',
                    downloadUrl: 'https://mock-blob-url.com/new-resume.pdf',
                    pathname: 'resume.pdf', 
                    uploadedAt: newDate,
                    size: 12345
                }
            ],
            hasMore: false,
            cursor: undefined
        });

        mockedFetch.mockResolvedValue({
            arrayBuffer: () => Promise.resolve(mockPdfBuffer),
        } as Response);

        const response = await GET();

        expect(response.status).toBe(200);
        expect(mockedFetch).toHaveBeenCalledWith('https://mock-blob-url.com/new-resume.pdf');
    });
});
