
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const ServicePlans = () => {
  const plans = [
    {
      name: "Essential",
      price: "Starting at $2,500/mo",
      description: "Perfect for small to medium businesses looking to stabilize and optimize their IT infrastructure.",
      features: [
        "24/7 System Monitoring",
        "Basic Security Management", 
        "Monthly IT Health Reports",
        "Email & Phone Support",
        "Quarterly Business Reviews",
        "Basic Automation Setup"
      ],
      popular: false
    },
    {
      name: "Premier", 
      price: "Starting at $4,500/mo",
      description: "Comprehensive IT management with advanced automation and AI-powered insights for growing businesses.",
      features: [
        "Everything in Essential",
        "Advanced AI Monitoring",
        "Custom Dashboard Creation",
        "Workflow Automation", 
        "Priority Support (2hr response)",
        "Monthly Strategic Consultations",
        "Advanced Security Protocols",
        "Integration Management"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "Custom Pricing",
      description: "Enterprise-grade solution with dedicated resources, custom development, and strategic IT leadership.",
      features: [
        "Everything in Premier",
        "Dedicated IT Strategist",
        "Custom Software Development",
        "Advanced Analytics & BI",
        "White-Glove Implementation",
        "C-Level Strategic Planning",
        "Enterprise Security Suite",
        "24/7 Dedicated Support Team"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/30" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
            Service Plan Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the right level of IT support for your business. All plans include our guarantee of measurable ROI within 6 weeks.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'ring-2 ring-accent scale-105 lg:scale-110' : ''} hover:shadow-2xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-yellow text-navy px-4 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <CardHeader className="pb-8 pt-8">
                <CardTitle className="text-center">
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-accent mb-4">{plan.price}</div>
                  <p className="text-muted-foreground text-base font-normal">{plan.description}</p>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular 
                    ? 'bg-gradient-yellow text-navy hover:opacity-90' 
                    : 'bg-navy text-white hover:bg-deep-blue'
                  } font-semibold`}
                  size="lg"
                >
                  {plan.name === "Elite" ? "Contact Us" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            All plans include our <span className="font-bold text-navy">6-week ROI guarantee</span>
          </p>
          <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
            Compare All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicePlans;
