
import React from "react";

const integrations = [
  { name: "QuickBooks Online", logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png" },
  { name: "HubSpot", logo: "https://cdn-icons-png.flaticon.com/512/888/888867.png" },
  { name: "Salesforce", logo: "https://cdn-icons-png.flaticon.com/512/873/873089.png" },
  { name: "Microsoft 365", logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png" },
  { name: "Slack", logo: "https://cdn-icons-png.flaticon.com/512/2111/2111615.png" },
  { name: "Fishbowl Inventory", logo: "https://cdn-icons-png.flaticon.com/512/888/888847.png" },
];

const Integrations = () => {
  return (
    <section className="py-24 bg-navy relative text-white overflow-hidden" id="integrations">
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
        
        {/* Databox-inspired Grid Layout */}
        <div className="max-w-5xl mx-auto">
          {/* Top Row - 3 icons */}
          <div className="grid grid-cols-3 gap-8 mb-12 justify-items-center">
            {integrations.slice(0, 3).map((integration, i) => (
              <div
                key={integration.name}
                className="group flex flex-col items-center transition-all duration-300 hover:scale-110"
              >
                <div className="w-20 h-20 bg-white rounded-xl p-4 shadow-lg border-2 border-transparent group-hover:border-accent transition-all duration-300 group-hover:shadow-xl flex items-center justify-center">
                  <img
                    src={integration.logo}
                    alt={integration.name + " logo"}
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                </div>
                <span className="mt-3 text-sm font-medium text-white text-center group-hover:text-accent transition-colors duration-300">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Center Row - MBACIO icon in middle with side integrations */}
          <div className="grid grid-cols-3 gap-8 mb-12 items-center">
            {/* Left integration */}
            <div className="flex justify-end">
              <div className="group flex flex-col items-center transition-all duration-300 hover:scale-110">
                <div className="w-20 h-20 bg-white rounded-xl p-4 shadow-lg border-2 border-transparent group-hover:border-accent transition-all duration-300 group-hover:shadow-xl flex items-center justify-center">
                  <img
                    src={integrations[3].logo}
                    alt={integrations[3].name + " logo"}
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                </div>
                <span className="mt-3 text-sm font-medium text-white text-center group-hover:text-accent transition-colors duration-300">
                  {integrations[3].name}
                </span>
              </div>
            </div>
            
            {/* Center: MBACIO icon */}
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-full shadow-2xl border-4 border-accent flex items-center justify-center w-32 h-32 group hover:scale-105 transition-transform duration-300 relative">
                <img
                  src="/lovable-uploads/9047d06d-8e00-44f9-a949-19b842c87735.png"
                  alt="MBACIO AI Assistant"
                  className="w-20 h-20"
                  draggable={false}
                />
                <div className="absolute inset-0 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Right integration */}
            <div className="flex justify-start">
              <div className="group flex flex-col items-center transition-all duration-300 hover:scale-110">
                <div className="w-20 h-20 bg-white rounded-xl p-4 shadow-lg border-2 border-transparent group-hover:border-accent transition-all duration-300 group-hover:shadow-xl flex items-center justify-center">
                  <img
                    src={integrations[4].logo}
                    alt={integrations[4].name + " logo"}
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                </div>
                <span className="mt-3 text-sm font-medium text-white text-center group-hover:text-accent transition-colors duration-300">
                  {integrations[4].name}
                </span>
              </div>
            </div>
          </div>
          
          {/* Bottom Row - 1 icon centered */}
          <div className="flex justify-center">
            <div className="group flex flex-col items-center transition-all duration-300 hover:scale-110">
              <div className="w-20 h-20 bg-white rounded-xl p-4 shadow-lg border-2 border-transparent group-hover:border-accent transition-all duration-300 group-hover:shadow-xl flex items-center justify-center">
                <img
                  src={integrations[5].logo}
                  alt={integrations[5].name + " logo"}
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </div>
              <span className="mt-3 text-sm font-medium text-white text-center group-hover:text-accent transition-colors duration-300">
                {integrations[5].name}
              </span>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-white/80 mb-6 text-lg">
            Seamlessly integrate with the tools your team already loves
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-yellow text-navy px-8 py-4 rounded-lg font-bold font-poppins text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:opacity-90"
          >
            Book Your Free Assessment
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
