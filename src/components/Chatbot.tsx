
import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useChatEngagement } from "@/hooks/useChatEngagement";

const assistantIconUrl = "/lovable-uploads/6c02622d-f929-4272-8fb2-56a68e33cc30.png";

interface Message {
  from: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { shouldAutoOpen, pageContext, markAsAutoOpened } = useChatEngagement();

  // Handle auto-open functionality
  useEffect(() => {
    if (shouldAutoOpen && !open && !hasInitialized) {
      setOpen(true);
      markAsAutoOpened();
      
      // Set contextual welcome message
      const welcomeMessage: Message = {
        from: 'bot',
        text: pageContext.contextualGreeting,
        timestamp: new Date()
      };
      
      setMessages([welcomeMessage]);
      setHasInitialized(true);
    }
  }, [shouldAutoOpen, open, hasInitialized, pageContext, markAsAutoOpened]);

  // Initialize with default message when manually opened
  useEffect(() => {
    if (open && !hasInitialized && messages.length === 0) {
      const defaultWelcome = "👋 Hi! I'm the MBACIO Assistant powered by AI. I can help you with IT consulting, automation, cybersecurity, and more. How can I assist you today?";
      
      setMessages([{
        from: 'bot',
        text: defaultWelcome,
        timestamp: new Date()
      }]);
      setHasInitialized(true);
    }
  }, [open, hasInitialized, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessageToAI = async (message: string): Promise<string> => {
    try {
      // Enhanced context for AI
      const contextualMessage = `Page Context: ${pageContext.aiContext}\n\nUser Question: ${message}`;
      
      const { data, error } = await supabase.functions.invoke('chat-assistant', {
        body: { 
          message: contextualMessage,
          pageContext: pageContext.pageName
        }
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
    
    // Context-aware quick actions
    const contextualActions: Record<string, string> = {
      'Take IT Assessment': 'I want to take an IT assessment for my business',
      'Calculate ROI': 'Help me calculate potential ROI from automation',
      'Learn About Services': 'Tell me about your IT consulting services',
      'Schedule Consultation': 'I\'d like to schedule a consultation',
      'Get Service Pricing': 'What do your services cost?',
      'Compare Solutions': 'Help me compare different IT solutions',
      'Schedule Demo': 'Can you schedule a demo for me?',
      'Download Case Study': 'I\'d like to see relevant case studies',
      'See Guarantees': 'Tell me about your guarantees and warranties',
      'Read Reviews': 'Do you have customer testimonials?',
      'Compare Competitors': 'What makes MBACIO different from competitors?',
      'Book Assessment': 'I want to book a free assessment',
      'Automation ROI Calculator': 'Show me the automation ROI calculator',
      'Downtime Cost Tool': 'Help me calculate downtime costs',
      'Staff Productivity': 'Tell me about staff productivity improvements',
      'Schedule Follow-up': 'I need a follow-up consultation',
      'Related Services': 'What services relate to what I\'m reading?',
      'Similar Case Studies': 'Show me similar success stories',
      'Ask Questions': 'I have questions about this topic',
      'Get Updates': 'How can I stay updated on IT trends?',
      'Similar Businesses': 'Do you work with businesses like mine?',
      'ROI Examples': 'Show me ROI examples for my industry',
      'Schedule Discussion': 'Let\'s discuss my specific situation',
      'Get Custom Quote': 'I need a custom quote',
      'Explain Results': 'Help me understand these assessment results',
      'Next Steps': 'What should I do next?',
      'Try Other Tools': 'What other assessment tools do you have?',
      'General Questions': 'I have some general questions',
      'Service Info': 'Tell me more about your services',
      'Schedule Meeting': 'I want to schedule a meeting',
      'Use Tools': 'Show me your assessment tools'
    };
    
    message = contextualActions[action] || action;
    await handleSendMessage(message);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const messageText = input.trim();
    setInput("");
    await handleSendMessage(messageText);
  };

  const currentQuickActions = messages.length <= 1 ? pageContext.quickActions : [];

  return (
    <>
      {/* Enhanced Chat Button */}
      <button
        aria-label="Open chat"
        className={`fixed bottom-7 right-7 z-40 transition-all duration-300 group ${
          open ? 'scale-0' : 'scale-100 hover:scale-110'
        }`}
        onClick={() => setOpen(true)}
      >
        {/* Chat Bubble Design */}
        <div className="relative bg-gradient-yellow text-navy rounded-2xl shadow-xl border-2 border-navy overflow-hidden">
          {/* Pulse animation for attention */}
          <div className="absolute inset-0 bg-gradient-yellow rounded-2xl animate-ping opacity-20"></div>
          
          {/* Main button content */}
          <div className="relative flex items-center gap-3 px-4 py-3">
            <MessageCircle className="w-6 h-6" />
            <span className="font-bold text-sm whitespace-nowrap">Need Help?</span>
          </div>
          
          {/* Chat bubble tail */}
          <div className="absolute -bottom-1 right-4 w-3 h-3 bg-gradient-yellow border-r-2 border-b-2 border-navy transform rotate-45"></div>
        </div>
      </button>

      {/* Enhanced Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 max-w-sm w-full bg-white rounded-2xl shadow-2xl border border-accent flex flex-col animate-fade-in">
          {/* Header */}
          <div className="flex items-center px-4 py-3 border-b bg-gradient-yellow text-navy rounded-t-2xl font-bold drop-shadow-header">
            <img src={assistantIconUrl} className="w-8 h-8 mr-2" alt="Assistant Icon" />
            <div className="flex-1">
              <div className="font-bold">MBACIO Assistant</div>
              <div className="text-xs font-normal opacity-75">Powered by AI • {pageContext.pageName}</div>
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
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
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

          {/* Quick Actions & Input */}
          <div className="px-4 pb-3">
            {currentQuickActions.length > 0 && (
              <div className="flex gap-2 mb-3 flex-wrap">
                {currentQuickActions.map((action) => (
                  <button
                    key={action}
                    className="bg-gradient-yellow text-navy px-3 py-1 rounded-xl text-xs font-semibold shadow hover:bg-navy hover:text-accent transition border border-navy disabled:opacity-50"
                    onClick={() => handleQuickAction(action)}
                    disabled={isLoading}
                    aria-label={action}
                  >
                    {action}
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
              AI-powered • Context-aware assistance
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
