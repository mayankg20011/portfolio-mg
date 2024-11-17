import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

function Experience() {
  return (
    <motion.div
      className="experience"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      <h2>Work Experience</h2>
      <motion.div className="experience-item" variants={itemVariants}>
        <h3><FaBriefcase /> Piramal Finance - Senior Frontend Engineer</h3>
        <p>November 2022 - Current</p>
        <ul>
          <li>Spearheaded the frontend development of an internal loan disbursement tool, handling personal, home, business, and used car loans</li>
          <li>Implemented a scalable architecture using backend-driven frontend and Micro-Frontends</li>
          <li>Led the Storybook project, creating a library of reusable components used across all company frontend applications</li>
          <li>Established best practices by configuring eslint, prettier, husky, testing frameworks, SonarQube, and CI/CD pipelines</li>
          <li>Tech stack: JavaScript, TypeScript, ReactJS, NextJS, Storybook, Tailwind, Rollup</li>
        </ul>
      </motion.div>
      <motion.div className="experience-item" variants={itemVariants}>
        <h3><FaBriefcase /> WinZO Games - Senior Software Engineer</h3>
        <p>September 2021 - November 2022</p>
        <ul>
          <li>Successfully migrated the entire website from ReactJS to NextJS, resulting in a 90% improvement in web vitals score</li>
          <li>Implemented advanced frontend techniques including lazy-loading, code-splitting, and A/B Testing</li>
          <li>Enhanced website security and integrated new designs</li>
          <li>Managed Google Tag Manager, Google Analytics, and AWS CDN-related tasks</li>
          <li>Tech stack: JavaScript, TypeScript, ReactJS, NextJS, Tailwind, Redux, Bootstrap, Webpack, SCSS, SEO, GTM</li>
        </ul>
      </motion.div>
      <motion.div className="experience-item" variants={itemVariants}>
        <h3><FaBriefcase /> Cognam Technologies Pvt. Ltd - Associate Team Lead</h3>
        <p>June 2018 - September 2021</p>
        <ul>
          <li>Led the refactoring of the entire codebase from class-based to functional components in ReactJS</li>
          <li>Designed and implemented a Suspicious Activity Reporting application using React and Redux</li>
          <li>Managed a team of 4 developers, overseeing task distribution and feature implementation</li>
          <li>Improved code maintainability and leveraged modern React hooks for enhanced performance</li>
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default Experience;