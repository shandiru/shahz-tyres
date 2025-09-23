import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ServiceAreas() {
 const areas = [
  {
    title: "Service Areas",
    desc: "We provide mobile welding services throughout Leicester and surrounding areas.",
  },
  {
    title: "Leicester City",
    desc: "Full coverage within Leicester city limits.",
  },
  {
    title: "Surrounding Areas",
    desc: "We cover locations within 15 miles of Leicester city centre, including: Oadby, Wigston, Blaby, Enderby, Narborough, Braunstone, Thurmaston, Syston.",
  },
  {
    title: "Nearby Towns",
    desc: "We also serve wider Leicestershire areas such as: Loughborough, Hinckley, Market Harborough, Melton Mowbray, Coalville.",
  },
  {
    title: "Extended Coverage",
    desc: "Special arrangements available for jobs further afield across the Midlands.",
  },
];



  return (
    <section className="py-20 bg-[#0d1525]">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          Service Areas
        </h2>

        <p className="text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          We provide mobile welding services throughout Derby and surrounding areas
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {areas.map((area, i) => (
            <div
              key={i}
              className="bg-[#0a3a86] rounded-lg p-6 text-center shadow-md hover:shadow-lg hover:bg-[#162236] hover:z-30 transition-all duration-300 active:bg-[#162236] active:shadow-lg hover:scale-105 active:scale-100"
            >
              <FaMapMarkerAlt className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{area.title}</h3>
              <p className="text-gray-400 text-sm">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
