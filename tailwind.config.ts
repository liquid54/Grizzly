import type { Config } from 'tailwindcss';
import tailwindcssBorderGradientRadius from 'tailwindcss-border-gradient-radius';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/constants/**/*.{js,ts,jsx,tsx}',
        './src/features/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                Roboto: ['var(--font-roboto)'],
                'Roboto-Medium': ['var(--font-roboto)'],
                'Roboto-Bold': ['var(--font-roboto)'],
            },
            borderGradient: {
                colors: {
                    blue: ['#29BBDF', '#008AAC'],
                },
            },
        },
    },
    plugins: [tailwindcssBorderGradientRadius],
};

export default config;
