import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Updated integrations list with reliable working logos
const integrations = [
  {
    name: "QuickBooks Online",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIxMCIgZmlsbD0iIzAwNzZCNyIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlFCPC90ZXh0Pjwvc3ZnPg==",
  },
  {
    name: "HubSpot",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIxMCIgZmlsbD0iI0ZGN0E1OSIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhTPC90ZXh0Pjwvc3ZnPg==",
  },
  {
    name: "Salesforce",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIxMCIgZmlsbD0iIzAwQTFFRiIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNGPC90ZXh0Pjwvc3ZnPg=="
  },
  {
    name: "Microsoft Excel",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIxMCIgZmlsbD0iIzIxNzM0NiIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVYPC90ZXh0Pjwvc3ZnPg==",
  },
  {
    name: "Slack",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIxMCIgZmlsbD0iIzRBMTU0QiIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNMPC90ZXh0Pjwvc3ZnPg==",
  },
  {
    name: "Shopify",
    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIxMCIgZmlsbD0iIzk2QkYxMyIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNIPC90ZXh0Pjwvc3ZnPg==",
  }
];

const capabilities = [
  {
    title: "Predictive Analytics",
    description: "Forecasts system health, financial outcomes, and operational risks with real business alerts.",
  },
  {
    title: "Custom Dashboards",
    description: "Centralize key metrics for instant, actionable insights—automate reporting and visualize performance trends.",
  },
  {
    title: "Automated Reporting",
    description: "Brand-ready reports and dashboards for stakeholders save time and drive smarter decisions.",
  },
  {
    title: "Workflow Automation",
    description: "Streamline finance, sales, and operations—automate reminders, escalate alerts, and track performance.",
  }
];

const AIInsights = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-navy via-charcoal to-deep-blue text-white" id="insights">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-6">
            AI-Powered Insights & Dashboards
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See your operations and IT health clearly. MBACIO dashboards deliver proactive insights and automated reporting, so you can make better decisions, faster.
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
            <div className="bg-white/10 rounded-lg p-8">
              <h4 className="font-semibold text-accent mb-4">
                MBACIO Business Health Dashboard
              </h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-accent">97%</div>
                  <div className="text-sm text-gray-300">KPI Score</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-accent">44h</div>
                  <div className="text-sm text-gray-300">MTTR Reduction</div>
                </div>
              </div>
              <div className="space-y-2 mb-2">
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
          </div>
        </div>
        {/* Integrations Logos */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-poppins font-bold mb-8 text-accent">
            Works With Your Favorite Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-8 py-4 w-full">
            {integrations.map((logo, index) => (
              <div key={logo.name} className="flex flex-col items-center w-20 md:w-28">
                <div className="w-16 h-16 bg-white rounded-lg p-2 shadow-lg flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <span className="mt-2 text-white text-xs md:text-sm font-medium text-center">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <a href="/dashboard-solutions">
            <button
              className="bg-gradient-yellow text-navy hover:opacity-90 font-semibold text-lg px-8 py-6 rounded-lg shadow"
            >
              MBACIO Dashboard Solutions
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIInsights;
