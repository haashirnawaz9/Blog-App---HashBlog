'use client';

import { useEffect, useState } from 'react';

interface Blog {
    _id: string;
    title: string;
    description: string;
}

export default function Blog() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        document.title = 'Blogs | HashBlog';

        const fetchBlogs = async () => {
            try {
                const res = await fetch('/api/blog');
                if (!res.ok) throw new Error('Failed to fetch blogs');
                const data = await res.json();
                setBlogs(data.blogs);
                setFilteredBlogs(data.blogs);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setError('Failed to load blogs. Please try again later.');
                setBlogs([]);
                setFilteredBlogs([]);
            }
        };

        fetchBlogs();
    }, []);

    useEffect(() => {
        setFilteredBlogs(
            blogs.filter((blog) =>
                blog.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery, blogs]);

    return (
        <main className="flex min-h-screen flex-col items-center bg-gray-100 p-6">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8 mt-4">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Blogs</h1>
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mb-6 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
                <div className="space-y-4">
                    {error ? (
                        <p className="text-center text-red-500">{error}</p>
                    ) : filteredBlogs.length > 0 ? (
                        filteredBlogs.map((blog) => (
                            <div key={blog._id} className="p-4 border-b border-gray-300">
                                <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
                                <p className="text-gray-600">{blog.description}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No blogs found</p>
                    )}
                </div>
            </div>
        </main>
    );
}
