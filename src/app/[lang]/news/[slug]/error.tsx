"use client";

import Link from "next/link";

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12 space-y-4">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Could not load this news item
            </h1>

            <p className="text-gray-700 dark:text-gray-300">
                Please try again, or go back to the news list.
            </p>

            <div className="flex gap-3">
                <button
                    onClick={() => reset()}
                    className="rounded-md bg-gray-900 text-white px-4 py-2 text-sm hover:opacity-90 dark:bg-gray-100 dark:text-gray-900"
                >
                    Retry
                </button>

                <Link
                    href="../"
                    className="rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm"
                >
                    Back to news
                </Link>
            </div>

            <details className="text-xs text-gray-600 dark:text-gray-400">
                <summary className="cursor-pointer">Technical details</summary>
                <pre className="mt-2 overflow-auto">{error.message}</pre>
            </details>
        </main>
    );
}
