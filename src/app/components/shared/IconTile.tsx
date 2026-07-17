"use client";

import { Icon } from "@iconify/react";

type IconTileSize = "sm" | "md" | "lg";

export interface IconTileProps {
  /** Iconify icon name (lucide:*). */
  icon: string;
  size?: IconTileSize;
  className?: string;
}

const SIZES: Record<IconTileSize, { tile: string; icon: number }> = {
  sm: { tile: "size-10 rounded-lg", icon: 20 },
  md: { tile: "size-12 rounded-btn", icon: 24 },
  lg: { tile: "size-14 rounded-btn", icon: 28 },
};

/** The recurring icon-in-tinted-tile motif, standardized. Decorative only. */
export default function IconTile({
  icon,
  size = "md",
  className,
}: IconTileProps) {
  const s = SIZES[size];
  return (
    <div
      aria-hidden="true"
      className={[
        s.tile,
        "bg-primary/5 text-primary grid place-items-center shrink-0",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Icon icon={icon} width={s.icon} height={s.icon} />
    </div>
  );
}
