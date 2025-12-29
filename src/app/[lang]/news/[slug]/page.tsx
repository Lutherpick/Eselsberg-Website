import "server-only";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type NewsItem = {
    date: string;
    title: string;
    description?: string | null;
    link?: string | null;
};

export const dynamic = "force-dynamic";

function parseSlug(slug: string) {
    const date = slug.slice(0, 10);
    return { date };
}

async function fetchNews(lang: "en" | "de", limit = 200): Promise<NewsItem[]> {
    const res = await fetch(`/api/news?lang=${lang}&limit=${limit}`, { cache: "no-store" });
    if (!res.ok) return [];
    return (await res.json()) as NewsItem[];
}

async function findItem(lang: "en" | "de", slug: string): Promise<NewsItem | null> {
    const { date } = parseSlug(slug);
    const items = await fetchNews(lang, 200);
    const candidates = items.filter((x) => x.date === date);
    if (candidates.length === 0) return null;
    return candidates[0] ?? null;
}

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ lang: "en" | "de"; slug: string }>;
}): Promise<Metadata> {
    const { lang, slug } = await params;
    const item = await findItem(lang, slug);

    if (!item) {
        return {
            title: lang === "de" ? "News – Nicht gefunden" : "News – Not found",
            robots: { index: false, follow: false },
        };
    }

    const title = `${item.title} – ${lang === "de" ? "Eselsbergsteige" : "Eselsbergsteige"}`;
    const description =
        item.description?.slice(0, 160) ??
        (lang === "de"
            ? "Aktuelle Informationen rund um das Wohnheim Eselsbergsteige."
            : "Updates and announcements related to Eselsbergsteige dormitory.");

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
        },
    };
}

export default async function NewsItemPage({
                                               params,
                                           }: {
    params: Promise<{ lang: "en" | "de"; slug: string }>;
}) {
    const { lang, slug } = await params;
    const isDe = lang === "de";

    const item = await findItem(lang, slug);
    if (!item) notFound();

    const date = new Date(item.date);

    return (
        <main className="max-w-3xl mx-auto px-4 py-12 space-y-6">
            <Link
                href={`/${lang}/news`}
                className="text-sm text-blue-600 dark:text-blue-400 underline underline-offset-4"
            >
                {isDe ? "← Zurück zu News" : "← Back to news"}
            </Link>

            <header className="space-y-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">{date.toLocaleDateString(lang)}</p>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{item.title}</h1>
            </header>

            {item.description ? (
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed">{item.description}</p>
            ) : (
                <p className="text-gray-600 dark:text-gray-400">{isDe ? "Kein Text verfügbar." : "No text available."}</p>
            )}

            {item.link ? (
                <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-blue-600 dark:text-blue-400 underline underline-offset-4"
                >
                    {isDe ? "Externer Link" : "External link"}
                </a>
            ) : null}
        </main>
    );
}
