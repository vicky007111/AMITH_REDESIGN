import HeroSub from "@/app/components/SharedComponent/HeroSub";
import ContactForm from "@/app/components/Contact/Form";
import ContactInfo from "@/app/components/Contact/ContactInfo";
import Location from "@/app/components/Contact/OfficeLocation";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact | AMITH Civil & Allied Engineering Services",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Get in touch with our engineering and consultancy offices in Velachery, Chennai for structural audits, TPQM, and project discussions."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
      <Location />
    </>
  );
};

export default page;
