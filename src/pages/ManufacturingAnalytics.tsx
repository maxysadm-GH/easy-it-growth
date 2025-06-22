
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Factory, BarChart3, TrendingUp, Shield } from 'lucide-react';
import BookingPopup from '../components/BookingPopup';

const ManufacturingAnalytics = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookAssessment = () => {
    setIsBookingOpen(true);
  };

  const manufacturingIntegrations = [
    { name: "Fishbowl Inventory", logo: "/lovable-uploads/76149f2e-0b85-4889-9a76-c7f2a3926d7c.png" },
    { name: "NetSuite", logo: "/lovable-uploads/ce3f28ff-97cd-41cf-9b02-622f72b9cc0b.png" },
    { name: "QuickBooks", logo: "/lovable-uploads/4196e0cf-1a9d-4697-b7f3-dbb3b3f867c7.png" },
    { name: "Microsoft Excel", logo: "/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png" }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-charcoal to-deep-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Factory className="w-16 h-16 text-accent mx-auto mb-6" />
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8">
                Manufacturing Analytics for Bannockburn & Chicagoland
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
                Transform your manufacturing operations with real-time inventory tracking, production analytics, 
                and financial insights. Serving manufacturers across Northern Illinois with comprehensive 
                business intelligence solutions.
              </p>
              <Button 
                onClick={handleBookAssessment}
                className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
              >
                Get Your Free Manufacturing Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-center text-navy mb-16">
                Manufacturing Intelligence That Drives Results
              </h2>
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="border-2 border-accent/20 hover:border-accent transition-colors duration-300">
                  <CardContent className="p-8 text-center">
                    <BarChart3 className="w-12 h-12 text-accent mx-auto mb-6" />
                    <h3 className="text-xl font-bold text-navy mb-4">Real-Time Production Tracking</h3>
                    <p className="text-gray-700">Monitor production efficiency, machine utilization, and quality metrics in real-time across your Chicagoland manufacturing facilities.</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-accent/20 hover:border-accent transition-colors duration-300">
                  <CardContent className="p-8 text-center">
                    <TrendingUp className="w-12 h-12 text-accent mx-auto mb-6" />
                    <h3 className="text-xl font-bold text-navy mb-4">Inventory Optimization</h3>
                    <p className="text-gray-700">Reduce carrying costs and prevent stockouts with intelligent inventory analytics and automated reorder points.</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-accent/20 hover:border-accent transition-colors duration-300">
                  <CardContent className="p-8 text-center">
                    <Shield className="w-12 h-12 text-accent mx-auto mb-6" />
                    <h3 className="text-xl font-bold text-navy mb-4">Cost Control & Profitability</h3>
                    <p className="text-gray-700">Track material costs, labor efficiency, and product profitability to maximize margins and reduce waste.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Showcase */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-poppins font-bold text-navy mb-12">
                Connect Your Manufacturing Tools
              </h2>
              <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
                {manufacturingIntegrations.map((integration, index) => (
                  <div key={index} className="w-20 h-20 bg-white rounded-xl p-3 shadow-lg">
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-8">
                Seamlessly integrate with Fishbowl Inventory, NetSuite ERP, QuickBooks, Excel, and 100+ other platforms 
                to create comprehensive manufacturing dashboards tailored for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Local Focus */}
        <section className="py-20 bg-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-8">
                Supporting Chicagoland Manufacturers
              </h2>
              <p className="text-xl text-gray-200 mb-12">
                Based in Bannockburn, Illinois, MBACIO understands the unique challenges facing manufacturers 
                in the Chicago metropolitan area. From small machine shops to large industrial facilities, 
                we provide business intelligence solutions that help you compete and grow.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-accent mb-4">Manufacturing Metrics We Track:</h3>
                  <ul className="text-gray-200 space-y-2">
                    <li>• Overall Equipment Effectiveness (OEE)</li>
                    <li>• Production scheduling efficiency</li>
                    <li>• Quality control metrics</li>
                    <li>• Material waste and yield rates</li>
                    <li>• Labor productivity and costs</li>
                    <li>• Supply chain performance</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-accent mb-4">Industries We Serve:</h3>
                  <ul className="text-gray-200 space-y-2">
                    <li>• Automotive parts manufacturing</li>
                    <li>• Food and beverage processing</li>
                    <li>• Pharmaceutical and medical devices</li>
                    <li>• Electronics and technology</li>
                    <li>• Industrial equipment</li>
                    <li>• Custom manufacturing</li>
                  </ul>
                </div>
              </div>
              <Button 
                onClick={handleBookAssessment}
                className="bg-accent text-navy hover:bg-accent/90 font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
              >
                Schedule Your Manufacturing Assessment
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <BookingPopup 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
};

export default ManufacturingAnalytics;
