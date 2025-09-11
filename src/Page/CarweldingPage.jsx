import React from "react";

// Sections from components/contactPage
import CarWeldingHero from "../components/ServiceSection/CarweldingPage/CarWeldingHero";
import CarWeldingServices from "../components/ServiceSection/CarweldingPage/CarWeldingServices"
import QualitySafetyStandards from "../components/ServiceSection/CarweldingPage/QualitySafetyStandards"
import WhyChooseUs from "../components/ServiceSection/CarweldingPage/WhyChooseUs"
import WeldingProcess from "../components/ServiceSection/CarweldingPage/WeldingProcess"
import CtaSection from "../components/ServiceSection/CarweldingPage/CtaSection"
export default function Carwel() {
  return (
    <>
    
    <div>
      <CarWeldingHero />
    </div>

    <div>
        <CarWeldingServices />
    </div>
    
    <div>
        <QualitySafetyStandards />
    </div>

    <div>
        <WhyChooseUs />
    </div>

    <div>
        <WeldingProcess />
    </div>

    <div>
        <CtaSection />
    </div>
    </>
    
  );
}
