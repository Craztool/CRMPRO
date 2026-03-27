import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Agentia — AI Автоматизация для Бизнеса',
  description: 'Создаём AI-агентов, RAG базы знаний и автоматизацию процессов, которые работают 24/7 и масштабируются вместе с вашим бизнесом.',
  keywords: ['AI автоматизация', 'LangChain', 'RAG', 'AI агенты', 'n8n', 'автоматизация бизнеса'],
  openGraph: {
    title: 'Agentia — AI Автоматизация для Бизнеса',
    description: 'Создаём AI-агентов, RAG базы знаний и автоматизацию процессов.',
    type: 'website',
    locale: 'ru_RU',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentia — AI Автоматизация',
    description: 'AI-агенты и автоматизация для вашего бизнеса.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
