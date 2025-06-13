
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const WhyMBACIO = () => {
  const benefits = [
    {
      title: "Expense Optimization",
      description: "Cut IT costs by 20-40% through strategic vendor consolidation and efficient resource allocation.",
      metric: "20-40% Cost Reduction"
    },
    {
      title: "Vendor Consolidation", 
      description: "Simplify your IT ecosystem with fewer vendors, clearer accountability, and streamlined support.",
      metric: "Single Point of Contact"
    },
    {
      title: "Automation & AI Agents",
      description: "Deploy intelligent automation that handles routine tasks, freeing your team for strategic work.",
      metric: "80% Less Manual Work"
    },
    {
      title: "Next-Gen Dashboards",
      description: "Real-time insights and proactive alerts that keep you ahead of problems before they impact operations.",
      metric: "24/7 Monitoring"
    },
    {
      title: "Proactive Problem Resolution",
      description: "We detect and resolve IT issues before they impact your operations or your reputation.",
      metric: "99.9% Uptime"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-navy via-deep-blue to-navy text-white" id="why-mbacio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-6">
            Why MBACIO?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just fix problems—we prevent them. Our proactive approach ensures your business runs smoothly while you focus on growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-4 text-accent">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-2xl font-poppins font-bold text-white">
                  {benefit.metric}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-yellow text-navy hover:opacity-90 font-semibold text-lg px-8 py-6"
          >
            See How We Can Help Your Business
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyMBACIO;
