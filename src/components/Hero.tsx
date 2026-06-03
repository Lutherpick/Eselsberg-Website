// src/components/Hero.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { usePathname } from 'next/navigation'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const SLIDES: { id: string; src: string; alt: string }[] = [
    { id: 'night1', src: '/dorm-night.jpg', alt: 'Dorm at night' },
    { id: 'night2', src: '/dorm-night2.jpg', alt: 'Dorm at night (view 2)' },
    { id: 'day', src: '/dorm-day.jpg', alt: 'Dorm in the fall' },
]

export default function Hero() {
    const [isPaused, setIsPaused] = useState(false)
    const pathname = usePathname() || '/'
    const currentLang = pathname.split('/').filter(Boolean)[0] === 'de' ? 'de' : 'en'

    const scrollToInfo = useCallback(() => {
        document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <section className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] min-h-[620px] overflow-hidden h-[68vh] md:h-[82vh]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                loop
                autoplay={isPaused ? false : { delay: 6000, disableOnInteraction: false }}
                slidesPerView={1}
                className="h-full"
            >
                {SLIDES.map(({ id, src, alt }) => (
                    <SwiperSlide key={id} className="h-full">
                        <div className="relative h-full animate-kenburns">
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-slate-950/55 to-black/70 pointer-events-none" />
                            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[var(--bg)] to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-center px-4 pt-16 text-center">
                                <div className="mx-auto max-w-4xl">
                                    <div className="mx-auto mb-5 inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-secondary backdrop-blur">
                                        Student living in Ulm
                                    </div>
                                    <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl">
                                        Welcome to
                                        <br />
                                        Eselsbergsteige Dormitory
                                    </h1>
                                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/90 md:text-xl">
                                        Home to 500 students, fast internet, helpful tutors, and shared spaces that make daily life easier.
                                    </p>
                                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                                        <button
                                            onClick={scrollToInfo}
                                            className="rounded-full bg-secondary px-6 py-3 font-sans text-sm font-bold text-slate-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-yellow-300"
                                        >
                                            Explore essentials
                                        </button>
                                        <a
                                            href={`/${currentLang}/tutors`}
                                            className="rounded-full border border-white/40 bg-white/10 px-6 py-3 font-sans text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
                                        >
                                            Find a tutor
                                        </a>
                                    </div>
                                    <div className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-3 text-white">
                                        {[
                                            ['500+', 'residents'],
                                            ['24/7', 'network help'],
                                            ['DE/EN', 'info pages'],
                                        ].map(([value, label]) => (
                                            <div key={value} className="rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur">
                                                <div className="font-sans text-xl font-bold">{value}</div>
                                                <div className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/70">{label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                onClick={() => setIsPaused((p) => !p)}
                className={
                    'absolute bottom-6 right-6 z-10 rounded-full border border-white/25 px-3 py-2 font-sans text-xs font-semibold text-white shadow-md backdrop-blur transition ' +
                    (isPaused ? 'bg-primary/70 hover:bg-primary' : 'bg-black/35 hover:bg-black/55')
                }
                aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
            >
                {isPaused ? 'Play' : 'Pause'}
            </button>

            <style jsx>{`
                @keyframes kenburns {
                    0% {
                        transform: scale(1) translate(0, 0);
                    }
                    100% {
                        transform: scale(1.05) translate(0, -2%);
                    }
                }
                .animate-kenburns {
                    animation: kenburns 20s ease-in-out infinite alternate;
                }
            `}</style>
        </section>
    )
}
