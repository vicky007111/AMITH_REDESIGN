import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '../../components/HeroSection'
import StatsBar from '../../components/StatsBar'
import ServicesGrid from '../../components/ServicesGrid'
import ProjectsGrid from '../../components/ProjectsGrid'
import CTASection from '../../components/CTASection'
import ScrollReveal from '../../components/ScrollReveal'
import { ArrowRight, Home as HomeIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AMITH Civil & Allied Engineering | Structural Audit & NDT Services, Chennai',
  description:
    'Welcome to AMITH Civil & Allied Engineering (ACAES) Pvt Ltd. We offer professional structural auditing, NDT/PDT testing, material testing, concrete mix design, and structural restoration services in Chennai.',
}

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection
        title={
          <>
            Cost-Effective <span className="text-[#F59E0B]">End Solutions</span> for All Construction Needs
          </>
        }
        subtitle="AMITH Civil & Allied Engineering (ACAES) Pvt Ltd provides expert structural auditing, NDT/PDT testing, concrete mix design, structural rehabilitation, and third-party quality monitoring in Chennai."
        primaryCTA={{ label: 'Get a Free Quote', href: '/contact' }}
        secondaryCTA={{ label: 'Our Services', href: '/services' }}
        imageSrc="/images/hero/hero-main.jpg"
        imageAlt="AMITH Civil &amp; Allied Engineering - Site Inspection &amp; NDT Testing"
      />

      {/* Stats Bar */}
      <StatsBar />

      {/* Company Overview (2-column section) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="overview-title">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            {/* Left Column: Image with creative layout */}
            <div className="relative w-full">
              <ScrollReveal direction="left" className="relative h-[400px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/gallery/team-site-02.jpg"
                  alt="ACAES civil engineering consultants working on site"
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                {/* Decorative gold accent frame behind image */}
                <div
                  className="absolute inset-0 border-8 border-[#F59E0B]/20 rounded-3xl pointer-events-none"
                  aria-hidden="true"
                />
              </ScrollReveal>
              
              {/* Rotating Stamp Badge overlapping top-left corner */}
              <div className="absolute -top-6 -left-6 z-10 hidden sm:block">
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-white rounded-full shadow-2xl border border-zinc-150 transition-transform duration-300 hover:scale-105">
                  {/* Circular Text */}
                  <div className="absolute inset-0 animate-rotate-stamp will-change-transform transform-gpu">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path
                        id="textPath-stamp-overview"
                        d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                        fill="none"
                      />
                      <text className="text-[7.6px] font-black tracking-[0.14em] fill-[#19439B] uppercase font-sans">
                        <textPath href="#textPath-stamp-overview" startOffset="0%">
                          Amith Civil &amp; Allied Engineering Services • 
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  {/* Center House Icon */}
                  <div className="relative z-10 text-[#19439B] flex items-center justify-center">
                    <HomeIcon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text Content */}
            <ScrollReveal direction="right" className="flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                Who We Are
              </span>
              <h2
                id="overview-title"
                className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-[var(--font-montserrat)] leading-tight"
              >
                Pioneering Excellence in Structural Auditing &amp; Consultancy
              </h2>
              <div className="w-12 h-1 rounded bg-[#F59E0B]" />
              <p className="text-base sm:text-lg text-zinc-650 leading-relaxed font-sans mt-2">
                AMITH Civil &amp; Allied Engineering (ACAES) Pvt Ltd is a Chennai-based engineering consultancy firm. Founded by three distinguished directors with over three decades of combined expertise in academia, structural design, and construction management.
              </p>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
                We specialize in delivering need-based technology, robust engineering checks, and durable solutions for new constructions, as well as restorative retrofitting for older buildings. Partnered with NABL-accredited laboratories, we assure the highest standards of safety, quality control, and testing compliance.
              </p>
              
              <div className="mt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0F172A] hover:text-[#F59E0B] transition-colors"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Preview Grid */}
      <ServicesGrid limit={6} showViewAll={true} />

      {/* Featured Projects Grid */}
      <ProjectsGrid limit={6} showViewAll={true} />

      {/* CTA Section */}
      <CTASection
        headline="Ready to Assess or Restore Your Structure?"
        subtext="Get in touch with our expert engineering team for cost-effective structural auditing, NDT testing, concrete mix design, and third-party quality control."
        buttonLabel="Contact Our Experts"
        buttonHref="/contact"
        variant="dark"
      />
    </div>
  )
}
