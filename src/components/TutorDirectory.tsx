export type Tutor = {
    tutor: string;
    name: string;
    zinr: string;
    email: string | null;
};

export default function TutorDirectory({
                                           tutors,
                                           lang,
                                       }: {
    tutors: Tutor[];
    lang: "en" | "de";
}) {
    const isDe = lang === "de";

    if (tutors.length === 0) {
        return (
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200">
                {isDe ? "Aktuell sind keine Tutor-Daten verfügbar." : "No tutor data is currently available."}
            </div>
        );
    }

    return (
        <div id="directory" className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {tutors.map((person) => (
                <article
                    key={`${person.tutor}-${person.email ?? ""}-${person.zinr}-${person.name}`}
                    className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950"
                >
                    <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                        {person.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{person.tutor}</p>
                    <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                        {isDe ? "Zimmer" : "Room"}: {person.zinr || "-"}
                    </p>

                    {person.email ? (
                        <a
                            href={`mailto:${person.email}`}
                            className="mt-3 inline-block break-all text-sm font-medium text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-300"
                        >
                            {person.email}
                        </a>
                    ) : null}
                </article>
            ))}
        </div>
    );
}
