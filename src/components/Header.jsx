import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown, FiPhone } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: "Tyres", href: "/tyres" },
    { name: "Car Welding", href: "/car-welding" },
    { name: "Home Welding", href: "/home-welding" },
  ];

  return (
    <nav className="bg-[#0d1525] border-b border-slate-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-10 flex justify-between items-center h-16">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Shahz Tyres"
            className="w-30 h-20 md:w-36 md:h-24 rounded-full object-cover"
          />
          <span className="text-xl md:text-2xl font-semibold text-white">Shahz Tyres</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 text-white">
          <a href="/" className="hover:text-blue-400 transition text-sm md:text-base">
            Home
          </a>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center hover:text-blue-400 transition text-sm md:text-base">
              Services <FiChevronDown className="ml-1" />
            </button>
            {servicesOpen && (
              <div className="absolute top-6 left-0 bg-slate-800 rounded shadow-lg py-2 w-40">
                {services.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    className="block px-4 py-2 text-sm text-white hover:bg-slate-700"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/About" className="hover:text-blue-400 transition text-sm md:text-base">
            About us
          </a>

          <a href="/contact" className="hover:text-blue-400 transition text-sm md:text-base">
            Contact
          </a>

          <a
            href="https://wa.me/+447462163163"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm md:text-base"
          >
            <FiPhone className="mr-2" /> WhatsApp Us
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden p-3 bg-[#0d1525] border-t border-slate-800">
          <div className="flex flex-col px-6 py-4 space-y-4 text-white">
            <a href="/" className="hover:text-blue-400 transition text-sm">
              Home
            </a>

            <details className="group">
              <summary className="flex items-center gap-1 cursor-pointer hover:text-blue-400 text-sm">
                Services <FiChevronDown className="mt-[1px]" />
              </summary>
              <div className="flex flex-col pl-4 mt-2 space-y-2">
                {services.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    className="text-gray-300 hover:text-blue-400 text-sm"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </details>

            <a href="/about" className="hover:text-blue-400 transition text-sm">
              About us
            </a>

            <a href="/contact" className="hover:text-blue-400 transition text-sm">
              Contact
            </a>

            <a
              href="https://wa.me/+447462163163?text=Hi%20Shahz%20Tyres"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm w-fit"
            >
              <FiPhone className="mr-2" /> WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
