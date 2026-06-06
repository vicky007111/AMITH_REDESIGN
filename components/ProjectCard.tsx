import React from 'react'
import Image from 'next/image'

export interface ProjectCardProps {
  image: string
  alt: string
  title: string
  category: 'structural-audit' | 'qaqc-tpqm' | 'restoration'
  description?: string
  onClick?: () => void
}

export default function ProjectCard({
  image,
  alt,
  title,
  category,
  description,
  onClick,
}: ProjectCardProps) {
  // Category mapping for user-friendly display
  const categoryLabels = {
    'structural-audit': 'Structural Audit',
    'qaqc-tpqm': 'QA/QC & TPQM',
    'restoration': 'Restoration & Rehab',
  }

  const badgeText = categoryLabels[category] || category

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick()
    }
  }

  const content = (
    <div className="relative group overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 shadow-md h-80 sm:h-96 flex flex-col justify-end transition-all duration-500">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
          className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500 opacity-80"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"
          aria-hidden="true"
        />
      </div>

      {/* Card Details */}
      <div className="relative z-10 p-6 flex flex-col gap-3">
        {/* Category Badge */}
        <div className="self-start">
          <span className="inline-block px-3 py-1 rounded-full bg-[#F59E0B] text-[#0F172A] text-xs font-bold uppercase tracking-wider">
            {badgeText}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white font-[var(--font-montserrat)] tracking-tight line-clamp-2 leading-snug">
          {title}
        </h3>

        {/* Excerpt Reveal on Hover */}
        {description && (
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3 overflow-hidden max-h-0 group-hover:max-h-24 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            {description}
          </p>
        )}
      </div>
    </div>
  )

  if (onClick) {
    return (
      <button
        onClick={onClick}
        onKeyDown={handleKeyDown}
        className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded-2xl"
        aria-label={`View details of ${title}`}
      >
        {content}
      </button>
    )
  }

  return content
}
