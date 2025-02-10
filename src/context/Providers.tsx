'use client'

import React from 'react'
import {useRouter} from 'next/navigation'
import { HeroUIProvider } from '@heroui/react'

// @ts-ignore
declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>
  }
}

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers(props: ProvidersProps) {
  const router = useRouter()
  const useHref = (href: string) => href

  return (
    <>
      <HeroUIProvider navigate={router.push} useHref={useHref}>{props.children}</HeroUIProvider>
    </>
  )
}
