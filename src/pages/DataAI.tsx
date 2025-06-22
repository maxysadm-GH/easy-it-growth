
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AIInsights from '../components/AIInsights';
import { Button } from '@/components/ui/button';
import { Brain, BarChart3, Zap, Shield } from 'lucide-react';
import { useState } from 'react';
import BookingPopup from '../components/BookingPopup';

const features = [
  {
    icon: BarChart3,
    title: "Dashboards & KPIs",
    description: "Real-time insights from Fishbowl, QuickBooks Online, and Shopify—no spreadsheets needed."
  },
  {
    icon: Brain,
    title: "AI Copilot",
    description: "Anomaly detection, forecasts, and smart alerts that keep your operations running smoothly."
  },
  {
    icon: Zap,
    title: "Automated Reports",
    description: "Inbox-ready reports for leadership, finance, and operations—delivered automatically."
  },
  {
    icon: Shield,
    title: "System Integrations",
    description: "Connect QuickBooks, Fishbowl, MySQL, Shopify, Excel, and Google Sheets seamlessly."
  }
];

const DataAI = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookAssessment = () => {
    setIsBookingOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
                Your Data Should Work as Hard as You Do
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
                Explore MBACIO's AI-powered dashboards and reporting tools for operations, 
                finance, and IT automation that transforms data into competitive advantage.
              </p>
              <Button 
                onClick={handleBookAssessment}
                size="lg" 
                className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
              >
                Book Your Free Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-navy" />
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-navy mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI Insights Component */}
        <AIInsights />

        {/* CTA Section */}
        <section className="py-20 bg-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8 text-accent">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Let's show you how AI can transform your business operations, 
              enhance decision-making, and drive unprecedented growth.
            </p>
            <Button 
              onClick={handleBookAssessment}
              size="lg" 
              className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
            >
              Book Your Free Assessment
            </Button>
          </div>
        </section>

        <Footer />
      </div>

      {/* Booking Popup */}
      <BookingPopup 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
};

export default DataAI;
