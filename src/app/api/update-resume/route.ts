import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';

export async function PUT(req: NextRequest)
{
    const apiKey = req.headers.get('x-api-key');
    if(!apiKey || apiKey !== process.env.RESUME_KEY)
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const formData = await req.formData();
    const file = formData.get('pdf') as File;

    if(!file || file.type !== 'application/pdf')
        return NextResponse.json({ error: 'Invalid PDF file.' }, { status: 400 });

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    await put(`resume.pdf`, buffer, {
        access: 'public',
        contentType: 'application/pdf',
        allowOverwrite: true,
    });

    return new NextResponse(null, { status: 204 });
}