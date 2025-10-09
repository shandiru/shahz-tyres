import React, { useEffect } from "react";
import { FaHome, FaMapMarkerAlt, FaFire, FaClock } from "react-icons/fa";
import { GiAnvil } from "react-icons/gi";
import { MdBuild } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function MobileWeldingServices() {
  const services = [
    {
      icon: <FaHome className="w-6 h-6 text-white" />,
      title: "At Your Home",
      desc: "Professional welding services at your home for gates, railings, and general repairs.",
      items: ["Garden gates & railings", "Security grilles", "General metal repairs"],
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-white" />,
      title: "On-Site Vehicle Repairs",
      desc: "Emergency vehicle welding repairs at your location when you can't get to our garage.",
      items: ["Exhaust repairs", "Chassis emergency repairs", "Roadside assistance"],
    },
    {
      icon: <FaFire className="w-6 h-6 text-white" />,
      title: "Commercial Services",
      desc: "Mobile welding for businesses, workshops, and commercial properties.",
      items: ["Industrial repairs", "Equipment fabrication", "Structural repairs"],
    },
    {
      icon: <FaClock className="w-6 h-6 text-white" />,
      title: "Emergency Call-Out",
      desc: "24/7 emergency mobile welding service for urgent repairs that can't wait.",
      items: ["24/7 availability", "Fast response time", "Emergency repairs"],
    },
    {
      icon: <GiAnvil className="w-6 h-6 text-white" />,
      title: "Custom Fabrication",
      desc: "Bespoke welding and fabrication work created at your location to your specifications.",
      items: ["Custom metalwork", "Bespoke solutions", "On-site installation"],
    },
    {
      icon: <MdBuild className="w-6 h-6 text-white" />,
      title: "Maintenance Contracts",
      desc: "Regular mobile welding maintenance for businesses and property managers.",
      items: ["Scheduled maintenance", "Priority service", "Competitive rates"],
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
    <section className="py-8 bg-[#0d1525]">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2
          className="text-4xl font-bold text-center text-white mb-16"
          data-aos="fade-up"
        >
          Mobile Welding Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111b2d] rounded-lg p-6 shadow-md hover:shadow-lg hover:bg-[#162236] hover:z-30 transition-all duration-300 active:bg-[#162236] active:shadow-lg hover:scale-105 active:scale-100"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Staggered animations with delay based on index
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm">{service.desc}</p>
              <ul className="space-y-1 text-gray-300 text-sm">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
