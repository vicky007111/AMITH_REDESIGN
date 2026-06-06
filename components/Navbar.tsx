'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'

interface NavLink {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    // Run once on load
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#0B0F19]/90 backdrop-blur-md border-white/10 py-1.5 md:py-2 shadow-xl'
          : 'bg-[#0B0F19]/60 backdrop-blur-sm border-white/5 py-2.5 md:py-3.5'
      }`}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-20 transition-all duration-300">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group py-1"
            aria-label="AMITH Civil &amp; Allied Engineering — home"
          >
            <div className="flex items-center justify-center transition-all duration-300 transform group-hover:scale-105">
              <Image
                src="/logo-brand.png"
                alt="AMITH Civil &amp; Allied Engineering"
                width={140}
                height={46}
                className="object-contain h-8 md:h-10 w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex">
            <ul className="flex items-center gap-1.5" role="list">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 group ${
                        isActive
                          ? 'text-[#F59E0B]'
                          : 'text-zinc-300 hover:text-[#F59E0B]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span
                        className={`absolute bottom-0 left-1/2 h-0.5 bg-[#F59E0B] transition-all duration-300 -translate-x-1/2 ${
                          isActive ? 'w-5' : 'w-0 group-hover:w-5'
                        }`}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="relative overflow-hidden px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#F59E0B] to-amber-500 text-[#0F172A] text-sm font-bold shadow-lg hover:shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu */}
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  )
}
