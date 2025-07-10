
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AISuperPowers from '../components/AISuperPowers';
import IdealClients from '../components/IdealClients';
import WhyMBACIO from '../components/WhyMBACIO';
import ThreeStepFramework from '../components/ThreeStepFramework';
import ExpandedServices from '../components/ExpandedServices';
import AIInsights from '../components/AIInsights';
import Integrations from '../components/Integrations';
import CaseStudies from '../components/CaseStudies';
import BlogTeaser from '../components/BlogTeaser';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import TestimonialCard from '../components/TestimonialCard';
import { Helmet } from 'react-helmet-async';

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
      <Hero />
      <AISuperPowers />
      <IdealClients />
      <WhyMBACIO />
      <ThreeStepFramework />
      
      {/* Trusted By Industry Leaders Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-navy">Trusted By Industry Leaders</h2>
          
          {/* Client Logos */}
          <div className="flex justify-center items-center space-x-8 mb-16 opacity-60">
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
              <img 
                src="/lovable-uploads/placeholder-logo.png" 
                alt="Manufacturing client logo - MBACIO partner company"
                className="h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <span className="text-gray-500 text-sm hidden">Client Logo</span>
            </div>
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
              <img 
                src="/lovable-uploads/placeholder-logo-2.png" 
                alt="Law firm client logo - MBACIO legal technology partner"
                className="h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <span className="text-gray-500 text-sm hidden">Client Logo</span>
            </div>
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
              <img 
                src="/lovable-uploads/placeholder-logo-3.png" 
                alt="CPA firm client logo - MBACIO accounting technology partner"
                className="h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <span className="text-gray-500 text-sm hidden">Client Logo</span>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="MBACIO transformed our manufacturing operations with real-time analytics. We've seen a 23% improvement in OEE and reduced scrap rates by 40%."
              name="Sarah Johnson"
              title="Operations Director"
              company="Midwest Manufacturing Co."
              image="/lovable-uploads/testimonial-sarah.jpg"
              imageAlt="Sarah Johnson, Operations Director at Midwest Manufacturing Co., discussing MBACIO's manufacturing analytics implementation"
            />
            <TestimonialCard
              quote="Their expertise in legal technology helped us modernize our practice management systems while maintaining strict compliance standards."
              name="Michael Chen"
              title="Managing Partner"
              company="Chen & Associates Law Firm"
              image="/lovable-uploads/testimonial-michael.jpg"
              imageAlt="Michael Chen, Managing Partner at Chen & Associates Law Firm, in his Chicago office after MBACIO's legal technology implementation"
            />
            <TestimonialCard
              quote="The automation solutions MBACIO implemented saved us over 30 hours per week in manual processes. ROI was achieved in just 4 months."
              name="Lisa Rodriguez"
              title="CFO"
              company="Precision Accounting Group"
              image="/lovable-uploads/testimonial-lisa.jpg"
              imageAlt="Lisa Rodriguez, CFO at Precision Accounting Group, reviewing automated financial reports created by MBACIO's solutions"
            />
          </div>
        </div>
      </section>

      <AIInsights />
      <ExpandedServices />
      <Integrations />
      <CaseStudies />
      <BlogTeaser />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
