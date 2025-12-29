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
    params: Promise<{ lang: "en" | "de" }>;
}) {
    const { lang } = await params;
    const isDe = lang === "de";

    return (
        <main className="container mx-auto px-6 py-12">
            {/* ... rest unchanged ... */}
            <div className="mx-auto max-w-4xl space-y-8">
                {/* content omitted for brevity in this snippet */}
            </div>
        </main>
    );
}
