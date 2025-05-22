import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Project = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 md:px-20 bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
          My <span className="text-purple-600">Projects</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Here is one of my recent works. I love building real-world apps that solve actual problems and help businesses grow.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white/60 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden p-8 border border-white/30"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Project Image or Preview */}
          <img
            src="https://zerodha.com/static/images/landing.png"
            alt="Stock Management Project"
            className="rounded-xl shadow-lg"
          />

          {/* Project Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Stock Management Project</h3>
            <p className="text-gray-700 mb-4">
              A full-featured stock management system designed to help businesses efficiently manage inventory. Built with modern web technologies, it offers features like product tracking, stock updates, user roles, and reporting.
            </p>
            <div className="flex gap-4">
              <a
                href="https://stocks-management-project.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
              >
                Live Demo <FaExternalLinkAlt />
              </a>
              <a
                href="https://github.com/your-username/Stock-Management-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-black transition"
              >
                GitHub <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
