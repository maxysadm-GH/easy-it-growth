
import React, { useRef, useEffect } from 'react';
import { Message } from '@/types/chat';

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, isLoading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
          className={`mb-2 max-w-[85%] rounded-lg px-3 py-2 break-words backdrop-blur-sm ${
            msg.from === "bot"
              ? "ml-0"
              : "ml-auto mr-0"
          }`}
          style={
            msg.from === "bot"
              ? { 
                  borderLeft: "4px solid #FACF39",
                  background: 'linear-gradient(135deg, rgba(250, 207, 57, 0.25), rgba(249, 195, 7, 0.15))',
                  backdropFilter: 'blur(8px)',
                  color: '#112d4e'
                }
              : { 
                  borderRight: "4px solid #FACF39",
                  background: 'rgba(250, 207, 57, 0.9)',
                  backdropFilter: 'blur(8px)',
                  color: '#112d4e',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }
          }
        >
          <div className="whitespace-pre-wrap">{msg.text}</div>
          <div className="text-xs opacity-60 mt-1">
            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      ))}
      
      {isLoading && (
        <div 
          className="ml-0 max-w-[85%] rounded-lg px-3 py-2 backdrop-blur-sm" 
          style={{ 
            borderLeft: "4px solid #FACF39",
            background: 'linear-gradient(135deg, rgba(250, 207, 57, 0.25), rgba(249, 195, 7, 0.15))',
            backdropFilter: 'blur(8px)',
            color: '#112d4e'
          }}
        >
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-navy rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-navy rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-navy rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
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
