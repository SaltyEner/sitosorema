"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import KeyMetrics from "@/components/KeyMetrics";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
        <KeyMetrics />
      </div>
      <div id="experience">
        <Experience />
        <CaseStudies />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="certifications">
        <Certifications />
        <Testimonials />
      </div>
      <div id="tech">
        <TechStack />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
