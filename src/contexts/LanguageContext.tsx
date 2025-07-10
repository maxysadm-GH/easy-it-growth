
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
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
    
    // Common
    'common.language': 'Language',
  },
  es: {
    // Navigation
    'nav.industries': 'Industrias',
    'nav.services': 'Servicios',
    'nav.solutions': 'Soluciones',
    'nav.successStories': 'Casos de Éxito',
    'nav.toolsBlog': 'Herramientas y Blog',
    'nav.about': 'Acerca de',
    'nav.bookAssessment': 'Reservar Evaluación Gratuita',
    'nav.bookYourAssessment': 'Reserva Tu Evaluación Gratuita',
    
    // Industries
    'industry.foodBeverage': 'Manufactura de Alimentos y Bebidas',
    'industry.lawFirms': 'Firmas Legales',
    'industry.accountingFirms': 'Firmas de Contabilidad',
    
    // Solutions
    'solution.erpIntegration': 'Integración ERP/MRP',
    'solution.aiAutomation': 'Automatización de Flujos de Trabajo IA',
    'solution.digitalOperations': 'Operaciones Comerciales Digitales',
    
    // Tools
    'tools.allAssessment': 'Todas las Herramientas de Evaluación',
    'tools.aiReadiness': 'Evaluación de Preparación para IA',
    'tools.staffProductivity': 'Calculadora de Productividad del Personal',
    'tools.downtimeCost': 'Calculadora de Costo de Tiempo Muerto',
    'tools.automationROI': 'Calculadora de ROI de Automatización',
    'tools.industryBlog': 'Blog de Perspectivas de la Industria',
    
    // Common
    'common.language': 'Idioma',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    console.log(`Language switched to: ${lang}`);
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
