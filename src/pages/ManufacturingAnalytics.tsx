
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, BarChart3, Settings, Shield, DollarSign, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ManufacturingAnalytics = () => {
  const handleScheduleAudit = () => {
    window.open('https://outlook.office.com/book/MBACIOConsultation@mbacio.com/', '_blank');
  };

  const handleDownloadReport = () => {
    // This would link to an actual PDF resource
    console.log('Download P&L Impact Report');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Manufacturing Analytics & Intelligence",
        "provider": {
          "@type": "Organization",
          "name": "MBACIO, LLC",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2515 Waukegan Road",
            "addressLocality": "Bannockburn",
            "addressRegion": "Illinois",
            "postalCode": "60015",
            "addressCountry": "US"
          },
          "telephone": "+1-773-657-2300"
        },
        "description": "Transform your manufacturing operations with real-time OEE tracking, scrap rate analysis, and cost of quality insights. Enterprise-grade analytics solutions for manufacturers nationwide.",
        "serviceType": "Manufacturing Analytics",
        "areaServed": "United States",
        "audience": {
          "@type": "Audience",
          "audienceType": "Manufacturing Companies"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the typical OEE improvement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our manufacturing analytics solutions typically deliver 15-25% OEE improvement through real-time monitoring, downtime analysis, and performance optimization."
            }
          },
          {
            "@type": "Question",
            "name": "How do you integrate with our existing ERP system?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We integrate with all major ERP systems including SAP, Oracle, Microsoft Dynamics, and Acumatica through APIs and data connectors, ensuring seamless data flow without disrupting existing operations."
            }
          },
          {
            "@type": "Question",
            "name": "What ROI can we expect from manufacturing analytics?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Clients typically see $250K+ in annual savings through waste reduction, improved efficiency, and optimized operations with a payback period of 6-12 months."
            }
          },
          {
            "@type": "Question",
            "name": "Do you support real-time monitoring?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our platform provides 24/7 real-time monitoring of all production metrics including OEE, scrap rates, downtime analysis, and quality metrics with instant alerts and dashboards."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Manufacturing Analytics & Intelligence | MBACIO</title>
        <meta name="description" content="Transform your manufacturing operations with real-time OEE tracking, scrap rate analysis, and cost of quality insights. Based in Chicago, serving manufacturers nationwide." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Manufacturing Analytics & Intelligence</h1>
          <p className="text-xl max-w-4xl mx-auto text-gray-300 mb-8">
            Transform your manufacturing operations with real-time OEE tracking, scrap rate analysis, 
            and cost of quality insights. Based in Chicago, serving manufacturers nationwide with 
            enterprise-grade analytics solutions.
          </p>
          <Button 
            onClick={handleScheduleAudit}
            className="bg-gradient-yellow text-navy font-bold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300"
          >
            Schedule Your Strategic Audit
          </Button>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-navy">Critical Manufacturing KPIs We Track</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="w-12 h-12 mx-auto text-accent mb-4" />
                <CardTitle>Overall Equipment Effectiveness (OEE)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Monitor availability, performance, and quality in real-time</p>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-accent">85%+</p>
                  <p className="text-sm text-gray-600">Average OEE improvement</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BarChart3 className="w-12 h-12 mx-auto text-accent mb-4" />
                <CardTitle>Scrap Rate Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Track and reduce material waste across production lines</p>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-accent">3-7%</p>
                  <p className="text-sm text-gray-600">Typical scrap reduction</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <DollarSign className="w-12 h-12 mx-auto text-accent mb-4" />
                <CardTitle>Cost of Quality (COQ)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Measure prevention, appraisal, and failure costs</p>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-accent">$250K+</p>
                  <p className="text-sm text-gray-600">Average annual savings</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-navy">Manufacturing Intelligence Platform</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <img 
                src="/lovable-uploads/444b256c-f552-4b14-aecd-395d6963a3ae.png" 
                alt="MBACIO manufacturing analytics dashboard showing real-time OEE metrics, production line status, and quality control data for a Chicago-area manufacturer"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-6 text-navy">Real-Time Production Monitoring</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Live OEE Dashboard:</strong> Track availability, performance, and quality metrics across all production lines
                  </div>
                </li>
                <li className="flex items-start">
                  <BarChart3 className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Downtime Analysis:</strong> Identify bottlenecks and optimize changeover times
                  </div>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Throughput Optimization:</strong> Maximize production efficiency and reduce cycle times
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <img 
                src="/lovable-uploads/4c6038a0-a9a6-4643-b7c5-aa8a4acb59d1.png" 
                alt="Manufacturing quality control dashboard designed by MBACIO showing cost of quality metrics, defect tracking, and predictive maintenance alerts"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-6 text-navy">Quality & Cost Management</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Quality Control Integration:</strong> Connect inspection data to production metrics
                  </div>
                </li>
                <li className="flex items-start">
                  <DollarSign className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Cost Tracking:</strong> Monitor material costs, labor efficiency, and overhead allocation
                  </div>
                </li>
                <li className="flex items-start">
                  <Settings className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Predictive Maintenance:</strong> Reduce unplanned downtime with data-driven insights
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-navy">Ready to Transform Your Manufacturing Operations?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={handleScheduleAudit}
              className="bg-gradient-yellow text-navy font-bold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300"
            >
              Schedule Your Strategic Audit
            </Button>
            <Button 
              onClick={handleDownloadReport}
              variant="outline"
              className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-3 rounded-lg transition-all duration-300"
            >
              Download Sample P&L Impact Report
            </Button>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Quantified Manufacturing ROI</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-accent mb-2">15-25%</h3>
              <p>OEE Improvement</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-accent mb-2">$50K-$200K</h3>
              <p>Annual Waste Reduction</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-accent mb-2">6-12 months</h3>
              <p>Typical Payback Period</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-accent mb-2">24/7</h3>
              <p>Real-time Monitoring</p>
            </div>
          </div>
          <Button 
            onClick={handleScheduleAudit}
            className="bg-gradient-yellow text-navy font-bold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300"
          >
            Get Your Manufacturing ROI Analysis
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManufacturingAnalytics;
