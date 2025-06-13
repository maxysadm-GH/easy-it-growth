
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Headphones } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-yellow rounded-full flex items-center justify-center">
              <Headphones className="w-5 h-5 text-navy" />
            </div>
            <span className="text-xl font-poppins font-bold text-navy">MBACIO</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
            <a href="#framework" className="text-foreground hover:text-accent transition-colors">Our Process</a>
            <a href="#insights" className="text-foreground hover:text-accent transition-colors">AI Solutions</a>
            <a href="#assessment" className="text-foreground hover:text-accent transition-colors">Assessment</a>
            <Button className="bg-gradient-yellow text-navy hover:opacity-90 font-medium">
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
              <a href="#framework" className="text-foreground hover:text-accent transition-colors">Our Process</a>
              <a href="#insights" className="text-foreground hover:text-accent transition-colors">AI Solutions</a>
              <a href="#assessment" className="text-foreground hover:text-accent transition-colors">Assessment</a>
              <Button className="bg-gradient-yellow text-navy hover:opacity-90 font-medium w-full">
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
