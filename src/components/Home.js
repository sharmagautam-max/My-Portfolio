import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  // const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">

      {/* 🎥 Background Video with Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2019/03/29/22449-327996264_tiny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text visibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
      </div>

      {/* 🧾 Main Content */}
      <div className="text-center px-4 z-10">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Hello, I'm Gautam Sharma.
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl font-medium mb-6 drop-shadow-lg"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Full Stack Web Developer
        </motion.p>

        <div className="flex justify-center space-x-4">
          {/* <button
            onClick={() => setShowContact(true)}
            className="px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Contact Me
          </button> */}
          <button
            onClick={() => setShowResume(true)}
            className="px-6 py-2 bg-gray-800 rounded-full hover:bg-gray-900 transition duration-300"
          >
            View Resume
          </button>
        </div>
      </div>

      {/* 📨 Contact Modal */}
       <AnimatePresence>
        {/* {showContact && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black rounded-lg p-6 w-full max-w-md relative"
              initial={{ scale: 0.8, y: -50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowContact(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
              >
                &times;
              </button>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
                <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
                <textarea placeholder="Your Message" className="w-full p-2 border rounded" rows={4} />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}  */}

        {/* 📄 Resume Modal */}
        {showResume && (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-white text-black rounded-lg p-4 w-full max-w-3xl relative"
      initial={{ scale: 0.8, y: -50 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.8, y: -50 }}
      transition={{ duration: 0.3 }}
    >
      {/* ❌ Close Button */}
      <button
        onClick={() => setShowResume(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
      >
        &times;
      </button>

      <h3 className="text-2xl font-semibold mb-4 text-center">My Resume</h3>

      {/* 📄 PDF Preview */}
      <div className="w-full h-[500px] mb-4">
        <iframe
          src="/Resume.pdf"
          className="w-full h-full rounded-md border"
          title="Resume PDF"
        />
      </div>

      {/* 📥 Download Button */}
      <div className="text-center">
        <a
          href="/Resume.pdf"
          download="Gautam_Sharma_Resume.pdf"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        >
          Download Resume
        </a>
      </div>
    </motion.div>
  </motion.div>
)}
      </AnimatePresence>
    </section>
  );
};

export default Home;
