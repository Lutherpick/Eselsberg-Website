'use client'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
    const { toggle, theme } = useTheme()

    return (
        <button
            onClick={toggle}
            className="px-2 py-1 rounded-full border border-gray-500 dark:border-white text-sm"
        >
            {theme === 'light' ? '🌞' : '🌙'}
        </button>
    )
}
