
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AIInsights from '../components/AIInsights';
import { Button } from '@/components/ui/button';
import { Brain, BarChart3, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: "Dashboards & KPIs",
    description: "Real-time insights from Fishbowl, QuickBooks, Shopify—no spreadsheets needed. Visual data that drives decisions."
  },
  {
    icon: Brain,
    title: "AI Copilot",
    description: "Anomaly detection, forecasts, and smart alerts that keep you ahead of trends and potential issues."
  },
  {
    icon: Zap,
    title: "Automated Reports",
    description: "Inbox-ready reports for leadership, finance, and ops. Never manually compile data again."
  },
  {
    icon: Shield,
    title: "Seamless Integrations",
    description: "QuickBooks, Fishbowl, MySQL, Shopify, Excel/Sheets—all your data sources unified in one platform."
  }
];

const DataAI = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-slate-gray to-navy text-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-inter font-bold mb-8 drop-shadow-header">
              Your Data Should Work as Hard as You Do.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Transform scattered data into competitive intelligence with AI-powered dashboards, 
              automated reporting, and predictive analytics—all tailored to your industry.
            </p>
            <Button size="lg" className="bg-electric-blue text-white font-semibold text-xl px-10 py-6 glow-hover">
              Discover AI Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-electric-blue rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-inter font-bold text-navy mb-4">{feature.title}</h3>
                  <p className="text-slate-gray leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Insights Component */}
      <AIInsights />

      {/* CTA Section */}
      <section className="section-padding bg-navy text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-5xl font-inter font-bold mb-8 text-electric-blue">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Let's show you how AI can transform your business operations, 
            enhance decision-making, and drive unprecedented growth.
          </p>
          <Button size="lg" className="bg-electric-blue text-white font-semibold text-xl px-10 py-6 glow-hover">
            Book Your AI Assessment
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataAI;
