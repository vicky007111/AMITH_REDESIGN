import React from 'react'
import Image from 'next/image'
import { Award, Check } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export interface TeamCardProps {
  name: string
  title: string
  bio: string
  highlights: string[]
  imageSrc?: string
}

export default function TeamCard({
  name,
  title,
  bio,
  highlights,
  imageSrc,
}: TeamCardProps) {
  // Helper to extract initials
  const getInitials = (fullName: string) => {
    // Strip prefixes like Prof. Dr. or Col. Dr. or Er.
    const cleanName = fullName
      .replace(/^(Prof\.|Col\.|Dr\.|Er\.)\s+/gi, '')
      .replace(/^(Dr\.)\s+/gi, '')
    const parts = cleanName.split(' ').filter(Boolean)
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
    }
    return parts[0] ? parts[0][0].toUpperCase() : 'A'
  }

  const initials = getInitials(name)

  return (
    <ScrollReveal direction="up" className="w-full">
      <div className="bg-white rounded-3xl border border-zinc-100 shadow-xl overflow-hidden hover:border-[#F59E0B]/30 hover:shadow-2xl transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-10">
          {/* Left Column: Avatar & Name */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-zinc-100 pb-6 lg:pb-0 lg:pr-8">
            {imageSrc ? (
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-md mb-6 border-2 border-zinc-100">
                <Image
                  src={imageSrc}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-[#0F172A] to-slate-800 border-2 border-[#F59E0B]/30 flex items-center justify-center text-white text-4xl font-extrabold font-[var(--font-montserrat)] shadow-lg mb-6 relative group overflow-hidden">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-200">
                  {initials}
                </span>
                {/* Gold backglow */}
                <div className="absolute inset-0 bg-[#F59E0B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )}
            
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight font-[var(--font-montserrat)] leading-tight">
              {name}
            </h3>
            <div className="w-8 h-0.5 bg-[#F59E0B] my-3" />
            <p className="text-sm font-bold text-[#F59E0B] uppercase tracking-wider">
              {title}
            </p>
          </div>

          {/* Right Column: Bio & Highlights */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-450 mb-2">
                Biography
              </h4>
              <p className="text-base text-zinc-650 leading-relaxed font-sans">
                {bio}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-450 mb-3 flex items-center gap-2">
                <Award size={14} className="text-[#F59E0B]" />
                <span>Key Experience &amp; Highlights</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] shrink-0 mt-0.5" aria-hidden="true">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-sm text-zinc-600 leading-relaxed font-sans">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
