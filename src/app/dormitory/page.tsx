// src/app/dormitory/page.tsx
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
                                    : 'text-gray-600 hover:text-indigo-500'
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
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">General Information</h2>
                <p>
                    The Eselsbergsteige dormitory, or short “EBS”, is located on the Eselsberg in the decentralized
                    north-west of Ulm.
                </p>
                <p>
                    During the semester over 500 students live here. Many spend their first academic years here and then
                    take a step towards their own apartment. The supervised complex consists of 7 multi-story buildings.
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
                <p>
                    The carrier of the dormitory is the{' '}
                    <Link
                        href="https://www.sw-ulm.de"
                        className="text-indigo-600 hover:underline"
                        target="_blank"
                    >
                        Studierendenwerk Ulm
                    </Link>
                    . All questions concerning dormitories in Ulm should be addressed to the friendly employees.
                    Studierendenwerk rents the apartments, likes to inform you and is very flexible, even about short
                    term contracts.
                </p>
            </motion.section>

            {/* Neighborhood */}
            <motion.section
                id="neigh"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center"
            >
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Neighborhood</h2>
                    <p>
                        The dormitory is located on the upper Eselsberg, surrounded by the streets Eselsbergsteige,
                        Ferdinand-Sauerbruch-Weg and Sebastian-Kneipp-Weg. The neighborhood is rather calm and consists
                        mainly of terraced houses and one-family houses.
                    </p>
                    <p>
                        If you follow the Eselsbergsteige uphill for about 3 minutes to the bus stop “Virchowstraße”, you
                        can find a small business center with a supermarket, ATM, bakery, pharmacy and some doctors.
                        Another point of interest is located about 15 minutes by foot towards the city center. There you
                        can find the business center “Stifterweg” (bus stop “Burgunderweg”) with even more shops, banks,
                        police office, DHL packing station and a city administration service center. This one will be
                        especially important for all your legal matters (e.g. address change, ID).
                    </p>
                    <p>
                        From the dormitory to university by foot it’s about 20 minutes, by bus (route 5 to
                        “Wissenschaftsstadt”) about 10 minutes. You can reach the city (main station) by foot in about 45
                        minutes, by bus (route 5 to “Ludwigsfeld” or “Wiley”) in 15 minutes.
                    </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                        src="/lageplan.svg"
                        alt="Map of Eselsbergsteige Dormitory"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </motion.section>

            {/* Description of Apartments */}
            <motion.section
                id="apt"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-start"
            >
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                    <h2 className="text-2xl font-semibold">Description of Apartments</h2>
                    <div>
                        <h3 className="text-lg font-medium">3, 4 or 5 People Shared Apartments</h3>
                        <p>
                            In the blocks A to D there are in most cases 4 people shared apartments (“WG” in German), but
                            there are also 3 and 5 people shared apartments. They are equipped with a big kitchen with
                            electric stove, oven and many cupboards. The fridge is stuffed most of the time. Toilet and
                            bathroom (sink and shower) are partially separated, partially combined.
                        </p>
                        <p>
                            The rooms are furnished reasonably: bed, cabinet, shelf, container, bed box, desk, chair. All
                            furniture can be moved with a little effort and arranged to your comfort.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">2 People Shared Apartments</h3>
                        <p>
                            Within block E to G you exclusively find shared apartments for 2 residents. The rooms are
                            furnished equally. The atmosphere is a bit calmer, but there is much less common space than in
                            the big apartments. Disadvantageous are especially the small kitchen and the missing space for
                            a common table and chairs. The stove consists of just 2 plates – an oven is only available in
                            the oven rooms. In the 2 people shared apartments the fridge is reasonably sized. Toilet and
                            bathroom are separated. A small advantage is, that the rooms are about 1,5 m² bigger in these
                            apartments.
                        </p>
                    </div>
                </div>
                <div className="space-y-4">
                    <img
                        src="/wg-kueche.jpg"
                        alt="Shared kitchen"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <img
                        src="/doublette-plan_english%20(1).jpg"
                        alt="2 person apartment floorplan"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </motion.section>

            {/* Waste & Noise */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="container mx-auto px-6 py-12 space-y-8"
            >
                <div className="bg-green-50 dark:bg-green-900 rounded-xl shadow-lg p-6">
                    <div className="flex items-center mb-2">
                        <TrashIcon className="w-6 h-6 text-green-600 mr-2" />
                        <h2 className="text-xl font-semibold text-green-800 dark:text-green-200">
                            Waste Separation & Disposal
                        </h2>
                    </div>
                    <p>
                        Like everywhere in Germany, waste separation is an important rule in the dormitory. Waste glass
                        has to be thrown into the containers south of the B block. Plastic, aluminum and packaging belong
                        into yellow bags (city office). For those bags there is a special disposal area next to the C
                        block (throw-in from above). Biological waste, paper and residual waste can be disposed at any
                        disposal area around the dormitory. Look at the map to find the closest spot to your apartment.
                    </p>
                    <p>
                        If one garbage bin is full, please throw your waste into another one and don’t put it beside the
                        full bin.
                    </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900 rounded-xl shadow-lg p-6">
                    <div className="flex items-center mb-2">
                        <MoonIcon className="w-6 h-6 text-purple-600 mr-2" />
                        <h2 className="text-xl font-semibold text-purple-800 dark:text-purple-200">Noise</h2>
                    </div>
                    <p>
                        Welcome to a dormitory! People living here like to celebrate major events like birthdays, passing
                        exams, meeting with friends, good weather… and of course any reason is a good reason to BBQ—
                        at the same time some of you are learning or sleeping.
                    </p>
                    <p>
                        Please communicate before you get stressed out by those celebrating or BBQ-ing. Get up and tell
                        them to keep it down. Communication is the key to a successful life with one another—use your
                        inevitable opportunities.
                    </p>
                    <p>
                        To generally avoid such situations, please obey the standard night rest times after 10 p.m. and
                        stay preferably indoors with closed windows. This especially benefits our neighbors, who are
                        regularly disturbed by us.
                    </p>
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
                    Bus 5 stops at the dorm every 10 min (weekday). Single fare €2.40; semester ticket €129 for the full
                    term. Free after 6 p.m. & weekends with student ID. Last bus just after midnight; night buses
                    Fri/Sat.
                </p>
                <Link
                    href="https://www.dvb-ulm.de/fahrplan/fahrplanuebersicht/"
                    className="text-yellow-800 hover:underline inline-block"
                    target="_blank"
                >
                    Bus schedule & prices →
                </Link>
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
                    Like in every household, the broadcasting fee for ARD & ZDF has to be paid in a dormitory too. After
                    you report your address change to the city administration service center, you’ll receive a letter
                    from the “Beitragsservice.” This fee is per household (shared apartment), so you can split it with
                    your roommates. Need help understanding the letter? Ask a German-speaking roommate. To pay or
                    respond online, click{' '}
                    <Link href="#" className="text-indigo-600 hover:underline">
                        here
                    </Link>
                    . For English info, click{' '}
                    <Link href="#" className="text-indigo-600 hover:underline">
                        here
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
                    The spot for getting to know each other and enjoying! Here you can experience sociable evenings
                    and savor through an exciting drinks menu for inexpensive prices. The bar tutors will take care of
                    your needs very well. There are specials with new drinks or discounts regularly. You can get
                    informed about the dates through this website or through the “Info EBS” WhatsApp Group – invitation
                    link on the notice boards.
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    The rooms of the bar are also used for board-game and movie evenings (“CineEBS”). Board-game
                    evenings take place on the first & third Mondays; movie evenings on the second & fourth Monday of
                    every month starting at 8 p.m.
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
                    course a toilet too. The standard equipment are some tables and a few chairs. Before you get the
                    key, you have to pay a deposit (€50) to the party-room tutor. This room can only be booked on
                    Friday, Saturday and before holidays. Usually you have to reserve weeks in advance, otherwise it’ll
                    be already taken when you need it.
                </p>
                <p>
          <span className="inline-block text-indigo-600 hover:underline cursor-pointer">
            📅 Booking plan here!
          </span>
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
                    The washing machine is €1.30 per cycle. The dryers are €1.60. Both can only be paid with the
                    student ID. To load money onto your ID card with your bank card, there is a terminal in the
                    E-block entrance. Please don’t let your laundry hang on the lines longer than absolutely
                    necessary, as there is only limited space.
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
                    gun, and device to find conductors. Car drivers can use battery charger & jumper cables. Cyclists
                    find cycle tools. Bring your own consumables (screws, nails, glue).
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
                    If you bring a car, you have to rent an underground parking lot from Studierendenwerk Ulm—but
                    these are reasonably priced. You can also lock your bicycle in multiple spots indoors or around the
                    dormitory (see map markers).
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
                    Reach out via the Studierendenwerk Ulm for leasing questions, or drop by our Info EBS WhatsApp
                    group to get connected with current residents!
                </p>
                <Link
                    href="https://ebs.studierendenwerk-ulm.de/housing?lang=en"
                    className="inline-block px-6 py-2 md:px-8 md:py-3 bg-indigo-400 hover:bg-indigo-500 text-white rounded-full shadow-lg transition"
                    target="_blank"
                >
                    Contact Studierendenwerk Ulm
                </Link>
            </motion.section>
        </main>
    )
}
