'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="
        p-2 rounded-full
        bg-white bg-opacity-20 hover:bg-opacity-40
        transition
      "
        >
            {theme === 'dark' ? (
                <SunIcon className="h-6 w-6 text-white" />
            ) : (
                <MoonIcon className="h-6 w-6 text-white" />
            )}
        </button>
    );
}
