import React from "react";

// Sections from components/contactPage
import TyreServicesHero from "../components/ServiceSection/TyresPage/TyreServicesHero";
import TyreServices from "../components/ServiceSection/TyresPage/TyreServices"
import PremiumTyreBrands from "../components/ServiceSection/TyresPage/PremiumTyreBrands"
import TyreBalancing from "../components/ServiceSection/TyresPage/TyreBalancing"
import SeasonalTyreChangeovers from "../components/ServiceSection/TyresPage/SeasonalTyreChangeovers"
import TyreCtaSection from "../components/ServiceSection/TyresPage/TyreCtaSection"
export default function Tyres() {
  return (
    <>
    
    <div>
      <TyreServicesHero />
    </div>

    <div>
        <TyreServices />
    </div>
    
    <div>
        <PremiumTyreBrands />
    </div>

    <div>
        <TyreBalancing />
    </div>

    <div>
        <SeasonalTyreChangeovers/>
    </div>
    <div>
      <TyreCtaSection />
    </div>
    </>
    
  );
}
