import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleBackground from './components/effects/ParticleBackground';
import AnimatedBackground from './components/effects/AnimatedBackground';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <ParticleBackground />
      <AnimatedBackground />
      
      {/* Main Content */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;