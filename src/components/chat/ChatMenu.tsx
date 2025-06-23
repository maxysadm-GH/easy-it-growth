
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
      className="absolute top-12 left-0 right-0 mx-2 z-50 border border-white/30 rounded-lg overflow-hidden"
      style={{
        backdropFilter: 'blur(25px) saturate(180%)',
        background: 'rgba(255, 255, 255, 0.15)',
        boxShadow: `
          0 20px 25px -5px rgba(0, 0, 0, 0.15), 
          0 10px 10px -5px rgba(0, 0, 0, 0.08),
          inset 0 1px 0 rgba(255, 255, 255, 0.2)
        `
      }}
    >
      <div className="py-2">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.action}
              className="w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 backdrop-blur-sm hover:bg-white/20"
              style={{ 
                color: 'rgba(17, 45, 78, 0.9)',
                textShadow: '0 1px 1px rgba(255, 255, 255, 0.2)'
              }}
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
