
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState } from 'react';
import BookingPopup from './BookingPopup';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { t } = useLanguage();

  const handleBookAssessment = () => {
    setIsBookingOpen(true);
  };

  // Trust indicators with tooltip content
  const trustIndicators = [
    {
      text: t('hero.guaranteedROI'),
      tooltip: t('hero.guaranteedROITooltip')
    },
    {
      text: t('hero.warranty'), 
      tooltip: t('hero.warrantyTooltip')
    },
    {
      text: t('hero.nationwide'),
      tooltip: t('hero.nationwideTooltip')
    }
  ];

  return (
    <>
      <section className="relative min-h-screen bg-navy text-white pt-24 flex items-center overflow-hidden">
        {/* Professional Hero Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        
        {/* Stylish watermark background */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <svg
            width="60vw"
            height="60vw"
            viewBox="0 0 370 370"
            className="opacity-3 hidden md:block animate-pulse"
            style={{ maxWidth: 600, maxHeight: 600 }}
          >
            <image
              href="/lovable-uploads/ea466603-eb64-4dbb-be17-47a0e25c99e6.png"
              width="370"
              height="370"
              x="0"
              y="0"
            />
          </svg>
        </div>
        
        {/* Enhanced gradient overlay for maximum readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-deep-blue/90 z-20 pointer-events-none" />
        
        {/* Content with enhanced contrast background */}
        <div className="container mx-auto px-4 relative z-30">
          <div className="max-w-4xl mx-auto lg:max-w-5xl lg:ml-0 lg:mr-auto text-center lg:text-left">
            {/* Content Card with subtle background for better readability */}
            <div className="bg-navy/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-poppins font-bold leading-tight mb-6 text-white">
                {t('hero.title')}
              </h1>
              
              <p className="text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold text-gradient-yellow-end mb-8 leading-tight">
                {t('hero.subtitle')}
              </p>
              
              <p className="text-xl lg:text-2xl xl:text-3xl text-gray-100 leading-relaxed mb-12 font-medium max-w-4xl">
                {t('hero.description')}
              </p>
              
              {/* Trust Indicators with enhanced visibility and tooltips */}
              <TooltipProvider>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-12 justify-center lg:justify-start">
                  {trustIndicators.map((item) => (
                    <Tooltip key={item.text}>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-3 group bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-help">
                          <span className="w-8 h-8 bg-gradient-yellow rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg">
                            <img
                              src="/lovable-uploads/ea466603-eb64-4dbb-be17-47a0e25c99e6.png"
                              alt="accent-icon"
                              className="w-5 h-5"
                            />
                          </span>
                          <span className="text-lg lg:text-xl text-white font-bold">{item.text}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent 
                        side="top"
                        className="max-w-sm bg-navy/95 border-accent/20 text-white p-4 rounded-lg shadow-xl"
                      >
                        <p className="text-sm leading-relaxed">
                          {item.tooltip}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
              
              {/* CTA Section with enhanced prominence */}
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <Button 
                  onClick={handleBookAssessment}
                  size="lg" 
                  className="bg-gradient-yellow text-navy font-poppins font-bold text-2xl px-12 py-8 w-full sm:w-auto shadow-2xl hover:shadow-accent/30 transition-all duration-300 hover:scale-105 hover:opacity-95 border-2 border-gradient-yellow-end"
                >
                  {t('hero.bookAssessment')}
                </Button>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10 cursor-help hover:bg-white/10 transition-all duration-300">
                        <span className="text-2xl">🔒</span> 
                        <p className="text-lg lg:text-xl text-gray-200 font-medium">
                          {t('hero.confidentiality')}
                        </p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top"
                      className="max-w-sm bg-navy/95 border-accent/20 text-white p-4 rounded-lg shadow-xl"
                    >
                      <p className="text-sm leading-relaxed">
                        {t('hero.confidentialityTooltip')}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Popup */}
      <BookingPopup 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
};

export default Hero;
