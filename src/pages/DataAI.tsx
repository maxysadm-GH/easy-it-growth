
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AIInsights from '../components/AIInsights';
import { Button } from '@/components/ui/button';
import { Brain, BarChart3, Zap, Shield, CheckCircle, TrendingUp, Clock, Users } from 'lucide-react';
import { useState } from 'react';
import BookingPopup from '../components/BookingPopup';

const features = [
  {
    icon: BarChart3,
    title: "Dashboards & KPIs",
    description: "Real-time insights from Fishbowl, QuickBooks Online, and Shopify—no spreadsheets needed.",
    anchor: "dashboards"
  },
  {
    icon: Brain,
    title: "AI Copilot",
    description: "Anomaly detection, forecasts, and smart alerts that keep your operations running smoothly.",
    anchor: "ai-copilot"
  },
  {
    icon: Zap,
    title: "Automated Reports",
    description: "Inbox-ready reports for leadership, finance, and operations—delivered automatically.",
    anchor: "automated-reports"
  },
  {
    icon: Shield,
    title: "System Integrations",
    description: "Connect QuickBooks, Fishbowl, MySQL, Shopify, Excel, and Google Sheets seamlessly.",
    anchor: "integrations"
  }
];

const DataAI = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookAssessment = () => {
    setIsBookingOpen(true);
  };

  const scrollToSection = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
                  <button
                    key={index}
                    onClick={() => scrollToSection(feature.anchor)}
                    className="text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-20 h-20 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-navy" />
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-navy mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dashboards & KPIs Section */}
        <section id="dashboards" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="w-20 h-20 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-10 h-10 text-navy" />
                </div>
                <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
                  Dashboards & KPIs That Actually Matter
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Stop drowning in spreadsheets. Our intelligent dashboards pull data from all your systems 
                  and present actionable insights in real-time.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-6">Our Dashboard Superpowers</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-navy mb-1">Real-Time Data Sync</h4>
                        <p className="text-gray-600">Connect Fishbowl, QuickBooks, Shopify, and more for live updates</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <TrendingUp className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-navy mb-1">Predictive Analytics</h4>
                        <p className="text-gray-600">Forecast inventory needs, cash flow, and production demands</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Users className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-navy mb-1">Role-Based Views</h4>
                        <p className="text-gray-600">Custom dashboards for executives, managers, and operations teams</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h4 className="text-xl font-bold text-navy mb-4">Success Story</h4>
                  <p className="text-gray-700 leading-relaxed">
                    "MBACIO's dashboards eliminated our 3-hour morning routine of gathering reports from different systems. 
                    Now our team gets real-time visibility into inventory, sales, and production metrics in one place. 
                    We've reduced order processing time by 40% and haven't had a stockout in 6 months."
                  </p>
                  <p className="text-accent font-bold mt-4">- Manufacturing Client</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Copilot Section */}
        <section id="ai-copilot" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="w-20 h-20 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-10 h-10 text-navy" />
                </div>
                <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
                  AI Copilot: Your Smart Business Partner
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Our AI doesn't just report what happened—it predicts what's coming and tells you what to do about it.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold text-navy mb-4">AI in Action</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    "Our AI Copilot detected unusual supplier delivery patterns three weeks before our client's 
                    biggest sales season. It automatically suggested alternative suppliers and helped negotiate 
                    emergency stock arrangements. Result? Zero lost sales during peak season."
                  </p>
                  <p className="text-accent font-bold">- Food & Beverage Client</p>
                </div>
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-6">AI Copilot Capabilities</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Brain className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-navy mb-1">Anomaly Detection</h4>
                        <p className="text-gray-600">Spots unusual patterns before they become problems</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <TrendingUp className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-navy mb-1">Smart Forecasting</h4>
                        <p className="text-gray-600">Predicts demand, cash flow, and resource needs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Zap className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-navy mb-1">Proactive Alerts</h4>
                        <p className="text-gray-600">Intelligent notifications with recommended actions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automated Reports Section */}
        <section id="automated-reports" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="w-20 h-20 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-10 h-10 text-navy" />
                </div>
                <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
                  Reports That Show Up Ready to Use
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  No more spending hours creating reports. Our automated system delivers insights 
                  exactly when and how you need them.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-6">Automated Reporting Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-navy mb-1">Smart Scheduling</h4>
                        <p className="text-gray-600">Daily, weekly, monthly reports delivered automatically</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Users className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-navy mb-1">Role-Based Distribution</h4>
                        <p className="text-gray-600">Each team member gets exactly what they need</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-navy mb-1">Executive Summaries</h4>
                        <p className="text-gray-600">High-level insights with drill-down capabilities</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h4 className="text-xl font-bold text-navy mb-4">Time Savings Impact</h4>
                  <p className="text-gray-700 leading-relaxed">
                    "Before MBACIO, our CFO spent 6 hours every Monday morning creating financial reports 
                    for the executive team. Now those same reports—plus operational metrics—are in everyone's 
                    inbox by 8 AM Monday, formatted perfectly and ready for discussion."
                  </p>
                  <p className="text-accent font-bold mt-4">- CPA Firm Partner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Integrations Section */}
        <section id="integrations" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="w-20 h-20 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-navy" />
                </div>
                <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
                  Connect Everything, Control Everything
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Your business tools should talk to each other. Our integration platform makes 
                  data flow seamlessly between all your systems.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold text-navy mb-4">Integration Success</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    "We were manually entering the same data into QuickBooks, Fishbowl, and our inventory 
                    spreadsheets. MBACIO's integration eliminated triple data entry and the errors that came 
                    with it. Our inventory accuracy went from 85% to 99.7%."
                  </p>
                  <p className="text-accent font-bold">- Manufacturing Operations Manager</p>
                </div>
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-6">Integration Superpowers</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-navy mb-1">100+ Pre-Built Connectors</h4>
                        <p className="text-gray-600">Ready-to-use integrations for popular business tools</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Zap className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-navy mb-1">Real-Time Sync</h4>
                        <p className="text-gray-600">Data updates instantly across all connected systems</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-navy mb-1">Custom Integrations</h4>
                        <p className="text-gray-600">We build connections for any system you use</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
