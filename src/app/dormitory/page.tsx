// src/app/dormitory/page.tsx
'use client'

import Hero from '@/components/Hero'
import Image from 'next/image'
import Link from 'next/link'
import {
    TrashIcon,
    MoonIcon,
    HomeIcon,
    TicketIcon,
    BuildingOfficeIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

export default function DormitoryPage() {
    return (
        <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
            {/* — Hero Slideshow — */}
            <Hero />

            {/* — Welcome — */}
            <section className="container mx-auto px-6 py-16 text-center">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-4"
                >
                    Welcome to Eselsbergsteige Dormitory
                </motion.h1>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
                >
                    Your home on the Eselsberg: 500 students, gigabit internet, caring staff,
                    and vibrant common rooms.
                </motion.p>
            </section>

            {/* — Waste Separation — */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6 py-12 rounded-2xl shadow-2xl bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-600 dark:to-blue-700 hover:shadow-3xl transform hover:-translate-y-1 transition"
            >
                <div className="flex items-center mb-4">
                    <div className="p-2 bg-white/20 rounded-full mr-3">
                        <TrashIcon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white">Waste Separation & Disposal</h2>
                </div>
                <p className="text-white mb-3">
                    Glass → green bins (south of B). Plastic/paper → yellow bags (city office). Bio/residual → any bin.
                    If one is full, use the next—don’t leave bags beside.
                </p>
                <span className="inline-block bg-white/30 text-white px-4 py-1 rounded-full text-sm">
          Plastic bags don’t belong in biological waste!
        </span>
            </motion.section>

            {/* — Quiet Hours — */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="container mx-auto px-6 py-12 mt-12 rounded-2xl shadow-2xl bg-gradient-to-r from-purple-400 to-pink-500 dark:from-purple-600 dark:to-pink-700 hover:shadow-3xl transform hover:-translate-y-1 transition"
            >
                <div className="flex items-center mb-4">
                    <div className="p-2 bg-white/20 rounded-full mr-3">
                        <MoonIcon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white">Quiet Hours & Community</h2>
                </div>
                <p className="text-white">
                    BBQs, birthdays & study nights happen—please communicate early if you’re disturbed.
                    Respect quiet hours after 10 p.m.; keep windows closed.
                </p>
            </motion.section>

            {/* — Neighborhood — */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
                <div>
                    <div className="flex items-center mb-4">
                        <div className="p-2 bg-indigo-500 dark:bg-indigo-400 rounded-full mr-3">
                            <HomeIcon className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-semibold">Neighborhood</h2>
                    </div>
                    <p className="mb-2">
                        The dorm lies on the upper Eselsberg, bordered by Eselsbergsteige,
                        Ferdinand-Sauerbruch-Weg, and Sebastian-Kneipp-Weg.
                    </p>
                    <p className="mb-2">
                        3 min walk → “Virchowstraße” (bus 5 every 10 min): shops, bakery, pharmacy, doctors.<br />
                        15 min → “Burgunderweg”: banks, post, DHL, administration.
                    </p>
                    <p>
                        To campus: bus 5 → “Wissenschaftsstadt” in 10 min or 20 min on foot.<br />
                        Main station: 45 min walk or bus 5 → “Ludwigsfeld”/“Wiley” in 15 min.
                    </p>
                </div>
                <div className="relative h-64 lg:h-auto rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src="/lageplan.jpg"
                        alt="Map of Eselsbergsteige Dormitory"
                        fill
                        className="object-cover"
                    />
                </div>
            </motion.section>

            {/* — Semester Ticket — */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="container mx-auto px-6 py-12 rounded-2xl shadow-2xl bg-gradient-to-r from-yellow-400 to-red-400 dark:from-yellow-600 dark:to-red-600 hover:shadow-3xl transform hover:-translate-y-1 transition"
            >
                <div className="flex items-center mb-4">
                    <div className="p-2 bg-white/20 rounded-full mr-3">
                        <TicketIcon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-white">Semester Ticket & Bus Schedule</h2>
                </div>
                <p className="text-white mb-2">
                    Bus 5 stops at the dorm every 10 min (weekday). Single fare €2.40; semester ticket €129
                    (full term). Free after 6 p.m. & weekends with student ID.
                </p>
                <Link
                    href="https://www.dvb-ulm.de/fahrplan/fahrplanuebersicht/"
                    className="inline-block text-white underline"
                    target="_blank"
                >
                    Bus schedule & prices →
                </Link>
                <p className="mt-2 text-sm italic text-white/80">Last update: 13.06.2020</p>
            </motion.section>

            {/* — Apartment Types — */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12"
            >
                <div className="rounded-2xl shadow-2xl bg-gray-100 dark:bg-gray-800 p-8 hover:shadow-3xl transform hover:-translate-y-1 transition">
                    <div className="flex items-center mb-4">
                        <div className="p-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3">
                            <BuildingOfficeIcon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold">3–5 Person Shared Apartments</h3>
                    </div>
                    <p className="text-gray-800 dark:text-gray-200">
                        In blocks A–D you’ll find 3–5 person WGs. Kitchens have stove, oven and cupboards;
                        fridge is usually stocked. Toilet and shower may be combined or separate. Rooms
                        include bed, desk, chair and storage—moveable for your comfort.
                    </p>
                </div>
                <div className="rounded-2xl shadow-2xl bg-gray-100 dark:bg-gray-800 p-8 hover:shadow-3xl transform hover:-translate-y-1 transition">
                    <div className="flex items-center mb-4">
                        <div className="p-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3">
                            <BuildingOfficeIcon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold">2 Person Flats (F & G)</h3>
                    </div>
                    <p className="text-gray-800 dark:text-gray-200">
                        Blocks F & G offer calmer 2-person flats with a 2-plate stove, smaller fridge,
                        and separate toilet & bathroom. Rooms are slightly larger.
                    </p>
                </div>
            </motion.section>

            {/* — Facilities & Map — */}
            <motion.section
                initial="hidden}"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="container mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-2xl"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center">Facilities & Common Rooms</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                        <li>Fitness rooms, table tennis, table football, pool</li>
                        <li>Music room, party room, learning room, oven rooms</li>
                        <li>Tools room (drill, jigsaw, soldering gun, jumper cables)</li>
                        <li>Washing rooms (€1.30/cycle; dryer €1.60)</li>
                    </ul>
                    <div className="relative h-64 lg:h-auto rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/lageplan.jpg"
                            alt="Map of common facilities"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </motion.section>

            {/* — Closing Sparkle Section — */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="container mx-auto px-6 py-16 text-center"
            >
                <SparklesIcon className="mx-auto w-12 h-12 text-yellow-400 mb-4" />
                <h2 className="text-3xl font-bold mb-2">Ready to Join Us?</h2>
                <p className="mb-6 text-gray-700 dark:text-gray-300">
                    Reach out via the Studierendenwerk Ulm for leasing questions, or drop by our
                    Info EBS WhatsApp group to get connected with current residents!
                </p>
                <Link
                    href="https://ebs.studierendenwerk-ulm.de/housing?lang=en"
                    className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition"
                    target="_blank"
                >
                    Contact Studierendenwerk Ulm
                </Link>
            </motion.section>

            {/* Footer is rendered by app/layout.tsx */}
        </main>
    )
}
