'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import SidebarButton from './SidebarButton';

const NAV_ITEMS = [
    { label: 'Home', slug: '' },
    { label: 'News', slug: 'news' },
    { label: 'Internet', slug: 'internet' },
    { label: 'Dormitory', slug: 'dormitory' },
    { label: 'Caretakers', slug: 'caretakers' },
    { label: 'Tutors', slug: 'tutors' },
    { label: 'FAQ', slug: 'faq' },
];


export default function Header() {
    const pathname = usePathname() || '/';
    const segments = pathname.split('/').filter(Boolean);

    // First URL segment is the language, default to "en" if not present
    const currentLang = segments[0] === 'de' ? 'de' : 'en';
    const currentPageSlug = segments[1] ?? '';

    return (
        <header className="bg-gray-800 text-white py-4 shadow-md">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href={`/${currentLang}`} className="text-xl font-semibold">
                    Eselsbergsteige Dormitory
                </Link>

                <div className="flex items-center space-x-6">
                    <nav className="hidden lg:flex lg:space-x-6 text-sm">
                        {NAV_ITEMS.map(({ label, slug }) => {
                            const href = slug ? `/${currentLang}/${slug}` : `/${currentLang}`;
                            const isActive = slug === currentPageSlug;

                            return (
                                <Link
                                    key={label}
                                    href={href}
                                    className={
                                        'hover:text-secondary transition ' +
                                        (isActive ? 'font-semibold text-secondary' : '')
                                    }
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </nav>

                    <ThemeToggle />
                    <SidebarButton />
                </div>
            </div>
        </header>
    );
}
