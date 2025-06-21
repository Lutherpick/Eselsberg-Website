'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-accent text-white p-4 shadow">
            <div className="container flex justify-between items-center">
                <Link href="/" className="font-semibold text-lg">Eselsbergsteige Dormitory</Link>
                <nav className="space-x-4 text-sm">
                    {['Home', 'Internet', 'Dormitory', 'Caretakers', 'Tutors'].map((label) => (
                        <Link
                            key={label}
                            href={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                            className="hover:text-accent-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-light"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
