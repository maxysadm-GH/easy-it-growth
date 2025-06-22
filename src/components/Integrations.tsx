
import React, { useState } from "react";
import BookingPopup from './BookingPopup';

const integrations = [
  { 
    name: "QuickBooks Online", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/quickbooks.svg"
  },
  { 
    name: "HubSpot", 
    logo: "/lovable-uploads/ce3f28ff-97cd-41cf-9b02-622f72b9cc0b.png"
  },
  { 
    name: "Salesforce", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/salesforce.svg"
  },
  { 
    name: "Microsoft Excel", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftexcel.svg"
  },
  { 
    name: "Slack", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/slack.svg"
  },
  { 
    name: "Shopify", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg"
  },
  { 
    name: "Fishbowl Inventory", 
    logo: "/lovable-uploads/1d9f3afd-8528-4663-b663-8ca0cf42bb4c.png"
  },
  { 
    name: "Google Analytics", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googleanalytics.svg"
  },
  { 
    name: "Xero", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/xero.svg"
  },
  { 
    name: "NetSuite", 
    logo: "/lovable-uploads/6c02622d-f929-4272-8fb2-56a68e33cc30.png"
  },
  { 
    name: "Sage", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sage.svg"
  },
  { 
    name: "FreshBooks", 
    logo: "/lovable-uploads/b96e5d58-1268-4350-90f9-e2f5f1b25c2f.png"
  },
  { 
    name: "Zoho", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zoho.svg"
  },
  { 
    name: "monday.com", 
    logo: "/lovable-uploads/1ab91a6b-e3f8-43f8-9178-1fbd96d033d3.png"
  },
  { 
    name: "Asana", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/asana.svg"
  }
];

const Integrations = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookAssessment = () => {
    setIsBookingOpen(true);
  };

  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/lovable-uploads/ea466603-eb64-4dbb-be17-47a0e25c99e6.png";
  };

  // Define which logos should remain colored (uploaded logos)
  const coloredLogos = ['HubSpot', 'Fishbowl Inventory', 'NetSuite', 'FreshBooks', 'monday.com'];

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
          
          {/* Static Grid Layout - 5 columns desktop, 3 mobile */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
              {integrations.map((integration, i) => (
                <a
                  key={integration.name}
                  href="/"
                  className="group flex flex-col items-center transition-all duration-300 hover:scale-110"
                >
                  <div className="w-20 h-20 bg-white rounded-xl p-4 shadow-lg border-2 border-transparent group-hover:border-accent transition-all duration-300 group-hover:shadow-xl flex items-center justify-center">
                    <img
                      src={integration.logo}
                      alt={integration.name + " integration logo"}
                      className="w-full h-full object-contain transition-all duration-300"
                      style={{ 
                        filter: coloredLogos.includes(integration.name) 
                          ? 'none' 
                          : 'brightness(0) saturate(100%)',
                        transition: 'filter 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (!coloredLogos.includes(integration.name)) {
                          e.currentTarget.style.filter = 'none';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!coloredLogos.includes(integration.name)) {
                          e.currentTarget.style.filter = 'brightness(0) saturate(100%)';
                        }
                      }}
                      draggable={false}
                      onError={handleLogoError}
                    />
                  </div>
                  <span className="mt-3 text-sm font-medium text-white text-center group-hover:text-accent transition-colors duration-300">
                    {integration.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-white/80 mb-6 text-lg">
              Seamlessly integrate with the tools your team already loves
            </p>
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
