import Link from 'next/link';
import Link from 'next/link';
import Header from '../../components/Header';

export const metadata = {
  title: 'Ghan Property Group - Services',
};

export default function Services() {
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
          Services
        </h2>
      </section>

      {/* Text Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8" style={{fontFamily: 'Poppins, sans-serif'}}>Comprehensive Service Solutions</h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg" style={{fontFamily: 'Poppins, sans-serif'}}>
              We provide a full range of professional services designed to meet your development and construction needs. Our comprehensive approach ensures that every aspect of your project is handled with expertise and attention to detail.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg" style={{fontFamily: 'Poppins, sans-serif'}}>
              From initial project planning and advisory services to complete development management and specialized rectification work, our team delivers solutions that exceed expectations. We combine industry knowledge with innovative approaches to deliver exceptional results.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg" style={{fontFamily: 'Poppins, sans-serif'}}>
              Our services are tailored to support your specific requirements, whether you&apos;re a developer, investor, or property owner. Explore our individual service offerings to discover how we can help you achieve your project goals with confidence and success.
            </p>
          </div>
        </div>
      </section>

      {/* Image and Text Sections */}
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section 1 - Project Management */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="w-full lg:w-1/2">
              <div className="w-full h-[300px] bg-gray-300">
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Project Management</h3>
              <p className="text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>
                Comprehensive project management services ensuring successful delivery from conception to completion. Our expert team manages every aspect including planning, coordination, risk management, and quality assurance.
              </p>
              <a href="/services/project-management" className="text-gray-900 font-medium underline hover:text-gray-700 transition-colors duration-200" style={{fontFamily: 'Poppins, sans-serif'}}>
                read more
              </a>
            </div>
          </div>

          {/* Section 2 - Advisory Services */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
            <div className="w-full lg:w-1/2">
              <div className="w-full h-[300px] bg-gray-300">
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Advisory Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>
                Strategic guidance and expert consultation to help you make informed decisions throughout your development journey. We provide comprehensive analysis and recommendations tailored to your specific needs.
              </p>
              <a href="/services/advisory-services" className="text-gray-900 font-medium underline hover:text-gray-700 transition-colors duration-200" style={{fontFamily: 'Poppins, sans-serif'}}>
                read more
              </a>
            </div>
          </div>

          {/* Section 3 - Development Management */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="w-full lg:w-1/2">
              <div className="w-full h-[300px] bg-gray-300">
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Development Management Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>
                End-to-end support for your construction and development projects. We handle site due diligence, planning approvals, design development, construction phases, and financial management.
              </p>
              <a href="/services/development-management" className="text-gray-900 font-medium underline hover:text-gray-700 transition-colors duration-200" style={{fontFamily: 'Poppins, sans-serif'}}>
                read more
              </a>
            </div>
          </div>

          {/* Section 4 - Residential Cladding */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
            <div className="w-full lg:w-1/2">
              <div className="w-full h-[300px] bg-gray-300">
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Residential Cladding Rectification</h3>
              <p className="text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>
                Specialized cladding rectification services addressing building compliance issues and ensuring safety and integrity of residential properties. We provide cost-effective solutions that prioritize safety and compliance.
              </p>
              <a href="/services/residential-cladding" className="text-gray-900 font-medium underline hover:text-gray-700 transition-colors duration-200" style={{fontFamily: 'Poppins, sans-serif'}}>
                read more
              </a>
            </div>
          </div>

          {/* Section 5 - Joint Venture Partnerships */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="w-full h-[300px] bg-gray-300">
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>Joint Venture Partnerships</h3>
              <p className="text-gray-700 leading-relaxed mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>
                Strategic alliances that combine resources, expertise, and market access to deliver exceptional development outcomes. We facilitate partnerships that maximize value and minimize risk for all parties involved.
              </p>
              <a href="/services/joint-ventures" className="text-gray-900 font-medium underline hover:text-gray-700 transition-colors duration-200" style={{fontFamily: 'Poppins, sans-serif'}}>
                read more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Talk Section */}
      <section className="w-full bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>Ready to Get Started?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto" style={{fontFamily: 'Poppins, sans-serif'}}>
            Let&apos;s discuss your project requirements and explore how our services can help you achieve your goals. Our team is ready to provide expert guidance and support.
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
