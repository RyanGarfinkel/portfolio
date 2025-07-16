import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export async function POST(request: Request)
{
    const apiKey = request.headers.get('x-api-key');
    if(!apiKey || apiKey !== process.env.SEND_KEY)
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { firstName, lastName, email, subject, message } = await request.json();

    if (!firstName || !lastName || !email || !subject || !message)
        return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    else if (!isValidEmail(email))
        return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    else if(message.replace(/\s/g, '').length > 1000)
        return NextResponse.json({ error: 'Message too long.' }, { status: 400 });

    const transporter = nodemailer.createTransport({
        service: process.env.SERVICE,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.TO,
        subject: subject,
        text: `From: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
    };
    
    try
    {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully.' }, { status: 200 });
    } catch
    {
        return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }
};
