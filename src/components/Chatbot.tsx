
import React, { useState, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const assistantIconUrl = "/lovable-uploads/6c02622d-f929-4272-8fb2-56a68e33cc30.png";

interface Message {
  from: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const quickActions = [
  { label: "Schedule Consultation", value: "schedule" },
  { label: "IT Services", value: "services" },
  { label: "Pricing Info", value: "pricing" },
  { label: "Automation ROI", value: "automation" },
];

const defaultWelcome = "👋 Hi! I'm the MBACIO Assistant powered by AI. I can help you with IT consulting, automation, cybersecurity, and more. How can I assist you today?";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: defaultWelcome, timestamp: new Date() },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessageToAI = async (message: string): Promise<string> => {
    try {
      const { data, error } = await supabase.functions.invoke('chat-assistant', {
        body: { message }
      });

      if (error) {
        console.error('Supabase function error:', error);
        return "I'm having trouble connecting right now. Please call (773) 657-2300 for immediate assistance.";
      }

      return data?.reply || "I didn't understand that. Could you please rephrase your question?";
    } catch (error) {
      console.error('Error calling chat assistant:', error);
      return "I'm experiencing technical difficulties. Please call (773) 657-2300 or email info@mbacio.com for help.";
    }
  };

  const handleSendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage: Message = {
      from: 'user',
      text: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Get AI response
    const aiResponse = await sendMessageToAI(messageText);
    
    const botMessage: Message = {
      from: 'bot',
      text: aiResponse,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handleQuickAction = async (action: string) => {
    let message = "";
    switch (action) {
      case "schedule":
        message = "I'd like to schedule a consultation";
        break;
      case "services":
        message = "What IT services do you offer?";
        break;
      case "pricing":
        message = "How much do your services cost?";
        break;
      case "automation":
        message = "Tell me about automation and ROI";
        break;
      default:
        message = action;
    }
    
    await handleSendMessage(message);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const messageText = input.trim();
    setInput("");
    await handleSendMessage(messageText);
  };

  return (
    <>
      <button
        aria-label="Open chat"
        className="fixed bottom-7 right-7 z-40 bg-gradient-yellow text-navy p-3 rounded-full shadow-xl hover:scale-110 focus:outline-none transition"
        onClick={() => setOpen(prev => !prev)}
        style={{ border: "2px solid #112d4e" }}
      >
        <img src={assistantIconUrl} alt="Assistant" className="w-8 h-8" />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 max-w-sm w-full bg-white rounded-2xl shadow-2xl border border-accent flex flex-col animate-fade-in">
          <div className="flex items-center px-4 py-3 border-b bg-gradient-yellow text-navy rounded-t-2xl font-bold drop-shadow-header">
            <img src={assistantIconUrl} className="w-8 h-8 mr-2" alt="Assistant Icon" />
            <div className="flex-1">
              <div className="font-bold">MBACIO Assistant</div>
              <div className="text-xs font-normal opacity-75">Powered by AI</div>
            </div>
            <img
              src="/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png"
              className="h-6 w-auto ml-2"
              alt="MBACIO Logo"
              draggable={false}
            />
            <button
              className="ml-2 text-navy hover:text-red-500 text-xl font-bold"
              onClick={() => setOpen(false)}
              aria-label="Close Chat"
            >
              ×
            </button>
          </div>

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

          <div className="px-4 pb-3">
            {messages.length <= 1 && (
              <div className="flex gap-2 mb-3 flex-wrap">
                {quickActions.map((action) => (
                  <button
                    key={action.value}
                    className="bg-gradient-yellow text-navy px-3 py-1 rounded-xl flex items-center gap-1 text-xs font-semibold shadow hover:bg-navy hover:text-accent transition border border-navy disabled:opacity-50"
                    onClick={() => handleQuickAction(action.value)}
                    disabled={isLoading}
                    aria-label={action.label}
                    style={{ fontWeight: 700 }}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}

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
            
            <div className="text-[10px] text-muted-foreground pt-1 pl-1">
              AI-powered • Chicago-based, nation-wide support
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
