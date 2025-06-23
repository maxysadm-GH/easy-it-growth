
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageContext {
  pageName: string;
  contextualGreeting: string;
  quickActions: string[];
  aiContext: string;
}

const getPageContext = (pathname: string): PageContext => {
  const pathMap: Record<string, PageContext> = {
    '/': {
      pageName: 'Homepage',
      contextualGreeting: "Hi! I see you're exploring MBACIO's services. I'm here to help you discover how we can transform your business with automation and IT solutions. What brings you here today?",
      quickActions: ['Take IT Assessment', 'Calculate ROI', 'Learn About Services', 'Schedule Consultation'],
      aiContext: 'User is on the homepage exploring MBACIO services. Focus on general IT consulting, automation benefits, and available assessment tools.'
    },
    '/services': {
      pageName: 'Services',
      contextualGreeting: "I see you're checking out our services! We offer bilingual IT consulting, automation, cybersecurity, and ERP integration. Which area interests you most?",
      quickActions: ['Get Service Pricing', 'Compare Solutions', 'Schedule Demo', 'Download Case Study'],
      aiContext: 'User is viewing services page. Focus on specific service offerings, pricing discussions, and matching solutions to their needs.'
    },
    '/why-us': {
      pageName: 'Why Us',
      contextualGreeting: "Learning about what makes MBACIO different? Our bilingual support, real-world experience, and 60-day warranty set us apart. What questions do you have?",
      quickActions: ['See Guarantees', 'Read Reviews', 'Compare Competitors', 'Book Assessment'],
      aiContext: 'User is learning about MBACIO differentiators. Emphasize unique value propositions, warranties, and competitive advantages.'
    },
    '/tools': {
      pageName: 'Assessment Tools',
      contextualGreeting: "Great choice exploring our assessment tools! These calculators help identify automation opportunities and potential savings. Need help interpreting any results?",
      quickActions: ['Automation ROI Calculator', 'Downtime Cost Tool', 'Staff Productivity', 'Schedule Follow-up'],
      aiContext: 'User is viewing assessment tools. Focus on helping with calculations, explaining results, and translating findings into actionable next steps.'
    },
    '/blog': {
      pageName: 'Blog',
      contextualGreeting: "Reading up on IT insights? Our blog covers real success stories and industry trends. What topics interest you most?",
      quickActions: ['Related Services', 'Similar Case Studies', 'Ask Questions', 'Get Updates'],
      aiContext: 'User is reading blog content. Focus on relating content to their potential needs and suggesting relevant services or tools.'
    },
    '/case-studies': {
      pageName: 'Case Studies',
      contextualGreeting: "Checking out our success stories? These real examples show how we've helped businesses like yours. Do you see similarities to your situation?",
      quickActions: ['Similar Businesses', 'ROI Examples', 'Schedule Discussion', 'Get Custom Quote'],
      aiContext: 'User is viewing case studies. Focus on finding parallels to their business and discussing similar transformation opportunities.'
    }
  };

  // Check for tool-specific pages
  if (pathname.startsWith('/tools/')) {
    return {
      pageName: 'Specific Tool',
      contextualGreeting: "I see you're using one of our assessment tools! These help identify opportunities for automation and cost savings. Need help understanding your results?",
      quickActions: ['Explain Results', 'Next Steps', 'Schedule Consultation', 'Try Other Tools'],
      aiContext: 'User is using a specific assessment tool. Focus on helping interpret results and suggesting next steps based on their findings.'
    };
  }

  return pathMap[pathname] || {
    pageName: 'MBACIO Site',
    contextualGreeting: "Hi! I'm here to help you with any questions about MBACIO's IT services, automation solutions, or assessment tools. How can I assist you?",
    quickActions: ['General Questions', 'Service Info', 'Schedule Meeting', 'Use Tools'],
    aiContext: 'User is browsing MBACIO website. Provide general assistance and guide them to relevant services or tools.'
  };
};

export const useChatEngagement = () => {
  const [shouldAutoOpen, setShouldAutoOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Reset auto-open state on route change
    setShouldAutoOpen(false);
    
    // Check if we've already auto-opened in this session
    const sessionKey = `mbacio-chat-opened-${Date.now()}`;
    const hasOpenedRecently = sessionStorage.getItem('mbacio-chat-recent');
    
    if (hasOpenedRecently) {
      setHasAutoOpened(true);
      return;
    }

    // Set 60-second timer for auto-open
    const timer = setTimeout(() => {
      if (!hasAutoOpened) {
        setShouldAutoOpen(true);
        sessionStorage.setItem('mbacio-chat-recent', 'true');
        // Clear the flag after 10 minutes
        setTimeout(() => {
          sessionStorage.removeItem('mbacio-chat-recent');
        }, 600000);
      }
    }, 60000); // 60 seconds

    return () => clearTimeout(timer);
  }, [location.pathname, hasAutoOpened]);

  const markAsAutoOpened = () => {
    setHasAutoOpened(true);
    setShouldAutoOpen(false);
  };

  const pageContext = getPageContext(location.pathname);

  return {
    shouldAutoOpen,
    pageContext,
    markAsAutoOpened
  };
};
