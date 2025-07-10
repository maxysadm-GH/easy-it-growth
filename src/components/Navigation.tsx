
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import BookingPopup from './BookingPopup';
import { useLanguage } from '@/contexts/LanguageContext';

const Logo = () => (
  <a href="/" className="flex items-center h-full py-2">
    <img
      src="/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png"
      alt="MBACIO Logo"
      className="h-10 md:h-12 lg:h-16 w-auto select-none pointer-events-none transition-all duration-300 hover:scale-105"
      style={{ filter: 'drop-shadow(0 2px 18px rgba(0,0,0,0.16))' }}
      draggable={false}
    />
  </a>
);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { currentLanguage, setLanguage, t } = useLanguage();

  const handleBookAssessment = () => {
    console.log('📞 Navigation CTA clicked - opening booking popup');
    setIsBookingOpen(true);
  };

  const handleLanguageSwitch = (lang: 'en' | 'es') => {
    setLanguage(lang);
  };

  // Responsive navigation classes based on language
  const navLinkClass = `text-white font-poppins font-bold transition-all duration-300 drop-shadow-header relative group whitespace-nowrap hover:text-accent ${
    currentLanguage === 'es' 
      ? 'text-xs md:text-sm lg:text-base xl:text-lg' 
      : 'text-sm md:text-base lg:text-lg'
  }`;

  const ctaButtonClass = `bg-gradient-yellow text-navy font-bold shadow-lg hover:shadow-xl hover:shadow-accent/20 hover:scale-105 transition-all duration-300 whitespace-nowrap ${
    currentLanguage === 'es'
      ? 'text-xs md:text-sm px-2 md:px-3 lg:px-4 py-2'
      : 'text-sm px-4 py-2'
  }`;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-navy/95 backdrop-blur-sm z-50 shadow-lg border-b border-accent/20">
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
            <Logo />
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 2xl:space-x-4">
              {/* Industries Dropdown */}
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

              <a href="/services" className={navLinkClass}>
                {t('nav.services')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button className={navLinkClass + " focus:outline-none flex items-center gap-1"}>
                  {t('nav.solutions')}
                  <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block pt-2 z-20 left-0">
                  <div className="bg-charcoal/95 backdrop-blur-sm rounded-lg shadow-xl py-3 w-64 border border-accent/20">
                    <a href="/solutions/manufacturing-analytics" className="flex items-center px-4 py-2 hover:bg-accent/10 text-white transition-all duration-200 text-sm">
                      <span className="mr-3">🔗</span>
                      {t('solution.erpIntegration')}
                    </a>
                    <a href="/data-ai" className="flex items-center px-4 py-2 hover:bg-accent/10 text-white transition-all duration-200 text-sm">
                      <span className="mr-3">🤖</span>
                      {t('solution.aiAutomation')}
                    </a>
                    <a href="/dashboard-solutions" className="flex items-center px-4 py-2 hover:bg-accent/10 text-white transition-all duration-200 text-sm">
                      <span className="mr-3">📱</span>
                      {t('solution.digitalOperations')}
                    </a>
                  </div>
                </div>
              </div>

              <a href="/case-studies" className={navLinkClass}>
                {t('nav.successStories')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              {/* Tools & Blog Dropdown - Right aligned */}
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

              <a href="/why-us" className={navLinkClass}>
                {t('nav.about')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Language Switcher */}
              <div className="flex items-center gap-1 ml-2">
                <button 
                  onClick={() => handleLanguageSwitch('en')}
                  className={`text-xs px-2 py-1 rounded font-bold transition-all duration-200 ${
                    currentLanguage === 'en' 
                      ? 'bg-accent/20 text-accent' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <span className="text-white/30">|</span>
                <button 
                  onClick={() => handleLanguageSwitch('es')}
                  className={`text-xs px-2 py-1 rounded font-bold transition-all duration-200 ${
                    currentLanguage === 'es' 
                      ? 'bg-accent/20 text-accent' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  ES
                </button>
              </div>
              
              <Button 
                onClick={handleBookAssessment}
                className={ctaButtonClass + " ml-2 rounded-lg"}
              >
                {t('nav.bookAssessment')}
              </Button>
            </div>

            {/* Medium Screen Navigation */}
            <div className="hidden md:flex lg:hidden items-center space-x-2">
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => handleLanguageSwitch('en')}
                  className={`text-xs px-2 py-1 rounded font-bold transition-all duration-200 ${
                    currentLanguage === 'en' ? 'bg-accent/20 text-accent' : 'text-white/70 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <span className="text-white/30">|</span>
                <button 
                  onClick={() => handleLanguageSwitch('es')}
                  className={`text-xs px-2 py-1 rounded font-bold transition-all duration-200 ${
                    currentLanguage === 'es' ? 'bg-accent/20 text-accent' : 'text-white/70 hover:text-white'
                  }`}
                >
                  ES
                </button>
              </div>
              
              <Button 
                onClick={handleBookAssessment}
                className={ctaButtonClass + " rounded-lg"}
              >
                {currentLanguage === 'es' ? 'Reservar' : t('nav.bookAssessment')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none relative transition-transform duration-200 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <img
                src="/lovable-uploads/ea466603-eb64-4dbb-be17-47a0e25c99e6.png"
                alt="Menu"
                className="w-8 h-8 drop-shadow-header"
              />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 animate-fade-in">
              <div className="flex flex-col space-y-3 bg-navy/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-accent/20">
                <div className="flex flex-col gap-2">
                  <span className="text-accent font-bold text-sm uppercase tracking-wide">{t('nav.industries')}</span>
                  <a href="/food-beverage-client" className={navLinkClass + " text-sm pl-4"}>🏭 {t('industry.foodBeverage')}</a>
                  <a href="/cpa-law-client" className={navLinkClass + " text-sm pl-4"}>⚖️ {t('industry.lawFirms')}</a>
                  <a href="/finance-leaders-client" className={navLinkClass + " text-sm pl-4"}>📊 {t('industry.accountingFirms')}</a>
                </div>
                <a href="/services" className={navLinkClass + " text-sm"}>{t('nav.services')}</a>
                <a href="/case-studies" className={navLinkClass + " text-sm"}>{t('nav.successStories')}</a>
                <div className="flex flex-col gap-2">
                  <span className="text-accent font-bold text-sm uppercase tracking-wide">{t('nav.toolsBlog')}</span>
                  <a href="/assessment-tools" className={navLinkClass + " text-sm pl-4"}>🛠️ {t('tools.allAssessment')}</a>
                  <a href="/blog" className={navLinkClass + " text-sm pl-4"}>📝 {t('tools.industryBlog')}</a>
                </div>
                <a href="/why-us" className={navLinkClass + " text-sm"}>{t('nav.about')}</a>
                <div className="flex items-center gap-4 pt-2">
                  <span className="text-white font-medium text-sm">{t('common.language')}:</span>
                  <button 
                    onClick={() => handleLanguageSwitch('en')}
                    className={`text-xs px-3 py-1 rounded font-bold transition-all duration-200 ${
                      currentLanguage === 'en' ? 'bg-accent/20 text-accent' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    EN
                  </button>
                  <button 
                    onClick={() => handleLanguageSwitch('es')}
                    className={`text-xs px-3 py-1 rounded font-bold transition-all duration-200 ${
                      currentLanguage === 'es' ? 'bg-accent/20 text-accent' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    ES
                  </button>
                </div>
                <Button 
                  onClick={handleBookAssessment}
                  className="bg-gradient-yellow text-navy font-bold text-sm px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                >
                  {t('nav.bookYourAssessment')}
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Booking Popup */}
      <BookingPopup 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
};

export default Navigation;
