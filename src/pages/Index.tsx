
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
        <title>Smarter IT. Simpler Growth. | MBACIO Serving Bannockburn & Chicagoland</title>
        <meta name="description" content="Automation, dashboards, and secure support—built for busy teams who need results, not jargon. Serving manufacturing, law, and CPA firms in Bannockburn & Chicagoland." />
        <meta name="keywords" content="IT automation, business dashboards, managed IT services, Bannockburn IT, Chicagoland IT consulting, manufacturing IT, legal IT, CPA firm IT" />
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
                Smarter IT. Simpler Growth.
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
                Automation, dashboards, and secure support—built for busy teams who need results, not jargon.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a 
                  href="https://outlook.office.com/book/MBACIOITAssessments@mbacio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-6 text-xl font-bold bg-gradient-yellow text-navy rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Book Your Free Assessment
                </a>
                <a 
                  href="/dashboard-solutions"
                  className="inline-flex items-center justify-center px-10 py-6 text-xl font-bold border-2 border-accent text-accent rounded-lg shadow-lg hover:bg-accent hover:text-navy hover:scale-105 transition-all duration-300"
                >
                  See What We Build
                </a>
              </div>
              
              <p className="reassurance-copy text-sm text-gray-300 max-w-2xl">
                30-minute, no-obligation consultation to identify immediate opportunities for operational improvement.
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
              href="https://outlook.office.com/book/MBACIOITAssessments@mbacio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-gradient-yellow text-navy rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book Your Free Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: The MBACIO Superpowers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-navy text-white font-bold px-6 py-2 text-lg">
              🚀 Our Superpowers
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              The MBACIO Superpowers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make every penny work for you with Automation, AI, and Secure Support backed by 20 years of Manufacturing expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-navy rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-accent" />
                </div>
                <Badge className="mb-4 bg-gradient-yellow text-navy font-bold">
                  Intelligent Automation
                </Badge>
                <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                  Automation & AI
                </h3>
                <p className="text-gray-700 font-inter leading-relaxed">
                  Cut manual work by 45% with intelligent automation and AI-powered insights. Every process optimized to maximize your ROI.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-navy rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-accent" />
                </div>
                <Badge className="mb-4 bg-gradient-yellow text-navy font-bold">
                  Bulletproof Security
                </Badge>
                <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                  Secure Support
                </h3>
                <p className="text-gray-700 font-inter leading-relaxed">
                  24/7 enterprise-grade security with bilingual excellence. English & Spanish support ensuring your team never misses a beat.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-navy rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-accent" />
                </div>
                <Badge className="mb-4 bg-gradient-yellow text-navy font-bold">
                  20 Years Manufacturing
                </Badge>
                <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                  Data-Driven Decisions
                </h3>
                <p className="text-gray-700 font-inter leading-relaxed">
                  Two decades of Manufacturing expertise with data-driven insights that optimize costs and maximize every penny you invest.
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
              href="https://outlook.office.com/book/MBACIOITAssessments@mbacio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-gradient-yellow text-navy rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book Your Free Assessment
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
            href="https://outlook.office.com/book/MBACIOITAssessments@mbacio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-6 text-xl font-bold bg-gradient-yellow text-navy rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Book Your Free Assessment
          </a>
        </div>
      </section>

      {/* Works With Your Favorite Tools */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-navy mb-6">
              Works With Your Favorite Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As business intelligence software, we build comprehensive integrations. Across our 100+ connectors, we've pre-built thousands of metrics—just drag & drop into any dashboard and your visualizations update automatically.
            </p>
          </div>
          
          {/* Scrolling Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-[scroll_60s_linear_infinite] gap-8">
              {/* First set of logos */}
              <div className="flex gap-8 min-w-max">
                <a href="/integrations/quickbooks-online" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/d324d6cc-e672-484c-98b4-975a82f442d9.png" alt="QuickBooks Online integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">QuickBooks Online</span>
                </a>
                <a href="/integrations/xero" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/2921df64-9629-4495-9d5b-353d790d9820.png" alt="Xero integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">Xero</span>
                </a>
                <a href="/integrations/hubspot" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/7ec7ce1c-7a50-49ef-b262-cd8cdeb7ad9e.png" alt="HubSpot integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">HubSpot</span>
                </a>
                <a href="/integrations/salesforce" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/a35e001c-605e-491a-8c9e-35d244ad3cf2.png" alt="Salesforce integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">Salesforce</span>
                </a>
                <a href="/integrations/asana" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/b63669e1-3437-45a5-8cad-0cb43f692a99.png" alt="Asana integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">Asana</span>
                </a>
                <a href="/integrations/trello" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/0bd362c9-eb56-41d6-8b73-6606f2890b56.png" alt="Trello integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">Trello</span>
                </a>
                <a href="/integrations/monday" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/285df723-c382-4cfc-b46f-891081bd952a.png" alt="Monday.com integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">Monday.com</span>
                </a>
                <a href="/integrations/clickup" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/6b455002-4313-4c38-b07f-e9f8f7aeff21.png" alt="ClickUp integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">ClickUp</span>
                </a>
                <a href="/integrations/netsuite" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/6176fded-c097-452c-8848-2cd686b672eb.png" alt="NetSuite integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">NetSuite</span>
                </a>
                <a href="/integrations/fishbowl-inventory" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/7a81da02-7a89-49d6-bb4f-eca861e810b9.png" alt="Fishbowl Inventory integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">Fishbowl Inventory</span>
                </a>
                <a href="/integrations/shopify" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/64928a8d-ea10-47d3-a59b-ca0199366b21.png" alt="Shopify integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">Shopify</span>
                </a>
                <a href="/integrations/slack" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/e2a53896-8cd4-4a89-be8f-49b1626c6bcd.png" alt="Slack integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">Slack</span>
                </a>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-8 min-w-max">
                <a href="/integrations/quickbooks-online" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/d324d6cc-e672-484c-98b4-975a82f442d9.png" alt="QuickBooks Online integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">QuickBooks Online</span>
                </a>
                <a href="/integrations/xero" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/2921df64-9629-4495-9d5b-353d790d9820.png" alt="Xero integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">Xero</span>
                </a>
                <a href="/integrations/hubspot" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/7ec7ce1c-7a50-49ef-b262-cd8cdeb7ad9e.png" alt="HubSpot integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">HubSpot</span>
                </a>
                <a href="/integrations/salesforce" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/a35e001c-605e-491a-8c9e-35d244ad3cf2.png" alt="Salesforce integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">Salesforce</span>
                </a>
                <a href="/integrations/asana" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/b63669e1-3437-45a5-8cad-0cb43f692a99.png" alt="Asana integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">Asana</span>
                </a>
                <a href="/integrations/trello" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/0bd362c9-eb56-41d6-8b73-6606f2890b56.png" alt="Trello integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">Trello</span>
                </a>
                <a href="/integrations/monday" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/285df723-c382-4cfc-b46f-891081bd952a.png" alt="Monday.com integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">Monday.com</span>
                </a>
                <a href="/integrations/clickup" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/6b455002-4313-4c38-b07f-e9f8f7aeff21.png" alt="ClickUp integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">ClickUp</span>
                </a>
                <a href="/integrations/netsuite" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/6176fded-c097-452c-8848-2cd686b672eb.png" alt="NetSuite integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">NetSuite</span>
                </a>
                <a href="/integrations/fishbowl-inventory" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/7a81da02-7a89-49d6-bb4f-eca861e810b9.png" alt="Fishbowl Inventory integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">Fishbowl Inventory</span>
                </a>
                <a href="/integrations/shopify" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/64928a8d-ea10-47d3-a59b-ca0199366b21.png" alt="Shopify integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">Shopify</span>
                </a>
                <a href="/integrations/slack" className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow min-w-[150px]">
                  <img src="/lovable-uploads/e2a53896-8cd4-4a89-be8f-49b1626c6bcd.png" alt="Slack integration" className="w-16 h-16 object-contain mb-2" />
                  <span className="text-sm font-medium text-navy">Slack</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Seamlessly integrate with the tools your team already loves</p>
            <a 
              href="/integrations"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-gradient-yellow text-navy rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View All Integrations <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
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
