import React from 'react';
import { motion } from 'framer-motion';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className="toggle-icon"
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
