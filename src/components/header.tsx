import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

function Header() {
  return (
    <div className="flex justify-between bg-white h-[60px]">
        <div className="flex items-center text-black">
            <Link href='/'>
                <h1 className="ml-7 font-semibold">HashBlog</h1>
            </Link>
        </div>
        <div className="flex items-center space-x-4 font-medium mr-8 text-black">
            <Link href='/blog'>Blogs</Link>
            <Link href='/create-blog'>Create Blog</Link>
            <UserButton />
        </div>
    </div>
  )
}

export default Header;