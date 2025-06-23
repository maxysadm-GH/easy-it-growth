
import React from 'react';
import { Bot, Calendar, AlertCircle } from 'lucide-react';
import { useBackgroundDetection } from '@/hooks/useBackgroundDetection';
import CTAButton from '@/components/ui/cta-button';

interface OfflineWelcomeProps {
  onBookingClick: () => void;
}

const OfflineWelcome: React.FC<OfflineWelcomeProps> = ({ onBookingClick }) => {
  const backgroundContext = useBackgroundDetection();

  return (
    <div className="p-4 space-y-3">
      {/* Welcome Message */}
      <div 
        className="p-3 rounded-lg border"
        style={{
          background: backgroundContext.isBlueBackground ? 'rgba(250, 207, 57, 0.2)' : 'rgba(250, 207, 57, 0.15)',
          borderColor: backgroundContext.isBlueBackground ? 'rgba(250, 207, 57, 0.4)' : 'rgba(250, 207, 57, 0.3)',
          backdropFilter: 'blur(15px)'
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Bot className="w-5 h-5" style={{ color: backgroundContext.adaptiveColors.textColor }} />
          <h3 
            className="font-semibold text-sm"
            style={{ color: backgroundContext.adaptiveColors.textColor }}
          >
            Welcome to MBACIO! 👋
          </h3>
        </div>
        <p 
          className="text-xs leading-relaxed mb-3"
          style={{ color: backgroundContext.adaptiveColors.textColor, opacity: 0.95 }}
        >
          Our AI assistant is temporarily busy, but you can still get immediate help! Book your free IT assessment or call us directly.
        </p>
        
        <CTAButton
          ctaId="book-assessment"
          variant="yellow"
          size="sm"
          showIcon={true}
          className="w-full mb-2"
          customConfig={{ text: 'Book Free IT Assessment' }}
        />
        
        <div className="flex gap-2 text-xs">
          <a
            href="tel:+17736572300"
            className="flex-1 text-center py-2 px-3 rounded border transition-all duration-200 hover:bg-white/20"
            style={{ 
              color: backgroundContext.adaptiveColors.textColor,
              borderColor: backgroundContext.isBlueBackground ? 'rgba(250, 207, 57, 0.3)' : 'rgba(250, 207, 57, 0.2)'
            }}
          >
            📞 (773) 657-2300
          </a>
          <a
            href="mailto:info@mbacio.com"
            className="flex-1 text-center py-2 px-3 rounded border transition-all duration-200 hover:bg-white/20"
            style={{ 
              color: backgroundContext.adaptiveColors.textColor,
              borderColor: backgroundContext.isBlueBackground ? 'rgba(250, 207, 57, 0.3)' : 'rgba(250, 207, 57, 0.2)'
            }}
          >
            ✉️ Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default OfflineWelcome;
