
import { Card, CardContent } from '@/components/ui/card';
import { Settings, Users, Calendar, File } from 'lucide-react';

const IdealClients = () => {
  const clients = [
    {
      icon: Settings,
      title: "ERP-Powered Manufacturers",
      description: "Companies running Fishbowl, Acumatica, Infor, or QuickBooks/QBO who need seamless integration and automation.",
      highlight: "Fishbowl • Acumatica • Infor"
    },
    {
      icon: Users,
      title: "Finance Leaders & CFOs",
      description: "Looking to optimize spend, reduce IT noise, and deploy real-time dashboards for better decision making.",
      highlight: "Expense Optimization • Dashboards"
    },
    {
      icon: Calendar,
      title: "Food & Beverage Operations",
      description: "Compliance-heavy environments requiring secure, automated workflows and regulatory reporting.",
      highlight: "Compliance • Automation"
    },
    {
      icon: File,
      title: "CPA Firms & Law Offices",
      description: "Seeking vendor consolidation, automation, and secure remote workflows to serve clients better.",
      highlight: "Vendor Consolidation • Security"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/30" id="clients">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
            Our Ideal Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in serving growing businesses that need reliable, automated IT solutions to scale efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-yellow rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <client.icon className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-navy mb-3">
                    {client.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {client.description}
                </p>
                
                <div className="inline-block bg-accent/20 text-navy px-3 py-1 rounded-full text-sm font-medium">
                  {client.highlight}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            <span className="font-semibold text-navy">100+ businesses</span> trust us to keep their operations running smoothly
          </p>
        </div>
      </div>
    </section>
  );
};

export default IdealClients;
