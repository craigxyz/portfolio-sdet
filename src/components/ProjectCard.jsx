import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp, Zap } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="glass rounded-xl overflow-hidden relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Project Image/Preview */}
      <div className="relative h-48 bg-gradient-to-br from-neon-blue to-neon-purple overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center">
            <project.icon className="w-16 h-16 mx-auto mb-2 text-white" />
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>
        
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-neon-cyan to-neon-pink opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="px-2 py-1 bg-neon-blue bg-opacity-20 text-neon-blue text-xs rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: techIndex * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass rounded-lg hover:bg-neon-blue hover:bg-opacity-20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 text-gray-300 hover:text-neon-blue" />
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass rounded-lg hover:bg-neon-purple hover:bg-opacity-20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5 text-gray-300 hover:text-neon-purple" />
            </motion.a>
          </div>

          <motion.button
            onClick={handleExpand}
            className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-neon-cyan hover:bg-opacity-20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm text-gray-300 hover:text-neon-cyan">
              {isExpanded ? 'Less' : 'More'}
            </span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </motion.button>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-lg font-semibold mb-3 text-white">Project Details</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.details}</p>
                
                <div className="mb-4">
                  <h5 className="font-semibold mb-2 text-white">Key Features:</h5>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-2 text-white">Challenges & Solutions:</h5>
                  <p className="text-gray-300 leading-relaxed">{project.challenges}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Explosion Effect */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-full h-full bg-gradient-radial from-neon-blue via-neon-purple to-transparent opacity-30" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
