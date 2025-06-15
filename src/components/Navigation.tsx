import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Animated sweep overlay for the logo
const LogoWithSweep = () => (
  <div className="relative group w-32 md:w-44 aspect-square flex items-center transition-all duration-300">
    <img
      src="/lovable-uploads/ec151905-4eae-4fed-8284-05f239474d3c.png"
      alt="MBACIO Logo"
      className="w-full h-auto rounded-lg shadow-xl"
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
          {/* Logo with sweep */}
          <LogoWithSweep />

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
              src="/lovable-uploads/444b256c-f552-4b14-aecd-395d6963a3ae.png"
              alt="Menu"
              className="w-10 h-10 invert brightness-200 drop-shadow-header"
            />
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
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
