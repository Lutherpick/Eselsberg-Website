import "server-only";
import type { Metadata } from "next";
import Link from "next/link";
import { EBS_API_BASE } from "@/lib/ebs";

type NewsItem = {
    date: string;
    title: string;
    body?: string | null;
    description?: string | null;
};

export const dynamic = "force-dynamic";

function slugify(title: string) {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

async function fetchNews(lang: "en" | "de", limit = 20): Promise<NewsItem[]> {
    const url = `${EBS_API_BASE}/news_api.php?lang=${encodeURIComponent(lang)}&limit=${limit}`;
    const res = await fetch(url, {
        cache: "no-store",
        redirect: "follow",
    });
    if (!res.ok) return [];
    return (await res.json()) as NewsItem[];
}

function summary(item: NewsItem) {
    return item.body ?? item.description ?? "";
}

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang: langParam } = await params;
    const lang = langParam === "de" ? "de" : "en";

    return {
        title: "News – Eselsbergsteige",
        description:
            lang === "de"
                ? "Aktuelle News und Ankündigungen rund um das Wohnheim Eselsbergsteige."
                : "News and announcements related to Eselsbergsteige dormitory.",
    };
}

export default async function NewsPage({
                                           params,
                                       }: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam === "de" ? "de" : "en";
    const isDe = lang === "de";

    const items = await fetchNews(lang, 20);

    return (
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-6">
            <header className="space-y-2">
                <h1 className="text-3xl font-semibold">News</h1>
                <p className="text-sm text-black/60 dark:text-white/60 max-w-3xl">
                    {isDe
                        ? "Hier findest du die aktuellen Ankündigungen aus dem Wohnheim."
                        : "Here you can find the latest announcements from the dormitory."}
                </p>
            </header>

            {items.length === 0 ? (
                <div className="rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur p-6 text-sm text-black/70 dark:text-white/70">
                    {isDe ? "Keine News gefunden." : "No news found."}
                </div>
            ) : (
                <ul className="grid gap-4 md:grid-cols-2">
                    {items.map((n) => {
                        const slug = `${n.date}-${slugify(n.title)}`;
                        return (
                            <li key={`${n.date}-${n.title}`}>
                                <Link
                                    href={`/${lang}/news/${slug}`}
                                    className="block rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur p-6 hover:shadow-sm transition"
                                >
                                    <div className="text-xs text-black/60 dark:text-white/60">{n.date}</div>
                                    <div className="mt-2 text-lg font-semibold">{n.title}</div>
                                    <div className="mt-3 text-sm text-black/70 dark:text-white/70 line-clamp-4">
                                        {summary(n)}
                                    </div>
                                    <div className="mt-4 text-sm text-blue-600 dark:text-blue-400 underline underline-offset-4">
                                        {isDe ? "Mehr lesen" : "Read more"}
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </main>
    );
}
