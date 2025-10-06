"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';

export default function Chatbot() {
  useEffect(() => {
    // Use a more aggressive approach to set the title
    const setTitle = () => {
      document.title = 'Ghan Property Group - Chatbot';
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
          Chatbot
        </h2>
      </section>

      {/* Chatbot Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>AI Assistant</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{fontFamily: 'Poppins, sans-serif'}}>
              Get instant answers to your questions about our services, projects, and more. Our AI assistant is here to help 24/7.
            </p>
          </div>

          {/* Chatbot Interface */}
          <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gray-800 text-white p-4 flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <span className="font-semibold" style={{fontFamily: 'Poppins, sans-serif'}}>AI Assistant</span>
                <span className="text-gray-300 text-sm" style={{fontFamily: 'Poppins, sans-serif'}}>Online</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {/* Bot Message */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-xs">
                  <p className="text-gray-800" style={{fontFamily: 'Poppins, sans-serif'}}>Hello! I&apos;m your AI assistant. How can I help you today?</p>
                  <span className="text-xs text-gray-500 mt-1 block" style={{fontFamily: 'Poppins, sans-serif'}}>Just now</span>
                </div>
              </div>

              {/* User Message */}
              <div className="flex items-start space-x-3 justify-end">
                <div className="bg-gray-800 text-white rounded-lg p-4 max-w-xs">
                  <p style={{fontFamily: 'Poppins, sans-serif'}}>What services do you offer?</p>
                  <span className="text-xs text-gray-300 mt-1 block" style={{fontFamily: 'Poppins, sans-serif'}}>Just now</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>

              {/* Bot Response */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-md">
                  <p className="text-gray-800" style={{fontFamily: 'Poppins, sans-serif'}}>We offer a comprehensive range of services including:</p>
                  <ul className="text-gray-800 mt-2 space-y-1" style={{fontFamily: 'Poppins, sans-serif'}}>
                    <li>• Project Management</li>
                    <li>• Advisory Services</li>
                    <li>• Development Management Services</li>
                    <li>• Residential Cladding Rectification</li>
                    <li>• Joint Venture Partnerships</li>
                  </ul>
                  <span className="text-xs text-gray-500 mt-2 block" style={{fontFamily: 'Poppins, sans-serif'}}>Just now</span>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex items-center space-x-3">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Type your message here..."
                    style={{fontFamily: 'Poppins, sans-serif'}}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent text-black"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const input = e.target as HTMLInputElement;
                        if (input && input.value.trim()) {
                          // Add new message to chat (UI only)
                          const chatMessages = document.querySelector('.h-96.overflow-y-auto.p-6.space-y-4');
                          if (chatMessages) {
                            const newMessage = document.createElement('div');
                            newMessage.className = 'flex items-start space-x-3 justify-end';
                            newMessage.innerHTML = `
                              <div class="bg-gray-800 text-white rounded-lg p-4 max-w-xs">
                                <p class="text-white">${input.value}</p>
                                <span class="text-xs text-gray-300 mt-1 block">Just now</span>
                              </div>
                              <div class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              </div>
                            `;
                            chatMessages.appendChild(newMessage);
                            chatMessages.scrollTop = chatMessages.scrollHeight;
                          }
                          input.value = '';
                        }
                      }
                    }}
                  />
                </div>
                <button 
                  onClick={() => {
                    const input = document.querySelector('input[type="text"]') as HTMLInputElement;
                    if (input && input.value.trim()) {
                      // Add new message to chat (UI only)
                      const chatMessages = document.querySelector('.h-96.overflow-y-auto.p-6.space-y-4');
                      if (chatMessages) {
                        const newMessage = document.createElement('div');
                        newMessage.className = 'flex items-start space-x-3 justify-end';
                        newMessage.innerHTML = `
                          <div class="bg-gray-800 text-white rounded-lg p-4 max-w-xs">
                            <p class="text-white">${input.value}</p>
                            <span class="text-xs text-gray-300 mt-1 block">Just now</span>
                          </div>
                          <div class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                        `;
                        chatMessages.appendChild(newMessage);
                        chatMessages.scrollTop = chatMessages.scrollHeight;
                      }
                      input.value = '';
                    }
                  }}
                  className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span style={{fontFamily: 'Poppins, sans-serif'}}>Send</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Team Section */}
          <div className="mt-12 text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Need More Help?</h4>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto" style={{fontFamily: 'Poppins, sans-serif'}}>
              Have a complex question or need personalized assistance? Our expert team is here to help with detailed inquiries and specialized support.
            </p>
            <a href="/contact" className="inline-block bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-200" style={{fontFamily: 'Poppins, sans-serif'}}>
              Contact Our Team
            </a>
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
