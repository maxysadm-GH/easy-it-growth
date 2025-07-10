
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTAButton from '@/components/ui/cta-button';
import { Truck, Factory, Shield, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Factory,
    title: "Production Line Integration",
    description: "Connect your manufacturing systems for real-time visibility into inventory, quality control, and production efficiency.",
    outcome: "25% reduction in waste"
  },
  {
    icon: Truck,
    title: "Supply Chain Automation",
    description: "Automated vendor management, purchase orders, and inventory tracking that prevents stockouts and overstock situations.",
    outcome: "40% faster order processing"
  },
  {
    icon: Shield,
    title: "Food Safety Compliance",
    description: "Digital tracking and reporting systems that ensure HACCP, FDA, and industry-specific compliance requirements are met automatically.",
    outcome: "100% audit readiness"
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Real-time dashboards showing production metrics, cost analysis, and operational efficiency to drive data-informed decisions.",
    outcome: "15% cost reduction"
  }
];

const FoodBeverageClient = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              Transform Your Food & Beverage Operations with Smart Technology
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              From production line efficiency to supply chain visibility, we help food and beverage manufacturers 
              automate operations, ensure compliance, and drive profitability.
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
              Specialized Solutions for Food & Beverage Manufacturing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of food and beverage manufacturing - from regulatory compliance 
              to supply chain complexity. Our solutions are built specifically for your industry.
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
            Ready to Modernize Your Manufacturing Operations?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Join food and beverage manufacturers across Chicago who have streamlined operations, 
            improved compliance, and increased profitability with MBACIO's specialized solutions.
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

export default FoodBeverageClient;
