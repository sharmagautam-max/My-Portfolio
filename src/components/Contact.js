import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-br from-gray-100 to-white py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold text-gray-800 mb-2">Contact <span className="text-indigo-600">Me</span></h2>
        <p className="text-lg text-gray-600">Feel free to reach out to me for any inquiries or collaborations.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
          <div className="space-y-4 text-gray-700">
            <div className="mt-6">
              <p><strong>Name:</strong> Sharma Gautam</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-indigo-600" />
              <span>gs3756660@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-indigo-600" />
              <span>6377769563</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-indigo-600" />
              <span>Hisar, Haryana</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Message Me</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Message.."
            rows="5"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-sm text-gray-600">
        Created By <span className="text-indigo-600 font-semibold">Sharma Gautam</span> | 2025 All rights reserved.
      </div>
    </section>
  );
};

export default Contact;
