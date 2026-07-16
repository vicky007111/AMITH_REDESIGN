"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderItem } from "../../../../types/menu";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  const path = usePathname();

  // Determine if this link is active
  const isActive =
    item.href === "/"
      ? path === "/"
      : path === item.href || path.startsWith(item.href + "/");

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={`relative text-base flex items-center font-medium transition-colors duration-200 pb-1 ${
          isActive
            ? "text-primary font-semibold"
            : "text-slate-700 hover:text-primary"
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full animate-fadeIn" />
        )}
      </Link>
      {submenuOpen && (
        <ul className="absolute py-2 left-0 mt-0.5 w-60 bg-white shadow-lg rounded-lg">
          {item.submenu?.map((subItem, index) => (
            <li key={index}>
              <Link
                href={subItem.href}
                className="block px-4 py-2 text-black hover:bg-gray-200"
              >
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default HeaderLink;
