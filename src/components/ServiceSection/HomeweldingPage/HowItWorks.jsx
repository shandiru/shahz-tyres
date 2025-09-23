import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function HowItWorks() {
  const steps = [
    {
      title: "1. Request a Visit",
      desc: "Contact us via phone, WhatsApp, or online form. Describe the issue or upload images for a quick estimate.",
    },
    {
      title: "2. Get a Quote",
      desc: "We send you a detailed quote. For urgent jobs, we can provide pricing on-site before we begin.",
    },
    {
      title: "3. On-Site Welding",
      desc: "We arrive at the scheduled time with our mobile rig and complete the work at your location.",
    },
    {
      title: "4. Clean-Up & Inspection",
      desc: "After welding, we inspect the work for quality and safety, and clean the work area before leaving.",
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
          className="text-4xl font-bold text-center text-white mb-12"
          data-aos="fade-up"
        >
          How Our Mobile Welding Service Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-[#0a3a86] rounded-lg p-6 shadow-md hover:shadow-lg hover:bg-[#2357b1] hover:z-30 transition-all duration-300 active:bg-[#162236] active:shadow-lg hover:scale-105 active:scale-100"
              data-aos="fade-up"
              data-aos-delay={i * 200} // Staggered animations with delay based on index
            >
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
