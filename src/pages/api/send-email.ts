import { isEmail, isEmpty } from '@/utils/input-sanitizer';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method !== 'POST')
        return res.status(405).json({ message: 'Method not allowed' });

    const { firstName, lastName, email, subject, message } = req.body;

    if(isEmpty(firstName) || isEmpty(lastName) || isEmpty(email) || isEmpty(subject) || isEmpty(message))
        return res.status(400).json({ message: 'Missing one or more fields.' });
    else if(!isEmail(email))
        return res.status(400).json({ message: 'Invalid email.' });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.TO,
        subject: subject,
        text: `From: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
    };

    try 
    {
        await transporter.sendMail(mailOptions);
        return res.status(204).end(); 
    } catch(err)
    {
        console.log(err)
        res.status(500).send(err);
    }
};

export default handler;