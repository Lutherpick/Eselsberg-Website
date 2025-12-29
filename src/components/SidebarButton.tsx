// src/components/SidebarButton.tsx
'use client'

import { useSidebar } from '@/context/SidebarContext'
import { useEffect } from 'react'

export default function SidebarButton() {
    const { sidebarOpen, setSidebarOpen } = useSidebar()

    useEffect(() => {
        const handleScroll = () => {
            if (sidebarOpen) {
                setSidebarOpen(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [sidebarOpen, setSidebarOpen])

    return (
        <div className={`flex-1 p-4 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
            <div className="ml-auto">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setSidebarOpen((prev) => !prev)}
                >
                    {/* Toggle icon based on sidebar state */}
                    {sidebarOpen ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    )
}
