import React from 'react';
import { motion } from 'framer-motion';
import PIC1 from "../assets/pic.png.jpg";

const AboutMe = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-white via-blue-50 to-blue-100 py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Illustration or Avatar (optional) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={PIC1}
            alt="Developer Illustration"
            className="w-72 md:w-80"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl font-extrabold mb-6 text-blue-700">
            About <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="text-2xl font-semibold text-gray-900">I'm Sharma Gautam and I'm a</span><br /><br />
            Hi there! 👋 I'm a <span className="font-semibold text-blue-600">passionate and dedicated developer</span> with
            expertise in crafting web solutions using modern technologies. From building personal blogs to dynamic e-commerce platforms,
            I love turning ideas into beautiful, functional experiences.
            <br /><br />
            I write clean, efficient code and focus on <span className="text-blue-600 font-medium">user-friendly design</span> that
            delivers smooth interactions. My journey is fueled by curiosity and a drive to stay updated with the
            <span className="italic"> latest tech trends.</span>
            <br /><br />
            Currently learning <span className="font-bold text-green-600">MongoDB, Node.js, and Express.js</span> to become
            a strong full-stack developer.
            <br /><br />
            With a problem-solving mindset and love for detail, I’m here to build impactful digital experiences.
            Let’s collaborate and bring ideas to life! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
