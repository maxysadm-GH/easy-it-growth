
import { useState } from 'react';
import BookingPopup from './BookingPopup';
import { useLanguage } from '@/contexts/LanguageContext';
import Logo from './navigation/Logo';
import DesktopNavigation from './navigation/DesktopNavigation';
import MediumScreenNavigation from './navigation/MediumScreenNavigation';
import MobileNavigation from './navigation/MobileNavigation';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookAssessment = () => {
    console.log('📞 Navigation CTA clicked - opening booking popup');
    setIsBookingOpen(true);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-navy/95 backdrop-blur-sm z-50 shadow-lg border-b border-accent/20">
        <div className="container mx-auto px-2 md:px-4">
          <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
            <Logo />
            
            <DesktopNavigation onBookAssessment={handleBookAssessment} />
            <MediumScreenNavigation onBookAssessment={handleBookAssessment} />
            <MobileNavigation 
              isMenuOpen={isMenuOpen}
              onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
              onBookAssessment={handleBookAssessment}
            />
          </div>
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
