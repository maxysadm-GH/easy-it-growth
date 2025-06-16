
import React from "react";

const integrations = [
  { name: "QuickBooks Online", logo: "https://app-screenshots.s3.amazonaws.com/prod/05e8e67d-00bb-5de8-9ce4-0a69b49d1252.png" },
  { name: "HubSpot", logo: "https://app-screenshots.s3.amazonaws.com/prod/c7c41a20-25dc-5b9b-bb2c-4b3a33a2d4e8.png" },
  { name: "Salesforce", logo: "https://app-screenshots.s3.amazonaws.com/prod/dea7eddc-fe59-5a13-8c6a-ddeac0cd3e5b.png" },
  { name: "Microsoft Excel", logo: "https://app-screenshots.s3.amazonaws.com/prod/0829ef8e-7b8b-52a1-ba92-9ad1fb4d3777.png" },
  { name: "Slack", logo: "https://app-screenshots.s3.amazonaws.com/prod/81720c3b-d6bf-51bb-81b7-2f1b10d13a62.png" },
  { name: "Fishbowl Inventory", logo: "https://app-screenshots.s3.amazonaws.com/prod/d36bb325-b825-5c7e-bb60-ea0b3be5fb5a.png" },
  { name: "Shopify", logo: "https://app-screenshots.s3.amazonaws.com/prod/df4a3a55-a0ac-5a06-a5ed-e1eeaf91e69e.png" },
  { name: "Google Analytics", logo: "https://app-screenshots.s3.amazonaws.com/prod/b7dfc33b-8b49-5c19-af3e-a0c4a46eaceb.png" },
  { name: "Xero", logo: "https://app-screenshots.s3.amazonaws.com/prod/a9b4f69b-a9ca-541b-a72f-6e0fbbe4c38f.png" },
  { name: "NetSuite", logo: "https://app-screenshots.s3.amazonaws.com/prod/5bcd3d85-e1bb-5b33-9b4b-8e8c8b18c8b3.png" },
  { name: "Sage", logo: "https://app-screenshots.s3.amazonaws.com/prod/a0fe8a33-de78-51dd-91d7-2a7dcecd3e0a.png" },
  { name: "FreshBooks", logo: "https://app-screenshots.s3.amazonaws.com/prod/b2f3a4b2-f8bd-5432-9b1c-1e2d3a4b5c6d.png" },
  { name: "Zoho", logo: "https://app-screenshots.s3.amazonaws.com/prod/c8b2e1b6-f3b5-5c42-9a3d-7e8f9a0b1c2d.png" },
  { name: "monday.com", logo: "https://app-screenshots.s3.amazonaws.com/prod/e1d3b2f4-a5c6-5b89-9f2e-3d4a5b6c7e8f.png" },
  { name: "Asana", logo: "https://app-screenshots.s3.amazonaws.com/prod/f2e4c3d5-b6a7-5c90-8e1f-4e5a6b7c8d9e.png" }
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
        
        {/* Grid Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
            {integrations.map((integration, i) => (
              <div
                key={integration.name}
                className="group flex flex-col items-center transition-all duration-300 hover:scale-110"
              >
                <div className="w-20 h-20 bg-white rounded-xl p-3 shadow-lg border-2 border-transparent group-hover:border-accent transition-all duration-300 group-hover:shadow-xl flex items-center justify-center">
                  <img
                    src={integration.logo}
                    alt={integration.name + " logo"}
                    className="w-full h-full object-contain"
                    draggable={false}
                    onError={(e) => {
                      // Fallback for broken images
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23112d4e'/%3E%3Ctext x='20' y='20' text-anchor='middle' dy='0.35em' fill='white' font-size='8'%3E" + integration.name.charAt(0) + "%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <span className="mt-3 text-sm font-medium text-white text-center group-hover:text-accent transition-colors duration-300">
                  {integration.name}
                </span>
              </div>
            ))}
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
