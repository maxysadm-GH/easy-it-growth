
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookingPopup from './BookingPopup';
import { integrations } from '../data/integrations';

const Integrations = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookAssessment = () => {
    setIsBookingOpen(true);
  };

  // Create duplicated arrays for seamless infinite scroll
  const duplicatedIntegrations = [...integrations, ...integrations, ...integrations];

  return (
    <>
      <section className="py-20 md:py-24 bg-navy relative text-white overflow-hidden" id="integrations">
        {/* SEO Meta Tags */}
        <title>IT Integrations & Dashboard Solutions | MBACIO | Bannockburn & Chicagoland</title>
        <meta name="description" content="100+ business intelligence integrations including QuickBooks, Salesforce, Fishbowl, and more. Pre-built metrics and automated dashboards. Serving Bannockburn & Chicagoland." />
        
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-deep-blue/30"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(250, 207, 57, 0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 80%, rgba(250, 207, 57, 0.1) 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              100+ Ready-to-Use Integrations
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-poppins font-bold mb-8 text-accent drop-shadow-header">
              Connect Everything You Use
            </h2>
            
            <p className="max-w-4xl mx-auto text-center text-lg md:text-xl mb-12 text-white/90 font-inter leading-relaxed">
              Stop switching between apps. Our business intelligence platform connects all your tools 
              with pre-built metrics and automated dashboards that update in real-time.
            </p>
            
            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-2">100+</div>
                <div className="text-sm md:text-base text-gray-300">Pre-Built Connectors</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-2">90%</div>
                <div className="text-sm md:text-base text-gray-300">Time Savings</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-2">24h</div>
                <div className="text-sm md:text-base text-gray-300">Setup Time</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-sm md:text-base text-gray-300">Uptime</div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Animated Logo Carousel */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8">
              <div className="flex animate-[scroll_60s_linear_infinite] hover:[animation-play-state:paused]">
                {duplicatedIntegrations.map((integration, i) => (
                  <Link
                    key={`${integration.slug}-${i}`}
                    to={`/integrations/${integration.slug}`}
                    className="group flex flex-col items-center transition-all duration-300 hover:scale-110 flex-shrink-0 mx-4 md:mx-6"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl p-3 md:p-4 shadow-xl border-2 border-transparent group-hover:border-accent transition-all duration-300 group-hover:shadow-2xl flex items-center justify-center hover:bg-gradient-to-br hover:from-white hover:to-gray-50">
                      <img
                        src={integration.logo}
                        alt={`${integration.name} integration logo`}
                        className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                        draggable={false}
                        onLoad={() => console.log(`Logo loaded successfully: ${integration.name} - ${integration.logo}`)}
                        onError={() => console.log(`Logo failed to load: ${integration.name} - ${integration.logo}`)}
                      />
                    </div>
                    <span className="mt-3 text-xs md:text-sm font-bold text-white text-center group-hover:text-accent transition-colors duration-300 whitespace-nowrap">
                      {integration.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Enhanced CTA Section */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-6">
                Ready to Connect Your Business Tools?
              </h3>
              <p className="text-white/80 mb-8 text-lg md:text-xl leading-relaxed">
                Join 500+ businesses who've eliminated manual data entry and gained real-time insights
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Link 
                  to="/integrations"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-navy px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold font-poppins text-lg shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Explore All Integrations
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <button
                  onClick={handleBookAssessment}
                  className="inline-flex items-center gap-2 bg-gradient-yellow text-navy px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold font-poppins text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:opacity-90"
                >
                  Book Free Assessment
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Add CSS for the enhanced scroll animation */}
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333333%);
            }
          }
        `}</style>
      </section>

      {/* Booking Popup */}
      <BookingPopup 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
};

export default Integrations;
