'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Info, Hammer, Briefcase, Image as ImageIcon, Phone, ArrowRight, ChevronRight } from 'lucide-react'

interface NavLink {
  href: string
  label: string
}

interface MobileMenuProps {
  links: NavLink[]
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  '/': Home,
  '/about': Info,
  '/services': Hammer,
  '/projects': Briefcase,
  '/gallery': ImageIcon,
  '/contact': Phone,
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} as const

const drawerVariants = {
  hidden: { x: '100%' },
  visible: { 
    x: 0,
    transition: { 
      type: 'spring', 
      damping: 25, 
      stiffness: 200,
      staggerChildren: 0.08,
      delayChildren: 0.1
    } 
  },
  exit: { 
    x: '100%',
    transition: { 
      type: 'tween', 
      duration: 0.25,
      ease: 'easeIn'
    }
  }
} as const

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', damping: 20, stiffness: 150 } },
} as const

export default function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Wait for client mount for Portal rendering
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const menuContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/65 md:hidden backdrop-blur-sm"
            style={{ willChange: 'opacity' }}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.nav
            key="drawer"
            id="mobile-nav-drawer"
            aria-label="Mobile navigation"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={drawerVariants}
            style={{ willChange: 'transform' }}
            className="fixed top-0 right-0 z-50 h-full w-80 bg-slate-950/95 backdrop-blur-md border-l border-white/10 shadow-2xl md:hidden flex flex-col"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 h-12 md:h-20 border-b border-white/10">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/logo-brand.png"
                    alt="AMITH Civil &amp; Allied Engineering"
                    width={100}
                    height={32}
                    className="object-contain h-7 md:h-8 w-auto"
                  />
                </div>
              </Link>
              <button
                aria-label="Close navigation menu"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-[#F59E0B] hover:bg-white/10 hover:border-white/20 transition-all focus:outline-none"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav links */}
            <ul className="flex-1 px-4 py-6 gap-1.5 flex flex-col overflow-y-auto" role="list">
              {links.map((link) => {
                const isActive = pathname === link.href
                const Icon = iconMap[link.href] || Info
                return (
                  <motion.li key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      className={[
                        'flex items-center gap-4 px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 group border',
                        isActive
                          ? 'text-[#F59E0B] bg-[#F59E0B]/10 border-[#F59E0B]/20'
                          : 'text-zinc-200 hover:text-[#F59E0B] hover:bg-white/5 border-transparent',
                      ].join(' ')}
                    >
                      <Icon size={20} className={isActive ? 'text-[#F59E0B]' : 'text-zinc-400 group-hover:text-[#F59E0B] transition-colors'} />
                      <span className="flex-1">{link.label}</span>
                      {isActive ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" aria-hidden="true" />
                      ) : (
                        <ChevronRight size={16} className="text-zinc-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      )}
                    </Link>
                  </motion.li>
                )
              })}
            </ul>

            {/* CTA and Socials at bottom */}
            <motion.div variants={itemVariants} className="px-6 py-6 border-t border-white/10 bg-[#070B14]/60">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F59E0B] to-amber-500 text-[#0F172A] font-bold text-sm hover:from-amber-400 hover:to-amber-500 shadow-lg transition-all duration-300"
              >
                <span>Get a Free Quote</span>
                <ArrowRight size={16} />
              </Link>
              
              {/* Social icons */}
              <div className="flex items-center justify-center gap-6 mt-6">
                <a href="https://facebook.com" className="text-zinc-450 hover:text-[#F59E0B] transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" className="text-zinc-450 hover:text-[#F59E0B] transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" className="text-zinc-450 hover:text-[#F59E0B] transition-colors" aria-label="Twitter">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )

  return (
    <>
      {/* Hamburger button */}
      <button
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
        onClick={() => setIsOpen((prev) => !prev)}
        className="md:hidden flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl bg-white/5 border border-white/10 text-zinc-200 hover:text-[#F59E0B] hover:bg-white/10 hover:border-white/20 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] z-50 relative"
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {mounted && createPortal(menuContent, document.body)}
    </>
  )
}
