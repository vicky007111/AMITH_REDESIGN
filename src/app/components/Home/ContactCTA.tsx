"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimateOnScroll from "@/app/components/shared/AnimateOnScroll";

export default function ContactCTA() {
  return (
    <section id="contact-cta" className="bg-white dark:bg-darkmode transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Expanded overview and details */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            <AnimateOnScroll className="w-full">
              {/* Label */}
              <p className="text-black/50 dark:text-white/50 text-base sm:text-lg mb-3">
                Get In Touch
              </p>

              {/* Heading */}
              <h2 className="font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-black dark:text-white leading-tight">
                Let&apos;s Partner on Your <br className="hidden sm:block" /> Next Infrastructure Project
              </h2>

              {/* Accent line - left aligned */}
              <div className="w-16 h-1 bg-primary mt-4 mb-6 rounded-full dark:bg-white/20"></div>

              {/* Expanded Description text */}
              <div className="text-sm sm:text-base text-slate-600 dark:text-white/70 font-medium leading-relaxed space-y-4 mb-8 max-w-2xl">
                <p>
                  Whether you need a full structural stability certificate, forensic NDT investigations, stage-by-stage quality monitoring, or expert retrofitting designs, AMITH Civil & Allied Engineering Services is ready to advise you.
                </p>
                <p>
                  We collaborate with developers, corporate clients, public undertakings, and private owners to ensure safety, regulatory compliance, and longevity of all concrete structures. Reach out to start a conversation about your project requirements.
                </p>
              </div>

              {/* Key Features/Value Props list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full">
                <div className="flex items-center gap-3">
                  <Icon
                    icon="solar:check-circle-bold"
                    width="22"
                    height="22"
                    className="text-emerald-500 shrink-0"
                  />
                  <span className="text-sm font-semibold text-slate-700 dark:text-white/80">
                    Chartered Engineers & Valuers
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    icon="solar:check-circle-bold"
                    width="22"
                    height="22"
                    className="text-emerald-500 shrink-0"
                  />
                  <span className="text-sm font-semibold text-slate-700 dark:text-white/80">
                    Advanced NDT Diagnostics
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    icon="solar:check-circle-bold"
                    width="22"
                    height="22"
                    className="text-emerald-500 shrink-0"
                  />
                  <span className="text-sm font-semibold text-slate-700 dark:text-white/80">
                    NABL Lab Testing Support
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    icon="solar:check-circle-bold"
                    width="22"
                    height="22"
                    className="text-emerald-500 shrink-0"
                  />
                  <span className="text-sm font-semibold text-slate-700 dark:text-white/80">
                    Stability & Safety Certification
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm sm:text-base font-bold bg-primary text-white hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] duration-200 shadow-lg shadow-primary/20 transition-all cursor-pointer no-underline"
                >
                  <Icon icon="solar:chat-round-dots-bold" width="20" height="20" />
                  Schedule a Consultation
                </Link>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: Direct Contact & Office Details (Expanded) */}
          <div className="lg:col-span-5 w-full">
            <AnimateOnScroll className="w-full">
              <div className="bg-grey dark:bg-darklight border border-slate-200/60 dark:border-darkborder/40 rounded-2xl p-6 sm:p-8 shadow-xs">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Direct Contact Info
                </h3>

                {/* Info List */}
                <div className="space-y-6 mb-8">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon icon="solar:phone-bold" className="text-primary dark:text-blue" width="20" height="20" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 dark:text-white/40 uppercase tracking-wider">
                        Call or Message
                      </h4>
                      <a 
                        href="tel:+919940548833" 
                        className="text-sm sm:text-base font-bold text-slate-700 dark:text-white mt-0.5 block hover:text-primary dark:hover:text-blue transition-colors no-underline"
                      >
                        +91 99405 48833
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon icon="solar:letter-bold" className="text-primary dark:text-blue" width="20" height="20" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 dark:text-white/40 uppercase tracking-wider">
                        Email Address
                      </h4>
                      <a 
                        href="mailto:amithcivilengineering@gmail.com" 
                        className="text-sm sm:text-base font-bold text-slate-700 dark:text-white mt-0.5 block hover:text-primary dark:hover:text-blue transition-colors break-all no-underline"
                      >
                        amithcivilengineering@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon icon="solar:map-point-bold" className="text-primary dark:text-blue" width="20" height="20" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 dark:text-white/40 uppercase tracking-wider">
                        Office Location
                      </h4>
                      <p className="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-300 mt-0.5 leading-snug">
                        Velachery, Chennai, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust badge */}
                <div className="pt-6 border-t border-slate-200 dark:border-darkborder/30">
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-white/60 font-medium">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <Icon icon="solar:shield-check-linear" className="text-emerald-500" width="18" height="18" />
                    </div>
                    <span>
                      Guaranteed response within 24 business hours. Your project queries are kept confidential.
                    </span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
