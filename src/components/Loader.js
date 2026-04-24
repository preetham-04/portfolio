import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');
  const fullText = 'J JAGANNATH PREETHAM';

  useEffect(() => {
    // Progress bar animation
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Typing animation
    let index = 0;
    const typingTimer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingTimer);
      }
    }, 80);

    return () => {
      clearInterval(progressTimer);
      clearInterval(typingTimer);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="loader-container"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loader-content">
          <motion.div
            className="loader-logo"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <div className="logo-circle">
              <span className="logo-text">JP</span>
            </div>
          </motion.div>

          <motion.h1
            className="loader-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {text}<span className="cursor-blink">_</span>
          </motion.h1>

          <motion.p
            className="loader-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Developer
          </motion.p>

          <motion.div
            className="loader-progress-container"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '300px', opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="loader-progress-bar">
              <motion.div
                className="loader-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="loader-percentage">{progress}%</div>
          </motion.div>
        </div>

        <div className="loader-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 0 
              }}
              animate={{
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              style={{
                left: `${50 + Math.random() * 20 - 10}%`,
                top: `${50 + Math.random() * 20 - 10}%`,
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
