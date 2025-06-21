export default function ConnectBanner() {
    return (
        <section className="py-16 bg-accent text-white">
            <div className="container text-center space-y-4">
                <h2 className="text-3xl font-bold">Connect with Us</h2>
                <p className="text-lg max-w-prose mx-auto">
                    Learn more about dormitory life and upcoming events. Our tutors are here to help.
                </p>
                <a
                    href="/caretakers"
                    className="inline-block mt-4 px-6 py-3 border border-white rounded hover:bg-white hover:text-accent transition"
                >
                    Contact Us →
                </a>
            </div>
        </section>
    );
}
