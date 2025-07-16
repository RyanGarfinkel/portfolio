import { PUT } from '@/app/api/update-resume/route';
import { put } from '@vercel/blob';
import { NextRequest } from 'next/server';

jest.mock('@vercel/blob');

const mockedPut = put as jest.MockedFunction<typeof put>;

const originalEnv = process.env;

beforeEach(() => {

    jest.resetModules();

    process.env = {
        ...originalEnv,
        RESUME_KEY: 'test_key',
    };

    jest.clearAllMocks();
});

afterEach(() => process.env = originalEnv);

describe('PUT /api/update-resume', () => {

    it('should reject requests without api-key', async () => {

        const formData = new FormData();
        formData.append('pdf', new File([Buffer.from('not a pdf')], 'resume.txt', { type: 'text/plain' }));

        const mockRequest = new NextRequest('http://localhost:3000/api/update-resume', {
            method: 'PUT',
            body: formData,
        });

        const response = await PUT(mockRequest);
        expect(response.status).toBe(401);
        
        const responseData = await response.json();
        expect(responseData.error).toBe('Unauthorized');
    });

    it('should reject requests with invalid api-key', async () => {

        const formData = new FormData();
        formData.append('pdf', new File([Buffer.from('not a pdf')], 'resume.txt', { type: 'text/plain' }));

        const mockRequest = new NextRequest('http://localhost:3000/api/update-resume', {
            method: 'PUT',
            headers: new Headers({
                'x-api-key': 'invalid_key',
            }),
            body: formData,
        });

        const response = await PUT(mockRequest);
        expect(response.status).toBe(401);
        
        const responseData = await response.json();
        expect(responseData.error).toBe('Unauthorized');
    });

    it('should reject invalid file type', async () => {

        const formData = new FormData();
        formData.append('pdf', new File([Buffer.from('not a pdf')], 'resume.txt', { type: 'text/plain' }));

        const mockRequest = new NextRequest('http://localhost:3000/api/update-resume', {
            method: 'PUT',
            headers: new Headers({
                'x-api-key': 'test_key',
            }),
            body: formData,
        });

        const response = await PUT(mockRequest);
        expect(response.status).toBe(400);
        
        const responseData = await response.json();
        expect(responseData.error).toBe('Invalid PDF file.');
    });

    it('should accept valid PDF file', async () => {
        
        mockedPut.mockResolvedValue({
            url: 'https://mock-blob-url.com/resume.pdf',
            downloadUrl: 'https://mock-blob-url.com/resume.pdf',
            pathname: 'resume.pdf',
            contentType: 'application/pdf',
            contentDisposition: 'inline; filename="resume.pdf"',
        });

        const formData = new FormData();
        formData.append('pdf', new File([Buffer.from('%PDF-1.4 mock pdf content')], 'resume.pdf', { type: 'application/pdf' }));

        const mockRequest = new NextRequest('http://localhost:3000/api/update-resume', {
            method: 'PUT',
            headers: new Headers({
                'x-api-key': 'test_key',
            }),
            body: formData,
        });
            
        const response = await PUT(mockRequest);
        expect(response.status).toBe(204);
        expect(mockedPut).toHaveBeenCalledWith(
            'resume.pdf',
            expect.any(Buffer),
            {
                access: 'public',
                contentType: 'application/pdf',
                allowOverwrite: true,
            }
        );
    });
});
