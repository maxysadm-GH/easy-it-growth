import React, { useState } from 'react';
import { X, Menu, Phone, Calculator, Calendar, MessageSquare } from "lucide-react";
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import QuickActions from './QuickActions';
import ChatMenu from './ChatMenu';
import SmartTips from './SmartTips';
import { Message } from '@/types/chat';
import { getContextualTips, SmartTip } from '@/data/smartTips';
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

  const handleDirectBooking = () => {
    window.open('https://calendly.com/mbacio-consult', '_blank');
  };

  const handleCallNow = () => {
    window.location.href = 'tel:(773) 657-2300';
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 max-w-sm w-full flex flex-col animate-fade-in bg-background border border-border rounded-xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={assistantIconUrl} className="w-8 h-8 rounded-full" alt="MBACIO Assistant" />
          <div>
            <div className="font-semibold text-sm">MBACIO Assistant</div>
            <div className="text-xs opacity-90">
              {isAIHealthy ? `AI Powered • ${pageName}` : `Always Available • ${pageName}`}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <ChatHealthMonitor onHealthChange={handleAIHealthChange} />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1 rounded hover:bg-primary-foreground/20 transition-colors"
            aria-label="Open Menu"
          >
            <Menu className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-primary-foreground/20 transition-colors"
            aria-label="Close Chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <ChatMenu 
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen(!isMenuOpen)}
          onMenuAction={handleMenuAction}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>

      {/* Lead Capture Banner */}
      <div className="bg-yellow text-navy px-4 py-2 border-b border-border">
        <div className="text-xs font-medium text-center">
          🎯 Get ROI-guaranteed IT transformation in 6 weeks
        </div>
      </div>

      {/* Quick CTAs */}
      <div className="bg-muted/50 px-4 py-3 border-b border-border">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleDirectBooking}
            className="flex items-center gap-2 px-3 py-2 bg-yellow text-navy rounded-lg text-xs font-medium hover:bg-yellow/90 transition-colors"
          >
            <Calendar className="w-3 h-3" />
            Free Consultation
          </button>
          <button
            onClick={handleCallNow}
            className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-medium hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-3 h-3" />
            Call Now
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <button
            onClick={() => window.location.href = '/tools/automation-roi'}
            className="flex items-center gap-2 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg text-xs font-medium hover:bg-secondary/90 transition-colors"
          >
            <Calculator className="w-3 h-3" />
            ROI Calculator
          </button>
          <button
            onClick={() => onSendMessage('Tell me about your pricing and service plans')}
            className="flex items-center gap-2 px-3 py-2 bg-accent text-accent-foreground rounded-lg text-xs font-medium hover:bg-accent/90 transition-colors"
          >
            <MessageSquare className="w-3 h-3" />
            Get Pricing
          </button>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="bg-muted px-4 py-2 border-b border-border">
        <div className="text-xs text-muted-foreground">
          ✅ 100% Bilingual Support • ✅ 60-Day Warranty • ✅ 20+ Years Manufacturing Experience
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-hidden" style={{ height: '300px', minHeight: '300px' }}>
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
        <div className="bg-background border-t border-border px-4 py-3">
          <EnhancedQuickActions 
            actions={currentQuickActions}
            onActionClick={onQuickAction}
            onDirectCTA={() => {}}
            isLoading={isLoading}
          />

          <ChatInput onSendMessage={onSendMessage} isLoading={isLoading} />
          
          {/* AI Status Warning */}
          {!isAIHealthy && (
            <div className="text-xs text-center mt-2 p-2 bg-yellow/20 text-yellow-800 rounded">
              AI responses may be delayed. Use Quick Actions above for immediate help.
            </div>
          )}
          
          {/* Trust Footer */}
          <div className="text-xs text-muted-foreground text-center mt-2 leading-relaxed">
            🔒 Confidential • 📞 (773) 657-2300 • 🌟 ROI Guaranteed in 6 Weeks
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;