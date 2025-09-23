import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function OurStorySection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Only animate once when the element comes into view
    });
  }, []);

  return (
    <section className="py-20 bg-[#0d1525] px-6 lg:px-16 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
          Our Story
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT TEXT */}
          <div data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Decades of Experience
            </h3>
            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p>
                Shahz Tyres started as a small family-run garage with one goal – to take
                care of people and their vehicles with honesty and skill. Over the years,
                we’ve grown into one of Leicester’s most trusted service centres, proudly
                helping thousands of drivers across Leicestershire stay safe on the road.
              </p>
              <p>
                We’ve invested in modern equipment, kept up with the latest vehicle
                technologies, and added more services – including professional welding – 
                while never losing sight of what matters most: caring for our customers
                like family.
              </p>
              <p>
                Today, we continue to combine hands-on experience with genuine customer
                care, making sure every job is done to the highest standard. Whether it’s
                tyres, repairs, or welding work, you can count on Shahz Tyres to go the
                extra mile.
              </p>
            </div>
          </div>

          {/* RIGHT LIST */}
          <div
            className="bg-[#111b2d] rounded-lg p-8 space-y-4 mt-20 hover:bg-[#162236] hover:z-30 transition-all duration-300 active:bg-[#162236] active:shadow-lg hover:scale-105 active:scale-100"
            data-aos="fade-left" data-aos-delay="400"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              Why People Choose Us
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Decades of trusted service in Leicester</li>
              <li>Friendly, family-run team who care about customers</li>
              <li>Helping people across Leicestershire every day</li>
              <li>Expert welding and repairs alongside tyre services</li>
              <li>Fair pricing & quality workmanship guaranteed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
