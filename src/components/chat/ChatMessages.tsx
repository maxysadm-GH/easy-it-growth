
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
    <div className="p-4 space-y-3 max-h-80 overflow-y-auto font-inter">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`mb-2 max-w-[85%] rounded-lg px-3 py-2 break-words ${
            msg.from === "bot"
              ? "bg-gradient-yellow/25 text-navy ml-0"
              : "bg-accent text-navy ml-auto mr-0"
          }`}
          style={
            msg.from === "bot"
              ? { borderLeft: "4px solid #FACF39" }
              : { borderRight: "4px solid #FACF39" }
          }
        >
          <div className="whitespace-pre-wrap">{msg.text}</div>
          <div className="text-xs opacity-60 mt-1">
            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      ))}
      
      {isLoading && (
        <div className="bg-gradient-yellow/25 text-navy ml-0 max-w-[85%] rounded-lg px-3 py-2" style={{ borderLeft: "4px solid #FACF39" }}>
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
