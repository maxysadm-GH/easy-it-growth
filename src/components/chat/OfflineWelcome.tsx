
import React from 'react';
import { Bot, Calendar, Phone, Mail, AlertCircle } from 'lucide-react';
import { useBackgroundDetection } from '@/hooks/useBackgroundDetection';
import DirectBookingActions from './DirectBookingActions';

interface OfflineWelcomeProps {
  onBookingClick: () => void;
}

const OfflineWelcome: React.FC<OfflineWelcomeProps> = ({ onBookingClick }) => {
  const backgroundContext = useBackgroundDetection();

  return (
    <div className="p-4 space-y-3">
      {/* Status Message */}
      <div 
        className="flex items-start gap-3 p-3 rounded-lg border-l-4"
        style={{
          background: backgroundContext.isBlueBackground ? 'rgba(250, 207, 57, 0.15)' : 'rgba(250, 207, 57, 0.1)',
          borderColor: '#facc39',
          backdropFilter: 'blur(15px)'
        }}
      >
        <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
        <div>
          <h3 
            className="font-semibold text-sm mb-1"
            style={{ color: backgroundContext.adaptiveColors.textColor }}
          >
            AI Assistant Temporarily Unavailable
          </h3>
          <p 
            className="text-xs leading-relaxed"
            style={{ color: backgroundContext.adaptiveColors.textColor, opacity: 0.9 }}
          >
            Our AI is experiencing high demand right now, but don't worry - you can still easily schedule your free IT assessment or contact our team directly!
          </p>
        </div>
      </div>

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
          We're here to help transform your business with IT automation, cybersecurity, and consulting services. Get started with a free assessment!
        </p>
        
        <div className="flex flex-wrap gap-1 text-xs">
          <span 
            className="px-2 py-1 rounded"
            style={{ 
              background: 'rgba(255, 255, 255, 0.2)',
              color: backgroundContext.adaptiveColors.textColor 
            }}
          >
            ✅ Bilingual Support
          </span>
          <span 
            className="px-2 py-1 rounded"
            style={{ 
              background: 'rgba(255, 255, 255, 0.2)',
              color: backgroundContext.adaptiveColors.textColor 
            }}
          >
            ✅ 60-Day Warranty
          </span>
          <span 
            className="px-2 py-1 rounded"
            style={{ 
              background: 'rgba(255, 255, 255, 0.2)',
              color: backgroundContext.adaptiveColors.textColor 
            }}
          >
            ✅ 24/7 Support
          </span>
        </div>
      </div>

      {/* Direct Booking Actions */}
      <DirectBookingActions onBookingClick={onBookingClick} variant="full" />
    </div>
  );
};

export default OfflineWelcome;
