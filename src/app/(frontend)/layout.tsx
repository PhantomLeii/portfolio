import React from 'react'

interface FrontendLayoutProps {
  children: React.ReactNode
}

export default function FrontendLayout(props: FrontendLayoutProps) {
  const { children } = props
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
