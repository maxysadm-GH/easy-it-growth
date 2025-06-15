
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Modern logo - larger, fully transparent background, aligned left
const Logo = () => (
  <div className="flex items-center h-full py-2">
    <img
      src="/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png"
      alt="MBACIO Logo"
      className="h-16 md:h-20 w-auto select-none pointer-events-none"
      style={{ filter: 'drop-shadow(0 2px 18px rgba(0,0,0,0.16))' }}
      draggable={false}
    />
  </div>
);

const navLinkClass = "text-white font-poppins font-bold text-lg md:text-xl hover:text-accent transition-colors drop-shadow-header";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-navy z-50 shadow-lg border-b-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className={navLinkClass}>Services</a>
            <a href="#framework" className={navLinkClass}>Our Process</a>
            <a href="#insights" className={navLinkClass}>AI Solutions</a>
            <a href="#integrations" className={navLinkClass}>Integrations</a>
            <a href="#contact" className="ml-2 bg-gradient-yellow text-navy px-5 py-2 rounded-lg font-bold font-poppins text-lg md:text-xl shadow-md transition hover:opacity-90">Book Free Consultation</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <img
              src="/lovable-uploads/ea466603-eb64-4dbb-be17-47a0e25c99e6.png"
              alt="Menu"
              className="w-10 h-10 drop-shadow-header"
            />
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4 bg-navy rounded-xl p-5 shadow-lg">
              <a href="#services" className={navLinkClass}>Services</a>
              <a href="#framework" className={navLinkClass}>Our Process</a>
              <a href="#insights" className={navLinkClass}>AI Solutions</a>
              <a href="#integrations" className={navLinkClass}>Integrations</a>
              <a href="#contact" className="bg-gradient-yellow text-navy px-5 py-2 rounded-lg font-bold font-poppins text-lg shadow">Book Free Consultation</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
