import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Animation will only happen once when scrolling
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const first = data.get("firstName");
    const last = data.get("lastName");
    const email = data.get("email");
    const phone = data.get("phone");
    const service = data.get("service");
    const msg = data.get("message");

    // Phone number validation regex (for UK numbers)
    const phoneRegex = /^(?:\+44|0)[1-9]\d{8,9}$/;

    // Validate phone number
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number in the format (+44) or (0) followed by 9 digits.");
      return; // Stop form submission if phone number is invalid
    }

    // Format message for WhatsApp
    const waMsg = `Hi Shahz tyres,%0A%0AName: ${first} ${last}%0AEmail: ${email}%0APhone: ${phone}%0AService Required: ${service}%0A%0AMessage: ${msg}`;

    // Open WhatsApp with the prefilled message
    window.open(`https://wa.me/447462163163?text=${waMsg}`, "_blank");

    // Set form submission status
    setFormSubmitted(true);

    // Reset the form
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-[#0d1525] text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#111b2d] to-[#0d1525] px-6 lg:px-16" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex mt-5 items-center border border-blue-500 text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full mb-6">
            <FaPhoneAlt className="w-4 h-4 mr-2" />
            Get In Touch
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-blue-400">Contact</span> Us
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to book a service or have questions about your vehicle? We're here to help.
            Contact Shahz tyres today for expert automotive advice and service.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="200">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Visit Our Garage</h3>
                  <a
                    href="https://maps.app.goo.gl/EABgPeZiNTGn9vq26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-blue-500 gap-2 text-sm transition"
                  >
                    8 Kent St, Leicester LE5 3BD, UK
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="400">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FaPhoneAlt className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-400">
                    <a href="tel:+44 7462 163163" className="hover:text-blue-400">+44 7462 163163</a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="600">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FaClock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Opening Hours</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 5:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency */}
            <div className="mt-10 p-6 bg-red-900/20 border border-red-800/50 rounded-lg" data-aos="fade-up" data-aos-delay="800">
              <h3 className="text-xl font-semibold mb-2 text-red-400">Emergency Breakdown?</h3>
              <p className="text-gray-300 mb-2">
                For emergency breakdown assistance, call our 24/7 emergency line:
              </p>
              <p className="text-xl font-bold text-red-400">
                <a href="tel:+44 7462 163163" className="hover:text-red-300">+44 7462 163163</a>
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div data-aos="fade-left">
            <div className="bg-[#111b2d] rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">First Name <span className="text-red-500">*</span></label>
                    <input name="firstName" required placeholder="Your first name"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Last Name <span className="text-red-500">*</span></label>
                    <input name="lastName" required placeholder="Your last name"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" name="email" required placeholder="your.email@example.com"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white" />
                </div>

                <div>
                  <label className="block text-sm mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <input type="tel" name="phone" required placeholder="Your phone number"
                    pattern="^(+44|0)[1-9]\d{8,9}$"
                    title="Phone number must be in the format (+44) or (0) followed by 9 digits"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white" />
                </div>

                <div>
                  <label className="block text-sm mb-2">Service Required <span className="text-red-500">*</span></label>
                  <select name="service" required
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white">
                    <option value="">Select a service</option>
                    <option value="tyres">Tyres</option>
                    <option value="car-welding">Car Welding</option>
                    <option value="home-welding">Home Welding</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2">Message <span className="text-red-500">*</span></label>
                  <textarea name="message" rows={5} required
                    placeholder="Tell us about your requirements..."
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white" />
                </div>

                <button type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md flex items-center justify-center gap-2">
                  <FaWhatsapp className="w-5 h-5" />
                  Send via WhatsApp
                </button>
              </form>
              {formSubmitted && (
                <p className="mt-4 text-green-400">Your message has been sent successfully!</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#111b2d] px-6 lg:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">
            Find Us
          </h2>
          <div className="bg-[#0d1525] rounded-lg p-8" data-aos="fade-up" data-aos-delay="200">
            <div className="w-full h-90 bg-slate-700 rounded-xl flex items-center justify-center mb-6" data-aos="zoom-in">
              {/* Map iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151.32508713430255!2d-1.1203427167237288!3d52.63827439798777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487761bba958b969%3A0xda3d132e8624eb3a!2sShahz%20Tyres%20%26%20wheel%20welding%20repair!5e0!3m2!1sen!2slk!4v1760074485845!5m2!1sen!2slk"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shahz Tyres Location"
                className="w-full h-full rounded-xl"
              ></iframe>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div data-aos="fade-up" data-aos-delay="400">
                <h3 className="font-semibold mb-1">Easy Parking</h3>
                <p className="text-gray-400 text-sm">Free customer parking available on-site at Shahz Tyres Leicester, making it simple to drop in for tyres, welding or repairs.</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <h3 className="font-semibold mb-1">Public Transport</h3>
                <p className="text-gray-400 text-sm">Conveniently connected – a bus stop just 2 minutes’ walk from our Leicester garage, so getting new tyres or welding work done is hassle-free.</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="800">
                <h3 className="font-semibold mb-1">Central Location</h3>
                <p className="text-gray-400 text-sm">Located close to Leicester city centre, Shahz Tyres is your local go-to for affordable tyres and professional welding services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
