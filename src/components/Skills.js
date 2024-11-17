import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaDatabase, FaCloud } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: ["JavaScript", "TypeScript", "C/C++", "Java", "Python"]
    },
    {
      title: "Frontend Technologies",
      icon: <FaTools />,
      skills: ["React.js", "Next.js", "Redux", "HTML5", "CSS3", "Sass", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend & Databases",
      icon: <FaDatabase />,
      skills: ["Node.js", "Express.js", "MongoDB", "SQL", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Tools & Platforms",
      icon: <FaCloud />,
      skills: ["Git", "Webpack", "Babel", "Jest", "Enzyme", "Docker", "AWS", "CI/CD", "Agile/Scrum"]
    }
  ];

  return (
    <motion.div
      className="skills"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      <h2>Skills</h2>
      {skillCategories.map((category, index) => (
        <motion.div key={index} className="skill-category" variants={itemVariants}>
          <h3>{category.icon} {category.title}</h3>
          <ul className="skill-list">
            {category.skills.map((skill, skillIndex) => (
              <motion.li key={skillIndex} variants={itemVariants}>
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Skills;