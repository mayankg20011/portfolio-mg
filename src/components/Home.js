import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Mayank Goyal</h1>
      <h2>Senior Frontend Engineer</h2>
      <p>Indian Institute of Technology Patna • Computer Science and Engineering</p>
      <p>Computer Science B.Tech Graduate from IIT-Patna having more than 6 years of experience working on Frontend related technologies in fast paced growing startups. Passionate about creating responsive, user-friendly web applications with cutting-edge technologies</p>
      <p>Embarked on a dynamic career in software development, initially focusing on Application Security. Transitioned to Frontend Development, specializing in Mobile Applications for a year, honing skills in responsive design and cross-platform compatibility.</p>
      <p>Advanced to a Senior Frontend Developer role for Web Applications at Cognam Technologies, where I was promoted to Associate Team Lead. In this capacity, I led a team of developers, oversaw project architectures, and drove the adoption of modern frontend practices.</p>
      <p>Further progressed to a Senior Software Engineer (Frontend) position at WinZO, where I spearheaded critical initiatives including a full-scale migration from ReactJS to NextJS, resulting in significant performance improvements and enhanced SEO capabilities.</p>
      <p>Currently serving as a Senior Frontend Developer at Piramal Finance, where I lead the loan disbursement team and champion the Storybook project. In this role, I'm driving the implementation of scalable frontend architectures, including backend-driven frontend and micro-frontends, while also establishing best practices for component development and reusability across the organization.</p>

      <motion.div
        className="contact-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p><FaEnvelope /> mayankg20011@gmail.com</p>
        <p>📞 (+91) 9006696823</p>
      </motion.div>
      <motion.div
        className="social-links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <a href="https://github.com/mayankg20011" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
        <a href="https://linkedin.com/in/mayankiitp" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
      </motion.div>
    </motion.div>
  );
}

export default Home;