// src/app/[lang]/party-room/page.tsx
import type { Lang } from "@/lib/legacyLinks";

export default async function PartyRoomPage({
                                                params,
                                            }: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: rawLang } = await params;
    const lang: Lang = rawLang === "de" ? "de" : "en";
    const isDe = lang === "de";

    return (
        <main className="mx-auto max-w-4xl px-6 py-12">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                {isDe ? "Partyraum" : "Party room"}
            </h1>

            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {isDe
                    ? "Hier kommt der Buchungsplan / die Regeln für den Partyraum hin. (Früher war das unter /party/ im alten System.)"
                    : "This is where the booking plan / rules for the party room should live. (This used to be /party/ on the old site.)"}
            </p>
        </main>
    );
}
