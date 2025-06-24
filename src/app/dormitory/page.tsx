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
    const [active, setActive] = useState<'info'|'neigh'|'apt'|'fac'>('info')

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY
            if      (y < 600)   setActive('info')
            else if (y < 1400)  setActive('neigh')
            else if (y < 2200)  setActive('apt')
            else                setActive('fac')
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
                        ['info','General Info'],
                        ['neigh','Neighborhood'],
                        ['apt','Apartments'],
                        ['fac','Facilities'],
                    ].map(([key,label])=>(
                        <li
                            key={key}
                            className={`cursor-pointer px-2 ${
                                active===key
                                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                                    : 'text-gray-600 hover:text-indigo-500'
                            }`}
                            onClick={()=>scrollTo(key)}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* General Info Cards */}
            <section
                id="info"
                className="container mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {[
                    {
                        Icon: InformationCircleIcon,
                        title: 'About EBS',
                        text:
                            'Eselsbergsteige Dormitory (“EBS”) sits on the Eselsberg northwest of Ulm. 500+ students live here in seven multi-story blocks (A–G), from 2-person flats to 5-person WGs.',
                    },
                    {
                        Icon: GlobeAltIcon,
                        title: 'International Community',
                        text:
                            'Many residents come via Erasmus and other exchange programs—students from India, China, across Europe, and beyond share a vibrant, cross-cultural living experience.',
                    },
                    {
                        Icon: SparklesIcon,
                        title: 'Services & Internet',
                        text:
                            'Flat-rate operational fees include gigabit internet, top-notch caretaking, regular social events, and access to a variety of common rooms year-round.',
                    },
                    {
                        Icon: InformationCircleIcon,
                        title: 'Leasing & Flexibility',
                        text:
                            'Studierendenwerk Ulm manages all leases—short-term and long-term contracts, easy online forms, and multilingual support make move-in and move-out stress-free.',
                    },
                ].map(({Icon,title,text})=>(
                    <motion.div
                        key={title}
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        transition={{ duration: 0.5 }}
                        className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transition"
                    >
                        <Icon className="w-8 h-8 text-indigo-500 mb-3" />
                        <h3 className="font-semibold text-lg mb-2">{title}</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{text}</p>
                    </motion.div>
                ))}
            </section>

            {/* Neighborhood */}
            <motion.section
                id="neigh"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center"
            >
                <div>
                    <div className="flex items-center mb-4">
                        <HomeIcon className="w-6 h-6 text-indigo-500 mr-2" />
                        <h2 className="text-2xl font-semibold">Neighborhood</h2>
                    </div>
                    <p className="mb-4">
                        The dorm sits on the upper Eselsberg—bordered by Eselsbergsteige, Ferdinand-Sauerbruch-Weg
                        & Sebastian-Kneipp-Weg—in a quiet residential area of terraced and single-family homes.
                    </p>
                    <p className="mb-4">
                        3-min walk → Virchowstraße stop (bus 5 every 10 min): bakery, pharmacy, doctors,
                        supermarket, ATM. 15 min on foot → Burgunderweg: banks, post, DHL, city admin.
                    </p>
                    <p>
                        To campus: bus 5 → Wissenschaftsstadt in 10 min or 20 min on foot. Main station:
                        45 min walk or bus 5 → Ludwigsfeld/Wiley in 15 min.
                    </p>
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                        src="/lageplan.svg"
                        alt="Eselsbergsteige Dormitory Map"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </motion.section>

            {/* Apartments */}
            <motion.section
                id="apt"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6 py-16 space-y-12"
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-2">Explore Apartments</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Browse our two main apartment types below—or{' '}
                        <button
                            onClick={()=>scrollTo('apt')}
                            className="text-indigo-600 hover:underline"
                        >
                            scroll down
                        </button>{' '}
                        to learn more.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        className="flex flex-col md:flex-row bg-indigo-50 dark:bg-gray-800 rounded-xl shadow-lg p-6"
                    >
                        <BuildingOfficeIcon className="w-10 h-10 text-indigo-500 mb-4 md:mb-0 md:mr-6" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">3–5 Person Shared Apartments</h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Blocks A–D house 3–5 person WGs. Each kitchen has a stove, oven, cupboards, and a
                                usually stocked fridge. Toilet & shower are partially combined or separate. Rooms
                                come furnished (bed, desk, chair) and are fully movable.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col md:flex-row bg-pink-50 dark:bg-gray-800 rounded-xl shadow-lg p-6"
                    >
                        <BuildingOfficeIcon className="w-10 h-10 text-pink-500 mb-4 md:mb-0 md:mr-6" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">2 Person Flats (F & G)</h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Blocks F & G offer calm 2-person flats with a 2-plate stove, smaller fridge,
                                and separate toilet & bathroom. Rooms are slightly larger and quieter.
                            </p>
                        </div>
                    </motion.div>
                </div>
                <div className="text-center">
                    <button
                        onClick={() => scrollTo('fac')}
                        className="mt-4 inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow transition"
                    >
                        View Facilities & Map
                    </button>
                </div>
            </motion.section>

            {/* Facilities */}
            <motion.section
                id="fac"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-semibold mb-6 text-center">Facilities & Common Rooms</h2>
                <div className="grid lg:grid-cols-2 gap-12">
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        <li>Fitness rooms, table tennis, table football, pool</li>
                        <li>Music room, party room, learning room, oven rooms</li>
                        <li>Tools room (drill, jigsaw, soldering gun, jumper cables)</li>
                        <li>Washing rooms (€1.30/cycle; dryer €1.60)</li>
                    </ul>
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="/lageplan.svg"
                            alt="Facilities Map"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </motion.section>

            {/* Broadcasting Fee */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="container mx-auto px-6 py-8 bg-yellow-200 dark:bg-yellow-700 rounded-xl shadow-lg space-y-4 mb-8"
            >
                <h2 className="text-2xl font-semibold">Broadcasting Fee</h2>
                <p>
                    Like in every household, the broadcasting fee for ARD & ZDF has to be paid in a dormitory too.
                    After you report your address change, you’ll receive a letter from the “Beitragsservice.” This
                    fee is per household (shared apartment), so split it with your roommates. Online form{' '}
                    <Link href="#" className="text-indigo-700 hover:underline">here</Link>. English info{' '}
                    <Link href="#" className="text-indigo-700 hover:underline">here</Link>.
                </p>
            </motion.section>

            {/* The Esel’s-Bar */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="container mx-auto px-6 py-8 bg-pink-200 dark:bg-pink-700 rounded-xl shadow-lg space-y-4 mb-8"
            >
                <h2 className="text-2xl font-semibold">The Esel’s-Bar</h2>
                <p className="font-medium">Opening Hours: Wednesdays & Sundays from 9 p.m. to 12 a.m.</p>
                <p>
                    Sociable evenings with an inexpensive drinks menu, run by our friendly bar tutors. Watch the
                    Info-EBS WhatsApp group for the invite link.
                </p>
                <p>
                    Also home to CineEBS movie nights (2nd & 4th Mondays) and board-game evenings (1st & 3rd
                    Mondays), starting at 8 p.m.
                </p>
            </motion.section>

            {/* Party Room */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="container mx-auto px-6 py-8 bg-indigo-100 dark:bg-gray-700 rounded-xl shadow-lg space-y-4 mb-8"
            >
                <h2 className="text-2xl font-semibold">Party Room</h2>
                <p>
                    Located in block E: stove, oven, sink, fridge and a toilet. Pay a €50 deposit to the tutor to
                    book (Fri, Sat & pre-holidays). Reserve a few weeks in advance!
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
                transition={{ duration: 0.6, delay: 0.5 }}
                className="container mx-auto px-6 py-8 bg-green-200 dark:bg-green-700 rounded-xl shadow-lg space-y-4 mb-8"
            >
                <h2 className="text-2xl font-semibold">Washing Rooms</h2>
                <p>
                    Machines cost €1.30/cycle, dryers €1.60—pay via student ID only. Top up at the E-block terminal,
                    and please clear your laundry promptly.
                </p>
            </motion.section>

            {/* Tools Room */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="container mx-auto px-6 py-8 bg-yellow-100 dark:bg-gray-700 rounded-xl shadow-lg space-y-4 mb-8"
            >
                <h2 className="text-2xl font-semibold">Tools Room</h2>
                <p>
                    Drill, jigsaw, soldering gun & jumper cables available—just bring your own consumables
                    (screws, nails, glue). Car drivers can borrow a battery charger & jumper cables.
                </p>
            </motion.section>

            {/* Underground Garage & Bicycle Parking */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="container mx-auto px-6 py-8 bg-blue-100 dark:bg-gray-700 rounded-xl shadow-lg space-y-4 mb-16"
            >
                <h2 className="text-2xl font-semibold">
                    Underground Garage & Bicycle Parking
                </h2>
                <p>
                    Rent an underground spot from Studierendenwerk Ulm at reasonable rates, or lock your bike in any
                    of the garages and outdoor racks around the dorm (see map).
                </p>
            </motion.section>

            {/* Ready to Join Us? */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="container mx-auto px-6 py-16 text-center"
            >
                <SparklesIcon className="mx-auto w-10 h-10 text-yellow-400 mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
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
