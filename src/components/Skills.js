import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: '💻',
      color: '#ff6b35',
      skills: ['Python', 'Java (Basic)', 'SQL']
    },
    {
      title: 'Web & APIs',
      icon: '🌐',
      color: '#ff8c42',
      skills: ['REST APIs', 'JSON', 'API Integration']
    },
    {
      title: 'AI / ML',
      icon: '🧠',
      color: '#ffa552',
      skills: ['Basics of Machine Learning', 'LangChain', 'Prompt Engineering']
    },
    {
      title: 'Databases',
      icon: '🗄️',
      color: '#ff6b35',
      skills: ['MySQL', 'NoSQL (Basics)']
    },
    {
      title: 'Tools',
      icon: '🛠️',
      color: '#ff8c42',
      skills: ['Git', 'GitHub', 'Postman', 'Excel']
    },
    {
      title: 'Concepts',
      icon: '🎯',
      color: '#ffa552',
      skills: ['Data Structures', 'OOP', 'Problem Solving']
    },
    {
      title: 'Graphic Design',
      icon: '🎨',
      color: '#ff6b35',
      skills: ['Adobe Photoshop', 'DaVinci Resolve', 'Video Editing', 'Photo Editing']
    }
  ];

  return (
    <motion.div 
      className="skills-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="skills-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="skills-title">Technical Expertise</h2>
        <p className="skills-subtitle">A comprehensive overview of my technical skills and proficiencies</p>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: catIndex * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="skill-card-header" style={{ borderColor: category.color }}>
              <div className="skill-icon-wrapper" style={{ background: category.color }}>
                <span className="skill-icon">{category.icon}</span>
              </div>
              <h3 className="skill-category-title">{category.title}</h3>
            </div>
            
            <div className="skill-tags">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: category.color, color: '#ffffff' }}
                  style={{ borderColor: category.color }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="skills-footer"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="skills-stats">
          <div className="stat-item">
            <span className="stat-number">7</span>
            <span className="stat-label">Categories</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">19+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">8.0</span>
            <span className="stat-label">CGPA</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
