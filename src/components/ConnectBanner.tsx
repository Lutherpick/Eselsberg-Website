// src/components/ConnectBanner.tsx
'use client'

import Link from 'next/link'

export default function ConnectBanner() {
    return (
        <section className="bg-gray-800 text-white">
            <div className="mx-auto max-w-5xl space-y-4 px-4 py-12 text-center sm:px-6 lg:px-8">
                <h2 className="text-xl font-semibold">Connect with Us</h2>
                <p className="mx-auto max-w-2xl text-sm leading-relaxed">
                    Join our community events, get important updates, or reach out to the tutors for assistance.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <Link
                        href="/contact"
                        className="rounded-full bg-gray-600 px-6 py-2 text-sm font-medium shadow-sm hover:bg-gray-500 transition"
                    >
                        Contact Tutors
                    </Link>
                    <Link
                        href="/events"
                        className="rounded-full border border-gray-400 px-6 py-2 text-sm font-medium hover:bg-gray-700 transition"
                    >
                        Upcoming Events
                    </Link>
                </div>
            </div>
        </section>
    )
}
