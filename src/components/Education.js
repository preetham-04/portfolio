import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Vignan Institute of Technology and Science',
      period: '2023 - 2026',
      cgpa: '8.0',
      icon: '🎓',
      color: '#7877c6'
    },
    {
      degree: 'Diploma in Electrical and Electronics Engineering',
      institution: 'Government Polytechnic College, Nizamabad',
      period: '2020 - 2023',
      cgpa: '8.0',
      icon: '📚',
      color: '#48dbfb'
    }
  ];

  const certifications = [
    { name: 'AI Applications with Python and Flask', provider: 'IBM', icon: '🤖', link: null },
    { name: 'Introduction to REST APIs', provider: 'Coursera', icon: '🌐', link: null },
    { name: 'Git & GitHub Fundamentals', provider: 'Coursera', icon: '🐙', link: null },
    { name: 'Introduction to Data Science', provider: 'Infosys', icon: '📊', link: null }
  ];

  const membership = {
    title: 'IT Undergraduate',
    organization: 'Vignan Institute of Technology and Science',
    icon: '🏛️'
  };

  return (
    <motion.div 
      className="education-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2 
        className="education-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Education & Certifications
      </motion.h2>

      <div className="education-content">
        <div className="education-section">
          <h3 className="section-heading">Academic Background</h3>
          <div className="education-cards">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-card"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ '--accent-color': edu.color }}
              >
                <div className="edu-icon">{edu.icon}</div>
                <div className="edu-content">
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <p className="edu-institution">{edu.institution}</p>
                  <div className="edu-footer">
                    <span className="edu-period">{edu.period}</span>
                    <span className="edu-cgpa">CGPA: {edu.cgpa}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="certifications-section">
          <h3 className="section-heading">Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => {
              const CertWrapper = cert.link ? motion.a : motion.div;
              const certProps = cert.link ? {
                href: cert.link,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "cert-card cert-card-link"
              } : {
                className: "cert-card"
              };
              
              return (
                <CertWrapper
                  key={index}
                  {...certProps}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="cert-icon">{cert.icon}</span>
                  <div className="cert-info">
                    <h5 className="cert-name">{cert.name}</h5>
                    <p className="cert-provider">{cert.provider}</p>
                  </div>
                  {cert.link && <span className="cert-link-indicator">🔗</span>}
                </CertWrapper>
              );
            })}
          </div>
        </div>

        <motion.div
          className="membership-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="membership-card">
            <span className="membership-icon">{membership.icon}</span>
            <div className="membership-info">
              <h4>{membership.title}</h4>
              <p>{membership.organization}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
