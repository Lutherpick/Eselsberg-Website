'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import SidebarButton from './SidebarButton';

export default function Header() {
    return (
        <header className="bg-gray-800  text-white py-4 shadow-md">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-semibold">
                    Eselsbergsteige Dormitory
                </Link>

                <div className="flex items-center space-x-6">
                    <ThemeToggle />
                    <SidebarButton />
                </div>
            </div>
        </header>
    );
}
