// src/components/ImageCarousel.tsx
'use client'

import Image from 'next/image'

const IMAGES: { src: string; alt: string }[] = [
    { src: '/dorm-night.jpg', alt: 'Dorm at night' },
    { src: '/dorm-night2.jpg', alt: 'Dorm at night (view 2)' },
    { src: '/dorm-day.jpg', alt: 'Dorm during the day' },
]

export default function ImageCarousel() {
    return (
        <section className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-[0_8px_30px_rgba(2,6,23,0.08)] dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-end justify-between gap-6">
                <div>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                        Eselsbergsteige
                    </h2>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                        Dormitory impressions
                    </p>
                </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
                {IMAGES.map((img) => (
                    <div
                        key={img.src}
                        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200/40 dark:bg-slate-800/40"
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover"
                            priority={false}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
