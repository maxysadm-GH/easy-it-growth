
import React from 'react';
import { X } from "lucide-react";
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import QuickActions from './QuickActions';
import { Message } from '@/types/chat';

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
  const currentQuickActions = messages.length <= 1 ? quickActions : [];

  return (
    <div className="fixed bottom-24 right-6 z-50 max-w-sm w-full bg-white rounded-2xl shadow-2xl border border-accent flex flex-col animate-fade-in">
      {/* Header */}
      <div className="flex items-center px-4 py-3 border-b bg-gradient-yellow text-navy rounded-t-2xl font-bold drop-shadow-header">
        <img src={assistantIconUrl} className="w-8 h-8 mr-2" alt="Assistant Icon" />
        <div className="flex-1">
          <div className="font-bold">MBACIO Assistant</div>
          <div className="text-xs font-normal opacity-75">Powered by AI • {pageName}</div>
        </div>
        <img
          src="/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png"
          className="h-6 w-auto ml-2"
          alt="MBACIO Logo"
          draggable={false}
        />
        <button
          className="ml-2 text-navy hover:text-red-500 text-xl font-bold"
          onClick={onClose}
          aria-label="Close Chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <ChatMessages messages={messages} isLoading={isLoading} />

      {/* Quick Actions & Input */}
      <div className="px-4 pb-3">
        <QuickActions 
          actions={currentQuickActions}
          onActionClick={onQuickAction}
          isLoading={isLoading}
        />

        <ChatInput onSendMessage={onSendMessage} isLoading={isLoading} />
        
        <div className="text-[10px] text-muted-foreground pt-1 pl-1">
          AI-powered • Context-aware assistance
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
