// src/app/layout.tsx
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'
import Sidebar from '@/components/Sidebar'
import { SidebarProvider } from '@/context/SidebarContext'

export const metadata = {
    title: 'Eselsbergsteige Dormitory',
    description: 'Student housing Ulm',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-white dark:bg-black text-black dark:text-white transition-colors">
        <ThemeProvider>
            <SidebarProvider>
                <Header />
                <Sidebar />
                {children}
                <Footer />
            </SidebarProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}
