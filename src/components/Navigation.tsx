
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Use your provided blue-background logo for the header
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-navy backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/ec151905-4eae-4fed-8284-05f239474d3c.png"
              alt="MBACIO Logo"
              className="h-12 md:h-16 w-auto animate-float"
              style={{maxHeight: 64}} // 4rem
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground font-poppins font-bold text-lg md:text-xl hover:text-accent transition-colors">Services</a>
            <a href="#framework" className="text-foreground font-poppins font-bold text-lg md:text-xl hover:text-accent transition-colors">Our Process</a>
            <a href="#insights" className="text-foreground font-poppins font-bold text-lg md:text-xl hover:text-accent transition-colors">AI Solutions</a>
            <a href="#assessment" className="text-foreground font-poppins font-bold text-lg md:text-xl hover:text-accent transition-colors">Assessment</a>
            <Button className="bg-gradient-yellow text-navy hover:opacity-90 font-medium font-poppins text-lg md:text-xl">
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img
              src="/lovable-uploads/444b256c-f552-4b14-aecd-395d6963a3ae.png"
              alt="Menu"
              className="w-8 h-8"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-foreground font-poppins font-bold text-lg hover:text-accent transition-colors">Services</a>
              <a href="#framework" className="text-foreground font-poppins font-bold text-lg hover:text-accent transition-colors">Our Process</a>
              <a href="#insights" className="text-foreground font-poppins font-bold text-lg hover:text-accent transition-colors">AI Solutions</a>
              <a href="#assessment" className="text-foreground font-poppins font-bold text-lg hover:text-accent transition-colors">Assessment</a>
              <Button className="bg-gradient-yellow text-navy hover:opacity-90 font-medium w-full font-poppins text-lg">
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
