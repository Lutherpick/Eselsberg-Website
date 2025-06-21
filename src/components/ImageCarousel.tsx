"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const IMAGES = [
    { src: "/dorm-night.jpg", alt: "Dormitory at night" },
    { src: "/dorm-day.jpg",   alt: "Dormitory during the day" },
];

export default function ImageCarousel() {
    const [idx, setIdx] = useState(0);
    const total = IMAGES.length;

    const prev = () => setIdx((idx - 1 + total) % total);
    const next = () => setIdx((idx + 1) % total);

    return (
        <div className="relative w-full overflow-hidden rounded-xl shadow-lg h-64 md:h-80">
            {IMAGES.map((img, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                        i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                >
                    <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={i === 0}
                    />
                </div>
            ))}

            {/* Left Arrow */}
            <button
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75"
            >
                <ChevronLeftIcon className="h-6 w-6" />
            </button>

            {/* Right Arrow */}
            <button
                onClick={next}
                aria-label="Next slide"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75"
            >
                <ChevronRightIcon className="h-6 w-6" />
            </button>
        </div>
    );
}
