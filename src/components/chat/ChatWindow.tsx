
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
      className="fixed bottom-24 right-6 z-50 max-w-sm w-full flex flex-col animate-fade-in border border-white/30 rounded-2xl overflow-hidden"
      style={{ 
        maxHeight: getMaxHeight(),
        backdropFilter: 'blur(25px) saturate(180%)',
        background: 'rgba(255, 255, 255, 0.12)',
        boxShadow: `
          0 25px 50px -12px rgba(0, 0, 0, 0.25),
          0 0 0 1px rgba(255, 255, 255, 0.15),
          inset 0 1px 0 rgba(255, 255, 255, 0.2)
        `
      }}
    >
      {/* Transparent Glass Header */}
      <div className="relative flex items-center px-4 py-3 border-b border-white/20 font-bold"
           style={{
             backdropFilter: 'blur(20px) saturate(150%)',
             background: `
               linear-gradient(135deg, 
                 rgba(17, 45, 78, 0.3) 0%,
                 rgba(17, 45, 78, 0.2) 50%,
                 rgba(250, 207, 57, 0.25) 100%
               )
             `,
             borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
           }}>
        
        {/* Menu Button */}
        <button
          className="mr-2 p-1 rounded-lg transition-all duration-200 hover:bg-white/20 backdrop-blur-sm"
          style={{ color: 'rgba(17, 45, 78, 0.9)' }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Open Menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        {/* Assistant Icon with better contrast background */}
        <div className="relative mr-2">
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(10px)'
            }}
          />
          <img src={assistantIconUrl} className="relative w-8 h-8 rounded-full" alt="Assistant Icon" />
        </div>
        
        {/* Title with enhanced contrast */}
        <div className="flex-1">
          <div 
            className="font-bold text-sm"
            style={{ 
              color: 'rgba(17, 45, 78, 0.95)',
              textShadow: '0 1px 2px rgba(255, 255, 255, 0.3)'
            }}
          >
            MBACIO Assistant
          </div>
          <div 
            className="text-xs font-normal"
            style={{ 
              color: 'rgba(17, 45, 78, 0.7)',
              textShadow: '0 1px 1px rgba(255, 255, 255, 0.2)'
            }}
          >
            Powered by AI • {pageName}
          </div>
        </div>
        
        {/* Engineer Button */}
        <button
          className="mx-2 p-1 rounded border border-white/30 transition-all duration-200 hover:bg-white/20 backdrop-blur-sm"
          style={{ 
            color: 'rgba(17, 45, 78, 0.9)',
            background: 'rgba(255, 255, 255, 0.15)'
          }}
          onClick={handleTalkWithEngineer}
          aria-label="Talk with Engineer"
          title="Talk with Engineer"
        >
          <User className="w-4 h-4" />
        </button>
        
        {/* Logo with enhanced contrast background */}
        <div className="relative ml-2">
          <div 
            className="absolute inset-0 rounded"
            style={{
              background: 'rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(8px)',
              transform: 'scale(1.1)'
            }}
          />
          <img
            src="/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png"
            className="relative h-6 w-auto"
            alt="MBACIO Logo"
            draggable={false}
          />
        </div>
        
        {/* Close Button */}
        <button
          className="ml-2 p-1 rounded-lg transition-all duration-200 hover:bg-red-500/20 backdrop-blur-sm"
          style={{ color: 'rgba(17, 45, 78, 0.9)' }}
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

      {/* Messages with glass effect */}
      <div 
        className="flex-1 overflow-hidden"
        style={{
          backdropFilter: 'blur(15px)',
          background: 'rgba(255, 255, 255, 0.08)'
        }}
      >
        <ChatMessages messages={messages} isLoading={isLoading} />
      </div>

      {/* Smart Tips with glass effect */}
      <SmartTips 
        tips={contextualTips}
        onTipClick={handleTipClick}
        isVisible={shouldShowTips}
      />

      {/* Input Area with glass effect */}
      <div 
        className="px-4 pb-3 border-t border-white/20"
        style={{
          backdropFilter: 'blur(20px)',
          background: 'rgba(255, 255, 255, 0.1)'
        }}
      >
        <QuickActions 
          actions={currentQuickActions}
          onActionClick={onQuickAction}
          isLoading={isLoading}
        />

        <ChatInput onSendMessage={onSendMessage} isLoading={isLoading} />
        
        <div 
          className="text-[10px] pt-1 pl-1 font-medium"
          style={{ 
            color: 'rgba(17, 45, 78, 0.7)',
            textShadow: '0 1px 1px rgba(255, 255, 255, 0.3)'
          }}
        >
          Innovation isn't a luxury. It's a necessity. MBACIO brings affordable tech breakthroughs to mid-market businesses.
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
