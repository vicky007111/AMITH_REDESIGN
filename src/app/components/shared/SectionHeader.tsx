"use client";

import type { ReactNode } from "react";
import Reveal from "./Reveal";

export interface SectionHeaderProps {
  /** Small uppercase eyebrow label above the heading. */
  kicker?: string;
  title: ReactNode;
  /** Optional lead paragraph under the heading. */
  lead?: ReactNode;
  /** Centered headers get the accent bar; left-aligned ones drop it. */
  align?: "center" | "left";
  as?: "h1" | "h2" | "h3";
  /** Light-on-navy treatment for dark sections. */
  dark?: boolean;
  className?: string;
}

/**
 * Canonical section header: kicker → heading → (accent bar) → lead.
 * Copy passes through untouched — this only owns arrangement and styling.
 */
export default function SectionHeader({
  kicker,
  title,
  lead,
  align = "center",
  as: Tag = "h2",
  dark = false,
  className,
}: SectionHeaderProps) {
  const centered = align === "center";
  // Default rhythm below the header — consumers override by passing any mb-*.
  const hasOwnMargin = /(^|\s)(sm:|md:|lg:)?mb-/.test(className ?? "");
  return (
    <Reveal
      className={[
        centered ? "flex flex-col items-center text-center" : "",
        hasOwnMargin ? "" : "mb-10 lg:mb-12",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {kicker && (
        <p className={`kicker-text ${dark ? "text-sky-300" : ""}`}>{kicker}</p>
      )}
      <Tag className={dark ? "text-white" : undefined}>{title}</Tag>
      {centered && (
        <span
          aria-hidden="true"
          className={`mt-4 h-1 w-12 rounded-full ${
            dark ? "bg-sky-300/80" : "bg-gradient-to-r from-primary to-accent"
          }`}
        />
      )}
      {lead && (
        <p
          className={[
            "mt-4 leading-relaxed max-w-2xl",
            dark ? "text-white/70" : "text-body",
            centered ? "mx-auto" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
