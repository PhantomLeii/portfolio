'use client'

import React from 'react'
import { Header } from '@/payload-types'
import useSWR from 'swr'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Skeleton,
  Button,
} from '@heroui/react'
import { linkSync } from 'fs'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const { data, error, isLoading } = useSWR<Header>(
    '/api/globals/header',
    async (url: string) => {
      const res = await fetch(url)
      const body = await res.json()
      return body
    }
  )

  const navLinks = data?.navigation?.navItems

  if (isLoading) {
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="text-xl text-inherit">
              Phoshoko
              <span className="text-secondary-500">.tech</span>
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Skeleton className="w-20 h-6 rounded" />
          </NavbarItem>
          <NavbarItem>
            <Skeleton className="w-20 h-6 rounded" />
          </NavbarItem>
          <NavbarItem>
            <Skeleton className="w-20 h-6 rounded" />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="flex gap-2">
            <Skeleton className="w-10 h-10 rounded-full" />
            <Skeleton className="w-10 h-10 rounded-full" />
            <Skeleton className="w-10 h-10 rounded-full" />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    )
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="text-xl font-bold text-inherit">
            Phoshoko<span className="text-secondary-500">.tech</span>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navLinks?.map((link, i) => (
          <NavbarItem key={`${link.url}-${i}`}>
            <Link
              href={String(link.url)}
              color="foreground"
              className="font-semibold"
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="primary">Get Started</Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {navLinks?.map((link, i) => (
          <NavbarItem key={`${link.url}-${i}`}>
            <Link
              href={String(link.url)}
              color="foreground"
              className="font-semibold"
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
