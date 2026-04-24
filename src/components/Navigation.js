import React from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', icon: '◉', label: 'Home' },
    { id: 'projects', icon: '◈', label: 'Projects' },
    { id: 'skills', icon: '◆', label: 'Skills' },
    { id: 'experience', icon: '🏆', label: 'Experience' },
    { id: 'education', icon: '🎓', label: 'Education' },
    { id: 'timeline', icon: '📍', label: 'Timeline' },
    { id: 'contact', icon: '◎', label: 'Contact' }
  ];

  return (
    <motion.nav 
      className="navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {navItems.map((item, index) => (
        <motion.button
          key={item.id}
          className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
          onClick={() => setActiveSection(item.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.05 }}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </motion.button>
      ))}
    </motion.nav>
  );
};

export default Navigation;
