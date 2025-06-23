
import React, { useState } from 'react';
import { Calendar, Phone, X } from 'lucide-react';
import { useBackgroundDetection } from '@/hooks/useBackgroundDetection';
import BookingPopup from '@/components/BookingPopup';

const FloatingBookingWidget: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const backgroundContext = useBackgroundDetection();

  return (
    <>
      <div className="fixed bottom-6 left-6 z-40">
        {/* Collapsed State */}
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="bg-gradient-yellow text-navy p-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300 font-bold"
            aria-label="Quick Actions"
          >
            <Calendar className="w-6 h-6" />
          </button>
        )}

        {/* Expanded State */}
        {isExpanded && (
          <div 
            className="bg-white rounded-lg shadow-xl border p-4 min-w-64"
            style={{
              backdropFilter: 'blur(20px)',
              background: 'rgba(255, 255, 255, 0.95)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-navy text-sm">Quick Actions</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 hover:bg-gray-100 rounded text-gray-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full bg-gradient-yellow text-navy py-2 px-4 rounded font-semibold text-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Free Assessment
              </button>
              
              <a
                href="tel:+17736572300"
                className="w-full bg-navy text-white py-2 px-4 rounded font-semibold text-sm hover:bg-deep-blue transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call (773) 657-2300
              </a>
            </div>
            
            <div className="text-xs text-gray-500 text-center mt-2">
              Free consultation • No obligation
            </div>
          </div>
        )}
      </div>

      <BookingPopup 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
};

export default FloatingBookingWidget;
