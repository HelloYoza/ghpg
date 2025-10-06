"use client";

import { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';

export default function About() {
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  const elementsRef = useRef<{[key: string]: HTMLDivElement | null}>({});
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    years: 0,
    satisfaction: 0
  });

  // Stats animation effect
  useEffect(() => {
    if (isVisible['stats-section']) {
      const animateNumber = (target: number, key: keyof typeof animatedStats, duration: number = 2000) => {
        const startTime = Date.now();
        const startValue = 0;
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
          
          setAnimatedStats(prev => ({
            ...prev,
            [key]: currentValue
          }));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        requestAnimationFrame(animate);
      };
      
      // Animate each stat with slight delays
      setTimeout(() => animateNumber(500, 'projects'), 100);
      setTimeout(() => animateNumber(15, 'years'), 300);
      setTimeout(() => animateNumber(98, 'satisfaction'), 500);
    }
  }, [isVisible['stats-section']]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    Object.values(elementsRef.current).forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      Object.values(elementsRef.current).forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const setElementRef = (id: string) => (element: HTMLDivElement | null) => {
    elementsRef.current[id] = element;
  };
  return (
    <div className="relative">
      <Header />

      {/* Grey Background Section */}
      <section className="w-full h-[250px] bg-gray-400 flex items-center justify-center relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-30">
          {/* Diagonal Lines Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 8px,
              rgba(255,255,255,0.3) 8px,
              rgba(255,255,255,0.3) 16px
            )`
          }}></div>
          
          {/* Dots Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 1.5px, transparent 1.5px)`,
            backgroundSize: '25px 25px'
          }}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-black text-white relative z-10" style={{fontFamily: 'Poppins, sans-serif'}}>
          About Us
        </h2>
      </section>

      {/* Text and Image Section - Image on Right */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Section - Left Side */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>Our Story</h3>
              <p className="text-gray-700 leading-relaxed mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-gray-700 leading-relaxed" style={{fontFamily: 'Poppins, sans-serif'}}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
            
            {/* Image Section - Right Side */}
            <div className="w-full lg:w-1/2">
              <div className="w-full h-[400px] bg-gray-300">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8" style={{fontFamily: 'Poppins, sans-serif'}}>Our Mission</h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg" style={{fontFamily: 'Poppins, sans-serif'}}>
              We are committed to delivering exceptional results through innovative solutions and dedicated service. Our team combines years of experience with cutting-edge technology to provide the best possible outcomes for our clients.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg" style={{fontFamily: 'Poppins, sans-serif'}}>
              Our mission is to build lasting relationships with our clients by understanding their unique needs and delivering tailored solutions that exceed their expectations. We believe in transparency, integrity, and continuous improvement in everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Grey Background */}
      <section 
        ref={setElementRef('stats-section')}
        id="stats-section"
        className="w-full bg-gray-200 py-16"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="py-8">
              <h4 className="text-7xl font-bold text-black mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>
                {animatedStats.projects}+
              </h4>
              <p className="text-2xl text-black font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>Projects Completed</p>
            </div>
            <div className="py-8">
              <h4 className="text-7xl font-bold text-black mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>
                {animatedStats.years}+
              </h4>
              <p className="text-2xl text-black font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>Years Experience</p>
            </div>
            <div className="py-8">
              <h4 className="text-7xl font-bold text-black mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>
                {animatedStats.satisfaction}%
              </h4>
              <p className="text-2xl text-black font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-black border-t-2 border-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-extrabold text-white mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>My App</h3>
              <p className="text-white text-lg leading-relaxed mb-6 max-w-md" style={{fontFamily: 'Poppins, sans-serif'}}>
                Building the future with modern web technologies. Experience the power of Next.js, TypeScript, and Tailwind CSS.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-white hover:text-gray-300 transition-colors duration-300" style={{fontFamily: 'Poppins, sans-serif'}}>Home</a></li>
                <li><a href="/about" className="text-white hover:text-gray-300 transition-colors duration-300" style={{fontFamily: 'Poppins, sans-serif'}}>About</a></li>
                <li><a href="/services" className="text-white hover:text-gray-300 transition-colors duration-300" style={{fontFamily: 'Poppins, sans-serif'}}>Services</a></li>
                <li><a href="/portfolio" className="text-white hover:text-gray-300 transition-colors duration-300" style={{fontFamily: 'Poppins, sans-serif'}}>Portfolio</a></li>
                <li><a href="/chatbot" className="text-white hover:text-gray-300 transition-colors duration-300" style={{fontFamily: 'Poppins, sans-serif'}}>Chatbot</a></li>
                <li><a href="/contact" className="text-white hover:text-gray-300 transition-colors duration-300" style={{fontFamily: 'Poppins, sans-serif'}}>Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Contact</h4>
              <ul className="space-y-3">
                <li className="text-white" style={{fontFamily: 'Poppins, sans-serif'}}>hello@myapp.com</li>
                <li className="text-white" style={{fontFamily: 'Poppins, sans-serif'}}>+1 (555) 123-4567</li>
                <li className="text-white" style={{fontFamily: 'Poppins, sans-serif'}}>123 Business St<br />City, State 12345</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white text-sm mb-4 md:mb-0" style={{fontFamily: 'Poppins, sans-serif'}}>
                &copy; 2024 My App. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
