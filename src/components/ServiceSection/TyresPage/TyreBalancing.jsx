import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function TyreBalancing() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether the animation should only happen once
    });
  }, []);

  return (
    <section className="py-20 bg-[#0d1525]">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <h2
          className="text-4xl font-bold text-center text-white mb-16"
          data-aos="fade-up"
        >
          Tyre Balancing
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div
            className="bg-[#111b2d] rounded-lg p-8 hover:bg-[#162236] hover:z-30 transition-all duration-300 active:bg-[#162236] active:shadow-lg hover:scale-105 active:scale-100"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <p className="text-gray-300 mb-6">
              Imbalanced tyres can cause steering vibrations, uneven wear, and reduce
              overall ride comfort. Our computerised tyre balancing ensures smooth
              rotation and improved driving dynamics.
            </p>

            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                Precision digital balancing machines
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                Static and dynamic balancing methods
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                Weights adjusted for optimal performance
              </li>
            </ul>
          </div>

          {/* Right Card */}
          <div
            className="bg-[#111b2d] rounded-lg p-8 hover:bg-[#162236] hover:z-30 transition-all duration-300 active:bg-[#162236] active:shadow-lg hover:scale-105 active:scale-100"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Signs You Need Balancing
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                Steering wheel vibration at certain speeds
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                Uneven tread wear patterns
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                Increased fuel consumption
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
