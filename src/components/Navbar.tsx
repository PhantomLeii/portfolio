'use client'

import React from 'react'
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from '@heroui/react'
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa6'

const getData = () => {
  const menuItems = [
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Experience',
      href: '/experience',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ]
  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/phoshokoml',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/PhantomLeii',
    },
  ]

  return {
    menuItems,
    socialLinks,
  }
}

const Component = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const { menuItems } = getData()

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link color="foreground" className="font-bold tracking-wide text-2xl">
            Phoshoko.tech
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {menuItems.map((menuItem) => (
          <NavbarItem key={menuItem.href}>
            <Link
              color="foreground"
              className="text-xl font-semibold"
              href={menuItem.href}
            >
              {menuItem.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            className="text-xl"
            href="https://github.com/PhantomLeii/"
            color="foreground"
          >
            <FaGithubAlt />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-xl"
            href="https://linkedin.com/in/phoshokoml"
            color="foreground"
          >
            <FaLinkedin />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((menuItem, i) => (
          <NavbarItem key={`${menuItem}-${i}`}>
            <Link href={menuItem.href}>{menuItem.label}</Link>
          </NavbarItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Component
