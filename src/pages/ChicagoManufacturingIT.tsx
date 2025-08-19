import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Factory, 
  TrendingUp, 
  Shield, 
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin
} from 'lucide-react';

const ChicagoManufacturingIT = () => {
  const handleCTAClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        location: `manufacturing_chicago_${location}`,
        action: 'assessment'
      });
    }
    window.open('https://calendly.com/mbacio/assessment', '_blank', 'noopener,noreferrer');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Manufacturing IT Services Chicago",
    "provider": {
      "@type": "Organization",
      "name": "MBACIO"
    },
    "description": "Specialized IT services for Chicago manufacturing companies - ERP integration, automation, cybersecurity, and real-time production dashboards.",
    "areaServed": [
      {"@type": "City", "name": "Chicago"},
      {"@type": "City", "name": "Bannockburn"},
      {"@type": "City", "name": "Deerfield"},
      {"@type": "City", "name": "Lake Forest"}
    ],
    "serviceType": "Manufacturing IT Support"
  };

  const services = [
    {
      icon: Factory,
      title: "ERP & MRP Integration",
      description: "Seamless integration of Fishbowl, Acumatica, and SAP with real-time production data.",
      benefits: ["Live inventory tracking", "Automated work orders", "Production scheduling"]
    },
    {
      icon: TrendingUp,
      title: "Manufacturing Dashboards",
      description: "Real-time KPIs for production efficiency, quality metrics, and cost tracking.",
      benefits: ["OEE monitoring", "Quality control alerts", "Cost per unit tracking"]
    },
    {
      icon: Shield,
      title: "Industrial Cybersecurity",
      description: "Protect OT/IT networks from ransomware and industrial espionage.",
      benefits: ["Network segmentation", "24/7 threat monitoring", "Compliance support"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Chicago Manufacturing IT Services – ERP Integration & Automation"
        description="Specialized IT services for Chicago manufacturing companies. ERP integration, production dashboards, cybersecurity, and automation. Serving Bannockburn, Deerfield, Lake Forest."
        keywords="Chicago manufacturing IT, Fishbowl integration Chicago, manufacturing cybersecurity, ERP support Bannockburn, production dashboards Illinois"
        structuredData={structuredData}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Industries", url: "/industries" },
        { name: "Manufacturing IT Chicago", url: "/manufacturing-it-chicago" }
      ]} />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-navy px-4 py-2 text-lg">
              #1 Manufacturing IT in Chicagoland
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              Manufacturing IT Services Chicago
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Specialized technology solutions for Chicago manufacturers. From ERP integration to cybersecurity, 
              we keep your production running smoothly and securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => handleCTAClick('hero')}
                className="bg-gradient-yellow text-navy font-bold hover:scale-105 transition-transform duration-300"
              >
                Get Free Manufacturing IT Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = '/dashboard-solutions'}
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                View Production Dashboards
              </Button>
            </div>
            <p className="text-sm text-gray-300 mt-6">
              📍 Serving Chicago, Bannockburn, Deerfield, Lake Forest & surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* Local Presence */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-poppins font-bold text-navy mb-6">
                  Local Chicago Manufacturing IT Experts
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Based in Bannockburn, we've been serving Chicago-area manufacturers for over 15 years. 
                  We understand the unique challenges of Illinois manufacturing - from compliance requirements 
                  to seasonal demand fluctuations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-gray-700">Local presence: 15-minute response time in Bannockburn/Deerfield</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent" />
                    <span className="text-gray-700">Direct line: (773) 657-2300 • English & Spanish support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-gray-700">Certified in Fishbowl, Acumatica, and major manufacturing ERPs</span>
                  </div>
                </div>
              </div>
              <Card className="bg-gradient-to-br from-accent/10 to-navy/10">
                <CardContent className="p-8">
                  <h3 className="text-xl font-poppins font-bold text-navy mb-4">Chicago Area Coverage</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-navy mb-2">North Shore:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Bannockburn</li>
                        <li>• Deerfield</li>
                        <li>• Lake Forest</li>
                        <li>• Highland Park</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-navy mb-2">Chicago Metro:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• North Chicago</li>
                        <li>• Waukegan</li>
                        <li>• Libertyville</li>
                        <li>• Gurnee</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-4">
                    Remote support available statewide. On-site service within 4 hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-navy mb-6">
                Manufacturing IT Services We Provide
              </h2>
              <p className="text-xl text-gray-600">
                Specialized solutions for Chicago-area manufacturing operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-navy" />
                      </div>
                      <h3 className="text-xl font-poppins font-bold text-navy mb-4">{service.title}</h3>
                      <p className="text-gray-700 mb-6">{service.description}</p>
                      <div className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            <span className="text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Chicago Manufacturing Challenges */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-poppins font-bold text-navy mb-8">
              Common Chicago Manufacturing IT Challenges We Solve
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card>
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-bold text-navy mb-2">Legacy ERP Integration</h3>
                  <p className="text-gray-700 text-sm">
                    Many Chicago manufacturers struggle with outdated Fishbowl or QuickBooks setups. 
                    We modernize without disrupting production.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-bold text-navy mb-2">Cybersecurity Compliance</h3>
                  <p className="text-gray-700 text-sm">
                    Illinois manufacturing faces increasing cyber threats. Our security solutions 
                    protect your IP and maintain compliance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Local CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Factory className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-8">
              Ready to Optimize Your Chicago Manufacturing Operation?
            </h2>
            <p className="text-xl text-gray-200 mb-12">
              Get a free assessment of your current IT infrastructure and see how we can 
              improve efficiency, security, and compliance.
            </p>
            <Button
              size="lg"
              onClick={() => handleCTAClick('final')}
              className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
            >
              Schedule Free On-Site Assessment
            </Button>
            <p className="text-sm text-gray-300 mt-6">
              📞 (773) 657-2300 • Available in English & Spanish • Same-day response
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChicagoManufacturingIT;