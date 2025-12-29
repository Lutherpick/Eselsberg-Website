// src/components/HomeContent.tsx
'use client'

interface HomeContentProps {
    // keep it flexible; dictionary is loaded from JSON and may grow later
    dict: any
}

export default function HomeContent({ dict }: HomeContentProps) {
    return (
        <section
            id="main-content"
            className="mx-auto max-w-4xl px-4 py-12 text-center space-y-6"
        >
            <h1 className="text-3xl font-semibold">{dict.home.title}</h1>
            <p className="text-base leading-relaxed">
                {dict.home.introduction}
            </p>
            <p className="text-base leading-relaxed">
                {dict.home.notice}
            </p>
        </section>
    )
}
