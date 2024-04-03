import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Devom Brahmbhatt\'s Portfolio',
  description: 'Devom Brahmbhatt\'s Portfolio Website. Built with NextJS and Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
