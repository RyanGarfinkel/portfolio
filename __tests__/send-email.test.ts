import request from 'supertest';

const API_URL = 'http://localhost:3000';
const API_KEY = process.env.SEND_KEY || 'test_key';

describe('POST /api/send-email', () => {

    it('should reject requests without api-key', async () => {

        const res = await request(API_URL)
            .post('/api/send-email')
            .send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com',
                subject: 'Test',
                message: 'Hello!',
            });

        expect(res.status).toBe(401);
        expect(res.body.error).toBe('Unauthorized');
    });

    it('should reject requests with invalid api-key', async () => {

        const res = await request(API_URL)
            .post('/api/send-email')
            .set('x-api-key', 'invalid_key')
            .send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com',
                subject: 'Test',
                message: 'Hello!',
            });

        expect(res.status).toBe(401);
        expect(res.body.error).toBe('Unauthorized');
    });

    it('should reject with missing fields', async () => {

        const res = await request(API_URL)
        .post('/api/send-email')
        .set('x-api-key', API_KEY)
        .send({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
        });

        expect(res.status).toBe(400);
        expect(res.body.error).toBe('All fields are required.');
    });

    it('should reject invalid email', async () => {

        const res = await request(API_URL)
            .post('/api/send-email')
            .set('x-api-key', API_KEY)
            .send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'invalid-email',
                subject: 'Test',
                message: 'Hello!',
            });
            
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Invalid email address.');
    });

    it('should reject a long message', async () => {

        const res = await request(API_URL)
            .post('/api/send-email')
            .set('x-api-key', API_KEY)
            .send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com',
                subject: 'Test',
                message: 'bruh '.repeat(1001),
            });

        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Message too long.');
    });

    it('should successfully send email', async () => {

        const res = await request(API_URL)
            .post('/api/send-email')
            .set('x-api-key', API_KEY)
            .send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com',
                subject: 'Test',
                message: 'Hello!',
            });

        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Email sent successfully.');
    });
});
