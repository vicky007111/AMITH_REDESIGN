import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '../../../components/PageHeader'
import TeamCard from '../../../components/TeamCard'
import CTASection from '../../../components/CTASection'
import ScrollReveal from '../../../components/ScrollReveal'
import { teamMembers } from '../../../lib/data/team'
import { ShieldCheck, GraduationCap, Building2, Eye, Compass, Layers, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about AMITH Civil & Allied Engineering (ACAES) Pvt Ltd. Explore our company history, our core vision and mission, our technical partnerships, and our distinguished board of directors.',
}

export default function AboutPage() {
  const breadcrumb = [
    { label: 'About Us', href: '/about' }
  ]

  const missionPillars = [
    {
      title: 'Affordable Concrete Technology',
      desc: 'Provide affordable solutions to concrete technology needs by integrating innovative and durable methods.'
    },
    {
      title: 'Structural Auditing & Retrofitting',
      desc: 'Audit existing buildings, bridges, and infrastructure, providing retrofitting solutions to extend their service life.'
    },
    {
      title: 'Durable Construction Methodology',
      desc: 'Equip the new construction industry with appropriate, cost-effective, and long-lasting execution methodologies.'
    },
    {
      title: 'Knowledge Dissemination',
      desc: 'Disseminate engineering expertise by conducting training programs for quality auditing, assessment, and repair execution.'
    }
  ]

  const whyChooseUs = [
    {
      icon: GraduationCap,
      title: 'Distinguished Leadership',
      desc: 'Founded by three directors with over three decades of experience spanning Anna University academia, military engineering, and hydro/thermal power infrastructure.'
    },
    {
      icon: ShieldCheck,
      title: 'NABL-Aligned Testing',
      desc: 'Our strategic MOU with Tech Civil Material Testing Laboratory Pvt Ltd provides NABL compliance for all building material testing and NDT/PDT assessments.'
    },
    {
      icon: Building2,
      title: 'CUBE (IIT Madras) Affiliation',
      desc: 'Our senior consultants actively partner with CUBE (Centre for Urbanization, Buildings & Environment), an IIT Madras outfit, to deliver third-party Quality Control.'
    },
    {
      icon: Layers,
      title: 'One-Stop End Solutions',
      desc: 'We offer need-based technology, structural design, independent auditing, QA/QC, and retrofitting solutions under one unified, cost-effective engineering platform.'
    }
  ]

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#F8FAFC]">
      {/* Page Header */}
      <PageHeader title="About Us" breadcrumb={breadcrumb} />

      {/* Company Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="story-title">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            {/* Left Column: Story Text */}
            <ScrollReveal direction="left" className="flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                Our Story
              </span>
              <h2
                id="story-title"
                className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-[var(--font-montserrat)] leading-tight"
              >
                Cost-Effective Engineering Built on Decades of Trust
              </h2>
              <div className="w-12 h-1 rounded bg-[#F59E0B]" />
              
              <p className="text-base text-zinc-650 leading-relaxed font-sans mt-2">
                Structural components naturally undergo functional changes that can impair their quality and stability over time. At AMITH Civil &amp; Allied Engineering (ACAES) Pvt Ltd, we specialize in assessing these distress signals and delivering need-based, durable, and cost-effective solutions in a single unified platform.
              </p>
              
              <p className="text-sm sm:text-base text-zinc-650 leading-relaxed font-sans">
                Established as a start-up by three distinguished directors with over thirty years each in engineering academia, structural design, and construction management, we bridge the gap between complex engineering theories and practical, on-site execution.
              </p>

              <p className="text-sm sm:text-base text-zinc-650 leading-relaxed font-sans">
                Through our strategic testing MOU with Tech Civil Material Testing Laboratory Pvt Ltd, Chennai, we conduct extensive non-destructive (NDT) and partial destructive testing (PDT) on structural concrete elements. This allows us to accurately diagnose structural distress, check concrete mix quality, and design custom retrofits to ensure complete structural safety and longevity.
              </p>
            </ScrollReveal>

            {/* Right Column: Creative Visual Overlay */}
            <ScrollReveal direction="right" className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/gallery/site-inspection-02.jpg"
                alt="AMITH Civil Engineering - Professional site assessment work"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#0B0F19]/20" aria-hidden="true" />
              {/* Decorative accent */}
              <div
                className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0F172A]/90 backdrop-blur-md border border-white/10 text-white"
              >
                <p className="text-xs font-semibold text-[#F59E0B] uppercase tracking-wider mb-1">
                  Our Motto
                </p>
                <p className="text-sm font-medium leading-relaxed font-sans">
                  &quot;Durable engineering solutions that maximize safety and minimize structural lifecycle costs.&quot;
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] text-white relative overflow-hidden" aria-labelledby="vnm-title">
        {/* Background mesh grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #F59E0B 0, #F59E0B 1px, transparent 0, transparent 50%)',
            backgroundSize: '30px 30px',
          }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl relative z-10">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
              Core Purpose
            </span>
            <h2
              id="vnm-title"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight font-[var(--font-montserrat)] mt-2"
            >
              Vision &amp; Mission
            </h2>
            <div className="w-12 h-1 rounded bg-[#F59E0B] mx-auto mt-4" />
          </ScrollReveal>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Vision Card (Left 5 Columns) */}
            <ScrollReveal direction="left" className="lg:col-span-5 flex h-full">
              <div className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#F59E0B]/30 transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] mb-6">
                    <Compass size={24} />
                  </div>
                  <h3 className="text-2xl font-bold font-[var(--font-montserrat)] text-white mb-4">
                    Our Vision
                  </h3>
                  <p className="text-zinc-300 leading-relaxed font-sans">
                    To provide need-based technology, Engineering &amp; consultancy services for the construction industry with durable solutions for new construction &amp; one-time solutions for repair &amp; rehabilitation/retrofitting the concrete elements of existing buildings &amp; infrastructure.
                  </p>
                </div>
                
                <div className="mt-8 border-t border-white/10 pt-6 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Need-Based Engineering
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission Pillars (Right 7 Columns) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h3 className="text-xl font-bold font-[var(--font-montserrat)] text-white mb-2 flex items-center gap-2">
                <Eye size={20} className="text-[#F59E0B]" />
                <span>Our Mission Pillars</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {missionPillars.map((pillar, index) => (
                  <ScrollReveal
                    key={index}
                    direction="right"
                    delay={index * 0.05}
                    className="bg-white/5 border border-white/[0.06] rounded-2xl p-6 hover:border-[#F59E0B]/20 transition-all duration-300 flex flex-col gap-3"
                  >
                    <div className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                      <span>Pillar {index + 1}</span>
                    </div>
                    <h4 className="text-base font-bold text-white font-[var(--font-montserrat)]">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50" aria-labelledby="why-title">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
              Our Strengths
            </span>
            <h2
              id="why-title"
              className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-[var(--font-montserrat)] mt-2"
            >
              Why Choose ACAES?
            </h2>
            <div className="w-12 h-1 rounded bg-[#F59E0B] mx-auto mt-4" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon
              return (
                <ScrollReveal
                  key={index}
                  direction="up"
                  delay={index * 0.05}
                  className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-md hover:shadow-xl hover:border-[#F59E0B]/20 transition-all duration-300 flex flex-col sm:flex-row gap-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] shrink-0">
                    <IconComponent size={24} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-[#0F172A] font-[var(--font-montserrat)]">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-650 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="board-title">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
              Leadership Team
            </span>
            <h2
              id="board-title"
              className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-[var(--font-montserrat)] mt-2"
            >
              Board of Directors
            </h2>
            <p className="mt-4 text-base text-zinc-600 leading-relaxed font-sans">
              AMITH Civil &amp; Allied Engineering is directed by three dedicated professionals combining over 90 years of cumulative expertise in academia, military operations, and utility infrastructure management.
            </p>
            <div className="w-12 h-1 rounded bg-[#F59E0B] mx-auto mt-4" />
          </ScrollReveal>

          {/* Render TeamCard instances */}
          <div className="flex flex-col gap-10">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                title={member.title}
                bio={member.bio}
                highlights={member.highlights}
                imageSrc={member.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] text-white" aria-labelledby="partnerships-title">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
              Technical Partners &amp; Credentials
            </span>
            <h2
              id="partnerships-title"
              className="text-2xl sm:text-3xl font-extrabold tracking-tight font-[var(--font-montserrat)] mt-2"
            >
              Collaborations &amp; MOUs
            </h2>
            <div className="w-12 h-1 rounded bg-[#F59E0B] mx-auto mt-4" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Partner 1 */}
            <ScrollReveal direction="left" className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#F59E0B]/30 transition-all">
              <div className="flex flex-col gap-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                  Official MOU Partner
                </div>
                <h3 className="text-xl font-bold font-[var(--font-montserrat)] text-white">
                  Tech Civil Material Testing Laboratory Pvt Ltd
                </h3>
                <p className="text-sm text-zinc-350 leading-relaxed font-sans">
                  A Chennai-based, NABL-accredited laboratory partner. Through this collaboration, we conduct precise destructive, partial destructive, and non-destructive testing (NDT/PDT) on structural concrete and assess core building material strengths.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-zinc-400 bg-white/5 px-4 py-2 rounded-xl border border-white/5 w-fit">
                <CheckCircle2 size={14} className="text-[#F59E0B]" />
                <span>NABL Accredited Testing Facility</span>
              </div>
            </ScrollReveal>

            {/* Partner 2 */}
            <ScrollReveal direction="right" className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#F59E0B]/30 transition-all">
              <div className="flex flex-col gap-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                  Academic Outfit Collaboration
                </div>
                <h3 className="text-xl font-bold font-[var(--font-montserrat)] text-white">
                  CUBE — Centre for Urbanization, Buildings &amp; Environment
                </h3>
                <p className="text-sm text-zinc-350 leading-relaxed font-sans">
                  An outfit of IIT Madras. Our senior consultants work closely with CUBE on governmental and public sector third-party quality control (TPQM), auditing, and monitoring services for infrastructure, secretariats, and mass housing projects.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-zinc-400 bg-white/5 px-4 py-2 rounded-xl border border-white/5 w-fit">
                <CheckCircle2 size={14} className="text-[#F59E0B]" />
                <span>IIT Madras Outfit Association</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        headline="Work with Chennai's Premier Civil Consultancy"
        subtext="Discuss your structural auditing, concrete mix design, third-party quality control, or restoration projects with our expert engineering board."
        buttonLabel="Get a Free Quote"
        buttonHref="/contact"
        variant="gold"
      />
    </div>
  )
}
