'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    return (
        <header className="bg-gray-800  text-white py-4 shadow-md">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-semibold">
                    Eselsbergsteige Dormitory
                </Link>

                <div className="flex items-center space-x-6">
                    <nav className="space-x-6 text-sm">
                        {['Home','Internet','Dormitory','Caretakers','Tutors'].map((l) => (
                            <Link
                                key={l}
                                href={l === 'Home' ? '/' : `/${l.toLowerCase()}`}
                                className="hover:text-secondary transition"
                            >
                                {l}
                            </Link>
                        ))}
                    </nav>

                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}