
import React, { useState } from 'react';
import { X, Menu, User } from "lucide-react";
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import QuickActions from './QuickActions';
import ChatMenu from './ChatMenu';
import SmartTips from './SmartTips';
import { Message } from '@/types/chat';
import { getContextualTips, SmartTip } from '@/data/smartTips';
import { useBackgroundDetection } from '@/hooks/useBackgroundDetection';
import ChatHealthMonitor from './ChatHealthMonitor';
import OfflineWelcome from './OfflineWelcome';
import EnhancedQuickActions from './EnhancedQuickActions';

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
  const [isAIHealthy, setIsAIHealthy] = useState(true);
  const backgroundContext = useBackgroundDetection();
  
  const currentQuickActions = messages.length <= 1 ? quickActions : [];
  const contextualTips = getContextualTips(pageName.toLowerCase(), messages.length);
  const shouldShowTips = showTips && messages.length > 1 && messages.length % 3 === 0;

  // Show offline welcome only if AI is down AND no conversation has started
  const showOfflineWelcome = !isAIHealthy && messages.length <= 1;

  const handleMenuAction = async (action: string) => {
    setIsMenuOpen(false);
    
    if (action === 'assessment_tools') {
      window.location.href = '/tools';
      return;
    }
    
    const menuActions: Record<string, string> = {
      'main_menu': 'Show me the main menu of services',
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

  const handleAIHealthChange = (healthy: boolean) => {
    setIsAIHealthy(healthy);
  };

  const getMaxHeight = () => {
    const viewportHeight = window.innerHeight;
    const baseHeight = Math.min(500, viewportHeight * 0.75);
    const messageHeight = 60;
    const calculatedHeight = Math.min(baseHeight + (messages.length * messageHeight * 0.5), viewportHeight * 0.85);
    return `${Math.max(calculatedHeight, 400)}px`;
  };

  return (
    <div 
      className="fixed bottom-24 right-6 z-50 max-w-sm w-full flex flex-col animate-fade-in border border-white/40 rounded-2xl overflow-hidden"
      style={{ 
        height: getMaxHeight(),
        backdropFilter: 'blur(20px) saturate(150%)',
        background: 'rgba(255, 255, 255, 0.18)',
        boxShadow: `
          0 25px 50px -12px rgba(0, 0, 0, 0.3),
          0 0 0 1px rgba(255, 255, 255, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.3)
        `
      }}
    >
      {/* Header */}
      <div className="relative flex items-center px-4 py-3 border-b border-white/30 font-bold transition-all duration-300 flex-shrink-0"
           style={{
             backdropFilter: 'blur(20px) saturate(150%)',
             background: backgroundContext.adaptiveColors.headerBackground,
             borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
           }}>
        
        {/* Menu Button */}
        <button
          className="mr-2 p-1 rounded-lg transition-all duration-200 hover:bg-white/25 backdrop-blur-sm"
          style={{ color: backgroundContext.adaptiveColors.textColor }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Open Menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        {/* Assistant Icon */}
        <div className="relative mr-2">
          <div 
            className="absolute inset-0 rounded-full transition-all duration-300"
            style={{
              background: backgroundContext.adaptiveColors.logoBackground,
              backdropFilter: 'blur(15px) saturate(180%)',
              transform: 'scale(1.15)',
              boxShadow: backgroundContext.isBlueBackground 
                ? '0 0 20px rgba(250, 207, 57, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                : '0 0 15px rgba(17, 45, 78, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
              border: backgroundContext.isBlueBackground 
                ? '1px solid rgba(250, 207, 57, 0.4)'
                : '1px solid rgba(17, 45, 78, 0.3)'
            }}
          />
          <img src={assistantIconUrl} className="relative w-8 h-8 rounded-full" alt="Assistant Icon" />
        </div>
        
        {/* Title with AI Health Status */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="font-bold text-sm transition-all duration-300"
                 style={{ 
                   color: backgroundContext.adaptiveColors.textColor,
                   textShadow: backgroundContext.adaptiveColors.textShadow
                 }}>
              MBACIO Assistant
            </div>
            <ChatHealthMonitor onHealthChange={handleAIHealthChange} />
          </div>
          <div 
            className="text-xs font-normal transition-all duration-300"
            style={{ 
              color: backgroundContext.isBlueBackground 
                ? 'rgba(250, 207, 57, 0.9)' 
                : backgroundContext.adaptiveColors.textColor.replace('0.98', '0.8'),
              textShadow: backgroundContext.adaptiveColors.textShadow
            }}
          >
            {isAIHealthy ? `Powered by AI • ${pageName}` : `Always Available • ${pageName}`}
          </div>
        </div>
        
        {/* Logo */}
        <div className="relative ml-2">
          <div 
            className="absolute inset-0 rounded transition-all duration-300"
            style={{
              background: backgroundContext.adaptiveColors.logoBackground,
              backdropFilter: 'blur(15px) saturate(180%)',
              transform: 'scale(1.2)',
              boxShadow: backgroundContext.isBlueBackground 
                ? '0 0 25px rgba(250, 207, 57, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                : '0 0 20px rgba(17, 45, 78, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
              border: backgroundContext.isBlueBackground 
                ? '1px solid rgba(250, 207, 57, 0.6)'
                : '1px solid rgba(17, 45, 78, 0.4)'
            }}
          />
          <img
            src="/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png"
            className="relative h-6 w-auto transition-all duration-300"
            alt="MBACIO Logo"
            draggable={false}
            style={{
              filter: backgroundContext.isBlueBackground 
                ? 'drop-shadow(0 0 12px rgba(250, 207, 57, 0.8)) brightness(1.2) contrast(1.1)'
                : 'drop-shadow(0 0 8px rgba(17, 45, 78, 0.6)) brightness(1.1) contrast(1.05)'
            }}
          />
        </div>
        
        {/* Close Button */}
        <button
          className="ml-2 p-1 rounded-lg transition-all duration-200 hover:bg-red-500/25 backdrop-blur-sm"
          style={{ color: backgroundContext.adaptiveColors.textColor }}
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

      {/* Messages Area or Offline Welcome */}
      <div className="flex-1 min-h-0 overflow-hidden">
        {showOfflineWelcome ? (
          <OfflineWelcome />
        ) : (
          <ChatMessages messages={messages} isLoading={isLoading} />
        )}
      </div>

      {/* Smart Tips */}
      {!showOfflineWelcome && (
        <SmartTips 
          tips={contextualTips}
          onTipClick={handleTipClick}
          isVisible={shouldShowTips}
        />
      )}

      {/* Input Area */}
      {!showOfflineWelcome && (
        <div className="px-4 pb-3 border-t border-white/30 flex-shrink-0"
             style={{
               backdropFilter: 'blur(20px)',
               background: backgroundContext.adaptiveColors.footerBackground
             }}>
          
          <EnhancedQuickActions 
            actions={currentQuickActions}
            onActionClick={onQuickAction}
            onDirectCTA={() => {}} // Removed since floating widget handles CTAs
            isLoading={isLoading}
          />

          {/* Always show chat input, but with warning if AI is down */}
          <ChatInput onSendMessage={onSendMessage} isLoading={isLoading} />
          
          {/* AI Status Warning */}
          {!isAIHealthy && (
            <div 
              className="text-xs text-center mt-1 p-1 rounded"
              style={{ 
                color: 'rgba(255, 165, 0, 0.9)',
                background: 'rgba(255, 165, 0, 0.1)'
              }}
            >
              AI responses may be delayed. Use the booking widget for immediate help.
            </div>
          )}
          
          {/* Footer */}
          <div 
            className="text-[10px] pt-2 pl-1 font-medium transition-all duration-300 px-2 py-1 rounded-md mt-1"
            style={{ 
              color: backgroundContext.adaptiveColors.footerTextColor,
              textShadow: backgroundContext.adaptiveColors.textShadow,
              background: backgroundContext.isBlueBackground 
                ? 'rgba(17, 45, 78, 0.4)' 
                : 'rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${backgroundContext.isBlueBackground ? 'rgba(250, 207, 57, 0.3)' : 'rgba(17, 45, 78, 0.2)'}`,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            Innovation isn't a luxury. It's a necessity. MBACIO brings affordable tech breakthroughs to mid-market businesses.
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
