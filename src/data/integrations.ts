
export interface Integration {
  id: string;
  name: string;
  slug: string;
  logo: string;
  category: string;
  description: string;
  shortDescription: string;
  keyBenefits: string[];
  metrics: string[];
  features: string[];
  setupSteps: string[];
  useCase: string;
}

export const integrations: Integration[] = [
  {
    id: "quickbooks-online",
    name: "QuickBooks Online",
    slug: "quickbooks-online",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/quickbooks.svg",
    category: "Accounting",
    description: "QuickBooks Online is the world's most popular cloud-based accounting software for small and medium businesses, offering comprehensive financial management tools.",
    shortDescription: "Cloud-based accounting and financial management platform",
    keyBenefits: [
      "Real-time financial reporting and analytics",
      "Automated cash flow forecasting",
      "P&L and balance sheet visualization",
      "Tax preparation insights"
    ],
    metrics: [
      "Revenue trends",
      "Expense tracking", 
      "Cash flow analysis",
      "Profit margins",
      "Account receivables",
      "Vendor payments"
    ],
    features: [
      "Automated data sync",
      "Custom dashboard creation",
      "Financial KPI tracking",
      "Budget vs actual reporting"
    ],
    setupSteps: [
      "Connect your QuickBooks Online account",
      "Configure data sync preferences",
      "Select relevant metrics and KPIs",
      "Customize your financial dashboard"
    ],
    useCase: "Perfect for businesses wanting real-time financial visibility and automated reporting for better decision-making."
  },
  {
    id: "hubspot",
    name: "HubSpot",
    slug: "hubspot",
    logo: "/lovable-uploads/ce3f28ff-97cd-41cf-9b02-622f72b9cc0b.png",
    category: "CRM & Marketing",
    description: "HubSpot is an all-in-one CRM platform that helps businesses grow by providing tools for marketing, sales, customer service, and operations.",
    shortDescription: "All-in-one CRM and marketing automation platform",
    keyBenefits: [
      "Complete sales pipeline visibility",
      "Marketing ROI tracking",
      "Customer journey analytics",
      "Lead conversion optimization"
    ],
    metrics: [
      "Sales pipeline value",
      "Lead conversion rates",
      "Marketing qualified leads",
      "Customer acquisition cost",
      "Deal closure rates",
      "Revenue attribution"
    ],
    features: [
      "Contact and company sync",
      "Deal pipeline tracking",
      "Marketing campaign analytics",
      "Customer lifecycle reporting"
    ],
    setupSteps: [
      "Authorize HubSpot connection",
      "Select CRM objects to sync",
      "Map custom properties",
      "Build sales and marketing dashboards"
    ],
    useCase: "Essential for sales and marketing teams needing unified visibility into lead generation, conversion, and revenue attribution."
  },
  {
    id: "salesforce",
    name: "Salesforce",
    slug: "salesforce",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/salesforce.svg",
    category: "CRM",
    description: "Salesforce is the world's leading customer relationship management (CRM) platform, helping businesses connect with customers in innovative ways.",
    shortDescription: "Enterprise-grade CRM and customer platform",
    keyBenefits: [
      "Enterprise-level sales analytics",
      "Custom object reporting",
      "Territory and quota management",
      "Advanced forecasting"
    ],
    metrics: [
      "Opportunity pipeline",
      "Sales rep performance",
      "Territory analysis",
      "Forecast accuracy",
      "Activity tracking",
      "Customer health scores"
    ],
    features: [
      "Custom object integration",
      "Advanced reporting",
      "Einstein Analytics sync",
      "Multi-org support"
    ],
    setupSteps: [
      "Connect Salesforce org",
      "Configure object permissions",
      "Map custom fields",
      "Create executive dashboards"
    ],
    useCase: "Ideal for enterprise sales organizations requiring sophisticated CRM analytics and custom reporting capabilities."
  },
  {
    id: "netsuite",
    name: "NetSuite",
    slug: "netsuite", 
    logo: "/lovable-uploads/e75b7648-be7f-4dcd-836a-4e02c209286c.png",
    category: "ERP",
    description: "NetSuite is a comprehensive cloud ERP solution that provides businesses with visibility and control across their entire organization.",
    shortDescription: "Cloud-based ERP and business management suite",
    keyBenefits: [
      "Complete business operations visibility",
      "Financial and operational reporting",
      "Supply chain analytics",
      "Multi-subsidiary reporting"
    ],
    metrics: [
      "Revenue recognition",
      "Inventory turnover",
      "Order fulfillment",
      "Financial statements",
      "Project profitability",
      "Vendor performance"
    ],
    features: [
      "Real-time ERP data sync",
      "Financial consolidation",
      "Operational KPIs",
      "Custom record integration"
    ],
    setupSteps: [
      "Establish NetSuite connection",
      "Configure saved searches",
      "Map custom fields and records",
      "Build comprehensive ERP dashboards"
    ],
    useCase: "Perfect for growing businesses needing unified visibility across finance, operations, and supply chain management."
  },
  {
    id: "fishbowl-inventory",
    name: "Fishbowl Inventory",
    slug: "fishbowl-inventory",
    logo: "/lovable-uploads/1d9f3afd-8528-4663-b663-8ca0cf42bb4c.png",
    category: "Inventory",
    description: "Fishbowl is the leading inventory management solution that integrates with QuickBooks to provide advanced inventory tracking and manufacturing capabilities.",
    shortDescription: "Advanced inventory management and manufacturing platform",
    keyBenefits: [
      "Real-time inventory tracking",
      "Manufacturing process optimization",
      "Warehouse efficiency metrics",
      "Cost analysis and reporting"
    ],
    metrics: [
      "Inventory levels",
      "Stock turnover rates",
      "Manufacturing costs",
      "Order accuracy",
      "Warehouse utilization",
      "Product profitability"
    ],
    features: [
      "Inventory level monitoring",
      "Manufacturing analytics",
      "Warehouse performance",
      "Cost tracking"
    ],
    setupSteps: [
      "Connect Fishbowl database",
      "Configure inventory categories",
      "Set up cost tracking",
      "Create inventory dashboards"
    ],
    useCase: "Essential for manufacturers and distributors requiring sophisticated inventory tracking and manufacturing analytics."
  },
  {
    id: "shopify",
    name: "Shopify",
    slug: "shopify",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg",
    category: "E-commerce",
    description: "Shopify is a leading e-commerce platform that enables businesses to create, customize, and manage online stores with powerful built-in features.",
    shortDescription: "Complete e-commerce platform and online store builder",
    keyBenefits: [
      "E-commerce sales analytics",
      "Customer behavior insights", 
      "Product performance tracking",
      "Marketing ROI measurement"
    ],
    metrics: [
      "Online sales revenue",
      "Conversion rates",
      "Average order value",
      "Customer lifetime value",
      "Product performance",
      "Traffic sources"
    ],
    features: [
      "Sales data integration",
      "Customer analytics",
      "Product insights",
      "Marketing attribution"
    ],
    setupSteps: [
      "Connect Shopify store",
      "Configure webhook settings",
      "Select metrics to track",
      "Build e-commerce dashboards"
    ],
    useCase: "Perfect for e-commerce businesses wanting deep insights into sales performance, customer behavior, and product analytics."
  }
];

export const integrationCategories = [
  "All",
  "Accounting", 
  "CRM & Marketing",
  "CRM",
  "ERP",
  "Inventory",
  "E-commerce"
];

export function getIntegrationBySlug(slug: string): Integration | undefined {
  return integrations.find(integration => integration.slug === slug);
}

export function getIntegrationsByCategory(category: string): Integration[] {
  if (category === "All") return integrations;
  return integrations.filter(integration => integration.category === category);
}
