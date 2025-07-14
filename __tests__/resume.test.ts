import request from 'supertest';

const API_URL = 'http://localhost:3000';

describe('GET /api/resume', () => {

    let res: request.Response;

    beforeAll(async () => {
        res = await request(API_URL).get('/api/resume');
    });

    it('should fetch the resume PDF or return 404 if not found', () => {

        expect([200, 404]).toContain(res.status);

        if(res.status === 200)
            expect(res.headers['content-type']).toBe('application/pdf');
    });

    it('should have the filename resume.pdf if PDF is found', () => {

        if(res.status === 200)
            expect(res.headers['content-disposition']).toMatch(/filename="?resume\.pdf"?/);
        else
            expect(res.status).toBe(404);
    });
});
