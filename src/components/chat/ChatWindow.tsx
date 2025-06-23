
import React, { useState } from 'react';
import { X, Menu, User } from "lucide-react";
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import QuickActions from './QuickActions';
import ChatMenu from './ChatMenu';
import SmartTips from './SmartTips';
import { Message } from '@/types/chat';
import { getContextualTips, SmartTip } from '@/data/smartTips';

const assistantIconUrl = "/lovable-uploads/6c02622d-f929-4272-8fb2-56a68e33cc30.png";

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
  quickActions: string[];
  pageName: string;
  onClose: () => void;
  onSendMessage: (message: string) => Promise<void>;
  onQuickAction: (action: string) => Promise<void>;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  isLoading,
  quickActions,
  pageName,
  onClose,
  onSendMessage,
  onQuickAction
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTips, setShowTips] = useState(true);
  
  const currentQuickActions = messages.length <= 1 ? quickActions : [];
  const contextualTips = getContextualTips(pageName.toLowerCase(), messages.length);
  const shouldShowTips = showTips && messages.length > 1 && messages.length % 3 === 0;

  const handleMenuAction = async (action: string) => {
    setIsMenuOpen(false);
    
    const menuActions: Record<string, string> = {
      'main_menu': 'Show me the main menu of services',
      'talk_engineer': 'I would like to talk with a human engineer',
      'assessment_tools': 'Show me your assessment tools',
      'schedule_consultation': 'I want to schedule a consultation',
      'it_tips': 'Give me some IT tips and insights',
      'common_questions': 'What are some common questions about your services?',
      'restart_conversation': 'Let\'s start over - tell me about MBACIO services'
    };
    
    const message = menuActions[action] || action;
    await onSendMessage(message);
  };

  const handleTipClick = async (tip: SmartTip) => {
    setShowTips(false);
    await onSendMessage(tip.content);
  };

  const handleTalkWithEngineer = async () => {
    await onSendMessage('I would like to talk with a human engineer. Please connect me or provide contact information.');
  };

  // Calculate dynamic height based on message count
  const getMaxHeight = () => {
    const baseHeight = 400; // Base height
    const messageHeight = 60; // Approximate height per message
    const calculatedHeight = Math.min(baseHeight + (messages.length * messageHeight), window.innerHeight * 0.8);
    return `${calculatedHeight}px`;
  };

  return (
    <div 
      className="fixed bottom-24 right-6 z-50 max-w-sm w-full backdrop-blur-md bg-white/90 border border-white/20 rounded-2xl shadow-2xl flex flex-col animate-fade-in"
      style={{ 
        maxHeight: getMaxHeight(),
        backdropFilter: 'blur(16px) saturate(180%)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)'
      }}
    >
      {/* Header with glass effect */}
      <div className="relative flex items-center px-4 py-3 border-b border-white/20 rounded-t-2xl font-bold drop-shadow-header"
           style={{
             background: 'linear-gradient(135deg, rgba(250, 207, 57, 0.9), rgba(249, 195, 7, 0.9))',
             backdropFilter: 'blur(8px) saturate(150%)'
           }}>
        <button
          className="mr-2 text-navy hover:text-deep-blue transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Open Menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <img src={assistantIconUrl} className="w-8 h-8 mr-2" alt="Assistant Icon" />
        <div className="flex-1">
          <div className="font-bold text-navy">MBACIO Assistant</div>
          <div className="text-xs font-normal text-navy/75">Powered by AI • {pageName}</div>
        </div>
        
        <button
          className="mx-2 text-navy hover:text-deep-blue transition-colors p-1 rounded border border-navy/20 hover:bg-white/20 backdrop-blur-sm"
          onClick={handleTalkWithEngineer}
          aria-label="Talk with Engineer"
          title="Talk with Engineer"
        >
          <User className="w-4 h-4" />
        </button>
        
        <img
          src="/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png"
          className="h-6 w-auto ml-2"
          alt="MBACIO Logo"
          draggable={false}
        />
        <button
          className="ml-2 text-navy hover:text-red-500 text-xl font-bold transition-colors"
          onClick={onClose}
          aria-label="Close Chat"
        >
          <X className="w-5 h-5" />
        </button>

        <ChatMenu 
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen(!isMenuOpen)}
          onMenuAction={handleMenuAction}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>

      {/* Messages with glass backdrop */}
      <div className="flex-1 overflow-hidden backdrop-blur-sm">
        <ChatMessages messages={messages} isLoading={isLoading} />
      </div>

      {/* Smart Tips with glass effect */}
      <SmartTips 
        tips={contextualTips}
        onTipClick={handleTipClick}
        isVisible={shouldShowTips}
      />

      {/* Quick Actions & Input with glass effect */}
      <div className="px-4 pb-3 backdrop-blur-sm bg-white/5 rounded-b-2xl">
        <QuickActions 
          actions={currentQuickActions}
          onActionClick={onQuickAction}
          isLoading={isLoading}
        />

        <ChatInput onSendMessage={onSendMessage} isLoading={isLoading} />
        
        <div className="text-[10px] text-navy/60 pt-1 pl-1 font-medium">
          Innovation isn't a luxury. It's a necessity. MBACIO brings affordable tech breakthroughs to mid-market businesses.
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
