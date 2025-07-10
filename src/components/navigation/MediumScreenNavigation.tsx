
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface MediumScreenNavigationProps {
  onBookAssessment: () => void;
}

const MediumScreenNavigation: React.FC<MediumScreenNavigationProps> = ({ onBookAssessment }) => {
  const { t } = useLanguage();
  const ctaButtonClass = "bg-gradient-yellow text-navy font-bold shadow-lg hover:shadow-xl hover:shadow-accent/20 hover:scale-105 transition-all duration-300 whitespace-nowrap text-sm px-4 py-2";

  return (
    <div className="hidden md:flex lg:hidden items-center space-x-2">
      <Button 
        onClick={onBookAssessment}
        className={ctaButtonClass + " rounded-lg"}
      >
        {t('nav.bookAssessment')}
      </Button>
    </div>
  );
};

export default MediumScreenNavigation;
