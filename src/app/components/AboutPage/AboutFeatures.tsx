"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Reveal from "@/app/components/shared/Reveal";
import { staggeredFadeUp } from "@/app/components/shared/anim";

const featureVariants = staggeredFadeUp(0.1);

const FEATURES = [
  {
    icon: "solar:diploma-verified-bold-duotone",
    title: "NABL Laboratory Association",
    text: "Formal MoU with Civilone Research Center Pvt Ltd, Chennai, to carry out specialized non-destructive and partial destructive concrete testing to assess distress and material quality.",
  },
  {
    icon: "solar:users-group-rounded-bold-duotone",
    title: "Distinguished Board & Credentials",
    text: "Directed by a former Vice Chancellor, retired military officers, and senior public works consultants.",
  },
  {
    icon: "solar:structure-bold-duotone",
    title: "Heavy Infrastructure Footprint",
    text: "Vetted over 100+ design specifications and supervised runways, sumps, and multi-storey townships.",
  },
];

const AboutFeatures = () => {
  const [sweepX, setSweepX] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    let animFrame: number;
    const duration = 9000; // 9 seconds loop sweep (back and forth) for a slower, professional read

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      // Calculate progress of the back-and-forth cycle (0 to 2)
      const progress = (elapsed % duration) / duration;
      let percent = progress * 200;
      if (percent > 100) {
        percent = 200 - percent;
      }

      setSweepX(Math.round(percent));
      animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  // ASTM C876 potential field classification
  const getAuditData = (x: number) => {
    // We want peak corrosion around x = 43 (where the physical crack is located in the photo)
    const distFromPeak = Math.abs(x - 43);
    
    if (distFromPeak <= 6) {
      // Peak corrosion zone (37% to 49% sweep)
      // Voltages between -380mV and -430mV
      const mV = Math.round(-430 + distFromPeak * 8);
      return { mV, risk: "CORROSION ACTIVE (>90% RISK)", color: "text-rose-400 border-rose-500/20 bg-rose-500/10 animate-pulse" };
    } else if (distFromPeak <= 12) {
      // Uncertain transition zone (31% to 36%, 50% to 55%)
      // Voltages between -200mV and -350mV
      const mV = Math.round(-350 + (distFromPeak - 6) * 25);
      return { mV, risk: "UNCERTAIN (50%)", color: "text-amber-400 border-amber-500/20 bg-amber-500/10" };
    } else {
      // Safe zones (x < 31 or x > 55)
      // Voltages between -100mV and -190mV
      const baseVal = x < 31 ? -120 - (x * 2) : -170 + ((x - 55) * 1.5);
      const mV = Math.round(baseVal);
      return { mV, risk: "SAFE (<10% RISK)", color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10" };
    }
  };

  const { mV, risk, color } = getAuditData(sweepX);

  // Dynamic sensor alignment variables
  const detectionIntensity = Math.max(0, 1 - Math.abs(sweepX - 43) / 15); // Peaks when line is on crack, fades to 0 when 15% away
  const showSafePin = sweepX >= 20;
  const showActivePin = sweepX >= 43;

  return (
    <section id="about-features" className="bg-grey overflow-x-hidden section-py transition-colors duration-300">
      <div className="section-container">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 xl:gap-24 items-center">

          {/* Half-Cell Potential Sweep Column (Left) */}
          <div className="lg:col-span-6 col-span-12 pb-8 lg:pb-0">
            <Reveal variants={featureVariants} custom={0}>
              <div className="relative w-full max-w-xl mx-auto aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-900 group">

                {/* Layer 1: Base Image (Field Inspection) */}
                <Image
                  src="/images/half-cell-field-test.png"
                  alt="AMITH Structural Audit Field Testing"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-95 transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Layer 2: Half-Cell Potential Voltage Map (Revealed via sweep slider) */}
                <div
                  className="absolute inset-0 w-full h-full pointer-events-none select-none z-10"
                  style={{ clipPath: `inset(0% ${100 - sweepX}% 0% 0%)` }}
                >
                  {/* Same Image with natural colors to prevent strange ghostly effects */}
                  <Image
                    src="/images/half-cell-field-test.png"
                    alt="Voltmeter Potential View"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  {/* Contour Grid overlay - cyan tech grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:24px_24px] mix-blend-screen" />
                  
                  {/* Voltage Contour Color Gradient - strictly localized to crack area around ~43% */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-[35%] via-amber-500/25 via-[41%] via-rose-600/40 via-[43%] via-amber-500/25 via-[45%] to-cyan-500/15 mix-blend-overlay" />
                  
                  {/* Vivid Corrosion Hotspot centered on the crack/spall - dynamically lights up as scanner line passes */}
                  <div 
                    className="absolute top-[50%] left-[43%] w-[120px] h-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-600/30 blur-xl transition-opacity duration-75 pointer-events-none" 
                    style={{ opacity: detectionIntensity }}
                  />
                </div>

                {/* Layer 3: Vertical Electrode Sweep Line & Probe */}
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-cyan-400 shadow-[0_0_12px_#22d3ee,0_0_4px_#22d3ee] z-20 pointer-events-none"
                  style={{ left: `${sweepX}%` }}
                >
                  {/* Sweeping Electrode Probe Indicator - aligned with technician's hand vertical position (~58%) */}
                  <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-cyan-400 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow shadow-cyan-300 animate-pulse" />
                    {/* Tick markers */}
                    <div className="absolute w-8 h-[1px] bg-cyan-400/50" />
                    <div className="absolute h-8 w-[1px] bg-cyan-400/50" />
                  </div>
                </div>

                {/* Layer 4: Technical Border Scale Ticks */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:10px_100%] border-b border-white/10 z-20 pointer-events-none" />
                <div className="absolute top-0 left-0 bottom-0 w-2 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:100%_10px] border-r border-white/10 z-20 pointer-events-none" />

                {/* Layer 5: HUD Diagnostics overlays */}
                {/* HUD Top Left: Voltmeter Status */}
                <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 rounded-lg px-3 py-1.5 hidden sm:flex items-center gap-2 z-20 pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
                    HALF-CELL PROBE: SWEEPING
                  </span>
                </div>

                {/* HUD Top Right: ASTM C876 Calibration */}
                <div className="absolute top-4 right-4 bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 rounded-lg px-3 py-1.5 hidden sm:block z-20 pointer-events-none">
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
                    ASTM C876 STANDARD
                  </span>
                </div>

                {/* HUD Bottom Left: Voltage Odometer & Risk Evaluation */}
                <div className="absolute bottom-4 left-4 bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 rounded-lg px-3 py-1.5 z-20 pointer-events-none hidden sm:flex flex-col gap-1 min-w-[170px] sm:min-w-[150px] lg:min-w-[170px]">
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-0.5 mb-0.5">
                    REAL-TIME VOLTAGE FEED
                  </span>
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-[9px] font-mono text-slate-400">ELECTRODE V:</span>
                    <span className="text-xs font-mono font-extrabold text-cyan-300 scale-105">
                      {mV} mV
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-[9px] font-mono text-slate-400">EST. RISK:</span>
                    <span className={`text-[9.5px] font-mono font-extrabold ${color}`}>
                      {risk}
                    </span>
                  </div>
                </div>

                {/* HUD Bottom Right: ASTM Color Legend */}
                <div className="absolute bottom-4 right-4 bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 rounded-lg px-2.5 py-1.5 z-20 pointer-events-none hidden sm:flex flex-col gap-1 text-[7.5px] font-mono text-slate-400 min-w-[125px] sm:min-w-[105px] lg:min-w-[125px]">
                  <span className="font-bold text-[8px] text-slate-300 border-b border-slate-800 pb-0.5 mb-0.5 uppercase">
                    ASTM C876 LEGEND
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>&gt;-200mV (Low Risk)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>-200 to -350mV (Uncertain)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span>&lt;-350mV (Active Corr.)</span>
                  </div>
                </div>

                {/* Diagnostic Hotspot indicators */}
                <div 
                  className="absolute top-[35%] left-[20%] z-20 flex items-center gap-1.5 pointer-events-none transition-opacity duration-300"
                  style={{ opacity: showSafePin ? 1 : 0.1 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow shadow-emerald-400/80 animate-ping" />
                  <span className="text-[8px] font-mono font-bold text-emerald-400 bg-slate-950/60 px-1 rounded">-120mV (SAFE)</span>
                </div>

                <div 
                  className="absolute top-[50%] left-[43%] z-20 flex items-center gap-1.5 pointer-events-none transition-opacity duration-300"
                  style={{ opacity: showActivePin ? 1 : 0.1 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow shadow-rose-500/80 animate-ping" />
                  <span className="text-[8px] font-mono font-bold text-rose-400 bg-slate-950/60 px-1 rounded">-430mV (ACTIVE)</span>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Text and Interactive Cards Column (Right) */}
          <div className="lg:col-span-6 col-span-12">
            <Reveal variants={featureVariants} custom={1}>
              <p className="kicker-text">
                Why Choose Us
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 pb-3 sm:pb-4 leading-tight">
                Engineering Integrity Backed by Academic &amp; Public Trust
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed mb-5">
                Not a construction contractor — we assess structural distress and deliver cost-effective repair and rehabilitation designs, upgraded to the latest code provisions, as your single-platform engineering partner.
              </p>
            </Reveal>

            {/* Interactive Cards Stack */}
            <div className="space-y-3">
              {FEATURES.map((feature, i) => (
                <Reveal key={i} variants={featureVariants} custom={2 + i}>
                  <div className="group bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-card-shadow hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0 transition-all duration-300 group-hover:scale-105">
                      <Icon
                        icon={feature.icon}
                        width="24"
                        height="24"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-base font-bold text-slate-800 group-hover:text-primary transition-colors duration-200">
                        {feature.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
