
import React from "react";

const integrations = [
  { name: "QuickBooks Online", logo: "https://plugin.intuitcdn.net/designsystem_qbse/5.0.0/assets/images/logos/intuit-quickbooks-logo.svg" },
  { name: "HubSpot", logo: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png" },
  { name: "Salesforce", logo: "https://c1.sfdcstatic.com/content/dam/web/en_us/www/images/nav/salesforce-logo.svg" },
  { name: "Microsoft 365", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LJ5j?ver=20b3" },
  { name: "Slack", logo: "https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" },
  { name: "Fishbowl Inventory", logo: "https://www.fishbowlinventory.com/wp-content/themes/fishbowl2019/img/fishbowl-logo.svg" },
  { name: "Shopify", logo: "https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg" },
  { name: "Google Analytics", logo: "https://www.google.com/analytics/static/1bc00e493d/img/new-ga-logo.svg" },
  { name: "Xero", logo: "https://www.xero.com/content/dam/xero/images/logos/xero-logo-hires-RGB.svg" },
  { name: "NetSuite", logo: "https://www.netsuite.com/portal/assets/img/logos/oracle-netsuite-logo.svg" },
  { name: "Sage", logo: "https://www.sage.com/~/media/images/sagedotcom/master/global/logos/sage_logo_green.svg" },
  { name: "Zoho", logo: "https://www.zoho.com/sites/default/files/zoho_general_pages/zoho-logo.svg" },
  { name: "monday.com", logo: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png" },
  { name: "Asana", logo: "https://d3ki9tyy5l5ruj.cloudfront.net/obj/ddd7b323463d079fa01e863ac0e99c4e8ef3b014/asana-logo-coral.svg" },
  { name: "Dropbox", logo: "https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_logo_glyph_blue_m1.svg" }
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
