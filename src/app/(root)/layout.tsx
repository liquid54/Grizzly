import '../globals.css'
import Header from "@/components/Main/Header";
import Footer from "@/components/Main/Footer";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}