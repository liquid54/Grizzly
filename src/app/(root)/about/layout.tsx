import AboutLayout from "@/components/layouts/AboutLayout";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <AboutLayout>
            <div>{children}</div>
        </AboutLayout>
    );
}