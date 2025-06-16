
import React from "react";

const integrations = [
  { name: "Excel", logo: "https://cdn-icons-png.flaticon.com/512/732/732220.png" },
  { name: "Google Sheets", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968331.png" },
  { name: "QuickBooks", logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png" },
  { name: "HubSpot", logo: "https://cdn-icons-png.flaticon.com/512/888/888867.png" },
  { name: "Salesforce", logo: "https://cdn-icons-png.flaticon.com/512/873/873089.png" },
  { name: "Shopify", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png" },
  { name: "Slack", logo: "https://cdn-icons-png.flaticon.com/512/2111/2111615.png" },
  { name: "Make", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968371.png" },
  { name: "Zapier", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png" },
  { name: "Trello", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968791.png" },
];

const IntegrationCartwheel = () => {
  const total = integrations.length;
  const radius = 160;

  return (
    <div className="relative w-[400px] h-[400px] mb-8 flex items-center justify-center">
      {integrations.map((integration, i) => {
        const angle = ((2 * Math.PI) / total) * i;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <div
            key={integration.name}
            className="absolute transition-all duration-300 hover:scale-110 hover:z-10"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%)`,
              animation: `spin 20s linear infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <div className="group relative">
              <div className="w-16 h-16 bg-white rounded-2xl p-3 shadow-lg border-2 border-transparent group-hover:border-electric-blue transition-all duration-300 group-hover:shadow-xl flex items-center justify-center">
                <img
                  src={integration.logo}
                  alt={integration.name + " logo"}
                  className="w-10 h-10 object-contain"
                  draggable={false}
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-xs font-medium text-white bg-navy/90 px-2 py-1 rounded whitespace-nowrap">
                  {integration.name}
                </span>
              </div>
            </div>
          </div>
        );
      })}
      
      {/* Center: MBACIO bot head icon */}
      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-full shadow-2xl border-4 border-electric-blue flex items-center justify-center w-32 h-32 group hover:scale-105 transition-transform duration-300">
        <img
          src="/lovable-uploads/9047d06d-8e00-44f9-a949-19b842c87735.png"
          alt="MBACIO AI Assistant"
          className="w-20 h-20"
          draggable={false}
        />
        <div className="absolute inset-0 rounded-full bg-electric-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <style>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

const Integrations = () => {
  return (
    <section className="section-padding bg-navy relative text-white overflow-hidden" id="integrations">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-transparent to-slate-gray/20"></div>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-inter font-bold mb-6 text-electric-blue drop-shadow-header">
            Works With Your Favorite Tools
          </h2>
          <p className="max-w-4xl mx-auto text-center text-lg md:text-xl mb-8 text-white/90 font-inter leading-relaxed">
            As business intelligence software, we build comprehensive integrations. Across our 100+ connectors, we've pre-built thousands of metrics—just drag & drop into any dashboard and your visualizations update automatically.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center py-12">
          <IntegrationCartwheel />
          
          <div className="text-center mt-8">
            <p className="text-white/80 mb-6 text-lg">
              Seamlessly integrate with the tools your team already loves
            </p>
            <a
              href="/integrations"
              className="inline-flex items-center gap-2 bg-electric-blue text-white px-8 py-4 rounded-lg font-semibold font-inter text-lg shadow-xl glow-hover"
            >
              View All Integrations
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
