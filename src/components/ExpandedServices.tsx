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
    title: "IT & Automation Services",
    description:
      "Modern, secure, and scalable technology support for businesses nationwide. From managed IT and 24/7 monitoring to advanced workflow automation and compliance, we help you accelerate growth and protect your future.",
    highlight: "Managed IT • Automation • Security",
    seo: "Managed IT Services Chicago, National IT Consulting, Workflow Automation US, Strategic IT, Proactive Support",
    geo: "Chicago, Nationwide, United States",
    color: "from-navy to-accent"
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description:
      "Defend your business with expert cybersecurity tailored for regulatory compliance: HIPAA, CMMC, PCI, and more. Ongoing risk assessments and protection for your entire cloud or on-premises environment.",
    highlight: "Compliance • Protection",
    seo: "CybersecurityCalifornia, HIPAA Compliance IT, CMMC Security Consultant LA",
    geo: "California, Orange County, Los Angeles",
    color: "from-accent to-gradient-yellow-end",
  },
  {
    icon: Cloud,
    title: "Cloud Transformation",
    description:
      "Migrate and optimize with cloud solutions: Microsoft 365, Google Workspace, Azure, AWS, and California-based private clouds. Improve agility, uptime, and team collaboration across locations.",
    highlight: "Microsoft 365 • Azure • AWS",
    seo: "Cloud Consulting California, Azure Migration, Google Workspace IT LA",
    geo: "California, Bay Area, Orange County",
    color: "from-gradient-yellow-start to-pale-yellow",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description:
      "Automate repetitive workflows and boost efficiency with low-code platforms and robotic process automation (RPA). Forget bottlenecks—let automation power your business growth.",
    highlight: "Workflow • RPA",
    seo: "Process Automation LA, Workflow Automation California, RPA Orange County",
    geo: "California",
    color: "from-gradient-yellow-end to-navy",
  },
  {
    icon: BarChart2,
    title: "AI & Business Insights",
    description:
      "Real-time dashboards, actionable analytics, and AI-powered reporting designed for manufacturers, finance, and services. Make every key decision data-driven.",
    highlight: "Dashboards • AI Insights",
    seo: "AI Dashboards California, Business Analytics LA, Realtime Reporting Orange County",
    geo: "California, Los Angeles, Bay Area",
    color: "from-pale-yellow to-accent",
  },
  {
    icon: Database,
    title: "ERP & System Integration",
    description:
      "Integrate ERP, MRP, accounting, and HR platforms (Fishbowl, Acumatica, QuickBooks, and more) for streamlined data, automated workflows, and real-time performance insights—essential for manufacturers, legal, CPA, and SMBs looking to scale securely.",
    highlight: "ERP • Integration • Automation",
    seo: "ERP Integration Chicago, Acumatica Consultant US, Fishbowl Integration Nationwide, Manufacturing IT",
    geo: "Chicago, United States",
    color: "from-navy to-accent",
  },
  {
    icon: Users,
    title: "Collaboration & Productivity",
    description:
      "Empower remote, hybrid, and office teams with secure access, unified communications, and best-in-class productivity tools. California-born solutions for modern work.",
    highlight: "Teams • Unified Comms",
    seo: "Collaboration Tools California, Remote Work IT LA, Unified Communications Orange County",
    geo: "California, Orange County",
    color: "from-gradient-yellow-end to-navy",
  },
  {
    icon: Lock,
    title: "Data Backup & Disaster Recovery",
    description:
      "Protect your organization from downtime and data loss. MBACIO delivers business continuity through tailored backup, cloud storage, and rapid recovery for all critical systems. Local expertise, global standards.",
    highlight: "Business Continuity",
    seo: "Disaster Recovery LA, Data Backup California, Business Continuity Orange County",
    geo: "California, Los Angeles",
    color: "from-deep-blue to-pale-yellow",
  },
  {
    icon: Sliders,
    title: "IT Roadmapping & vCIO",
    description:
      "Strategic technology planning and C-level (vCIO) leadership to fuel business growth. Align IT investments with your long-term business vision—trusted by California innovators.",
    highlight: "CIO Strategy",
    seo: "vCIO Services California, IT Roadmap LA, Tech Strategy Orange County",
    geo: "California, Los Angeles, Bay Area",
    color: "from-charcoal to-gradient-yellow-start",
  },
];

const ExpandedServices = () => (
  <section
    className="py-16 lg:py-24 bg-gradient-to-b from-secondary/30 via-gray-100 to-white"
    id="services"
  >
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
          IT, Security & Automation Services
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Scalable solutions for modern businesses in <b>Chicago</b> and across the <b>United States</b>.
          <span className="block pt-2 text-base text-navy/80">Cybersecurity, Automation, Cloud, ERP/Accounting Integration, and more—optimized for regulated, fast-growing organizations.</span>
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className={`
                group border-0 rounded-2xl shadow-lg bg-gradient-to-br ${service.color}
                flex flex-col h-full transition transform hover:scale-105
              `}
              style={{
                minHeight: 320,
                filter: "brightness(1.06) contrast(1)",
                transition: "box-shadow .2s,transform .2s",
              }}
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center shadow group-hover:bg-white">
                    <Icon className="w-7 h-7 text-accent" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg lg:text-xl font-poppins font-bold text-navy group-hover:text-accent mb-0 leading-snug">
                    {service.title}
                  </h3>
                </div>
                <p className="mb-6 text-navy/90 font-inter text-base leading-relaxed flex-1 min-h-[72px]">
                  {service.description}
                </p>
                <div className="flex items-end mt-auto">
                  <span className="inline-block bg-accent text-navy px-3 py-1 rounded-full text-xs font-semibold shadow-sm mr-2 border-accent border">
                    {service.highlight}
                  </span>
                  <span className="inline-block bg-gray-900/10 text-gray-600 ml-auto px-2 py-0.5 rounded-full text-[10px] font-medium">
                    {service.geo}
                  </span>
                </div>
                {/* For SEO (hidden) */}
                <span className="absolute w-0 h-0 overflow-hidden opacity-0">{service.seo}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ExpandedServices;
