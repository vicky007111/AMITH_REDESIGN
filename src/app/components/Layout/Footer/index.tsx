"use client"
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo-white.png"
                  alt="AMITH Civil Consultancy Logo"
                  width={160}
                  height={80}
                  className="h-14 w-auto object-contain"
                />
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
