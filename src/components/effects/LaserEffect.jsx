import React from 'react';
import { motion } from 'framer-motion';

const LaserEffect = ({ isVisible, delay = 0 }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 pointer-events-none z-50"
      style={{
        background: 'linear-gradient(90deg, transparent, #00f5ff, #bf00ff, #00ffff, transparent)',
        boxShadow: '0 0 20px #00f5ff, 0 0 40px #bf00ff',
      }}
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ 
        x: '100vw', 
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 2,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

export default LaserEffect;
