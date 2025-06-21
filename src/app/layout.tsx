import './globals.css';

export const metadata = {
    title: 'Eselsbergsteige Dormitory',
    description: 'Resident information, internet setup, and community events',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-light-bg text-fg-light font-body">
        {/* Skip link */}
        <a href="#main-content" className="skip-link">Skip to content</a>

        {children}
        </body>
        </html>
    );
}