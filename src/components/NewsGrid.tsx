import "server-only";
import Link from "next/link";
import { getOrigin } from "@/lib/origin";

type NewsItem = {
    date: string;
    title: string;
    body: string;
};

type Appointment = {
    date: string;
    title: string;
    body: string;
};

async function fetchNews(lang: "en" | "de", limit = 6) {
    const origin = await getOrigin();
    const res = await fetch(new URL(`/api/news?lang=${lang}&limit=${limit}`, origin), {
        cache: "no-store",
    });
    if (!res.ok) return [] as NewsItem[];
    return (await res.json()) as NewsItem[];
}

async function fetchAppointments(lang: "en" | "de", limit = 5) {
    const origin = await getOrigin();
    const res = await fetch(new URL(`/api/appointments?lang=${lang}&limit=${limit}`, origin), {
        cache: "no-store",
    });
    if (!res.ok) return [] as Appointment[];
    return (await res.json()) as Appointment[];
}

export default async function NewsGrid({ lang }: { lang: "en" | "de" }) {
    const [news, appts] = await Promise.all([fetchNews(lang, 6), fetchAppointments(lang, 5)]);

    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">{lang === "de" ? "News" : "News"}</h2>
                    <Link className="text-sm underline underline-offset-4" href={`/${lang}/news`}>
                        {lang === "de" ? "Alle ansehen" : "View all"}
                    </Link>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {news.map((n) => (
                        <Link
                            key={`${n.date}-${n.title}`}
                            href={`/${lang}/news/${n.date}-${n.title.toLowerCase().replace(/\s+/g, "-")}`}
                            className="rounded-xl border bg-white/70 dark:bg-white/5 p-4 hover:shadow-sm transition"
                        >
                            <div className="text-xs text-black/60 dark:text-white/60">{n.date}</div>
                            <div className="mt-1 font-semibold">{n.title}</div>
                            <div className="mt-2 text-sm text-black/70 dark:text-white/70 line-clamp-3">
                                {n.body}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur p-6">
                <h2 className="text-xl font-semibold">{lang === "de" ? "Termine" : "Appointments"}</h2>
                <div className="mt-4 space-y-3">
                    {appts.map((a) => (
                        <div key={`${a.date}-${a.title}`} className="rounded-xl border bg-white/70 dark:bg-white/5 p-4">
                            <div className="text-xs text-black/60 dark:text-white/60">{a.date}</div>
                            <div className="mt-1 font-semibold">{a.title}</div>
                            <div className="mt-2 text-sm text-black/70 dark:text-white/70 line-clamp-3">
                                {a.body}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
