import { NextResponse } from 'next/server';
import { ConnectDB } from '../../../lib/db';
import BlogModel from '../../../models/schema';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const title = formData.get('title')?.toString();
        const description = formData.get('description')?.toString();

        if (!title || !description) {
            return NextResponse.json({ message: 'Title and Description are required.' }, { status: 400 });
        }

        await ConnectDB();

        const newBlog = new BlogModel({ title, description });
        await newBlog.save();

        return NextResponse.json({ message: 'Blog created successfully' }, { status: 201 });
    } catch (error) {
        console.error('Error creating blog:', error);
        return NextResponse.json({ message: 'Failed to create blog', error }, { status: 500 });
    }
}

export async function GET() {
    try {
        await ConnectDB();
        const blogs = await BlogModel.find({});
        return NextResponse.json({ blogs }, { status: 200 });
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json({ message: 'Failed to fetch blogs', error }, { status: 500 });
    }
}
