
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Settings,
  Shield,
  Cloud,
  Zap,
  BarChart2,
  Database,
  Users,
  Lock,
  Sliders,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "IT Help Desk & Support",
    description: "24/7 proactive monitoring and rapid response support to keep your systems running smoothly.",
    features: ["24/7 System Monitoring", "Priority Response Times", "Remote & On-site Support", "Preventive Maintenance"],
    color: "bg-blue-50 border-blue-200"
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "Comprehensive security protocols and compliance management for HIPAA, CMMC, PCI, and more.",
    features: ["Security Assessments", "Compliance Management", "Threat Detection", "Employee Training"],
    color: "bg-red-50 border-red-200"
  },
  {
    icon: Cloud,
    title: "Cloud & Microsoft 365",
    description: "Seamless cloud migration and management for Microsoft 365, Azure, AWS, and Google Workspace.",
    features: ["Cloud Migration", "M365 Management", "Data Backup", "Email Security"],
    color: "bg-green-50 border-green-200"
  },
  {
    icon: BarChart2,
    title: "Data & AI Tools",
    description: "AI-powered dashboards and analytics to transform your business data into actionable insights.",
    features: ["Custom Dashboards", "AI Analytics", "Real-time Reporting", "Predictive Insights"],
    color: "bg-purple-50 border-purple-200"
  },
  {
    icon: Sliders,
    title: "Strategy & Virtual CIO",
    description: "Strategic IT planning and virtual CIO services to align technology with your business goals.",
    features: ["IT Roadmapping", "Technology Planning", "Budget Optimization", "Strategic Consulting"],
    color: "bg-orange-50 border-orange-200"
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 text-navy">
              Complete IT Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed">
              From cybersecurity to automation, we provide comprehensive IT services 
              that grow with your business and protect what matters most.
            </p>
            <Button size="lg" className="bg-accent text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300">
              Book Your Free Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${service.color}`}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6 text-navy" />
                      </div>
                      <h3 className="text-xl font-poppins font-bold text-navy">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 font-inter leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-6 text-navy">
              Additional Specialized Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group bg-white border border-gray-200 hover:border-accent hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-poppins font-bold text-navy mb-4">Process Automation</h3>
                <p className="text-gray-600 mb-6">Eliminate bottlenecks and automate workflows with RPA and digital solutions.</p>
                <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group bg-white border border-gray-200 hover:border-accent hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Database className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-poppins font-bold text-navy mb-4">ERP & System Integration</h3>
                <p className="text-gray-600 mb-6">Connect ERP, MRP, and accounting systems for automated, real-time workflows.</p>
                <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Every business is unique. Let's discuss how we can tailor our services 
            to meet your specific needs and challenges.
          </p>
          <Button size="lg" className="bg-accent text-navy hover:bg-accent/90 font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
