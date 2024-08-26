import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
    return (
        <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 text-center">
            <section className="relative w-full max-w-6xl p-8 md:p-16 bg-white shadow-2xl rounded-xl flex flex-col md:flex-row items-center justify-center overflow-hidden mt-16">
                <div className="relative flex-1 z-10 md:pr-8 mb-8 md:mb-0">
                    <div className="mb-8 flex flex-row items-center justify-center space-x-5">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900">
                            HashBlog
                        </h1>
                        <UserButton />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                        Create. Share. Inspire.
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                        Elevate your storytelling with a platform designed for creative minds. Start blogging effortlessly today.
                    </p>
                    <Button className="bg-blue-900 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
                        <Link href="/blog">Get Started</Link>
                    </Button>
                </div>
                <div className="relative flex-1 flex justify-center">
                    <Image
                        src="/HashBlog.jpeg" 
                        alt="Hero Photo"
                        width={600}
                        height={400}
                        className="object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </section>
        </main>
    );
}
