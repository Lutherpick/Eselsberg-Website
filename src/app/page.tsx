// src/app/page.tsx

import Hero from '@/components/Hero'
import HomeContent from '@/components/HomeContent'
import NewsGrid from '@/components/NewsGrid'
import ConnectBanner from '@/components/ConnectBanner'

export default function Page() {
    return (
        <div>
            {/* 1) Shrunk Swiper banner */}
            <Hero />

            {/* 2) Centered intro text */}
            <main>
                <HomeContent />

                {/* 3) News & updates */}
                <NewsGrid />

                {/* 4) Connect banner */}
                <ConnectBanner />
            </main>
        </div>
    )
}
