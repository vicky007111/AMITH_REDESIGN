import React from "react";
import Hero from "@/app/components/Home/Hero";
import Services from "@/app/components/Home/Services";
import Features from "@/app/components/Home/Features";
import Projects from "@/app/components/Home/Projects";
import Gallery from "@/app/components/Home/Gallery";
import Leadership from "@/app/components/Home/Leadership";
import VisionMission from "@/app/components/Home/VisionMission";
import Contact from "@/app/components/Home/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Features />
      <Projects />
      <Gallery />
      <Leadership />
      <VisionMission />
      <Contact />
    </main>
  );
}
