import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import './globals.css';

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
});

export const mont = localFont({
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
