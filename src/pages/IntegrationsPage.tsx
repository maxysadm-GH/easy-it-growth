
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { integrations, integrationCategories, getIntegrationsByCategory } from '../data/integrations';
import { Search } from 'lucide-react';
import BookingPopup from '../components/BookingPopup';

const IntegrationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const filteredIntegrations = getIntegrationsByCategory(selectedCategory)
    .filter(integration => 
      integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleBookAssessment = () => {
    setIsBookingOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-charcoal to-deep-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8">
                100+ Business Integrations
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
                Connect your favorite business tools with MBACIO's comprehensive integration platform. 
                Pre-built metrics, automated dashboards, and real-time insights for all your systems.
              </p>
              <Button 
                onClick={handleBookAssessment}
                className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
              >
                Book Your Free Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search integrations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 text-lg border-gray-300 focus:border-accent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 justify-center">
                {integrationCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-accent text-navy shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredIntegrations.map((integration) => (
                <Link
                  key={integration.id}
                  to={`/integrations/${integration.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-white rounded-lg p-3 shadow-lg flex items-center justify-center mr-4">
                          <img
                            src={integration.logo}
                            alt={integration.name}
                            className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                            style={{ filter: 'brightness(0) saturate(100%)' }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.filter = 'none';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.filter = 'brightness(0) saturate(100%)';
                            }}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-poppins font-bold text-navy mb-1">
                            {integration.name}
                          </h3>
                          <span className="text-sm text-accent font-medium">
                            {integration.category}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700 font-inter leading-relaxed mb-4">
                        {integration.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {integration.keyBenefits.slice(0, 2).map((benefit, index) => (
                          <span
                            key={index}
                            className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredIntegrations.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500">No integrations found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8">
              Don't See Your Integration?
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
              We're constantly adding new integrations. Let us know what tools you use, 
              and we'll help you connect them to your MBACIO dashboard.
            </p>
            <Button 
              onClick={handleBookAssessment}
              className="bg-accent text-navy hover:bg-accent/90 font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
            >
              Request Custom Integration
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

export default IntegrationsPage;
