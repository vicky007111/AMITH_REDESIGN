'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export interface HeroSectionProps {
  title: React.ReactNode
  subtitle: string
  primaryCTA: { label: string; href: string }
  secondaryCTA: { label: string; href: string }
  imageSrc: string
  imageAlt: string
}

export default function HeroSection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  imageSrc,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[90vh] sm:min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-950 text-white overflow-hidden"
      aria-label="Introduction Section"
    >
      {/* Background Image with fill and priority */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 transition-opacity duration-1000"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/85 via-[#0F172A]/60 to-[#0F172A]/90"
          aria-hidden="true"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-32 text-center flex flex-col items-center">
        {/* Headline */}
        <h1
          className="hero-animate-title text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-[var(--font-montserrat)] leading-tight sm:leading-none"
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="hero-animate-subtitle mt-6 text-lg sm:text-xl md:text-2xl text-zinc-350 max-w-3xl leading-relaxed font-sans"
        >
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-animate-cta mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href={primaryCTA.href}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-[#F59E0B] text-[#0F172A] hover:bg-amber-400 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            {primaryCTA.label}
          </Link>
          <Link
            href={secondaryCTA.href}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold border-2 border-white/20 hover:border-white/40 hover:bg-white/5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            {secondaryCTA.label}
          </Link>
        </div>
      </div>

      {/* Scroll indicator chevron */}
      <div className="absolute bottom-8 left-1/2 hero-animate-bounce z-10 flex flex-col items-center">
        <ChevronDown size={32} className="text-zinc-400 hover:text-white transition-colors cursor-pointer" />
      </div>
    </section>
  )
}
