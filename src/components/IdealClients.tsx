
import { Card, CardContent } from '@/components/ui/card';
import { Gear, Users, Utensils, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const clientData = [
  {
    icon: Gear,
    title: "ERP & MRP-Powered Manufacturers",
    description: "Manufacturers running ERP/MRP systems like Fishbowl, Acumatica, Infor, or QuickBooks/QBO who need seamless integration, automation, and tech-backed operational visibility.",
    highlight: "Fishbowl • Acumatica • Infor",
    path: "/ideal-client/erp-mrp"
  },
  {
    icon: Users,
    title: "Finance Leaders & CFOs",
    description: "Finance executives aiming to optimize spend, reduce IT noise, and deploy real-time dashboards and advanced analytics for truly data-driven decisions.",
    highlight: "Expense Optimization • Dashboards",
    path: "/ideal-client/finance-leaders"
  },
  {
    icon: Utensils,
    title: "Food & Beverage Operations",
    description: "Multi-site, compliance-focused food and beverage companies needing secure, automated workflows and modern regulatory reporting that scales.",
    highlight: "Compliance • Automation",
    path: "/ideal-client/food-beverage"
  },
  {
    icon: FileText,
    title: "CPA Firms & Law Offices",
    description: "Professional offices seeking vendor consolidation, automation, and secure remote IT workflows to meet evolving client & compliance demands.",
    highlight: "Vendor Consolidation • Security",
    path: "/ideal-client/cpa-law"
  }
];

const IdealClients = () => {
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
          {clientData.map((client, idx) => (
            <Link
              to={client.path}
              key={client.title}
              className="group focus:outline-none"
              aria-label={`View case for ${client.title}`}
            >
              <Card
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm h-full flex flex-col"
              >
                <CardContent className="p-6 flex flex-col flex-1">
                  <div>
                    <div className="w-16 h-16 bg-gradient-yellow rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <client.icon className="w-8 h-8 text-navy" />
                    </div>
                    <h3 className="text-xl font-poppins font-semibold text-navy mb-3">
                      {client.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    {client.description}
                  </p>

                  <div className="mt-auto">
                    <span className="inline-block bg-pale-yellow text-navy px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      {client.highlight}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealClients;
