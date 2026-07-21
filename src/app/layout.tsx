import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import ScrollToTopOnNavigate from "@/app/components/ScrollToTopOnNavigate";
import NextTopLoader from "nextjs-toploader";

const manrope = Manrope({ subsets: ["latin"] });

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
  title: {
    default: SITE_TITLE,
    template: "%s",
  },
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "AMITH Civil & Allied Engineering Services Pvt Ltd",
  alternateName: "AMITH Civil Engineering",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-white.png`,
  image: `${SITE_URL}/images/og/og-image.png`,
  telephone: "+91-9940548833",
  email: "amithcivilengineering@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.35/F3, Sai Krupa Apartment, Ramagirinagar, Taramani Link Road, Velachery",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600042",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <NextTopLoader color="#001C68" />
        <ScrollToTopOnNavigate />
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}