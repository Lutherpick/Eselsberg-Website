export default function Loading() {
    return (
        <main className="max-w-3xl mx-auto px-4 py-12 space-y-6">
            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="space-y-2">
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-9 w-full bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
            <div className="space-y-3">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                ))}
                <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
        </main>
    );
}
