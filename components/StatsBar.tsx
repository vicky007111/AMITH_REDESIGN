import React from 'react'
import AnimatedCounter from './AnimatedCounter'

export default function StatsBar() {
  return (
    <section
      className="relative z-20 -mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-label="Company Statistics"
    >
      <div className="bg-[#0F172A] rounded-2xl border border-white/10 shadow-2xl overflow-hidden py-8 px-6 sm:px-10 lg:px-16">
        {/* Decorative pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          aria-hidden="true"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #F59E0B 0, #F59E0B 1px, transparent 0, transparent 50%)',
            backgroundSize: '16px 16px',
          }}
        />

        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y-0 divide-x-0 md:divide-x divide-white/10 text-white z-10">
          <div className="flex justify-center items-center">
            <AnimatedCounter target={30} suffix="+" label="Years Experience" />
          </div>
          <div className="flex justify-center items-center">
            <AnimatedCounter target={40} suffix="+" label="Projects" />
          </div>
          <div className="flex justify-center items-center">
            <AnimatedCounter target={3} label="Directors" />
          </div>
          <div className="flex justify-center items-center">
            <AnimatedCounter target={1} label="NABL Partner" />
          </div>
        </div>
      </div>
    </section>
  )
}
