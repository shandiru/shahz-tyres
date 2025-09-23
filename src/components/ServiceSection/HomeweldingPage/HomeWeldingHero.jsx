import React, { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function HomeWeldingHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      easing: "ease-in-out", // Easing function for smooth animation
      once: true, // Animation happens only once when the element comes into view
    });
  }, []);

  return (
    <section className="relative py-24 bg-[#0d1525]">
      <div className="container mx-auto px-6 mt-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Label */}
          <div
            className="inline-flex items-center border border-blue-500 text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full mb-6 text-sm"
            data-aos="fade-up"
          >
            <FaHome className="w-4 h-4 mr-2" />
            Mobile Welding Service
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            data-aos="fade-up"
          >
            <span className="text-blue-400">Home</span>{" "}
            <span className="text-gray-100">Welding</span>
          </h1>

          {/* Description */}
          <p
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Professional mobile welding services brought directly to your location.
            Whether it's your home, business, or roadside, we bring our expertise
            and equipment to you for maximum convenience.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg text-lg shadow-md transition-colors"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Book Mobile Service
            </Link>

            <a
              href="tel: +447462163163"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a3a86] hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg text-lg flex items-center justify-center shadow-md transition-colors"
              data-aos="fade-up"
              data-aos-delay="600"
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
