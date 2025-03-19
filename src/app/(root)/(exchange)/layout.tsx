import ExchangeLayout from '@/components/layouts/ExchangeLayout';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ExchangeLayout>
            <div>{children}</div>
        </ExchangeLayout>
    );
}
