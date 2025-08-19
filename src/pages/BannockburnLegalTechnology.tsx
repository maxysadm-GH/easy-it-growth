import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Scale, 
  TrendingUp, 
  Shield, 
  FileText,
  CheckCircle,
  Users,
  Phone,
  MapPin
} from 'lucide-react';

const BannockburnLegalTechnology = () => {
  const handleCTAClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        location: `legal_bannockburn_${location}`,
        action: 'assessment'
      });
    }
    window.open('https://calendly.com/mbacio/assessment', '_blank', 'noopener,noreferrer');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Legal Technology Services Bannockburn",
    "provider": {
      "@type": "Organization",
      "name": "MBACIO"
    },
    "description": "Specialized technology services for Bannockburn law firms - case management, cybersecurity, document automation, and billing system integration.",
    "areaServed": [
      {"@type": "City", "name": "Bannockburn"},
      {"@type": "City", "name": "Deerfield"},
      {"@type": "City", "name": "Lake Forest"},
      {"@type": "City", "name": "Highland Park"}
    ],
    "serviceType": "Legal Technology Support"
  };

  const services = [
    {
      icon: FileText,
      title: "Case Management Integration",
      description: "Seamless integration of Clio, MyCase, and PracticePanther with document systems.",
      benefits: ["Automated time tracking", "Client portal setup", "Billing integration"]
    },
    {
      icon: Shield,
      title: "Legal Cybersecurity",
      description: "Attorney-client privilege protection with industry-specific security measures.",
      benefits: ["HIPAA compliance", "Secure client communications", "Data breach prevention"]
    },
    {
      icon: TrendingUp,
      title: "Law Firm Analytics",
      description: "Real-time dashboards for billing, case progress, and firm performance metrics.",
      benefits: ["Revenue tracking", "Case load analysis", "Client satisfaction metrics"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Bannockburn Legal Technology Services – Law Firm IT Support"
        description="Specialized technology services for Bannockburn law firms. Case management integration, legal cybersecurity, document automation. Serving Deerfield, Lake Forest, Highland Park."
        keywords="Bannockburn legal technology, law firm IT support, Clio integration, legal cybersecurity, attorney technology Highland Park"
        structuredData={structuredData}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Industries", url: "/industries" },
        { name: "Legal Technology Bannockburn", url: "/legal-technology-bannockburn" }
      ]} />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-navy px-4 py-2 text-lg">
              Trusted by North Shore Law Firms
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              Legal Technology Services Bannockburn
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Specialized technology solutions for Bannockburn area law firms. Secure case management, 
              cybersecurity, and practice efficiency - all designed for legal professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => handleCTAClick('hero')}
                className="bg-gradient-yellow text-navy font-bold hover:scale-105 transition-transform duration-300"
              >
                Get Free Legal IT Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = '/tools/assessment-risk'}
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                Check Your Security Risk
              </Button>
            </div>
            <p className="text-sm text-gray-300 mt-6">
              📍 Serving Bannockburn, Deerfield, Lake Forest, Highland Park & North Shore
            </p>
          </div>
        </div>
      </section>

      {/* Local Legal Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-poppins font-bold text-navy mb-6">
                  North Shore Legal Technology Specialists
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Located in Bannockburn, we understand the unique needs of North Shore law firms. 
                  From solo practitioners to mid-size firms, we provide technology solutions that 
                  enhance your practice while maintaining the highest security standards.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-gray-700">On-site service: Bannockburn, Deerfield, Lake Forest area</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent" />
                    <span className="text-gray-700">Direct attorney line: (773) 657-2300</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-gray-700">Certified in Clio, MyCase, PracticePanther, and LawPay</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <span className="text-gray-700">Attorney-client privilege and confidentiality maintained</span>
                  </div>
                </div>
              </div>
              <Card className="bg-gradient-to-br from-accent/10 to-navy/10">
                <CardContent className="p-8">
                  <h3 className="text-xl font-poppins font-bold text-navy mb-4">North Shore Legal Community</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-navy mb-2">Primary Service Area:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Bannockburn</li>
                        <li>• Deerfield</li>
                        <li>• Lake Forest</li>
                        <li>• Highland Park</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-navy mb-2">Practice Areas:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Family Law</li>
                        <li>• Corporate Law</li>
                        <li>• Real Estate</li>
                        <li>• Personal Injury</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-4">
                    Emergency legal IT support available 24/7
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
                Legal Technology Services for North Shore Attorneys
              </h2>
              <p className="text-xl text-gray-600">
                Specialized solutions designed for law firm workflows and compliance
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

      {/* Legal IT Challenges */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-poppins font-bold text-navy mb-8">
              Common Legal Technology Challenges We Solve
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card>
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-bold text-navy mb-2">Client Data Security</h3>
                  <p className="text-gray-700 text-sm">
                    Protecting attorney-client privilege requires specialized security measures. 
                    We implement legal-grade encryption and access controls.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <FileText className="w-8 h-8 text-accent mb-4" />
                  <h3 className="font-bold text-navy mb-2">Document Management</h3>
                  <p className="text-gray-700 text-sm">
                    Streamline case file organization, version control, and secure client access 
                    with integrated document management systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Local Legal CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Scale className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-8">
              Enhance Your Law Firm's Technology Infrastructure
            </h2>
            <p className="text-xl text-gray-200 mb-12">
              Get a confidential assessment of your current technology setup and discover how 
              to improve efficiency while maintaining client confidentiality.
            </p>
            <Button
              size="lg"
              onClick={() => handleCTAClick('final')}
              className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
            >
              Schedule Confidential IT Assessment
            </Button>
            <p className="text-sm text-gray-300 mt-6">
              📞 (773) 657-2300 • All consultations confidential • Attorney-client privilege respected
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BannockburnLegalTechnology;