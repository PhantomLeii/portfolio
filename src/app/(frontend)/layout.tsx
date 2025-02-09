import React from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import './styles.css'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const geistSans = Geist({
  display: 'swap',
  subsets: ['latin'],
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main className={`${geistSans.className} antialiased`}>{children}</main>
      </body>
    </html>
  )
}
