import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingCart, Cloud, CheckSquare, Sparkles } from 'lucide-react';
import ProjectCard from './ProjectCard';
import LaserEffect from './effects/LaserEffect';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack shopping application with real-time inventory management and secure payment processing.',
      icon: ShoppingCart,
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      details: 'A comprehensive e-commerce solution built from scratch, featuring user authentication, product catalog, shopping cart, and integrated payment processing. The platform handles real-time inventory updates and provides a seamless shopping experience.',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart with persistent state',
        'Secure payment processing with Stripe',
        'Admin dashboard for inventory management',
        'Real-time notifications and updates'
      ],
      challenges: 'The biggest challenge was implementing real-time inventory updates across multiple users. I solved this by using WebSocket connections and implementing optimistic UI updates with rollback mechanisms for failed transactions.'
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Interactive weather visualization with animated charts and location-based forecasts.',
      icon: Cloud,
      techStack: ['React', 'D3.js', 'OpenWeather API', 'Chart.js', 'Geolocation'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      details: 'An immersive weather dashboard that combines data visualization with beautiful animations. Features interactive charts, location-based forecasts, and real-time weather updates with stunning visual effects.',
      features: [
        'Interactive weather charts and graphs',
        'Location-based weather detection',
        '7-day forecast with hourly breakdowns',
        'Animated weather icons and backgrounds',
        'Weather alerts and notifications',
        'Responsive design for all devices'
      ],
      challenges: 'Creating smooth animations for weather transitions while maintaining performance was challenging. I implemented a custom animation system using Framer Motion and optimized chart rendering with D3.js for better performance.'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Productivity tool with drag-and-drop functionality and team collaboration features.',
      icon: CheckSquare,
      techStack: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL', 'DnD Kit'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      details: 'A collaborative task management application designed for teams. Features include drag-and-drop task organization, real-time collaboration, project tracking, and comprehensive reporting tools.',
      features: [
        'Drag-and-drop task organization',
        'Real-time team collaboration',
        'Project and milestone tracking',
        'Time tracking and reporting',
        'File attachments and comments',
        'Customizable project templates'
      ],
      challenges: 'Implementing smooth drag-and-drop functionality across different browsers while maintaining real-time sync was complex. I used React DnD Kit for the drag-and-drop interface and Socket.io for real-time collaboration, with conflict resolution algorithms.'
    },
    {
      id: 4,
      title: 'This Portfolio Website',
      description: 'Interactive portfolio showcasing creative development skills with dynamic animations and effects.',
      icon: Sparkles,
      techStack: ['React', 'Framer Motion', 'Three.js', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com',
      demo: 'https://portfolio.com',
      details: 'A creative portfolio website that demonstrates advanced frontend skills through interactive animations, particle effects, and smooth transitions. Built to showcase both technical abilities and design sensibility.',
      features: [
        'Interactive particle system',
        'Smooth scroll animations',
        'Dynamic background effects',
        'Responsive design',
        'Glass morphism UI',
        'Performance optimized'
      ],
      challenges: 'Balancing visual effects with performance was the main challenge. I implemented lazy loading for animations, optimized particle counts based on device capabilities, and used CSS transforms for smooth 60fps animations.'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      {/* Laser Effect */}
      <LaserEffect isVisible={inView} delay={0.5} />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my passion for creating innovative and visually stunning applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <p className="text-lg text-gray-300 mb-6">
            Interested in collaborating or have a project in mind?
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 glass rounded-full text-lg font-semibold text-white hover:text-neon-blue transition-all duration-300 group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Let's Connect</span>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
