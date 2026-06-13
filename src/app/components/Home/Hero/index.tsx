"use client";
import React from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import Image from "next/image";
import Link from "next/link";

// ---------------------------------------------------------------------------
// CountUp — animates a number from 0 → end on mount
// ---------------------------------------------------------------------------
const CountUp = ({
  end,
  suffix,
  duration = 1.5,
}: {
  end: number;
  suffix: string;
  duration?: number;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    const controls = animate(count, end, {
      duration,
      ease: "easeOut",
      delay: 0.3,
    });
    return () => controls.stop();
  }, [end, duration]);

  React.useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => unsubscribe();
  }, []);

  return (
    <>
      {display}
      {suffix}
    </>
  );
};

const STATS = [
  { end: 15, suffix: "+", label: "Years Experience" },
  { end: 500, suffix: "+", label: "Projects Completed" },
  { end: 100, suffix: "%", label: "Client Satisfaction" },
] as const;

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
const Hero: React.FC = () => {
  return (
    <section
      className={[
        /* Height: auto on mobile, fill viewport on lg+ */
        "overflow-hidden relative",
        "min-h-[80svh] lg:h-screen",
        "flex flex-col",
        "transition-colors duration-300",

        /* Blueprint grid background */
        "after:content-[''] after:absolute after:inset-0 after:z-0",
        "after:bg-slate-50 dark:after:bg-darklight",
        "after:bg-[linear-gradient(to_right,rgba(0,28,104,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,28,104,0.03)_1px,transparent_1px)]",
        "dark:after:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]",
        "after:bg-[size:40px_40px]",
      ].join(" ")}
    >
      {/* Blue accent panel — spans full section height on the right side */}
      <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-[34.00%] bg-primary z-[1]" />

      {/* Inner wrapper */}
      <div className="relative z-10 w-full flex-1 flex">
        <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 w-full flex items-stretch">
          <div className="grid grid-cols-12 w-full items-stretch gap-y-6 lg:gap-x-12">

            {/* ───── LEFT COLUMN ───── */}
            <div className="lg:col-span-7 col-span-12 flex flex-col justify-between pt-24 sm:pt-28 lg:pt-20 pb-12 sm:pb-16 lg:pb-2 xl:pb-4 2xl:pb-8">
              {/* Main content group */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center flex-1"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-5 w-fit select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-blue-400 animate-pulse" />
                  <span className="hidden sm:inline">Engineering Consultancy &amp; Structural Audits</span>
                  <span className="sm:hidden">Engineering Consultancy</span>
                  <span className="text-[10px] text-slate-400 font-mono pl-1 border-l border-slate-300 dark:border-slate-700 hidden md:inline">
                    12.9815° N, 80.2223° E
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-slate-900 dark:text-white mb-0 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  Precision Engineering.
                  <br />
                  <span className="text-primary dark:text-blue-400">
                    Durable Solutions.
                  </span>
                </h1>

                {/* Subtext */}
                <p className="text-base sm:text-lg font-medium text-slate-500 dark:text-slate-400 mt-4 sm:mt-5 leading-relaxed max-w-xl">
                  AMITH Civil &amp; Allied Engineering Services Pvt Ltd delivers
                  expert diagnostics, quality auditing (TPQM), and structural
                  retrofitting designs. In association with NABL-accredited
                  laboratories, we safeguard infrastructure integrity.
                </p>

                {/* CTA */}
                <div className="mt-5 sm:mt-6 flex flex-wrap gap-4 items-center">
                  <Link
                    href="/services"
                    className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base font-bold bg-primary text-white hover:bg-primary/95 hover:scale-[1.02] active:scale-[0.98] duration-200 shadow-lg shadow-primary/20 transition-all text-center inline-block cursor-pointer"
                  >
                    Explore Services
                  </Link>
                </div>
              </motion.div>

              {/* Stats Row — pinned to the bottom of the left column */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center gap-8 sm:gap-10 md:gap-12 pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800"
              >
                {STATS.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-none">
                      <CountUp end={stat.end} suffix={stat.suffix} />
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1.5 sm:mt-2 font-bold uppercase tracking-wider leading-none">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ───── RIGHT COLUMN — Image ───── */}
            <div className="hidden lg:flex lg:col-span-5 justify-center items-center lg:pt-20 lg:pb-0 relative">

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] lg:-translate-x-12 aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 dark:border-darkborder shadow-2xl bg-slate-50 group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85&fm=webp"
                  alt="AMITH Structural Engineering Audit and Testing"
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover group-hover:scale-105 duration-700 transition-transform"
                  priority
                />
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
