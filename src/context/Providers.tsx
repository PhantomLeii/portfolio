'use client'

import { ReactNode } from 'react'
import { HeroUIProvider } from '@heroui/react'

interface ProvidersProps {
  children: ReactNode
}

const Providers = (props: ProvidersProps) => {
  return <HeroUIProvider>{props.children}</HeroUIProvider>
}

export default Providers
