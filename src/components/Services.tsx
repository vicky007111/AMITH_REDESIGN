const SERVICES = [
  {
    id: "structural-audit",
    number: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    title: "Structural Audit",
    description:
      "Comprehensive evaluation of existing buildings, bridges, and RCC structures to assess structural integrity, safety, and remaining service life.",
    tags: ["RCC Analysis", "Load Assessment", "Crack Mapping"],
  },
  {
    id: "quality-audit",
    number: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    title: "Quality Audit Services",
    description:
      "On-site quality control and assurance for construction projects. Ensures materials, methods, and workmanship conform to IS codes and project specifications.",
    tags: ["IS Code Compliance", "Material Testing", "Site QC"],
  },
  {
    id: "ndt",
    number: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    title: "Non-Destructive Testing",
    description:
      "Advanced NDT methods including Rebound Hammer, Ultrasonic Pulse Velocity, and Cover Meter tests to evaluate concrete strength without structural damage.",
    tags: ["Rebound Hammer", "UPV Test", "Cover Meter"],
  },
  {
    id: "retrofit",
    number: "04",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/>
      </svg>
    ),
    title: "Retrofit & Rehabilitation",
    description:
      "Structural repair, strengthening, and rehabilitation solutions for damaged or aging structures — restoring safety and extending service life.",
    tags: ["CFRP Jacketing", "Grouting", "Beam Strengthening"],
  },
  {
    id: "geo-technical",
    number: "05",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Soil Investigation",
    description:
      "Geo-technical investigation and soil testing to determine foundation suitability, bearing capacity, and sub-surface conditions for new construction.",
    tags: ["Bore Log", "SPT Test", "Bearing Capacity"],
  },
  {
    id: "valuation",
    number: "06",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
      </svg>
    ),
    title: "Valuation Services",
    description:
      "Professional structural valuation reports for residential, commercial, and industrial properties — accepted by banks, courts, and government bodies.",
    tags: ["Bank Valuation", "Insurance Report", "Legal Compliance"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-18">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-blue-600 text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-8 h-px bg-blue-600 inline-block"/>
              What We Do
            </div>
            <h2 className="font-display font-bold text-slate-900 text-[clamp(1.8rem,3.5vw,2.75rem)] leading-tight">
              <span className="section-heading-accent">Our Engineering</span>{" "}
              <span className="text-blue-600">Services</span>
            </h2>
          </div>
          <p className="text-slate-500 text-base leading-relaxed max-w-md lg:text-right">
            From structural audits to soil investigations, our certified engineers
            deliver rigorous technical assessments aligned with IS codes and industry standards.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="card-lift card-accent-top group cursor-pointer rounded-2xl bg-white flex flex-col"
              style={{
                boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 6px 20px rgba(11,30,61,0.06)",
                border: "1px solid rgba(226,232,240,0.9)",
              }}
            >
              {/* Card header strip */}
              <div
                className="px-7 pt-7 pb-5 flex items-start justify-between gap-4 border-b"
                style={{ borderColor: "rgba(226,232,240,0.7)" }}
              >
                {/* Icon circle */}
                <div
                  className="w-13 h-13 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600 transition-all duration-250 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md"
                  style={{
                    width: "52px",
                    height: "52px",
                    background: "rgba(26,86,219,0.07)",
                    boxShadow: "inset 0 0 0 1px rgba(26,86,219,0.12)",
                  }}
                >
                  {service.icon}
                </div>

                {/* Service number */}
                <span
                  className="font-display font-extrabold text-2xl leading-none select-none text-slate-300 transition-colors duration-250"
                >
                  {service.number}
                </span>
              </div>

              {/* Card body */}
              <div className="px-7 py-6 flex flex-col gap-5 flex-1">
                {/* Title */}
                <h3 className="font-display font-bold text-slate-900 text-[1.0625rem] leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-[1.75] flex-1">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-md tracking-wide transition-colors duration-200"
                      style={{
                        color: "#1a56db",
                        background: "rgba(26,86,219,0.07)",
                        border: "1px solid rgba(26,86,219,0.1)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div
                className="px-7 py-4 border-t flex items-center justify-between"
                style={{ borderColor: "rgba(226,232,240,0.7)" }}
              >
                <span className="text-sm font-semibold text-blue-600">
                  Learn more
                </span>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-blue-600 transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white"
                  style={{ background: "rgba(26,86,219,0.07)" }}
                >
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm mb-5">
            Not sure which service you need? Our engineers will guide you.
          </p>
          <a href="#cta" className="btn-primary">
            Talk to an Engineer
          </a>
        </div>
      </div>
    </section>
  );
}
