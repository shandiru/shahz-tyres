import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// Page Components
import Home from "./Page/Home.jsx";
import Contact from "./Page/Contact.jsx";
import Wheelalignment from "./Page/wheelalignmentpage.jsx";
import AirConPage from "./Page/AirConPage.jsx";
import CarServicePage from "./Page/CarServicePage.jsx";
import CleaningPage from "./Page/CleaningPage.jsx";
import DiagnosticsPage from "./Page/DiagnosticsPage.jsx";
import About from "./Page/AboutPage.jsx";
import Homewel from "./Page/HomeweldingPage.jsx";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/about" element={<About />} />
            <Route path="/home-welding" element={<Homewel />} />
         

        
        </Routes>
      </main>
    
    </div>
  );
}
