import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'

interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string
}

const FacebookIcon = ({ size = 18, ...props }: CustomIconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const LinkedinIcon = ({ size = 18, ...props }: CustomIconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const TwitterIcon = ({ size = 18, ...props }: CustomIconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const YoutubeIcon = ({ size = 18, ...props }: CustomIconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
)

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  {
    href: 'https://facebook.com',
    label: 'Facebook',
    icon: FacebookIcon,
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: LinkedinIcon,
  },
  {
    href: 'https://twitter.com',
    label: 'Twitter / X',
    icon: TwitterIcon,
  },
  {
    href: 'https://youtube.com',
    label: 'YouTube',
    icon: YoutubeIcon,
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="bg-[#0F172A] text-zinc-300"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Gold top accent line */}
      <div className="h-1 w-full bg-[#F59E0B]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand + tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 group mb-4 py-1"
              aria-label="AMITH Civil &amp; Allied Engineering — home"
            >
              <div className="flex items-center justify-center transition-all duration-300 transform group-hover:scale-105">
                <Image
                  src="/logo-brand.png"
                  alt="AMITH Civil &amp; Allied Engineering"
                  width={140}
                  height={46}
                  className="object-contain h-10 w-auto"
                />
              </div>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed mb-2">
              AMITH Civil &amp; Allied Engineering (ACAES) Pvt Ltd
            </p>
            <p className="text-sm text-[#F59E0B] font-medium leading-relaxed">
              Cost-Effective End Solutions for All Construction Needs
            </p>
          </div>

          {/* Column 2: Quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-[var(--font-montserrat)]">
              Quick Links
            </h3>
            <ul className="space-y-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-[#F59E0B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Contact details */}
          <address className="not-italic" aria-label="Contact information">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-[var(--font-montserrat)]">
              Contact Us
            </h3>
            <ul className="space-y-3" role="list">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-[#F59E0B] mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm text-zinc-400 leading-relaxed">
                  No.35/F3, Sai Krupa Apartment,
                  <br />
                  Ramagirinagar, Taramani Link Road,
                  <br />
                  Velachery, Chennai&#8209;600042
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  size={16}
                  className="text-[#F59E0B] shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="tel:+919940548833"
                  className="text-sm text-zinc-400 hover:text-[#F59E0B] transition-colors"
                >
                  +91 99405 48833
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="text-[#F59E0B] shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="mailto:amithcivilengineering@gmail.com"
                  className="text-sm text-zinc-400 hover:text-[#F59E0B] transition-colors break-all"
                >
                  amithcivilengineering@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="text-[#F59E0B] shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="mailto:sales@amith.in.net"
                  className="text-sm text-zinc-400 hover:text-[#F59E0B] transition-colors"
                >
                  sales@amith.in.net
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={16}
                  className="text-[#F59E0B] shrink-0"
                  aria-hidden="true"
                />
                <a
                  href="mailto:admin@amith.in.net"
                  className="text-sm text-zinc-400 hover:text-[#F59E0B] transition-colors"
                >
                  admin@amith.in.net
                </a>
              </li>
            </ul>
          </address>

          {/* Column 4: Social links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-[var(--font-montserrat)]">
              Follow Us
            </h3>
            <ul className="flex flex-wrap gap-3" role="list">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${label}`}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-zinc-300 hover:bg-[#F59E0B] hover:text-[#0F172A] transition-colors"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <p>
            &copy; {currentYear} AMITH Civil &amp; Allied Engineering (ACAES) Pvt Ltd. All rights reserved.
          </p>
          <p>
            Designed &amp; built for{' '}
            <span className="text-[#F59E0B]">amith.in.net</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
