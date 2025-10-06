"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  const elementsRef = useRef<{[key: string]: HTMLDivElement | null}>({});
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const fullText = "Ghan Property Group";

  // Typing animation effect with variable speeds
  useEffect(() => {
    let currentIndex = 0;
    
    const typeNextCharacter = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        
        // Variable typing speeds based on character type
        const currentChar = fullText[currentIndex - 1];
        let delay = 100; // Default speed
        
        if (currentChar === ' ') {
          delay = 200; // Longer pause for spaces
        } else if (currentChar === 'o' || currentChar === 'e' || currentChar === 'a') {
          delay = 80; // Faster for common vowels
        } else if (currentChar === 'M' || currentChar === 'A') {
          delay = 150; // Slower for capital letters
        } else if (currentChar === 'p') {
          delay = 120; // Medium speed for consonants
        }
        
        setTimeout(typeNextCharacter, delay);
      } else {
        // Typing complete - hide cursor after a delay
        setTimeout(() => {
          setIsTypingComplete(true);
          setShowCursor(false);
        }, 1000);
      }
    };
    
    // Start typing after a brief delay
    setTimeout(typeNextCharacter, 500);
  }, []);

  // Cursor blinking effect (only while typing)
  useEffect(() => {
    if (isTypingComplete) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500); // Blink every 500ms

    return () => clearInterval(cursorInterval);
  }, [isTypingComplete]);


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

    const currentElements = elementsRef.current;
    Object.values(currentElements).forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      Object.values(currentElements).forEach((element) => {
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
      {/* Hero Section - Full width and height */}
              <section className="w-full h-screen relative">
                {/* Video Background */}
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  preload="auto"
                  onError={(e) => console.error('Video failed to load:', e)}
                  onLoadStart={() => console.log('Video started loading')}
                  onCanPlay={() => console.log('Video can play')}
                >
                  <source src="/videos/1006.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Dark overlay - temporarily removed for testing */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}
                
                {/* Header positioned inside hero section */}
                <header className="absolute top-0 left-0 w-full z-30 bg-transparent">
                  <div className="p-6 pl-12">
                    <div className="flex items-center space-x-12">
                      {/* Logo */}
                      <div className="flex items-center">
                        <h1 className="text-3xl font-extrabold text-white tracking-tight" style={{fontFamily: 'Poppins, sans-serif'}}>
                          My App
                        </h1>
                      </div>
                      {/* Navigation Items */}
                      <nav className="flex items-center space-x-12">
                        <Link href="/" className="relative text-white font-extrabold text-base hover:text-gray-200 transition-colors duration-300 group" style={{fontFamily: 'Poppins, sans-serif'}}>
                          Home
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
                        </Link>
                        <a href="/about" className="relative text-white font-extrabold text-base hover:text-gray-200 transition-colors duration-300 group" style={{fontFamily: 'Poppins, sans-serif'}}>
                          About
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        
                        {/* Services Dropdown */}
                        <div className="relative group">
                          <a href="/services" className="flex items-center text-white font-extrabold text-base hover:text-gray-200 transition-colors duration-300" style={{fontFamily: 'Poppins, sans-serif'}}>
                            Services
                            <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </a>
                          
                          {/* Dropdown Menu */}
                          <div className="absolute top-full left-0 pt-2 w-64 bg-transparent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                            <div className="bg-white shadow-lg">
                            <div className="py-2">
                              <a href="/services/project-management" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/item" style={{fontFamily: 'Poppins, sans-serif'}}>
                                Project Management
                                <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/item:w-[calc(100%-2rem)]"></span>
                              </a>
                              <a href="/services/advisory-services" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/item" style={{fontFamily: 'Poppins, sans-serif'}}>
                                Advisory Services
                                <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/item:w-[calc(100%-2rem)]"></span>
                              </a>
                              
                              {/* Sub-menu for Development Management Services */}
                              <div className="relative group/sub">
                                <a href="/services/development-management" className="relative flex items-center px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/item" style={{fontFamily: 'Poppins, sans-serif'}}>
                                  Development Management Services
                                  <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover/sub:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                  <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/item:w-[calc(100%-2rem)]"></span>
                                </a>
                                
                                {/* Sub-dropdown Menu */}
                                <div className="absolute top-0 left-full pl-1 w-64 bg-transparent opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform -translate-x-2 group-hover/sub:translate-x-0">
                                  <div className="bg-white shadow-lg">
                                  <div className="py-2">
                                    <a href="#" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/subitem" style={{fontFamily: 'Poppins, sans-serif'}}>
                                      Site Due Diligence
                                      <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/subitem:w-[calc(100%-2rem)]"></span>
                                    </a>
                                    <a href="#" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/subitem" style={{fontFamily: 'Poppins, sans-serif'}}>
                                      Development Planning & Initiation
                                      <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/subitem:w-[calc(100%-2rem)]"></span>
                                    </a>
                                    <a href="#" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/subitem" style={{fontFamily: 'Poppins, sans-serif'}}>
                                      Town Planning
                                      <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/subitem:w-[calc(100%-2rem)]"></span>
                                    </a>
                                    <a href="#" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/subitem" style={{fontFamily: 'Poppins, sans-serif'}}>
                                      Design Development Phase
                                      <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/subitem:w-[calc(100%-2rem)]"></span>
                                    </a>
                                    <a href="#" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/subitem" style={{fontFamily: 'Poppins, sans-serif'}}>
                                      Construction Phase
                                      <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/subitem:w-[calc(100%-2rem)]"></span>
                                    </a>
                                    <a href="#" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/subitem" style={{fontFamily: 'Poppins, sans-serif'}}>
                                      Financial Management
                                      <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/subitem:w-[calc(100%-2rem)]"></span>
                                    </a>
                                    <a href="#" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/subitem" style={{fontFamily: 'Poppins, sans-serif'}}>
                                      Reports & Dealing with Contractors/Consultants
                                      <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/subitem:w-[calc(100%-2rem)]"></span>
                                    </a>
                                  </div>
                                  </div>
                                </div>
                              </div>
                              
                              <a href="/services/residential-cladding" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/item" style={{fontFamily: 'Poppins, sans-serif'}}>
                                Residential Cladding Rectification
                                <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/item:w-[calc(100%-2rem)]"></span>
                              </a>
                              <a href="/services/joint-ventures" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/item" style={{fontFamily: 'Poppins, sans-serif'}}>
                                Joint Venture Partnerships
                                <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/item:w-[calc(100%-2rem)]"></span>
                  </a>
                </div>
                          </div>
                        </div>
                      </div>
                      
                      <a href="/portfolio" className="relative text-white font-extrabold text-base hover:text-gray-200 transition-colors duration-300 group" style={{fontFamily: 'Poppins, sans-serif'}}>
                        Portfolio
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </a>
                      <a href="/chatbot" className="relative text-white font-extrabold text-base hover:text-gray-200 transition-colors duration-300 group" style={{fontFamily: 'Poppins, sans-serif'}}>
                        Chatbot
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </a>
                      <a href="/contact" className="relative text-white font-extrabold text-base hover:text-gray-200 transition-colors duration-300 group" style={{fontFamily: 'Poppins, sans-serif'}}>
                        Contact
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </nav>
                  </div>
                </div>
                </header>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8" style={{fontFamily: 'Poppins, sans-serif'}}>
                      {displayedText}
                      <span className={`inline-block w-1 h-14 md:h-18 lg:h-20 bg-white ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
                    </h1>
                  </div>
                </div>
        
        {/* Mouse Scroll Animation Icon */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center pt-2 animate-[bounce_3s_ease-in-out_infinite]" style={{animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}>
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full h-screen relative">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
        >
          <source src="/videos/1006.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Normal Video Player Section */}
      <section className="w-full bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Watch Our Video</h2>
            <p className="text-lg text-gray-600" style={{fontFamily: 'Poppins, sans-serif'}}>Experience our work in action</p>
          </div>
          <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
            <video 
              className="w-full h-auto"
              controls
              preload="metadata"
              poster="/images/images.jpeg"
            >
              <source src="/videos/1006.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Text and Images Section */}
      <section className="w-full bg-white py-20">
        <div className="w-full max-w-[1600px] mx-auto px-12 sm:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-48">
            {/* Left Side - Text */}
            <div 
              ref={setElementRef('welcome-text')}
              id="welcome-text"
              className={`w-full lg:w-1/2 transition-all duration-1000 ease-out ${
                isVisible['welcome-text'] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-12'
              }`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>Welcome to Our Platform</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>
                We provide innovative solutions that help businesses grow and succeed in today&apos;s digital landscape. Our team of experts is dedicated to delivering exceptional results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8" style={{fontFamily: 'Poppins, sans-serif'}}>
                With years of experience and a passion for excellence, we&apos;ve helped countless companies achieve their goals and reach new heights of success.
              </p>
              <button className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:from-gray-700 hover:to-gray-800 transition-all duration-500 ease-in-out transform" style={{fontFamily: 'Poppins, sans-serif'}}>
                Discover More
              </button>
            </div>
            
            {/* Right Side - Overlapping Images */}
            <div className="w-full lg:w-1/2 flex justify-center items-center relative h-[600px]">
              {/* Base Large Image Placeholder */}
              <div 
                ref={setElementRef('welcome-main-image')}
                id="welcome-main-image"
                className={`w-[500px] h-[500px] bg-gray-300 shadow-lg transition-all duration-1000 ease-out delay-200 ${
                  isVisible['welcome-main-image'] 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-12 scale-95'
                }`}
              >
              </div>
              
              {/* Overlapping Image - Centered vertically and moved left */}
              <div 
                ref={setElementRef('welcome-overlap-image')}
                id="welcome-overlap-image"
                className={`absolute top-1/2 -translate-y-1/2 -left-8 w-64 h-80 bg-gray-500 shadow-xl z-10 transition-all duration-1000 ease-out delay-500 ${
                  isVisible['welcome-overlap-image'] 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-12 scale-90'
                }`}
              >
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div 
            ref={setElementRef('services-header')}
            id="services-header"
            className={`text-center mb-12 transition-all duration-1000 ease-out ${
              isVisible['services-header'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Our Services</h2>
            <p className="text-xl text-gray-600" style={{fontFamily: 'Poppins, sans-serif'}}>We provide comprehensive solutions to help your business grow and succeed.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 - Project Management */}
            <div 
              ref={setElementRef('service-1')}
              id="service-1"
              className={`bg-transparent transition-all duration-1000 ease-out ${
                isVisible['service-1'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{transitionDelay: '100ms'}}
            >
              <div className="w-full h-32 bg-gray-300"></div>
              <div className="pt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-1 text-left" style={{fontFamily: 'Poppins, sans-serif'}}>Project Management</h3>
                <p className="text-gray-600 text-sm mb-2 leading-relaxed text-left" style={{fontFamily: 'Poppins, sans-serif'}}>
                  Comprehensive project management services to ensure successful delivery of your development projects.
                </p>
                <a href="/services/project-management" className="text-gray-900 text-sm font-medium underline hover:text-gray-700 transition-colors duration-200 text-left block" style={{fontFamily: 'Poppins, sans-serif'}}>
                  read more
                </a>
              </div>
            </div>
            
            {/* Service 2 - Advisory Services */}
            <div 
              ref={setElementRef('service-2')}
              id="service-2"
              className={`bg-transparent transition-all duration-1000 ease-out ${
                isVisible['service-2'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{transitionDelay: '200ms'}}
            >
              <div className="w-full h-32 bg-gray-300"></div>
              <div className="pt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-1 text-left" style={{fontFamily: 'Poppins, sans-serif'}}>Advisory Services</h3>
                <p className="text-gray-600 text-sm mb-2 leading-relaxed text-left" style={{fontFamily: 'Poppins, sans-serif'}}>
                  Expert advisory services to guide your development decisions and strategic planning.
                </p>
                <a href="/services/advisory-services" className="text-gray-900 text-sm font-medium underline hover:text-gray-700 transition-colors duration-200 text-left block" style={{fontFamily: 'Poppins, sans-serif'}}>
                  read more
                </a>
              </div>
            </div>
            
            {/* Service 3 - Development Management Services */}
            <div 
              ref={setElementRef('service-3')}
              id="service-3"
              className={`bg-transparent transition-all duration-1000 ease-out ${
                isVisible['service-3'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{transitionDelay: '300ms'}}
            >
              <div className="w-full h-32 bg-gray-300"></div>
              <div className="pt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-1 text-left" style={{fontFamily: 'Poppins, sans-serif'}}>Development Management Services</h3>
                <p className="text-gray-600 text-sm mb-2 leading-relaxed text-left" style={{fontFamily: 'Poppins, sans-serif'}}>
                  Full-service development management from planning to completion with comprehensive support.
                </p>
                <a href="/services/development-management" className="text-gray-900 text-sm font-medium underline hover:text-gray-700 transition-colors duration-200 text-left block" style={{fontFamily: 'Poppins, sans-serif'}}>
                  read more
                </a>
              </div>
            </div>
            
            {/* Service 4 - Residential Cladding Rectification */}
            <div 
              ref={setElementRef('service-4')}
              id="service-4"
              className={`bg-transparent transition-all duration-1000 ease-out ${
                isVisible['service-4'] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{transitionDelay: '400ms'}}
            >
              <div className="w-full h-32 bg-gray-300"></div>
              <div className="pt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-1 text-left" style={{fontFamily: 'Poppins, sans-serif'}}>Residential Cladding Rectification</h3>
                <p className="text-gray-600 text-sm mb-2 leading-relaxed text-left" style={{fontFamily: 'Poppins, sans-serif'}}>
                  Specialized residential cladding rectification services to ensure building compliance and safety.
                </p>
                <a href="/services/residential-cladding" className="text-gray-900 text-sm font-medium underline hover:text-gray-700 transition-colors duration-200 text-left block" style={{fontFamily: 'Poppins, sans-serif'}}>
                  read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Today Section */}
      <section className="w-full h-[500px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-400 bg-fixed bg-center bg-cover bg-no-repeat" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'%23d1d5db\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' font-family=\'Arial\' font-size=\'24\' fill=\'%236b7280\' text-anchor=\'middle\' dy=\'.3em\'%3EParallax Image Placeholder%3C/text%3E%3C/svg%3E")'}}>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div 
            ref={setElementRef('get-started')}
            id="get-started"
            className={`text-center text-white transition-all duration-1000 ease-out ${
              isVisible['get-started'] 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>Get Started Today</h2>
            <a href="/contact" className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 hover:shadow-xl hover:scale-105 transform transition-all duration-500 ease-in-out" style={{fontFamily: 'Poppins, sans-serif'}}>
              Contact Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Text Content Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div 
            ref={setElementRef('our-story')}
            id="our-story"
            className={`prose prose-lg max-w-none transition-all duration-1000 ease-out ${
              isVisible['our-story'] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>Our Story</h3>
            <p className="text-gray-700 leading-relaxed mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>Our Mission</h3>
            <p className="text-gray-700 leading-relaxed" style={{fontFamily: 'Poppins, sans-serif'}}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
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
                <li><Link href="/" className="text-white hover:text-gray-300 transition-colors duration-300" style={{fontFamily: 'Poppins, sans-serif'}}>Home</Link></li>
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
