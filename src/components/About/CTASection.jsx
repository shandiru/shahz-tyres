import React, { useEffect } from "react";
import { FaCalendarCheck, FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function CTASection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Animation happens only once when the element enters the viewport
    });
  }, []);

  return (
    <section className="py-20 bg-[#111b2d] px-6 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-4xl font-bold mb-6 text-white"
          data-aos="fade-up"
        >
          Experience the Shahz tyres Difference
        </h2>

        {/* Description */}
        <p
          className="text-lg text-gray-300 mb-10 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Join thousands of satisfied customers who trust Shahz tyres with their
          automotive needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Book Service Today Button */}
          <a
            href="/contact" // Change to your booking page or section (e.g. "#booking-form")
            className="flex items-center gap-2 justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-md transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FaCalendarCheck className="w-5 h-5" />
            Book Service Today
          </a>

          {/* Contact Us Button */}
          <a
            href="tel:+447462163163" // Use the contact number or contact page link
            className="flex items-center gap-2 justify-center border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg rounded-md transition-colors duration-300 bg-transparent"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <FaPhoneAlt className="w-5 h-5" />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
