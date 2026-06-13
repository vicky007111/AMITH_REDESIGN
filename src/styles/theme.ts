/**
 * AMITH Design System — Theme Tokens
 *
 * These tokens mirror the CSS custom properties defined in globals.css @theme {}.
 * Use these constants for TypeScript-safe access to the design system values.
 * For Tailwind class usage, reference the CSS variable names directly (e.g. `text-primary`).
 */

export const colors = {
  primary: "#001c68",
  primaryHover: "#001050",
  secondary: "#ffffff",
  warning: "#f59e0b",
  success: "#10b981",
  grey: "#f9f9fb",
  dark: "#141414",
  cream: "#eff6ff",
  darkcream: "#dbeafe",
  darkmode: "#081738",
  darklight: "#000f30",
  darkborder: "#1e293b",
  borderColor: "#cbd5e1",
  blue: "#2563eb",
  midnightText: "#1e293b",
  skyMistBlue: "#94a3b8",
} as const;

export const typography = {
  fontFamily: "Manrope, sans-serif",
  sizes: {
    xs: "0.75rem",    // 12px
    sm: "0.875rem",   // 14px
    base: "1rem",     // 16px
    lg: "1.125rem",   // 18px
    xl: "1.375rem",   // 22px  (--text-22)
    "2xl": "1.75rem", // 28px  (--text-28)
    "3xl": "2rem",    // 32px  (--text-32)
    "4xl": "2.25rem", // 36px  (--text-36)
    "5xl": "2.5rem",  // 40px  (--text-40)
    "6xl": "4.063rem",// 65px  (--text-65)
  },
} as const;

export const spacing = {
  sectionY: "py-20",
  sectionYLarge: "py-28",
  containerX: "px-6 md:px-12",
  containerMax: "max-w-7xl mx-auto",
} as const;

/**
 * Reusable Tailwind className patterns.
 *
 * These are string constants combining multiple Tailwind classes into
 * semantic, reusable patterns. Import and spread these wherever needed
 * to keep component styles consistent.
 */
export const classNames = {
  // Section wrapper
  sectionBase: "transition-colors duration-300",
  sectionLight: "bg-white dark:bg-darkmode",
  sectionAlt: "bg-slate-50 dark:bg-darklight",

  // Container
  container: "container mx-auto max-w-7xl px-6 md:px-12",

  // Section heading block (centered)
  sectionLabel:
    "text-primary font-bold text-sm uppercase tracking-wider mb-3",
  sectionTitle:
    "text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white",
  sectionDivider: "w-12 h-1 bg-primary mx-auto mt-4 rounded-full",

  // Card base patterns
  cardBase:
    "bg-slate-50 dark:bg-darklight border border-slate-100 dark:border-darkborder rounded-3xl p-8 hover:shadow-card-shadow hover:-translate-y-1 transition-all duration-300",
  cardWhite:
    "bg-white dark:bg-darkmode border border-slate-200 dark:border-darkborder rounded-3xl p-8 hover:shadow-card-shadow transition-all duration-300",

  // Buttons
  btnPrimary:
    "px-6 py-3 rounded-xl font-semibold bg-primary hover:bg-primary-hover text-white transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30",
  btnOutline:
    "px-6 py-3 rounded-xl font-semibold border border-slate-300 dark:border-darkborder text-slate-700 dark:text-slate-300 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-300",
  btnSm:
    "px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary hover:bg-primary-hover text-white transition-all duration-300 shadow-md shadow-primary/10",

  // Icon circle
  iconCircle:
    "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0",
  iconCircleLg:
    "w-16 h-16 rounded-2xl bg-cream dark:bg-primary/10 flex items-center justify-center text-primary shrink-0",

  // Badge / Tag
  badge:
    "px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider",
  badgePrimary:
    "bg-primary/10 text-primary",
} as const;

export type ColorKey = keyof typeof colors;
export type ClassNameKey = keyof typeof classNames;
