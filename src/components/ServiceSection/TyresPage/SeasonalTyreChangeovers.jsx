import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function SeasonalTyreChangeovers() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: "ease-in-out", // Easing function for smooth animation
      once: true, // Ensures animation triggers only once
    });
  }, []);

  return (
    <section className="py-20 bg-[#0d1525]">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <h2
          className="text-4xl font-bold text-center text-white mb-12"
          data-aos="fade-up"
        >
          Seasonal Tyre Changeovers
        </h2>

        {/* Content Card */}
        <div
          className="bg-[#111b2d] rounded-lg p-8 max-w-5xl mx-auto hover:bg-[#162236] hover:z-30 transition-all duration-300 active:bg-[#162236] active:shadow-lg hover:scale-105 active:scale-100"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-gray-300 mb-6">
            If you drive in areas with changing climates, seasonal tyre changeovers can
            enhance grip, safety, and performance. We offer quick swaps and storage options
            for your summer and winter sets.
          </p>

          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✓</span>
              Summer-to-winter and winter-to-summer changeovers
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✓</span>
              Inspection of tyre condition before re-installation
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✓</span>
              Optional storage for off-season tyres
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
