
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Settings,
  Shield,
  Cloud,
  BarChart2,
  Sliders,
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Help Desk & Support",
    description: "Fast, reliable support that gets you back to work.",
    color: "bg-blue-50 border-electric-blue/30 hover:border-electric-blue"
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description: "AI-driven threat detection, email security, audits.",
    color: "bg-red-50 border-electric-blue/30 hover:border-electric-blue"
  },
  {
    icon: Cloud,
    title: "Cloud & Microsoft 365",
    description: "Zero-downtime migration, management, optimization.",
    color: "bg-green-50 border-electric-blue/30 hover:border-electric-blue"
  },
  {
    icon: BarChart2,
    title: "Data & AI Tools",
    description: "Centralized dashboards, automation, forecasting.",
    color: "bg-purple-50 border-electric-blue/30 hover:border-electric-blue"
  },
  {
    icon: Sliders,
    title: "Strategy & Virtual CIO",
    description: "Executive IT guidance to plan, budget, grow.",
    color: "bg-orange-50 border-electric-blue/30 hover:border-electric-blue"
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-inter font-bold mb-8 text-navy">
              Complete IT Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-slate-gray mb-12 leading-relaxed">
              From cybersecurity to automation, we provide comprehensive IT services 
              that grow with your business and protect what matters most.
            </p>
            <Button size="lg" className="bg-electric-blue text-white font-semibold text-xl px-10 py-6 glow-hover">
              Book Your Free Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${service.color}`}
                >
                  <CardContent className="card-spacing text-center">
                    <div className="w-16 h-16 bg-electric-blue rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-inter font-bold text-navy mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-gray font-inter leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Button variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white font-semibold w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-5xl font-inter font-bold mb-8">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Every business is unique. Let's discuss how we can tailor our services 
            to meet your specific needs and challenges.
          </p>
          <Button size="lg" className="bg-electric-blue text-white font-semibold text-xl px-10 py-6 glow-hover">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
