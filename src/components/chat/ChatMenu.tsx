
import React from 'react';
import { Menu, User, BarChart3, Phone, Lightbulb, HelpCircle, RotateCcw, Home } from 'lucide-react';

interface ChatMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onMenuAction: (action: string) => void;
  onClose: () => void;
}

const ChatMenu: React.FC<ChatMenuProps> = ({ isOpen, onToggle, onMenuAction, onClose }) => {
  const menuItems = [
    { icon: Home, label: 'Main Menu', action: 'main_menu' },
    { icon: User, label: 'Talk with Engineer', action: 'talk_engineer' },
    { icon: BarChart3, label: 'Assessment Tools', action: 'assessment_tools' },
    { icon: Phone, label: 'Schedule Consultation', action: 'schedule_consultation' },
    { icon: Lightbulb, label: 'IT Tips & Insights', action: 'it_tips' },
    { icon: HelpCircle, label: 'Common Questions', action: 'common_questions' },
    { icon: RotateCcw, label: 'Restart Conversation', action: 'restart_conversation' }
  ];

  const handleMenuClick = (action: string) => {
    onMenuAction(action);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-12 left-0 right-0 mx-2 z-50 backdrop-blur-md border border-white/20 rounded-lg shadow-xl"
      style={{
        backdropFilter: 'blur(16px) saturate(180%)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
    >
      <div className="py-2">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.action}
              className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gradient-yellow/30 transition-all duration-200 text-navy backdrop-blur-sm"
              onClick={() => handleMenuClick(item.action)}
            >
              <IconComponent className="w-4 h-4" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ChatMenu;
