
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { getCTAConfig, type CTAConfig } from '@/config/cta';
import { cn } from '@/lib/utils';
import BookingPopup from '@/components/BookingPopup';

interface CTAButtonProps {
  ctaId?: string;
  customConfig?: Partial<CTAConfig>;
  variant?: 'default' | 'secondary' | 'yellow' | 'outline';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
  showIcon?: boolean;
  onClick?: () => void;
  forcePopup?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  ctaId,
  customConfig,
  variant = 'default',
  size = 'default',
  className,
  showIcon = true,
  onClick,
  forcePopup = false
}) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Get config from ID or use custom config
  const config = ctaId ? getCTAConfig(ctaId) : null;
  const finalConfig = config ? { ...config, ...customConfig } : customConfig;

  if (!finalConfig?.text || !finalConfig?.url) {
    console.error('CTAButton: Missing required text or url in config');
    return null;
  }

  const handleClick = () => {
    console.log('🔥 CTA Button clicked:', { ctaId, finalConfig, forcePopup });
    
    if (onClick) {
      onClick();
      return;
    }

    // Always open booking popup for assessment CTAs or when forcePopup is true
    const isBookingCTA = ctaId === 'book-assessment' || 
                        finalConfig.text.toLowerCase().includes('book') ||
                        finalConfig.text.toLowerCase().includes('assessment') ||
                        forcePopup;

    console.log('🎯 Should open booking popup:', isBookingCTA);

    if (isBookingCTA) {
      setIsBookingOpen(true);
    } else if (finalConfig.type === 'external') {
      console.log('🌐 Opening external URL:', finalConfig.url);
      window.open(finalConfig.url, '_blank');
    } else {
      console.log('🔗 Navigating to internal URL:', finalConfig.url);
      window.location.href = finalConfig.url;
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'yellow':
        return 'bg-gradient-yellow text-navy font-bold hover:scale-105 transition-transform duration-300';
      case 'secondary':
        return 'bg-navy text-white hover:bg-deep-blue';
      case 'outline':
        return 'border-navy text-navy hover:bg-navy hover:text-white';
      default:
        return 'bg-accent text-navy font-bold hover:bg-gradient-yellow';
    }
  };

  return (
    <>
      <Button
        onClick={handleClick}
        size={size}
        className={cn(
          getVariantClasses(),
          'transition-all duration-300 cursor-pointer',
          className
        )}
      >
        {finalConfig.text}
        {showIcon && <ArrowRight className="w-4 h-4 ml-2" />}
      </Button>

      <BookingPopup 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
};

export default CTAButton;
