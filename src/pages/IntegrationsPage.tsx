
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { integrations, integrationCategories, getIntegrationsByCategory } from '../data/integrations';
import { Search, Play, CheckCircle, Zap, TrendingUp, Shield } from 'lucide-react';
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
        
        {/* Enhanced Hero Section with Video */}
        <section className="relative pt-24 pb-32 bg-gradient-to-br from-navy via-charcoal to-deep-blue text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-deep-blue/20"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              {/* Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
                  <Zap className="w-4 h-4" />
                  100+ Pre-Built Integrations
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold mb-8 drop-shadow-header">
                  Connect <span className="text-accent">Everything</span>
                  <br />Control Everything
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Stop fighting with disconnected systems. Our platform connects all your business tools 
                  with pre-built metrics and automated dashboards that work instantly.
                </p>
                
                {/* Impact Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100+</div>
                    <div className="text-sm md:text-base text-gray-300">Ready Integrations</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">90%</div>
                    <div className="text-sm md:text-base text-gray-300">Time Savings</div>
                  </div>
                  <div className="col-span-2 md:col-span-1 text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24h</div>
                    <div className="text-sm md:text-base text-gray-300">Setup Time</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    onClick={handleBookAssessment}
                    size="lg"
                    className="bg-gradient-yellow text-navy font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 hover:scale-105 transition-all duration-300 shadow-2xl"
                  >
                    Book Your Free Assessment
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </div>
              </div>

              {/* Video/Visual Section */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  {/* Video Placeholder */}
                  <div className="aspect-video bg-navy/50 rounded-xl mb-6 flex items-center justify-center group cursor-pointer hover:bg-navy/40 transition-all duration-300">
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-navy ml-1" />
                    </div>
                  </div>
                  
                  {/* Quick Benefits */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-white font-medium">Real-time data sync across all platforms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-white font-medium">Pre-built metrics and KPIs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-white font-medium">No coding required</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-navy mb-6">
                  Why Businesses Choose Our Integrations
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Stop wasting time on manual data entry and disconnected systems. 
                  Our integrations deliver measurable results from day one.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-10 h-10 text-navy" />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-4">Instant ROI</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    See results in 24 hours, not months. Our clients typically save 15+ hours per week 
                    on manual data tasks.
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-10 h-10 text-navy" />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-4">Enterprise Security</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Bank-level encryption and compliance. Your data stays secure while flowing 
                    seamlessly between systems.
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-10 h-10 text-navy" />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-4">Zero Maintenance</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Set it and forget it. Our integrations self-heal and auto-update, 
                    so you focus on growth, not IT issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Search & Filter Section */}
        <section className="py-16 bg-gray-50 border-y-2 border-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-navy mb-4">
                  Find Your Perfect Integration
                </h2>
                <p className="text-xl text-gray-600">
                  Search through 100+ pre-built connectors with thousands of ready-to-use metrics
                </p>
              </div>
              
              {/* Enhanced Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <Input
                  type="text"
                  placeholder="Search integrations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-4 text-lg border-2 border-gray-300 focus:border-accent rounded-xl shadow-lg"
                />
              </div>

              {/* Enhanced Category Filter */}
              <div className="flex flex-wrap gap-3 justify-center">
                {integrationCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-yellow text-navy shadow-xl scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-105 shadow-lg border-2 border-gray-200'
                    }`}
                  >
                    {category}
                    {category !== 'All' && (
                      <span className="ml-2 text-sm opacity-75">
                        ({getIntegrationsByCategory(category).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Integrations Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
              {filteredIntegrations.map((integration) => (
                <Link
                  key={integration.id}
                  to={`/integrations/${integration.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-gray-100 hover:border-accent/50 overflow-hidden">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 shadow-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={integration.logo}
                            alt={integration.name}
                            className="w-full h-full object-contain"
                            onLoad={() => console.log(`Logo loaded: ${integration.name} - ${integration.logo}`)}
                            onError={() => console.log(`Logo failed: ${integration.name} - ${integration.logo}`)}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-poppins font-bold text-navy mb-1 group-hover:text-accent transition-colors duration-300">
                            {integration.name}
                          </h3>
                          <span className="text-sm text-accent font-bold bg-accent/10 px-2 py-1 rounded-full">
                            {integration.category}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 font-inter leading-relaxed mb-6 text-sm md:text-base">
                        {integration.shortDescription}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {integration.keyBenefits.slice(0, 2).map((benefit, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gradient-yellow/20 text-navy px-3 py-1 rounded-full font-medium"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-accent font-bold text-sm group-hover:text-navy transition-colors duration-300">
                        <span>Learn More</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredIntegrations.length === 0 && (
              <div className="text-center py-16">
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-navy mb-4">No integrations found</h3>
                <p className="text-xl text-gray-500 mb-8">Try adjusting your search or filter criteria</p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="bg-accent text-navy hover:bg-accent/90 font-bold"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-deep-blue/20"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-6 py-3 rounded-full text-lg font-bold mb-8 backdrop-blur-sm">
                <Zap className="w-5 h-5" />
                Custom Integration Available
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
                Don't See Your <span className="text-accent">Integration?</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                We build custom integrations for any system you use. 
                Most custom integrations are ready in 48-72 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link to="/integrations/request">
                  <Button size="lg" className="bg-gradient-yellow text-navy hover:bg-gradient-yellow/90 font-bold text-xl px-12 py-6 hover:scale-105 transition-all duration-300 shadow-2xl">
                    Request Custom Integration
                  </Button>
                </Link>
                <Button 
                  onClick={handleBookAssessment}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold text-xl px-12 py-6 hover:scale-105 transition-all duration-300"
                >
                  Book Strategy Call
                </Button>
              </div>
              
              {/* Social Proof */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm md:text-base text-gray-300">Businesses Connected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99.9%</div>
                  <div className="text-sm md:text-base text-gray-300">Uptime Guaranteed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">48h</div>
                  <div className="text-sm md:text-base text-gray-300">Custom Setup</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm md:text-base text-gray-300">Expert Support</div>
                </div>
              </div>
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

export default IntegrationsPage;
