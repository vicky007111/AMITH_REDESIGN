import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/app/components/ScrollToTop";
import NextTopLoader from "nextjs-toploader";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AMITH Civil & Allied Engineering Services | Structural Audit & QA/QC Consultancy",
  description: "AMITH Civil & Allied Engineering Services Pvt Ltd is a premier civil engineering consultancy specializing in structural audits, TPQM, NDT testing, material testing, and restoration in Chennai.",
  keywords: [
    "Structural Audit Consultants Chennai",
    "Quality Audit Services Chennai",
    "Third Party Quality Monitoring Chennai",
    "NDT Testing Concrete",
    "Civil Engineering Consultancy Chennai",
    "Material Testing Laboratory Chennai",
    "Concrete Mix Design",
    "Building Distress Assessment",
    "Restoration and Rehabilitation of Concrete Structures"
  ],
  authors: [{ name: "AMITH Civil & Allied Engineering Services" }],
  openGraph: {
    title: "AMITH Civil & Allied Engineering Services | Structural Audit & QA/QC Consultancy",
    description: "Expert engineering consultancy, NABL-associated material testing, and advanced structural diagnostics in Chennai.",
    url: "https://amith.in.net",
    siteName: "AMITH Civil & Allied Engineering Services",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className} suppressHydrationWarning>
        <NextTopLoader color="#001C68" />
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}