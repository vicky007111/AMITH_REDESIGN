"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
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
        className={`relative text-base flex items-center font-medium transition-colors duration-200 pb-1 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
          isActive
            ? "text-primary font-semibold"
            : "text-slate-700 hover:text-primary"
        }`}
      >
        {item.label}
        {item.submenu && (
          <Icon
            icon="lucide:chevron-down"
            width={16}
            height={16}
            aria-hidden="true"
            className="ml-1"
          />
        )}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" />
        )}
      </Link>
      {submenuOpen && (
        <ul className="absolute py-2 left-0 mt-0.5 w-60 bg-white border border-line shadow-e2 rounded-card overflow-hidden">
          {item.submenu?.map((subItem, index) => (
            <li key={index}>
              <Link
                href={subItem.href}
                className="block px-4 py-2 text-ink hover:bg-surface-tint hover:text-primary transition-colors duration-200 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
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
