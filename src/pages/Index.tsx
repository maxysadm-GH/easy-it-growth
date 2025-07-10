
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import BlogTeaser from '../components/BlogTeaser';
import PricingCalculator from '../components/PricingCalculator';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Award, 
  Globe, 
  Shield,
  Zap,
  Users,
  TrendingUp,
  Clock,
  BarChart,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MBACIO, LLC",
    "description": "Specialized enterprise IT consulting and managed services for manufacturing, law, and CPA firms.",
    "url": "https://mbacio.com",
    "telephone": "+1-773-657-2300",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2515 Waukegan Road",
      "addressLocality": "Bannockburn",
      "addressRegion": "Illinois",
      "postalCode": "60015",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "42.1886",
      "longitude": "-87.8556"
    },
    "areaServed": "United States",
    "serviceArea": {
      "@type": "Country",
      "name": "United States"
    },
    "founder": {
      "@type": "Person",
      "name": "Mike Bacio"
    },
    "foundingDate": "2020",
    "industry": "Information Technology",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 5,
      "maxValue": 15
    },
    "services": [
      "IT Consulting",
      "Managed IT Services", 
      "Manufacturing Analytics",
      "ERP Implementation",
      "Cybersecurity",
      "Cloud Migration",
      "Business Intelligence"
    ],
    "targetMarket": [
      "Manufacturing Companies",
      "Law Firms", 
      "CPA Firms",
      "Mid-sized Businesses"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>MBACIO - Making I.T. Easy | IT & AI Consulting for Growing Businesses</title>
        <meta name="description" content="From food & beverage manufacturers to law and accounting firms — we simplify, automate, and modernize your IT so your team can focus on results. Book a free consultation." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />

      {/* Section 1: Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - The Message */}
            <div className="hero-text-content">
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
                Stop Wasting Margin on Inefficient IT.
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
                We deliver compliant, profitable, and secure IT operations for mid-market Manufacturing, Law, and CPA firms. 
                We connect your technology directly to your bottom line by reducing operational drag and mitigating risk.
              </p>
              
              <a 
                href="/schedule" 
                className="inline-flex items-center justify-center px-10 py-6 text-xl font-bold bg-gradient-yellow text-navy rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mb-6"
              >
                Schedule Your Strategic Audit
              </a>
              
              <p className="reassurance-copy text-sm text-gray-300 max-w-2xl">
                A 30-minute, no-obligation assessment to identify immediate opportunities for operational improvement.
              </p>
            </div>

            {/* Right Column - Professional Visual */}
            <div className="hero-image-placeholder bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 min-h-[400px] flex items-center justify-center">
              {/* Placeholder for high-impact brand image */}
              <div className="text-center text-white/60">
                <div className="w-32 h-32 bg-gradient-yellow rounded-full flex items-center justify-center mx-auto mb-6 opacity-20">
                  <TrendingUp className="w-16 h-16 text-navy" />
                </div>
                <p className="text-lg font-medium">Professional Brand Visual</p>
                <p className="text-sm">High-impact image placement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Proof of Results */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              Real Results for Real Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Don't just take our word for it. Here are the measurable improvements our clients achieve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-navy mb-3">45%</div>
                <div className="text-gray-600">Reduction in manual data entry through intelligent automation</div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-navy mb-3">23%</div>
                <div className="text-gray-600">Average improvement in OEE (Overall Equipment Effectiveness)</div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-navy mb-3">6+</div>
                <div className="text-gray-600">Administrative hours reclaimed per week through process automation</div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-navy mb-3">70%</div>
                <div className="text-gray-600">Reduction in daily IT support tickets within 90 days</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <a 
              href="/schedule" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-gradient-yellow text-navy rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Schedule Your Strategic Audit
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: The MBACIO Difference */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-navy text-white font-bold px-6 py-2 text-lg">
              🎯 Why Choose MBACIO
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              The MBACIO Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart? We don't just provide IT services - we bring unique strengths 
              that transform how your business operates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-navy rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-accent" />
                </div>
                <Badge className="mb-4 bg-gradient-yellow text-navy font-bold">
                  Niche Focus
                </Badge>
                <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                  Industry Specialization
                </h3>
                <p className="text-gray-700 font-inter leading-relaxed">
                  Deep expertise in Manufacturing, Law, and CPA firm operations. We understand your unique compliance requirements, workflows, and profitability drivers.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-navy rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-accent" />
                </div>
                <Badge className="mb-4 bg-gradient-yellow text-navy font-bold">
                  Battle-Tested Solutions
                </Badge>
                <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                  Real-World Experience
                </h3>
                <p className="text-gray-700 font-inter leading-relaxed">
                  We use every tool we recommend in our own business, ensuring authentic experience and understanding of your challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-navy rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-accent" />
                </div>
                <Badge className="mb-4 bg-gradient-yellow text-navy font-bold">
                  100% Bilingual Team
                </Badge>
                <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                  Bilingual Excellence
                </h3>
                <p className="text-gray-700 font-inter leading-relaxed">
                  All our agents are fluent in English & Spanish, ensuring seamless communication with your diverse team and clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Our 3-Step Framework */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-navy text-white font-bold px-6 py-2 text-lg">
              🎯 Our Process
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              Our 3-Step Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've refined our approach to deliver maximum ROI with minimum disruption to your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-navy">1</span>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                  Assessment
                </h3>
                <p className="text-gray-700 font-inter leading-relaxed">
                  Comprehensive analysis of your current IT infrastructure, workflows, and pain points to identify immediate opportunities for improvement.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-navy">2</span>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                  Stabilization
                </h3>
                <p className="text-gray-700 font-inter leading-relaxed">
                  Secure and stabilize your critical systems while eliminating vulnerabilities and ensuring compliance with industry standards.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-navy">3</span>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                  Operational Efficiency
                </h3>
                <p className="text-gray-700 font-inter leading-relaxed">
                  Implement intelligent automation and monitoring systems that drive measurable improvements to your bottom line.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <a 
              href="/schedule" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-gradient-yellow text-navy rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Schedule Your Strategic Audit
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: Our Core Focus Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              Our Core Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three specialized service areas designed to maximize your operational efficiency and profitability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                  Strategic IT Leadership & Compliance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Enterprise-level guidance to ensure your technology is secure, compliant, and aligned with your business goals.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                  Intelligent Automation & Operations
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We automate the manual processes that drain your resources, from the factory floor to the back office.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                  Bulletproof Security & Infrastructure
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Proactive, multi-layered security to protect your firm's data, reputation, and client trust.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* New Section: Build the Business Case for Automation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              Build the Business Case for Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Use our interactive ROI Calculator to instantly see the annual cost of a specific manual task. 
              Quantify your operational drag and discover the potential return on investment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <PricingCalculator />
          </div>
        </div>
      </section>

      {/* Section 6: Final Conversion Point */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8 text-accent">
            Ready to See the Financial Impact on Your P&L?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Let's discuss how we can transform your IT operations and deliver 
            measurable ROI for your business.
          </p>
          <a 
            href="/schedule" 
            className="inline-flex items-center justify-center px-10 py-6 text-xl font-bold bg-gradient-yellow text-navy rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Schedule Your Strategic Audit
          </a>
        </div>
      </section>

      {/* Keep: Latest Insights & Success Stories */}
      <BlogTeaser />

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
