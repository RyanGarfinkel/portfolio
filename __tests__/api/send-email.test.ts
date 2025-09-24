import { POST } from '@/app/api/send-email/route';
import nodemailer from 'nodemailer';

jest.mock('nodemailer');

const mockedNodemailer = nodemailer as jest.Mocked<typeof nodemailer>;
const mockSendMail = jest.fn();

mockedNodemailer.createTransport.mockReturnValue({
    sendMail: mockSendMail,
} as unknown as nodemailer.Transporter);


const originalEnv = process.env;

beforeEach(() => {

    jest.resetModules();

    process.env = {
        ...originalEnv,
        SEND_KEY: 'test_key',
        SERVICE: 'gmail',
        EMAIL: 'test@example.com',
        PASS: 'password',
        TO: 'recipient@example.com'
    };

    jest.clearAllMocks();
});

afterEach(() => process.env = originalEnv);

describe('POST /api/send-email', () => {

    it('should reject requests without api-key', async () => {

        const mockRequest = new Request('http://localhost:3000/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com',
                subject: 'Test',
                message: 'Hello!',
            }),
        });

        const response = await POST(mockRequest);
        expect(response.status).toBe(401);
        
        const responseData = await response.json();
        expect(responseData.error).toBe('Unauthorized');
    });

    it('should reject requests with invalid api-key', async () => {

        const mockRequest = new Request('http://localhost:3000/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'invalid_key',
            },
            body: JSON.stringify({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com',
                subject: 'Test',
                message: 'Hello!',
            }),
        });

        const response = await POST(mockRequest);
        expect(response.status).toBe(401);
        
        const responseData = await response.json();
        expect(responseData.error).toBe('Unauthorized');
    });

    it('should reject with missing fields', async () => {

        const mockRequest = new Request('http://localhost:3000/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'test_key',
            },
            body: JSON.stringify({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: '',
            }),
        });

        const response = await POST(mockRequest);
        expect(response.status).toBe(400);
        
        const responseData = await response.json();
        expect(responseData.error).toBe('All fields are required.');
    });

    it('should reject invalid email', async () => {

        const mockRequest = new Request('http://localhost:3000/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'test_key',
            },
            body: JSON.stringify({
                firstName: 'John',
                lastName: 'Doe',
                email: 'invalid-email',
                subject: 'Test',
                message: 'Hello!',
            }),
        });
            
        const response = await POST(mockRequest);
        expect(response.status).toBe(400);
        
        const responseData = await response.json();
        expect(responseData.error).toBe('Invalid email address.');
    });

    it('should reject a long message', async () => {

        const mockRequest = new Request('http://localhost:3000/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'test_key',
            },
            body: JSON.stringify({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com',
                subject: 'Test',
                message: 'bruh '.repeat(1001),
            }),
        });

        const response = await POST(mockRequest);
        expect(response.status).toBe(400);
        
        const responseData = await response.json();
        expect(responseData.error).toBe('Message too long.');
    });

    it('should successfully send email', async () => {

        mockSendMail.mockResolvedValue({ messageId: 'test-message-id' });

        const mockRequest = new Request('http://localhost:3000/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'test_key',
            },
            body: JSON.stringify({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com',
                subject: 'Test',
                message: 'Hello!',
            }),
        });

        const response = await POST(mockRequest);
        
        if(response.status !== 200)
        {
            const errorData = await response.json();
            console.log('Response status:', response.status);
            console.log('Response data:', errorData);
        }
        
        expect(response.status).toBe(200);
        
        const responseData = await response.json();
        expect(responseData.message).toBe('Email sent successfully.');
        expect(mockSendMail).toHaveBeenCalledWith({
            from: 'test@example.com',
            to: 'recipient@example.com',
            subject: 'Test',
            text: 'From: John Doe\nEmail: john@example.com\nMessage: Hello!',
        });
    });

    it('should handle email sending failure', async () => {
        
        mockSendMail.mockRejectedValue(new Error('SMTP connection failed'));

        const mockRequest = new Request('http://localhost:3000/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'test_key',
            },
            body: JSON.stringify({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com',
                subject: 'Test',
                message: 'Hello!',
            }),
        });

        const response = await POST(mockRequest);
        expect(response.status).toBe(500);
        
        const responseData = await response.json();
        expect(responseData.error).toBe('Failed to send email.');
        expect(mockSendMail).toHaveBeenCalled();
    });
});
