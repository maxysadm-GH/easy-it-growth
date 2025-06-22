
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, TrendingUp, Users, DollarSign } from 'lucide-react';
import BookingPopup from '../components/BookingPopup';

const EcommerceInsights = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookAssessment = () => {
    setIsBookingOpen(true);
  };

  const ecommerceIntegrations = [
    { name: "Shopify", logo: "/lovable-uploads/b96e5d58-1268-4350-90f9-e2f5f1b25c2f.png" },
    { name: "Stripe", logo: "/lovable-uploads/ae564825-4d4f-43ea-b2f9-a67a15532b80.png" },
    { name: "Google Analytics", logo: "/lovable-uploads/444b256c-f552-4b14-aecd-395d6963a3ae.png" },
    { name: "Mailchimp", logo: "/lovable-uploads/ffe520da-678f-47c4-ae10-5aa2728c4b2e.png" }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-charcoal to-deep-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ShoppingCart className="w-16 h-16 text-accent mx-auto mb-6" />
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8">
                E-commerce Analytics for Chicagoland Retailers
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
                Optimize your online store performance with comprehensive e-commerce analytics. 
                Track sales, customer behavior, and marketing ROI across all your digital channels. 
                Serving online retailers throughout the Chicago metropolitan area.
              </p>
              <Button 
                onClick={handleBookAssessment}
                className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
              >
                Get Your Free E-commerce Analysis
              </Button>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-center text-navy mb-16">
                E-commerce Intelligence That Drives Sales
              </h2>
              <div className="grid lg:grid-cols-4 gap-8">
                <Card className="border-2 border-accent/20 hover:border-accent transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-navy mb-3">Sales Performance</h3>
                    <p className="text-gray-700">Track revenue trends, conversion rates, and average order value across all your sales channels.</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-accent/20 hover:border-accent transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-navy mb-3">Customer Insights</h3>
                    <p className="text-gray-700">Understand customer behavior, lifetime value, and shopping patterns to improve retention.</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-accent/20 hover:border-accent transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <DollarSign className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-navy mb-3">Marketing ROI</h3>
                    <p className="text-gray-700">Measure the effectiveness of your marketing campaigns and optimize ad spend allocation.</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-accent/20 hover:border-accent transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <ShoppingCart className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-navy mb-3">Inventory Intelligence</h3>
                    <p className="text-gray-700">Monitor product performance and inventory levels to prevent stockouts and overstock.</p>
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
                Connect Your E-commerce Stack
              </h2>
              <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
                {ecommerceIntegrations.map((integration, index) => (
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
                Seamlessly integrate with Shopify, Stripe, Google Analytics, Mailchimp, and 100+ other platforms 
                to create unified e-commerce dashboards that drive growth.
              </p>
            </div>
          </div>
        </section>

        {/* Local Focus */}
        <section className="py-20 bg-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-8">
                E-commerce Excellence in Chicagoland
              </h2>
              <p className="text-xl text-gray-200 mb-12">
                MBACIO helps Chicagoland e-commerce businesses compete in the digital marketplace. 
                From startup online stores to established retailers, we provide the analytics 
                and insights you need to grow your online presence.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-accent mb-4">E-commerce Metrics We Track:</h3>
                  <ul className="text-gray-200 space-y-2">
                    <li>• Conversion rate optimization</li>
                    <li>• Customer acquisition cost</li>
                    <li>• Product performance analytics</li>
                    <li>• Cart abandonment rates</li>
                    <li>• Customer lifetime value</li>
                    <li>• Return on ad spend (ROAS)</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-accent mb-4">E-commerce Types We Serve:</h3>
                  <ul className="text-gray-200 space-y-2">
                    <li>• Fashion and apparel retailers</li>
                    <li>• Home goods and furniture</li>
                    <li>• Health and beauty products</li>
                    <li>• Specialty food and beverage</li>
                    <li>• Electronics and technology</li>
                    <li>• B2B e-commerce platforms</li>
                  </ul>
                </div>
              </div>
              <Button 
                onClick={handleBookAssessment}
                className="bg-accent text-navy hover:bg-accent/90 font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
              >
                Boost Your E-commerce Analytics
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

export default EcommerceInsights;
