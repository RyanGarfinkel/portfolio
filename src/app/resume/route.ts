import { NextResponse } from 'next/server';
import { list } from '@vercel/blob';
import dotenv from 'dotenv';

dotenv.config();

export async function GET() {

    const response = await list();

    response.blobs.sort((a, b) => b.uploadedAt.getTime() - a.uploadedAt.getTime());
    response.blobs = response.blobs.filter(blob => blob.pathname === 'resume.pdf');

    if(response.blobs.length === 0)
        return NextResponse.json({ error: 'Resume not found.' }, { status: 404 });

    const blob = response.blobs[0];
    const res = await fetch(blob.url);
    const pdfBuffer = await res.arrayBuffer();

    return new NextResponse(pdfBuffer, {
        status: 200,
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline; filename="resume.pdf"',
        },
    });
};
