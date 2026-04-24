import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    setTimeout(() => {
      setStatus('');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'jaakarampreetham@gmail.com', link: 'mailto:jaakarampreetham@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/j-jagannath-preetham', link: 'https://www.linkedin.com/in/j-jagannath-preetham-816456290/' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/preetham-04', link: 'https://github.com/preetham-04' },
    { icon: '📱', label: 'Phone', value: '+91 9391277431', link: 'tel:+919391277431' }
  ];

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2 
        className="contact-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-content">
        <motion.div
          className="contact-info-section"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3>Let's Connect</h3>
          <p className="contact-description">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="contact-info-list">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 10, scale: 1.05 }}
              >
                <span className="contact-icon">{info.icon}</span>
                <div className="contact-details">
                  <span className="contact-label">{info.label}</span>
                  <span className="contact-value">{info.value}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="contact-form-section"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message →
            </motion.button>

            {status && (
              <motion.div
                className="status-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {status}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
