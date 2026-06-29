// src/components/Hero.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const IMAGES = [
    { src: '/dorm-day.jpg', alt: 'Eselsbergsteige dormitory during the day' },
    { src: '/dorm-night.jpg', alt: 'Eselsbergsteige dormitory at night' },
    { src: '/dorm-night2.jpg', alt: 'Second night view of the dormitory' },
]

const COPY = {
    en: {
        label: 'Eselsbergsteige Dormitory',
        title: 'Practical information for living at Eselsbergsteige.',
        text:
            'Find news, FAQ answers, tutor contacts, internet help, shared room information, and useful links without digging through old chats.',
        primary: 'Open FAQ',
        secondary: 'Find a tutor',
    },
    de: {
        label: 'Wohnheim Eselsbergsteige',
        title: 'Praktische Infos fuer das Leben an der Eselsbergsteige.',
        text:
            'Finde News, FAQ-Antworten, Tutor-Kontakte, Internet-Hilfe, Infos zu Gemeinschaftsraeumen und wichtige Links ohne langes Suchen.',
        primary: 'FAQ oeffnen',
        secondary: 'Tutor:innen finden',
    },
} as const

export default function Hero() {
    const pathname = usePathname() || '/'
    const lang = pathname.split('/').filter(Boolean)[0] === 'de' ? 'de' : 'en'
    const copy = COPY[lang]

    return (
        <section className="border-b border-slate-200/70 bg-white/55 dark:border-white/10 dark:bg-slate-950/35">
            <div className="container mx-auto grid max-w-7xl gap-8 px-4 py-8 md:grid-cols-[1fr_1.1fr] md:items-center md:py-14">
                <div className="max-w-2xl">
                    <p className="section-label">{copy.label}</p>
                    <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
                        {copy.title}
                    </h1>
                    <p className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-300 md:text-lg">
                        {copy.text}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                        <Link
                            href={`/${lang}/faq`}
                            className="rounded-full bg-primary px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
                        >
                            {copy.primary}
                        </Link>
                        <Link
                            href={`/${lang}/tutors`}
                            className="rounded-full border border-slate-300 px-5 py-2.5 font-sans text-sm font-semibold text-slate-800 transition hover:border-primary hover:text-primary dark:border-white/20 dark:text-slate-100 dark:hover:border-secondary dark:hover:text-secondary"
                        >
                            {copy.secondary}
                        </Link>
                    </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 md:min-h-[360px]">
                    <div className="relative min-h-[220px] overflow-hidden rounded-3xl bg-slate-200 sm:col-span-2 sm:min-h-[320px] dark:bg-slate-800">
                        <Image
                            src={IMAGES[0].src}
                            alt={IMAGES[0].alt}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 55vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
                        {IMAGES.slice(1).map((image) => (
                            <div
                                key={image.src}
                                className="relative min-h-[120px] overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 20vw"
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
