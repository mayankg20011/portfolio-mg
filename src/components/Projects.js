import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaCode } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

function Projects() {
  return (
    <motion.div
      className="projects"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      <h2>Projects</h2>
      <motion.div className="project-item" variants={itemVariants}>
        <h3><FaRobot /> Robotics Surveillance System on Critical Surface using Stereo Vision</h3>
        <p>IIT Patna Final Year Project, Under Dr. Raju Halder</p>
        <ul>
          <li>Developed an advanced stereo vision model for bots navigating uneven terrains</li>
          <li>Implemented sophisticated Camera Calibration techniques using Matlab and OpenCV</li>
          <li>Integrated IMU (Inertial Measurement Unit) using Arduino board for enhanced spatial awareness</li>
          <li>Created depth maps of surroundings to enable real-time obstacle detection and avoidance</li>
          <li>Utilized computer vision algorithms to process and analyze stereo image pairs</li>
          <li>Implemented SLAM (Simultaneous Localization and Mapping) for improved navigation capabilities</li>
        </ul>
      </motion.div>
      <motion.div className="project-item" variants={itemVariants}>
        <h3><FaCode /> Storybook implementation</h3>
        <p>Reusable Responsive component library <a target="_blank" style={{color: "blue", textDecoration: 'none'}} href='https://advanced-storybook.vercel.app/?path=%2Fdocs%2Fintroduction-getting-started--docs'>{'(Link)'}</a></p>
        <ul>
          <li>Implemented storybook to develop and test components in isolation, improving code quality and reducing bugs.</li>
          <li>Created interactive documentation for each component, making it easier for team members to understand and use the library</li>
          <li>Integrated accessibility addons to ensure WCAG compliance for all components.</li>
          <li>Implemented visual regression testing using Storybook's addon ecosystem, ensuring consistent design across updates.</li>
          <li>Implemented code-splitting and lazy-loading techniques to improve overall application performance.</li>
        </ul>
      </motion.div>
      <motion.div className="project-item" variants={itemVariants}>
        <h3><FaCode /> Personal Portfolio Website</h3>
        <p>React-based Responsive Portfolio</p>
        <ul>
          <li>Designed and developed a modern, responsive portfolio website using React and Framer Motion</li>
          <li>Implemented smooth page transitions and engaging animations to enhance user experience</li>
          <li>Utilized React Router for seamless navigation between different sections</li>
          <li>Integrated responsive design principles to ensure compatibility across various devices and screen sizes</li>
          <li>Showcased projects, skills, and professional experience in an interactive and visually appealing manner</li>
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default Projects;