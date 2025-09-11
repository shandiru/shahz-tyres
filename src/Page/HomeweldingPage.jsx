import React from "react";

// Sections from components/contactPage
import HomeWeldingHero from "../components/ServiceSection/HomeweldingPage/HomeWeldingHero";
import MobileWeldingServices from "../components/ServiceSection/HomeweldingPage/MobileWeldingServices"
import ServiceAreas from "../components/ServiceSection/HomeweldingPage/ServiceAreas"
import HowItWorks from "../components/ServiceSection/HomeweldingPage/HowItWorks"
import CtaSection from "../components/ServiceSection/HomeweldingPage/CtaSection"

export default function Homewel() {
  return (
    <>
    
    <div>
      <HomeWeldingHero />
    </div>

    <div>
        <MobileWeldingServices />
    </div>
    
    <div>
        <ServiceAreas />
    </div>

    <div>
        <HowItWorks />
    </div>

    <div>
        <CtaSection />
    </div>
    </>
    
  );
}
