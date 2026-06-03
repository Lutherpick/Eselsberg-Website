"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function detectLang(pathname: string): "en" | "de" {
    const seg = pathname.split("/").filter(Boolean)[0];
    return seg === "de" ? "de" : "en";
}

export default function Footer() {
    const pathname = usePathname() || "/";
    const lang = detectLang(pathname);
    const year = new Date().getFullYear();

    const termsLabel = lang === "de" ? "Impressum" : "Terms and Conditions";
    const privacyLabel = lang === "de" ? "Datenschutz" : "Privacy Policy";

    return (
        <footer className="border-t border-slate-200/70 bg-white/70 py-8 text-center font-sans text-xs text-slate-600 backdrop-blur dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-400">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 sm:flex-row">
                <span>© 2002 - {year} Eselsbergsteige</span>
                <span className="flex gap-4">
                    <Link
                        href={`/${lang}/terms`}
                        className="underline underline-offset-4 hover:text-primary dark:hover:text-secondary"
                    >
                        {termsLabel}
                    </Link>
                    <Link
                        href={`/${lang}/privacy`}
                        className="underline underline-offset-4 hover:text-primary dark:hover:text-secondary"
                    >
                        {privacyLabel}
                    </Link>
                </span>
            </div>
        </footer>
    );
}
