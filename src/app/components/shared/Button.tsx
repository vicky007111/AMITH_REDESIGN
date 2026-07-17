"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  /** Visual style — `inverse` is the white-on-navy treatment for dark surfaces. */
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Renders a Next.js Link for internal paths, a plain anchor for external/tel:/mailto:/wa.me. Omit for a real <button>. */
  href?: string;
  /** Iconify icon name (lucide:*), rendered after the label by default. */
  icon?: string;
  iconPosition?: "start" | "end";
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  /** Anchor target — pass "_blank" for external links (rel is added automatically). */
  target?: string;
  className?: string;
  "aria-label"?: string;
  children: ReactNode;
}

const BASE =
  "inline-flex items-center justify-center rounded-btn font-bold whitespace-nowrap cursor-pointer " +
  "transition-[background-color,border-color,box-shadow,transform] duration-200 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] " +
  "disabled:opacity-50 disabled:pointer-events-none";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-navy-700 shadow-e1 hover:shadow-e2 focus-visible:outline-accent",
  secondary:
    "bg-white text-primary border border-line-strong hover:border-primary hover:bg-surface-tint focus-visible:outline-accent",
  ghost: "text-primary hover:bg-surface-tint focus-visible:outline-accent",
  inverse:
    "bg-white text-primary hover:bg-surface-tint shadow-e2 focus-visible:outline-white",
};

const SIZES: Record<ButtonSize, { classes: string; icon: number }> = {
  sm: { classes: "gap-1.5 px-4 py-2 text-sm", icon: 16 },
  md: { classes: "gap-2 px-6 py-3 text-sm", icon: 18 },
  lg: { classes: "gap-2 px-8 py-4 text-base", icon: 18 },
};

/**
 * The site-wide button/CTA primitive. Every button and link-styled-as-button
 * goes through this — no hand-rolled CTA class strings.
 */
export default function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "end",
  type = "button",
  disabled,
  onClick,
  target,
  className,
  "aria-label": ariaLabel,
  children,
}: ButtonProps) {
  const classes = [BASE, VARIANTS[variant], SIZES[size].classes, className]
    .filter(Boolean)
    .join(" ");

  const iconEl = icon ? (
    <Icon
      icon={icon}
      width={SIZES[size].icon}
      height={SIZES[size].icon}
      aria-hidden="true"
    />
  ) : null;

  const content = (
    <>
      {iconPosition === "start" && iconEl}
      {children}
      {iconPosition === "end" && iconEl}
    </>
  );

  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} onClick={onClick} className={classes} aria-label={ariaLabel}>
          {content}
        </Link>
      );
    }
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
