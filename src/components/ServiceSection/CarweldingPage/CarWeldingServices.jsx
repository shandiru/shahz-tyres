import React, { useEffect } from "react";
import { FaTools, FaShieldAlt, FaFire, FaCarCrash, FaCarBattery, FaClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function CarWeldingServices() {
  const services = [
    {
      icon: <FaTools className="w-6 h-6 text-white" />,
      title: "Exhaust Welding",
      desc: "Professional exhaust system welding and repairs to restore performance and reduce emissions.",
      items: ["Exhaust pipe repairs", "Silencer welding", "Catalytic converter fitting"],
    },
    {
      icon: <FaShieldAlt className="w-6 h-6 text-white" />,
      title: "Chassis Welding",
      desc: "Structural welding for chassis repairs and MOT failure rectification to ensure vehicle safety.",
      items: ["Chassis repairs", "Sill welding", "MOT failure repairs"],
    },
    {
      icon: <FaFire className="w-6 h-6 text-white" />,
      title: "Body Welding",
      desc: "Professional bodywork welding for accident repairs and rust damage restoration.",
      items: ["Panel repairs", "Rust damage repair", "Accident damage welding"],
    },
    {
      icon: <FaCarBattery className="w-6 h-6 text-white" />,
      title: "Suspension Welding",
      desc: "Expert welding for suspension components and mounting points to ensure safe handling.",
      items: ["Spring mounting repairs", "Shock absorber mounts", "Anti-roll bar repairs"],
    },
    {
      icon: <FaCarCrash className="w-6 h-6 text-white" />,
      title: "Brake Welding",
      desc: "Critical brake system welding to maintain your vehicle's stopping power and safety.",
      items: ["Brake line repairs", "Caliper mounting", "Brake component fabrication"],
    },
    {
      icon: <FaClock className="w-6 h-6 text-white" />,
      title: "Emergency Welding",
      desc: "Fast emergency welding services to get you back on the road when unexpected failures occur.",
      items: ["Same-day service", "Temporary repairs", "Quick turnaround"],
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
    <section className="py-5 bg-[#0d1525]">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2
          className="text-4xl font-bold text-center text-white mb-16"
          data-aos="fade-up"
        >
          Car Welding Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111b2d] rounded-lg p-6 shadow-md hover:bg-[#162236] hover:z-30 transition-all duration-300 active:bg-[#162236] active:shadow-lg hover:scale-105 active:scale-100"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Staggered animations with delay based on index
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
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
