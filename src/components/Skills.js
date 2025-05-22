import React from 'react';
import { motion } from 'framer-motion';

const frontendSkills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 70 },
  { name: "Tailwind", level: 70 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 70 },
  { name: "Bootstrap", level: 65 },
];

const backendSkills = [
  { name: "C Programming", level: 50 },
  { name: "MongoDB (Learning)", level: 60 },
  { name: "Express.js (Learning)", level: 50 },
  { name: "Node.js (Learning)", level: 40 },
];

const SkillBar = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="mb-5"
  >
    <div className="flex justify-between text-sm font-medium mb-1">
      <span>{skill.name}</span>
      <span>{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="h-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 py-20 px-6 md:px-20 text-gray-800"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
          My <span className="text-blue-600">Skills</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          <strong>My creative skills & experiences.</strong><br />
          As a passionate developer, I focus on both frontend and backend development. My expertise lies in crafting responsive and interactive web applications, using technologies like <span className="text-blue-600 font-semibold">HTML</span>, <span className="text-blue-600 font-semibold">CSS</span>, and <span className="text-blue-600 font-semibold">JavaScript</span>, alongside powerful frameworks like <span className="text-blue-600 font-semibold">React</span>. <br /><br />
          I'm also expanding my backend skills with tools such as <span className="text-green-600 font-semibold">Node.js</span>, <span className="text-green-600 font-semibold">Express.js</span>, and <span className="text-green-600 font-semibold">MongoDB</span>. I continuously strive to enhance my knowledge and create seamless user experiences.
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-white/30"
        >
          <h3 className="text-2xl font-bold mb-6 text-blue-700 border-b pb-2">Frontend Development</h3>
          {frontendSkills.map((skill, index) => (
            <SkillBar skill={skill} index={index} key={skill.name} />
          ))}
        </motion.div>

        {/* Backend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/60 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-white/30"
        >
          <h3 className="text-2xl font-bold mb-6 text-green-700 border-b pb-2">Backend Development</h3>
          {backendSkills.map((skill, index) => (
            <SkillBar skill={skill} index={index} key={skill.name} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
