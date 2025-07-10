
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import BookingPopup from './BookingPopup';

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
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookAssessment = () => {
    console.log('📞 Navigation CTA clicked - opening booking popup');
    setIsBookingOpen(true);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-navy/95 backdrop-blur-sm z-50 shadow-lg border-b border-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Logo />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {/* Industries Dropdown */}
              <div className="relative group">
                <button className={navLinkClass + " focus:outline-none flex items-center gap-1"}>
                  Industries
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block pt-2 z-20 left-0">
                  <div className="bg-charcoal/95 backdrop-blur-sm rounded-lg shadow-xl py-3 w-64 border border-accent/20">
                    <a href="/ideal-client/food-beverage" className="flex items-center px-5 py-3 hover:bg-accent/10 text-white transition-all duration-200">
                      <span className="mr-3">🏭</span>
                      Food & Beverage Manufacturing
                    </a>
                    <a href="/ideal-client/cpa-law" className="flex items-center px-5 py-3 hover:bg-accent/10 text-white transition-all duration-200">
                      <span className="mr-3">⚖️</span>
                      Law Firms
                    </a>
                    <a href="/ideal-client/finance-leaders" className="flex items-center px-5 py-3 hover:bg-accent/10 text-white transition-all duration-200">
                      <span className="mr-3">📊</span>
                      Accounting Firms
                    </a>
                  </div>
                </div>
              </div>

              <a href="/services" className={navLinkClass}>
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button className={navLinkClass + " focus:outline-none flex items-center gap-1"}>
                  Solutions
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block pt-2 z-20 left-0">
                  <div className="bg-charcoal/95 backdrop-blur-sm rounded-lg shadow-xl py-3 w-64 border border-accent/20">
                    <a href="/solutions/manufacturing-analytics" className="flex items-center px-5 py-3 hover:bg-accent/10 text-white transition-all duration-200">
                      <span className="mr-3">🔗</span>
                      ERP/MRP Integration
                    </a>
                    <a href="/data-ai" className="flex items-center px-5 py-3 hover:bg-accent/10 text-white transition-all duration-200">
                      <span className="mr-3">🤖</span>
                      AI Workflow Automation
                    </a>
                    <a href="/dashboard-solutions" className="flex items-center px-5 py-3 hover:bg-accent/10 text-white transition-all duration-200">
                      <span className="mr-3">📱</span>
                      Digital Business Operations
                    </a>
                  </div>
                </div>
              </div>

              <a href="/case-studies" className={navLinkClass}>
                Success Stories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              {/* Free Tools & Blog Dropdown - Made Prominent */}
              <div className="relative group">
                <button className={navLinkClass + " focus:outline-none flex items-center gap-1 text-gradient-yellow-end font-extrabold"}>
                  Free Tools & Blog
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block pt-2 z-20 left-0">
                  <div className="bg-charcoal/95 backdrop-blur-sm rounded-lg shadow-xl py-3 w-72 border border-accent/20">
                    <a href="/tools" className="flex items-center px-5 py-3 hover:bg-accent/10 text-white transition-all duration-200">
                      <span className="mr-3">🛠️</span>
                      All Free Assessment Tools
                    </a>
                    <a href="/tools/ai-readiness" className="flex items-center px-5 py-3 hover:bg-accent/10 text-white transition-all duration-200">
                      <span className="mr-3">🤖</span>
                      AI Readiness Assessment
                    </a>
                    <a href="/tools/staff-productivity" className="flex items-center px-5 py-3 hover:bg-accent/10 text-white transition-all duration-200">
                      <span className="mr-3">📈</span>
                      IT Staff Productivity Calculator
                    </a>
                    <a href="/tools/downtime-cost" className="flex items-center px-5 py-3 hover:bg-accent/10 text-white transition-all duration-200">
                      <span className="mr-3">⚠️</span>
                      Downtime Cost Calculator
                    </a>
                    <a href="/blog" className="flex items-center px-5 py-3 hover:bg-accent/10 text-white transition-all duration-200">
                      <span className="mr-3">📝</span>
                      Industry Insights Blog
                    </a>
                  </div>
                </div>
              </div>

              <a href="/why-us" className={navLinkClass}>
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Language Switcher */}
              <div className="flex items-center gap-2 ml-4">
                <button className="text-white font-bold text-sm px-2 py-1 rounded border border-white/30 hover:bg-white/10 transition-all duration-200">
                  EN
                </button>
                <span className="text-white/50">|</span>
                <button className="text-white/70 font-bold text-sm px-2 py-1 rounded hover:bg-white/10 hover:text-white transition-all duration-200">
                  ES
                </button>
              </div>
              
              <Button 
                onClick={handleBookAssessment}
                className="bg-gradient-yellow text-navy font-bold text-lg px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl hover:shadow-accent/20 ml-4 hover:scale-105 transition-all duration-300"
              >
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
              <div className="flex flex-col space-y-4 bg-navy/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-accent/20">
                <div className="flex flex-col gap-2">
                  <span className="text-accent font-bold text-sm uppercase tracking-wide">Industries</span>
                  <a href="/ideal-client/food-beverage" className={navLinkClass + " text-base pl-4"}>🏭 Food & Beverage</a>
                  <a href="/ideal-client/cpa-law" className={navLinkClass + " text-base pl-4"}>⚖️ Law Firms</a>
                  <a href="/ideal-client/finance-leaders" className={navLinkClass + " text-base pl-4"}>📊 Accounting Firms</a>
                </div>
                <a href="/services" className={navLinkClass}>Services</a>
                <a href="/case-studies" className={navLinkClass}>Success Stories</a>
                <div className="flex flex-col gap-2">
                  <span className="text-gradient-yellow-end font-bold text-sm uppercase tracking-wide">Free Tools & Blog</span>
                  <a href="/tools" className={navLinkClass + " text-base pl-4"}>🛠️ All Assessment Tools</a>
                  <a href="/blog" className={navLinkClass + " text-base pl-4"}>📝 Industry Blog</a>
                </div>
                <a href="/why-us" className={navLinkClass}>About</a>
                <div className="flex items-center gap-4 pt-2">
                  <span className="text-white font-medium">Language:</span>
                  <button className="text-white font-bold text-sm px-3 py-1 rounded border border-white/30 bg-white/10">EN</button>
                  <button className="text-white/70 font-bold text-sm px-3 py-1 rounded hover:bg-white/10 hover:text-white transition-all duration-200">ES</button>
                </div>
                <Button 
                  onClick={handleBookAssessment}
                  className="bg-gradient-yellow text-navy font-bold text-lg px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Book Your Free Assessment
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Booking Popup */}
      <BookingPopup 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
};

export default Navigation;
