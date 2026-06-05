const STATS = [
  { value: "15+", label: "Years of Excellence", description: "Trusted structural expertise since 2008" },
  { value: "500+", label: "Projects Completed", description: "Across buildings, bridges & infrastructure" },
  { value: "50+", label: "Cities Covered", description: "Serving Tamil Nadu and beyond" },
  { value: "100%", label: "Client Retention", description: "Built on trust and technical precision" },
];

const WHY_POINTS = [
  {
    id: "certified",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: "Certified & Licensed Engineers",
    description:
      "Our team comprises B.E. Civil engineers with professional certifications from recognized Indian institutions. All reports are engineer-signed and legally valid.",
  },
  {
    id: "is-compliant",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
      </svg>
    ),
    title: "IS Code Compliant Reports",
    description:
      "Every audit report strictly conforms to Bureau of Indian Standards (BIS) codes. Accepted by government bodies, courts, banks, and insurance companies.",
  },
  {
    id: "ndt-advanced",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
      </svg>
    ),
    title: "Advanced Testing Equipment",
    description:
      "Equipped with calibrated NDT instruments — Rebound Hammers, UPV testers, Rebar Locators, and Carbonation Depth kits for precise diagnostics.",
  },
  {
    id: "turnaround",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Fast Report Turnaround",
    description:
      "Preliminary reports delivered within 5–7 working days. Final detailed reports with recommendations within 15 working days of inspection.",
  },
  {
    id: "transparent",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
    title: "Transparent Pricing",
    description:
      "No hidden charges. Fixed-fee audit packages with a clear scope of work defined upfront. Free preliminary site consultation before engagement.",
  },
  {
    id: "experience",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
    ),
    title: "Residential to Industrial Scale",
    description:
      "From individual apartments to large-scale industrial complexes and government infrastructure — our team is experienced at every scale of assessment.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Stats strip */}
        <div
          className="rounded-2xl p-10 mb-24 grid grid-cols-2 lg:grid-cols-4 gap-8"
          style={{
            background: "linear-gradient(135deg, #0b1e3d 0%, #143272 100%)",
            boxShadow: "0 20px 60px rgba(11,30,61,0.3)",
          }}
        >
          {STATS.map((stat, i) => (
            <div key={i} className="text-center relative">
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 stat-divider" />
              )}
              <div className="font-display font-extrabold text-white text-[clamp(2rem,4vw,3rem)] leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-blue-300 font-semibold text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-slate-400 text-xs leading-snug hidden sm:block">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-blue-600 inline-block"/>
              Our Commitment
            </div>
            <h2 className="font-display font-bold text-slate-900 text-[clamp(1.8rem,3.5vw,2.75rem)] leading-tight">
              Why Engineers &amp;{" "}
              <span className="text-blue-600">Builders Trust</span>{" "}
              <span className="section-heading-accent">AMITH</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-md lg:text-right">
            15 years of uncompromising structural integrity assessments, built on
            technical rigor and client-first transparency.
          </p>
        </div>

        {/* Why points grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {WHY_POINTS.map((point, i) => (
            <div
              key={point.id}
              id={`why-point-${point.id}`}
              className="flex gap-4 p-7 rounded-xl bg-white transition-all duration-200 hover:shadow-md group"
              style={{
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                border: "1px solid rgba(226,232,240,0.8)",
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-blue-600 transition-colors duration-200 group-hover:bg-blue-600 group-hover:text-white"
                style={{ background: "rgba(26,86,219,0.08)" }}
              >
                {point.icon}
              </div>

              <div>
                <h3 className="font-display font-bold text-slate-900 text-base leading-snug mb-1.5">
                  {point.title}
                </h3>
                <p className="text-slate-500 text-sm leading-[1.75]">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications strip */}
        <div className="mt-14 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm font-medium text-center sm:text-left">
            Trusted by builders, architects, and government bodies across Tamil Nadu
          </p>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            {["BIS Certified", "RERA Compliant", "IS 13935", "IS 456:2000"].map((cert) => (
              <span
                key={cert}
                className="text-xs font-bold text-slate-500 border border-slate-200 px-3 py-1.5 rounded-full tracking-wide"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
