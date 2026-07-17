"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { headerData } from "./Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "./Navigation/HeaderLink";
import MobileHeaderLink from "./Navigation/MobileHeaderLink";
import Button from "@/app/components/shared/Button";


const Header: React.FC = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 py-1 z-50 w-full bg-white border-b border-line transition-all duration-300 ${
        sticky ? "shadow-e1" : "shadow-none"
      }`}
    >
      <div
        className={`container mx-auto max-w-6xl flex items-center justify-between xl:gap-15 gap-10 duration-300 px-4 sm:px-6 md:px-8 lg:px-12 ${
          sticky ? "py-1.5" : "py-3"
        }`}
      >
        <Logo />
        <ul className="hidden xl:flex flex-grow items-center justify-start gap-8 xl:gap-10">
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <Button
            href="/contact"
            size="sm"
            className="hidden xl:inline-flex"
          >
            Get Consultation
          </Button>

          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="block xl:hidden p-2 rounded-lg hover:bg-surface-tint transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Toggle mobile menu"
            aria-expanded={navbarOpen}
            aria-controls="mobile-menu"
          >
            <span className="block w-6 h-0.5 bg-primary"></span>
            <span className="block w-6 h-0.5 bg-primary mt-1.5"></span>
            <span className="block w-6 h-0.5 bg-primary mt-1.5"></span>
          </button>
        </div>
      </div>
      {navbarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" />
      )}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`xl:hidden fixed inset-y-0 right-0 h-screen w-full bg-white shadow-e3 transform transition-transform duration-300 max-w-xs overflow-y-auto ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b border-line">
          <Logo />
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Close mobile menu"
            className="p-2 rounded-lg text-muted hover:bg-surface-tint hover:text-primary transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Icon icon="lucide:x" width={24} height={24} aria-hidden="true" />
          </button>
        </div>
        <nav className="flex flex-col items-start p-4 gap-4">
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} onClick={() => setNavbarOpen(false)} />
          ))}
          <div className="mt-4 w-full">
            <Button
              href="/contact"
              className="w-full"
              onClick={() => setNavbarOpen(false)}
            >
              Get Consultation
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
