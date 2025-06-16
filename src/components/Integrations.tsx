
import React from "react";

const integrations = [
  { 
    name: "QuickBooks Online", 
    logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png"
  },
  { 
    name: "HubSpot", 
    logo: "https://cdn-icons-png.flaticon.com/512/888/888867.png"
  },
  { 
    name: "Salesforce", 
    logo: "https://cdn-icons-png.flaticon.com/512/873/873089.png"
  },
  { 
    name: "Microsoft Excel", 
    logo: "https://cdn-icons-png.flaticon.com/512/732/732220.png"
  },
  { 
    name: "Slack", 
    logo: "https://cdn-icons-png.flaticon.com/512/2111/2111615.png"
  },
  { 
    name: "Shopify", 
    logo: "https://cdn-icons-png.flaticon.com/512/888/888839.png"
  },
  { 
    name: "Fishbowl Inventory", 
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAACvjKdaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAA9QTFRF////MzMzZmZmmZmZzMzM7u7uCvK3jAAAAAFiS0dEBmFmuH0AAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfnCgwSJwGJ8pE1AAAA6klEQVR42u3WQQ0AAAzCsOHf9F6oABXQS7N2kYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYnJB2jWAWHKWs8zAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTEwLTEyVDE4OjM5OjAxKzAwOjAwUV8OLQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0xMC0xMlQxODozOTowMSswMDowMCACtpEAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMTAtMTJUMTg6Mzk6MDErMDA6MDCGO7wAAAAASUVORK5CYII="
  },
  { 
    name: "Google Analytics", 
    logo: "https://cdn-icons-png.flaticon.com/512/881/881045.png"
  },
  { 
    name: "Xero", 
    logo: "https://cdn-icons-png.flaticon.com/512/888/888861.png"
  },
  { 
    name: "NetSuite", 
    logo: "https://cdn-icons-png.flaticon.com/512/888/888870.png"
  },
  { 
    name: "Sage", 
    logo: "https://cdn-icons-png.flaticon.com/512/888/888858.png"
  },
  { 
    name: "FreshBooks", 
    logo: "https://cdn-icons-png.flaticon.com/512/888/888876.png"
  },
  { 
    name: "Zoho", 
    logo: "https://cdn-icons-png.flaticon.com/512/888/888857.png"
  },
  { 
    name: "monday.com", 
    logo: "https://cdn-icons-png.flaticon.com/512/888/888913.png"
  },
  { 
    name: "Asana", 
    logo: "https://cdn-icons-png.flaticon.com/512/888/888847.png"
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
        
        {/* Grid Layout - 4 columns desktop, 2 mobile */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {integrations.map((integration, i) => (
              <a
                key={integration.name}
                href="/"
                className="group flex flex-col items-center transition-all duration-300 hover:scale-110"
              >
                <div className="w-18 h-18 bg-white rounded-xl p-3 shadow-lg border-2 border-transparent group-hover:border-accent transition-all duration-300 group-hover:shadow-xl flex items-center justify-center">
                  <img
                    src={integration.logo}
                    alt={integration.name + " logo"}
                    className="w-full h-full object-contain"
                    style={{ width: '72px', height: '72px' }}
                    draggable={false}
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
