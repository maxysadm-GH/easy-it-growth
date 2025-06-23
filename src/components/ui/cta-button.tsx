
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
  forcePopup?: boolean; // New prop to force popup behavior
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
    if (onClick) {
      onClick();
      return;
    }

    // Check if this is a booking CTA or forcePopup is true
    const isBookingCTA = ctaId === 'book-assessment' || 
                        finalConfig.text.toLowerCase().includes('book') ||
                        finalConfig.text.toLowerCase().includes('assessment') ||
                        forcePopup;

    if (isBookingCTA) {
      setIsBookingOpen(true);
    } else if (finalConfig.type === 'external') {
      window.open(finalConfig.url, '_blank');
    } else {
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
          'transition-all duration-300',
          className
        )}
      >
        {finalConfig.text}
        {showIcon && <ArrowRight className="w-4 h-4 ml-2" />}
      </Button>

      {/* Booking Popup */}
      <BookingPopup 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
};

export default CTAButton;
