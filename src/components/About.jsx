import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Code2, Palette, Zap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { name: 'Frontend', icon: Code2, color: 'text-neon-blue' },
    { name: 'Design', icon: Palette, color: 'text-neon-purple' },
    { name: 'Animation', icon: Zap, color: 'text-neon-cyan' },
    { name: 'Backend', icon: Code2, color: 'text-neon-pink' },
  ];

  const technologies = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Three.js',
    'Framer Motion', 'Tailwind CSS', 'Git', 'MongoDB', 'Express', 'Next.js'
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I craft digital experiences that blend creativity with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Profile Image Placeholder */}
            <motion.div
              className="w-64 h-64 mx-auto md:mx-0 mb-8 glass rounded-full relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                <User size={120} className="text-white opacity-80" />
              </div>
              
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent"
                style={{
                  background: 'linear-gradient(45deg, #00f5ff, #bf00ff, #00ffff, #ff00ff)',
                  backgroundClip: 'border-box',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            <h3 className="text-3xl font-bold mb-4 text-white">Student Developer</h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate student developer who loves creating interactive and visually stunning web applications. 
              My journey in programming has led me to explore the intersection of technology and creativity, 
              always seeking to push the boundaries of what's possible in web development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me experimenting with new frameworks, 
              contributing to open-source projects, or exploring the latest in web technologies.
            </p>
          </motion.div>

          {/* Right Column - Skills & Tech */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {/* Skills */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold mb-6 text-white">Core Skills</h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="glass rounded-lg p-4 text-center"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)",
                      transition: { duration: 0.2 }
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <skill.icon className={`w-8 h-8 mx-auto mb-2 ${skill.color}`} />
                    <span className="text-white font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-2xl font-bold mb-6 text-white">Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 glass rounded-full text-sm font-medium text-neon-cyan hover:text-white transition-colors cursor-default"
                    whileHover={{ 
                      scale: 1.1, 
                      boxShadow: "0 0 15px currentColor",
                      transition: { duration: 0.2 }
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.8 + index * 0.05,
                      ease: "backOut"
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
