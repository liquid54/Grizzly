import Header from '@/components/Header/Header';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header isMain={true} />
            <main className='w-full flex-1 max-w-[1920px] mx-auto pt-[30px] pb-[50px]  px-[16px] md:px-[32px] lg:pl-[163px] lg:pr-[30px]'>
                {children}
            </main>
        </>
    );
}
