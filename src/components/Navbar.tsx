'use client'

import React from 'react'
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
  Button,
} from '@heroui/react'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const { data, error, isLoading } = useSWR(
    '/api/globals/header',
    async (...args) => {
      const res = await fetch(...args)
      const body = await res.json()
      return body
    }
  )

  console.log(data)

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
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="primary">Get Started</Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="#">Features</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">Customers</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">Integrations</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
