import React from "react";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function TyreCtaSection() {
  return (
    <section className="py-20 bg-[#0d1525]">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-4">
          Need New Tyres?
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Get expert advice and competitive prices on premium tyres.
          Quick, efficient service guaranteed.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
          to="/contact"
          className="px-6 py-3 rounded-md text-white font-medium bg-blue-600 hover:bg-blue-700 transition-colors">
            Get Free Quote
          </Link>

          <a
            href="https://wa.me/+447462163163?text=Hi%20Shahz%20Tyres"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md text-white font-medium bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors"
          >
            <FiPhone className="w-4 h-4 mr-2" />
            WhatsApp Quote
          </a>
        </div>
      </div>
    </section>
  );
}
