export default function Footer() {
    return (
        <footer className="border-t border-gray-700 py-6 text-center text-sm font-body text-gray-400">
            © 2002 – 2025 Eselsbergsteige ·{' '}
            <a href="/terms" className="underline hover:text-white">Terms</a> ·{' '}
            <a href="/privacy" className="underline hover:text-white">Privacy</a>
        </footer>
    );
}