import React from "react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Precision & Expertise",
      desc: "Our certified technicians have decades of combined experience in MIG, TIG, and Arc welding for all vehicle types.",
    },
    {
      title: "Affordable Pricing",
      desc: "We offer competitive rates without compromising on quality. Clear quotes and no hidden fees.",
    },
    {
      title: "Quick Turnaround",
      desc: "We understand time is critical—most jobs completed within the same day or 24 hours.",
    },
    {
      title: "Custom Fabrication",
      desc: "Need something unique? We handle one-off custom welds for classic cars, performance builds, and restorations.",
    },
    {
      title: "Mobile Welding",
      desc: "Can't come to us? We offer mobile welding for breakdowns, emergency repairs, and off-site fabrication.",
    },
    {
      title: "Warranty Included",
      desc: "All welding work is backed by a satisfaction guarantee and workmanship warranty.",
    },
  ];

  return (
    <section className="py-20 bg-[#0d1525]">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Why Choose Our Welding Services?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#0a3a86] rounded-lg p-6 shadow-md hover:shadow-lg hover:bg-[#2357b1] hover:z-30 transition-all duration-300 active:bg-[#162236] active:shadow-lg hover:scale-105 active:scale-100"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
