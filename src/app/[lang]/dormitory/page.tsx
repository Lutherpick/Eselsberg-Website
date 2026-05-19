// src/app/[lang]/dormitory/page.tsx
'use client'

import Hero from '@/components/Hero'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
    InformationCircleIcon,
    GlobeAltIcon,
    SparklesIcon,
    TrashIcon,
    MoonIcon,
    HomeIcon,
    TicketIcon,
    BuildingOfficeIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

// Old website base (used for legacy paths like /party/)
const EBS_SITE_BASE = 'https://ebs.studierendenwerk-ulm.de'

// Links from old PHP website:
const LINKS = {
    busSchedule: 'https://www.ding.eu/',
    rundfunkAntworten: 'https://www.rundfunkbeitrag.de/antworten/',
    rundfunkWelcome: 'https://www.rundfunkbeitrag.de/welcome/',
    partyBookingPlan: `${EBS_SITE_BASE}/party/`,
    studierendenwerk: 'https://studierendenwerk-ulm.de/',
}

export default function DormitoryPage() {
    const [active, setActive] = useState<'info' | 'neigh' | 'apt' | 'fac'>('info')

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY
            if (y < 600) setActive('info')
            else if (y < 1400) setActive('neigh')
            else if (y < 2200) setActive('apt')
            else setActive('fac')
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

    return (
        <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
            {/* Hero */}
            <Hero />

            {/* Sticky Subnav */}
            <nav className="sticky top-0 bg-white dark:bg-gray-900 z-20 shadow-sm">
                <ul className="container mx-auto flex justify-center space-x-8 py-2 text-sm font-medium">
                    {[
                        ['info', 'General Info'],
                        ['neigh', 'Neighborhood'],
                        ['apt', 'Apartments'],
                        ['fac', 'Facilities'],
                    ].map(([key, label]) => (
                        <li
                            key={key}
                            className={`cursor-pointer px-2 ${
                                active === key
                                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                                    : 'text-gray-600 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-300'
                            }`}
                            onClick={() => scrollTo(key)}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* General Info */}
            <motion.section
                id="info"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6 py-16 space-y-6 text-gray-700 dark:text-gray-300"
            >
                <div className="flex items-center space-x-3">
                    <InformationCircleIcon className="w-8 h-8 text-indigo-500" />
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">General Information</h2>
                </div>

                <p>
                    The Eselsbergsteige dormitory, or short “EBS”, is located on the Eselsberg in the decentral north
                    west of Ulm.
                </p>
                <p>
                    During the semester over 500 students live here. Many spend their first academic years here and then
                    take a step towards an own apartment. The supervised complex consists of 7 multi-story buildings.
                    Internally often called block A to G. The blocks E, F and G offer fully furnished shared apartments
                    for 2 residents, while 3 to 5 people share their apartments in block A to D.
                </p>
                <p>
                    Many residents are international students. While students from distant countries, like India or
                    China, finish their whole degree here, Europeans often just spend one semester abroad in the course
                    of the Erasmus program. You will have many chances to get to know new cultures and interesting
                    people, just be open minded and use your opportunities.
                </p>
                <p>
                    A big advantage about life in a dormitory is moreover the exceptional service. The helpful
                    caretakers, flat-rate operational costs with included gigabit internet access and the many common
                    rooms and social activities turn your studies into the most exciting years of your life.
                </p>

                <div className="flex items-center space-x-3 pt-4">
                    <GlobeAltIcon className="w-7 h-7 text-indigo-500" />
                    <p>
                        The carrier of the dormitory is the{' '}
                        <Link
                            href={LINKS.studierendenwerk}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:underline"
                        >
                            Studierendenwerk Ulm
                        </Link>
                        . All questions concerning dormitories in Ulm should be addressed to them.
                    </p>
                </div>
            </motion.section>

            {/* Neighborhood */}
            <motion.section
                id="neigh"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="container mx-auto px-6 py-16 space-y-6 text-gray-700 dark:text-gray-300"
            >
                <div className="flex items-center space-x-3">
                    <HomeIcon className="w-8 h-8 text-indigo-500" />
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Neighborhood</h2>
                </div>
                <p>
                    The dormitory is located on the upper Eselsberg, surrounded by the streets Eselsbergsteige,
                    Ferdinand-Sauerbruch-Weg and Sebastian-Kneipp-Weg. The neighborhood is rather calm and consists
                    mainly of terraced houses and one-family houses.
                </p>
                <p>
                    If you follow the Eselsbergsteige uphill for about 3 minutes to the bus stop “Virchowstraße”, you
                    can find a small business center with a supermarket, ATM, bakery, pharmacy and some doctors.
                </p>
                <p>
                    Another point of interest is located about 15 minutes by foot towards the city center. There you can
                    find the business center “Stifterweg” (bus stop “Burgunderweg”) with even more shops, banks, police
                    office, DHL packing station and a city administration service center.
                </p>
                <p>
                    From the dormitory to university by foot it’s about 20 minutes, by bus (route 5 to
                    “Wissenschaftsstadt”) about 10 minutes. You can reach the city (main station) by foot in about 45
                    minutes, by bus (route 5 to “Ludwigsfeld” or “Wiley”) in 15 minutes.
                </p>
            </motion.section>

            {/* Apartments */}
            <motion.section
                id="apt"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="container mx-auto px-6 py-16 space-y-8 text-gray-700 dark:text-gray-300"
            >
                <div className="flex items-center space-x-3">
                    <BuildingOfficeIcon className="w-8 h-8 text-indigo-500" />
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Description of Apartments</h2>
                </div>

                <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                        3, 4 or 5 People Shared Apartments
                    </h3>
                    <p>
                        In the blocks A to D there are in most cases 4 people shared apartments (“WG” in German), but
                        there are also 3 and 5 people shared apartments. They are equipped with a big kitchen with
                        electric stove, oven and many cupboards.
                    </p>
                    <p>
                        The rooms are furnished reasonably: bed, cabinet, shelf, container, bed box, desk, chair. All
                        furniture can be moved with a little effort and arranged to your comfort.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">2 People Shared Apartments</h3>
                    <p>
                        Within block E to G you exclusively find shared apartments for 2 residents. The rooms are
                        furnished equally. The atmosphere is a bit calmer, but there is much less common space than in
                        the big apartments.
                    </p>
                    <p>
                        The stove consists of just 2 plates – an oven is only available in the oven rooms. Toilet and
                        bathroom are separated.
                    </p>
                </div>
            </motion.section>

            {/* Facilities + Waste/Noise */}
            <motion.section
                id="fac"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="container mx-auto px-6 py-16 space-y-10 text-gray-700 dark:text-gray-300"
            >
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 dark:bg-green-900 rounded-xl shadow-lg p-6">
                        <div className="flex items-center mb-2">
                            <TrashIcon className="w-6 h-6 text-green-600 mr-2" />
                            <h2 className="text-xl font-semibold text-green-800 dark:text-green-200">
                                Waste Separation and Disposal
                            </h2>
                        </div>
                        <p>
                            Like everywhere in Germany, waste separation is an important rule in the dormitory. Waste
                            glass has to be thrown into the containers south of the B block. Plastic, aluminum and
                            packaging belong into yellow bags (city office). For those bags there is a special disposal
                            area next to the C block (throw-in from above). Biological waste, paper and residual waste
                            can be disposed at any disposal area around the dormitory. Look at the map to find the
                            closest spot to your apartment.
                        </p>
                        <p>
                            If one garbage bin is full, please throw your waste into another one and don’t put it beside
                            the full bin.
                        </p>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900 rounded-xl shadow-lg p-6">
                        <div className="flex items-center mb-2">
                            <MoonIcon className="w-6 h-6 text-purple-600 mr-2" />
                            <h2 className="text-xl font-semibold text-purple-800 dark:text-purple-200">Noise</h2>
                        </div>
                        <p>
                            Welcome to a dormitory! People living here like to celebrate major events like birthdays,
                            passing exams, meeting with friends, good weather… and of course any reason is a good reason
                            to BBQ—at the same time some of you are learning or sleeping.
                        </p>
                        <p>
                            Please communicate before you get stressed out by those celebrating or BBQ-ing. Get up and
                            tell them to keep it down. Communication is the key to a successful life with one another.
                        </p>
                        <p>
                            To generally avoid such situations, please obey the standard night rest times after 10 p.m.
                            and stay preferably indoors with closed windows. This especially benefits our neighbors.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Semester Ticket */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="container mx-auto px-6 py-12 bg-yellow-50 dark:bg-yellow-900 rounded-xl shadow-lg space-y-4 mb-8"
            >
                <div className="flex items-center mb-2">
                    <TicketIcon className="w-6 h-6 text-yellow-600 mr-2" />
                    <h2 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200">
                        Semester Ticket & Bus Schedule
                    </h2>
                </div>
                <p>
                    The bus (route 5) stops directly in front of the dormitory and departs every 10 minutes on working
                    days. A ticket (one way) is €2.40, so it’s beneficial to buy a semester ticket. The ticket costs
                    €129.00 and is valid for the official semester period.
                </p>
                <p>
                    <Link
                        href={LINKS.busSchedule}
                        className="text-yellow-800 hover:underline inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Bus schedule, prices & night buses →
                    </Link>
                </p>
                <p className="text-sm italic text-gray-600 dark:text-gray-400">Last update: 13.06.2020</p>
            </motion.section>

            {/* Broadcasting Fee */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="container mx-auto px-6 py-12 bg-orange-50 dark:bg-orange-900 rounded-xl shadow-lg space-y-4 mb-8"
            >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Broadcasting Fee</h2>
                <p className="text-gray-800 dark:text-gray-200">
                    Like in every household, the broadcasting fee for ARD and ZDF has to be paid in a dormitory too.
                    After you report your address change to the city administration service center, you’ll probably
                    receive a letter from the “Beitragsservice”. This fee is per household (shared apartment), so you
                    can split it with your roommates.
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    To answer online, use{' '}
                    <Link
                        href={LINKS.rundfunkAntworten}
                        className="text-indigo-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        this form
                    </Link>
                    . For English info, see{' '}
                    <Link
                        href={LINKS.rundfunkWelcome}
                        className="text-indigo-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        this page
                    </Link>
                    .
                </p>
            </motion.section>

            {/* The Esel’s-Bar */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="container mx-auto px-6 py-12 bg-pink-50 dark:bg-pink-900 rounded-xl shadow-lg space-y-4 mb-8"
            >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">The Esel’s-Bar</h2>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                    Opening Hours: Wednesdays and Sundays from 9 p.m. to 12 a.m.
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    The spot for getting to know each other and enjoying! Here you can experience sociable evenings and
                    savor through an exciting drinks menu for inexpensive prices. The bar tutors will take care of your
                    needs very well.
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    The rooms of the bar are also used for board-game and movie evenings (“CineEBS”). Board-game evenings
                    take place on the first & third Mondays; movie evenings on the second & fourth Monday of every month
                    starting at 8 p.m.
                </p>
            </motion.section>

            {/* Party Room */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="container mx-auto px-6 py-12 bg-indigo-50 dark:bg-gray-800 rounded-xl shadow-lg space-y-4 mb-8"
            >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Party Room</h2>
                <p className="text-gray-800 dark:text-gray-200">
                    The party room is in block E. It has all you need to party: stove, oven, sink and fridge—and of
                    course a toilet too. Before you get the key, you have to pay a deposit (€50) to the party-room tutor.
                    This room can only be booked on Friday, Saturday and before holidays.
                </p>
                <p>
                    <Link
                        href={LINKS.partyBookingPlan}
                        className="inline-block text-indigo-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📅 Booking plan here!
                    </Link>
                </p>
            </motion.section>

            {/* Washing Rooms */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="container mx-auto px-6 py-12 bg-green-50 dark:bg-green-900 rounded-xl shadow-lg space-y-4 mb-8"
            >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Washing Rooms</h2>
                <p className="text-gray-800 dark:text-gray-200">
                    The washing machine is €1.30 per cycle. The dryers are €1.60. Both can only be paid with the student
                    ID. To load money onto your ID card with your bank card, there is a terminal in the E-block entrance.
                </p>
            </motion.section>

            {/* Tools Room */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="container mx-auto px-6 py-12 bg-yellow-50 dark:bg-gray-800 rounded-xl shadow-lg space-y-4 mb-8"
            >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Tools Room</h2>
                <p className="text-gray-800 dark:text-gray-200">
                    Here you find basic tools: a drilling machine, jigsaw, cordless screwdriver, work bench, soldering
                    gun, and device to find conductors. Bring your own consumables (screws, nails, glue).
                </p>
            </motion.section>

            {/* Underground Garage & Bicycle Parking */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="container mx-auto px-6 py-12 bg-blue-50 dark:bg-gray-800 rounded-xl shadow-lg space-y-4 mb-16"
            >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Underground Garage & Bicycle Parking
                </h2>
                <p className="text-gray-800 dark:text-gray-200">
                    If you bring a car, you have to rent an underground parking lot from Studierendenwerk Ulm. You can
                    also lock your bicycle in multiple spots indoors or around the dormitory (see map markers).
                </p>
            </motion.section>

            {/* Ready to Join Us? */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="container mx-auto px-6 py-16 text-center"
            >
                <SparklesIcon className="mx-auto w-10 h-10 text-yellow-400 mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                    ✨ Ready to Join Us?
                </h2>
                <p className="mb-6 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                    Reach out via the Studierendenwerk Ulm for leasing questions, or drop by our Info EBS WhatsApp group
                    to get connected with current residents!
                </p>
                <Link
                    href={`${EBS_SITE_BASE}/housing?lang=en`}
                    className="inline-block px-6 py-2 md:px-8 md:py-3 bg-indigo-400 hover:bg-indigo-500 text-white rounded-full shadow-lg transition"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contact Studierendenwerk Ulm
                </Link>
            </motion.section>
        </main>
    )
}
