import React, { useEffect } from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const palette = {
  black: "#000000",
  darkGrey: "#1C1C1C",
  neonGreen: "#00FF40",
  softGreen: "#27AE60",
  white: "#FFFFFF",
  muted: "rgba(255,255,255,0.85)",
  dim: "rgba(255,255,255,0.65)",
  border: "rgba(255,255,255,0.15)",
};

export default function SiteFooter() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,      // allow repeat animations
      mirror: true,     // animate elements both scrolling down AND up
      easing: "ease-out-cubic",
    });

    const handleResize = () => AOS.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer style={{ backgroundColor: palette.black, color: palette.white }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div data-aos="fade-up" data-aos-delay="0">
            <h3 className="text-xl font-bold tracking-wide text-white">Shahz Tyres</h3>
            <img
              src="/logo.png"
              alt="Shahz Tyres"
              className="w-30 h-20 md:w-36 md:h-24 rounded-full object-cover"
            />
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="150">
            <h4 className="text-lg font-semibold text-white mb-3">Contact Information</h4>
            <div className="space-y-3">
              <a
                href="tel: +447462163163"
                className="flex hover:text-blue-500 items-center gap-2 text-sm transition"
                aria-label="Call us"
              >
                <FiPhone className="h-4 w-4" style={{ color: palette.neonGreen }} />
                +44 7462 163163
              </a>

              <a
                href="https://www.google.com/maps/place/Stoneley's+Garage+Services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-500 gap-2 text-sm transition"
                aria-label="View location on Google Maps"
              >
                <FaMapMarkerAlt className="h-4 w-4" style={{ color: palette.softGreen }} />
                8 Kent St, Leicester LE5 3BD, UK
              </a>
            </div>
          </div>

          {/* Services List */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-lg font-semibold text-white mb-3">Our Services</h4>
            <ul className="space-y-2">
              {[
                ["Tyres", "/tyres"],
                ["Car Welding", "/car-welding"],
                ["Home Welding", "/home-welding"],
              ].map(([label, href], i) => (
                <li key={i}>
                  <Link
                    to={href}
                    className="block transition hover:text-blue-500"
                    aria-label={`Go to ${label} services`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div data-aos="fade-up" data-aos-delay="450">
            <h4 className="text-lg font-semibold text-white mb-3">Company Policy</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="hover:text-blue-500" aria-label="View Privacy Policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-blue-500" aria-label="View Terms & Conditions">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10" style={{ borderTop: `1px solid ${palette.border}` }} />

        {/* Bottom note */}
        <div className="pt-6 text-center" data-aos="fade-up" data-aos-delay="600">
          <p className="text-sm" style={{ color: palette.dim }}>
            © {new Date().getFullYear()} Shahz Tyres Services. All rights reserved.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-2 text-center font-semibold" data-aos="fade-up" data-aos-delay="750">
          <p>
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
              aria-label="Visit Ansely website"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
