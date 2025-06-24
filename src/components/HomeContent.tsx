// src/components/HomeContent.tsx
'use client'

type Props = {
  dict: Record<string, string>
}

export default function HomeContent({dict}: Props) {
    return (
        <section
            id="main-content"
            className="mx-auto max-w-4xl px-4 py-12 text-center space-y-6"
        >
            <h1 className="text-3xl font-semibold">{dict["home.title"]}</h1>
            <p className="text-base leading-relaxed">
                This website is directed to freshmen. Whether you’re searching for an apartment or already live here,
                you’ll find everything from internet setup to caretaker information and community events.
            </p>
            <p className="text-base leading-relaxed">
                We, the tutors of this dormitory, want to stress that we are the residents’ representatives, not
                the official carrier. For leasing details, please visit the Studierendenwerk Ulm. We keep these
                pages up-to-date, but always confirm with the official site for the latest legal info.
            </p>
        </section>
    )
}
