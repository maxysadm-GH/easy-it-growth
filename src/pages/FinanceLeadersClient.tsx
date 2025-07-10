
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTAButton from '@/components/ui/cta-button';
import { Calculator, TrendingUp, Shield, Users } from 'lucide-react';

const benefits = [
  {
    icon: Calculator,
    title: "Automated Bookkeeping & Reporting",
    description: "Eliminate manual data entry with intelligent automation that connects your clients' systems to generate accurate, real-time financial reports.",
    outcome: "70% reduction in manual work"
  },
  {
    icon: TrendingUp,
    title: "Client Advisory Intelligence",
    description: "Advanced analytics and forecasting tools that help you provide strategic insights and advisory services that go beyond traditional accounting.",
    outcome: "40% increase in advisory revenue"
  },
  {
    icon: Shield,
    title: "Tax Season Automation",
    description: "Streamlined tax preparation with automated document collection, data validation, and compliance checking that reduces stress and errors.",
    outcome: "50% faster tax processing"
  },
  {
    icon: Users,
    title: "Client Portal & Communication",
    description: "Secure client portals with automated communication workflows that improve client satisfaction while reducing administrative overhead.",
    outcome: "90% client satisfaction rate"
  }
];

const FinanceLeadersClient = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              Advanced Technology Solutions for Accounting Firms
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              From automated bookkeeping to client advisory intelligence, we help accounting firms 
              eliminate manual tasks, enhance client service, and scale their practice profitably.
            </p>
            <CTAButton 
              ctaId="book-assessment"
              variant="yellow"
              size="lg"
              className="text-xl px-10 py-6"
              forcePopup={true}
            />
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-navy mb-6">
              Specialized Technology for Accounting Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the complexities of modern accounting practice - from compliance requirements 
              to client expectations. Our solutions are built specifically for accounting professionals.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="group hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-accent/20 h-full">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-yellow rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-navy" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-poppins font-bold text-navy">{benefit.title}</h3>
                          <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                            {benefit.outcome}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8 text-accent">
            Ready to Scale Your Accounting Practice?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Join accounting firms across Chicago who have automated routine tasks, enhanced client advisory services, 
            and increased profitability with MBACIO's specialized accounting technology solutions.
          </p>
          <CTAButton 
            ctaId="book-assessment"
            variant="yellow"
            size="lg"
            className="text-xl px-10 py-6"
            forcePopup={true}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinanceLeadersClient;
