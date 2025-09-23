import React, { useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function PremiumTyreBrands() {
  const brands = [
    "Michelin",
    "Bridgestone",
    "Continental",
    "Pirelli",
    "Goodyear",
    "Dunlop",
    "Hankook",
    "Falken",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Animation should trigger once
    });
  }, []);

  return (
    <section className="py-20 bg-[#0d1525]">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 text-center">
        {/* Heading */}
        <h2
          className="text-4xl font-bold text-white mb-12"
          data-aos="fade-up"
        >
          Premium Tyre Brands
        </h2>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-[#111b2d] rounded-lg p-6 shadow-md hover:shadow-lg hover:bg-[#162236] hover:z-30 transition-all duration-300 active:bg-[#162236] active:shadow-lg hover:scale-105 active:scale-100"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Staggered animation delay
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-1">
                {brand}
              </h3>
              <p className="text-sm text-gray-400">Premium quality tyres</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <p className="text-gray-300 mb-6" data-aos="fade-up" data-aos-delay="400">
          Can’t find the tyre you need? We can order any specific tyre for you!
        </p>

        <a
          href="tel:+447462163163"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-medium bg-green-600 hover:bg-green-700 transition-colors"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <FiPhone className="w-4 h-4" />
          Request Special Order
        </a>
      </div>
    </section>
  );
}
