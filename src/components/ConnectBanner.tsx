// src/components/ConnectBanner.tsx
'use client'

import Link from 'next/link'

export default function ConnectBanner({ lang }: { lang: 'en' | 'de' }) {
    const isDe = lang === 'de'

    return (
        <section className="border-y border-white/10 bg-primary text-white">
            <div className="mx-auto max-w-5xl space-y-5 px-4 py-14 text-center sm:px-6 lg:px-8">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                    {isDe ? 'Gemeinschaft' : 'Community'}
                </p>
                <h2 className="text-3xl font-semibold">
                    {isDe ? 'Kontakt & Hilfe' : 'Connect & get help'}
                </h2>
                <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/85">
                    {isDe
                        ? 'Wende dich bei Fragen an die Tutor:innen oder informiere dich ueber aktuelle News und Termine.'
                        : 'Reach out to the tutors for help, or check the latest news and announcements.'}
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <Link
                        href={`/${lang}/tutors`}
                        className="rounded-full bg-secondary px-6 py-3 font-sans text-sm font-bold text-slate-950 transition hover:bg-yellow-300"
                    >
                        {isDe ? 'Tutor:innen kontaktieren' : 'Contact tutors'}
                    </Link>
                    <Link
                        href={`/${lang}/news`}
                        className="rounded-full border border-white/35 px-6 py-3 font-sans text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                        {isDe ? 'News oeffnen' : 'Open news'}
                    </Link>
                </div>
            </div>
        </section>
    )
}
