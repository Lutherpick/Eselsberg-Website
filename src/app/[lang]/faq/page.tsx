import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "FAQ - Eselsbergsteige Dormitory",
    description: "Frequently asked questions about rooms, facilities, waste, fees, and dormitory life.",
};

type FaqItem = {
    question: string;
    answer: string;
    links?: { label: string; href: string }[];
};

type FaqGroup = {
    title: string;
    description: string;
    items: FaqItem[];
};

const FAQ_GROUPS: FaqGroup[] = [
    {
        title: "Contacts and bookings",
        description: "Who to write to and where to find booking information.",
        items: [
            {
                question: "Where do I find the tutors and how do I contact them?",
                answer:
                    "All tutors and their respective email addresses are listed on the tutors page of this website. To contact them, simply write them an email.",
                links: [{ label: "Open tutors page", href: "tutors" }],
            },
            {
                question: "How do I rent the party room?",
                answer:
                    "The website has a booking plan for renting the party room. The room can only be rented on Fridays, Saturdays, and before holidays. You also have to pay a 50 EUR deposit fee. More information is included on the dormitory page.",
                links: [
                    { label: "Party room", href: "party-room" },
                    { label: "Dormitory page", href: "dormitory" },
                ],
            },
            {
                question: "How do I extend my contract for my room?",
                answer:
                    "To extend your contract, contact Mrs. Bass from the Studierendenwerk through the extension form on their website. Regular residents are entitled to six semesters in the dormitory. For exceptions and general rules, contact Mrs. Bass by email. She will be happy to help you with your contract extension.",
            },
        ],
    },
    {
        title: "Rooms and facilities",
        description: "Shared rooms, tools, laundry, parking, and what is currently open.",
        items: [
            {
                question: "How do I use the washing rooms and where can I find them?",
                answer:
                    "The washing rooms are located in all blocks except A109, A113, F, and G. To use the washing machines and dryers, you need a University ID with funds on it. The machines can be paid for with the card reader in the rooms. More information is included on the dormitory page.",
                links: [{ label: "Dormitory page", href: "dormitory" }],
            },
            {
                question: "How do I use the tool room and where is it located?",
                answer:
                    "To use the tool room, write an email to the responsible tutors to temporarily get a key. The room is located in A111. More information is included on the dormitory page.",
                links: [
                    { label: "Tutors page", href: "tutors" },
                    { label: "Dormitory page", href: "dormitory" },
                ],
            },
            {
                question: "Where is the Eselsbar and when is it open?",
                answer:
                    "The Eselsbar is located in F Block and is accessible through the glass doors at the front of the block. It is open on Wednesdays and Sundays from 9:00 pm to 12:00 am. More information is included on the dormitory page.",
                links: [{ label: "Dormitory page", href: "dormitory" }],
            },
            {
                question: "Are the table tennis, pool, and study rooms open?",
                answer:
                    "Unfortunately, those rooms are temporarily closed. When they will open again is still up for debate. For further information, try contacting the EBS spokespeople. Their email addresses can be found on the tutors page.",
                links: [{ label: "Tutors page", href: "tutors" }],
            },
            {
                question: "Are the grills public?",
                answer:
                    "Yes. The grills located in front of the Eselsbar are public, but they still belong to residents of the dorm. If you plan to use a grill for your own BBQ party, ask in the WhatsApp group and clean up after yourself so the grills can be used by everyone.",
            },
            {
                question: "How do I use the parking garage and bicycle parking?",
                answer:
                    "To use the parking garage, you have to sign a contract with the Studierendenwerk containing your name and license plate number. The garage costs 20 EUR per month. Bicycle parking is free. There are multiple places to park your bicycle, including one in the parking garage. Some blocks also have a locked bicycle cellar that can only be accessed by people with the key for the respective block. More information is included on the dormitory page.",
                links: [{ label: "Dormitory page", href: "dormitory" }],
            },
            {
                question: "Is drilling into the walls allowed?",
                answer:
                    "Yes, drilling into the walls of your room or flat is allowed. Just make sure you use a stud finder so you do not accidentally drill into a cable or pipe. Feel free to decorate your room as you please. Remember that the holes need to be filled and painted before you move out.",
            },
            {
                question: "Where can I add money to my student card?",
                answer:
                    "You need money on your student card to use the washing machines and dryers in the dormitory. There is a terminal in E Block where you can charge your ID with a bank card. If you want to charge your card with cash, you have to go to the university, where a cash top-up terminal is located near the entrance.",
            },
            {
                question: "What do the apartments in the dormitory look like?",
                answer:
                    "For further information about the available flats in the dormitory, visit the dormitory page on this website.",
                links: [{ label: "Dormitory page", href: "dormitory" }],
            },
        ],
    },
    {
        title: "Living together",
        description: "Noise, shared spaces, and recurring dormitory rules.",
        items: [
            {
                question: "How is noise handled in the dormitory?",
                answer:
                    "The dormitory follows the standard night rest times after 10:00 pm. If you feel disturbed by noise, we recommend trying to settle the matter internally first through the EBS Socializing WhatsApp group. More information is included on the dormitory page.",
                links: [{ label: "Dormitory page", href: "dormitory" }],
            },
            {
                question: "How is the public broadcasting fee handled in the dormitory?",
                answer:
                    "The public broadcasting fee is billed per flat. To be included in the fee, add the fee number from the person paying the bill to your own account. After that, you only have to pay your share to the responsible person. Usually this is the total bill divided by the number of residents. Students who receive BafoG are excluded from this rule. More information is included on the dormitory page.",
                links: [{ label: "Dormitory page", href: "dormitory" }],
            },
        ],
    },
    {
        title: "Waste and recycling",
        description: "Yellow bags, glass, clothes, and bulky waste.",
        items: [
            {
                question: "Where do I get yellow bags?",
                answer:
                    "You can get yellow bags from the caretakers in Block A109. Yellow bags are used for packaging material made out of plastic. Remember to separate your waste.",
                links: [{ label: "Caretakers page", href: "caretakers" }],
            },
            {
                question: "Where do I put yellow bags?",
                answer:
                    "The disposal site for yellow bags is located between C and D Block near the entrance to the lower parking garage. You will need your key to unlock the gate for the disposal area.",
            },
            {
                question: "Where can I throw away glass?",
                answer:
                    "The glass disposal is located south of B Block on the other side of the street. Separate glass into clear, green, and brown glass. If you are unsure where a bottle belongs, check your preferred search engine. Unlike glass, ceramics should be disposed of in the residual waste bin because they cannot be recycled the same way.",
            },
            {
                question: "How do I recycle or donate my clothes?",
                answer:
                    "There is a bin dedicated to donating clothes south of B Block next to the parking bay. Please note that this bin is only for clothes that are intact and still wearable. Damaged or irreversibly dirty items should be disposed of in the residual waste.",
            },
            {
                question: "How do I dispose of bulk garbage?",
                answer:
                    "To get rid of bulk garbage like used suitcases, chairs, carpets, damaged bicycles, umbrellas, or similar items, you have to take them to your local recycling center. The closest one to the dormitory is on the other side of the crossing at the southern end of Eselsbergsteige.",
            },
        ],
    },
];

