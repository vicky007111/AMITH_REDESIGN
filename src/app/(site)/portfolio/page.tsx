import HeroSub from "@/app/components/SharedComponent/HeroSub";
import Projects from "@/app/components/Home/Projects";
import Gallery from "@/app/components/Home/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | AMITH Civil & Allied Engineering Services",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/portfolio", text: "Portfolio" },
  ];
  return (
    <>
      <HeroSub
        title="Our Portfolio"
        description="Explore our portfolio of high-impact civil engineering inspections, structural audits, public housing stability certs, and runway diagnostics."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Projects />
      <Gallery />
    </>
  );
};

export default page;
