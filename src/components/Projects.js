import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'VISWAM.AI (Hybrid)',
      category: 'AI Chat Assistant',
      description: 'AI-based chat assistant built with Python and REST APIs, featuring context-aware responses using LangChain and modular architecture for efficient request handling.',
      tech: ['Python', 'LangChain', 'REST APIs'],
      metrics: { type: 'Hybrid', period: '2024–Present' },
      color: '#ff6b35',
      features: [
        'Developed an AI-based chat assistant using Python and REST APIs',
        'Implemented context-aware responses using LangChain',
        'Designed modular architecture for efficient request handling'
      ]
    },
    {
      id: 2,
      title: 'Document Processing System (RAG)',
      category: 'AI / NLP',
      description: 'Document processing pipeline with retrieval-based techniques, semantic search for efficient data retrieval, and integrated databases for storage and fast querying.',
      tech: ['Python', 'LangChain', 'Semantic Search'],
      metrics: { type: 'RAG Pipeline', search: 'Semantic' },
      color: '#ff8c42',
      features: [
        'Built a document processing pipeline with retrieval-based techniques',
        'Implemented semantic search for efficient data retrieval',
        'Integrated databases for storage and fast querying'
      ]
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      description: 'Complete brand identity package including logo design, color palette, typography, and brand guidelines created using Adobe Photoshop for a modern visual identity.',
      tech: ['Adobe Photoshop', 'Typography', 'Color Theory', 'Brand Design'],
      metrics: { tool: 'Photoshop', type: 'Branding' },
      color: '#a55eea',
      features: [
        'Designed logo concepts and final logo in Adobe Photoshop',
        'Developed consistent color palette and typography system',
        'Created brand guidelines document for visual consistency',
        'Produced social media templates and marketing assets',
        'Applied color theory and visual hierarchy principles'
      ]
    },
    {
      id: 4,
      title: 'Video Production & Editing',
      category: 'Video Editing',
      description: 'Professional video editing and post-production work using DaVinci Resolve, including color grading, motion graphics, transitions, and audio mixing for promotional content.',
      tech: ['DaVinci Resolve', 'Color Grading', 'Motion Graphics', 'Audio Mixing'],
      metrics: { tool: 'DaVinci', type: 'Post-Production' },
      color: '#48dbfb',
      features: [
        'Edited promotional and social media videos using DaVinci Resolve',
        'Applied professional color grading for cinematic look',
        'Created motion graphics and animated text overlays',
        'Mixed and synced audio tracks for clean sound output',
        'Exported optimized formats for various platforms'
      ]
    }
  ];

  return (
    <motion.div 
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2 
        className="projects-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            onClick={() => setSelectedProject(project)}
            style={{ '--accent-color': project.color }}
          >
            <div className="project-header">
              <span className="project-category">{project.category}</span>
              <div className="project-icon" style={{ background: project.color }}>◆</div>
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            <div className="project-metrics">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="metric">
                  <span className="metric-label">{key}</span>
                  <span className="metric-value">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{ '--accent-color': selectedProject.color }}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
              <h2>{selectedProject.title}</h2>
              <p className="modal-category">{selectedProject.category}</p>
              <p className="modal-description">{selectedProject.description}</p>
              <div className="modal-details">
                {selectedProject.features && (
                  <>
                    <h4>Key Features:</h4>
                    <ul className="modal-features">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}
                <h4>Technologies Used:</h4>
                <div className="modal-tech">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <h4>Performance Metrics:</h4>
                <div className="modal-metrics">
                  {Object.entries(selectedProject.metrics).map(([key, value]) => (
                    <div key={key} className="metric-item">
                      <strong>{key}:</strong> {value}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
