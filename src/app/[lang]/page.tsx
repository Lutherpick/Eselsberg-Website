// src/app/page.tsx

import Hero from '@/components/Hero'
import HomeContent from '@/components/HomeContent'
import NewsGrid from '@/components/NewsGrid'
import ConnectBanner from '@/components/ConnectBanner'

import { getDictionary } from '../dictionaries'

import 'server-only'

export default async function Page({
    params
}: {
  params: Promise<{ lang: "en" | "de" }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)
    return (
        <div>
            {/* 1) Shrunk Swiper banner */}
            <Hero />

            {/* 2) Centered intro text */}
            <main>
                <HomeContent dict={dict} />

                {/* 3) News & updates */}
                <NewsGrid />

                {/* 4) Connect banner */}
                <ConnectBanner />
            </main>
        </div>
    )
}
