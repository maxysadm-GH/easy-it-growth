
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

const IntegrationCartwheel = () => {
  // Animation: Spin, with logos orbiting around MBACIO bot icon center
  const total = integrations.length;
  const radius = 135;

  return (
    <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] mb-8 flex items-center justify-center">
      {integrations.map((integration, i) => {
        const angle = ((2 * Math.PI) / total) * i;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <div
            key={integration.name}
            className="absolute transition-transform duration-1000"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%) rotate(${angle}rad)`,
              animation: `spinLogo 18s linear infinite`
            }}
          >
            <img
              src={integration.logo}
              alt={integration.name + " logo"}
              className="w-14 h-14 bg-white rounded-xl p-2 shadow-md border hover:scale-110 transition-transform hover:-translate-y-2 duration-150"
              draggable={false}
            />
          </div>
        );
      })}
      {/* Center: MBACIO bot head icon, much larger */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-lg border-4 border-accent flex items-center justify-center w-28 h-28">
        <img
          src="/lovable-uploads/9047d06d-8e00-44f9-a949-19b842c87735.png"
          alt="MBACIO AI Assistant"
          className="w-18 h-18"
          draggable={false}
        />
      </div>
      <style>{`
        @keyframes spinLogo {
          to { transform: rotate(1turn); }
        }
      `}</style>
    </div>
  );
};

const Integrations = () => {
  return (
    <section className="py-24 bg-navy relative text-white" id="integrations">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-5xl font-poppins font-bold mb-6 text-accent drop-shadow-header text-center">
          Integrations Powered for Business Growth
        </h2>
        <p className="max-w-2xl mx-auto text-center text-lg md:text-xl mb-8 text-white/90 font-inter">
          Connect 100+ business apps—CRM, ERP, accounting, marketing and more.
          <b> Unlock automation and real-time analytics.</b>
        </p>
        <div className="flex flex-col items-center justify-center py-8">
          <IntegrationCartwheel />
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
