
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Cloud,
  Database,
  Settings,
  Zap,
  BarChart2,
  Users,
  CheckSquare,
  Lock,
  Server,
  Sliders,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Managed IT Services",
    description:
      "Comprehensive IT management, monitoring, and support for seamless and secure operations. Proactive, strategic, always-on.",
    highlight: "24/7 Monitoring • Strategic IT",
    color: "from-navy via-deep-blue to-charcoal",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description:
      "Protect your business with layered cybersecurity, regulatory compliance (HIPAA, CMMC, PCI), and ongoing risk assessments.",
    highlight: "Compliance • Protection",
    color: "from-accent via-pale-yellow to-white",
  },
  {
    icon: Cloud,
    title: "Cloud Transformation",
    description:
      "Migrate and optimize with cloud solutions. Expert management in Microsoft 365, Google Workspace, Azure & AWS, and private cloud.",
    highlight: "Microsoft 365 • Azure • AWS",
    color: "from-gradient-yellow-start via-pale-yellow to-white",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description:
      "Eliminate manual bottlenecks using workflow automation and custom integrations. Deploy modern, low-code platforms and RPA.",
    highlight: "Workflow • RPA",
    color: "from-accent via-gradient-yellow-end to-white",
  },
  {
    icon: BarChart2,
    title: "AI & Business Insights",
    description:
      "Real-time dashboards and advanced analytics tailored for manufacturers, finance, and professional services. Make every decision data-driven.",
    highlight: "Dashboards • AI Insights",
    color: "from-navy via-accent to-pale-yellow",
  },
  {
    icon: Database,
    title: "ERP & Systems Integration",
    description:
      "Seamlessly connect ERP, MRP, finance, HR, and supply chain platforms for unified, actionable data—Fishbowl, Acumatica, QBO and more.",
    highlight: "ERP • Integration",
    color: "from-deep-blue via-charcoal to-pale-yellow",
  },
  {
    icon: Users,
    title: "Collaboration & Productivity",
    description:
      "Empower teams with secure remote access, unified communications, and modern productivity tools. Collaboration, anywhere.",
    highlight: "Teams • Unified Comms",
    color: "from-gradient-yellow-end via-accent to-navy",
  },
  {
    icon: Lock,
    title: "Data Backup & Disaster Recovery",
    description:
      "Protect your business from downtime and data loss with tailored backup solutions and recovery plans for all critical systems.",
    highlight: "Business Continuity",
    color: "from-navy via-gray-100 to-pale-yellow",
  },
  {
    icon: Sliders,
    title: "IT Roadmapping & vCIO",
    description:
      "Strategic technology planning and C-level IT leadership to drive growth and align tech with your business vision.",
    highlight: "CIO Strategy",
    color: "from-charcoal via-navy to-gradient-yellow-start",
  },
  {
    icon: CheckSquare,
    title: "Compliance Management",
    description:
      "End-to-end compliance management including HIPAA, CMMC, PCI—audits, policies, and IT controls for full peace of mind.",
    highlight: "HIPAA • CMMC • PCI",
    color: "from-pale-yellow via-charcoal to-navy",
  },
];

const ExpandedServices = () => (
  <section
    className="py-16 lg:py-24 bg-secondary/30"
    id="expanded-services"
  >
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
          Our Services
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Modern IT, cybersecurity, automation, and cloud—delivered with California-grade service for scalable, secure growth.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <Card
              key={service.title}
              className={`h-full shadow-md hover:shadow-xl transition-all bg-gradient-to-br ${service.color} border-0 flex flex-col`}
            >
              <CardContent className="p-8 flex flex-col flex-1">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-white/60 flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-navy mb-3">{service.title}</h3>
                </div>
                <p className="mb-6 text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-auto flex items-end">
                  <span className="inline-block bg-pale-yellow text-navy px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                    {service.highlight}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);

export default ExpandedServices;

