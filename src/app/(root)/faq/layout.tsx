import FaqLayout from "@/components/layouts/FaqLayout";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <FaqLayout>
            <div className='z-[1]'>{children}</div>
        </FaqLayout>
    );
}