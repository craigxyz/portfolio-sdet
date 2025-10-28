# Creative Portfolio Website

A stunning, interactive portfolio website built with React and modern web technologies. Features dynamic animations, particle effects, and smooth transitions to showcase creative development skills.

## 🚀 Features

- **Interactive Animations**: Smooth scroll-triggered animations using Framer Motion
- **Particle System**: Dynamic particle background that responds to mouse movement
- **Glass Morphism UI**: Modern glass-effect components with backdrop blur
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Navigation**: Single-page application with smooth scrolling between sections
- **Project Showcase**: Expandable project cards with detailed information
- **Visual Effects**: Laser beams, explosions, and dynamic backgrounds

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Framer Motion** - Animation library for smooth transitions
- **Tailwind CSS** - Utility-first CSS framework
- **Three.js/React Three Fiber** - 3D graphics and effects
- **React Intersection Observer** - Scroll-triggered animations
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navigation with smooth scroll
│   ├── Hero.jsx            # Landing section with animated intro
│   ├── About.jsx           # About me section with skills
│   ├── Projects.jsx        # Project showcase grid
│   ├── ProjectCard.jsx    # Expandable project cards
│   ├── Contact.jsx         # Contact form and social links
│   └── effects/
│       ├── ParticleBackground.jsx  # Interactive particle system
│       ├── LaserEffect.jsx         # Animated laser beams
│       └── AnimatedBackground.jsx # Dynamic gradient backgrounds
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
└── index.css              # Global styles and animations
```

## 🎨 Design Features

- **Dark Theme**: Sleek dark background with neon accent colors
- **Neon Color Palette**: Cyan, purple, blue, and pink accent colors
- **Glass Morphism**: Translucent components with backdrop blur effects
- **Gradient Backgrounds**: Dynamic animated gradients throughout
- **Custom Animations**: Smooth transitions and hover effects
- **Typography**: Clean, modern Inter font family

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sdet101-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Sections

### Hero Section
- Animated title with gradient text
- Interactive particle background
- Floating geometric shapes
- Call-to-action button with hover effects

### About Section
- Profile information with animated reveals
- Skills showcase with hover effects
- Technology stack tags
- Scroll-triggered animations

### Projects Section
- Grid layout of project cards
- Expandable cards with detailed information
- Explosion animations on card expansion
- Laser beam effects between sections

### Contact Section
- Contact form with glass morphism styling
- Social media links with hover animations
- Responsive design for all devices

## 🎯 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  neon: {
    blue: '#00f5ff',
    purple: '#bf00ff',
    cyan: '#00ffff',
    pink: '#ff00ff',
  }
}
```

### Projects
Add your own projects by editing the `projects` array in `Projects.jsx`:
```javascript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    techStack: ['React', 'Node.js'],
    // ... other properties
  }
];
```

### Contact Information
Update social links and contact details in `Contact.jsx`:
```javascript
const socialLinks = [
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    // ... other properties
  }
];
```

## 🎨 Animation Details

- **Particle System**: 50 interactive particles that follow mouse movement
- **Scroll Animations**: Elements animate in as they enter the viewport
- **Hover Effects**: Scale, glow, and color transitions on interactive elements
- **Laser Effects**: Animated laser beams that sweep across sections
- **Explosion Effects**: Burst animations when project cards expand

## 📈 Performance

- Optimized animations for 60fps performance
- Lazy loading for heavy components
- Efficient particle system with performance controls
- Responsive images and optimized assets

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub Profile](https://github.com/yourusername)

---

Built with ❤️ using React, Framer Motion, and modern web technologies.