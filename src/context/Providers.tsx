import React from 'react'
import { HeroUIProvider } from '@heroui/react'

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers(props: ProvidersProps) {
  return (
    <>
      <HeroUIProvider>{props.children}</HeroUIProvider>
    </>
  )
}
