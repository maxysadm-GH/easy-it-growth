
import React from 'react';
import { Calendar, Phone, Mail, MessageSquare } from 'lucide-react';
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

  const quickContacts = [
    {
      icon: Phone,
      label: 'Call Now',
      action: 'tel:+17736572300',
      description: '(773) 657-2300'
    },
    {
      icon: Mail,
      label: 'Email Us',
      action: 'mailto:info@mbacio.com',
      description: 'info@mbacio.com'
    }
  ];

  if (variant === 'compact') {
    return (
      <div className="flex gap-2 mb-3 flex-wrap">
        <CTAButton
          ctaId="book-assessment"
          variant="yellow"
          size="sm"
          showIcon={false}
          className="text-xs"
          customConfig={{ text: '📅 Book Free Assessment' }}
        />
        <a
          href="tel:+17736572300"
          className="px-3 py-1 rounded-xl text-xs font-semibold transition-all duration-200 border"
          style={{
            background: backgroundContext.isBlueBackground 
              ? 'rgba(250, 207, 57, 0.3)' 
              : 'rgba(250, 207, 57, 0.25)',
            backdropFilter: 'blur(15px) saturate(150%)',
            border: backgroundContext.isBlueBackground 
              ? '1px solid rgba(250, 207, 57, 0.5)' 
              : '1px solid rgba(250, 207, 57, 0.4)',
            color: backgroundContext.isBlueBackground 
              ? 'rgba(17, 45, 78, 0.98)' 
              : 'rgba(17, 45, 78, 0.95)',
          }}
        >
          📞 Call Now
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
        Ready to Get Started?
      </h3>
      
      <CTAButton
        ctaId="book-assessment"
        variant="yellow"
        size="sm"
        showIcon={true}
        className="w-full mb-3"
        customConfig={{ text: 'Book Your Free IT Assessment' }}
      />
      
      <div className="grid grid-cols-2 gap-2">
        {quickContacts.map((contact, index) => (
          <a
            key={index}
            href={contact.action}
            className="flex items-center gap-2 p-2 rounded transition-all duration-200 hover:bg-white/20 text-center"
            style={{ color: backgroundContext.adaptiveColors.textColor }}
          >
            <contact.icon className="w-4 h-4" />
            <div className="flex-1">
              <div className="font-medium text-xs">{contact.label}</div>
              <div className="text-xs opacity-75">{contact.description}</div>
            </div>
          </a>
        ))}
      </div>
      
      <div 
        className="text-xs mt-2 pt-2 border-t text-center"
        style={{ 
          borderColor: backgroundContext.isBlueBackground ? 'rgba(250, 207, 57, 0.3)' : 'rgba(250, 207, 57, 0.2)',
          color: backgroundContext.adaptiveColors.textColor,
          opacity: 0.8
        }}
      >
        Available 24/7 for emergencies • Business hours: Mon-Fri 9AM-5PM CT
      </div>
    </div>
  );
};

export default DirectBookingActions;
