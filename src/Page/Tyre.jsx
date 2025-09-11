import React from "react";

// Sections from components/HomePage
import WheelTyreHero from "../components/ServiceSection/Tyre/WheelTyreHero";
import WheelAlignmentServices from "../components/ServiceSection/Tyre/WheelAlignmentServices";
import TyreServices from "../components/ServiceSection/Tyre/TyreServices";
import WhyAlignmentSection from "../components/ServiceSection/Tyre/WhyAlignmentSection";
import EmergencyCTA from "../components/ServiceSection/Tyre/EmergencyCTA";
import SeasonalTyreChangeovers from "../components/ServiceSection/Tyre/SeasonalTyreChangeovers";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section >
       <WheelTyreHero />
      </section>
         <section >
       <WheelAlignmentServices />
      </section>
        <section >
       <TyreServices />
      </section>
        <section >
       <WhyAlignmentSection />
      </section>
      <section>
        <SeasonalTyreChangeovers />
      </section>
       <section >
       <EmergencyCTA />
      </section>





   
    </div>
  );
}
