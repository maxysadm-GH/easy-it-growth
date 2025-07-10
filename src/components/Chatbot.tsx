
import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useChatEngagement } from "@/hooks/useChatEngagement";
import { useBackgroundDetection } from "@/hooks/useBackgroundDetection";
import { useLanguage } from "@/contexts/LanguageContext";
import { Message } from "@/types/chat";
import ChatButton from "./chat/ChatButton";
import ChatWindow from "./chat/ChatWindow";
import FloatingBookingWidget from "./FloatingBookingWidget";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  
  const { shouldAutoOpen, pageContext, markAsAutoOpened } = useChatEngagement();
  const backgroundContext = useBackgroundDetection();
  const { t } = useLanguage();

  // Handle auto-open functionality
  useEffect(() => {
    if (shouldAutoOpen && !open && !hasInitialized) {
      setOpen(true);
      markAsAutoOpened();
      
      // Set contextual welcome message
      const welcomeMessage: Message = {
        from: 'bot',
        text: t('chat.contextualWelcome'),
        timestamp: new Date()
      };
      
      setMessages([welcomeMessage]);
      setHasInitialized(true);
    }
  }, [shouldAutoOpen, open, hasInitialized, pageContext, markAsAutoOpened, t]);

  // Initialize with default message when manually opened
  useEffect(() => {
    if (open && !hasInitialized && messages.length === 0) {
      const defaultWelcome = t('chat.welcome');
      
      setMessages([{
        from: 'bot',
        text: defaultWelcome,
        timestamp: new Date()
      }]);
      setHasInitialized(true);
    }
  }, [open, hasInitialized, messages.length, t]);

  const sendMessageToAI = async (message: string): Promise<string> => {
    try {
      // Enhanced context for AI
      const contextualMessage = `Language: en\nPage Context: ${pageContext.aiContext}\n\nUser Question: ${message}`;
      
      const { data, error } = await supabase.functions.invoke('chat-assistant', {
        body: { 
          message: contextualMessage,
          pageContext: pageContext.pageName,
          language: 'en'
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        return "I'm having trouble connecting right now. Please call (773) 657-2300 for immediate assistance, or use the 'Talk with Engineer' button for human help.";
      }

      return data?.reply || "I didn't understand that. Could you please rephrase your question?";
    } catch (error) {
      console.error('Error calling chat assistant:', error);
      return "I'm experiencing technical difficulties. Please call (773) 657-2300 or email info@mbacio.com for help, or click 'Talk with Engineer' for immediate assistance.";
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
    
    const message = contextualActions[action] || action;
    await handleSendMessage(message);
  };

  return (
    <>
      <ChatButton onClick={() => setOpen(true)} isOpen={open} />

      {open && (
        <ChatWindow
          messages={messages}
          isLoading={isLoading}
          quickActions={pageContext.quickActions}
          pageName={pageContext.pageName}
          onClose={() => setOpen(false)}
          onSendMessage={handleSendMessage}
          onQuickAction={handleQuickAction}
        />
      )}

      <FloatingBookingWidget />
    </>
  );
};

export default Chatbot;
