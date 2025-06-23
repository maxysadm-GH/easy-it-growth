
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTAButton from '@/components/ui/cta-button';
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
  HardDrive,
  Award,
  Users,
  Target,
  TrendingUp
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
    superpower: "Dogfooding Philosophy",
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

const superpowers = [
  {
    icon: Globe,
    title: "Bilingual Excellence",
    description: "All our agents are fluent in English & Spanish, ensuring seamless communication with your diverse team.",
    highlight: "100% Bilingual Team"
  },
  {
    icon: Target,
    title: "Agile & EOS Methodology",
    description: "Structured project delivery with clear milestones, quarterly reviews, and systematic business growth.",
    highlight: "Proven Framework"
  },
  {
    icon: Award,
    title: "Dogfooding Philosophy",
    description: "We use every tool we recommend, ensuring authentic experience and understanding of your challenges.",
    highlight: "Real-World Testing"
  }
];

const industryFocus = [
  {
    title: "Manufacturing Excellence",
    description: "ERP/MRP integration specialists with IoT data management and supply chain visibility.",
    caseStudy: "How We Helped a Food Manufacturer Reduce Downtime by 40%",
    features: ["ERP/MRP Integration", "IoT Sensor Management", "Supply Chain Dashboards", "Bilingual Production Reports"]
  },
  {
    title: "CPA & Professional Services",
    description: "QuickBooks integration, document automation, and client portals with bilingual interfaces.",
    caseStudy: "From Paper to Profit: A Chicago CPA Firm's Digital Transformation",
    features: ["Practice Management Integration", "Document Automation", "Bilingual Client Portals", "Compliance Tracking"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-yellow text-navy font-bold px-4 py-2 text-lg">
              🌟 Bilingual IT Excellence
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              Complete IT Solutions
              <span className="block text-gradient-yellow-end">En Español También</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Discover MBACIO's full-service IT offerings with bilingual support, Agile methodology, 
              and real-world experience using every tool we recommend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                ctaId="book-assessment"
                variant="yellow"
                size="lg"
                className="text-xl px-10 py-6"
              />
              <CTAButton 
                customConfig={{
                  text: "Calculate Your IT ROI",
                  url: "/automation-roi",
                  type: "internal"
                }}
                variant="outline"
                size="lg"
                className="text-xl px-10 py-6 border-white text-white hover:bg-white hover:text-navy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MBACIO Superpowers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              The MBACIO Superpowers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What makes us different? We don't just provide IT services - we bring unique strengths 
              that transform how your business operates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {superpowers.map((superpower, idx) => {
              const Icon = superpower.icon;
              return (
                <Card
                  key={superpower.title}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-gradient-yellow-end to-white border-2 border-accent/20"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-navy rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-gradient-yellow-end" />
                    </div>
                    <Badge className="mb-4 bg-accent text-white font-bold">
                      {superpower.highlight}
                    </Badge>
                    <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                      {superpower.title}
                    </h3>
                    <p className="text-gray-700 font-inter leading-relaxed">
                      {superpower.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
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

      {/* Industry Focus Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep knowledge and proven success in key industries, with bilingual support 
              tailored to your business needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {industryFocus.map((industry, idx) => (
              <Card key={industry.title} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 border-2 border-accent/10">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-gradient-yellow-end" />
                    </div>
                    <h3 className="text-2xl font-poppins font-bold text-navy">
                      {industry.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 font-inter leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  
                  <div className="bg-gradient-yellow/10 rounded-lg p-4 mb-6">
                    <h4 className="font-bold text-navy mb-2">Case Study:</h4>
                    <p className="text-sm text-gray-700 italic">"{industry.caseStudy}"</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {industry.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-accent" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-gradient-yellow text-navy font-bold px-4 py-2 text-lg">
            🚀 Ready to Transform?
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8">
            Experience the MBACIO Difference
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto">
            Join businesses across Chicago and beyond who trust MBACIO for bilingual IT excellence. 
            Every business is unique - let's discuss how we can tailor our superpowers to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton 
              ctaId="book-assessment"
              variant="yellow"
              size="lg"
              className="text-xl px-10 py-6"
            />
            <CTAButton 
              customConfig={{
                text: "Ver en Español",
                url: "/servicios",
                type: "internal"
              }}
              variant="outline"
              size="lg"
              className="text-xl px-10 py-6 border-white text-white hover:bg-white hover:text-navy"
            />
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-yellow-end mb-2">100%</div>
              <div className="text-sm text-gray-300">Bilingual Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-yellow-end mb-2">3x</div>
              <div className="text-sm text-gray-300">Migrated Our Own Systems</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient-yellow-end mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support & Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
