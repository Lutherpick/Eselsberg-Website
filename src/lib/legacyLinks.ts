// src/lib/legacyLinks.ts
export const LEGACY_EXTERNAL = {
    eduroamInfo: "https://www.uni-ulm.de/einrichtungen/kiz/service-katalog/netze/wlan/eduroam/",
    studierendenwerkRoot: "https://www.studierendenwerk-ulm.de/en/",
    studierendenwerkEselsberg:
        "https://www.studierendenwerk-ulm.de/wohnen/wohnanlagen/wohnheim-eselsberg/",
    ding: "https://ding.eu/",
    rundfunkPay: "https://www.rundfunkbeitrag.de",
    rundfunkEnglish: "https://www.rundfunkbeitrag.de/welcome/englisch/index_ger.html",
} as const;

export type Lang = "en" | "de";

/**
 * Converts old PHP-style links into your new Next.js routes.
 * Examples:
 *  - impressum?lang=de -> /de/terms
 *  - datenschutz?lang=en -> /en/privacy
 *  - /party/ -> /en/party-room
 */
export function mapLegacyHref(href: string, lang: Lang): string {
    const raw = (href ?? "").trim();
    if (!raw) return `/${lang}`;

    // keep these as-is
    if (raw.startsWith("mailto:") || raw.startsWith("tel:") || raw.startsWith("#")) return raw;

    // normalize
    const noHost = raw.replace(/^https?:\/\/[^/]+/i, "");
    const clean = noHost.replace(/^\.\//, "").replace(/^\/+/, "/");

    // old footer routes
    if (/^\/?impressum/i.test(clean) || /^impressum/i.test(raw)) return `/${lang}/terms`;
    if (/^\/?datenschutz/i.test(clean) || /^datenschutz/i.test(raw)) return `/${lang}/privacy`;

    // old party directory
    if (/^\/party\/?$/i.test(clean) || /^\/party\//i.test(clean)) return `/${lang}/party-room`;

    // old site page router words (optional but helpful)
    if (/^\/?caretakers/i.test(clean) || /^caretakers/i.test(raw)) return `/${lang}/caretakers`;
    if (/^\/?net/i.test(clean) || /^net/i.test(raw)) return `/${lang}/internet`;
    if (/^\/?housing/i.test(clean) || /^housing/i.test(raw)) return `/${lang}/dormitory`;
    if (/^\/?tutors/i.test(clean) || /^tutors/i.test(raw)) return `/${lang}/tutors`;

    // already looks like a normal internal path
    if (clean.startsWith("/")) return `/${lang}${clean === "/" ? "" : clean}`;

    // if someone wrote "www.example.com" without protocol
    if (/^www\./i.test(raw)) return `https://${raw}`;

    return raw;
}

export function isExternalHref(href: string): boolean {
    const h = (href ?? "").trim().toLowerCase();
    return (
        h.startsWith("http://") ||
        h.startsWith("https://") ||
        h.startsWith("mailto:") ||
        h.startsWith("tel:")
    );
}
