
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getIntegrationBySlug, integrations } from '../data/integrations';
import { ArrowLeft, CheckCircle, BarChart3, Zap, Shield } from 'lucide-react';
import BookingPopup from '../components/BookingPopup';

const IntegrationDetail = () => {
  const { integrationSlug } = useParams<{ integrationSlug: string }>();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  const integration = integrationSlug ? getIntegrationBySlug(integrationSlug) : null;

  const handleBookAssessment = () => {
    setIsBookingOpen(true);
  };

  if (!integration) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Integration Not Found</h1>
          <Link to="/integrations" className="text-accent hover:underline">
            ← Back to Integrations
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedIntegrations = integrations
    .filter(int => int.category === integration.category && int.id !== integration.id)
    .slice(0, 3);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Breadcrumb */}
        <section className="pt-32 pb-8 bg-white">
          <div className="container mx-auto px-4">
            <Link 
              to="/integrations" 
              className="inline-flex items-center text-accent hover:text-navy transition-colors duration-300 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Integrations
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="pb-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8">
                <div className="w-24 h-24 bg-white rounded-xl p-4 shadow-lg flex items-center justify-center mr-8">
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-navy mb-2">
                    {integration.name}
                  </h1>
                  <p className="text-xl text-gray-600">
                    {integration.shortDescription}
                  </p>
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mt-2">
                    {integration.category}
                  </span>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {integration.description}
              </p>

              <Button 
                onClick={handleBookAssessment}
                className="bg-gradient-yellow text-navy font-bold text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
              >
                Connect {integration.name} Today
              </Button>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-poppins font-bold text-navy mb-12 text-center">
                Key Benefits
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {integration.keyBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-inter">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How MBACIO Connects */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-poppins font-bold text-navy mb-8 text-center">
                How MBACIO Connects {integration.name}
              </h2>
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-navy mb-3">Automated Setup</h3>
                    <p className="text-gray-600">Secure, one-click connection with automatic data synchronization</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <BarChart3 className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-navy mb-3">Pre-Built Metrics</h3>
                    <p className="text-gray-600">Thousands of ready-to-use KPIs and visualizations</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-navy mb-3">Enterprise Security</h3>
                    <p className="text-gray-600">Bank-level encryption and compliance standards</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-lg text-gray-700 text-center">
                {integration.useCase}
              </p>
            </div>
          </div>
        </section>

        {/* Metrics & Data Points */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-poppins font-bold text-navy mb-12 text-center">
                Key Metrics & Data Points
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {integration.metrics.map((metric, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center"
                  >
                    <span className="text-navy font-medium">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Setup Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-poppins font-bold text-navy mb-12 text-center">
                Setup Process
              </h2>
              <div className="space-y-6">
                {integration.setupSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-navy font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-lg text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Integrations */}
        {relatedIntegrations.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-poppins font-bold text-navy mb-12 text-center">
                  Related Integrations
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedIntegrations.map((relatedIntegration) => (
                    <Link
                      key={relatedIntegration.id}
                      to={`/integrations/${relatedIntegration.slug}`}
                      className="group"
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="p-6 text-center">
                          <div className="w-16 h-16 bg-white rounded-lg p-3 shadow-sm flex items-center justify-center mx-auto mb-4">
                            <img
                              src={relatedIntegration.logo}
                              alt={relatedIntegration.name}
                              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="text-lg font-bold text-navy mb-2">
                            {relatedIntegration.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {relatedIntegration.shortDescription}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-8">
              Ready to Connect {integration.name}?
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Let our experts help you set up {integration.name} integration and create 
              powerful dashboards that drive your business forward.
            </p>
            <Button 
              onClick={handleBookAssessment}
              className="bg-accent text-navy hover:bg-accent/90 font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
            >
              Book Your Free Assessment
            </Button>
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

export default IntegrationDetail;
