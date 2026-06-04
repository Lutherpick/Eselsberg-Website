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
        <header className="relative z-30 border-b border-slate-200/70 bg-[var(--bg)] text-slate-900 dark:border-white/10 dark:text-white">
            <div className="container mx-auto flex flex-col gap-2 px-4 py-2 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center justify-between gap-3">
                    <Link href={`/${currentLang}`} className="group flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-xs font-bold text-white">
                            EBS
                        </span>
                        <span>
                            <span className="block font-sans text-sm font-semibold leading-tight md:text-base">
                                Eselsbergsteige
                            </span>
                            <span className="hidden text-[10px] uppercase tracking-[0.18em] text-slate-500 group-hover:text-primary dark:text-slate-400 sm:block">
                                Dormitory
                            </span>
                        </span>
                    </Link>

                    <div className="md:hidden">
                        <ThemeToggle />
                    </div>
                </div>

                <div className="flex min-w-0 items-center gap-3">
                    <nav className="flex max-w-full gap-1 overflow-x-auto text-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {NAV_ITEMS.map(({ label, slug }) => {
                            const href = slug ? `/${currentLang}/${slug}` : `/${currentLang}`;
                            const isActive = slug === currentPageSlug;

                            return (
                                <Link
                                    key={label}
                                    href={href}
                                    className={
                                        'whitespace-nowrap rounded-full px-2.5 py-1.5 font-sans transition md:px-3 ' +
                                        (isActive
                                            ? 'bg-primary/10 text-primary dark:bg-secondary/15 dark:text-secondary'
                                            : 'text-slate-700 hover:bg-slate-200/70 hover:text-primary dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-secondary')
                                    }
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
}
