import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className='flex flex-col w-full min-h-screen'>
                {children}
            </body>
        </html>
    );
}
