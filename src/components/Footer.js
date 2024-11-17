import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <p>&copy; 2024 Mayank Goyal. All rights reserved.</p>
    </motion.footer>
  );
}

export default Footer;