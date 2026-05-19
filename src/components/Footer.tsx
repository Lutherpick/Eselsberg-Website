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
        <footer className="border-t border-gray-200 dark:border-gray-800 py-4 text-center text-xs text-gray-600 dark:text-gray-400">
            © 2002 – {year} Eselsbergsteige ·{" "}
            <Link
                href={`/${lang}/terms`}
                className="underline underline-offset-4 hover:text-gray-800 dark:hover:text-gray-200"
            >
                {termsLabel}
            </Link>{" "}
            ·{" "}
            <Link
                href={`/${lang}/privacy`}
                className="underline underline-offset-4 hover:text-gray-800 dark:hover:text-gray-200"
            >
                {privacyLabel}
            </Link>
        </footer>
    );
}
