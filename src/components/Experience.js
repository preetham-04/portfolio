import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const workExperience = [
    {
      title: 'AI Automation Intern',
      company: 'Professional Internship',
      period: '2024',
      icon: '🤖',
      color: '#ff6b35',
      responsibilities: [
        'Developed and integrated APIs to build scalable backend workflows.',
        'Designed automation pipelines using Python and event-driven triggers.',
        'Built AI-based solutions using LangChain and OpenAI APIs.',
        'Improved system reliability by debugging API and workflow issues.',
        'Collaborated with teams to design and implement efficient solutions.'
      ]
    }
  ];

  const achievements = [
    {
      title: 'API Integration',
      description: 'Built scalable backend workflows with REST APIs and Python automation',
      icon: '🔗',
      color: '#ff6b35',
      stats: { label: 'Stack', value: 'Python + APIs' }
    },
    {
      title: 'AI Solutions',
      description: 'Developed AI-based solutions using LangChain and OpenAI APIs',
      icon: '🧠',
      color: '#ff8c42',
      stats: { label: 'Tools', value: 'LangChain' }
    },
    {
      title: 'Academic Excellence',
      description: 'Maintained strong CGPA throughout academic career',
      icon: '🎯',
      color: '#ffa552',
      stats: { label: 'CGPA', value: '8.0/10' }
    }
  ];

  const problemSolvingStats = [
    { label: 'Automation Pipelines', value: 'Python', icon: '⚙️' },
    { label: 'AI Framework', value: 'LangChain', icon: '🔗' },
    { label: 'API Type', value: 'REST APIs', icon: '🌐' },
    { label: 'Focus Area', value: 'AI + Backend', icon: '⚡' }
  ];

  return (
    <motion.div 
      className="experience-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2 
        className="experience-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Experience & Achievements
      </motion.h2>

      <div className="experience-content">
        <div className="work-experience-section">
          <h3 className="section-heading">Professional Experience</h3>
          <div className="work-experience-list">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                className="work-card"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                whileHover={{ x: 10, scale: 1.02 }}
                style={{ '--accent-color': job.color }}
              >
                <div className="work-card-header">
                  <div className="work-icon-wrapper" style={{ background: job.color }}>
                    <span className="work-icon">{job.icon}</span>
                  </div>
                  <div className="work-info">
                    <h4 className="work-title">{job.title}</h4>
                    <p className="work-company">{job.company}</p>
                    <span className="work-period">{job.period}</span>
                  </div>
                </div>
                <ul className="work-responsibilities">
                  {job.responsibilities.map((resp, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                    >
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="achievements-section">
          <h3 className="section-heading">Key Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ '--accent-color': achievement.color }}
              >
                <div className="achievement-icon-wrapper">
                  <span className="achievement-icon">{achievement.icon}</span>
                </div>
                <h4 className="achievement-title">{achievement.title}</h4>
                <p className="achievement-description">{achievement.description}</p>
                <div className="achievement-stat">
                  <span className="stat-label">{achievement.stats.label}</span>
                  <span className="stat-value">{achievement.stats.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="problem-solving-section">
          <h3 className="section-heading">Problem Solving Excellence</h3>
          <motion.div
            className="leetcode-showcase"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
          >
            <div className="leetcode-header">
              <div className="leetcode-logo">
                <span className="logo-icon">💡</span>
                <h4>Internship Highlights</h4>
              </div>
              <div className="leetcode-badge">AI Automation</div>
            </div>
            
            <div className="stats-grid">
              {problemSolvingStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-box"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="stat-icon">{stat.icon}</span>
                  <div className="stat-content">
                    <div className="stat-value-large">{stat.value}</div>
                    <div className="stat-label-small">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="topics-covered">
              <h5>Key Skills Used</h5>
              <div className="topics-tags">
                {['Python', 'LangChain', 'REST APIs', 'OpenAI APIs', 'Automation', 'Debugging'].map((topic, i) => (
                  <motion.span
                    key={i}
                    className="topic-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + i * 0.1 }}
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
