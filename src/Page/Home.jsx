import React from "react";

// Sections from components/HomePage
import HeroSection from "../components/HomePage/HeroSection.jsx";
import ServicesSection from "../components/HomePage/ServicesSection.jsx";

import Review from "../components/HomePage/Review.jsx";

import ContactSection from "../components/HomePage/ContactSection.jsx"
export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section id="hero">
        <HeroSection />
      </section>
      {/* Services */}
      <section id="services">
        <ServicesSection />
      </section>
      <section>
        <  Review />
      </section>
      <section>
        < ContactSection />
      </section>










    </div>
  );
}
