import './globals.css';
import { Poppins, Unbounded } from 'next/font/google';
import localFont from 'next/font/local';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
});

const unbounded = Unbounded({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-unbounded',
});

const mont = localFont({
    src: [
        {
            path: '../../public/fonts/Mont-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Mont-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-mont',
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body
                className={`flex flex-col w-full min-h-screen ${poppins.variable} ${mont.variable} ${unbounded.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
