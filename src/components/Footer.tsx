export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-700 py-4 text-center text-xs text-gray-600 dark:text-gray-400">
            © 2002 – 2025 Eselsbergsteige ·{' '}
            <a href="/terms" className="underline hover:text-gray-800 dark:hover:text-gray-200">Terms</a>{' '}
            ·{' '}
            <a href="/privacy" className="underline hover:text-gray-800 dark:hover:text-gray-200">Privacy</a>
        </footer>
    );
}
