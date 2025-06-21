type NewsItem = { date: string; title: string; description?: string; link: string; };
const NEWS: NewsItem[] = [
    { date: '20.12.2023', title: 'Need for action at eduroam WiFi', description: 'You may need to re-setup the eduroam WiFi connection...', link: '/internet' },
    { date: '11.10.2023', title: 'Partyroom open', link: '/dormitory#party-room' },
];

export default function NewsGrid() {
    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-semibold font-sans mb-8 text-gray-900 dark:text-gray-100">
                    News &amp; Updates
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {NEWS.map(({ date, title, description, link }) => (
                        <a key={date + title} href={link} className="card">
                            <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
                            <h3 className="mt-1 font-semibold font-sans text-gray-900 dark:text-gray-100">
                                {title}
                            </h3>
                            {description && <p className="mt-2 text-gray-700 dark:text-gray-200 text-sm">{description}</p>}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}