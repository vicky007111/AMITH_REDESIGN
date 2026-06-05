import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AMITH Civil & Allied Engineering | Structural Audit Consultants Chennai",
  description:
    "AMITH Civil & Allied Engineering – Premier structural audit consultants in Chennai. Expert quality audit, NDT, and RCC infrastructure assessment services.",
  keywords:
    "structural audit consultants Chennai, quality audit services Chennai, NDT testing, RCC infrastructure",
  openGraph: {
    title: "AMITH Civil & Allied Engineering",
    description:
      "Premier structural audit and quality consulting firm in Chennai. Trusted by builders, architects and government bodies since 2008.",
    type: "website",
    url: "https://amith.in.net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
