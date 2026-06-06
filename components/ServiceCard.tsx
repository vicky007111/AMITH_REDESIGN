import Link from 'next/link'
import React from 'react'
import * as Icons from 'lucide-react'

export interface ServiceCardProps {
  icon: string // Lucide icon name, e.g. 'ClipboardCheck'
  title: string
  description: string
  href: string
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  // Dynamically resolve the Lucide icon from its name
  const IconComponent = (Icons as any)[icon]

  return (
    <article className="group relative flex flex-col h-full bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#F59E0B] transition-all duration-300">
      {/* Icon header */}
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-50 text-[#0F172A] group-hover:bg-[#F59E0B] group-hover:text-[#0F172A] transition-colors duration-300">
        {IconComponent ? (
          <IconComponent size={24} aria-hidden="true" />
        ) : (
          <Icons.HelpCircle size={24} aria-hidden="true" />
        )}
      </div>

      {/* Service content */}
      <div className="mt-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-[#0F172A] font-[var(--font-montserrat)] tracking-tight group-hover:text-[#F59E0B] transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-3 text-sm text-zinc-650 leading-relaxed flex-1">
          {description}
        </p>

        {/* Read more link */}
        <div className="mt-6 pt-4 border-t border-zinc-100">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#F59E0B] transition-colors"
          >
            <span>Learn More</span>
            <Icons.ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  )
}
