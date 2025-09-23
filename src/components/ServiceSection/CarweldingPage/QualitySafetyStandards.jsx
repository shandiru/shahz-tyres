import React, { useEffect } from "react";
import { FaWrench, FaShieldAlt, FaCheckCircle, FaFire } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function QualitySafetyStandards() {
  const features = [
    {
      icon: <FaWrench className="w-6 h-6 text-white" />,
      title: "Certified Welders",
      desc: "Qualified professionals with years of automotive welding experience",
    },
    {
      icon: <FaShieldAlt className="w-6 h-6 text-white" />,
      title: "Quality Materials",
      desc: "High-grade welding materials and consumables for lasting repairs",
    },
    {
      icon: <FaCheckCircle className="w-6 h-6 text-white" />,
      title: "Safety First",
      desc: "All work meets or exceeds automotive safety regulations",
    },
    {
      icon: <FaFire className="w-6 h-6 text-white" />,
      title: "Thorough Testing",
      desc: "All welds tested and inspected before job completion",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      easing: "ease-in-out", // Easing function for smooth animation
      once: true, // Animation happens only once when the element comes into view
    });
  }, []);

  return (
    <section className="py-20 bg-[#0d1525]">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2
          className="text-4xl font-bold text-center text-white mb-16"
          data-aos="fade-up"
        >
          Quality &amp; Safety Standards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#111b2d] rounded-lg p-6 shadow-md hover:bg-[#2357b1] hover:z-30 transition-all duration-300 active:bg-[#162236] active:shadow-lg hover:scale-105 active:scale-100"
              data-aos="fade-up"
              data-aos-delay={index * 200} // Staggered animations with delay based on index
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 ">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm max-w-xs mx-auto">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
