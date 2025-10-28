import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Zap, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-300 via-dark-200 to-dark-100 opacity-50" />
      
      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-10 text-neon-blue opacity-30"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Code size={60} />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-20 text-neon-purple opacity-25"
        animate={{ rotate: -360, scale: [1, 0.8, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <Zap size={80} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-20 text-neon-cyan opacity-20"
        animate={{ rotate: 180, scale: [1, 1.5, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={70} />
      </motion.div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        {/* Main Title */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent">
            Creative
          </span>
          <br />
          <span className="text-white">Developer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Blah blah blah blah blah blah
        </motion.p>

        {/* Animated Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          {['React', 'JavaScript', 'Three.js', 'Framer Motion', 'Node.js'].map((tag, index) => (
            <motion.span
              key={tag}
              className="px-4 py-2 glass rounded-full text-sm font-medium text-neon-cyan"
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 0 20px currentColor",
                transition: { duration: 0.2 }
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.8 + index * 0.1,
                ease: "backOut"
              }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToAbout}
          className="group relative px-8 py-4 glass rounded-full text-lg font-semibold text-white hover:text-neon-blue transition-all duration-300 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Explore My Work
            <ChevronDown className="group-hover:translate-y-1 transition-transform duration-300" />
          </span>
          
          {/* Button glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            animate={{ 
              background: [
                "linear-gradient(90deg, #00f5ff, #bf00ff)",
                "linear-gradient(90deg, #bf00ff, #00ffff)",
                "linear-gradient(90deg, #00ffff, #00f5ff)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="text-neon-blue opacity-60" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
