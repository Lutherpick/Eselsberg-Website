"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
    const { toggle, theme } = useTheme();

    return (
        <button
            type="button"
            onClick={toggle}
            className="rounded-full border border-slate-200 bg-white px-3 py-2 font-sans text-xs font-semibold text-slate-700 shadow-sm transition hover:border-primary hover:text-primary dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
            aria-label="Toggle theme"
        >
            {theme === "light" ? "Light" : "Dark"}
        </button>
    );
}
