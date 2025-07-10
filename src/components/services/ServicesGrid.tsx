
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Workflow,
  Shield,
  Zap,
  TrendingUp,
  MessageSquare,
  Phone,
  Cloud,
  HardDrive
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "24/7 Intelligent Business Operations",
    description: "Deploy a digital front desk that handles client intake, answers questions, and schedules consultations automatically while providing real-time insights into customer interactions.",
    superpower: "Never Miss a Lead",
    features: ["24/7 Lead Capture", "Automated Scheduling", "Multi-Language Support", "Real-Time Analytics"]
  },
  {
    icon: Shield,
    title: "Bulletproof Security & Compliance Protection",
    description: "Sleep soundly with multi-layered security that prevents breaches, ensures regulatory compliance (SOX, HIPAA, PCI), and maintains seamless operations for your team.",
    superpower: "Zero Breach Guarantee",
    features: ["Real-Time Threat Detection", "Compliance Automation", "Data Fortress Protection", "24/7 Security Monitoring"]
  },
  {
    icon: Workflow,
    title: "Intelligent Workflow Automation",
    description: "Eliminate manual data entry and streamline approvals by connecting your software systems so information flows seamlessly from client intake to final delivery.",
    superpower: "Save 15+ Hours Weekly",
    features: ["Process Automation", "System Integration", "Error Elimination", "Workflow Intelligence"]
  },
  {
    icon: Phone,
    title: "AI-Powered Communication Systems",
    description: "Transform your phone system into an intelligence-gathering asset with automated transcription, sentiment analysis, and instant meeting summaries for every client interaction.",
    superpower: "Never Miss Details",
    features: ["Call Transcription", "Sentiment Analysis", "Meeting Summaries", "Follow-Up Automation"]
  },
  {
    icon: TrendingUp,
    title: "Strategic IT Leadership & Business Acceleration",
    description: "Get executive-level technology strategy without the CTO salary. We provide growth-focused IT roadmaps and quarterly reviews that align technology with revenue goals.",
    superpower: "Executive Strategy",
    features: ["Technology Roadmaps", "ROI Tracking", "Growth Planning", "Competitive Analysis"]
  },
  {
    icon: Zap,
    title: "Microsoft Copilot Integration for Legal Teams",
    description: "Embed AI directly into your existing workflow (Word, Outlook, Teams) to slash research time, accelerate document drafting, and automate administrative tasks.",
    superpower: "60% Faster Research",
    features: ["Legal Research AI", "Document Automation", "Email Intelligence", "Team Collaboration"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & Digital Transformation",
    description: "Modernize legacy systems and enable remote work capabilities with secure cloud migrations that connect your existing software ecosystem seamlessly.",
    superpower: "Zero Downtime",
    features: ["Cloud Migration", "System Integration", "Remote Work Setup", "Legacy Modernization"]
  },
  {
    icon: HardDrive,
    title: "Business Continuity & Disaster Recovery",
    description: "Ensure your business never stops with multi-tier backup strategies, rapid recovery systems, and comprehensive business continuity planning.",
    superpower: "99.9% Uptime",
    features: ["Multi-Tier Backups", "Rapid Recovery", "Business Continuity", "Disaster Planning"]
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
            Complete Technology Solutions for Chicago Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From automation to security - all delivered with proven results 
            and measurable business impact.
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
