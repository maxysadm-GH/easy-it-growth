
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileNavigationProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onBookAssessment: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ 
  isMenuOpen, 
  onToggleMenu, 
  onBookAssessment 
}) => {
  const { t } = useLanguage();
  const navLinkClass = "text-white font-poppins font-bold transition-all duration-300 drop-shadow-header relative group whitespace-nowrap hover:text-accent text-sm md:text-base lg:text-lg";

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none relative transition-transform duration-200 hover:scale-110"
        onClick={onToggleMenu}
        aria-label="Toggle menu"
      >
        <img
          src="/lovable-uploads/ea466603-eb64-4dbb-be17-47a0e25c99e6.png"
          alt="Menu"
          className="w-8 h-8 drop-shadow-header"
        />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 animate-fade-in">
          <div className="flex flex-col space-y-3 bg-navy/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-accent/20">
            <a href="/services" className={navLinkClass + " text-sm"}>Services</a>
            <div className="flex flex-col gap-2">
              <span className="text-accent font-bold text-sm uppercase tracking-wide">Industries</span>
              <a href="/food-beverage-client" className={navLinkClass + " text-sm pl-4"}>🏭 Food & Beverage</a>
              <a href="/cpa-law-client" className={navLinkClass + " text-sm pl-4"}>⚖️ Law Firms</a>
              <a href="/finance-leaders-client" className={navLinkClass + " text-sm pl-4"}>📊 CPA Firms</a>
            </div>
            <a href="/case-studies" className={navLinkClass + " text-sm"}>Success Stories</a>
            <a href="/pricing" className={navLinkClass + " text-sm"}>Pricing</a>
            <a href="/about" className={navLinkClass + " text-sm"}>About</a>
            <div className="flex flex-col gap-2">
              <span className="text-accent font-bold text-sm uppercase tracking-wide">Resources</span>
              <a href="/assessment-tools" className={navLinkClass + " text-sm pl-4"}>🛠️ Assessment Tools</a>
              <a href="/blog" className={navLinkClass + " text-sm pl-4"}>📝 Blog</a>
            </div>
            <a href="/contact" className={navLinkClass + " text-sm"}>Contact</a>
            <Button 
              onClick={onBookAssessment}
              className="bg-gradient-yellow text-navy font-bold text-sm px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            >
              Book Your Free Assessment
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
