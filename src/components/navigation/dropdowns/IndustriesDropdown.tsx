
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface IndustriesDropdownProps {
  navLinkClass: string;
}

const IndustriesDropdown: React.FC<IndustriesDropdownProps> = ({ navLinkClass }) => {
  const { t } = useLanguage();

  return (
    <div className="relative group">
      <button className={navLinkClass + " focus:outline-none flex items-center gap-1"}>
        {t('nav.industries')}
        <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      <div className="absolute hidden group-hover:block pt-2 z-20 left-0">
        <div className="bg-charcoal/95 backdrop-blur-sm rounded-lg shadow-xl py-3 w-72 border border-accent/20">
          <a href="/food-beverage-client" className="flex items-center px-4 py-2 hover:bg-accent/10 text-white transition-all duration-200 text-sm">
            <span className="mr-3">🏭</span>
            {t('industry.foodBeverage')}
          </a>
          <a href="/cpa-law-client" className="flex items-center px-4 py-2 hover:bg-accent/10 text-white transition-all duration-200 text-sm">
            <span className="mr-3">⚖️</span>
            {t('industry.lawFirms')}
          </a>
          <a href="/finance-leaders-client" className="flex items-center px-4 py-2 hover:bg-accent/10 text-white transition-all duration-200 text-sm">
            <span className="mr-3">📊</span>
            {t('industry.accountingFirms')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndustriesDropdown;
