
import React from 'react';
import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface WarrantyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WarrantyModal: React.FC<WarrantyModalProps> = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-navy">
          <div className="flex items-center gap-3">
            <Badge className="bg-gradient-yellow text-navy font-bold px-3 py-1">
              ✅ 60-Day Warranty
            </Badge>
            <h2 className="text-xl font-poppins font-bold text-white">
              Satisfaction Guarantee
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
            aria-label="Close warranty information"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        
        <div className="p-6 max-h-96 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-navy mb-3">
                🛡️ Our Promise to You
              </h3>
              <p className="text-gray-700 leading-relaxed">
                At MBACIO, we stand behind our work with a comprehensive 60-day satisfaction warranty. 
                If you're not completely satisfied with our IT services, solutions, or results within 
                60 days of implementation, we'll make it right.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-navy mb-3">
                📋 What's Covered
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>All IT consulting and implementation services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Automation and workflow optimization projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>ERP/MRP system integrations and migrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Cybersecurity implementations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Cloud migration and infrastructure setup</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-navy mb-3">
                🤝 How It Works
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-navy font-bold text-sm mt-0.5">1</div>
                  <div>
                    <strong>Contact us</strong> within 60 days if you're not satisfied
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-navy font-bold text-sm mt-0.5">2</div>
                  <div>
                    We'll <strong>review your concerns</strong> and work with you to identify solutions
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-navy font-bold text-sm mt-0.5">3</div>
                  <div>
                    We'll <strong>implement corrections</strong> at no additional cost or provide appropriate remedies
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-yellow/20 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">📞</span>
                <h4 className="text-lg font-semibold text-navy">Get Support</h4>
              </div>
              <div className="space-y-1 text-gray-700">
                <p><strong>Phone:</strong> (773) 657-2300</p>
                <p><strong>Email:</strong> support@mbacio.com</p>
                <p><strong>Hours:</strong> Monday-Friday, 9 AM - 5 PM CT</p>
                <p><strong>Emergency:</strong> 24/7 support available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarrantyModal;
