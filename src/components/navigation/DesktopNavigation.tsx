
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import IndustriesDropdown from './dropdowns/IndustriesDropdown';
import SolutionsDropdown from './dropdowns/SolutionsDropdown';
import ToolsBlogDropdown from './dropdowns/ToolsBlogDropdown';

interface DesktopNavigationProps {
  onBookAssessment: () => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ onBookAssessment }) => {
  const { t } = useLanguage();

  const navLinkClass = "text-white font-poppins font-bold transition-all duration-300 drop-shadow-header relative group whitespace-nowrap hover:text-accent text-sm md:text-base lg:text-lg";
  const ctaButtonClass = "bg-gradient-yellow text-navy font-bold shadow-lg hover:shadow-xl hover:shadow-accent/20 hover:scale-105 transition-all duration-300 whitespace-nowrap text-sm px-4 py-2";

  return (
    <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 2xl:space-x-4">
      <IndustriesDropdown navLinkClass={navLinkClass} />

      <a href="/services" className={navLinkClass}>
        {t('nav.services')}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
      </a>

      <SolutionsDropdown navLinkClass={navLinkClass} />

      <a href="/case-studies" className={navLinkClass}>
        {t('nav.successStories')}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
      </a>

      <a href="/pricing" className={navLinkClass}>
        Pricing
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
      </a>
      
      <ToolsBlogDropdown navLinkClass={navLinkClass} />

      <a href="/why-us" className={navLinkClass}>
        {t('nav.about')}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
      </a>
      
      <Button 
        onClick={onBookAssessment}
        className={ctaButtonClass + " ml-2 rounded-lg"}
      >
        {t('nav.bookAssessment')}
      </Button>
    </div>
  );
};

export default DesktopNavigation;
