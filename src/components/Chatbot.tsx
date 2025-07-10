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
  const { currentLanguage, t } = useLanguage();

  // Handle auto-open functionality
  useEffect(() => {
    if (shouldAutoOpen && !open && !hasInitialized) {
      setOpen(true);
      markAsAutoOpened();
      
      // Set contextual welcome message based on language
      const welcomeMessage: Message = {
        from: 'bot',
        text: currentLanguage === 'es' 
          ? "¡Hola! Soy el Asistente MBACIO. Puedo ayudarte con consultoría de TI, automatización, ciberseguridad y más. ¿Cómo puedo asistirte hoy?"
          : pageContext.contextualGreeting,
        timestamp: new Date()
      };
      
      setMessages([welcomeMessage]);
      setHasInitialized(true);
    }
  }, [shouldAutoOpen, open, hasInitialized, pageContext, markAsAutoOpened, currentLanguage]);

  // Initialize with default message when manually opened
  useEffect(() => {
    if (open && !hasInitialized && messages.length === 0) {
      const defaultWelcome = currentLanguage === 'es'
        ? "👋 ¡Hola! Soy el Asistente MBACIO impulsado por IA. Puedo ayudarte con consultoría de TI, automatización, ciberseguridad y más. ¿Cómo puedo asistirte hoy?"
        : "👋 Hi! I'm the MBACIO Assistant powered by AI. I can help you with IT consulting, automation, cybersecurity, and more. How can I assist you today?";
      
      setMessages([{
        from: 'bot',
        text: defaultWelcome,
        timestamp: new Date()
      }]);
      setHasInitialized(true);
    }
  }, [open, hasInitialized, messages.length, currentLanguage]);

  // Reset initialization when language changes to show appropriate welcome
  useEffect(() => {
    if (messages.length > 0) {
      const welcomeText = currentLanguage === 'es'
        ? "👋 ¡Hola! Soy el Asistente MBACIO impulsado por IA. Puedo ayudarte con consultoría de TI, automatización, ciberseguridad y más. ¿Cómo puedo asistirte hoy?"
        : "👋 Hi! I'm the MBACIO Assistant powered by AI. I can help you with IT consulting, automation, cybersecurity, and more. How can I assist you today?";
      
      setMessages(prev => [{
        from: 'bot',
        text: welcomeText,
        timestamp: new Date()
      }, ...prev.slice(1)]);
    }
  }, [currentLanguage]);

  const sendMessageToAI = async (message: string): Promise<string> => {
    try {
      // Enhanced context for AI including language preference
      const contextualMessage = `Language: ${currentLanguage}\nPage Context: ${pageContext.aiContext}\n\nUser Question: ${message}`;
      
      const { data, error } = await supabase.functions.invoke('chat-assistant', {
        body: { 
          message: contextualMessage,
          pageContext: pageContext.pageName,
          language: currentLanguage
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        return currentLanguage === 'es'
          ? "Estoy teniendo problemas para conectarme ahora. Por favor llama al (773) 657-2300 para asistencia inmediata, o usa el botón 'Hablar con Ingeniero' para ayuda humana."
          : "I'm having trouble connecting right now. Please call (773) 657-2300 for immediate assistance, or use the 'Talk with Engineer' button for human help.";
      }

      return data?.reply || (currentLanguage === 'es' 
        ? "No entendí eso. ¿Podrías reformular tu pregunta?"
        : "I didn't understand that. Could you please rephrase your question?");
    } catch (error) {
      console.error('Error calling chat assistant:', error);
      return currentLanguage === 'es'
        ? "Estoy experimentando dificultades técnicas. Por favor llama al (773) 657-2300 o envía un email a info@mbacio.com, o haz clic en 'Hablar con Ingeniero' para asistencia inmediata."
        : "I'm experiencing technical difficulties. Please call (773) 657-2300 or email info@mbacio.com for help, or click 'Talk with Engineer' for immediate assistance.";
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
