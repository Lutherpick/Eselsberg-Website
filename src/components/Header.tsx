'use client';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-primary text-white py-4 shadow-md">
            <div className="container flex justify-between items-center">
                <Link href="/" className="text-xl font-semibold font-sans">Eselsbergsteige Dormitory</Link>
                <nav className="space-x-6 text-sm font-sans">
                    {['Home','Internet','Dormitory','Caretakers','Tutors'].map(label => (
                        <Link key={label} href={label === 'Home' ? '/' : `/${label.toLowerCase()}`} className="hover:text-secondary transition">
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}