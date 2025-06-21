import './globals.css';
import { ThemeProvider } from 'next-themes';

export const metadata = {
    title: 'Eselsbergsteige Dormitory',
    description: 'Info & resources for residents',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider attribute="class">
            {/* a11y skip link */}
            <a href="#main-content" className="skip-link">
                Skip to content
            </a>

            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
