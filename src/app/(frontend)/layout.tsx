import React from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './styles.css'

export const metadata = {
  title: "Lebogang Phoshoko | Welcome To Lebogang's Portfolio Website!",
  description: "Welcome to Lebogang Phoshoko's Portfolio Website!",
}

const geistSans = Geist({
  display: 'swap',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  display: 'swap',
  subsets: ['latin'],
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className="dark">
      <body>
        <main className={`${geistSans.className} antialiased`}>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
