import React, { useEffect } from "react";
import { FaCar } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function TyreServicesHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function for smoothness
      once: true, // Animation happens only once when elements come into view
    });
  }, []);

  return (
    <section className="relative py-24 bg-[#0d1525]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Label */}
          <div
            className="inline-flex mt-10 items-center border border-blue-500 text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full mb-6 text-sm"
            data-aos="fade-up"
          >
            <FaCar className="w-4 h-4 mr-2" />
            Professional Tyre Services
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-blue-400">Tyre</span>{" "}
            <span className="text-white">Services</span>
          </h1>

          {/* Description */}
          <p
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Professional tyre fitting, balancing, and alignment services for all vehicle types.
            We stock a wide range of premium tyres and offer competitive prices with expert
            installation.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Get Tyre Quote Button */}
            <Link
              to="/contact" // Change this to your target link or section ID (e.g. "#quote-form")
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg text-lg shadow-md transition-colors text-center"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Get Tyre Quote
            </Link>

            {/* WhatsApp Button */}
            <a
              href="tel:+447462163163"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a3a86] hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg text-lg flex items-center justify-center shadow-md transition-colors"
              data-aos="fade-up"
              data-aos-delay="800"
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
