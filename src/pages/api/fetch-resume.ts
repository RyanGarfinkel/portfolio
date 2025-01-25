import { NextApiRequest, NextApiResponse } from 'next';
import { list } from '@vercel/blob';
import dotenv from 'dotenv';

dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if(req.method !== 'GET')
        return res.status(405).json({ message: 'Method not allowed' });

    const response = await list();

    console.log(response);

    if(response.blobs.length !== 1)
        return res.status(500).json({ message: 'Error fetching resume.' });

    const resumeUrl = response.blobs[0].url;

    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Surrogate-Control', 'no-store');

    return res.status(200).json({ url: resumeUrl });
};

export default handler;