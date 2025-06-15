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

/**
 * New visual style, improved contrast, AI Insights style card.
 * Added SEO keywords and geo references for each service.
 */
const services = [
  {
    icon: Settings,
    title: "Managed IT & Automation",
    description:
      "Proactive IT support, remote monitoring, and smart automation for scalable growth and resilience.",
    highlight: "Managed IT • Automation",
    seo: "Managed IT support Chicago, national IT automation, technology partner",
    geo: "Chicago, Nationwide",
    color: "from-navy to-gradient-yellow-end"
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description:
      "Protect data, meet regulations, and secure uptime—HIPAA, CMMC, PCI, and more.",
    highlight: "Compliance • Protection",
    seo: "Cybersecurity Chicago, HIPAA compliance, CMMC consultant US",
    geo: "Chicago, US",
    color: "from-accent to-gradient-yellow-end",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Migration & optimization for Microsoft 365, Google Workspace, Azure, AWS and private clouds.",
    highlight: "Cloud • Microsoft 365",
    seo: "Cloud consulting Chicago, Azure migration, Google Workspace IT",
    geo: "Nationwide",
    color: "from-gradient-yellow-start to-pale-yellow",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description:
      "Automate your workflows & eliminate bottlenecks with expert RPA and digital process design.",
    highlight: "Workflow • RPA",
    seo: "Process automation Chicago, workflow automation, RPA consulting",
    geo: "Chicago, US",
    color: "from-gradient-yellow-end to-navy",
  },
  {
    icon: BarChart2,
    title: "AI Insights & Dashboards",
    description:
      "Real-time dashboards, analytics, and reporting for better, data-driven decisions.",
    highlight: "Dashboards • AI Insights",
    seo: "AI dashboards Chicago, analytics, reporting, realtime",
    geo: "Chicago, US",
    color: "from-pale-yellow to-accent",
  },
  {
    icon: Database,
    title: "ERP, MRP & System Integration",
    description:
      "Seamlessly connect ERP, MRP, accounting, and HR for real-time data and automated workflows tailored to your industry.",
    highlight: "ERP • Integration",
    seo: "ERP integration Chicago, manufacturing IT, system integration",
    geo: "Chicago, US",
    color: "from-navy to-accent",
  },
  {
    icon: Users,
    title: "Collaboration & Productivity",
    description:
      "Empower remote, office & hybrid teams with secure access, communications, and business tools.",
    highlight: "Teams • Productivity",
    seo: "Collaboration tools Chicago, remote work IT, unified communications",
    geo: "Chicago, US",
    color: "from-gradient-yellow-end to-navy",
  },
  {
    icon: Lock,
    title: "Backup & Disaster Recovery",
    description:
      "Protect your business from downtime and data loss with tailored backups and rapid recovery.",
    highlight: "Continuity • Recovery",
    seo: "Disaster recovery Chicago, data backup, business continuity",
    geo: "Chicago, US",
    color: "from-deep-blue to-pale-yellow",
  },
  {
    icon: Sliders,
    title: "IT Roadmapping & vCIO",
    description:
      "Strategic planning and vCIO services—align IT investments with your growth goals.",
    highlight: "Strategy • vCIO",
    seo: "vCIO Chicago, IT roadmap, tech strategy",
    geo: "Chicago, Nationwide",
    color: "from-charcoal to-gradient-yellow-start",
  },
];

const ExpandedServices = () => (
  <section className="py-20 bg-gradient-to-b from-navy via-deep-blue/80 to-navy"
    id="services"
  >
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-5xl font-poppins font-bold text-accent mb-4 drop-shadow-header">
          IT, Security & Automation Services
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-inter font-medium drop-shadow-header">
          Expert IT, cybersecurity & automation for growing businesses in Chicago and nationwide—including automation, ERP, compliance, and cloud integration.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-10">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className={`
                group border-0 rounded-2xl shadow-xl bg-gradient-to-br ${service.color}
                flex flex-col h-full transition-transform hover:scale-105
                relative overflow-hidden
              `}
              style={{
                minHeight: 320,
              }}
            >
              <div className="p-7 md:p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-11 h-11 rounded-xl bg-white/80 flex items-center justify-center shadow">
                    <Icon className="w-7 h-7 text-accent" aria-hidden="true" />
                  </span>
                  <h3 className="text-[17px] lg:text-xl font-poppins font-semibold text-navy group-hover:text-accent leading-snug">
                    {service.title}
                  </h3>
                </div>
                <p className="mb-5 text-white/90 font-inter text-base leading-relaxed flex-1 min-h-[58px] max-w-[95%]">
                  {service.description}
                </p>
                <div className="flex items-end mt-auto gap-2">
                  <span className="inline-block bg-accent text-navy px-3 py-1 rounded-full text-xs font-semibold shadow-sm border font-poppins">
                    {service.highlight}
                  </span>
                  <span className="inline-block bg-gray-900/20 text-gray-200 ml-auto px-2 py-0.5 rounded-full text-[11px] font-medium">
                    {service.geo}
                  </span>
                </div>
                <span className="absolute w-0 h-0 opacity-0 pointer-events-none">{service.seo}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ExpandedServices;
