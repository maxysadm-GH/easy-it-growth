import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const integrations = [
  {
    name: "QuickBooks Online",
    src: "/lovable-uploads/integration-quickbooks.png",
  },
  {
    name: "HubSpot",
    src: "/lovable-uploads/integration-hubspot.png",
  },
  {
    name: "Salesforce",
    src: "/lovable-uploads/integration-salesforce.png",
  },
  {
    name: "Microsoft 365",
    src: "/lovable-uploads/integration-microsoft.png",
  },
  {
    name: "Dropbox",
    src: "/lovable-uploads/integration-dropbox.png",
  },
  {
    name: "Google Workspace",
    src: "/lovable-uploads/integration-google.png",
  }
];
const capabilities = [
  {
    title: "Predictive Analytics",
    description: "AI algorithms analyze patterns to forecast system health, financial outcomes, and operational risks—with actionable alerts and recommendations tailored for your team.",
  },
  {
    title: "Custom Dashboards (Powered by Databox)",
    description: "Bring together key metrics from multiple platforms for instant, interactive business insights—with white-labeled AI-powered recommendations and automations.",
  },
  {
    title: "Automated Reporting",
    description: "Deliver real-time, branded reports and dashboards to stakeholders and department heads. Save time, reduce manual work, and make smarter business decisions.",
  },
  {
    title: "Workflow Automation",
    description: "Streamline repetitive finance, sales, and operations tasks. Automate reminders, escalate alerts, and track performance effortlessly across cloud tools.",
  }
];

const AIInsights = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-charcoal via-navy to-deep-blue text-white" id="insights">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-6">
            AI-Powered Insights & Dashboards
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Visualize your operations, finances, and IT health in a single custom dashboard. MBACIO's white-label platform (built with Databox technology) provides instant, proactive insights to increase ROI and reduce risk.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Capabilities */}
          <div className="space-y-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-poppins font-semibold mb-2 text-accent">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Dashboard Mockup */}
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-accent">
                      Business Health Dashboard
                    </h4>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-accent">97%</div>
                      <div className="text-sm text-gray-300">KPI Score</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-accent">44h</div>
                      <div className="text-sm text-gray-300">MTTR Reduction</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Alerts Resolved</span>
                      <span className="text-accent">98%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-[95%]"></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-300">
                    🔄 Automated insights • 🛡️ Security checks enabled
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Integrations Logos */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-poppins font-bold mb-8 text-accent">
            Seamless Integration With Your Existing Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-8 py-4 w-full">
            {integrations.map((logo, index) => (
              <div key={logo.name} className="flex flex-col items-center w-20 md:w-28">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-auto drop-shadow-lg rounded-md transition-transform duration-300 hover:scale-110 opacity-0 animate-fade-in"
                  style={{ minHeight: 42, maxHeight: 54, background: "#fff", padding: "0.5rem", animationDelay: `${index * 110}ms`, animationFillMode: "forwards" }}
                />
                <span className="mt-1 text-white text-xs md:text-sm font-medium text-center hidden md:block">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-yellow text-navy hover:opacity-90 font-semibold text-lg px-8 py-6"
          >
            See MBACIO Dashboard Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIInsights;
