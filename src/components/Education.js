import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function Education() {
  return (
    <motion.div
      className="education"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      <h2>Education</h2>
      <motion.div className="education-item" variants={itemVariants}>
        <h3><FaGraduationCap /> Indian Institute of Technology Patna</h3>
        <p>Bachelor of Technology, Computer Science and Engineering (CSE)</p>
        <p>2014 - 2018</p>
        <p>CGPA: 8/10</p>
        <ul>
          <li>Specialized in Machine Learning and Artificial Intelligence</li>
          <li>Participated in ACM ICPC coding competitions</li>
          <li>Member of the Robotics Club</li>
        </ul>
      </motion.div>
      <motion.div className="education-item" variants={itemVariants}>
        <h3><FaSchool /> WoodRow Senior Secondary School, Bareilly</h3>
        <p>Higher Secondary Education, CBSE</p>
        <p>2012 - 2014</p>
        <p>Percentage Score: 92%</p>
        <ul>
          <li>School topper in Mathematics and English</li>
          <li>Participated in various inter-school coding competitions</li>
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default Education;