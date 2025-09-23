import React from "react";
import { FaShieldAlt, FaUsers, FaAward, FaClock } from "react-icons/fa";

export default function OurValuesSection() {
  // Array of values
  const values = [
    {
      icon: <FaShieldAlt className="w-8 h-8 text-white" />,
      title: "Quality First",
      description:
        "We never compromise on the quality of our work or the parts we use",
    },
    {
      icon: <FaUsers className="w-8 h-8 text-white" />,
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority, and we go above and beyond to achieve it",
    },
    {
      icon: <FaAward className="w-8 h-8 text-white" />,
      title: "Expertise",
      description:
        "Continuous training ensures our team stays current with automotive technology",
    },
    {
      icon: <FaClock className="w-8 h-8 text-white" />,
      title: "Reliability",
      description:
        "Dependable service you can count on, delivered when promised",
    },
  ];

  return (
    <section className="py-20 bg-[#111b2d] px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Our Values
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((value, index) => (
            <div key={index} className="bg-[#172642] rounded-lg p-6 text-center shadow-xl hover:shadow-lg hover:bg-[#162236] hover:z-30 transition-all duration-300 active:bg-[#162236] active:shadow-lg hover:scale-105 active:scale-100">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {value.title}
              </h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
