import "server-only";

type Lang = "en" | "de";

type Role = {
    id: string;
    title: { en: string; de: string };
    lead: { en: string; de: string };
    bullets: { en: string[]; de: string[] };
};

const ROLES: Role[] = [
    {
        id: "spokesmen",
        title: { en: "Spokespeople", de: "Heimsprecher" },
        lead: {
            en: "Represent the dormitory and coordinate bigger topics.",
            de: "Vertreten das Wohnheim und koordinieren größere Themen.",
        },
        bullets: {
            en: [
                "First contact for bigger dorm issues or proposals.",
                "Represent the dormitory towards Studierendenwerk, university, and neighbours.",
                "Organise the dormitory meeting each semester (new tutor elections, important topics).",
            ],
            de: [
                "Erste Anlaufstelle für größere Probleme oder gute Ideen rund ums Wohnheim.",
                "Vertreten das Wohnheim gegenüber Studierendenwerk, Universität und Nachbarn.",
                "Organisieren die Heimversammlung zu Beginn jedes Semesters (Tutor-Wahl, wichtige Themen).",
            ],
        },
    },
    {
        id: "bar",
        title: { en: "Bar tutors", de: "Bar-Tutoren" },
        lead: {
            en: "Run the dormitory bar and related events.",
            de: "Betreuen die Wohnheim-Bar und Events.",
        },
        bullets: {
            en: [
                "Coordinate opening hours, drinks, music, and specials.",
                "Organise bar evenings and community events.",
                "Contact them if you want to help behind the counter or propose an event.",
            ],
            de: [
                "Organisieren Öffnungszeiten, Einkauf, Musik und Specials.",
                "Gestalten Bar-Abende und Gemeinschafts-Events.",
                "Kontakt, wenn du mithelfen oder einen Abend/Event vorschlagen möchtest.",
            ],
        },
    },
    {
        id: "network",
        title: { en: "Network tutors", de: "Netzwerk-Tutoren" },
        lead: {
            en: "Help with eduroam setup and network access issues.",
            de: "Helfen bei eduroam und Netzwerkproblemen.",
        },
        bullets: {
            en: [
                "Support with eduroam setup and connection troubleshooting.",
                "Help if your connection is blocked or not working.",
                "Coordinate dorm network topics with the relevant contacts.",
            ],
            de: [
                "Unterstützen bei eduroam-Einrichtung und Verbindungssuche.",
                "Helfen, wenn dein Anschluss gesperrt ist oder nicht funktioniert.",
                "Koordinieren Netzwerkthemen im Wohnheim mit den zuständigen Stellen.",
            ],
        },
    },
    {
        id: "international",
        title: { en: "International & event tutors", de: "International & Event-Tutoren" },
        lead: {
            en: "Support international residents and organise events.",
            de: "Unterstützen internationale Bewohner und organisieren Events.",
        },
        bullets: {
            en: [
                "Support for questions about university life, authorities, and everyday life in Germany.",
                "Organise parties, movie nights, sports, and game activities.",
                "Good contact if you want to participate or help organise activities.",
            ],
            de: [
                "Unterstützung bei Fragen zu Uni, Behörden und Alltag in Deutschland.",
                "Organisieren Partys, Filmabende, Sport- und Spieleaktionen.",
                "Kontakt, wenn du mitmachen oder bei Aktivitäten helfen möchtest.",
            ],
        },
    },
    {
        id: "other",
        title: { en: "Other responsibilities", de: "Weitere Zuständigkeiten" },
        lead: {
            en: "Tutors also take care of shared rooms and equipment.",
            de: "Tutoren kümmern sich auch um Gemeinschaftsräume und Ausstattung.",
        },
        bullets: {
            en: [
                "Rooms like music room, tools room, ovens, billiard room, fitness room, party room, and more.",
                "Ensure cleanliness, rule compliance, and that reservations work properly.",
                "Contact the responsible group if a room is not clean, broken, or reservation rules are unclear.",
            ],
            de: [
                "Zuständigkeiten z. B. für Musikraum, Werkzeugraum, Backöfen, Billardraum, Fitnessraum, Partyraum u. a.",
                "Achten auf Sauberkeit, Regel-Einhaltung und funktionierende Reservierungen.",
                "Kontakt bei Unklarheiten, Defekten oder Problemen mit Reservierungen.",
            ],
        },
    },
];

function Icon({ id }: { id: Role["id"] }) {
    // Inline SVGs to avoid extra deps
    const common =
        "h-5 w-5 text-gray-900/80 dark:text-gray-100/80 group-hover:text-gray-900 dark:group-hover:text-gray-100";
    switch (id) {
        case "network":
            return (
                <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 12v6" />
                    <path d="M8 18h8" />
                    <path d="M2 10a10 10 0 0 1 20 0" />
                    <path d="M6 10a6 6 0 0 1 12 0" />
                    <path d="M10 10a2 2 0 0 1 4 0" />
                </svg>
            );
        case "bar":
            return (
                <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 2h8" />
                    <path d="M10 2v4l-3 3a6 6 0 0 0 4 10h2a6 6 0 0 0 4-10l-3-3V2" />
                    <path d="M9 13h6" />
                </svg>
            );
        case "international":
            return (
                <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18" />
                    <path d="M12 3c2.5 2.8 4 5.9 4 9s-1.5 6.2-4 9c-2.5-2.8-4-5.9-4-9s1.5-6.2 4-9z" />
                </svg>
            );
        case "other":
            return (
                <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="M4.93 4.93l1.41 1.41" />
                    <path d="M17.66 17.66l1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="M4.93 19.07l1.41-1.41" />
                    <path d="M17.66 6.34l1.41-1.41" />
                    <path d="M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10z" />
                </svg>
            );
        default:
            return (
                <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 12a5 5 0 1 0-5-5" />
                    <path d="M12 12a5 5 0 1 0 5-5" />
                    <path d="M6 20a6 6 0 0 1 12 0" />
                </svg>
            );
    }
}

