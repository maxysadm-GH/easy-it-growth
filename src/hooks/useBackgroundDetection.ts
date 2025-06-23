
import { useState, useEffect } from 'react';

interface BackgroundContext {
  isLightBackground: boolean;
  isDarkBackground: boolean;
  isBlueBackground: boolean;
  adaptiveColors: {
    headerBackground: string;
    logoBackground: string;
    textColor: string;
    textShadow: string;
    accentColor: string;
    footerBackground: string;
    footerTextColor: string;
    messageBackground: string;
    inputBackground: string;
  };
}

export const useBackgroundDetection = (): BackgroundContext => {
  const [backgroundContext, setBackgroundContext] = useState<BackgroundContext>({
    isLightBackground: false,
    isDarkBackground: false,
    isBlueBackground: false,
    adaptiveColors: {
      headerBackground: 'rgba(255, 255, 255, 0.25)',
      logoBackground: 'rgba(255, 255, 255, 0.4)',
      textColor: 'rgba(17, 45, 78, 0.95)',
      textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)',
      accentColor: 'rgba(250, 207, 57, 1)',
      footerBackground: 'rgba(255, 255, 255, 0.3)',
      footerTextColor: 'rgba(17, 45, 78, 0.95)',
      messageBackground: 'rgba(255, 255, 255, 0.2)',
      inputBackground: 'rgba(255, 255, 255, 0.9)'
    }
  });

  useEffect(() => {
    const detectBackground = () => {
      // Get the body's computed background color
      const bodyStyle = window.getComputedStyle(document.body);
      const bodyBg = bodyStyle.backgroundColor;
      
      // Check specific page elements that might indicate background type
      const heroSection = document.querySelector('.bg-navy, .bg-charcoal, .bg-deep-blue');
      const lightSection = document.querySelector('.bg-gray-50, .bg-white, .bg-gray-100');
      
      // Determine background type based on current page elements
      const isBlueBackground = !!heroSection || bodyBg.includes('45, 78') || bodyBg.includes('17, 45, 78');
      const isLightBackground = !!lightSection || bodyBg.includes('249, 250, 251') || bodyBg === 'rgb(255, 255, 255)';
      const isDarkBackground = isBlueBackground || bodyBg.includes('rgb(0, 0, 0)') || bodyBg.includes('33, 37, 41');

      let adaptiveColors;
      
      if (isBlueBackground) {
        // Enhanced gold/yellow theme for blue backgrounds with better readability
        adaptiveColors = {
          headerBackground: 'linear-gradient(135deg, rgba(250, 207, 57, 0.3) 0%, rgba(17, 45, 78, 0.25) 100%)',
          logoBackground: 'linear-gradient(135deg, rgba(250, 207, 57, 0.6) 0%, rgba(255, 255, 255, 0.5) 100%)',
          textColor: 'rgba(250, 207, 57, 0.98)',
          textShadow: '0 1px 3px rgba(17, 45, 78, 0.9), 0 0 15px rgba(250, 207, 57, 0.4)',
          accentColor: 'rgba(250, 207, 57, 1)',
          footerBackground: 'rgba(17, 45, 78, 0.6)',
          footerTextColor: 'rgba(250, 207, 57, 0.98)',
          messageBackground: 'rgba(255, 255, 255, 0.25)',
          inputBackground: 'rgba(255, 255, 255, 0.95)'
        };
      } else if (isLightBackground) {
        // Enhanced contrast for light backgrounds with solid readability
        adaptiveColors = {
          headerBackground: 'linear-gradient(135deg, rgba(17, 45, 78, 0.3) 0%, rgba(17, 45, 78, 0.25) 100%)',
          logoBackground: 'linear-gradient(135deg, rgba(17, 45, 78, 0.6) 0%, rgba(255, 255, 255, 0.7) 100%)',
          textColor: 'rgba(17, 45, 78, 0.98)',
          textShadow: '0 1px 3px rgba(255, 255, 255, 0.9), 0 0 10px rgba(17, 45, 78, 0.3)',
          accentColor: 'rgba(17, 45, 78, 1)',
          footerBackground: 'rgba(255, 255, 255, 0.8)',
          footerTextColor: 'rgba(17, 45, 78, 0.98)',
          messageBackground: 'rgba(255, 255, 255, 0.3)',
          inputBackground: 'rgba(255, 255, 255, 0.95)'
        };
      } else {
        // Enhanced balanced theme with better readability
        adaptiveColors = {
          headerBackground: 'rgba(255, 255, 255, 0.25)',
          logoBackground: 'rgba(255, 255, 255, 0.4)',
          textColor: 'rgba(17, 45, 78, 0.98)',
          textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)',
          accentColor: 'rgba(250, 207, 57, 1)',
          footerBackground: 'rgba(255, 255, 255, 0.3)',
          footerTextColor: 'rgba(17, 45, 78, 0.98)',
          messageBackground: 'rgba(255, 255, 255, 0.2)',
          inputBackground: 'rgba(255, 255, 255, 0.9)'
        };
      }

      setBackgroundContext({
        isLightBackground,
        isDarkBackground,
        isBlueBackground,
        adaptiveColors
      });
    };

    // Initial detection
    detectBackground();

    // Re-detect on scroll (for pages with different colored sections)
    const handleScroll = () => {
      detectBackground();
    };

    // Re-detect on resize
    const handleResize = () => {
      detectBackground();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Clean up listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return backgroundContext;
};
