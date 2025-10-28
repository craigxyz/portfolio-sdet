import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:your.email@example.com',
      color: 'text-neon-blue',
      hoverColor: 'hover:text-neon-blue',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/yourprofile',
      color: 'text-neon-purple',
      hoverColor: 'hover:text-neon-purple',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/yourusername',
      color: 'text-neon-cyan',
      hoverColor: 'hover:text-neon-cyan',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/yourusername',
      color: 'text-neon-pink',
      hoverColor: 'hover:text-neon-pink',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">Let's Connect</h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm always excited to work on new projects and collaborate with fellow developers. 
              Whether you have a project in mind or just want to chat about technology, 
              I'd love to hear from you!
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 glass rounded-lg group transition-all duration-300 ${social.hoverColor}`}
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <social.icon className={`w-6 h-6 ${social.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue transition-all duration-300"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-purple transition-all duration-300"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 glass rounded-lg text-white font-semibold flex items-center justify-center gap-2 group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  
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
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <p className="text-gray-400">
            © 2024 Student Developer. Built with React, Framer Motion, and lots of ☕
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
