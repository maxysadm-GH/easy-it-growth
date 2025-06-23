
import React, { useRef, useEffect } from 'react';
import { Message } from '@/types/chat';
import { useBackgroundDetection } from '@/hooks/useBackgroundDetection';

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, isLoading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const backgroundContext = useBackgroundDetection();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="p-4 space-y-3 overflow-y-auto font-inter h-full">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`mb-2 max-w-[85%] rounded-lg px-3 py-2 break-words border transition-all duration-200 ${
            msg.from === "bot"
              ? "ml-0"
              : "ml-auto mr-0"
          }`}
          style={
            msg.from === "bot"
              ? { 
                  borderLeft: backgroundContext.isBlueBackground ? "3px solid rgba(250, 207, 57, 0.9)" : "3px solid rgba(250, 207, 57, 0.8)",
                  border: backgroundContext.isBlueBackground ? "1px solid rgba(250, 207, 57, 0.4)" : "1px solid rgba(250, 207, 57, 0.3)",
                  background: backgroundContext.isBlueBackground ? 'rgba(250, 207, 57, 0.2)' : 'rgba(250, 207, 57, 0.15)',
                  backdropFilter: 'blur(15px) saturate(150%)',
                  color: backgroundContext.isBlueBackground ? 'rgba(17, 45, 78, 0.98)' : 'rgba(17, 45, 78, 0.95)',
                  textShadow: backgroundContext.isBlueBackground ? '0 1px 2px rgba(255, 255, 255, 0.5)' : '0 1px 2px rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }
              : { 
                  borderRight: backgroundContext.isBlueBackground ? "3px solid rgba(250, 207, 57, 0.8)" : "3px solid rgba(17, 45, 78, 0.6)",
                  border: backgroundContext.isBlueBackground ? "1px solid rgba(250, 207, 57, 0.3)" : "1px solid rgba(17, 45, 78, 0.3)",
                  background: backgroundContext.isBlueBackground ? 'rgba(255, 255, 255, 0.25)' : 'rgba(17, 45, 78, 0.15)',
                  backdropFilter: 'blur(15px) saturate(150%)',
                  color: backgroundContext.isBlueBackground ? 'rgba(250, 207, 57, 0.98)' : 'rgba(17, 45, 78, 0.95)',
                  textShadow: backgroundContext.isBlueBackground ? '0 1px 2px rgba(17, 45, 78, 0.5)' : '0 1px 2px rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }
          }
        >
          <div className="whitespace-pre-wrap">{msg.text}</div>
          <div 
            className="text-xs mt-1"
            style={{ 
              color: backgroundContext.isBlueBackground ? 'rgba(250, 207, 57, 0.7)' : 'rgba(17, 45, 78, 0.6)',
              textShadow: '0 1px 1px rgba(255, 255, 255, 0.2)'
            }}
          >
            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      ))}
      
      {isLoading && (
        <div 
          className="ml-0 max-w-[85%] rounded-lg px-3 py-2 border"
          style={{ 
            borderLeft: backgroundContext.isBlueBackground ? "3px solid rgba(250, 207, 57, 0.9)" : "3px solid rgba(250, 207, 57, 0.8)",
            border: backgroundContext.isBlueBackground ? "1px solid rgba(250, 207, 57, 0.4)" : "1px solid rgba(250, 207, 57, 0.3)",
            background: backgroundContext.isBlueBackground ? 'rgba(250, 207, 57, 0.2)' : 'rgba(250, 207, 57, 0.15)',
            backdropFilter: 'blur(15px) saturate(150%)',
            color: backgroundContext.isBlueBackground ? 'rgba(17, 45, 78, 0.98)' : 'rgba(17, 45, 78, 0.95)',
            textShadow: backgroundContext.isBlueBackground ? '0 1px 2px rgba(255, 255, 255, 0.5)' : '0 1px 2px rgba(255, 255, 255, 0.3)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div 
                className="w-2 h-2 rounded-full animate-bounce" 
                style={{ 
                  backgroundColor: backgroundContext.isBlueBackground ? 'rgba(17, 45, 78, 0.8)' : 'rgba(17, 45, 78, 0.7)',
                  animationDelay: '0ms' 
                }}
              ></div>
              <div 
                className="w-2 h-2 rounded-full animate-bounce" 
                style={{ 
                  backgroundColor: backgroundContext.isBlueBackground ? 'rgba(17, 45, 78, 0.8)' : 'rgba(17, 45, 78, 0.7)',
                  animationDelay: '150ms' 
                }}
              ></div>
              <div 
                className="w-2 h-2 rounded-full animate-bounce" 
                style={{ 
                  backgroundColor: backgroundContext.isBlueBackground ? 'rgba(17, 45, 78, 0.8)' : 'rgba(17, 45, 78, 0.7)',
                  animationDelay: '300ms' 
                }}
              ></div>
            </div>
            <span className="text-sm ml-2">Thinking...</span>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
