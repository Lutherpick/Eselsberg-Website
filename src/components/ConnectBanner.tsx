export default function ConnectBanner() {
    return (
        <section className="py-16 bg-primary text-white">
            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-4">
                <h2 className="text-3xl font-semibold font-sans">Connect with Us</h2>
                <p className="font-body max-w-xl mx-auto">
                    Learn more about dormitory life and upcoming events. Our tutors are here to help.
                </p>
                <a href="/caretakers" className="inline-block px-6 py-3 border border-white font-sans rounded hover:bg-white hover:text-primary transition">
                    Contact Us →
                </a>
            </div>
        </section>
    );
}