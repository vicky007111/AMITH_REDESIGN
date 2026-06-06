import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Configure Inter font for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Configure Montserrat font for headings
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AMITH Civil & Allied Engineering | Structural Auditing & NDT Services, Chennai",
    template: "%s | AMITH Civil & Allied Engineering",
  },
  description:
    "AMITH Civil & Allied Engineering (ACAES) Pvt Ltd — expert structural auditing, NDT/PDT testing, concrete mix design, restoration & rehabilitation of structures, and QA/QC services in Chennai.",
  keywords: [
    "structural auditing Chennai",
    "NDT testing Chennai",
    "civil engineering consultancy",
    "structural rehabilitation",
    "concrete mix design",
    "QA QC civil engineering",
    "AMITH civil engineering",
    "ACAES",
  ],
  authors: [{ name: "AMITH Civil & Allied Engineering (ACAES) Pvt Ltd" }],
  creator: "AMITH Civil & Allied Engineering (ACAES) Pvt Ltd",
  metadataBase: new URL("https://amith.in.net"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://amith.in.net",
    siteName: "AMITH Civil & Allied Engineering",
    title: "AMITH Civil & Allied Engineering | Structural Auditing & NDT Services",
    description:
      "Expert structural auditing, NDT/PDT testing, and civil engineering consultancy services in Chennai.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} min-h-full flex flex-col bg-[#F8FAFC] text-zinc-900`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
