"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "./Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "./Navigation/HeaderLink";
import MobileHeaderLink from "./Navigation/MobileHeaderLink";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
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
      className={`fixed top-0 py-1 z-50 w-full bg-transparent transition-all duration-300 ${
        sticky || navbarOpen ? "shadow-lg bg-white/95 dark:bg-darklight/95 backdrop-blur-md" : "shadow-none"
      }`}
    >
      <div
        className={`container mx-auto max-w-7xl flex items-center justify-between xl:gap-15 gap-10 duration-300 px-4 md:px-8 lg:px-12 ${
          sticky ? "py-3" : "py-6"
        }`}
      >
        <Logo />
        <ul className="hidden xl:flex flex-grow items-center justify-start gap-10">
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center text-slate-500 hover:text-primary dark:text-white bg-transparent rounded-full p-2 outline-none cursor-pointer"
          >
            <Icon
              icon="solar:sun-2-bold"
              width="24"
              height="24"
              className="hidden dark:block text-white"
            />
            <Icon
              icon="solar:moon-bold"
              width="24"
              height="24"
              className="dark:hidden block text-slate-800 hover:text-primary"
            />
          </button>
          
          <a
            href="#contact"
            className="hidden xl:block bg-primary text-white border border-primary px-5 py-2.5 rounded-lg hover:bg-transparent hover:text-primary dark:hover:text-white duration-300 text-sm font-semibold transition-all shadow-md shadow-primary/10 cursor-pointer"
          >
            Get Consultation
          </a>

          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="block xl:hidden p-2 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 bg-primary dark:bg-primary"></span>
            <span className="block w-6 h-0.5 bg-primary dark:bg-primary mt-1.5"></span>
            <span className="block w-6 h-0.5 bg-primary dark:bg-primary mt-1.5"></span>
          </button>
        </div>
      </div>
      {navbarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" />
      )}
      <div
        ref={mobileMenuRef}
        className={`xl:hidden fixed inset-y-0 right-0 h-screen w-full bg-white dark:bg-darklight shadow-lg transform transition-transform duration-300 max-w-xs overflow-y-auto ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-darkborder">
          <Logo />
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Close mobile menu"
            className="text-slate-500 dark:text-slate-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-start p-4 gap-4">
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} onClick={() => setNavbarOpen(false)} />
          ))}
          <div className="mt-4 w-full">
            <a
              href="#contact"
              className="block w-full text-center bg-primary text-white px-4 py-2.5 rounded-lg hover:bg-opacity-95 text-sm font-semibold transition-all"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              Get Consultation
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
