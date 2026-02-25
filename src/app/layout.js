import { Eczar, Fira_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PostHogProvider from '@/components/PostHogProvider'

const eczar = Eczar({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const firaMono = Fira_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '700'],
})

export const metadata = {
  title: 'Personal Website | Fantasy Portfolio',
  description: 'A fantasy RPG-themed personal website featuring blog, portfolio, and experience sections.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${eczar.variable} ${firaMono.variable} font-sans antialiased`}>
        <PostHogProvider>
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </PostHogProvider>
      </body>
    </html>
  )
}
