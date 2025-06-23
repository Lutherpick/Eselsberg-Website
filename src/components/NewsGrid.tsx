
'use client';

type NewsItem = {
    date: string;
    title: string;
    description?: string;
    link: string;
};

const NEWS: NewsItem[] = [
    {
        date: '20.12.2023',
        title: 'Need for action at eduroam WiFi',
        description: 'You may need to re-setup the eduroam WiFi connection...',
        link: '/internet',
    },
    {
        date: '11.10.2023',
        title: 'Partyroom open',
        link: '/dormitory#party-room',
    },
];

export default function NewsGrid() {
    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
                    News & Updates
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {NEWS.map((n) => (
                        <a key={n.date + n.title} href={n.link} className="card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <p className="text-sm text-gray-500 dark:text-gray-400">{n.date}</p>
                            <h3 className="font-semibold mt-1 text-gray-900 dark:text-white">
                                {n.title}
                            </h3>
                            {n.description && (
                                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                                    {n.description}
                                </p>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}