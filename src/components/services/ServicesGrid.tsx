
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Settings,
  Shield,
  Cloud,
  BarChart2,
  Sliders,
  Globe,
  Zap,
  HardDrive
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "24/7 Bilingual Help Desk & Support",
    description: "Fast, reliable support in English & Spanish with 24/7 monitoring and rapid response using our proven Agile methodology.",
    superpower: "Bilingual Excellence",
    features: ["English & Spanish Support", "Agile Ticketing System", "EOS Project Structure", "We Use Our Own Tools Daily"]
  },
  {
    icon: Shield,
    title: "Advanced Cybersecurity & Compliance",
    description: "AI-driven threat detection, email security, and comprehensive compliance (SOX, HIPAA, PCI) with bilingual alerts.",
    superpower: "Real Experience",
    features: ["Multi-Language Security Alerts", "Industry-Specific Compliance", "Real-time Threat Detection", "Proven Track Record"]
  },
  {
    icon: Cloud,
    title: "Cloud Migration & Microsoft 365",
    description: "Zero-downtime migration, management, and optimization using our Agile methodology - we've done our own 3 times!",
    superpower: "Real-World Experience",
    features: ["Zero-Downtime Migrations", "Agile Implementation", "Proven Experience", "Multi-Language Support"]
  },
  {
    icon: BarChart2,
    title: "Data Analytics & AI Automation",
    description: "Power BI dashboards in English/Spanish, custom automation workflows, and machine learning insights.",
    superpower: "Bilingual Analytics",
    features: ["Bilingual Dashboards", "Custom Automation", "AI-Powered Insights", "EOS-Structured Reporting"]
  },
  {
    icon: Sliders,
    title: "Strategic IT Leadership & Virtual CIO",
    description: "EOS-structured IT roadmaps with quarterly business reviews in your preferred language and executive reporting.",
    superpower: "EOS Methodology",
    features: ["EOS IT Roadmaps", "Bilingual Executive Reports", "Strategic Planning", "Quarterly Reviews"]
  },
  {
    icon: Zap,
    title: "Integration & Workflow Optimization",
    description: "API connections between your tools using Agile sprints with change management in bilingual environments.",
    superpower: "Agile Integration",
    features: ["API Integrations", "Agile Sprint Delivery", "Bilingual Change Management", "Process Automation"]
  },
  {
    icon: HardDrive,
    title: "Backup & Disaster Recovery",
    description: "Multi-tier backup strategies with business continuity planning and quarterly recovery testing (like we do for ourselves).",
    superpower: "Real Experience",
    features: ["Multi-Tier Backups", "Quarterly Testing", "Business Continuity", "Proven Methods"]
  },
  {
    icon: Globe,
    title: "Hardware Procurement & Management",
    description: "Vendor-neutral recommendations with lifecycle management using EOS tracking and bulk purchasing power.",
    superpower: "EOS Tracking",
    features: ["Vendor-Neutral Advice", "EOS Lifecycle Management", "Bulk Purchasing", "Strategic Planning"]
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
            Comprehensive IT Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From help desk to strategic planning - all delivered with bilingual excellence 
            and proven methodologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200 h-full"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-yellow rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-navy" />
                    </div>
                    <Badge variant="outline" className="text-xs font-semibold text-accent border-accent">
                      {service.superpower}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-poppins font-bold text-navy mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 font-inter leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
