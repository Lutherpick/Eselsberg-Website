// src/components/Sidebar.tsx
'use client'

import { useSidebar } from '@/context/SidebarContext'

export default function Sidebar() {
    const { sidebarOpen } = useSidebar()

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`bg-gray-800 text-white
                        absolute h-lvh transition-all
                        duration-300 z-50 right-0
                        ${sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'}
                `}
            >
                {/* Sidebar content */}
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Menu</h2>

                    {['Home', 'Dormitory', 'Caretakers', 'Tutors', 'Bar', 'Internet', 'FAQ'].map((l) => (
                        <div key={l} className="mt-4">
                            <a
                                href={l === 'Home' ? '/' : `/${l.toLowerCase()}`}
                                className="hover:text-secondary transition"
                            >
                                {l}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
