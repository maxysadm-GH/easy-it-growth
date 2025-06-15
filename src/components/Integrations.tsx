
import React from "react";
const integrations = [
  { name: "Salesforce", logo: "/lovable-uploads/salesforce-logo.svg" },
  { name: "HubSpot", logo: "/lovable-uploads/hubspot-logo.svg" },
  { name: "QuickBooks", logo: "/lovable-uploads/quickbooks-logo.svg" },
  { name: "Slack", logo: "/lovable-uploads/slack-logo.svg" },
  { name: "Xero", logo: "/lovable-uploads/xero-logo.svg" },
  { name: "Google Analytics", logo: "/lovable-uploads/google-analytics-logo.svg" },
  { name: "Zendesk", logo: "/lovable-uploads/zendesk-logo.svg" },
  // Add more as you create each logo
];

const Integrations = () => {
  return (
    <section className="py-24 bg-deep-blue relative text-white" id="integrations">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-5xl font-poppins font-bold mb-6 text-center text-accent drop-shadow-header">
          Integrations Powered for Business Growth
        </h2>
        <p className="max-w-2xl mx-auto text-center text-lg md:text-xl mb-10 text-white/90 font-inter">
          Connect 100+ business apps—CRM, ERP, accounting, marketing and more. <b>Unlock automation and analytics with every integration.</b>
        </p>
        {/* Animating grid inspired by Databox */}
        <div className="relative flex items-center justify-center py-6">
          {/* Central logo */}
          <div className="relative z-10 bg-white p-3 rounded-full shadow-lg border-4 border-accent flex items-center justify-center">
            <img
              src="/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png"
              alt="MBACIO"
              className="w-16 h-16"
            />
          </div>
          {/* Animated partner logos, using relative positioning/circle */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {integrations.map((integration, i) => {
              const angle = (2 * Math.PI * i) / integrations.length;
              const radius = 115;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <div
                  key={integration.name}
                  className="absolute transition-transform duration-700"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: `translate(-50%, -50%) scale(1)`,
                    animation: `spinLogo 8s linear infinite`
                  }}
                >
                  <img
                    src={integration.logo}
                    alt={integration.name + " logo"}
                    className="w-11 h-11 rounded-lg bg-white shadow-md border"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <style>{`
          @keyframes spinLogo {
            to { transform: rotate(360deg); }
          }
        `}</style>
        <div className="text-center mt-10">
          <a
            href="/integrations"
            className="inline-block bg-gradient-yellow text-navy px-8 py-2 rounded-lg font-bold font-poppins text-lg shadow hover:opacity-90 transition"
          >
            View All Integrations
          </a>
        </div>
      </div>
    </section>
  );
};
export default Integrations;
