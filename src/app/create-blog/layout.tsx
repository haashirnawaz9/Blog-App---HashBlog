
import Footer from "@/components/footer";
import Header from "@/components/header";

function BlogLayout({ children }: {children: React.ReactNode}) {
    return(
            <div>
                <Header />
                {children}
                <Footer />
            </div>
    )
}

export default BlogLayout;