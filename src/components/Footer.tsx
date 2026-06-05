const FOOTER_SERVICES = [
  "Structural Audit",
  "Quality Audit Services",
  "Non-Destructive Testing",
  "Retrofit & Rehabilitation",
  "Soil Investigation",
  "Valuation Services",
];

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#cta" },
  { label: "Contact", href: "#footer" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{ background: "linear-gradient(180deg, #0b1e3d 0%, #050f1e 100%)" }}
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="w-5 h-5" fill="none">
                  <rect x="16" y="4" width="4" height="28" rx="1" fill="#3b82f6"/>
                  <rect x="8" y="16" width="20" height="3" rx="1" fill="#3b82f6"/>
                  <rect x="4" y="28" width="28" height="4" rx="1" fill="#1a56db"/>
                  <rect x="6" y="10" width="2" height="18" rx="1" fill="#93c5fd" opacity="0.7"/>
                  <rect x="28" y="10" width="2" height="18" rx="1" fill="#93c5fd" opacity="0.7"/>
                </svg>
              </div>
              <div>
                <div className="font-display font-extrabold text-white text-base">AMITH</div>
                <div className="text-[10px] text-blue-400 font-semibold tracking-widest uppercase">Civil &amp; Allied Engineering</div>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Chennai&rsquo;s trusted structural audit and quality consulting firm.
              Serving builders, architects, and government bodies since 2008.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-2.5">
              {[
                {
                  icon: (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  ),
                  text: "Velachery, Chennai – 600042",
                  href: undefined,
                },
                {
                  icon: (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  ),
                  text: "+91 99405 48833",
                  href: "tel:+919940548833",
                },
                {
                  icon: (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  ),
                  text: "amithcivilengineering@gmail.com",
                  href: "mailto:amithcivilengineering@gmail.com",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="text-blue-400 flex-shrink-0">{item.icon}</div>
                  {item.href ? (
                    <a href={item.href} className="text-slate-400 text-xs hover:text-white transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-slate-400 text-xs">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-white font-display font-bold text-sm mb-5 uppercase tracking-widest">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 group-hover:bg-blue-400 transition-colors"/>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold text-sm mb-5 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 group-hover:bg-blue-400 transition-colors"/>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About / Social */}
          <div>
            <h4 className="text-white font-display font-bold text-sm mb-5 uppercase tracking-widest">
              About AMITH
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              AMITH Civil &amp; Allied Engineering is a premier structural audit
              consultancy, recognized for technical accuracy and engineering ethics.
            </p>

            {/* Standards */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["IS 13935", "IS 456:2000", "BIS Certified"].map((cert) => (
                <span
                  key={cert}
                  className="text-[11px] font-semibold text-blue-400 border border-blue-900/60 bg-blue-900/20 px-2.5 py-1 rounded-full"
                >
                  {cert}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "LinkedIn",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-8 h-8 rounded flex items-center justify-center text-slate-500 border border-slate-700 hover:text-blue-400 hover:border-blue-700 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} AMITH Civil &amp; Allied Engineering. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <div className="w-2 h-2 rounded-full bg-blue-600"/>
            Structural Audit Consultants · Velachery, Chennai
          </div>
        </div>
      </div>
    </footer>
  );
}
