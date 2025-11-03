import React, { useEffect } from "react";
import { FaAward } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function AboutSection() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-[#0d1525] text-white pt-10">
      <section className="relative py-20 bg-linear-to-b from-[#111b2d] to-[#0d1525] px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center border border-blue-500 text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full mb-6"
            data-aos="fade-up"
          >
            <FaAward className="w-4 h-4 mr-2" />
            Established 1980
          </div>

          {/* Heading */}
          <h1
            className="text-5xl lg:text-6xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            About <span className="text-blue-400">Shahz tyres</span>
          </h1>

          {/* Description */}
          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            For decades, Shahz Tyres has been Leicester’s go-to team for reliable
            automotive care. Known for being friendly, approachable, and always
            ready to help, we’ve built a reputation across Leicestershire for
            putting customers first.
          </p>
        </div>
      </section>
    </div>
  );
}
