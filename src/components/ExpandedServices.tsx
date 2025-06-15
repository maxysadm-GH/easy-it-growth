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
      "Proactive IT support, automation, and monitoring to ensure your business is secure and scalable.",
    highlight: "Managed IT • Automation",
    seo: "Chicago managed IT, automation, technology partner",
    geo: "Chicago, Nationwide",
    color: "from-navy via-charcoal to-gradient-yellow-end",
    cardClass: "bg-gradient-to-br from-navy via-charcoal to-gradient-yellow-end",
    textClass: "text-gradient-yellow-end"
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "Protect your data and meet required standards—HIPAA, CMMC, PCI, and more.",
    highlight: "Compliance • Protection",
    seo: "Chicago cybersecurity, compliance consultant US",
    geo: "Chicago, US",
    color: "from-accent via-gradient-yellow-end to-amber-300",
    cardClass: "bg-gradient-to-br from-accent via-gradient-yellow-end to-yellow-300",
    textClass: "text-charcoal"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Migration & management for Microsoft 365, Google Workspace, Azure, AWS and more.",
    highlight: "Cloud • Microsoft 365",
    seo: "Cloud migration Chicago, Azure, Google Workspace",
    geo: "Nationwide",
    color: "from-gradient-yellow-end via-pale-yellow to-white",
    cardClass: "bg-gradient-to-br from-gradient-yellow-end via-pale-yellow to-white",
    textClass: "text-navy"
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Eliminate bottlenecks and automate workflows with RPA and digital solutions.",
    highlight: "Workflow • RPA",
    seo: "Process automation Chicago, workflow automation",
    geo: "Chicago, US",
    color: "from-gradient-yellow-end via-navy to-gradient-yellow-start",
    cardClass: "bg-gradient-to-br from-gradient-yellow-end via-navy to-gradient-yellow-start",
    textClass: "text-white"
  },
  {
    icon: BarChart2,
    title: "AI Insights & Dashboards",
    description: "Real-time dashboards, analytics, and reporting for data-driven decisions.",
    highlight: "Dashboards • AI Insights",
    seo: "AI dashboards Chicago, analytics, reporting",
    geo: "Chicago, US",
    color: "from-pale-yellow via-gradient-yellow-end to-accent",
    cardClass: "bg-gradient-to-br from-pale-yellow via-gradient-yellow-end to-accent",
    textClass: "text-navy"
  },
  {
    icon: Database,
    title: "ERP, MRP & System Integration",
    description: "Connect ERP, MRP, and accounting for automated, real-time workflows.",
    highlight: "ERP • Integration",
    seo: "ERP integration Chicago, MRP solutions",
    geo: "Chicago, US",
    color: "from-navy via-accent to-gradient-yellow-end",
    cardClass: "bg-gradient-to-br from-navy via-accent to-gradient-yellow-end",
    textClass: "text-white"
  },
  {
    icon: Users,
    title: "Collaboration & Productivity",
    description: "Empower hybrid teams with secure tools, cloud files, and unified communications.",
    highlight: "Teams • Productivity",
    seo: "Collaboration tools Chicago, unified communications",
    geo: "Chicago, US",
    color: "from-gradient-yellow-end via-charcoal to-navy",
    cardClass: "bg-gradient-to-br from-gradient-yellow-end via-charcoal to-navy",
    textClass: "text-white"
  },
  {
    icon: Lock,
    title: "Backup & Disaster Recovery",
    description: "Tailored backups and rapid recovery for business continuity.",
    highlight: "Continuity • Recovery",
    seo: "Disaster recovery Chicago, backup",
    geo: "Chicago, US",
    color: "from-deep-blue via-pale-yellow to-gradient-yellow-end",
    cardClass: "bg-gradient-to-br from-deep-blue via-pale-yellow to-gradient-yellow-end",
    textClass: "text-navy"
  },
  {
    icon: Sliders,
    title: "IT Roadmapping & vCIO",
    description: "Strategic IT planning and vCIO—align your tech with growth goals.",
    highlight: "Strategy • vCIO",
    seo: "vCIO Chicago, IT roadmap",
    geo: "Chicago, Nationwide",
    color: "from-charcoal via-gradient-yellow-start to-pale-yellow",
    cardClass: "bg-gradient-to-br from-charcoal via-gradient-yellow-start to-pale-yellow",
    textClass: "text-navy"
  },
];

const ExpandedServices = () => (
  <section className="py-20 bg-gradient-to-b from-navy via-deep-blue/80 to-navy" id="services">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-5xl font-poppins font-bold text-gradient-yellow-end mb-4 drop-shadow-header">
          IT, Security & Automation Services
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-inter font-medium drop-shadow-header">
          Expert IT, cybersecurity & automation for growing businesses in Chicago and nationwide—Cybersecurity, Automation, Cloud, ERP/Accounting Integration, and more.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-10">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className={`
                group rounded-2xl shadow-2xl ${service.cardClass}
                flex flex-col h-full transition-transform hover:scale-105 border-0 p-1
                relative overflow-hidden
              `}
              style={{
                minHeight: 320,
              }}
            >
              <div className="p-7 md:p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-11 h-11 rounded-xl bg-white/80 flex items-center justify-center shadow border">
                    <Icon className="w-7 h-7 text-accent" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg lg:text-xl font-poppins font-bold leading-snug drop-shadow-header" style={{ color: "#21314B" }}>
                    {service.title}
                  </h3>
                </div>
                <p className="mb-5 font-inter text-base leading-relaxed flex-1 min-h-[58px] max-w-[95%] text-white drop-shadow-header">
                  {service.description}
                </p>
                <div className="flex items-end mt-auto gap-2">
                  <span className="inline-block bg-accent text-navy px-3 py-1 rounded-full text-xs font-semibold shadow-sm border font-poppins">
                    {service.highlight}
                  </span>
                  <span className="inline-block bg-gray-900/20 text-gray-100 ml-auto px-2 py-0.5 rounded-full text-[11px] font-medium">
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
