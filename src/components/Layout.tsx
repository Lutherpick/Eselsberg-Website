import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen bg-[var(--bg-light)] dark:bg-[var(--bg-dark)]">
            <Header />
            <main id="main-content" className="flex-grow container py-12">
                {children}
            </main>
            <Footer />
        </div>
    );
}