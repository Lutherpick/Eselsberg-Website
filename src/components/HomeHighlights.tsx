import Link from "next/link";

const COPY = {
    en: {
        label: "At a glance",
        title: "Useful pieces of dorm life, easy to find.",
        intro:
            "The website should help residents and visitors answer practical questions quickly, while still feeling like the Eselsbergsteige community.",
        cards: [
            {
                title: "Dormitory basics",
                text: "Rooms, shared spaces, waste separation, surroundings, and everyday housing information.",
                href: "/en/dormitory",
            },
            {
                title: "Internet help",
                text: "Network access, eduroam guidance, and what to do when your connection needs support.",
                href: "/en/internet",
            },
            {
                title: "Tutor contacts",
                text: "Find the right student tutor for questions about events, rooms, tools, network, and more.",
                href: "/en/tutors",
            },
        ],
    },
    de: {
        label: "Auf einen Blick",
        title: "Wichtige Infos zum Wohnheim, schnell auffindbar.",
        intro:
            "Die Website soll praktische Fragen schnell beantworten und gleichzeitig nach Eselsbergsteige-Gemeinschaft wirken.",
        cards: [
            {
                title: "Wohnheim-Infos",
                text: "Zimmer, Gemeinschaftsraeume, Muelltrennung, Umgebung und wichtige Alltagsinformationen.",
                href: "/de/dormitory",
            },
            {
                title: "Internet-Hilfe",
                text: "Netzzugang, eduroam-Hinweise und Hilfe, falls deine Verbindung Unterstuetzung braucht.",
                href: "/de/internet",
            },
            {
                title: "Tutor-Kontakte",
                text: "Finde die passenden Tutor:innen fuer Events, Raeume, Werkstatt, Netzwerk und mehr.",
                href: "/de/tutors",
            },
        ],
    },
} as const;

export default function HomeHighlights({ lang }: { lang: "en" | "de" }) {
    const copy = COPY[lang];

    return (
        <section id="info" className="glass-card overflow-hidden p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div>
                    <p className="section-label">{copy.label}</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                        {copy.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300 md:text-base">
                        {copy.intro}
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {copy.cards.map((card) => (
                        <Link
                            key={card.href}
                            href={card.href}
                            className="group rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
                        >
                            <div className="mb-4 h-1.5 w-12 rounded-full bg-secondary transition group-hover:w-16" />
                            <h3 className="font-sans text-base font-semibold text-slate-950 dark:text-white">
                                {card.title}
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                {card.text}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
