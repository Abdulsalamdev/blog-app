// src/app/layout.tsx
import './globals.css'
import { Outfit } from 'next/font/google'
import { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'A blog about web development, cloud, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans bg-white text-gray-900 dark:bg-[#0B0B0F] dark:text-gray-100 transition-colors">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}