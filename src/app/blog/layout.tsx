import { ClerkLoaded } from "@clerk/nextjs";
import Header from "@/components/header";

function BlogLayout({ children }: {children: React.ReactNode}) {
    return(
        <ClerkLoaded>
            <div>
                <Header />
                {children}
            </div>
        </ClerkLoaded>
    )
}

export default BlogLayout;