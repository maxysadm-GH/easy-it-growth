
import React from 'react';
import { MessageCircle } from "lucide-react";

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button
      aria-label="Open chat"
      className={`fixed bottom-7 right-7 z-40 transition-all duration-300 group ${
        isOpen ? 'scale-0' : 'scale-100 hover:scale-110'
      }`}
      onClick={onClick}
    >
      {/* Chat Bubble Design */}
      <div className="relative bg-gradient-yellow text-navy rounded-2xl shadow-xl border-2 border-navy overflow-hidden">
        {/* Pulse animation for attention */}
        <div className="absolute inset-0 bg-gradient-yellow rounded-2xl animate-ping opacity-20"></div>
        
        {/* Main button content */}
        <div className="relative flex items-center gap-3 px-4 py-3">
          <MessageCircle className="w-6 h-6" />
          <span className="font-bold text-sm whitespace-nowrap">Need Help?</span>
        </div>
        
        {/* Chat bubble tail */}
        <div className="absolute -bottom-1 right-4 w-3 h-3 bg-gradient-yellow border-r-2 border-b-2 border-navy transform rotate-45"></div>
      </div>
    </button>
  );
};

export default ChatButton;
