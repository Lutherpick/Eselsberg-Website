"use client";

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <main className="container mx-auto px-6 py-12 space-y-4">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Failed to load tutors
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
                The tutor list could not be loaded right now.
            </p>
            <button
                onClick={() => reset()}
                className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm hover:opacity-90 dark:bg-gray-100 dark:text-gray-900"
            >
                Try again
            </button>
            <pre className="text-xs text-gray-500 dark:text-gray-400 overflow-auto">
        {error.message}
      </pre>
        </main>
    );
}
