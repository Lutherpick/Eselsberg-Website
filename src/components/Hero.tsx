// src/components/Hero.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import Image from 'next/image'
import { useState } from 'react'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Register Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay])

const SLIDES = [
    { id: 'night1', src: '/dorm-night.jpg',   alt: 'Dorm at night' },
    { id: 'night2', src: '/dorm-night2.jpg', alt: 'Dorm at night (alternate view)' },
    { id: 'day',    src: '/dorm-day.jpg',     alt: 'Dorm in the fall' },
] as const

export default function Hero() {
    const [isPaused, setIsPaused] = useState(false)

    return (
        <div className="relative w-full overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                loop
                autoplay={isPaused ? false : { delay: 5000, disableOnInteraction: false }}
                slidesPerView={1}
                className="h-[250px] md:h-[365px] w-full"
            >
                {SLIDES.map(({ id, src, alt }) => (
                    <SwiperSlide key={id} className="w-full h-full">
                        <div className="relative w-full h-full">
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </SwiperSlide>
                ))}

                <div className="swiper-button-prev" aria-label="Previous slide" />
                <div className="swiper-button-next" aria-label="Next slide" />
            </Swiper>

            <button
                onClick={() => setIsPaused(p => !p)}
                className="absolute bottom-4 right-4 z-10 rounded-full bg-white/80 p-2 shadow-md"
                aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
            >
                {isPaused ? '▶️' : '⏸️'}
            </button>
        </div>
    )
}