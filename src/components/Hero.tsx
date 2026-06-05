// Set to true to display the real project inspection photograph. 
// Set to false to immediately restore the original blueprint SVG illustration.
const SHOW_REAL_IMAGE = true;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0b1e3d]"
    >
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none" />

      {/* Diagonal lines texture */}
      <div className="absolute inset-0 diagonal-lines pointer-events-none opacity-60" />

      {/* Radial glow from top-left */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(26,86,219,0.22) 0%, transparent 70%)",
        }}
      />

      {/* Right accent glow */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-6 w-full pt-28 pb-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT: Text content */}
        <div className="flex flex-col gap-8">
          {/* Badge */}
          <div className="animate-fade-up animate-delay-100 flex items-center gap-3">
            <div className="flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse inline-block"/>
              Structural Audit Consultants — Chennai
            </div>
          </div>

          {/* Headline */}
          <div className="animate-fade-up animate-delay-200">
            <h1 className="font-display font-extrabold text-white leading-[1.08] tracking-tight">
              <span className="block text-[clamp(2.4rem,5.5vw,4.25rem)]">
                Engineering
              </span>
              <span className="block text-[clamp(2.4rem,5.5vw,4.25rem)]">
                Safety.
              </span>
              <span
                className="block text-[clamp(2.4rem,5.5vw,4.25rem)]"
                style={{
                  background: "linear-gradient(90deg, #3b82f6 0%, #93c5fd 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ensuring Longevity.
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="animate-fade-up animate-delay-300 text-slate-300 text-[clamp(1rem,1.8vw,1.15rem)] leading-relaxed max-w-[520px]">
            Chennai&rsquo;s trusted structural audit and quality consulting firm.
            Expert assessment of buildings, bridges, and RCC infrastructure —
            ensuring every structure stands the test of time.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up animate-delay-400 flex flex-wrap gap-4">
            <a href="#cta" className="btn-primary">
              Request a Free Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a href="#services" className="btn-outline-white">
              View Our Services
            </a>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-up animate-delay-500 flex flex-wrap items-center gap-6 pt-2">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                {i > 0 && <div className="w-px h-8 bg-white/15 hidden sm:block" />}
                <div>
                  <div className="font-display font-bold text-xl text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Engineering visual panel */}
        <div className="animate-fade-up animate-delay-300 hidden lg:flex flex-col gap-4">
          {/* Main visual card */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(26,86,219,0.15) 0%, rgba(11,30,61,0.8) 100%)",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
          >
            {SHOW_REAL_IMAGE ? (
              <div className="relative w-full h-[340px] overflow-hidden group">
                {/* Real project photo */}
                <img
                  src="/images/scaffolding-inspection.png"
                  alt="On-site structural audit scaffolding inspection"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Tech overlay / blueprint grid pattern on top of photo */}
                <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-20" />

                {/* Technical camera focus frame and labels */}
                <div className="absolute inset-4 border border-white/20 pointer-events-none flex flex-col justify-between p-3">
                  {/* Top corners */}
                  <div className="flex justify-between">
                    <span className="w-3 h-3 border-t border-l border-blue-400" />
                    <span className="w-3 h-3 border-t border-r border-blue-400" />
                  </div>

                  {/* Technical annotation tags */}
                  <div className="flex flex-col gap-1.5 self-start bg-slate-950/80 backdrop-blur-sm border border-blue-500/30 px-3 py-2 rounded text-[10px] font-mono text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>LIVE AUDIT DATA</span>
                    </div>
                    <div>LOC: VELACHERY, CHENNAI</div>
                    <div>SYS: CEILING BEAM ASSESSMENT</div>
                  </div>

                  {/* Bottom corners */}
                  <div className="flex justify-between">
                    <span className="w-3 h-3 border-b border-l border-blue-400" />
                    <span className="w-3 h-3 border-b border-r border-blue-400" />
                  </div>
                </div>

                {/* Bottom measurement overlay banner */}
                <div className="absolute bottom-0 inset-x-0 bg-slate-950/90 backdrop-blur-sm border-t border-white/10 px-4 py-2 flex justify-between items-center text-[10px] font-mono text-blue-300">
                  <span>SCALE: NTS (1:1)</span>
                  <span>IS 13935 COMPLIANT</span>
                </div>
              </div>
            ) : (
              /* Original SVG Structural Illustration */
              <div className="p-8">
                <svg
                  viewBox="0 0 480 340"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Structural engineering diagram"
                >
                  {/* Ground line */}
                  <line x1="20" y1="320" x2="460" y2="320" stroke="rgba(148,163,184,0.3)" strokeWidth="2"/>

                  {/* Main building structure */}
                  {/* Columns */}
                  <rect x="80" y="80" width="16" height="240" rx="2" fill="rgba(59,130,246,0.7)"/>
                  <rect x="232" y="80" width="16" height="240" rx="2" fill="rgba(59,130,246,0.7)"/>
                  <rect x="384" y="80" width="16" height="240" rx="2" fill="rgba(59,130,246,0.7)"/>

                  {/* Beams */}
                  <rect x="80" y="80" width="320" height="12" rx="2" fill="rgba(147,197,253,0.6)"/>
                  <rect x="80" y="160" width="320" height="10" rx="2" fill="rgba(147,197,253,0.4)"/>
                  <rect x="80" y="236" width="320" height="10" rx="2" fill="rgba(147,197,253,0.4)"/>

                  {/* Foundation */}
                  <rect x="60" y="310" width="360" height="14" rx="3" fill="rgba(26,86,219,0.5)"/>

                  {/* Cross-bracing */}
                  <line x1="96" y1="86" x2="232" y2="160" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" strokeDasharray="4 3"/>
                  <line x1="232" y1="86" x2="96" y2="160" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" strokeDasharray="4 3"/>
                  <line x1="248" y1="86" x2="384" y2="160" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" strokeDasharray="4 3"/>
                  <line x1="384" y1="86" x2="248" y2="160" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" strokeDasharray="4 3"/>
                  <line x1="96" y1="166" x2="232" y2="236" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" strokeDasharray="4 3"/>
                  <line x1="232" y1="166" x2="96" y2="236" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" strokeDasharray="4 3"/>
                  <line x1="248" y1="166" x2="384" y2="236" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" strokeDasharray="4 3"/>
                  <line x1="384" y1="166" x2="248" y2="236" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" strokeDasharray="4 3"/>

                  {/* Measurement annotations */}
                  <line x1="40" y1="80" x2="40" y2="320" stroke="rgba(59,130,246,0.4)" strokeWidth="1" markerEnd="url(#arrow)"/>
                  <text x="16" y="205" fill="rgba(147,197,253,0.7)" fontSize="11" fontFamily="monospace" transform="rotate(-90, 28, 200)">H = 18m</text>

                  <line x1="80" y1="50" x2="400" y2="50" stroke="rgba(59,130,246,0.4)" strokeWidth="1"/>
                  <text x="220" y="42" fill="rgba(147,197,253,0.7)" fontSize="11" fontFamily="monospace" textAnchor="middle">W = 32m</text>

                  {/* Inspection markers */}
                  <circle cx="88" cy="160" r="5" fill="rgba(59,130,246,0.8)" stroke="rgba(147,197,253,0.5)" strokeWidth="1.5"/>
                  <circle cx="240" cy="80" r="5" fill="rgba(59,130,246,0.8)" stroke="rgba(147,197,253,0.5)" strokeWidth="1.5"/>
                  <circle cx="392" cy="236" r="5" fill="rgba(234,179,8,0.7)" stroke="rgba(253,224,71,0.4)" strokeWidth="1.5"/>

                  {/* Label callout */}
                  <line x1="397" y1="231" x2="425" y2="210" stroke="rgba(253,224,71,0.5)" strokeWidth="1"/>
                  <text x="428" y="207" fill="rgba(253,224,71,0.8)" fontSize="9" fontFamily="monospace">INSPECT</text>

                  {/* Title */}
                  <text x="240" y="22" fill="rgba(147,197,253,0.5)" fontSize="10" fontFamily="monospace" textAnchor="middle" letterSpacing="2">STRUCTURAL ANALYSIS REPORT</text>
                </svg>
              </div>
            )}

            {/* Corner decoration */}
            <div className="absolute top-4 right-4 w-16 h-16 opacity-20"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, rgba(59,130,246,1) 0px, rgba(59,130,246,1) 1px, transparent 1px, transparent 8px), repeating-linear-gradient(90deg, rgba(59,130,246,1) 0px, rgba(59,130,246,1) 1px, transparent 1px, transparent 8px)",
              }}
            />
          </div>

          {/* Floating info cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: (
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                ),
                title: "IS Code Compliant",
                sub: "BIS Certified Process",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                ),
                title: "NDT Certified",
                sub: "Advanced Testing Methods",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(59,130,246,0.15)",
                }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(26,86,219,0.25)" }}>
                  {card.icon}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold leading-snug">{card.title}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{card.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z"
            fill="#ffffff"
            opacity="0.04"
          />
          <path
            d="M0 60 C480 20 960 80 1440 60 L1440 80 L0 80 Z"
            fill="#ffffff"
            opacity="0.06"
          />
        </svg>
      </div>
    </section>
  );
}
