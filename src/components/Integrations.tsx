import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookingPopup from './BookingPopup';
import { integrations } from '../data/integrations';

const Integrations = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookAssessment = () => {
    setIsBookingOpen(true);
  };

  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log('Logo failed to load:', e.currentTarget.src);
    e.currentTarget.src = "/lovable-uploads/ea466603-eb64-4dbb-be17-47a0e25c99e6.png";
  };

  // Create duplicated arrays for seamless infinite scroll
  const duplicatedIntegrations = [...integrations, ...integrations, ...integrations];

  return (
    <>
      <section className="py-24 bg-navy relative text-white overflow-hidden" id="integrations">
        {/* SEO Meta Tags */}
        <title>IT Integrations & Dashboard Solutions | MBACIO | Bannockburn & Chicagoland</title>
        <meta name="description" content="100+ business intelligence integrations including QuickBooks, Salesforce, Fishbowl, and more. Pre-built metrics and automated dashboards. Serving Bannockburn & Chicagoland." />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-deep-blue/20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6 text-accent drop-shadow-header">
              Works With Your Favorite Tools
            </h2>
            <p className="max-w-4xl mx-auto text-center text-lg md:text-xl mb-8 text-white/90 font-inter leading-relaxed">
              As business intelligence software, we build comprehensive integrations. Across our 100+ connectors, 
              we've pre-built thousands of metrics—just drag & drop into any dashboard and your visualizations update automatically.
            </p>
          </div>
          
          {/* Animated Logo Carousel */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="relative overflow-hidden">
              <div className="flex animate-[scroll_45s_linear_infinite] hover:[animation-play-state:paused]">
                {duplicatedIntegrations.map((integration, i) => (
                  <Link
                    key={`${integration.slug}-${i}`}
                    to={`/integrations/${integration.slug}`}
                    className="group flex flex-col items-center transition-all duration-300 hover:scale-110 flex-shrink-0 mx-6"
                  >
                    <div className="w-24 h-24 bg-white rounded-xl p-4 shadow-lg border-2 border-transparent group-hover:border-accent transition-all duration-300 group-hover:shadow-xl flex items-center justify-center">
                      <img
                        src={integration.logo}
                        alt={`${integration.name} integration logo`}
                        className="w-full h-full object-contain transition-all duration-300 grayscale group-hover:grayscale-0"
                        draggable={false}
                        onError={handleLogoError}
                        onLoad={() => console.log(`Logo loaded successfully: ${integration.name}`)}
                      />
                    </div>
                    <span className="mt-3 text-sm font-medium text-white text-center group-hover:text-accent transition-colors duration-300 whitespace-nowrap">
                      {integration.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-white/80 mb-6 text-lg">
              Seamlessly integrate with the tools your team already loves
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/integrations"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-navy px-8 py-4 rounded-lg font-bold font-poppins text-lg shadow-xl transition-all duration-300 hover:scale-105"
              >
                View All Integrations
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <button
                onClick={handleBookAssessment}
                className="inline-flex items-center gap-2 bg-gradient-yellow text-navy px-8 py-4 rounded-lg font-bold font-poppins text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:opacity-90"
              >
                Book Your Free Assessment
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Add CSS for the scroll animation */}
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
