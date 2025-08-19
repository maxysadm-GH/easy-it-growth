import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Workflow,
  Shield,
  Zap,
  TrendingUp,
  MessageSquare,
  Phone,
  Cloud,
  HardDrive,
  Headphones,
  Server,
  Monitor
} from "lucide-react";

const services = [
  {
    id: "help-desk",
    icon: Headphones,
    title: "24/7 Help Desk & Support",
    description: "Round-the-clock technical support with bilingual capabilities, ensuring your team gets help when they need it most.",
    superpower: "Never Wait for Help",
    features: ["24/7 Live Support", "Bilingual Team", "Remote Resolution", "Priority Response"],
    benefits: "Reduce downtime by 80% with immediate expert assistance",
    details: [
      "Average response time under 15 minutes",
      "95% issues resolved without on-site visits", 
      "English and Spanish support available",
      "Escalation to senior engineers when needed"
    ],
    faqs: [
      {
        question: "What's your average response time?",
        answer: "We respond to all tickets within 15 minutes during business hours and within 2 hours for after-hours emergencies."
      },
      {
        question: "Do you support remote workers?",
        answer: "Yes, our help desk provides full support for remote and hybrid workers through secure remote access tools."
      }
    ]
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Advanced Cybersecurity Protection",
    description: "Multi-layered security that prevents breaches, ensures compliance (SOX, HIPAA, PCI), and maintains seamless operations.",
    superpower: "Zero Breach Guarantee",
    features: ["Threat Detection", "Compliance Automation", "Security Monitoring", "Incident Response"],
    benefits: "Prevent costly breaches and maintain regulatory compliance",
    details: [
      "24/7 security operations center monitoring",
      "Advanced threat detection and response",
      "Compliance frameworks (SOX, HIPAA, PCI DSS)",
      "Employee security training programs"
    ],
    faqs: [
      {
        question: "How do you ensure compliance?",
        answer: "We implement and maintain compliance frameworks specific to your industry, with regular audits and automated monitoring."
      },
      {
        question: "What if we get breached?",
        answer: "Our incident response team activates immediately with forensic analysis, containment, and recovery procedures."
      }
    ]
  },
  {
    id: "cloud-m365",
    icon: Cloud,
    title: "Cloud Solutions & Microsoft 365",
    description: "Secure cloud migrations and Microsoft 365 optimization that connects your existing software ecosystem seamlessly.",
    superpower: "Zero Downtime Migration",
    features: ["Cloud Migration", "M365 Optimization", "Hybrid Setup", "Data Synchronization"],
    benefits: "Enable remote work and reduce infrastructure costs by 40%",
    details: [
      "Phased migration strategies to minimize disruption",
      "Microsoft 365 advanced security configuration",
      "Integration with existing ERP and CRM systems",
      "Backup and disaster recovery planning"
    ],
    faqs: [
      {
        question: "How long does migration take?",
        answer: "Most migrations complete in 2-4 weeks depending on data volume and complexity, with minimal business disruption."
      },
      {
        question: "What about our existing software?",
        answer: "We ensure all critical applications integrate properly with your new cloud environment."
      }
    ]
  },
  {
    id: "data-ai",
    icon: TrendingUp,
    title: "Data Analytics & AI Solutions",
    description: "Transform raw business data into actionable insights with real-time dashboards and AI-powered analytics.",
    superpower: "Make Data-Driven Decisions",
    features: ["Real-Time Dashboards", "Predictive Analytics", "Automated Reporting", "KPI Tracking"],
    benefits: "Increase operational efficiency by 35% with data insights",
    details: [
      "Custom dashboard development for your industry",
      "Integration with ERP, CRM, and financial systems",
      "Automated alerts for key performance indicators",
      "Mobile access to critical business metrics"
    ],
    faqs: [
      {
        question: "Can you work with our existing data?",
        answer: "Yes, we integrate with virtually any data source including ERPs, CRMs, spreadsheets, and databases."
      },
      {
        question: "How quickly can we see results?",
        answer: "Most clients see immediate value from dashboards, with advanced analytics delivering insights within 30 days."
      }
    ]
  },
  {
    id: "vcio",
    icon: Monitor,
    title: "Virtual CIO (vCIO) Services",
    description: "Executive-level technology strategy without the CTO salary. Growth-focused IT roadmaps aligned with revenue goals.",
    superpower: "Executive Strategy",
    features: ["Technology Roadmaps", "ROI Planning", "Vendor Management", "Strategic Planning"],
    benefits: "Align technology investments with business growth objectives",
    details: [
      "Quarterly technology strategy reviews",
      "Budget planning and vendor negotiations",
      "Technology trend analysis and recommendations",
      "Board-level reporting and presentations"
    ],
    faqs: [
      {
        question: "What's included in vCIO services?",
        answer: "Strategic planning, budget oversight, vendor management, and quarterly business reviews with technology recommendations."
      },
      {
        question: "How often do we meet?",
        answer: "Monthly check-ins for ongoing projects, quarterly strategy reviews, and ad-hoc consultation as needed."
      }
    ]
  }
];

const ServicesDetailGrid = () => {
  const handleCTAClick = (serviceId: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        location: `services_${serviceId}`,
        action: 'assessment'
      });
    }
    window.open('https://calendly.com/mbacio/assessment', '_blank', 'noopener,noreferrer');
  };

  const handleLearnMoreClick = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Service Cards Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              Complete Technology Solutions for Growing Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From 24/7 support to strategic planning - all delivered with proven results 
              and measurable business impact. Serving Bannockburn & Chicagoland.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
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
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleLearnMoreClick(service.id)}
                      className="w-full border-navy text-navy hover:bg-navy hover:text-white"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <section key={service.id} id={service.id} className="py-20 bg-white" style={{ scrollMarginTop: '80px' }}>
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-yellow rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-navy" />
                      </div>
                      <div>
                        <Badge className="mb-2 bg-accent text-navy">{service.superpower}</Badge>
                        <h2 className="text-3xl font-poppins font-bold text-navy">{service.title}</h2>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                    <p className="text-accent font-semibold text-lg mb-8">{service.benefits}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      size="lg"
                      onClick={() => handleCTAClick(service.id)}
                      className="bg-gradient-yellow text-navy font-bold hover:scale-105 transition-transform duration-300"
                    >
                      Get Started Today
                    </Button>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-xl font-poppins font-bold text-navy mb-6">Frequently Asked Questions</h3>
                    <div className="space-y-6">
                      {service.faqs.map((faq, idx) => (
                        <div key={idx}>
                          <h4 className="font-semibold text-navy mb-2">{faq.question}</h4>
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ServicesDetailGrid;