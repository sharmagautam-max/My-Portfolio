import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';

const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 py-20 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-5xl font-bold text-gray-800 mb-4">My <span className="text-indigo-600">Resume</span></h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Here's my resume showcasing my skills, education, and experience. Feel free to view or download it!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/70 backdrop-blur-lg border border-gray-200 shadow-xl p-8 rounded-2xl text-center"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Download or View Resume</h3>
        <div className="flex gap-6 justify-center">
          <a
            href="/Resume.pdf"
            download
            className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition"
          >
            <FaDownload /> Download
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-black transition"
          >
            <FaEye /> View Online
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
