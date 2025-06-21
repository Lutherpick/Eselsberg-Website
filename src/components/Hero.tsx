'use client';

import ImageCarousel from './ImageCarousel';

export default function Hero() {
    return (
        <section className="bg-light-bg dark:bg-dark-bg">
            {/* Carousel */}
            <div className="mx-auto max-w-screen-xl">
                <ImageCarousel />
            </div>

            {/* Description */}
            <div className="mx-auto max-w-screen-xl container py-12">
                <h1 className="text-4xl font-bold font-sans mb-4 text-gray-900 dark:text-gray-100">
                    Welcome to Eselsbergsteige Dormitory
                </h1>
                <p className="text-lg font-body text-gray-700 dark:text-gray-300 mb-6">
                    This website is directed to freshmen. Whether you’re searching for an
                    apartment or already live here, you’ll find everything from internet
                    setup to caretaker information and community events.
                </p>
                <p className="font-body text-gray-700 dark:text-gray-300 leading-relaxed">
                    We, the tutors of this dormitory, want to stress that we are the
                    residents’ representatives, not the official carrier. For leasing
                    details, please visit the{' '}
                    <a
                        href="https://studierendenwerk-ulm.de"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary underline hover:text-secondary-light"
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
