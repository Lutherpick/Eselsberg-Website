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
    // add more items here...
];

export default function NewsGrid() {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                    News &amp; Updates
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {NEWS.map(({ date, title, description, link }) => (
                        <a
                            key={date + title}
                            href={link}
                            className="block bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
                        >
                            <div className="p-4">
                                <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
                                <h3 className="mt-1 font-semibold text-gray-900 dark:text-white">
                                    {title}
                                </h3>
                                {description && (
                                    <p className="mt-2 text-gray-700 dark:text-gray-200 text-sm">
                                        {description}
                                    </p>
                                )}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
