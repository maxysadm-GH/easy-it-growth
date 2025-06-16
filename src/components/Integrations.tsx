
import React from "react";

const integrations = [
  { 
    name: "QuickBooks Online", 
    logo: "https://images.ctfassets.net/5965pury2lcm/4BtBWCBiiwmoqQiEsE6wuC/f8b5270bba737c9e7726b856ba60e20b/quickbooks-seeklogo.com.svg"
  },
  { 
    name: "HubSpot", 
    logo: "https://cdn2.hubspot.net/hubfs/53/HubSpot%20Logos/HubSpot-Inversed-Favicon.png"
  },
  { 
    name: "Salesforce", 
    logo: "https://logos-world.net/wp-content/uploads/2020/10/Salesforce-Logo.png"
  },
  { 
    name: "Microsoft Excel", 
    logo: "https://logos-world.net/wp-content/uploads/2020/12/Excel-Logo.png"
  },
  { 
    name: "Slack", 
    logo: "https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png"
  },
  { 
    name: "Fishbowl Inventory", 
    logo: "https://www.fishbowlinventory.com/wp-content/uploads/2023/04/fishbowl-logo.svg"
  },
  { 
    name: "Shopify", 
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png"
  },
  { 
    name: "Google Analytics", 
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Google-Analytics-Logo.png"
  },
  { 
    name: "Xero", 
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Xero-Logo.png"
  },
  { 
    name: "NetSuite", 
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Oracle-NetSuite-Logo.png"
  },
  { 
    name: "Sage", 
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Sage-Logo.png"
  },
  { 
    name: "FreshBooks", 
    logo: "https://logos-world.net/wp-content/uploads/2021/02/FreshBooks-Logo.png"
  },
  { 
    name: "Zoho", 
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Zoho-Logo.png"
  },
  { 
    name: "monday.com", 
    logo: "https://logos-world.net/wp-content/uploads/2021/08/Monday.com-Logo.png"
  },
  { 
    name: "Asana", 
    logo: "https://logos-world.net/wp-content/uploads/2020/12/Asana-Logo.png"
  }
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
