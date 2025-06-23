
import React from 'react';
import { Calendar } from 'lucide-react';
import { useBackgroundDetection } from '@/hooks/useBackgroundDetection';
import CTAButton from '@/components/ui/cta-button';

interface DirectBookingActionsProps {
  onBookingClick: () => void;
  variant?: 'compact' | 'full';
}

const DirectBookingActions: React.FC<DirectBookingActionsProps> = ({ 
  onBookingClick, 
  variant = 'full' 
}) => {
  const backgroundContext = useBackgroundDetection();

  if (variant === 'compact') {
    return (
      <div className="flex gap-2 mb-2">
        <CTAButton
          ctaId="book-assessment"
          variant="yellow"
          size="sm"
          showIcon={false}
          className="text-xs px-3 py-1"
          customConfig={{ text: '📅 Book Assessment' }}
        />
        <a
          href="tel:+17736572300"
          className="px-3 py-1 rounded text-xs font-semibold transition-all duration-200 border"
          style={{
            background: backgroundContext.isBlueBackground 
              ? 'rgba(250, 207, 57, 0.3)' 
              : 'rgba(250, 207, 57, 0.25)',
            borderColor: backgroundContext.isBlueBackground 
              ? 'rgba(250, 207, 57, 0.5)' 
              : 'rgba(250, 207, 57, 0.4)',
            color: backgroundContext.isBlueBackground 
              ? 'rgba(17, 45, 78, 0.98)' 
              : 'rgba(17, 45, 78, 0.95)',
          }}
        >
          📞 Call
        </a>
      </div>
    );
  }

  return (
    <div 
      className="p-3 rounded-lg border mb-3"
      style={{
        background: backgroundContext.isBlueBackground ? 'rgba(250, 207, 57, 0.15)' : 'rgba(250, 207, 57, 0.1)',
        borderColor: backgroundContext.isBlueBackground ? 'rgba(250, 207, 57, 0.3)' : 'rgba(250, 207, 57, 0.2)',
        backdropFilter: 'blur(15px)'
      }}
    >
      <h3 
        className="font-semibold mb-2 text-sm flex items-center gap-2"
        style={{ color: backgroundContext.adaptiveColors.textColor }}
      >
        <Calendar className="w-4 h-4" />
        Get Started Now
      </h3>
      
      <CTAButton
        ctaId="book-assessment"
        variant="yellow"
        size="sm"
        showIcon={true}
        className="w-full mb-2"
        customConfig={{ text: 'Book Your Free IT Assessment' }}
      />
      
      <div 
        className="text-xs text-center"
        style={{ 
          color: backgroundContext.adaptiveColors.textColor,
          opacity: 0.8
        }}
      >
        Or call <a href="tel:+17736572300" className="font-semibold">(773) 657-2300</a>
      </div>
    </div>
  );
};

export default DirectBookingActions;
