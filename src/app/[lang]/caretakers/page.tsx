// src/app/[lang]/caretakers/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Caretakers – Eselsbergsteige Dormitory",
    description:
        "Information about where to find the caretakers, what they are responsible for, and when to contact them.",
};

export default async function CaretakersPage({
                                                 params,
                                             }: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam === "de" ? "de" : "en";
    const isDe = lang === "de";

    const t = {
        title: isDe ? "Hausmeister" : "Caretakers",
        whereTitle: isDe ? "Wo finde ich die Hausmeister?" : "Where do I find the caretakers?",
        whereText: isDe
            ? "Das Büro von Herrn Brunner und Herrn Steger befindet sich im Erdgeschoss von Block A, Eingang 109. Da du die Hausmeister beim Einzug (oder Auszug) kontaktieren musst, kennen die meisten bereits den Weg dorthin. Es kann vorkommen, dass beide gerade nicht im Büro sind – versuche es dann später noch einmal. Unsere Hausmeister sind freundlich und hilfsbereit und unterstützen dich bei Problemen. Beschreibe dein Anliegen bitte sachlich, höflich und möglichst klar."
            : "The office of Mr. Brunner and Mr. Steger is located on the ground floor of Block A, entrance 109. Since you have to consult the caretakers when you move in (or out), most of you should already know where to find them. It may sometimes happen that both caretakers are away from the office, so try again later. Our caretakers are friendly and helpful and support you with your problems. Please be reasonable, polite and describe your problem clearly.",
        hoursTitle: isDe ? "Sprechzeiten" : "Working hours",
        days: isDe ? "Montag bis Freitag" : "Monday to Friday",
        hours1: isDe ? "07:00 – 12:00 Uhr" : "07:00 – 12:00",
        hours2: isDe ? "13:00 – 15:20 Uhr" : "13:00 – 15:20",
        servicesTitle: isDe
            ? "Die Hausmeister bieten unter anderem folgende Leistungen an"
            : "The caretakers provide the following services",
        services: isDe
            ? [
                "Kleinreparaturen",
                "Türöffnung in Notfällen (während der Arbeitszeiten)",
                "Beauftragung von Handwerkern (Sanitär, Elektrik, etc.)",
                "Ausgabe von Leuchtmitteln",
                "Luftfilter für Bad/WC werden einmal pro Semester gewechselt (werden von den Hausmeistern bereitgestellt)",
            ]
            : [
                "Small repairs",
                "Open your door in emergencies (during working hours)",
                "Ordering craftsmen (Sanitary, Electric, etc.)",
                "Provide lightbulbs",
                "Air filters for bathroom and toilet have to be changed once per semester. Those are provided by the caretakers.",
            ],
        more: isDe ? "… und vieles mehr!" : "... and much more!",
        emergencyTitle: isDe
            ? "Nur in Notfällen (z.B. Wasserschaden in der Küche oder kein Wasser)"
            : "Only in emergencies (e.g. flood in your kitchen or no water)",
        emergencyText: isDe
            ? "Die privaten Telefonnummern der Hausmeister findest du am Schwarzen Brett im Eingangsbereich deines Gebäudes."
            : "You can find the private phone numbers of the caretakers on the notice-board in the entrance of your building.",
    };

    return (
        <main className="container mx-auto px-6 py-12">
            <div className="mx-auto max-w-6xl">
                <header className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{t.title}</h1>
                </header>

                <div className="grid gap-10 lg:grid-cols-12">
                    {/* Main content */}
                    <section className="lg:col-span-8 space-y-10">
                        <div className="space-y-3">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                                {t.whereTitle}
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t.whereText}</p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                                {t.servicesTitle}
                            </h2>

                            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                                {t.services.map((s) => (
                                    <li key={s}>{s}</li>
                                ))}
                            </ul>

                            <p className="text-gray-700 dark:text-gray-300">{t.more}</p>

                            <div className="pt-2">
                                <h3 className="text-xl font-semibold text-red-600">{t.emergencyTitle}</h3>
                                <p className="mt-2 text-sm text-red-500">{t.emergencyText}</p>
                            </div>
                        </div>
                    </section>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-white/5 backdrop-blur p-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                {t.hoursTitle}
                            </h2>

                            <div className="mt-4 space-y-3">
                                <div className="text-gray-700 dark:text-gray-300 font-medium">{t.days}</div>

                                <div className="space-y-2 text-gray-900 dark:text-gray-100">
                                    <div className="text-lg font-semibold">{t.hours1}</div>
                                    <div className="text-lg font-semibold">{t.hours2}</div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
