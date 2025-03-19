import AboutLayout from "@/components/layouts/AboutLayout";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <AboutLayout>
            <div className='z-[1]'>{children}</div>
        </AboutLayout>
    );
}