import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #00f5ff 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, #bf00ff 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #00ffff 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-5"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            background: `linear-gradient(45deg, ${
              ['#00f5ff', '#bf00ff', '#00ffff', '#ff00ff'][i % 4]
            }, transparent)`,
            borderRadius: Math.random() > 0.5 ? '50%' : '20%',
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
