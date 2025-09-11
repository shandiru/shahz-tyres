import React from "react";
import { FaCar, FaShieldAlt, FaClock, FaWrench } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function HeroSection() {
  return (
    <div className="bg-slate-900">
      <section className="relative min-h-screen flex items-center px-6 lg:px-16 pt-24 sm:pt-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10" />

        <div className="relative z-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center border border-blue-500 text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full text-sm">
                <FaCar className="w-4 h-4 mr-2" />
                Derby's Premier Auto Experts
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Precision
                  <br />
                  <span className="text-blue-400">Motor Engineering</span>
                </h1>

                <p className="text-xl text-gray-300 max-w-lg">
                  At Shahz tyres, we combine advanced technology with expert
                  craftsmanship to deliver exceptional automotive services
                  tailored to your needs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <FaShieldAlt className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Quality Guaranteed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaClock className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Fast Turnaround</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaWrench className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Expert Technicians</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCar className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Competitive Pricing</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/pexels-photo-3807167.jpeg"
                  alt="Tyres storage and technician"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-6 right-6">
                  <span className="bg-blue-600 text-white text-lg px-4 py-2 rounded-full">
                    40+ Years Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-blue-400 text-sm">Discover More</span>
            <FiChevronDown className="w-6 h-6 text-blue-400 animate-bounce" />
          </div>
        </div>
      </section>
    </div>
  );
}
