import "server-only";
import Link from "next/link";
import { EBS_API_BASE } from "@/lib/ebs";

type NewsItem = {
    date: string;
    title: string;
    body?: string | null;
    description?: string | null;
};

type Appointment = {
    date: string;
    title: string;
    body?: string | null;
    description?: string | null;
};

async function fetchNews(lang: "en" | "de", limit = 6) {
    const url = `${EBS_API_BASE}/news_api.php?lang=${encodeURIComponent(lang)}&limit=${limit}`;
    const res = await fetch(url, {
        cache: "no-store",
        redirect: "follow",
    });
    if (!res.ok) return [] as NewsItem[];
    return (await res.json()) as NewsItem[];
}

async function fetchAppointments(lang: "en" | "de", limit = 5) {
    const url = `${EBS_API_BASE}/appointments_api.php?lang=${encodeURIComponent(lang)}&limit=${limit}`;
    const res = await fetch(url, {
        cache: "no-store",
        redirect: "follow",
    });
    if (!res.ok) return [] as Appointment[];
    return (await res.json()) as Appointment[];
}

function summary(item: NewsItem | Appointment) {
    return item.body ?? item.description ?? "";
}

function slugify(title: string) {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

export default async function NewsGrid({ lang }: { lang: "en" | "de" }) {
    const [news, appts] = await Promise.all([fetchNews(lang, 6), fetchAppointments(lang, 5)]);

    return (
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="glass-card p-6 lg:col-span-2">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="section-label">{lang === "de" ? "Aktuelles" : "Updates"}</p>
                        <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">News</h2>
                    </div>
                    <Link
                        className="rounded-full border border-primary/20 px-4 py-2 font-sans text-sm font-semibold text-primary transition hover:bg-primary hover:text-white dark:border-secondary/40 dark:text-secondary"
                        href={`/${lang}/news`}
                    >
                        {lang === "de" ? "Alle ansehen" : "View all"}
                    </Link>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {news.map((n) => (
                        <Link
                            key={`${n.date}-${n.title}`}
                            href={`/${lang}/news/${n.date}-${slugify(n.title)}`}
                            className="rounded-2xl border border-slate-200 bg-white/80 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                        >
                            <div className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary/70 dark:text-secondary/80">
                                {n.date}
                            </div>
                            <div className="mt-2 font-sans text-lg font-semibold text-slate-950 dark:text-white">
                                {n.title}
                            </div>
                            <div className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                {summary(n)}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="glass-card p-6">
                <p className="section-label">{lang === "de" ? "Kalender" : "Calendar"}</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                    {lang === "de" ? "Termine" : "Appointments"}
                </h2>
                <div className="mt-5 space-y-3">
                    {appts.length === 0 ? (
                        <div className="rounded-2xl border border-dashed border-slate-300 bg-white/50 p-5 text-sm leading-6 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                            {lang === "de"
                                ? "Zurzeit sind keine Termine eingetragen."
                                : "No upcoming appointments are listed right now."}
                        </div>
                    ) : (
                        appts.map((a) => (
                            <div key={`${a.date}-${a.title}`} className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
                                <div className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-primary/70 dark:text-secondary/80">
                                    {a.date}
                                </div>
                                <div className="mt-1 font-sans font-semibold text-slate-950 dark:text-white">
                                    {a.title}
                                </div>
                                <div className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                    {summary(a)}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
