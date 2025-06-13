
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AIInsights = () => {
  const integrations = [
    "QuickBooks/QBO",
    "Fishbowl Inventory",
    "Acumatica ERP", 
    "Infor WMS",
    "Microsoft 365",
    "Salesforce CRM"
  ];

  const capabilities = [
    {
      title: "Predictive Analytics",
      description: "AI algorithms analyze patterns to predict system failures, performance bottlenecks, and security threats before they impact your business."
    },
    {
      title: "Automated Reporting",
      description: "Generate real-time reports and dashboards that provide actionable insights into your operations, finances, and IT performance."
    },
    {
      title: "Smart Alerting",
      description: "Intelligent notification system that filters noise and delivers only critical alerts when your attention is truly needed."
    },
    {
      title: "Workflow Automation",
      description: "Streamline repetitive tasks with custom automation that integrates seamlessly with your existing business processes."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-charcoal via-navy to-deep-blue text-white" id="insights">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-6">
            AI-Powered Insights & Dashboards
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your data into actionable insights and automate your most critical business processes.
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
                    <h4 className="font-semibold text-accent">System Health Dashboard</h4>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-accent">99.9%</div>
                      <div className="text-sm text-gray-300">Uptime</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-accent">43ms</div>
                      <div className="text-sm text-gray-300">Response Time</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">CPU Usage</span>
                      <span className="text-accent">23%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-300">
                    🔄 Auto-scaling active • 🛡️ Security monitoring enabled
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Integrations */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-poppins font-bold mb-8 text-accent">
            Seamless Integration With Your Existing Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((integration, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-sm font-medium text-gray-300">{integration}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-yellow text-navy hover:opacity-90 font-semibold text-lg px-8 py-6"
          >
            See AI Solutions in Action
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIInsights;
