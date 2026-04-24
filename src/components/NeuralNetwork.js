import React, { useEffect, useRef } from 'react';
import './NeuralNetwork.css';

const NeuralNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let nodes = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNetwork();
    };

    const initNetwork = () => {
      nodes = [];
      
      const nodeCount = Math.floor((canvas.width * canvas.height) / 15000);
      
      // Create nodes
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1
        });
      }
    };

    const drawNode = (node) => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 107, 53, 0.6)';
      ctx.fill();
      
      // Glow effect
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(255, 107, 53, 0.8)';
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const drawConnection = (node1, node2, distance, maxDistance) => {
      const opacity = 1 - (distance / maxDistance);
      ctx.beginPath();
      ctx.moveTo(node1.x, node1.y);
      ctx.lineTo(node2.x, node2.y);
      ctx.strokeStyle = `rgba(255, 107, 53, ${opacity * 0.3})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const updateNodes = () => {
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updateNodes();
      
      const maxDistance = 150;
      
      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            drawConnection(nodes[i], nodes[j], distance, maxDistance);
          }
        }
      }
      
      // Draw nodes
      nodes.forEach(drawNode);
      
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-network-canvas" />;
};

export default NeuralNetwork;
