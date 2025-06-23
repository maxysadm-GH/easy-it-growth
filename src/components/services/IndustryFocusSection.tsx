
import { Card, CardContent } from '@/components/ui/card';
import {
  TrendingUp,
  Users
} from "lucide-react";

const industryFocus = [
  {
    title: "Manufacturing Excellence",
    description: "ERP/MRP integration specialists with IoT data management and supply chain visibility.",
    caseStudy: "How We Helped a Food Manufacturer Reduce Downtime by 40%",
    features: ["ERP/MRP Integration", "IoT Sensor Management", "Supply Chain Dashboards", "Bilingual Production Reports"],
    link: "/ideal-client/erp-mrp"
  },
  {
    title: "CPA & Professional Services",
    description: "QuickBooks integration, document automation, and client portals with bilingual interfaces.",
    caseStudy: "From Paper to Profit: A Chicago CPA Firm's Digital Transformation",
    features: ["Practice Management Integration", "Document Automation", "Bilingual Client Portals", "Compliance Tracking"],
    link: "/ideal-client/cpa-law"
  }
];

const IndustryFocusSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
            Industry Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep knowledge and proven success in key industries, with bilingual support 
            tailored to your business needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {industryFocus.map((industry, idx) => (
            <Card key={industry.title} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 border-2 border-accent/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-gradient-yellow-end" />
                  </div>
                  <a 
                    href={industry.link}
                    className="text-2xl font-poppins font-bold text-navy hover:text-accent transition-colors cursor-pointer"
                  >
                    {industry.title}
                  </a>
                </div>
                
                <p className="text-gray-700 font-inter leading-relaxed mb-6">
                  {industry.description}
                </p>
                
                <div className="bg-gradient-yellow/10 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-navy mb-2">Case Study:</h4>
                  <p className="text-sm text-gray-700 italic">"{industry.caseStudy}"</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {industry.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryFocusSection;
