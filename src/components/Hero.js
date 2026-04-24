import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = ({ setActiveSection }) => {
  const [text, setText] = useState('');
  const fullText = 'J Jagannath Preetham';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hero-content">
        <motion.div
          className="hero-profile-section"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
        >
          <div className="profile-image-wrapper">
            <div className="profile-gradient-ring"></div>
            <img 
              src="/photo.jpeg" 
              alt="J Jagannath Preetham" 
              className="profile-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="profile-placeholder">JP</div>
          </div>
        </motion.div>

        <motion.div
          className="glitch-wrapper"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="hero-title glitch" data-text={text}>
            {text}<span className="cursor-blink">_</span>
          </h1>
        </motion.div>
        
        <motion.p
          className="hero-subtitle"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          IT Undergraduate | AI & Automation Enthusiast
        </motion.p>

        <motion.div
          className="hero-stats"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="stat-card">
            <div className="stat-value">8.0</div>
            <div className="stat-label">CGPA</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">AI</div>
            <div className="stat-label">Automation</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">RAG</div>
            <div className="stat-label">LangChain</div>
          </div>
        </motion.div>

        <motion.div
          className="hero-cta"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <button className="cta-button primary" onClick={() => setActiveSection('projects')}>
            <span>View Projects</span>
            <span className="arrow">→</span>
          </button>
          <a 
            href="/resume/preetham.pdf" 
            download="J_Jagannath_Preetham_Resume.pdf"
            className="cta-button secondary"
            style={{ textDecoration: 'none' }}
          >
            <span>📄 Download Resume</span>
          </a>
          <button className="cta-button secondary" onClick={() => setActiveSection('contact')}>
            <span>Get In Touch</span>
            <span className="arrow">→</span>
          </button>
        </motion.div>
      </div>

      <div className="floating-elements">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-shape"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Hero;
