import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

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
          Why Choose Our Welding Services?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#0a3a86] rounded-lg p-6 shadow-md hover:shadow-lg hover:bg-[#2357b1] hover:z-30 transition-all duration-300 active:bg-[#162236] active:shadow-lg hover:scale-105 active:scale-100"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Staggered animations with delay based on index
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
