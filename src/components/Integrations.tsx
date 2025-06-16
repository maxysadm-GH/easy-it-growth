
import React from "react";

const integrations = [
  { name: "Excel", logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png" },
  { name: "Google Sheets", logo: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png" },
  { name: "Slack", logo: "https://cdn-icons-png.flaticon.com/512/2111/2111615.png" },
  { name: "Make", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968371.png" },
  { name: "Zapier", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png" },
  { name: "Trello", logo: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png" },
  { name: "Shopify", logo: "https://cdn-icons-png.flaticon.com/512/888/888839.png" },
  { name: "QuickBooks", logo: "/lovable-uploads/quickbooks-logo.svg" },
  { name: "Salesforce", logo: "/lovable-uploads/salesforce-logo.svg" },
  { name: "HubSpot", logo: "/lovable-uploads/hubspot-logo.svg" },
];

const IntegrationCartwheel = () => {
  const total = integrations.length;
  const radius = 160;

  return (
    <div className="relative w-[380px] h-[380px] sm:w-[450px] sm:h-[450px] mb-8 flex items-center justify-center">
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
              <img
                src={integration.logo}
                alt={integration.name + " logo"}
                className="w-16 h-16 bg-white rounded-2xl p-3 shadow-lg border-2 border-transparent group-hover:border-accent transition-all duration-300 group-hover:shadow-xl"
                draggable={false}
              />
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
      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-full shadow-2xl border-4 border-accent flex items-center justify-center w-32 h-32 group hover:scale-105 transition-transform duration-300">
        <img
          src="/lovable-uploads/9047d06d-8e00-44f9-a949-19b842c87735.png"
          alt="MBACIO AI Assistant"
          className="w-20 h-20"
          draggable={false}
        />
        <div className="absolute inset-0 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
    <section className="py-24 bg-navy relative text-white overflow-hidden" id="integrations">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-deep-blue/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6 text-accent drop-shadow-header">
            Works With Your Favorite Tools
          </h2>
          <p className="max-w-3xl mx-auto text-center text-lg md:text-xl mb-8 text-white/90 font-inter leading-relaxed">
            Connect 100+ business apps—CRM, ERP, accounting, marketing and more.
            <br />
            <span className="text-accent font-semibold">Unlock automation and real-time analytics.</span>
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
              className="inline-flex items-center gap-2 bg-gradient-yellow text-navy px-8 py-4 rounded-lg font-bold font-poppins text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:opacity-90"
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
