import React from 'react'
import Link from 'next/link'
import ServiceCard from './ServiceCard'
import { services } from '../lib/data/services'
import ScrollReveal from './ScrollReveal'

export interface ServicesGridProps {
  limit?: number
  showViewAll?: boolean
}

export default function ServicesGrid({
  limit,
  showViewAll = false,
}: ServicesGridProps) {
  const displayedServices = limit ? services.slice(0, limit) : services

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50" aria-labelledby="services-title">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="services-title"
            className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-[var(--font-montserrat)]"
          >
            Our Engineering Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-sans">
            We deliver state-of-the-art structural auditing, non-destructive testing, and civil engineering consultancy.
          </p>
          <div className="mt-4 w-12 h-1 rounded bg-[#F59E0B] mx-auto" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedServices.map((service, index) => (
            <ScrollReveal
              key={service.id}
              direction="up"
              delay={index * 0.05}
              className="h-full"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                href={`/services#${service.anchorId}`}
              />
            </ScrollReveal>
          ))}
        </div>

        {showViewAll && services.length > displayedServices.length && (
          <ScrollReveal direction="up" className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-[#0F172A] text-[#0F172A] text-sm font-bold hover:bg-[#0F172A] hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
