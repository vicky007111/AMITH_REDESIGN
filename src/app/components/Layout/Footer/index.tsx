import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Reveal from "@/app/components/shared/Reveal";
import { servicesData } from "@/data/services";

const Footer: FC = () => {
  const services = servicesData;

  return (
    <footer className="bg-primary pt-16 lg:pt-20 pb-6 transition-colors duration-300">
      <div className="section-container">
        <Reveal amount={0.1} className="grid grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 col-span-12">
            <div className="md:pe-10">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo-white.png"
                  alt="AMITH Civil Consultancy Logo"
                  width={160}
                  height={80}
                  className="h-14 w-auto object-contain"
                />
              </Link>
              <p className="mb-0 font-medium text-base text-white/70 pt-6 pb-6 leading-relaxed">
                AMITH Civil & Allied Engineering Services Pvt Ltd is a premier civil engineering consultancy specializing in structural audits, TPQM, NDT testing, and restoration in Chennai.
              </p>
              <p className="text-sm font-bold text-white mb-2 leading-relaxed">
                No.35/F3, Sai Krupa Apartment, Ramagirinagar, Taramani Link Road, Velachery, Chennai - 600042.
              </p>
              <p className="text-white/70 text-sm font-bold mb-0">
                Call us:{" "}
              <Link href="tel:+919940548833" className="text-white hover:text-white transition-colors font-bold">
                +91 9940548833
              </Link>
              </p>
            </div>
          </div>

          {/* Services Dynamic List */}
          <div className="lg:col-span-3 sm:col-span-6 col-span-12">
            <h4 className="text-sm text-white font-bold mb-6 uppercase tracking-[0.15em]">
              Our Services
            </h4>
            <ul>
              {services.map((item, index) => (
                <li key={index} className="pb-3">
                  <Link
                    href={`/services/${item.slug}`}
                    className="text-base font-semibold text-white/70 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links / Sitemap */}
          <div className="lg:col-span-2 sm:col-span-6 col-span-12">
            <h4 className="text-sm text-white font-bold mb-6 uppercase tracking-[0.15em]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  className="text-base font-semibold text-white/70 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-base font-semibold text-white/70 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-base font-semibold text-white/70 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-base font-semibold text-white/70 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base font-semibold text-white/70 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact coordinates list */}
          <div className="lg:col-span-3 col-span-12">
            <h4 className="text-sm text-white font-bold sm:mb-6 mb-6 uppercase tracking-[0.15em]">
              Official Channels
            </h4>
            <p className="text-base text-white/70 font-semibold mb-4 leading-relaxed">
              Reach out directly to our administrative and engineering desks:
            </p>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm font-semibold">
              {[
                "amithcivilengineering@gmail.com",
                "sales@amith.in.net",
                "admin@amith.in.net",
              ].map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Icon
                    icon="lucide:mail"
                    width={14}
                    height={14}
                    aria-hidden="true"
                    className="shrink-0 text-white/50"
                  />
                  {email}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bottom Bar */}
        <div className="flex md:flex-nowrap flex-wrap gap-4 sm:gap-6 items-center justify-between sm:pt-12 pt-8 border-t border-white/10 mt-8 sm:mt-10">
          <p className="text-xs sm:text-sm lg:text-base font-semibold text-white/70 mb-0">
            &copy; {new Date().getFullYear()} AMITH Civil & Allied Engineering Services Pvt Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-3 items-center">
            {[
              { label: "Facebook", icon: "lucide:facebook" },
              { label: "Twitter", icon: "lucide:twitter" },
              { label: "LinkedIn", icon: "lucide:linkedin" },
            ].map((platform) => (
              <Link
                key={platform.label}
                href="#"
                aria-label={platform.label}
                className="size-10 rounded-full border border-white/20 text-white/70 flex items-center justify-center hover:bg-white hover:text-primary hover:border-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Icon icon={platform.icon} width={18} height={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
