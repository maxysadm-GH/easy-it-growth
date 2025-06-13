
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Settings, Calendar } from 'lucide-react';

const ThreeStepFramework = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Assessment",
      description: "Comprehensive audit of your current IT infrastructure, identifying vulnerabilities, inefficiencies, and opportunities for improvement.",
      deliverables: ["Security Risk Analysis", "Cost Optimization Report", "Automation Opportunities"]
    },
    {
      number: "02", 
      icon: Settings,
      title: "Stabilization",
      description: "Immediate implementation of critical fixes, security updates, and foundational improvements to create a stable IT environment.",
      deliverables: ["Security Hardening", "System Optimization", "Backup & Recovery Setup"]
    },
    {
      number: "03",
      icon: Calendar,
      title: "Operational Efficiency",
      description: "Deploy automation, AI-powered monitoring, and proactive maintenance systems for long-term operational excellence.",
      deliverables: ["Automated Monitoring", "AI-Powered Alerts", "Ongoing Optimization"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background" id="framework">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-yellow text-navy px-6 py-2 rounded-full font-semibold mb-6">
            ⚡ HIGHLIGHTED FRAMEWORK
          </div>
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
            Our 3-Step Framework
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            <span className="font-bold text-accent">Guaranteed ROI in 6 weeks</span> through our proven methodology that transforms your IT from a cost center to a competitive advantage.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-transparent hover:border-accent/50"
            >
              <CardContent className="p-8">
                {/* Step Number */}
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-gradient-yellow rounded-full flex items-center justify-center text-navy font-bold text-lg">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-8 mb-6">
                  <div className="w-16 h-16 bg-navy/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-navy" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-navy text-sm uppercase tracking-wide">Key Deliverables:</h4>
                  {step.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connection Lines (Desktop) */}
        <div className="hidden lg:block relative -mt-24 mb-16">
          <div className="absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-accent via-accent to-accent opacity-30"></div>
          <div className="absolute top-12 left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-2 -translate-y-2"></div>
        </div>

        <div className="text-center bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-8">
          <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
            Ready to Transform Your IT Operations?
          </h3>
          <p className="text-muted-foreground mb-6">
            Start with a free assessment and see results in just 6 weeks.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-yellow text-navy hover:opacity-90 font-semibold text-lg px-8 py-6"
          >
            Get Your Free Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepFramework;
