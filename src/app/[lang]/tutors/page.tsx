import type { Metadata } from "next";

import TutorDirectory, { type Tutor } from "@/components/TutorDirectory";
import TutorRoles from "@/components/TutorRoles";
import { EBS_API_BASE } from "@/lib/ebs";

export const metadata: Metadata = {
    title: "Tutors – Eselsbergsteige Dormitory",
    description: "Contact list and responsibilities of the dormitory tutors.",
};

type TutorsApiResponse =
    | { ok: true; tutors: Tutor[]; count: number; updated_at?: string }
    | { ok: false; error?: string };

async function fetchTutors(): Promise<Tutor[]> {
    const res = await fetch(`${EBS_API_BASE}/tutors_api.php`, {
        cache: "no-store",
        redirect: "follow",
    });

    if (!res.ok) return [];

    const json = (await res.json()) as TutorsApiResponse | Tutor[] | any;

    // Our API returns: { ok: true, tutors: [...] }
    if (json && typeof json === "object" && json.ok === true && Array.isArray(json.tutors)) {
        return json.tutors as Tutor[];
    }

    // Fallback: upstream could be array
    if (Array.isArray(json)) return json as Tutor[];

    return [];
}

export default async function TutorsPage({
                                             params,
                                         }: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam === "de" ? "de" : "en";
    const isDe = lang === "de";

    const tutors = await fetchTutors();

    return (
        <main className="container mx-auto px-6 py-12 space-y-10">
            <header className="space-y-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {isDe ? "Tutor:innen" : "Tutors"}
                </h1>
                <p className="text-gray-800 dark:text-gray-200 max-w-3xl">
                    {isDe
                        ? "Hier findest du die Rollen der Tutor:innen sowie die aktuelle Kontaktliste."
                        : "Here you can find the tutors' roles and the current contact list."}
                </p>
            </header>

            <TutorRoles lang={lang} />

            <section className="rounded-2xl border bg-white/60 dark:bg-white/5 backdrop-blur p-6">
                <h2 className="text-xl font-semibold">{isDe ? "Kontaktliste" : "Contact list"}</h2>
                <p className="mt-1 text-sm text-black/60 dark:text-white/60">
                    {isDe
                        ? "Daten werden live aus der Wohnheim-Datenbank geladen."
                        : "Data is loaded live from the dormitory database."}
                </p>

                <div className="mt-6">
                    <TutorDirectory tutors={tutors} lang={lang} />
                </div>
            </section>
        </main>
    );
}
