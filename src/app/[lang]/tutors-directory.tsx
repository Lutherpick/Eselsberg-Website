// src/app/[lang]/tutors-directory.tsx
import Link from "next/link";

import { EBS_API_BASE } from "@/lib/ebs";

type Tutor = {
    tutor: string;
    name: string;
    zinr: string;
    email: string | null;
};

type TutorsApiResponse = {
    ok: true;
    updated_at?: string;
    count: number;
    tutors: Tutor[];
};

async function fetchTutorsPreview(): Promise<TutorsApiResponse | null> {
    const res = await fetch(`${EBS_API_BASE}/tutors_api.php`, {
        cache: "no-store",
        redirect: "follow",
    });
    if (!res.ok) return null;

    const json = (await res.json()) as any;
    const tutors = Array.isArray(json)
        ? json
        : Array.isArray(json?.tutors)
          ? json.tutors
          : [];

    return {
        ok: true,
        updated_at: json.updated_at,
        count: Number(json.count ?? tutors.length ?? 0),
        tutors: tutors as Tutor[],
    };
}

/**
 * Homepage widget: shows a small preview list and links to the full tutors page.
 */
export default async function TutorsDirectory({ lang }: { lang: "en" | "de" }) {
    const isDe = lang === "de";
    const data = await fetchTutorsPreview();

    const tutors = data?.tutors ?? [];
    const count = data?.count ?? tutors.length ?? 0;
    const sample = tutors.slice(0, 6);

    return (
        <section className="border-t border-slate-200/80 pt-8 dark:border-white/10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <p className="section-label">{isDe ? "Kontakt" : "Contacts"}</p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                        {isDe ? "Aktuelle Tutor-Liste" : "Current tutor list"}
                    </h2>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                        {isDe
                            ? "Kurze Vorschau (aktuell aus der Datenbank)."
                            : "Quick preview (latest from the database)."}
                    </p>
                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                        {isDe ? "Angezeigt:" : "Showing:"} {count}{" "}
                        {isDe ? "Tutor:innen" : "tutors"}
                    </p>
                </div>

                <Link
                    href={`/${lang}/tutors`}
                    className="w-fit rounded-full border border-primary/20 px-4 py-2 font-sans text-sm font-semibold text-primary transition hover:bg-primary hover:text-white dark:border-secondary/40 dark:text-secondary"
                >
                    {isDe ? "Vollständige Liste öffnen" : "Open full list"}
                </Link>
            </div>

            {sample.length === 0 ? (
                <div className="mt-6 border-t border-slate-200 pt-4 text-sm text-slate-700 dark:border-white/10 dark:text-slate-200">
                    {isDe ? "Keine Daten." : "No data."}
                </div>
            ) : (
                <ul className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {sample.map((p) => (
                        <li
                            key={`${p.tutor}-${p.email ?? ""}-${p.zinr}-${p.name}`}
                            className="border-t border-slate-200 pt-4 dark:border-white/10"
                        >
                            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                                {p.name}
                            </div>
                            <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                                {p.tutor}
                            </div>
                            <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                                {isDe ? "Zimmer:" : "Room:"} {p.zinr}
                            </div>

                            {p.email ? (
                                <a
                                    href={`mailto:${p.email}`}
                                    className="mt-2 inline-block text-xs text-slate-700 underline-offset-4 hover:underline dark:text-slate-200"
                                >
                                    {p.email}
                                </a>
                            ) : null}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
