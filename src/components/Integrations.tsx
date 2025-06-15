
import React from "react";

const integrations = [
  { name: "Salesforce", logo: "/lovable-uploads/salesforce-logo.svg" },
  { name: "HubSpot", logo: "/lovable-uploads/hubspot-logo.svg" },
  { name: "QuickBooks", logo: "/lovable-uploads/quickbooks-logo.svg" },
  { name: "Slack", logo: "/lovable-uploads/slack-logo.svg" },
  { name: "Xero", logo: "/lovable-uploads/xero-logo.svg" },
  { name: "Google Analytics", logo: "/lovable-uploads/google-analytics-logo.svg" },
  { name: "Zendesk", logo: "/lovable-uploads/zendesk-logo.svg" },
];

const Integrations = () => {
  return (
    <section className="py-24 bg-navy relative text-white" id="integrations">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-5xl font-poppins font-bold mb-6 text-accent drop-shadow-header text-center">
          Integrations Powered for Business Growth
        </h2>
        <p className="max-w-2xl mx-auto text-center text-lg md:text-xl mb-8 text-white/90 font-inter">
          Connect 100+ business apps—CRM, ERP, accounting, marketing and more.{" "}
          <b>Unlock automation and analytics with every integration.</b>
        </p>
        {/* Animated grid inspired by Databox */}
        <div className="flex flex-col items-center justify-center py-8">
          <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] mb-8 flex items-center justify-center">
            {/* Animated integration logos */}
            {integrations.map((integration, i) => {
              const total = integrations.length;
              const angle = ((2 * Math.PI) / total) * i;
              const radius = 135;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <div
                  key={integration.name}
                  className="absolute transition-transform duration-700"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: `translate(-50%, -50%) rotate(${angle}rad)`,
                    animation: `spinLogo 22s linear infinite`
                  }}
                >
                  <img
                    src={integration.logo}
                    alt={integration.name + " logo"}
                    className="w-14 h-14 bg-white rounded-xl p-2 shadow-md border hover:scale-110 transition-transform duration-150"
                    draggable={false}
                  />
                </div>
              );
            })}
            {/* Our logo in the center */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-full shadow-lg border-4 border-accent flex items-center justify-center w-24 h-24">
              <img
                src="/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png"
                alt="MBACIO"
                className="w-16 h-16"
                draggable={false}
              />
            </div>
          </div>
          <style>{`
            @keyframes spinLogo {
              to { transform: rotate(1turn); }
            }
          `}</style>
          <a
            href="/integrations"
            className="inline-block bg-gradient-yellow text-navy px-8 py-3 rounded-lg font-bold font-poppins text-lg shadow hover:opacity-90 transition"
          >
            View All Integrations
          </a>
        </div>
      </div>
    </section>
  );
};
export default Integrations;
