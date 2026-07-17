import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { HeaderItem } from "../../../../types/menu";
import { usePathname } from "next/navigation";

const MobileHeaderLink: React.FC<{ item: HeaderItem; onClick?: () => void }> = ({ item, onClick }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };
  const path = usePathname();

  // Determine if this link is active
  const isActive =
    item.href === "/"
      ? path === "/"
      : path === item.href || path.startsWith(item.href + "/");

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={() => {
          if (item.submenu) {
            handleToggle();
          } else if (onClick) {
            onClick();
          }
        }}
        className={`flex items-center justify-between w-full py-2 text-base font-semibold rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
          isActive
            ? "text-primary"
            : "text-slate-800 hover:text-primary"
        } `}
      >
        {item.label}
        {item.submenu && (
          <Icon
            icon="lucide:chevron-down"
            width={18}
            height={18}
            aria-hidden="true"
            className={`transition-transform duration-200 ${submenuOpen ? "rotate-180" : ""}`}
          />
        )}
      </Link>
      {submenuOpen && item.submenu && (
        <div className="bg-white p-2 w-full">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="block py-2 px-2 rounded-sm text-muted hover:bg-surface-tint hover:text-primary transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
