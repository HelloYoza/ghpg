export default function Header() {
  return (
    <header className="sticky top-0 w-full z-50 bg-black">
      <div className="p-6 pl-12">
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              My App
            </h1>
          </div>
          {/* Navigation Items */}
          <nav className="flex items-center space-x-12">
            <a href="/" className="relative text-white font-extrabold text-base hover:text-gray-200 transition-colors duration-300 group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/about" className="relative text-white font-extrabold text-base hover:text-gray-200 transition-colors duration-300 group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <a href="/services" className="flex items-center text-white font-extrabold text-base hover:text-gray-200 transition-colors duration-300">
                Services
                <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 pt-2 w-64 bg-transparent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <div className="bg-white shadow-lg">
                <div className="py-2">
                    <a href="/services/project-management" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/item">
                      Project Management
                      <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/item:w-[calc(100%-2rem)]"></span>
                    </a>
                    <a href="/services/advisory-services" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/item">
                      Advisory Services
                      <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/item:w-[calc(100%-2rem)]"></span>
                    </a>
                  
                  {/* Sub-menu for Development Management Services */}
                  <div className="relative group/sub">
                    <a href="/services/development-management" className="relative flex items-center px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/item">
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
                        <a href="#" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/subitem">
                          Site Due Diligence
                          <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/subitem:w-[calc(100%-2rem)]"></span>
                        </a>
                        <a href="#" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/subitem">
                          Development Planning & Initiation
                          <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/subitem:w-[calc(100%-2rem)]"></span>
                        </a>
                        <a href="#" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/subitem">
                          Town Planning
                          <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/subitem:w-[calc(100%-2rem)]"></span>
                        </a>
                        <a href="#" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/subitem">
                          Design Development Phase
                          <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/subitem:w-[calc(100%-2rem)]"></span>
                        </a>
                        <a href="#" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/subitem">
                          Construction Phase
                          <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/subitem:w-[calc(100%-2rem)]"></span>
                        </a>
                        <a href="#" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/subitem">
                          Financial Management
                          <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/subitem:w-[calc(100%-2rem)]"></span>
                        </a>
                        <a href="#" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/subitem">
                          Reports & Dealing with Contractors/Consultants
                          <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/subitem:w-[calc(100%-2rem)]"></span>
                        </a>
                      </div>
                      </div>
                    </div>
                  </div>
                  
                  <a href="/services/residential-cladding" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/item">
                    Residential Cladding Rectification
                    <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/item:w-[calc(100%-2rem)]"></span>
                  </a>
                  <a href="/services/joint-ventures" className="relative block px-4 py-3 text-black font-extrabold text-base transition-colors duration-200 group/item">
                    Joint Venture Partnerships
                    <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-300 group-hover/item:w-[calc(100%-2rem)]"></span>
                  </a>
                </div>
                </div>
              </div>
            </div>
            
            <a href="/portfolio" className="relative text-white font-extrabold text-base hover:text-gray-200 transition-colors duration-300 group">
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/chatbot" className="relative text-white font-extrabold text-base hover:text-gray-200 transition-colors duration-300 group">
              Chatbot
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/contact" className="relative text-white font-extrabold text-base hover:text-gray-200 transition-colors duration-300 group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
