
import React from 'react';
import { Phone, Mail, Calendar } from 'lucide-react';
import { useBackgroundDetection } from '@/hooks/useBackgroundDetection';
import CTAButton from '@/components/ui/cta-button';

interface FallbackContactProps {
  onClose: () => void;
}

const FallbackContact: React.FC<FallbackContactProps> = ({ onClose }) => {
  const backgroundContext = useBackgroundDetection();

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      action: 'tel:+1-555-MBACIO',
      description: 'Speak directly with our team'
    },
    {
      icon: Mail,
      title: 'Email Us',
      action: 'mailto:hello@mbacio.com',
      description: 'Send us your questions'
    }
  ];

  return (
    <div 
      className="p-4 rounded-lg border m-3"
      style={{
        background: backgroundContext.isBlueBackground ? 'rgba(250, 207, 57, 0.2)' : 'rgba(250, 207, 57, 0.15)',
        borderColor: backgroundContext.isBlueBackground ? 'rgba(250, 207, 57, 0.4)' : 'rgba(250, 207, 57, 0.3)',
        backdropFilter: 'blur(15px)'
      }}
    >
      <h3 
        className="font-semibold mb-3 text-sm"
        style={{ color: backgroundContext.adaptiveColors.textColor }}
      >
        Let's Connect! 🚀
      </h3>
      
      <div className="space-y-2 mb-3">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.action}
            className="flex items-center gap-2 p-2 rounded transition-all duration-200 hover:bg-white/20"
            style={{ color: backgroundContext.adaptiveColors.textColor }}
          >
            <method.icon className="w-4 h-4" />
            <div className="flex-1">
              <div className="font-medium text-xs">{method.title}</div>
              <div className="text-xs opacity-75">{method.description}</div>
            </div>
          </a>
        ))}
      </div>

      <CTAButton
        ctaId="book-assessment"
        variant="yellow"
        size="sm"
        showIcon={false}
        className="w-full mb-2"
        customConfig={{ text: 'Book Free Assessment' }}
      />
      
      <button
        onClick={onClose}
        className="text-xs opacity-75 hover:opacity-100 transition-opacity"
        style={{ color: backgroundContext.adaptiveColors.textColor }}
      >
        Continue Chat
      </button>
    </div>
  );
};

export default FallbackContact;
