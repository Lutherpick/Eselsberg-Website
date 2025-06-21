import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main id="main-content" className="flex-grow container py-12">
                {children}
            </main>
            <Footer />
        </div>
    );
}
