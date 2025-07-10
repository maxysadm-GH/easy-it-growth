
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Comprehensive translation dictionary
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
  },
  es: {
    // Navigation
    'nav.industries': 'Industrias',
    'nav.services': 'Servicios',
    'nav.solutions': 'Soluciones',
    'nav.successStories': 'Casos de Éxito',
    'nav.toolsBlog': 'Herramientas y Blog',
    'nav.about': 'Nosotros',
    'nav.bookAssessment': 'Reservar Evaluación',
    'nav.bookYourAssessment': 'Reserva Tu Evaluación',
    
    // Industries
    'industry.foodBeverage': 'Manufactura de Alimentos y Bebidas',
    'industry.lawFirms': 'Firmas Legales',
    'industry.accountingFirms': 'Firmas de Contabilidad',
    
    // Solutions
    'solution.erpIntegration': 'Integración ERP/MRP',
    'solution.aiAutomation': 'Automatización IA',
    'solution.digitalOperations': 'Operaciones Digitales',
    
    // Tools
    'tools.allAssessment': 'Herramientas de Evaluación',
    'tools.aiReadiness': 'Evaluación de Preparación IA',
    'tools.staffProductivity': 'Calculadora de Productividad',
    'tools.downtimeCost': 'Calculadora de Tiempo Muerto',
    'tools.automationROI': 'Calculadora de ROI',
    'tools.industryBlog': 'Blog de la Industria',
    
    // Hero Section
    'hero.title': 'Haciendo la T.I. Fácil',
    'hero.subtitle': 'TI Más Inteligente. Crecimiento Más Simple.',
    'hero.description': 'Desde manufactureros hasta firmas profesionales—simplificamos, automatizamos y modernizamos sus operaciones de TI para que su equipo pueda enfocarse en el crecimiento.',
    'hero.bookAssessment': 'Reservar Evaluación Gratuita',
    'hero.confidentiality': 'Confidencialidad Garantizada',
    'hero.confidentialityTooltip': 'Incluso si actualmente tiene un socio de TI, nuestra evaluación gratuita de riesgo garantiza completa privacidad y confidencialidad. ¡Asegúrese de que estén haciendo un buen trabajo antes de que sea demasiado tarde—gratis!',
    'hero.guaranteedROI': 'ROI Garantizado en 6 semanas',
    'hero.guaranteedROITooltip': 'Estamos tan seguros de nuestras estrategias de optimización de TI que garantizamos que verá un retorno de inversión medible en 6 semanas, o trabajaremos gratis hasta que lo haga.',
    'hero.warranty': 'Garantía de Satisfacción de 60 Días',
    'hero.warrantyTooltip': '¿No está completamente satisfecho con nuestro servicio? Ofrecemos una garantía completa de satisfacción de 60 días. Si no superamos las expectativas, lo solucionaremos o reembolsaremos su inversión.',
    'hero.nationwide': 'Servicio Nacional',
    'hero.nationwideTooltip': 'De costa a costa, nuestro equipo experto de TI brinda servicio consistente y de alta calidad donde sea que opere su negocio. Experiencia local con alcance nacional.',
    
    // Common
    'common.language': 'Idioma',
    
    // Chatbot
    'chat.welcome': '👋 ¡Hola! Soy el Asistente MBACIO impulsado por IA. Puedo ayudarte con consultoría de TI, automatización, ciberseguridad y más. ¿Cómo puedo asistirte hoy?',
    'chat.contextualWelcome': '¡Hola! Estoy aquí para ayudarte con tus necesidades de TI. ¿En qué puedo asistirte hoy?',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    console.log(`Language switched to: ${lang}`);
    // Store language preference
    localStorage.setItem('preferred-language', lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key] || translations['en'][key] || key;
  };

  // Initialize language from storage on mount
  React.useEffect(() => {
    const stored = localStorage.getItem('preferred-language') as Language;
    if (stored && (stored === 'en' || stored === 'es')) {
      setCurrentLanguage(stored);
    }
  }, []);

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
