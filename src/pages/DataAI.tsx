
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AIInsights from '../components/AIInsights';
import { Button } from '@/components/ui/button';
import { Brain, BarChart3, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI Copilot",
    description: "Your intelligent assistant for IT operations, predictive maintenance, and automated decision-making."
  },
  {
    icon: BarChart3,
    title: "Smart Dashboards",
    description: "Real-time insights and analytics that turn your data into actionable business intelligence."
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Intelligent automation that learns from your processes and optimizes them continuously."
  },
  {
    icon: Shield,
    title: "Predictive Security",
    description: "AI-powered threat detection and prevention that stays ahead of emerging cybersecurity risks."
  }
];

const DataAI = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              AI-Powered Business Intelligence
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Transform your data into competitive advantage with our AI copilot, 
              smart dashboards, and predictive analytics—all tailored to your industry.
            </p>
            <Button size="lg" className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300">
              Discover AI Solutions
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
          <Button size="lg" className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300">
            Book Your AI Assessment
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataAI;
