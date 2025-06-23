
import React, { useState } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => Promise<void>;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState("");

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
        className="flex-1 border border-accent rounded-xl px-3 py-2 text-navy focus:outline-accent bg-white disabled:opacity-50"
        placeholder="Type your message…"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isLoading}
        maxLength={500}
      />
      <button 
        type="submit" 
        className="text-accent hover:text-navy disabled:opacity-50" 
        aria-label="Send"
        disabled={isLoading || !input.trim()}
      >
        <span className="font-bold text-lg">➤</span>
      </button>
    </form>
  );
};

export default ChatInput;
