
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Settings,
  Shield,
  Cloud,
  BarChart2,
  Sliders
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Help Desk & Support",
    description: "Fast, reliable support that gets you back to work with 24/7 monitoring and rapid response."
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "AI-driven threat detection, email security, and comprehensive security audits."
  },
  {
    icon: Cloud,
    title: "Cloud & Microsoft 365",
    description: "Zero-downtime migration, management, and optimization for cloud infrastructure."
  },
  {
    icon: BarChart2,
    title: "Data & AI Tools",
    description: "Centralized dashboards, automation, and forecasting to drive business intelligence."
  },
  {
    icon: Sliders,
    title: "Strategy & Virtual CIO",
    description: "Executive IT guidance to plan, budget, and grow your technology infrastructure."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 text-navy">
              Complete IT Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed">
              Discover MBACIO's full-service IT offerings: support, cybersecurity, 
              cloud migration, AI automation, and strategic planning.
            </p>
            <Button size="lg" className="bg-accent text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300">
              Book Your Free Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Display first 3 services in top row */}
            {services.slice(0, 3).map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-navy" />
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-navy mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 font-inter leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
            
            {/* Display last 2 services centered in bottom row */}
            <div className="md:col-span-2 lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {services.slice(3).map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <Card
                      key={service.title}
                      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200"
                    >
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-navy" />
                        </div>
                        <h3 className="text-xl font-poppins font-bold text-navy mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-700 font-inter leading-relaxed">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Every business is unique. Let's discuss how we can tailor our services 
            to meet your specific needs and challenges.
          </p>
          <Button size="lg" className="bg-accent text-navy hover:bg-accent/90 font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300">
            Book Your Free Assessment
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
