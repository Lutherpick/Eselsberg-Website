import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata = {
    title: 'Eselsbergsteige Dormitory',
    description: 'Student housing Ulm',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-white dark:bg-black text-black dark:text-white transition-colors">
        <ThemeProvider>
            <Header />
            {children}
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    )
}
