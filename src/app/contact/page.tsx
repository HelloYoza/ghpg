import Link from 'next/link';
import Header from '../../components/Header';

export const metadata = {
  title: 'Ghan Property Group - Contact',
};

export default function Contact() {
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
          Contact Us
        </h2>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Information */}
            <div>
               <h2 className="text-4xl font-bold text-black mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>Get In Touch</h2>
               <p className="text-black mb-8 leading-relaxed" style={{fontFamily: 'Poppins, sans-serif'}}>
                 Please fill in the form to enquire about our services or to register your interest for an Alpha14 project:
               </p>
               
               <div className="space-y-4 mb-8">
                 <div>
                   <h4 className="text-lg font-bold text-black mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Address</h4>
                   <p className="text-black" style={{fontFamily: 'Poppins, sans-serif'}}>Level 7, 256 Queen Street<br />Melbourne VIC 3000</p>
                 </div>
                 <div>
                   <h4 className="text-lg font-bold text-black mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Phone</h4>
                   <p className="text-black" style={{fontFamily: 'Poppins, sans-serif'}}>+61 417 378 331</p>
                 </div>
                 <div>
                   <h4 className="text-lg font-bold text-black mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Email</h4>
                   <p className="text-black" style={{fontFamily: 'Poppins, sans-serif'}}>projects@alpha14.com.au</p>
                 </div>
               </div>
              
            </div>
            
            {/* Right Column - Contact Form */}
            <div>
              <form className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-black font-medium mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Name</label>
                  <div className="border-b border-black">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full py-2 bg-transparent border-none outline-none text-black placeholder-gray-500"
                      placeholder=""
                      style={{fontFamily: 'Poppins, sans-serif'}}
                    />
                  </div>
                </div>
                
                 <div>
                   <label htmlFor="email" className="block text-black font-medium mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Email</label>
                   <div className="border-b border-black">
                     <input
                       type="email"
                       id="email"
                       name="email"
                       className="w-full py-2 bg-transparent border-none outline-none text-black placeholder-gray-500"
                       placeholder=""
                       style={{fontFamily: 'Poppins, sans-serif'}}
                     />
                   </div>
                 </div>
                 
                 <div>
                   <label htmlFor="phone" className="block text-black font-medium mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Phone</label>
                   <div className="border-b border-black">
                     <input
                       type="tel"
                       id="phone"
                       name="phone"
                       className="w-full py-2 bg-transparent border-none outline-none text-black placeholder-gray-500"
                       placeholder=""
                       style={{fontFamily: 'Poppins, sans-serif'}}
                     />
                   </div>
                 </div>
                
                <div>
                  <label htmlFor="message" className="block text-black font-medium mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Message</label>
                  <div className="border-b border-black">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full py-2 bg-transparent border-none outline-none text-black placeholder-gray-500 resize-none"
                      placeholder=""
                      style={{fontFamily: 'Poppins, sans-serif'}}
                    ></textarea>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-gray-900 to-black text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 ease-out transform"
                  >
                    <span style={{fontFamily: 'Poppins, sans-serif'}}>Submit</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </form>
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
