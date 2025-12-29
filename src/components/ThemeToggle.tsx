// src/components/ThemeToggle.tsx
"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle(): JSX.Element {
    const { toggle, theme } = useTheme();

    return (
        <button
            type="button"
            onClick={toggle}
            className="px-2 py-1 rounded-full"
            aria-label="Toggle theme"
        >
            {theme === "light" ? "☀️" : "🌙"}
        </button>
    );
}
