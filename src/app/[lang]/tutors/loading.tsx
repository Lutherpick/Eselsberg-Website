export default function Loading() {
    return (
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
            {/* TutorRoles skeleton */}
            <section className="rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-950 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] overflow-hidden">
                <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                    <div className="h-6 w-36 rounded-full bg-gray-200 dark:bg-gray-800" />
                    <div className="h-10 w-72 rounded bg-gray-200 dark:bg-gray-800" />
                    <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-800" />
                    <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-800" />

                    <div className="rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-gray-50 dark:bg-gray-900 p-4">
                        <div className="h-4 w-28 rounded bg-gray-200 dark:bg-gray-800 mb-3" />
                        <div className="flex flex-wrap gap-2">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="h-8 w-28 rounded-full bg-gray-200 dark:bg-gray-800" />
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-2">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="rounded-2xl bg-gray-100 dark:bg-gray-900 p-5 space-y-3">
                                <div className="h-5 w-40 rounded bg-gray-200 dark:bg-gray-800" />
                                <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-800" />
                                <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-800" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TutorDirectory skeleton */}
            <section className="rounded-3xl border border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-950 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] overflow-hidden">
                <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div className="space-y-2">
                            <div className="h-8 w-64 rounded bg-gray-200 dark:bg-gray-800" />
                            <div className="h-4 w-72 rounded bg-gray-200 dark:bg-gray-800" />
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <div className="h-10 w-full sm:w-80 rounded-xl bg-gray-200 dark:bg-gray-800" />
                            <div className="h-10 w-full sm:w-60 rounded-xl bg-gray-200 dark:bg-gray-800" />
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="rounded-2xl bg-gray-100 dark:bg-gray-900 p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="h-5 w-32 rounded bg-gray-200 dark:bg-gray-800" />
                                    <div className="h-6 w-10 rounded-full bg-gray-200 dark:bg-gray-800" />
                                </div>
                                <div className="space-y-3">
                                    {Array.from({ length: 2 }).map((__, j) => (
                                        <div
                                            key={j}
                                            className="rounded-xl bg-white dark:bg-gray-950 border border-gray-200/80 dark:border-gray-800/80 p-3"
                                        >
                                            <div className="h-4 w-40 rounded bg-gray-200 dark:bg-gray-800 mb-2" />
                                            <div className="h-3 w-28 rounded bg-gray-200 dark:bg-gray-800" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
