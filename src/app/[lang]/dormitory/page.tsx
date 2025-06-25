// src/app/dormitory/page.tsx
'use client'

import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Image from 'next/image'
import Link from 'next/link'

const HERO_SLIDES = [
    { id: 'dorm-day',   src: '/dorm-day.jpg',   alt: 'Eselsbergsteige Dormitory, day view' },
    { id: 'dorm-night', src: '/dorm-night2.jpg', alt: 'Eselsbergsteige Dormitory, night view' },
]

export default function DormitoryPage() {
    return (
        <Layout>
            {/* Hero */}
            <Hero slides={HERO_SLIDES} />

            {/* Main content */}
            <main className="prose prose-invert mx-auto px-4 py-12 lg:prose-lg">
                {/* General Information */}
                <section>
                    <h2>General Information</h2>
                    <p>
                        The Eselsbergsteige dormitory, or short “EBS”, is located on the Eselsberg in the
                        decentral northwest of Ulm. During semester over 500 students live here—many spend
                        their first years here before moving on to private apartments.
                    </p>
                    <p>
                        The complex comprises seven multi-story blocks (A–G). Blocks F & G are fully
                        furnished 2-person flats; in A–D, 3–5 people share a kitchen and living area.
                    </p>
                    <p>
                        Included gigabit internet, helpful caretakers and numerous common rooms make dorm
                        life comfortable. For leasing questions, please contact the{' '}
                        <Link
                            href="https://ebs.studierendenwerk-ulm.de/housing?lang=en"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Studierendenwerk Ulm
                        </Link>
                        .
                    </p>
                </section>

                {/* Neighborhood */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12">
                    <div>
                        <h2>Neighborhood</h2>
                        <p>
                            The dorm lies on the upper Eselsberg, bordered by Eselsbergsteige,
                            Ferdinand-Sauerbruch-Weg, and Sebastian-Kneipp-Weg. Mostly quiet,
                            residential surroundings.
                        </p>
                        <p>
                            3 min walk → “Virchowstraße” (bus 5 every 10 min): shops, bakery,
                            pharmacy, doctors. 15 min more → “Burgunderweg”: banks, post, DHL,
                            administration.
                        </p>
                        <p>
                            To campus: bus 5 → “Wissenschaftsstadt” in 10 min or 20 min on foot.
                            Main station: 45 min walk or bus 5 → “Ludwigsfeld”/“Wiley” in 15 min.
                        </p>
                    </div>
                    <div className="relative h-64 lg:h-auto">
                        <Image
                            src="/lageplan.jpg"
                            alt="Map of Eselsbergsteige Dormitory"
                            fill
                            className="object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </section>

                {/* Description of Apartments */}
                <section className="py-12">
                    <h2>Description of Apartments</h2>

                    {/* 3–5 Person WG */}
                    <h3>3, 4 or 5 Person Shared Apartments</h3>
                    <div className="md:flex md:items-start md:gap-8">
                        <div className="md:flex-1">
                            <p>
                                In blocks A–D you’ll find 3–5 person WGs. Kitchens have stove,
                                oven and cupboards; fridge is usually stocked. Toilet and
                                shower may be combined or separate.
                            </p>
                            <p>
                                Rooms include bed, desk, chair and storage—moveable for your
                                comfort.
                            </p>
                        </div>
                        <div className="md:flex-1 relative h-48 sm:h-64 md:h-auto">
                            <Image
                                src="/doublette-plan_english (1).jpg"
                                alt="3–5 person apartment floorplan"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* 2 Person Flat */}
                    <h3 className="mt-8">2 Person Shared Apartments</h3>
                    <div className="md:flex md:items-start md:gap-8">
                        <div className="md:flex-1 relative h-48 sm:h-64 md:h-auto">
                            <Image
                                src="/wg-kueche.jpg"
                                alt="2 person apartment kitchen"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="md:flex-1">
                            <p>
                                Blocks F & G offer calmer 2-person flats with a 2-plate stove,
                                smaller fridge, and separate toilet & bathroom. Rooms are
                                slightly larger.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Waste Separation */}
                <section className="py-12">
                    <h2>Waste Separation and Disposal</h2>
                    <p>
                        Glass → green containers (south of B). Plastic/paper → yellow bags
                        (city office). Bio/residual → any bin. If one is full, use the next—
                        do not leave bags beside.
                    </p>
                    <p className="text-red-600">
                        Plastic bags don’t belong in biological waste!
                    </p>
                </section>

                {/* Noise */}
                <section className="py-12">
                    <h2>Noise</h2>
                    <p>
                        BBQs, birthdays & study nights happen—please communicate early if
                        you’re disturbed. Respect quiet hours after 10 p.m.; keep windows
                        closed.
                    </p>
                </section>

                {/* Transport & Fees */}
                <section className="py-12 space-y-8">
                    <div>
                        <h2>Semester Ticket & Bus Schedule</h2>
                        <p>
                            Bus 5 stops at the dorm every 10 min (weekday). Single fare €2.40;
                            semester ticket €129 for the full term. Free after 6 p.m. &
                            weekends with student ID. Last bus just after midnight; night buses
                            Fri/Sat.
                        </p>
                        <Link
                            href="https://www.dvb-ulm.de/fahrplan/fahrplanuebersicht/"
                            target="_blank"
                            className="text-blue-600 hover:underline"
                        >
                            Bus schedule & prices →
                        </Link>
                        <p><em>Last update: 13.06.2020</em></p>
                    </div>
                    <div>
                        <h2>Broadcasting Fee</h2>
                        <p>
                            One-off per WG via “Beitragsservice” after city registration. Split
                            cost with roommates. Online form{' '}
                            <Link
                                href="https://www.rundfunkbeitrag.de/"
                                target="_blank"
                                className="text-blue-600 hover:underline"
                            >
                                here
                            </Link>{' '}
                            (English info{' '}
                            <Link
                                href="https://www.rundfunkbeitrag.de/informationen/englisch/index_ger.html"
                                target="_blank"
                                className="text-blue-600 hover:underline"
                            >
                                here
                            </Link>).
                        </p>
                    </div>
                </section>

                {/* Facilities */}
                <section className="py-12">
                    <h2>Facilities</h2>
                    <p>
                        Common rooms: fitness, table tennis, pool, music, party, learning,
                        ovens, tools, washing rooms. Tutors manage keys—please leave rooms
                        cleaner than you found.
                    </p>
                    <div className="md:flex md:gap-8 py-8">
                        {/* Table */}
                        <div className="md:flex-1 overflow-x-auto">
                            <table className="min-w-full text-left">
                                <thead>
                                <tr>
                                    <th>Block</th>
                                    <th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y">
                                <tr>
                                    <td>Entrance</td>
                                    <td>109</td><td>111</td><td>113</td><td>115</td><td>105</td><td>107</td><td>4</td>
                                </tr>
                                <tr>
                                    <td>Caretaker</td>
                                    <td>✓</td><td></td><td></td><td></td><td></td><td></td><td></td>
                                </tr>
                                {/* …add remaining rows… */}
                                </tbody>
                            </table>
                        </div>

                        {/* Map */}
                        <div className="md:flex-1 relative h-64 sm:h-80 md:h-auto">
                            <Image
                                src="/lageplan.jpg"
                                alt="Map showing block locations"
                                fill
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Bar, Party & More */}
                    <h3>The Esel’s Bar</h3>
                    <p><strong>Wednesdays & Sundays, 9 p.m.–12 a.m.</strong></p>
                    <p>
                        Boardgame & movie nights on 1st/3rd & 2nd/4th Mondays at 8 p.m. Inexpensive
                        drinks; WhatsApp group for invites.
                    </p>

                    <h3>Party Room</h3>
                    <p>Block E—deposit €50, booking via tutor (Fri/Sat/pre-holidays only).</p>

                    <h3>Washing Rooms</h3>
                    <p>Washer €1.30, dryer €1.60 (student ID only). Top-up at Block E entrance.</p>

                    <h3>Tools Room</h3>
                    <p>
                        Drill, jigsaw, soldering gun, jumper cables & more. Bring consumables (screws,
                        nails, glue).
                    </p>

                    <h3>Underground Garage & Bicycle Parking</h3>
                    <p>
                        Car parking via Studierendenwerk (paid). Bike racks in garages & around campus
                        (see map).
                    </p>
                </section>
            </main>
        </Layout>
    )
}
