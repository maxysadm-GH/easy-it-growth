
import { Card, CardContent } from "@/components/ui/card";
import {
  Workflow,
  Shield,
  Zap,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Intelligent Workflow Automation",
    description:
      "Stop wasting time on repetitive tasks that drain your team's productivity. We eliminate manual data entry, streamline approvals, and connect your software systems so information flows seamlessly from client intake to final delivery.",
    highlight: "Save 15+ Hours Weekly",
    geo: "Chicago, Nationwide",
    outcomes: ["60% faster processing", "Eliminate data entry errors", "24/7 automated workflows"]
  },
  {
    icon: Shield,
    title: "Bulletproof Security & Compliance Protection",
    description: "Sleep soundly knowing your client data is fortress-protected and your business meets every regulatory requirement. We implement multi-layered security that prevents breaches while ensuring seamless daily operations for your team.",
    highlight: "Zero Breach Guarantee",
    geo: "Chicago, US",
    outcomes: ["Full regulatory compliance", "Real-time threat detection", "Client trust protection"]
  },
  {
    icon: Zap,
    title: "24/7 Digital Business Operations",
    description: "Never miss another lead or client inquiry, even after hours. We deploy intelligent systems that handle client intake, answer questions, schedule appointments, and manage communications automatically while you focus on high-value work.",
    highlight: "Never Miss a Lead",
    geo: "Chicago, US",
    outcomes: ["24/7 client capture", "Automated scheduling", "Instant response times"]
  },
  {
    icon: TrendingUp,
    title: "Strategic IT Leadership & Business Acceleration",
    description: "Get a seasoned CTO's perspective without the executive salary. We provide strategic technology roadmaps, quarterly business reviews, and growth-focused IT planning that aligns your technology investments with revenue goals.",
    highlight: "Executive-Level Strategy",
    geo: "Chicago, Nationwide",
    outcomes: ["Clear growth roadmap", "Technology ROI tracking", "Competitive advantage"]
  },
];

const ExpandedServices = () => (
  <section className="py-20 bg-white" id="services">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy mb-6">
          Complete Business Solutions for Chicago's Leading Firms
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
          From automation to security, we provide comprehensive technology solutions 
          that scale with your business and protect what matters most.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <Card
              key={service.title}
              className="group bg-white border border-gray-200 hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden h-full"
            >
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-yellow rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-navy group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <span className="inline-block bg-navy/5 text-navy px-3 py-1 rounded-full text-sm font-semibold mt-2">
                      {service.highlight}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 font-inter leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="text-navy font-semibold">Key Outcomes:</h4>
                  {service.outcomes.map((outcome, outcomeIdx) => (
                    <div key={outcomeIdx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-gray-700 font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500 font-medium">
                    📍 {service.geo}
                  </span>
                  <button className="text-navy hover:text-accent font-semibold text-sm hover:underline transition-colors duration-200">
                    Learn More →
                  </button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="text-center mt-16">
        <a
          href="/services"
          className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-deep-blue transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Explore All Solutions
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default ExpandedServices;
