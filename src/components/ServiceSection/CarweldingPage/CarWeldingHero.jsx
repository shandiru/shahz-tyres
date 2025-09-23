import React from "react";
import { FaWrench } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function CarWeldingHero() {
  return (
    <section className="relative py-24 bg-[#0d1525]">
      <div className="container mx-auto px-6 mt-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Label */}
          <div className="inline-flex items-center border border-blue-500 text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full mb-6 text-sm">
            <FaWrench className="w-4 h-4 mr-2" />
            Professional Automotive Welding
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-blue-400">Car</span>{" "}
            <span className="text-white">Welding</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Expert automotive welding services for all types of vehicle repairs.
            From exhaust systems to chassis work, our skilled welders deliver
            high-quality results that meet safety standards.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
             to="/contact"
             className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg text-lg shadow-md transition-colors">
              Get Welding Quote
            </Link>

            <a
              href="tell: +447462163163"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a3a86] hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg text-lg flex items-center justify-center shadow-md transition-colors"
            >
              <FiPhone className="w-4 h-4 mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
