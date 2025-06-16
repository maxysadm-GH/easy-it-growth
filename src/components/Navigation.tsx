
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" className="flex items-center h-full py-2 transition-transform duration-300 hover:scale-105">
    <img
      src="/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png"
      alt="MBACIO Logo"
      className="h-16 md:h-20 w-auto select-none pointer-events-none"
      style={{ filter: 'drop-shadow(0 2px 18px rgba(0,0,0,0.16))' }}
      draggable={false}
    />
  </Link>
);

const navLinkClass = "text-white font-inter font-semibold text-lg md:text-xl hover:text-electric-blue transition-all duration-300 drop-shadow-header relative group";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-navy/95 backdrop-blur-sm z-50 shadow-lg border-b border-electric-blue/20">
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/why-us" className={navLinkClass}>
              Why MBACIO
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/services" className={navLinkClass}>
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/data-ai" className={navLinkClass}>
              Data & AI
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/blog" className={navLinkClass}>
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Tools Dropdown */}
            <div className="relative group">
              <button className={navLinkClass + " focus:outline-none flex items-center gap-1"}>
                Tools
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block pt-2 z-20 left-0">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl py-3 w-64 border border-electric-blue/20">
                  <Link to="/tools" className="flex items-center px-5 py-3 hover:bg-electric-blue/10 text-navy transition-all duration-200">
                    <span className="mr-3">🛠️</span>
                    All Assessment Tools
                  </Link>
                  <Link to="/assessment-risk" className="flex items-center px-5 py-3 hover:bg-electric-blue/10 text-navy transition-all duration-200">
                    <span className="mr-3">🛡</span>
                    Cyber Risk Assessment
                  </Link>
                  <Link to="/tools/automation-roi" className="flex items-center px-5 py-3 hover:bg-electric-blue/10 text-navy transition-all duration-200">
                    <span className="mr-3">⚙️</span>
                    Automation ROI Calculator
                  </Link>
                  <Link to="/tools/downtime-cost" className="flex items-center px-5 py-3 hover:bg-electric-blue/10 text-navy transition-all duration-200">
                    <span className="mr-3">⚠️</span>
                    Downtime Cost Calculator
                  </Link>
                </div>
              </div>
            </div>
            
            <Button className="ml-4 bg-electric-blue text-white px-6 py-2.5 rounded-lg font-semibold font-inter text-lg shadow-lg glow-hover">
              Book Your Free Assessment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none relative transition-transform duration-200 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <img
              src="/lovable-uploads/ea466603-eb64-4dbb-be17-47a0e25c99e6.png"
              alt="Menu"
              className="w-10 h-10 drop-shadow-header"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-electric-blue/20">
              <Link to="/why-us" className="text-navy font-semibold text-lg">Why MBACIO</Link>
              <Link to="/services" className="text-navy font-semibold text-lg">Services</Link>
              <Link to="/data-ai" className="text-navy font-semibold text-lg">Data & AI</Link>
              <Link to="/blog" className="text-navy font-semibold text-lg">Blog</Link>
              <div className="flex flex-col gap-2 pl-4">
                <Link to="/tools" className="text-navy font-medium">🛠️ All Assessment Tools</Link>
                <Link to="/assessment-risk" className="text-navy font-medium">🛡 Cyber Risk Assessment</Link>
                <Link to="/tools/automation-roi" className="text-navy font-medium">⚙️ Automation ROI Calculator</Link>
              </div>
              <Button className="bg-electric-blue text-white px-6 py-3 rounded-lg font-semibold font-inter text-lg shadow-lg glow-hover">
                Book Your Free Assessment
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
