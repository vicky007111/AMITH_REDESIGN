"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const leftAnimation = {
    initial: { x: "-25%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  };
  const rightAnimation = {
    initial: { x: "25%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  };

  return (
    <section className="overflow-x-hidden before:content-[''] before:absolute lg:before:h-full sm:before:h-2/3 before:h-3/5 before:bg-no-repeat before:bg-[url('/images/hero/right-background.svg')] before:bg-cover before:right-0 lg:before:top-0 before:bottom-0 lg:before:w-40% before:w-full lg:before:z-0 before:z-1 sm:before:block before:hidden after:content-[''] after:absolute after:bg-grey dark:after:bg-darklight after:h-full lg:after:w-60% after:w-full after:left-0 after:top-0 relative h-full lg:py-9.375! pt-24! pb-0!">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md">
        <div className="grid-cols-12 grid z-1 items-center relative">
          <div className="lg:col-span-6 col-span-12 px-4 py-8 lg:py-16">
            <motion.div
              {...leftAnimation}
              className="relative before:content-[''] before:absolute before:h-full before:w-full before:bg-[url('/images/hero/leftside-backlayer-icons.svg')] before:-left-9.375 before:bg-contain before:bg-no-repeat before:-z-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Engineering Consultancy & Structural Audits
              </div>
              <h1 className="text-dark dark:text-white mb-0 md:text-5xl sm:text-4xl text-3xl font-extrabold leading-tight tracking-tight">
                Precision Engineering. <br />
                <span className="text-primary">Durable Solutions.</span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-black/50 dark:text-white/50 sm:py-1.875 py-5 leading-relaxed">
                AMITH Civil & Allied Engineering Services Pvt Ltd delivers expert diagnostics, quality auditing (TPQM), and structural retrofitting designs. In association with NABL-accredited laboratories, we safeguard infrastructure integrity.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="/#services"
                  className="sm:px-2.188 px-6 sm:py-1.125 py-3.5 rounded-lg text-base hover:cursor-pointer font-semibold bg-primary text-white hover:opacity-90 duration-300 inline-block"
                >
                  Explore Services
                </Link>
                <Link
                  href="/#contact"
                  className="sm:px-2.188 px-6 sm:py-1.125 py-3.5 rounded-lg text-base hover:cursor-pointer font-semibold border border-slate-300 dark:border-darkborder text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-all duration-300 bg-white dark:bg-darkmode"
                >
                  Get Consultation
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-6 col-span-12 sm:bg-none bg-[url('/images/hero/right-background.svg')] px-4 py-8 flex justify-center">
            <motion.div {...rightAnimation} className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 dark:border-darkborder shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
                alt="AMITH Structural Engineering Audit and Testing"
                fill
                className="object-cover hover:scale-105 duration-700 transition-transform"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
