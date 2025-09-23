import React from "react";

// Sections from components/contactPage
import AboutSection from "../components/About/AboutSection";
import OurStorySection from "../components/About/OurStorySection"
import OurValuesSection from "../components/About/OurValuesSection"
import TeamSection from "../components/About/TeamSection"
import CTASection from "../components/About/CTASection"
export default function About() {
  return (
    <>

      <div>
        <AboutSection />
      </div>
      <div>
        <OurStorySection />
      </div>
      <div>
        <OurValuesSection />
      </div>

      {/* <div>
        <TeamSection />
    </div> */}
      <div>
        <CTASection />
      </div>
    </>

  );
}
