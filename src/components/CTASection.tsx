export default function CTASection() {
  return (
    <section id="cta" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main CTA banner */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0b1e3d 0%, #143272 55%, #1a56db 100%)",
          }}
        >
          {/* Background texture */}
          <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
          <div className="absolute inset-0 diagonal-lines opacity-30 pointer-events-none" />

          {/* Glow orb */}
          <div
            className="absolute -top-32 -right-32 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)" }}
          />

          <div className="relative px-8 py-16 lg:px-16 lg:py-20">
            <div className="max-w-3xl mx-auto text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold px-4 py-2 rounded-full mb-8">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Free Site Consultation Available
              </div>

              {/* Headline */}
              <h2 className="font-display font-extrabold text-white text-[clamp(1.8rem,4vw,3rem)] leading-tight mb-5">
                Is Your Structure{" "}
                <span className="text-blue-300">Safe</span>?{" "}
                Let Our Engineers{" "}
                <span className="text-blue-300">Inspect &amp; Report.</span>
              </h2>

              {/* Subtext */}
              <p className="text-slate-300 text-base leading-relaxed mb-10 max-w-xl mx-auto">
                One professional structural audit can save lives and lakhs. Schedule a site
                visit today — our certified engineers will assess your building and deliver
                a detailed, actionable report.
              </p>

              {/* Action row */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <a href="tel:+919940548833" className="btn-primary w-full sm:w-auto justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  Call +91 99405 48833
                </a>
                <a href="mailto:amithcivilengineering@gmail.com" className="btn-outline-white w-full sm:w-auto justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Send Enquiry
                </a>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center justify-center gap-6">
                {[
                  { icon: "✓", text: "Response within 24 hours" },
                  { icon: "✓", text: "No obligation consultation" },
                  { icon: "✓", text: "Pan-Tamil Nadu coverage" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="text-blue-400 font-bold">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Secondary info cards */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              ),
              title: "Visit Our Office",
              detail: "Velachery, Chennai – 600042",
              sub: "Mon–Sat, 9 AM – 6 PM",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              ),
              title: "Call Directly",
              detail: "+91 99405 48833",
              sub: "Speak to a senior engineer",
            },
            {
              icon: (
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              ),
              title: "Email Us",
              detail: "amithcivilengineering@gmail.com",
              sub: "Receive a quote within 24 hrs",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 rounded-xl bg-white"
              style={{
                boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(11,30,61,0.06)",
                border: "1px solid rgba(226,232,240,0.8)",
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(26,86,219,0.08)" }}
              >
                {card.icon}
              </div>
              <div>
                <div className="font-display font-bold text-slate-900 text-sm mb-0.5">{card.title}</div>
                <div className="text-slate-700 text-sm font-medium">{card.detail}</div>
                <div className="text-slate-400 text-xs mt-0.5">{card.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
