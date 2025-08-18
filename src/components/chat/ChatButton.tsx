import React from 'react';
import { MessageCircle, Zap } from "lucide-react";

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button
      aria-label="Open MBACIO Assistant - Get instant IT consulting help"
      className={`fixed bottom-7 right-7 z-40 transition-all duration-300 group ${
        isOpen ? 'scale-0' : 'scale-100 hover:scale-105'
      }`}
      onClick={onClick}
    >
      {/* Main Button */}
      <div className="relative bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-full shadow-2xl border-2 border-yellow overflow-hidden group-hover:shadow-3xl transition-all duration-300">
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-yellow rounded-full animate-ping opacity-20"></div>
        
        {/* Button content */}
        <div className="relative flex items-center gap-3 px-5 py-4">
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <Zap className="absolute -top-1 -right-1 w-3 h-3 text-yellow animate-pulse" />
          </div>
          <div className="text-left">
            <div className="font-bold text-sm">Need IT Help?</div>
            <div className="text-xs opacity-90">Free Consultation</div>
          </div>
        </div>
        
        {/* Notification badge */}
        <div className="absolute -top-1 -left-1 bg-yellow text-navy text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
          !</div>
      </div>
      
      {/* Floating value props */}
      <div className="absolute -top-12 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-white text-navy px-3 py-1 rounded-lg shadow-lg text-xs font-medium whitespace-nowrap">
          ROI Guaranteed in 6 weeks
        </div>
      </div>
    </button>
  );
};

export default ChatButton;