export default async function FaqPage({
                                          params,
                                      }: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: langParam } = await params;
    const lang = langParam === "de" ? "de" : "en";
    const totalQuestions = FAQ_GROUPS.reduce((sum, group) => sum + group.items.length, 0);

    return (
        <main className="container mx-auto px-6 py-12">
            <div className="mx-auto max-w-6xl">
                <header className="mb-10">
                    <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
                        Help for residents
                    </p>
                    <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-3 max-w-3xl text-gray-700 dark:text-gray-300">
                        Quick answers for common questions about tutors, shared rooms, laundry, waste disposal,
                        contracts, and living together at Eselsbergsteige.
                    </p>
                </header>

                <div className="grid gap-10 lg:grid-cols-12">
                    <section className="lg:col-span-8 space-y-8">
                        {FAQ_GROUPS.map((group) => (
                            <section key={group.title} className="space-y-4">
                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                                        {group.title}
                                    </h2>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        {group.description}
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    {group.items.map((item, index) => (
                                        <details
                                            key={item.question}
                                            open={index === 0 && group.title === "Contacts and bookings"}
                                            className="group rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm transition dark:border-gray-800 dark:bg-gray-950/60"
                                        >
                                            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                                                <span className="text-base font-semibold text-gray-900 dark:text-gray-100">
                                                    {item.question}
                                                </span>
                                                <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-gray-200 text-gray-700 transition group-open:rotate-180 dark:border-gray-700 dark:text-gray-200">
                                                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                                                        <path
                                                            d="M6 9l6 6 6-6"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </summary>

                                            <div className="mt-4 space-y-4 text-sm leading-6 text-gray-700 dark:text-gray-300">
                                                <p>{item.answer}</p>

                                                {item.links ? (
                                                    <div className="flex flex-wrap gap-2">
                                                        {item.links.map((link) => (
                                                            <Link
                                                                key={`${item.question}-${link.href}`}
                                                                href={`/${lang}/${link.href}`}
                                                                className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-100 dark:border-indigo-800 dark:bg-indigo-950 dark:text-indigo-200 dark:hover:bg-indigo-900"
                                                            >
                                                                {link.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </section>

                    <aside className="lg:col-span-4">
                        <div className="sticky top-24 space-y-4">
                            <section className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-white/5">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                    FAQ overview
                                </h2>
                                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                                    {totalQuestions} answers grouped by topic.
                                </p>

                                <div className="mt-5 space-y-2">
                                    {FAQ_GROUPS.map((group) => (
                                        <div
                                            key={group.title}
                                            className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2 text-sm text-gray-700 dark:bg-gray-900 dark:text-gray-300"
                                        >
                                            <span>{group.title}</span>
                                            <span className="font-semibold text-gray-900 dark:text-gray-100">
                                                {group.items.length}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-white/5">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                    Still unsure?
                                </h2>
                                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                                    The tutors and caretakers are the best next contact points for questions that are
                                    not covered here.
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    <Link
                                        href={`/${lang}/tutors`}
                                        className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                                    >
                                        Tutors
                                    </Link>
                                    <Link
                                        href={`/${lang}/caretakers`}
                                        className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-900"
                                    >
                                        Caretakers
                                    </Link>
                                </div>
                            </section>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
