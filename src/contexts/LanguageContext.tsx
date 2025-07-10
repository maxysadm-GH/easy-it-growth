
import React, { createContext, useContext, ReactNode } from 'react';

type Language = 'en';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English-only translation dictionary
const translations = {
  en: {
    // Navigation
    'nav.industries': 'Industries',
    'nav.services': 'Services',
    'nav.solutions': 'Solutions',
    'nav.successStories': 'Success Stories',
    'nav.toolsBlog': 'Tools & Blog',
    'nav.about': 'About',
    'nav.bookAssessment': 'Book Free Assessment',
    'nav.bookYourAssessment': 'Book Your Free Assessment',
    
    // Industries
    'industry.foodBeverage': 'Food & Beverage Manufacturing',
    'industry.lawFirms': 'Law Firms',
    'industry.accountingFirms': 'Accounting Firms',
    
    // Solutions
    'solution.erpIntegration': 'ERP/MRP Integration',
    'solution.aiAutomation': 'AI Workflow Automation',
    'solution.digitalOperations': 'Digital Business Operations',
    
    // Tools
    'tools.allAssessment': 'All Assessment Tools',
    'tools.aiReadiness': 'AI Readiness Assessment',
    'tools.staffProductivity': 'Staff Productivity Calculator',
    'tools.downtimeCost': 'Downtime Cost Calculator',
    'tools.automationROI': 'Automation ROI Calculator',
    'tools.industryBlog': 'Industry Insights Blog',
    
    // Hero Section
    'hero.title': 'Making I.T. Easy',
    'hero.subtitle': 'Smarter IT. Simpler Growth.',
    'hero.description': 'From manufacturers to professional firms—we simplify, automate, and modernize your IT operations so your team can focus on growth.',
    'hero.bookAssessment': 'Book Your Free Assessment',
    'hero.confidentiality': 'Guaranteed Confidentiality',
    'hero.confidentialityTooltip': 'Even if you currently have an IT partner, our free risk assessment ensures complete privacy and confidentiality. Make sure they\'re doing a good job before it\'s too late—for free!',
    'hero.guaranteedROI': 'Guaranteed ROI in 6 weeks',
    'hero.guaranteedROITooltip': 'We\'re so confident in our IT optimization strategies that we guarantee you\'ll see measurable return on investment within 6 weeks, or we\'ll work for free until you do.',
    'hero.warranty': '60-Day Satisfaction Warranty',
    'hero.warrantyTooltip': 'Not completely satisfied with our service? We offer a full 60-day satisfaction warranty. If we don\'t exceed expectations, we\'ll make it right or refund your investment.',
    'hero.nationwide': 'Nationwide Service',
    'hero.nationwideTooltip': 'From coast to coast, our expert IT team provides consistent, high-quality service wherever your business operates. Local expertise with national reach.',
    
    // Common
    'common.language': 'Language',
    
    // Chatbot
    'chat.welcome': '👋 Hi! I\'m the MBACIO Assistant powered by AI. I can help you with IT consulting, automation, cybersecurity, and more. How can I assist you today?',
    'chat.contextualWelcome': 'Hello! I\'m here to help with your IT needs. What can I assist you with today?',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const currentLanguage: Language = 'en';

  const setLanguage = (lang: Language) => {
    // Language switching disabled - English only
    console.log(`Language switching disabled. Staying on English.`);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
