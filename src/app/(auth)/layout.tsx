import AuthLayout from '@/components/layouts/AuthLayout';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthLayout>
            <main className='max-w-[500px] w-full m-auto py-13 px-4 z-[1]'>
                {children}
            </main>
        </AuthLayout>
    );
}
