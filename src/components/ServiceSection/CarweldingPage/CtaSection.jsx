import React, { useEffect } from "react";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function CtaSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      easing: "ease-in-out", // Easing function for smooth animation
      once: true, // Animation happens only once when the element comes into view
    });
  }, []);

  return (
    <section className="py-20 bg-[#0d1525]">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          className="text-4xl font-bold text-white mb-6"
          data-aos="fade-up"
        >
          Need Professional Car Welding?
        </h2>

        {/* Subtext */}
        <p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          From simple repairs to complex fabrication, our skilled welders deliver
          quality results you can trust.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contact"
            className="px-6 py-3 rounded-md text-white font-medium bg-blue-600 hover:bg-blue-700 transition-colors"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Get Free Quote
          </Link>

          <a
            href="https://wa.me/+447462163163?text=Hi%20Shahz%20Tyres"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md text-white font-medium bg-green-600 hover:bg-green-700 flex items-center justify-center transition-colors"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <FiPhone className="w-4 h-4 mr-2" />
            WhatsApp Quote
          </a>
        </div>
      </div>
    </section>
  );
}
