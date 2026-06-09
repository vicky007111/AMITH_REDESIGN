"use client";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Leadership", href: "#leadership" },
    { label: "Projects", href: "#projects" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact Us", href: "#contact" }
  ];

  const services = [
    "Quality Audit & TPQM",
    "Structural Auditing",
    "NDT Concrete Testing",
    "Material Lab Tests",
    "Restoration Schemes",
    "Concrete Mix Design",
    "Drawings Peer-Review",
    "Technical Workshops"
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-16 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
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
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 17.481A21.88 21.88 0 0 1 12 21.75c-2.905-.18-5.724-1.077-8.156-2.617m16.156-4.148A21.862 21.862 0 0 0 21 12c0-1.126-.086-2.233-.251-3.313m-13.784 12.014a22.56 22.56 0 0 1-2.227-2.333m15.319-3.214A22.59 22.59 0 0 0 21 12c0-2.357-.361-4.63-.1.08m-17.65 0C3.086 7.37 3 8.613 3 10c0 3.86 1.83 7.29 4.654 9.479"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white leading-none">
                AMITH
              </span>
            </a>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">
              Specialized engineering advisors in structural audits, construction
              quality assurance, NDT testing, and building rehabilitation schemes in Chennai.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              {["linkedin", "twitter", "facebook", "instagram"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-primary text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label={`Visit our ${platform}`}
                >
                  <span className="capitalize text-xs font-bold font-mono">
                    {platform[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2 lg:col-start-6 flex flex-col gap-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="col-span-6 md:col-span-3 lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-200">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((srv) => (
                <li key={srv}>
                  <a
                    href="#services"
                    className="text-sm font-semibold hover:text-white transition-colors"
                  >
                    {srv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-slate-200">
              Office Location
            </h4>
            <p className="text-xs sm:text-sm font-semibold leading-relaxed">
              No.35/F3, Sai Krupa Apartment, Ramagirinagar, Taramani Link Road,
              Velachery, Chennai - 600042.
            </p>
            <div className="flex flex-col gap-1.5 pt-2">
              <a
                href="tel:+919940548833"
                className="text-xs sm:text-sm font-bold text-white hover:text-primary transition-colors flex items-center gap-2"
              >
                📞 +91 9940548833
              </a>
              <a
                href="mailto:amithcivilengineering@gmail.com"
                className="text-xs font-bold text-white hover:text-primary transition-colors flex items-center gap-2"
              >
                ✉️ amithcivilengineering@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold">
          <p>© {new Date().getFullYear()} AMITH Civil & Allied Engineering Services Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
