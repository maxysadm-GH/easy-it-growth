
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingPopup: React.FC<BookingPopupProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
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
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl h-full max-h-[90vh] mx-4 bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-navy">
          <h2 className="text-xl font-poppins font-bold text-white">
            Book Your Free IT Assessment
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
            aria-label="Close booking form"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        
        {/* Iframe Container */}
        <div className="h-full pb-16">
          <iframe 
            src="https://outlook.office.com/book/MBACIOITAssessments@mbacio.com/?ismsaljsauthenabled" 
            width="100%" 
            height="100%" 
            scrolling="yes" 
            style={{ border: 0 }}
            title="MBACIO IT Assessment Booking"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;
