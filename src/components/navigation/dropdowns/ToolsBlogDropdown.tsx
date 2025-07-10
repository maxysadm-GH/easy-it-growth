
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ToolsBlogDropdownProps {
  navLinkClass: string;
}

const ToolsBlogDropdown: React.FC<ToolsBlogDropdownProps> = ({ navLinkClass }) => {
  const { t } = useLanguage();

  return (
    <div className="relative group">
      <button className={navLinkClass + " focus:outline-none flex items-center gap-1"}>
        {t('nav.toolsBlog')}
        <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      <div className="absolute hidden group-hover:block pt-2 z-20 right-0">
        <div className="bg-charcoal/95 backdrop-blur-sm rounded-lg shadow-xl py-3 w-64 border border-accent/20">
          <a href="/assessment-tools" className="flex items-center px-4 py-2 hover:bg-accent/10 text-white transition-all duration-200 text-sm">
            <span className="mr-3">🛠️</span>
            {t('tools.allAssessment')}
          </a>
          <a href="/ai-readiness-assessment" className="flex items-center px-4 py-2 hover:bg-accent/10 text-white transition-all duration-200 text-sm">
            <span className="mr-3">🤖</span>
            {t('tools.aiReadiness')}
          </a>
          <a href="/tools/staff-productivity" className="flex items-center px-4 py-2 hover:bg-accent/10 text-white transition-all duration-200 text-sm">
            <span className="mr-3">📈</span>
            {t('tools.staffProductivity')}
          </a>
          <a href="/tools/downtime-cost" className="flex items-center px-4 py-2 hover:bg-accent/10 text-white transition-all duration-200 text-sm">
            <span className="mr-3">⚠️</span>
            {t('tools.downtimeCost')}
          </a>
          <a href="/tools/automation-roi" className="flex items-center px-4 py-2 hover:bg-accent/10 text-white transition-all duration-200 text-sm">
            <span className="mr-3">💰</span>
            {t('tools.automationROI')}
          </a>
          <div className="px-4 py-2 border-t border-accent/20 mt-2">
            <a href="/blog" className="flex items-center px-1 py-2 hover:bg-accent/10 text-white transition-all duration-200 rounded text-sm">
              <span className="mr-3">📝</span>
              <span className="font-semibold">{t('tools.industryBlog')}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsBlogDropdown;
