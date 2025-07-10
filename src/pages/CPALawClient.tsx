
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTAButton from '@/components/ui/cta-button';
import { Scale, FileText, Shield, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Scale,
    title: "Case Management Automation",
    description: "Streamline case intake, document management, and client communications with intelligent workflow automation that reduces administrative burden.",
    outcome: "50% faster case processing"
  },
  {
    icon: FileText,
    title: "Document & Contract Intelligence",
    description: "AI-powered document review, contract analysis, and legal research that accelerates preparation while maintaining accuracy.",
    outcome: "60% time savings on research"
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    description: "Attorney-client privilege protection, secure communications, and automated compliance reporting that meets all legal industry requirements.",
    outcome: "100% compliance assurance"
  },
  {
    icon: Clock,
    title: "Billable Hours Optimization",
    description: "Automated time tracking, billing automation, and client portal access that improves cash flow and client satisfaction.",
    outcome: "25% increase in collections"
  }
];

const CPALawClient = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              Intelligent Technology Solutions for Law Firms
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              From case management to document intelligence, we help law firms automate routine tasks, 
              enhance client service, and focus on what matters most - practicing law.
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
              Specialized Technology for Legal Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique demands of legal practice - from confidentiality requirements 
              to billable hour pressures. Our solutions are designed specifically for law firms.
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
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Join law firms across Chicago who have automated routine tasks, improved client service, 
            and increased profitability with MBACIO's specialized legal technology solutions.
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

export default CPALawClient;
