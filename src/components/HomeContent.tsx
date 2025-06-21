import Image from 'next/image';

export default function HomeContent() {
    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {/* Left: image + intro */}
            <section className="md:col-span-2 space-y-4">
                <Image
                    src="/dorm.jpg"
                    alt="Eselsbergsteige Dormitory Building"
                    width={800}
                    height={500}
                    className="rounded-xl shadow-lg"
                    priority
                />
                <p className="leading-relaxed text-gray-200">
                    Welcome to Eselsbergsteige dormitory! This website is directed to
                    freshmen. Either you are searching for an apartment and want to get
                    more information about life in the dormitory or you already live
                    here and need help finding your way. In both cases you are
                    absolutely at the right place.
                </p>
                <p className="leading-relaxed text-gray-200">
                    We, the tutors of this dormitory, want to emphasize that we are
                    not the carrier of the dormitory. If you want to live here, please
                    head over to the{' '}
                    <a
                        href="https://studierendenwerk-ulm.de"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline hover:text-accent-light"
                    >
                        Studierendenwerk Ulm
                    </a>.
                </p>
            </section>

            {/* Right: subscribe + events */}
            <aside className="space-y-6">
                {/* Subscribe form */}
                <form action="#" aria-label="Subscribe to mailing list" className="card">
                    <h2 className="text-lg font-semibold mb-2">Subscribe to mailing list</h2>
                    <p className="text-sm text-gray-400 mb-4">
                        Receive current information around the dormitory.
                    </p>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="E-Mail"
                        required
                        className="block w-full p-2 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <button
                        type="submit"
                        className="mt-4 w-full bg-accent text-white py-2 rounded hover:bg-accent-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-light"
                    >
                        Subscribe
                    </button>
                </form>

                {/* Event cards */}
                <a href="#" className="card block">
                    <p className="font-medium text-gray-200">
                        20.12.2023 – Need for action at eduroam WiFi
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                        You may need to re-setup the eduroam WiFi connection on your devices…
                    </p>
                </a>

                <a href="#" className="card block">
                    <p className="font-medium text-gray-200">
                        11.10.2023 – Partyroom open
                    </p>
                </a>
            </aside>
        </div>
    );
}