export default function TutorRoles({ lang }: { lang: Lang }) {
    const isDe = lang === "de";

    return (
        <section className="relative overflow-hidden rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-950 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)]">
            {/* Soft background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-teal-500/20 via-sky-500/10 to-indigo-500/10 blur-3xl" />
                <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/15 via-sky-500/10 to-teal-500/10 blur-3xl" />
                <div className="absolute inset-0 [background-image:radial-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:16px_16px] dark:[background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)]" />
            </div>

            <div className="relative p-6 sm:p-8 lg:p-10 space-y-8">
                {/* Hero */}
                <header className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-gray-200/70 dark:border-gray-800/70 bg-white/60 dark:bg-gray-950/60 px-3 py-1 text-xs font-medium text-gray-800 dark:text-gray-200 backdrop-blur">
                        <span className="h-2 w-2 rounded-full bg-teal-500" />
                        {isDe ? "Wohnheim Tutors" : "Dormitory tutors"}
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                        {isDe ? "Tutoren im Wohnheim" : "Tutors in the dormitory"}
                    </h1>

                    <p className="max-w-3xl text-gray-800 dark:text-gray-200 leading-relaxed">
                        {isDe
                            ? "Tutoren sind Studierende im Wohnheim, die sich ehrenamtlich um verschiedene Aufgaben kümmern. Unten findest du die Bereiche – und danach die aktuelle Kontaktliste."
                            : "Tutors are students living in the dormitory who volunteer for different tasks. Below you’ll find the areas — and then the current contact list."}
                    </p>
                </header>

                {/* Quick links */}
                <nav aria-label={isDe ? "Schnellnavigation" : "Quick navigation"}>
                    <div className="rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white/70 dark:bg-gray-950/70 backdrop-blur p-4">
                        <div className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                            {isDe ? "Schnellzugriff" : "Quick links"}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {ROLES.map((r) => (
                                <a
                                    key={r.id}
                                    href={`#${r.id}`}
                                    className="group inline-flex items-center gap-2 rounded-full border border-gray-300/70 dark:border-gray-700/70 bg-white/70 dark:bg-gray-950/70 px-3 py-1.5 text-xs font-medium text-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                >
                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900">
                                        <Icon id={r.id} />
                                    </span>
                                    {isDe ? r.title.de : r.title.en}
                                </a>
                            ))}
                            <a
                                href="#tutor-list"
                                className="inline-flex items-center gap-2 rounded-full border border-gray-300/70 dark:border-gray-700/70 bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-3 py-1.5 text-xs font-semibold hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 dark:bg-gray-900/15">
                                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M8 7h12" />
                                        <path d="M8 12h12" />
                                        <path d="M8 17h12" />
                                        <path d="M4 7h.01" />
                                        <path d="M4 12h.01" />
                                        <path d="M4 17h.01" />
                                    </svg>
                                </span>
                                {isDe ? "Kontaktliste" : "Contact list"}
                            </a>
                        </div>
                    </div>
                </nav>

                {/* Roles */}
                <div className="grid gap-4 lg:grid-cols-2">
                    {ROLES.map((r) => (
                        <div key={r.id} id={r.id} className="scroll-mt-24">
                            <div className="rounded-2xl bg-gradient-to-br from-gray-200/60 via-gray-200/30 to-transparent dark:from-gray-800/60 dark:via-gray-800/30 dark:to-transparent p-[1px]">
                                <details
                                    className="group rounded-2xl bg-white/80 dark:bg-gray-950/70 backdrop-blur border border-transparent p-5"
                                    open={r.id === "spokesmen"}
                                >
                                    <summary className="list-none cursor-pointer select-none">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex items-start gap-3 min-w-0">
                                                <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-900">
                                                    <Icon id={r.id} />
                                                </div>
                                                <div className="min-w-0">
                                                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                                                        {isDe ? r.title.de : r.title.en}
                                                    </h2>
                                                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                                                        {isDe ? r.lead.de : r.lead.en}
                                                    </p>
                                                </div>
                                            </div>

                                            <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-300 group-open:rotate-180 transition-transform">
                                                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </span>
                                        </div>
                                    </summary>

                                    <ul className="mt-4 space-y-2 text-sm text-gray-800 dark:text-gray-200">
                                        {(isDe ? r.bullets.de : r.bullets.en).map((b) => (
                                            <li key={b} className="flex gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 flex-none" />
                                                <span className="leading-relaxed">{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white/70 dark:bg-gray-950/70 backdrop-blur p-5 text-sm text-gray-800 dark:text-gray-200">
                    {isDe
                        ? "Tutoren werden auf der Heimversammlung zu Beginn jedes Semesters gewählt. Wenn dich ein Bereich interessiert, kannst du dich dort einbringen oder dich selbst als Tutor aufstellen lassen."
                        : "Tutors are elected at the dormitory meeting at the beginning of each semester. If you’re interested in a role, you can get involved or even stand as a tutor yourself."}
                </div>
            </div>
        </section>
    );
}
