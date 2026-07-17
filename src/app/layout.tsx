import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import MotionProvider from "@/app/components/shared/MotionProvider";
import NextTopLoader from "nextjs-toploader";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const SITE_URL = "https://amith.in.net";
const SITE_TITLE = "AMITH Civil & Allied Engineering Services | Structural Audit & QA/QC Consultancy";
const SITE_DESCRIPTION = "AMITH Civil & Allied Engineering Services Pvt Ltd is a premier civil engineering consultancy specializing in structural audits, TPQM, NDT testing, material testing, and restoration in Chennai.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#001c68",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Structural Audit Consultants Chennai",
    "Quality Audit Services Chennai",
    "Third Party Quality Monitoring Chennai",
    "NDT Testing Concrete",
    "Civil Engineering Consultancy Chennai",
    "Material Testing Laboratory Chennai",
    "Condition Assessment Survey",
    "Building Distress Assessment",
    "Restoration and Rehabilitation of Concrete Structures"
  ],
  authors: [{ name: "AMITH Civil & Allied Engineering Services" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: "Expert engineering consultancy, NABL-associated material testing, and advanced structural diagnostics in Chennai.",
    url: SITE_URL,
    siteName: "AMITH Civil & Allied Engineering Services",
    images: [
      {
        url: "/images/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "AMITH Civil & Allied Engineering Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/og/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <NextTopLoader color="#001C68" />
        <MotionProvider>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </MotionProvider>
      </body>
    </html>
  );
}