// src/components/Sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSidebar } from '@/context/SidebarContext'

const NAV_ITEMS = [
    { label: 'Home', slug: '' },
    { label: 'News', slug: 'news' },
    { label: 'Dormitory', slug: 'dormitory' },
    { label: 'Caretakers', slug: 'caretakers' },
    { label: 'Tutors', slug: 'tutors' },
    { label: 'Internet', slug: 'internet' },
    { label: 'FAQ', slug: 'faq' },
]

export default function Sidebar() {
    const { sidebarOpen } = useSidebar()
    const pathname = usePathname() || '/'
    const segments = pathname.split('/').filter(Boolean)

    const currentLang = segments[0] === 'de' ? 'de' : 'en'

    return (
        <div className="flex">
            <div
                className={`bg-gray-800 text-white
                    absolute h-lvh transition-all
                    duration-300 z-50 right-0
                    ${sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'}
                `}
            >
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Menu</h2>

                    {NAV_ITEMS.map((item) => {
                        const href = item.slug ? `/${currentLang}/${item.slug}` : `/${currentLang}`

                        return (
                            <div key={item.slug || 'home'} className="mt-4">
                                <Link
                                    href={href}
                                    className="hover:text-secondary transition"
                                >
                                    {item.label}
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
