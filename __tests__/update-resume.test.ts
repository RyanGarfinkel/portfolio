import request from 'supertest';
import { list } from '@vercel/blob';

const API_URL = 'http://localhost:3000';
const API_KEY = process.env.RESUME_KEY || 'test_key';

describe('PUT /api/update-resume', () => {

    it('should reject requests without api-key', async () => {

        const res = await request(API_URL)
            .put('/api/update-resume')
            .attach('pdf', Buffer.from('not a pdf'), 'resume.txt');

        expect(res.status).toBe(401);
        expect(res.body.error).toBe('Unauthorized');
    });

    it('should reject requests with invalid api-key', async () => {

        const res = await request(API_URL)
            .put('/api/update-resume')
            .set('x-api-key', 'invalid_key')
            .attach('pdf', Buffer.from('not a pdf'), 'resume.txt');

        expect(res.status).toBe(401);
        expect(res.body.error).toBe('Unauthorized');
    });

    it('should reject invalid file type', async () => {

        const res = await request(API_URL)
            .put('/api/update-resume')
            .set('x-api-key', API_KEY)
            .attach('pdf', Buffer.from('not a pdf'), 'resume.txt');

        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Invalid PDF file.');
    });

    it('should accept valid PDF file', async () => {

        const blobs = await list();
        const resumeBlob = blobs.blobs.find(b => b.pathname.endsWith('resume.pdf'));

        if(!resumeBlob)
            throw new Error('resume.pdf not found in blob storage');

        const pdfRes = await fetch(resumeBlob.url);
        const validPdfBuffer = Buffer.from(await pdfRes.arrayBuffer());

        const res = await request(API_URL)
            .put('/api/update-resume')
            .set('x-api-key', API_KEY)
            .attach('pdf', validPdfBuffer, 'resume.pdf');
            
        expect(res.status).toBe(204);
        expect(res.body).toEqual({});
    });
});
