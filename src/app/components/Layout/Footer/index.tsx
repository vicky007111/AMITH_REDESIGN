"use client"
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer: FC = () => {
  const [services, setServices] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/service')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setServices(data.ServicesData || [])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <footer className="bg-Dark-primary dark:bg-darklight py-17 pb-6 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 sm:gap-1.875 gap-5">
          {/* Brand Column */}
          <div className="lg:col-span-4 col-span-12">
            <div className="md:pe-7.5">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-white"
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
              </Link>
              <p className="mb-0 font-medium text-base text-white/50 pt-2.188 pb-1.875 leading-relaxed">
                AMITH Civil & Allied Engineering Services Pvt Ltd is a premier civil engineering consultancy specializing in structural audits, TPQM, NDT testing, and restoration in Chennai.
              </p>
              <p className="text-sm font-bold text-white mb-2 leading-relaxed">
                No.35/F3, Sai Krupa Apartment, Ramagirinagar, Taramani Link Road, Velachery, Chennai - 600042.
              </p>
              <p className="text-white/50 text-sm font-bold mb-0">
                Call us:{" "}
              <Link href="tel:+919940548833" className="text-white hover:text-blue-300 transition-colors font-bold">
                +91 9940548833
              </Link>
              </p>
            </div>
          </div>

          {/* Services Dynamic List */}
          <div className="lg:col-span-3 sm:col-span-6 col-span-12">
            <h4 className="text-lg text-white dark:text-white font-semibold mb-2.375 uppercase tracking-wider">
              Our Services
            </h4>
            <ul>
              {services.map((item, index) => (
                <li key={index} className="pb-3">
                  <Link
                    href={`/services/${item.slug}`}
                    className="text-base font-semibold text-white/50 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links / Sitemap */}
          <div className="lg:col-span-2 sm:col-span-6 col-span-12">
            <h4 className="text-lg text-white dark:text-white font-semibold mb-2.375 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  className="text-base font-semibold text-white/50 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-base font-semibold text-white/50 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-base font-semibold text-white/50 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-base font-semibold text-white/50 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base font-semibold text-white/50 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact coordinates list */}
          <div className="lg:col-span-3 col-span-12">
            <h4 className="text-lg text-white dark:text-white font-semibold sm:mb-2.375 mb-6 uppercase tracking-wider">
              Official Channels
            </h4>
            <p className="text-base text-white/50 font-semibold mb-4 leading-relaxed">
              Reach out directly to our administrative and engineering desks:
            </p>
            <div className="flex flex-col gap-2 text-xs sm:text-sm font-semibold">
              <a href="mailto:amithcivilengineering@gmail.com" className="text-white hover:text-blue-300 transition-colors">
                ✉️ amithcivilengineering@gmail.com
              </a>
              <a href="mailto:sales@amith.in.net" className="text-white hover:text-blue-300 transition-colors">
                ✉️ sales@amith.in.net
              </a>
              <a href="mailto:admin@amith.in.net" className="text-white hover:text-blue-300 transition-colors">
                ✉️ admin@amith.in.net
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex md:flex-nowrap flex-wrap gap-6 items-center justify-between sm:pt-17 pt-10 border-t border-white/10 mt-10">
          <p className="text-base font-semibold text-white/50 mb-0">
            &copy; {new Date().getFullYear()} AMITH Civil & Allied Engineering Services Pvt Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-4 items-center">
            {["facebook", "twitter", "linkedin"].map((platform) => (
              <Link
                key={platform}
                href="#"
                className="w-10 h-10 border-2 bg-transparent border-primary/25 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <span className="capitalize text-xs font-bold text-primary hover:text-white font-mono">
                  {platform[0]}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
