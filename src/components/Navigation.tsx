
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Logo = () => (
  <a href="/" className="flex items-center h-full py-2">
    <img
      src="/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png"
      alt="MBACIO Logo"
      className="h-16 md:h-20 w-auto select-none pointer-events-none transition-all duration-300 hover:scale-105"
      style={{ filter: 'drop-shadow(0 2px 18px rgba(0,0,0,0.16))' }}
      draggable={false}
    />
  </a>
);

const navLinkClass = "text-white font-poppins font-bold text-lg md:text-xl hover:text-accent transition-all duration-300 drop-shadow-header relative group";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-navy/95 backdrop-blur-sm z-50 shadow-lg border-b border-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="/why-us" className={navLinkClass}>
              Why MBACIO
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/services" className={navLinkClass}>
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/data-ai" className={navLinkClass}>
              Data & AI
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/blog" className={navLinkClass}>
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            {/* Tools Dropdown */}
            <div className="relative group">
              <button className={navLinkClass + " focus:outline-none flex items-center gap-1"}>
                Tools
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block pt-2 z-20 left-0">
                <div className="bg-charcoal/95 backdrop-blur-sm rounded-lg shadow-xl py-3 w-64 border border-accent/20">
                  <a href="/tools" className="flex items-center px-5 py-3 hover:bg-accent/10 text-white transition-all duration-200">
                    <span className="mr-3">🛠️</span>
                    All Assessment Tools
                  </a>
                  <a href="/tools/automation-roi" className="flex items-center px-5 py-3 hover:bg-accent/10 text-white transition-all duration-200">
                    <span className="mr-3">⚙️</span>
                    Automation ROI Calculator
                  </a>
                  <a href="/tools/cyber-risk" className="flex items-center px-5 py-3 hover:bg-accent/10 text-white transition-all duration-200">
                    <span className="mr-3">🛡️</span>
                    Cyber Risk Assessment
                  </a>
                  <a href="/tools/downtime-cost" className="flex items-center px-5 py-3 hover:bg-accent/10 text-white transition-all duration-200">
                    <span className="mr-3">⚠️</span>
                    Downtime Cost Calculator
                  </a>
                  <a href="/tools/vendor-consolidation" className="flex items-center px-5 py-3 hover:bg-accent/10 text-white transition-all duration-200">
                    <span className="mr-3">📊</span>
                    Vendor Consolidation Savings
                  </a>
                  <a href="/tools/cloud-migration" className="flex items-center px-5 py-3 hover:bg-accent/10 text-white transition-all duration-200">
                    <span className="mr-3">☁️</span>
                    Cloud Migration ROI
                  </a>
                  <a href="/tools/staff-productivity" className="flex items-center px-5 py-3 hover:bg-accent/10 text-white transition-all duration-200">
                    <span className="mr-3">📈</span>
                    IT Staff Productivity Calculator
                  </a>
                </div>
              </div>
            </div>
            
            <a href="/">
              <Button className="ml-4 bg-gradient-yellow text-navy px-6 py-2.5 rounded-lg font-bold font-poppins text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:opacity-90 hover:shadow-accent/20">
                Book Your Free Assessment
              </Button>
            </a>
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
            <div className="flex flex-col space-y-4 bg-navy/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-accent/20">
              <a href="/why-us" className={navLinkClass}>Why MBACIO</a>
              <a href="/services" className={navLinkClass}>Services</a>
              <a href="/data-ai" className={navLinkClass}>Data & AI</a>
              <a href="/blog" className={navLinkClass}>Blog</a>
              <div className="flex flex-col gap-2 pl-4">
                <a href="/tools" className={navLinkClass + " text-base"}>🛠️ All Assessment Tools</a>
                <a href="/tools/automation-roi" className={navLinkClass + " text-base"}>⚙️ Automation ROI Calculator</a>
                <a href="/tools/cyber-risk" className={navLinkClass + " text-base"}>🛡️ Cyber Risk Assessment</a>
                <a href="/tools/downtime-cost" className={navLinkClass + " text-base"}>⚠️ Downtime Cost Calculator</a>
                <a href="/tools/vendor-consolidation" className={navLinkClass + " text-base"}>📊 Vendor Consolidation Savings</a>
                <a href="/tools/cloud-migration" className={navLinkClass + " text-base"}>☁️ Cloud Migration ROI</a>
                <a href="/tools/staff-productivity" className={navLinkClass + " text-base"}>📈 IT Staff Productivity Calculator</a>
              </div>
              <a href="/">
                <Button className="bg-gradient-yellow text-navy px-6 py-3 rounded-lg font-bold font-poppins text-lg shadow-lg">
                  Book Your Free Assessment
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
