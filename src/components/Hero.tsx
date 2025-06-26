'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import Image from 'next/image'
import { useCallback, useState } from 'react'

// swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// register modules
SwiperCore.use([Navigation, Pagination, Autoplay])

const SLIDES: { id: string; src: string; alt: string }[] = [
    { id: 'night1', src: '/dorm-night.jpg', alt: 'Dorm at night' },
    { id: 'night2', src: '/dorm-night2.jpg', alt: 'Dorm at night (view 2)' },
    { id: 'day', src: '/dorm-day.jpg', alt: 'Dorm in the fall' },
]

export default function Hero() {
    const [isPaused, setIsPaused] = useState(false)

    // scroll down to general info
    const scrollToInfo = useCallback(() => {
        document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <div className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] overflow-hidden h-[60vh] md:h-[80vh]">
            <Swiper
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
                                placeholder="blur"
                                blurDataURL="/dorm-night2.jpg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 pointer-events-none" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                                <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
                                    Welcome to
                                    <br />
                                    Eselsbergsteige Dormitory
                                </h1>
                                <p className="mt-4 text-base md:text-lg text-white/90 max-w-xl">
                                    Home to 500 students, gigabit internet, caring staff, and vibrant common rooms.
                                </p>
                                <button
                                    onClick={scrollToInfo}
                                    className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg transition"
                                >
                                    Explore General Info ↓
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-button-prev !text-white !opacity-75" />
                <div className="swiper-button-next !text-white !opacity-75" />
            </Swiper>

            <button
                onClick={() => setIsPaused((p) => !p)}
                className={
                    'absolute bottom-4 right-4 z-10 rounded-full p-2 shadow-md text-white transition ' +
                    (isPaused
                        ? 'bg-black/50 hover:bg-green-600'
                        : 'bg-black/50 hover:bg-red-600')
                }
                aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
            >
                {isPaused ? '▶️' : '⏸️'}
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
        </div>
    )
}
