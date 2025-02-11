'use client'

import React from 'react'
import { Header } from '@/payload-types'
import Image from 'next/image'
import { unstable_cache } from 'next/cache';
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
} from '@heroui/react'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const { data, error, isLoading } = useSWR<Header>(
    '/api/globals/header?depth=1',
    async (url: string) => {
      const res = await fetch(url)
      return await res.json()
    }
  )

  const navLinks = data?.navigation?.navItems
  const socialLinks = data?.socialLinks?.links
  console.log(socialLinks)

  if (isLoading) {
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden"
          />
          <NavbarBrand>
            <p className="text-xl text-inherit">
              Phoshoko
              <span className="text-secondary-500">.tech</span>
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-4" justify="center">
          <NavbarItem>
            <Skeleton className="w-20 h-6 rounded" />
          </NavbarItem>
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
          className="md:hidden"
        />
        <NavbarBrand>
          <Link href="/" color="foreground">
            <p className="text-xl font-bold text-inherit">
              Phoshoko<span className="text-secondary-500">.tech</span>
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
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
        {socialLinks?.map((link, i) => (
          <NavbarItem key={`${link.url}-${i}`}>
            <Link target="_blank" href={String(link.url)} color="foreground">
              <Image
                // @ts-ignore
                src={link.icon.url}
                // @ts-ignore
                alt={link.icon.alt}
                width={28}
                height={28}
              />
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {navLinks?.map((link, i) => (
          <NavbarMenuItem key={`${link.url}-${i}`}>
            <Link
              href={String(link.url)}
              color="foreground"
              className="font-semibold"
            >
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
