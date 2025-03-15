import Footer from '@/components/Main/Footer';
import Header from "@/components/Main/Header";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}
