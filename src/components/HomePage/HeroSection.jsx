import React, { useEffect } from "react";
import { FaCar, FaShieldAlt, FaClock, FaWrench } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { GiTyre } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css"; // Don't forget to import the AOS CSS file

export default function HeroSection() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // If true, animation will only happen once when scrolling
    });
  }, []);

  return (
    <div className="bg-slate-900">
      <section className="relative min-h-screen flex items-center px-6 lg:px-16 pt-24 sm:pt-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10" />

        <div className="relative z-20 w-full mt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8" data-aos="fade-right">
              <div className="inline-flex items-center border border-blue-500 text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full text-sm">
                <GiTyre className="w-4 h-4 mr-2" />
                Shahz Tyres
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight text-white" data-aos="fade-up">
                  Leicester’s Trusted Tyre & Welding Specialists
                  Shahz Tyres
                </h1>

                <p className="text-xl text-gray-300 max-w-lg" data-aos="fade-up" data-aos-delay="200">
                  At Shahz Tyres, we provide top-quality tyres and professional welding services. With a commitment to precision and customer care, we make sure your vehicle is safe, reliable, and road-ready.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 text-sm">
                <div className="flex items-center space-x-2" data-aos="fade-up" data-aos-delay="300">
                  <FaShieldAlt className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Wide Range of Tyres for All Vehicles</span>
                </div>
                <div className="flex items-center space-x-2" data-aos="fade-up" data-aos-delay="400">
                  <FaClock className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Professional Welding Services</span>
                </div>
                <div className="flex items-center space-x-2" data-aos="fade-up" data-aos-delay="500">
                  <FaWrench className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Fast, Reliable Turnaround</span>
                </div>
                <div className="flex items-center space-x-2" data-aos="fade-up" data-aos-delay="600">
                  <FaCar className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Competitive Local Pricing</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative" data-aos="fade-left">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/side.png"
                  alt="Tyres storage and technician"
                  className="w-full h-100 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-2" data-aos="fade-up" data-aos-delay="700">
            <span className="text-blue-400 text-sm">Discover More</span>
            <FiChevronDown className="w-6 h-6 text-blue-400 animate-bounce" />
          </div>
        </div>
      </section>
    </div>
  );
}
