"use client";

import ImageCarousel from "./ImageCarousel";

export default function Hero() {
    return (
        <section className="bg-white dark:bg-gray-900">
            {/* 1️⃣ — Full-width carousel */}
            <div className="mx-auto max-w-screen-xl">
                <ImageCarousel />
            </div>

            {/* 2️⃣ — Description panel */}
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Welcome to Eselsbergsteige Dormitory
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    This website is directed to freshmen. Whether you’re searching for an
                    apartment or already live here, you’ll find everything from internet
                    setup to caretaker information and community events.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We, the tutors of this dormitory, want to stress that we are the
                    residents’ representatives, not the official carrier. For leasing
                    details, please visit the{" "}
                    <a
                        href="https://studierendenwerk-ulm.de"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline hover:text-accent-light"
                    >
                        Studierendenwerk Ulm
                    </a>
                    . We keep these pages up-to-date, but always confirm with the official
                    site for the latest legal info.
                </p>
            </div>
        </section>
    );
}
