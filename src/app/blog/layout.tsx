import { ClerkLoaded } from "@clerk/nextjs";
import Header from "@/components/header";
import Footer from "@/components/footer";

function BlogLayout({ children }: {children: React.ReactNode}) {
    return(
        <ClerkLoaded>
            <div>
                <Header />
                {children}
                <Footer />
            </div>
        </ClerkLoaded>
    )
}

export default BlogLayout;