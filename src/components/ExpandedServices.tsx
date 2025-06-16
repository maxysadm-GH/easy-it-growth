
import { Card, CardContent } from "@/components/ui/card";
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
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Managed IT & Automation",
    description:
      "Proactive IT support, automation, and monitoring to ensure your business is secure and scalable.",
    highlight: "Managed IT • Automation",
    geo: "Chicago, Nationwide",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "Protect your data and meet required standards—HIPAA, CMMC, PCI, and more.",
    highlight: "Compliance • Protection",
    geo: "Chicago, US",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Migration & management for Microsoft 365, Google Workspace, Azure, AWS and more.",
    highlight: "Cloud • Microsoft 365",
    geo: "Nationwide",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Eliminate bottlenecks and automate workflows with RPA and digital solutions.",
    highlight: "Workflow • RPA",
    geo: "Chicago, US",
  },
  {
    icon: BarChart2,
    title: "AI Insights & Dashboards",
    description: "Real-time dashboards, analytics, and reporting for data-driven decisions.",
    highlight: "Dashboards • AI Insights",
    geo: "Chicago, US",
  },
  {
    icon: Database,
    title: "ERP, MRP & System Integration",
    description: "Connect ERP, MRP, and accounting for automated, real-time workflows.",
    highlight: "ERP • Integration",
    geo: "Chicago, US",
  },
  {
    icon: Users,
    title: "Collaboration & Productivity",
    description: "Empower hybrid teams with secure tools, cloud files, and unified communications.",
    highlight: "Teams • Productivity",
    geo: "Chicago, US",
  },
  {
    icon: Lock,
    title: "Backup & Disaster Recovery",
    description: "Tailored backups and rapid recovery for business continuity.",
    highlight: "Continuity • Recovery",
    geo: "Chicago, US",
  },
  {
    icon: Sliders,
    title: "IT Roadmapping & vCIO",
    description: "Strategic IT planning and vCIO—align your tech with growth goals.",
    highlight: "Strategy • vCIO",
    geo: "Chicago, Nationwide",
  },
];

const ExpandedServices = () => (
  <section className="py-20 bg-white" id="services">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-navy mb-6">
          Complete IT Solutions for Growing Businesses
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
          From cybersecurity to automation, we provide comprehensive IT services 
          that scale with your business and protect what matters most.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <Card
              key={service.title}
              className="group bg-white border border-gray-200 hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-navy group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 font-inter leading-relaxed mb-6 min-h-[60px]">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="inline-block bg-navy/5 text-navy px-3 py-1 rounded-full text-sm font-semibold">
                    {service.highlight}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {service.geo}
                  </span>
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
          View All Services
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default ExpandedServices;
