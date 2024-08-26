
import Header from "@/components/header";

function BlogLayout({ children }: {children: React.ReactNode}) {
    return(
            <div>
                <Header />
                {children}
            </div>
    )
}

export default BlogLayout;