import Link from 'next/link'
import React from 'react'
import ScrollReveal from './ScrollReveal'

export interface CTASectionProps {
  headline: string
  subtext?: string
  buttonLabel: string
  buttonHref: string
  variant?: 'dark' | 'gold' // dark = #0F172A, gold = #F59E0B
}

export default function CTASection({
  headline,
  subtext,
  buttonLabel,
  buttonHref,
  variant = 'dark',
}: CTASectionProps) {
  const isDark = variant === 'dark'

  return (
    <section
      className={[
        'relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center',
        isDark ? 'bg-[#0F172A] text-white' : 'bg-[#F59E0B] text-[#0F172A]',
      ].join(' ')}
    >
      {/* Decorative patterns */}
      <div
        className="absolute inset-0 opacity-5"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-4xl z-10">
        <ScrollReveal direction="up" className="flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-[var(--font-montserrat)] max-w-3xl leading-tight">
            {headline}
          </h2>

          {subtext && (
            <p
              className={[
                'text-lg sm:text-xl max-w-2xl leading-relaxed',
                isDark ? 'text-zinc-350' : 'text-[#0F172A]/90',
              ].join(' ')}
            >
              {subtext}
            </p>
          )}

          <div className="mt-4">
            <Link
              href={buttonHref}
              className={[
                'inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl',
                isDark
                  ? 'bg-[#F59E0B] text-[#0F172A] hover:bg-amber-400'
                  : 'bg-[#0F172A] text-white hover:bg-slate-900',
              ].join(' ')}
            >
              {buttonLabel}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
