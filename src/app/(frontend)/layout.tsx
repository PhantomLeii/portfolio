import React from 'react'
import Providers from '@/context/Providers'
import Navbar from '@/components/Navbar'
import './styles.css'

export const metadata = {
  title: 'Payload Blank Template',
  description: 'Welcome to the Portfolio website of Lebogang Phoshoko',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <Navbar />
          <main className="container mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
