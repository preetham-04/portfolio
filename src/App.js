import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import './theme.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import Loader from './components/Loader';
import NeuralNetwork from './components/NeuralNetwork';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="app">
      <NeuralNetwork />
      <div 
        className="cursor-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <AnimatePresence mode="wait">
        {activeSection === 'home' && <Hero key="hero" setActiveSection={setActiveSection} />}
        {activeSection === 'projects' && <Projects key="projects" />}
        {activeSection === 'skills' && <Skills key="skills" />}
        {activeSection === 'experience' && <Experience key="experience" />}
        {activeSection === 'education' && <Education key="education" />}
        {activeSection === 'timeline' && <Timeline key="timeline" />}
        {activeSection === 'contact' && <Contact key="contact" />}
      </AnimatePresence>
    </div>
  );
}

export default App;
