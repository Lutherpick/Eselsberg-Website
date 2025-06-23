// src/components/ThemeProvider.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({ toggle: () => {}, theme: 'light' })

export function useTheme() {
    return useContext(ThemeContext)
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const root = document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(theme)
    }, [theme])

    const toggle = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))

    return <ThemeContext.Provider value={{ toggle, theme }}>{children}</ThemeContext.Provider>
}
