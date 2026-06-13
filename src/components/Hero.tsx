"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 lg:py-32 bg-slate-50 dark:bg-darklight transition-colors duration-300"
    >
      {/* Decorative Background Icons */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/2 pointer-events-none opacity-30 dark:opacity-20 hidden md:block">
        <Image
          src="/images/hero/leftside-backlayer-icons.svg"
          alt="Abstract pattern"
          fill
          className="object-contain object-left"
        />
      </div>
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 pointer-events-none opacity-30 dark:opacity-20 hidden md:block">
        <Image
          src="/images/hero/rightside-backlayer-icons.svg"
          alt="Abstract pattern"
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="container mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Left Content */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
            {/* Tagline/Positioning */}
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              Engineering Consultancy & Structural Audits
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              Precision Engineering. <br className="hidden sm:inline" />
              <span className="text-primary">Durable Solutions.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              AMITH Civil & Allied Engineering Services Pvt Ltd delivers expert diagnostics, quality auditing (TPQM), and structural retrofitting designs. In association with NABL-accredited laboratories, we safeguard infrastructure integrity.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl text-base font-semibold bg-primary hover:bg-primary-hover text-white transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 text-center"
              >
                Get Consultation
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-xl text-base font-semibold border border-slate-300 dark:border-darkborder hover:border-primary dark:hover:border-primary text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-all duration-300 text-center bg-white dark:bg-darkmode"
              >
                Explore Services
              </a>
            </div>

            {/* Partner Tie-up Snippet */}
            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center lg:justify-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-semibold text-left">
                Formal MoU with <strong className="text-slate-800 dark:text-slate-200">Tech-Civil Material Testing Laboratory</strong> (NABL Accredited) for Material & NDT Testing
              </p>
            </div>
          </div>

          {/* Hero Right Media */}
          <div className="col-span-12 lg:col-span-6 relative flex justify-center">
            {/* Soft decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/5 rounded-3xl blur-2xl transform rotate-3"></div>

            <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 dark:border-darkborder shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
                alt="AMITH Structural Engineering Audit and Testing"
                fill
                priority
                className="object-cover hover:scale-105 duration-700 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
