import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, TrendingUp, Shield } from 'lucide-react';

interface MidArticleCTAProps {
  variant?: 'assessment' | 'dashboard' | 'security';
  customTitle?: string;
  customDescription?: string;
}

const MidArticleCTA: React.FC<MidArticleCTAProps> = ({ 
  variant = 'assessment',
  customTitle,
  customDescription 
}) => {
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        location: 'blog_mid_article',
        action: variant
      });
    }
    
    if (variant === 'dashboard') {
      window.location.href = '/dashboard-solutions';
    } else if (variant === 'security') {
      window.location.href = '/tools/assessment-risk';
    } else {
      window.open('https://calendly.com/mbacio/assessment', '_blank', 'noopener,noreferrer');
    }
  };

  const variants = {
    assessment: {
      icon: Target,
      title: customTitle || "Ready to See How This Applies to Your Business?",
      description: customDescription || "Get a free assessment to identify specific opportunities for improvement in your operation.",
      buttonText: "Book Free Assessment",
      gradient: "from-navy to-deep-blue"
    },
    dashboard: {
      icon: TrendingUp,
      title: customTitle || "Want to See Real-Time Data Like This?",
      description: customDescription || "Explore our dashboard solutions and see how real-time insights can transform your business decisions.",
      buttonText: "View Dashboard Examples",
      gradient: "from-accent to-navy"
    },
    security: {
      icon: Shield,
      title: customTitle || "Concerned About Your Security?",
      description: customDescription || "Take our quick security assessment to identify vulnerabilities and get personalized recommendations.",
      buttonText: "Check Your Security",
      gradient: "from-deep-blue to-navy"
    }
  };

  const config = variants[variant];
  const Icon = config.icon;

  return (
    <Card className="my-8 border-2 border-accent/20 bg-gradient-to-br from-white to-accent/5">
      <CardContent className="p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-yellow rounded-full flex items-center justify-center">
            <Icon className="w-8 h-8 text-navy" />
          </div>
        </div>
        <h3 className="text-xl font-poppins font-bold text-navy mb-4">
          {config.title}
        </h3>
        <p className="text-gray-700 mb-6 max-w-md mx-auto">
          {config.description}
        </p>
        <Button
          size="lg"
          onClick={handleCTAClick}
          className="bg-gradient-yellow text-navy font-bold hover:scale-105 transition-transform duration-300"
        >
          {config.buttonText}
        </Button>
        <p className="text-xs text-gray-500 mt-3">
          🌟 Available in English & Spanish • No commitment required
        </p>
      </CardContent>
    </Card>
  );
};

export default MidArticleCTA;