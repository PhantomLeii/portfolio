'use client'

import React from 'react'
import { HeroUIProvider } from '@heroui/react'

interface ProviderProps {
  children: React.ReactNode
}

export default function Providers(props: ProviderProps) {
  const { children } = props
  return <HeroUIProvider>{children}</HeroUIProvider>
}
