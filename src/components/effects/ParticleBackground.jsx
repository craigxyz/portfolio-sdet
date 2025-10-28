import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Create particles
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.1,
        color: ['#00f5ff', '#bf00ff', '#00ffff', '#ff00ff'][Math.floor(Math.random() * 4)],
        delay: Math.random() * 8,
      });
    }
    setParticles(newParticles);

    // Mouse tracking
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-60"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          animate={{
            x: [
              particle.x,
              particle.x + (mousePosition.x - particle.x) * 0.1,
              particle.x,
            ],
            y: [
              particle.y,
              particle.y + (mousePosition.y - particle.y) * 0.1,
              particle.y,
            ],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
