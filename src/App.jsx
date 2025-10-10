import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./Page/Home.jsx";
import Contact from "./Page/Contact.jsx";
import Homewel from "./Page/HomeweldingPage.jsx";
import About from "./Page/AboutPage.jsx";
import Carwel from "./Page/CarweldingPage.jsx";
import Tyres from "./Page/TyresPage.jsx";
import SiteFooter from "./components/Footer.jsx";
import TermsConditions from "./components/Term.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import GDPRConsent from "./components/GDPRButton.jsx";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/tyres" element={<Tyres />} />
          <Route path="/home-welding" element={<Homewel />} />
          <Route path="/car-welding" element={<Carwel />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <SiteFooter />
        <GDPRConsent />
      </main>
    </div>
  );
}
