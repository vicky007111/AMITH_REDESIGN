"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Projects", href: "#cta" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      {/* Top info bar – visible only at top */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        } bg-[#0b1e3d] text-slate-300 text-xs`}
      >
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Location */}
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Velachery, Chennai
            </span>
            {/* Phone */}
            <a href="tel:+919940548833" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +91 99405 48833
            </a>
            {/* Email */}
            <a href="mailto:amithcivilengineering@gmail.com" className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              amithcivilengineering@gmail.com
            </a>
          </div>
          {/* Social icons */}
          <div className="hidden sm:flex items-center gap-3 text-slate-400">
            <span className="text-slate-500">Find us on:</span>
            {["linkedin", "facebook", "twitter"].map((social) => (
              <a key={social} href="#" aria-label={social}
                className="hover:text-blue-400 transition-colors capitalize text-xs font-medium">
                {social.charAt(0).toUpperCase() + social.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
          {/* Logo mark */}
          <div className={`w-9 h-9 rounded flex items-center justify-center transition-colors duration-300 ${
            scrolled ? "bg-[#0b1e3d]" : "bg-white/15 backdrop-blur-sm border border-white/20"
          }`}>
            <svg viewBox="0 0 36 36" className="w-5 h-5" fill="none">
              {/* Stylised "A" / building structure icon */}
              <rect x="16" y="4" width="4" height="28" rx="1" fill="#3b82f6"/>
              <rect x="8" y="16" width="20" height="3" rx="1" fill="#3b82f6"/>
              <rect x="4" y="28" width="28" height="4" rx="1" fill="#1a56db"/>
              <rect x="6" y="10" width="2" height="18" rx="1" fill="#93c5fd" opacity="0.7"/>
              <rect x="28" y="10" width="2" height="18" rx="1" fill="#93c5fd" opacity="0.7"/>
            </svg>
          </div>
          {/* Brand text */}
          <div className="leading-none">
            <div className={`font-display font-800 text-lg leading-5 tracking-wide transition-colors duration-300 ${
              scrolled ? "text-[#0b1e3d]" : "text-white"
            }`}>
              AMITH
            </div>
            <div className={`text-[10px] font-medium tracking-widest uppercase transition-colors duration-300 ${
              scrolled ? "text-blue-600" : "text-blue-300"
            }`}>
              Civil &amp; Allied Engineering
            </div>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link ${
                scrolled ? "nav-link-scrolled" : "nav-link-transparent"
              }`}
              style={{ position: "relative" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+919940548833"
            className={`text-sm font-semibold transition-colors ${
              scrolled ? "text-slate-700 hover:text-blue-600" : "text-white hover:text-blue-200"
            }`}>
            +91 99405 48833
          </a>
          <a href="#cta" className="btn-primary text-sm px-5 py-2.5">
            Get Free Audit
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
          className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded transition-colors ${
            scrolled ? "text-slate-800" : "text-white"
          }`}
        >
          <span className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`}/>
          <span className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-slate-100 shadow-xl ${
        mobileOpen ? "max-h-[340px] opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 px-3 text-slate-700 font-medium text-base hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-slate-100">
            <a href="#cta" className="btn-primary w-full justify-center">
              Get Free Audit
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
