
import React from 'react';
import { Bot, AlertCircle } from 'lucide-react';
import { useBackgroundDetection } from '@/hooks/useBackgroundDetection';

const OfflineWelcome: React.FC = () => {
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
          Our AI assistant is temporarily busy, but you can still get immediate help! Use the booking widget on the left side of your screen to book your free IT assessment or call us directly.
        </p>
        
        <div className="flex items-center gap-2 text-xs p-2 rounded"
             style={{ 
               background: 'rgba(255, 165, 0, 0.1)',
               color: 'rgba(255, 165, 0, 0.9)'
             }}>
          <AlertCircle className="w-4 h-4" />
          <span>Check the yellow booking widget on the bottom left for immediate assistance!</span>
        </div>
      </div>
    </div>
  );
};

export default OfflineWelcome;
