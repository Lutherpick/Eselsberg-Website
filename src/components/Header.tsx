'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

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
    const currentLang = segments[0] === 'de' ? 'de' : 'en';
    const currentPageSlug = segments[1] ?? '';

    return (
        <header className="sticky top-0 z-40 border-b border-white/50 bg-white/85 text-slate-900 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85 dark:text-white">
            <div className="container mx-auto flex flex-col gap-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center justify-between gap-4">
                    <Link href={`/${currentLang}`} className="group flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white shadow-lg shadow-primary/20">
                            EBS
                        </span>
                        <span>
                            <span className="block font-sans text-base font-semibold leading-tight lg:text-lg">
                                Eselsbergsteige
                            </span>
                            <span className="block text-xs uppercase tracking-[0.22em] text-slate-500 group-hover:text-primary dark:text-slate-400">
                                Dormitory
                            </span>
                        </span>
                    </Link>

                    <div className="lg:hidden">
                        <ThemeToggle />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <nav className="flex max-w-full gap-2 overflow-x-auto rounded-full border border-slate-200/80 bg-white/70 p-1 text-sm shadow-inner dark:border-white/10 dark:bg-white/5">
                        {NAV_ITEMS.map(({ label, slug }) => {
                            const href = slug ? `/${currentLang}/${slug}` : `/${currentLang}`;
                            const isActive = slug === currentPageSlug;

                            return (
                                <Link
                                    key={label}
                                    href={href}
                                    className={
                                        'whitespace-nowrap rounded-full px-3 py-2 font-sans transition ' +
                                        (isActive
                                            ? 'bg-primary text-white shadow-sm'
                                            : 'text-slate-700 hover:bg-secondary/20 hover:text-primary dark:text-slate-200 dark:hover:text-secondary')
                                    }
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="hidden lg:block">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
}
