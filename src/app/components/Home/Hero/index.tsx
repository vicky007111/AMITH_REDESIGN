"use client";
import React from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import Image from "next/image";
import Link from "next/link";

// ---------------------------------------------------------------------------
// CountUp — animates a number from 0 → end on mount
// Uses framer-motion's spring-less animate() for a smooth easeOut ramp.
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration]);

  React.useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {display}
      {suffix}
    </>
  );
};

// ---------------------------------------------------------------------------
// Stats data — separated so it's easy to maintain
// ---------------------------------------------------------------------------
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
        // Layout — full viewport on lg+, auto on mobile so nothing clips
        "overflow-x-hidden relative",
        "min-h-screen lg:h-screen",
        "flex flex-col",
        "transition-colors duration-300",

        // Left panel — off-white with blueprint grid
        "after:content-[''] after:absolute after:inset-0 after:z-0",
        "lg:after:w-[70%] after:w-full",
        "after:bg-slate-50 dark:after:bg-darklight",
        "after:bg-[linear-gradient(to_right,rgba(0,28,104,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,28,104,0.03)_1px,transparent_1px)]",
        "dark:after:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]",
        "after:bg-[size:40px_40px]",

        // Right panel — solid blue accent column (visible on all breakpoints)
        "before:content-[''] before:absolute before:right-0 before:z-[1]",
        "lg:before:top-0 lg:before:h-full lg:before:w-[30%]",
        "before:bottom-0 before:h-[35%] sm:before:h-[45%] lg:before:h-full",
        "before:w-full lg:before:w-[30%]",
        "before:bg-primary",
      ].join(" ")}
    >
      {/* Inner wrapper — fills section height */}
      <div className="relative z-10 w-full flex-1 flex">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 w-full flex">
          <div className="grid grid-cols-12 w-full items-center gap-y-8 lg:gap-x-12">
            {/* ───────── LEFT COLUMN ───────── */}
            <div className="lg:col-span-7 col-span-12 flex flex-col justify-center pt-24 lg:pt-20 pb-4 lg:pb-8">
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Badge / Tagline */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 font-bold text-xs uppercase tracking-wider mb-4 w-fit select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-blue-400 animate-pulse" />
                  <span>Engineering Consultancy &amp; Structural Audits</span>
                  <span className="text-[10px] text-slate-400 font-mono pl-1 border-l border-slate-300 dark:border-slate-700 hidden sm:inline">
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
                <p className="text-sm sm:text-base md:text-lg font-medium text-slate-500 dark:text-slate-400 mt-4 leading-relaxed max-w-xl">
                  AMITH Civil &amp; Allied Engineering Services Pvt Ltd delivers
                  expert diagnostics, quality auditing (TPQM), and structural
                  retrofitting designs. In association with NABL-accredited
                  laboratories, we safeguard infrastructure integrity.
                </p>

                {/* CTA */}
                <div className="mt-4 flex flex-wrap gap-4 items-center">
                  <Link
                    href="/services"
                    className="px-8 py-3.5 rounded-xl text-base font-bold bg-primary text-white hover:bg-primary/95 hover:scale-[1.02] active:scale-[0.98] duration-200 shadow-lg shadow-primary/20 transition-all text-center inline-block cursor-pointer"
                  >
                    Explore Services
                  </Link>
                </div>

                {/* Animated Stats Row */}
                <div className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-12 mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                  {STATS.map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-none">
                        <CountUp end={stat.end} suffix={stat.suffix} />
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1.5 font-bold uppercase tracking-wider leading-none">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ───────── RIGHT COLUMN — Image ───────── */}
            {/* Desktop: fills column height. Mobile/Tablet: shows as a card. */}
            <div className="lg:col-span-5 col-span-12 flex justify-center items-center lg:pt-20 pb-8 lg:pb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-[500px] lg:max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 dark:border-darkborder shadow-2xl bg-slate-50 group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85&fm=webp"
                  alt="AMITH Structural Engineering Audit and Testing"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
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
