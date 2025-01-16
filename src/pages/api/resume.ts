import { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';

dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if(req.method !== 'GET')
        return res.status(405).json({ message: 'Method not allowed' });

    const url = process.env.RESUME_URL;

    if(!url)
        return res.status(500).json({ message: 'Resume URL not found' });

    const response = await fetch(url);
    
    if(!response || !response.ok)
        return res.status(500).json({ message: 'Failed to fetch resume' });

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="Resume.pdf"');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.send(buffer);

};

export default handler;