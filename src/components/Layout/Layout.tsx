import React from 'react';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Dynamic animated gradient based on scroll and mouse position
  const getAnimatedGradientStyle = () => {
    const scrollPercent = Math.min(scrollY / 3000, 1);
    const mouseXPercent = mouseX / window.innerWidth;
    const mouseYPercent = mouseY / window.innerHeight;
    
    // Attractive color scheme: Purple, Pink, Blue, Teal
    const hue1 = 280 + (scrollPercent * 30) + (mouseXPercent * 40); // Purple to Magenta
    const hue2 = 200 + (scrollPercent * 25) + (mouseYPercent * 35); // Blue variations
    const hue3 = 320 + (scrollPercent * 20) + (mouseXPercent * 30); // Pink variations
    const hue4 = 180 + (scrollPercent * 15) + (mouseYPercent * 25); // Teal variations
    
    return {
      background: `
        radial-gradient(circle at ${20 + mouseXPercent * 60}% ${20 + mouseYPercent * 60}%, 
          hsla(${hue1}, 85%, 70%, 0.4) 0%, 
          transparent 50%),
        radial-gradient(circle at ${80 - mouseXPercent * 60}% ${80 - mouseYPercent * 60}%, 
          hsla(${hue2}, 80%, 65%, 0.3) 0%, 
          transparent 50%),
        radial-gradient(circle at ${mouseXPercent * 100}% ${mouseYPercent * 100}%, 
          hsla(${hue3}, 90%, 75%, 0.2) 0%, 
          transparent 40%),
        linear-gradient(135deg, 
          hsla(${hue1}, 70%, 85%, 0.8) 0%, 
          hsla(${hue2}, 65%, 80%, 0.6) 25%,
          hsla(${hue3}, 75%, 85%, 0.7) 50%,
          hsla(${hue4}, 70%, 80%, 0.5) 75%,
          hsla(${hue1 + 40}, 80%, 85%, 0.6) 100%)
      `,
      transition: 'background 0.5s ease-out'
    };
  };

  return (
    <div 
      className="min-h-screen relative"
      style={getAnimatedGradientStyle()}
    >
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              background: `radial-gradient(circle, ${
                i % 4 === 0 ? 'hsla(280, 80%, 60%, 0.6)' : 
                i % 4 === 1 ? 'hsla(200, 75%, 65%, 0.5)' : 
                i % 4 === 2 ? 'hsla(320, 85%, 70%, 0.4)' :
                'hsla(180, 70%, 65%, 0.5)'
              } 0%, transparent 70%)`,
              left: `${10 + (i * 15) + (Math.sin(scrollY * 0.002 + i) * 10)}%`,
              top: `${10 + (i * 12) + (Math.cos(scrollY * 0.002 + i) * 8)}%`,
              transform: `
                translateY(${scrollY * (0.1 + i * 0.05)}px) 
                rotate(${scrollY * 0.1 + mouseX * 0.02}deg)
                scale(${1 + Math.sin(scrollY * 0.003 + i) * 0.2})
              `,
              transition: 'transform 0.2s ease-out'
            }}
          />
        ))}
      </div>
      
      <Header />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;