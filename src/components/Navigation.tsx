
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Animated sweep overlay for the logo
const LogoWithSweep = () => (
  <div className="relative group w-20 md:w-28 aspect-square flex items-center">
    <img
      src="/lovable-uploads/ec151905-4eae-4fed-8284-05f239474d3c.png"
      alt="MBACIO Logo"
      className="w-full h-auto rounded-lg shadow-xl"
    />
    {/* Light sweep animation */}
    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg">
      <span className="absolute -left-1/3 top-0 w-1/3 h-full bg-gradient-to-r from-white/0 via-white/60 to-white/0
        opacity-40 blur-[2px] animate-sweep group-hover:opacity-70"
      ></span>
    </span>
    {/* Add keyframes in tailwind.config.ts and index.css for animate-sweep */}
  </div>
);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-navy z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo with sweep */}
          <LogoWithSweep />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-white font-poppins font-bold text-lg md:text-xl hover:text-accent transition-colors drop-shadow-header"
            >Services</a>
            <a
              href="#framework"
              className="text-white font-poppins font-bold text-lg md:text-xl hover:text-accent transition-colors drop-shadow-header"
            >Our Process</a>
            <a
              href="#insights"
              className="text-white font-poppins font-bold text-lg md:text-xl hover:text-accent transition-colors drop-shadow-header"
            >AI Solutions</a>
            <a
              href="#integrations"
              className="text-white font-poppins font-bold text-lg md:text-xl hover:text-accent transition-colors drop-shadow-header"
            >Integrations</a>
            <Button className="bg-gradient-yellow text-navy hover:opacity-90 font-medium font-poppins text-lg md:text-xl shadow-md">
              Book Free Consultation
            </Button>
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
              className="w-9 h-9 invert brightness-200 drop-shadow-header"
            />
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {['services', 'framework', 'insights', 'integrations'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="text-white font-poppins font-bold text-lg hover:text-accent transition-colors drop-shadow-header"
                >
                  {section === 'framework'
                    ? 'Our Process'
                    : section === 'insights'
                      ? 'AI Solutions'
                      : section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
              <Button className="bg-gradient-yellow text-navy hover:opacity-90 font-medium w-full font-poppins text-lg shadow">
                Book Free Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
