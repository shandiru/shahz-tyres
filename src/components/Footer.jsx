// File: SiteFooter.jsx
import React from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

// ✅ Stoneley's Garage Services Palette
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
  return (
    <footer style={{ backgroundColor: palette.black, color: palette.white }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold tracking-wide text-white">
              Shahz Tyres
            </h3>
            <img 
              src="/logo.png"
              alt="Shahz Tyres"
            className="w-30 h-20 md:w-36 md:h-24 rounded-full object-cover"
            />
            {/* <p className="text-sm mt-3" style={{ color: palette.muted }}>
              Family-run garage established 1973. Professional automotive
              services for cars, commercial vehicles, and motorhomes.
            </p> */}
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Contact Information
            </h4>
            <div className="space-y-3">
              <a
                href="tel: +447462163163"
                className="flex hover:text-blue-500 items-center gap-2 text-sm transition"
              >
                <FiPhone className="h-4 w-4" style={{ color: palette.neonGreen }} />
                +44 7462 163163
              </a>

              <a
                href="https://www.google.com/maps/place/Stoneley's+Garage+Services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-500 gap-2 text-sm transition"
              >
                <FaMapMarkerAlt className="h-4 w-4" style={{ color: palette.softGreen }} />
                8 Kent St, Leicester LE5 3BD, UK
              </a>
            </div>
          </div>

          {/* Services List */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                ["Tyres", "/tyres"],
                ["Car Welding", "/car-welding"],
                ["Home Welding", "/home-welding"],
              ].map(([label, href], i) => (
                <li key={i}>
                  <a
                    href={href}
                    className="block transition hover:text-blue-500"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Company Policy
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-blue-500">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10" style={{ borderTop: `1px solid ${palette.border}` }} />

        {/* Bottom note */}
        <div className="pt-6 text-center">
          <p className="text-sm" style={{ color: palette.dim }}>
            © {new Date().getFullYear()} Shahz Tyres Services. All rights reserved.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-2 text-center font-semibold">
          <p>
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
