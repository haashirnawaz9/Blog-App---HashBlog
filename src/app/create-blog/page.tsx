'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CreateBlog() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    useEffect(() => {
        document.title = 'Create Blog | HashBlog';
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);

        try {
            const res = await fetch('/api/blog', {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) {
                throw new Error('Failed to create blog');
            }

            const data = await res.json();
            setMessage(data.message);

            router.push('/blog');
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error creating blog. Please try again.');
        }
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 -mt-14">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Create Blog Post</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            id="title"
                            name="title"
                            value={title}
                            placeholder="Main Title"
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Write a description..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            rows={5}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </form>
                {message && <p className="mt-6 text-center text-green-500">{message}</p>}
            </div>
        </main>
    );
}
