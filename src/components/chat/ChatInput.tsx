
import React, { useState } from 'react';
import { useBackgroundDetection } from '@/hooks/useBackgroundDetection';

interface ChatInputProps {
  onSendMessage: (message: string) => Promise<void>;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState("");
  const backgroundContext = useBackgroundDetection();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const messageText = input.trim();
    setInput("");
    await onSendMessage(messageText);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        className="flex-1 border rounded-xl px-3 py-2 text-navy focus:outline-none disabled:opacity-50 transition-all duration-200"
        placeholder="Type your message…"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isLoading}
        maxLength={500}
        style={{
          background: backgroundContext.adaptiveColors.inputBackground,
          borderColor: backgroundContext.isBlueBackground ? 'rgba(250, 207, 57, 0.4)' : 'rgba(17, 45, 78, 0.3)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)'
        }}
      />
      <button 
        type="submit" 
        className="transition-all duration-200 disabled:opacity-50 p-2 rounded-lg backdrop-blur-sm hover:bg-white/20" 
        aria-label="Send"
        disabled={isLoading || !input.trim()}
        style={{
          color: backgroundContext.adaptiveColors.accentColor,
          background: 'rgba(255, 255, 255, 0.15)',
          border: `1px solid ${backgroundContext.isBlueBackground ? 'rgba(250, 207, 57, 0.3)' : 'rgba(17, 45, 78, 0.2)'}`,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}
      >
        <span className="font-bold text-lg">➤</span>
      </button>
    </form>
  );
};

export default ChatInput;
