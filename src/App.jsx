import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./Page/Home.jsx";
import Contact from "./Page/Contact.jsx";
import Homewel from "./Page/HomeweldingPage.jsx";
import About from "./Page/AboutPage.jsx";
import Carwel from "./Page/CarweldingPage.jsx";
import Tyres from "./Page/TyresPage.jsx";
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
             <Route path="/car-welding" element={<Carwel />} />
              <Route path="/tyres" element={<Tyres />} />
            
        

        
        </Routes>
       
      </main>
    </div>
  );
}
