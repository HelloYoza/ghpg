"use client";

import { useState, useEffect } from 'react';
import Header from '../../components/Header';

export default function Portfolio() {
  useEffect(() => {
    // Use a more aggressive approach to set the title
    const setTitle = () => {
      document.title = 'Ghan Property Group - Portfolio';
    };
    
    // Set immediately
    setTitle();
    
    // Set again after a short delay to override any layout interference
    const timeoutId = setTimeout(setTitle, 0);
    
    // Set on every render to ensure it sticks
    const intervalId = setInterval(setTitle, 100);
    
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);
  const [zoomModal, setZoomModal] = useState<{isOpen: boolean, projectId: string, currentImage: number}>({
    isOpen: false,
    projectId: '',
    currentImage: 0
  });

  const imageColors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];

  const openZoomModal = (projectId: string, currentImage: number) => {
    setZoomModal({ isOpen: true, projectId, currentImage });
  };

  const closeZoomModal = () => {
    setZoomModal({ isOpen: false, projectId: '', currentImage: 0 });
  };

  const nextImage = () => {
    setZoomModal(prev => ({
      ...prev,
      currentImage: (prev.currentImage + 1) % imageColors.length
    }));
  };

  const prevImage = () => {
    setZoomModal(prev => ({
      ...prev,
      currentImage: prev.currentImage === 0 ? imageColors.length - 1 : prev.currentImage - 1
    }));
  };
  // Drag functionality for image selectors
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Don't start drag if clicking on a button
    if ((e.target as HTMLElement).tagName === 'BUTTON') {
      return;
    }
    
    const container = e.currentTarget;
    const startX = e.pageX;
    const scrollLeft = container.scrollLeft;
    let isDragging = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.pageX;
      const walk = (x - startX) * 2; // Multiply for faster scrolling
      
      // Start dragging immediately on any movement
      if (!isDragging) {
        isDragging = true;
        container.style.cursor = 'grabbing';
      }
      
      container.scrollLeft = scrollLeft - walk;
    };
    
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      container.style.cursor = 'grab';
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
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
          Portfolio
        </h2>
      </section>

      {/* Text Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8" style={{fontFamily: 'Poppins, sans-serif'}}>Our Project Portfolio</h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg" style={{fontFamily: 'Poppins, sans-serif'}}>
              Explore our diverse portfolio of successful projects that showcase our expertise and commitment to excellence. From residential developments to commercial complexes, we deliver innovative solutions that exceed client expectations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg" style={{fontFamily: 'Poppins, sans-serif'}}>
              Each project in our portfolio represents our dedication to quality, sustainability, and client satisfaction. We take pride in our ability to transform visions into reality while maintaining the highest standards of construction and design.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg" style={{fontFamily: 'Poppins, sans-serif'}}>
              Our portfolio demonstrates our versatility across different project types and scales, proving our capability to handle complex challenges and deliver outstanding results that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Residential Projects Showcase */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Residential Projects</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" style={{fontFamily: 'Poppins, sans-serif'}}>
              Explore our portfolio of successful residential developments that showcase our commitment to quality, innovation, and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-64 bg-gray-300 relative" id="project1-main">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {/* Zoom Button */}
                <button 
                  onClick={() => {
                    const main = document.getElementById('project1-main');
                    if (main) {
                      const currentBg = main.className.match(/bg-(\w+-\d+)/);
                      if (currentBg) {
                        const colors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];
                        const currentIndex = colors.indexOf(currentBg[0]);
                        openZoomModal('project1', currentIndex);
                      }
                    }
                  }}
                  className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </button>
                {/* Navigation Buttons */}
                <button 
                  onClick={() => {
                    const main = document.getElementById('project1-main');
                    if (main) {
                      const currentBg = main.className.match(/bg-(\w+-\d+)/);
                      if (currentBg) {
                        const colors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];
                        const currentIndex = colors.indexOf(currentBg[0]);
                        const prevIndex = currentIndex > 0 ? currentIndex - 1 : colors.length - 1;
                        main.className = `h-64 ${colors[prevIndex]} relative`;
                      }
                    }
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => {
                    const main = document.getElementById('project1-main');
                    if (main) {
                      const currentBg = main.className.match(/bg-(\w+-\d+)/);
                      if (currentBg) {
                        const colors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];
                        const currentIndex = colors.indexOf(currentBg[0]);
                        const nextIndex = currentIndex < colors.length - 1 ? currentIndex + 1 : 0;
                        main.className = `h-64 ${colors[nextIndex]} relative`;
                      }
                    }
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {/* Image Selector */}
              <div 
                className="bg-gray-50 overflow-x-auto scrollbar-hide cursor-grab select-none"
                onMouseDown={handleMouseDown}
              >
                <div className="flex min-w-max">
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project1-main');
                      if (main) main.className = 'h-64 bg-gray-300 relative';
                    }}
                    className="w-12 h-8 bg-gray-300 hover:bg-gray-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project1-main');
                      if (main) main.className = 'h-64 bg-gray-400 relative';
                    }}
                    className="w-12 h-8 bg-gray-400 hover:bg-gray-500 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project1-main');
                      if (main) main.className = 'h-64 bg-gray-500 relative';
                    }}
                    className="w-12 h-8 bg-gray-500 hover:bg-gray-600 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project1-main');
                      if (main) main.className = 'h-64 bg-blue-300 relative';
                    }}
                    className="w-12 h-8 bg-blue-300 hover:bg-blue-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project1-main');
                      if (main) main.className = 'h-64 bg-green-300 relative';
                    }}
                    className="w-12 h-8 bg-green-300 hover:bg-green-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project1-main');
                      if (main) main.className = 'h-64 bg-red-300 relative';
                    }}
                    className="w-12 h-8 bg-red-300 hover:bg-red-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project1-main');
                      if (main) main.className = 'h-64 bg-yellow-300 relative';
                    }}
                    className="w-12 h-8 bg-yellow-300 hover:bg-yellow-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project1-main');
                      if (main) main.className = 'h-64 bg-purple-300 relative';
                    }}
                    className="w-12 h-8 bg-purple-300 hover:bg-purple-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project1-main');
                      if (main) main.className = 'h-64 bg-pink-300 relative';
                    }}
                    className="w-12 h-8 bg-pink-300 hover:bg-pink-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project1-main');
                      if (main) main.className = 'h-64 bg-indigo-300 relative';
                    }}
                    className="w-12 h-8 bg-indigo-300 hover:bg-indigo-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Modern Family Residence</h4>
                <p className="text-gray-600 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Contemporary single-family home featuring sustainable design and premium finishes.</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-64 bg-gray-400 relative" id="project2-main">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {/* Zoom Button */}
                <button 
                  onClick={() => {
                    const main = document.getElementById('project2-main');
                    if (main) {
                      const currentBg = main.className.match(/bg-(\w+-\d+)/);
                      if (currentBg) {
                        const colors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];
                        const currentIndex = colors.indexOf(currentBg[0]);
                        openZoomModal('project2', currentIndex);
                      }
                    }
                  }}
                  className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </button>
                {/* Navigation Buttons */}
                <button 
                  onClick={() => {
                    const main = document.getElementById('project2-main');
                    if (main) {
                      const currentBg = main.className.match(/bg-(\w+-\d+)/);
                      if (currentBg) {
                        const colors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];
                        const currentIndex = colors.indexOf(currentBg[0]);
                        const prevIndex = currentIndex > 0 ? currentIndex - 1 : colors.length - 1;
                        main.className = `h-64 ${colors[prevIndex]} relative`;
                      }
                    }
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => {
                    const main = document.getElementById('project2-main');
                    if (main) {
                      const currentBg = main.className.match(/bg-(\w+-\d+)/);
                      if (currentBg) {
                        const colors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];
                        const currentIndex = colors.indexOf(currentBg[0]);
                        const nextIndex = currentIndex < colors.length - 1 ? currentIndex + 1 : 0;
                        main.className = `h-64 ${colors[nextIndex]} relative`;
                      }
                    }
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {/* Image Selector */}
              <div 
                className="bg-gray-50 overflow-x-auto scrollbar-hide cursor-grab select-none"
                onMouseDown={handleMouseDown}
              >
                <div className="flex min-w-max">
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project2-main');
                      if (main) main.className = 'h-64 bg-gray-300 relative';
                    }}
                    className="w-12 h-8 bg-gray-300 hover:bg-gray-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project2-main');
                      if (main) main.className = 'h-64 bg-gray-400 relative';
                    }}
                    className="w-12 h-8 bg-gray-400 hover:bg-gray-500 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project2-main');
                      if (main) main.className = 'h-64 bg-gray-500 relative';
                    }}
                    className="w-12 h-8 bg-gray-500 hover:bg-gray-600 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project2-main');
                      if (main) main.className = 'h-64 bg-blue-300 relative';
                    }}
                    className="w-12 h-8 bg-blue-300 hover:bg-blue-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project2-main');
                      if (main) main.className = 'h-64 bg-green-300 relative';
                    }}
                    className="w-12 h-8 bg-green-300 hover:bg-green-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project2-main');
                      if (main) main.className = 'h-64 bg-red-300 relative';
                    }}
                    className="w-12 h-8 bg-red-300 hover:bg-red-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project2-main');
                      if (main) main.className = 'h-64 bg-yellow-300 relative';
                    }}
                    className="w-12 h-8 bg-yellow-300 hover:bg-yellow-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project2-main');
                      if (main) main.className = 'h-64 bg-purple-300 relative';
                    }}
                    className="w-12 h-8 bg-purple-300 hover:bg-purple-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project2-main');
                      if (main) main.className = 'h-64 bg-pink-300 relative';
                    }}
                    className="w-12 h-8 bg-pink-300 hover:bg-pink-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project2-main');
                      if (main) main.className = 'h-64 bg-indigo-300 relative';
                    }}
                    className="w-12 h-8 bg-indigo-300 hover:bg-indigo-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Luxury Townhouse Complex</h4>
                <p className="text-gray-600 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Multi-unit development with modern amenities and energy-efficient design.</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-64 bg-gray-500 relative" id="project3-main">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {/* Zoom Button */}
                <button 
                  onClick={() => {
                    const main = document.getElementById('project3-main');
                    if (main) {
                      const currentBg = main.className.match(/bg-(\w+-\d+)/);
                      if (currentBg) {
                        const colors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];
                        const currentIndex = colors.indexOf(currentBg[0]);
                        openZoomModal('project3', currentIndex);
                      }
                    }
                  }}
                  className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </button>
                {/* Navigation Buttons */}
                <button 
                  onClick={() => {
                    const main = document.getElementById('project3-main');
                    if (main) {
                      const currentBg = main.className.match(/bg-(\w+-\d+)/);
                      if (currentBg) {
                        const colors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];
                        const currentIndex = colors.indexOf(currentBg[0]);
                        const prevIndex = currentIndex > 0 ? currentIndex - 1 : colors.length - 1;
                        main.className = `h-64 ${colors[prevIndex]} relative`;
                      }
                    }
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => {
                    const main = document.getElementById('project3-main');
                    if (main) {
                      const currentBg = main.className.match(/bg-(\w+-\d+)/);
                      if (currentBg) {
                        const colors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];
                        const currentIndex = colors.indexOf(currentBg[0]);
                        const nextIndex = currentIndex < colors.length - 1 ? currentIndex + 1 : 0;
                        main.className = `h-64 ${colors[nextIndex]} relative`;
                      }
                    }
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {/* Image Selector */}
              <div 
                className="bg-gray-50 overflow-x-auto scrollbar-hide cursor-grab select-none"
                onMouseDown={handleMouseDown}
              >
                <div className="flex min-w-max">
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project3-main');
                      if (main) main.className = 'h-64 bg-gray-300 relative';
                    }}
                    className="w-12 h-8 bg-gray-300 hover:bg-gray-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project3-main');
                      if (main) main.className = 'h-64 bg-gray-400 relative';
                    }}
                    className="w-12 h-8 bg-gray-400 hover:bg-gray-500 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project3-main');
                      if (main) main.className = 'h-64 bg-gray-500 relative';
                    }}
                    className="w-12 h-8 bg-gray-500 hover:bg-gray-600 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project3-main');
                      if (main) main.className = 'h-64 bg-blue-300 relative';
                    }}
                    className="w-12 h-8 bg-blue-300 hover:bg-blue-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project3-main');
                      if (main) main.className = 'h-64 bg-green-300 relative';
                    }}
                    className="w-12 h-8 bg-green-300 hover:bg-green-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project3-main');
                      if (main) main.className = 'h-64 bg-red-300 relative';
                    }}
                    className="w-12 h-8 bg-red-300 hover:bg-red-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project3-main');
                      if (main) main.className = 'h-64 bg-yellow-300 relative';
                    }}
                    className="w-12 h-8 bg-yellow-300 hover:bg-yellow-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project3-main');
                      if (main) main.className = 'h-64 bg-purple-300 relative';
                    }}
                    className="w-12 h-8 bg-purple-300 hover:bg-purple-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project3-main');
                      if (main) main.className = 'h-64 bg-pink-300 relative';
                    }}
                    className="w-12 h-8 bg-pink-300 hover:bg-pink-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project3-main');
                      if (main) main.className = 'h-64 bg-indigo-300 relative';
                    }}
                    className="w-12 h-8 bg-indigo-300 hover:bg-indigo-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Heritage Renovation</h4>
                <p className="text-gray-600 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Careful restoration of historic property while adding modern conveniences.</p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-64 bg-gray-300 relative" id="project4-main">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {/* Zoom Button */}
                <button 
                  onClick={() => {
                    const main = document.getElementById('project4-main');
                    if (main) {
                      const currentBg = main.className.match(/bg-(\w+-\d+)/);
                      if (currentBg) {
                        const colors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];
                        const currentIndex = colors.indexOf(currentBg[0]);
                        openZoomModal('project4', currentIndex);
                      }
                    }
                  }}
                  className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </button>
                {/* Navigation Buttons */}
                <button 
                  onClick={() => {
                    const main = document.getElementById('project4-main');
                    if (main) {
                      const currentBg = main.className.match(/bg-(\w+-\d+)/);
                      if (currentBg) {
                        const colors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];
                        const currentIndex = colors.indexOf(currentBg[0]);
                        const prevIndex = currentIndex > 0 ? currentIndex - 1 : colors.length - 1;
                        main.className = `h-64 ${colors[prevIndex]} relative`;
                      }
                    }
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => {
                    const main = document.getElementById('project4-main');
                    if (main) {
                      const currentBg = main.className.match(/bg-(\w+-\d+)/);
                      if (currentBg) {
                        const colors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];
                        const currentIndex = colors.indexOf(currentBg[0]);
                        const nextIndex = currentIndex < colors.length - 1 ? currentIndex + 1 : 0;
                        main.className = `h-64 ${colors[nextIndex]} relative`;
                      }
                    }
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {/* Image Selector */}
              <div 
                className="bg-gray-50 overflow-x-auto scrollbar-hide cursor-grab select-none"
                onMouseDown={handleMouseDown}
              >
                <div className="flex min-w-max">
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project4-main');
                      if (main) main.className = 'h-64 bg-gray-300 relative';
                    }}
                    className="w-12 h-8 bg-gray-300 hover:bg-gray-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project4-main');
                      if (main) main.className = 'h-64 bg-gray-400 relative';
                    }}
                    className="w-12 h-8 bg-gray-400 hover:bg-gray-500 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project4-main');
                      if (main) main.className = 'h-64 bg-gray-500 relative';
                    }}
                    className="w-12 h-8 bg-gray-500 hover:bg-gray-600 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project4-main');
                      if (main) main.className = 'h-64 bg-blue-300 relative';
                    }}
                    className="w-12 h-8 bg-blue-300 hover:bg-blue-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project4-main');
                      if (main) main.className = 'h-64 bg-green-300 relative';
                    }}
                    className="w-12 h-8 bg-green-300 hover:bg-green-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project4-main');
                      if (main) main.className = 'h-64 bg-red-300 relative';
                    }}
                    className="w-12 h-8 bg-red-300 hover:bg-red-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project4-main');
                      if (main) main.className = 'h-64 bg-yellow-300 relative';
                    }}
                    className="w-12 h-8 bg-yellow-300 hover:bg-yellow-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project4-main');
                      if (main) main.className = 'h-64 bg-purple-300 relative';
                    }}
                    className="w-12 h-8 bg-purple-300 hover:bg-purple-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project4-main');
                      if (main) main.className = 'h-64 bg-pink-300 relative';
                    }}
                    className="w-12 h-8 bg-pink-300 hover:bg-pink-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project4-main');
                      if (main) main.className = 'h-64 bg-indigo-300 relative';
                    }}
                    className="w-12 h-8 bg-indigo-300 hover:bg-indigo-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Eco-Friendly Subdivision</h4>
                <p className="text-gray-600 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Sustainable residential development with green building practices.</p>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-64 bg-gray-400 relative" id="project5-main">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {/* Zoom Button */}
                <button 
                  onClick={() => {
                    const main = document.getElementById('project5-main');
                    if (main) {
                      const currentBg = main.className.match(/bg-(\w+-\d+)/);
                      if (currentBg) {
                        const colors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];
                        const currentIndex = colors.indexOf(currentBg[0]);
                        openZoomModal('project5', currentIndex);
                      }
                    }
                  }}
                  className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </button>
                {/* Navigation Buttons */}
                <button 
                  onClick={() => {
                    const main = document.getElementById('project5-main');
                    if (main) {
                      const currentBg = main.className.match(/bg-(\w+-\d+)/);
                      if (currentBg) {
                        const colors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];
                        const currentIndex = colors.indexOf(currentBg[0]);
                        const prevIndex = currentIndex > 0 ? currentIndex - 1 : colors.length - 1;
                        main.className = `h-64 ${colors[prevIndex]} relative`;
                      }
                    }
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => {
                    const main = document.getElementById('project5-main');
                    if (main) {
                      const currentBg = main.className.match(/bg-(\w+-\d+)/);
                      if (currentBg) {
                        const colors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];
                        const currentIndex = colors.indexOf(currentBg[0]);
                        const nextIndex = currentIndex < colors.length - 1 ? currentIndex + 1 : 0;
                        main.className = `h-64 ${colors[nextIndex]} relative`;
                      }
                    }
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {/* Image Selector */}
              <div 
                className="bg-gray-50 overflow-x-auto scrollbar-hide cursor-grab select-none"
                onMouseDown={handleMouseDown}
              >
                <div className="flex min-w-max">
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project5-main');
                      if (main) main.className = 'h-64 bg-gray-300 relative';
                    }}
                    className="w-12 h-8 bg-gray-300 hover:bg-gray-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project5-main');
                      if (main) main.className = 'h-64 bg-gray-400 relative';
                    }}
                    className="w-12 h-8 bg-gray-400 hover:bg-gray-500 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project5-main');
                      if (main) main.className = 'h-64 bg-gray-500 relative';
                    }}
                    className="w-12 h-8 bg-gray-500 hover:bg-gray-600 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project5-main');
                      if (main) main.className = 'h-64 bg-blue-300 relative';
                    }}
                    className="w-12 h-8 bg-blue-300 hover:bg-blue-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project5-main');
                      if (main) main.className = 'h-64 bg-green-300 relative';
                    }}
                    className="w-12 h-8 bg-green-300 hover:bg-green-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project5-main');
                      if (main) main.className = 'h-64 bg-red-300 relative';
                    }}
                    className="w-12 h-8 bg-red-300 hover:bg-red-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project5-main');
                      if (main) main.className = 'h-64 bg-yellow-300 relative';
                    }}
                    className="w-12 h-8 bg-yellow-300 hover:bg-yellow-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project5-main');
                      if (main) main.className = 'h-64 bg-purple-300 relative';
                    }}
                    className="w-12 h-8 bg-purple-300 hover:bg-purple-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project5-main');
                      if (main) main.className = 'h-64 bg-pink-300 relative';
                    }}
                    className="w-12 h-8 bg-pink-300 hover:bg-pink-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project5-main');
                      if (main) main.className = 'h-64 bg-indigo-300 relative';
                    }}
                    className="w-12 h-8 bg-indigo-300 hover:bg-indigo-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Coastal Villa Development</h4>
                <p className="text-gray-600 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Luxury beachfront properties with panoramic ocean views.</p>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-64 bg-gray-500 relative" id="project6-main">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {/* Zoom Button */}
                <button 
                  onClick={() => {
                    const main = document.getElementById('project6-main');
                    if (main) {
                      const currentBg = main.className.match(/bg-(\w+-\d+)/);
                      if (currentBg) {
                        const colors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];
                        const currentIndex = colors.indexOf(currentBg[0]);
                        openZoomModal('project6', currentIndex);
                      }
                    }
                  }}
                  className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </button>
                {/* Navigation Buttons */}
                <button 
                  onClick={() => {
                    const main = document.getElementById('project6-main');
                    if (main) {
                      const currentBg = main.className.match(/bg-(\w+-\d+)/);
                      if (currentBg) {
                        const colors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];
                        const currentIndex = colors.indexOf(currentBg[0]);
                        const prevIndex = currentIndex > 0 ? currentIndex - 1 : colors.length - 1;
                        main.className = `h-64 ${colors[prevIndex]} relative`;
                      }
                    }
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => {
                    const main = document.getElementById('project6-main');
                    if (main) {
                      const currentBg = main.className.match(/bg-(\w+-\d+)/);
                      if (currentBg) {
                        const colors = ['bg-gray-300', 'bg-gray-400', 'bg-gray-500', 'bg-blue-300', 'bg-green-300', 'bg-red-300', 'bg-yellow-300', 'bg-purple-300', 'bg-pink-300', 'bg-indigo-300'];
                        const currentIndex = colors.indexOf(currentBg[0]);
                        const nextIndex = currentIndex < colors.length - 1 ? currentIndex + 1 : 0;
                        main.className = `h-64 ${colors[nextIndex]} relative`;
                      }
                    }
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {/* Image Selector */}
              <div 
                className="bg-gray-50 overflow-x-auto scrollbar-hide cursor-grab select-none"
                onMouseDown={handleMouseDown}
              >
                <div className="flex min-w-max">
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project6-main');
                      if (main) main.className = 'h-64 bg-gray-300 relative';
                    }}
                    className="w-12 h-8 bg-gray-300 hover:bg-gray-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project6-main');
                      if (main) main.className = 'h-64 bg-gray-400 relative';
                    }}
                    className="w-12 h-8 bg-gray-400 hover:bg-gray-500 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project6-main');
                      if (main) main.className = 'h-64 bg-gray-500 relative';
                    }}
                    className="w-12 h-8 bg-gray-500 hover:bg-gray-600 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project6-main');
                      if (main) main.className = 'h-64 bg-blue-300 relative';
                    }}
                    className="w-12 h-8 bg-blue-300 hover:bg-blue-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project6-main');
                      if (main) main.className = 'h-64 bg-green-300 relative';
                    }}
                    className="w-12 h-8 bg-green-300 hover:bg-green-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project6-main');
                      if (main) main.className = 'h-64 bg-red-300 relative';
                    }}
                    className="w-12 h-8 bg-red-300 hover:bg-red-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project6-main');
                      if (main) main.className = 'h-64 bg-yellow-300 relative';
                    }}
                    className="w-12 h-8 bg-yellow-300 hover:bg-yellow-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project6-main');
                      if (main) main.className = 'h-64 bg-purple-300 relative';
                    }}
                    className="w-12 h-8 bg-purple-300 hover:bg-purple-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project6-main');
                      if (main) main.className = 'h-64 bg-pink-300 relative';
                    }}
                    className="w-12 h-8 bg-pink-300 hover:bg-pink-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                  <button 
                    onClick={() => {
                      const main = document.getElementById('project6-main');
                      if (main) main.className = 'h-64 bg-indigo-300 relative';
                    }}
                    className="w-12 h-8 bg-indigo-300 hover:bg-indigo-400 transition-colors duration-200 flex-shrink-0"
                  ></button>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Urban Apartment Complex</h4>
                <p className="text-gray-600 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>High-rise residential tower with premium amenities and city views.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Talk Section */}
      <section className="w-full bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>Ready to Get Started?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto" style={{fontFamily: 'Poppins, sans-serif'}}>
            Let's discuss your project requirements and explore how our services can help you achieve your goals. Our team is ready to provide expert guidance and support.
          </p>
          <a href="/contact" className="inline-block bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-200" style={{fontFamily: 'Poppins, sans-serif'}}>
            Contact Us Today
          </a>
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

      {/* Zoom Modal */}
      {zoomModal.isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl h-full max-h-[80vh] bg-white rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeZoomModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main Image */}
            <div className="relative w-full h-full">
              <div className={`w-full h-full ${imageColors[zoomModal.currentImage]} flex items-center justify-center`}>
                <div className="text-6xl font-bold text-white opacity-50" style={{fontFamily: 'Poppins, sans-serif'}}>
                  {zoomModal.currentImage + 1}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm" style={{fontFamily: 'Poppins, sans-serif'}}>
                {zoomModal.currentImage + 1} / {imageColors.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
