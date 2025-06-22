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
    logo: "/lovable-uploads/4196e0cf-1a9d-4697-b7f3-dbb3b3f867c7.png",
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
    logo: "/lovable-uploads/36bfd09d-5f8b-4e9c-d5a8-678901234567.png",
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
    logo: "/lovable-uploads/2b06cf5c-4d2a-4f8b-9e1c-234567890def.png",
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
    logo: "/lovable-uploads/ce3f28ff-97cd-41cf-9b02-622f72b9cc0b.png",
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
    logo: "/lovable-uploads/76149f2e-0b85-4889-9a76-c7f2a3926d7c.png",
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
    logo: "/lovable-uploads/b96e5d58-1268-4350-90f9-e2f5f1b25c2f.png",
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
  },
  {
    id: "slack",
    name: "Slack",
    slug: "slack",
    logo: "/lovable-uploads/494ff85e-e7cd-44ec-bc15-19691a2bc978.png",
    category: "Communication",
    description: "Slack is a cloud-based collaboration platform that connects teams and enables efficient communication across organizations.",
    shortDescription: "Team collaboration and communication platform",
    keyBenefits: [
      "Team productivity metrics",
      "Communication analytics",
      "Channel engagement tracking",
      "Response time monitoring"
    ],
    metrics: [
      "Message volume",
      "Response times",
      "Channel activity",
      "User engagement",
      "File sharing stats",
      "Integration usage"
    ],
    features: [
      "Real-time messaging data",
      "Channel analytics",
      "User activity tracking",
      "Integration monitoring"
    ],
    setupSteps: [
      "Connect Slack workspace",
      "Configure permissions",
      "Select channels to monitor",
      "Build team analytics dashboard"
    ],
    useCase: "Ideal for teams wanting insights into communication patterns and collaboration effectiveness."
  },
  {
    id: "google-analytics",
    name: "Google Analytics",
    slug: "google-analytics",
    logo: "/lovable-uploads/d71f30cf-6a4f-4b85-a0f8-123456789abc.png",
    category: "Analytics",
    description: "Google Analytics provides detailed insights into website traffic, user behavior, and conversion tracking for digital marketing optimization.",
    shortDescription: "Web analytics and traffic monitoring platform",
    keyBenefits: [
      "Website traffic analysis",
      "User behavior insights",
      "Conversion tracking",
      "Marketing campaign ROI"
    ],
    metrics: [
      "Page views",
      "Unique visitors",
      "Bounce rate",
      "Conversion rate",
      "Session duration",
      "Traffic sources"
    ],
    features: [
      "Real-time traffic data",
      "Goal tracking",
      "Audience segmentation",
      "Custom reporting"
    ],
    setupSteps: [
      "Connect Google Analytics account",
      "Configure tracking goals",
      "Set up custom dimensions",
      "Create web analytics dashboard"
    ],
    useCase: "Essential for businesses tracking website performance and digital marketing effectiveness."
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    slug: "mailchimp",
    logo: "/lovable-uploads/5276c4df-7a2c-4f5e-e6b9-789012345678.png",
    category: "Email Marketing",
    description: "Mailchimp is an all-in-one email marketing platform that helps businesses create, send, and analyze email campaigns.",
    shortDescription: "Email marketing and automation platform",
    keyBenefits: [
      "Email campaign performance",
      "Subscriber growth tracking",
      "Automation effectiveness",
      "Revenue attribution"
    ],
    metrics: [
      "Open rates",
      "Click-through rates",
      "Subscriber growth",
      "Revenue per email",
      "Unsubscribe rates",
      "Campaign ROI"
    ],
    features: [
      "Campaign analytics",
      "Subscriber management",
      "Automation tracking",
      "Revenue reporting"
    ],
    setupSteps: [
      "Connect Mailchimp account",
      "Configure API permissions",
      "Select lists to track",
      "Build email marketing dashboard"
    ],
    useCase: "Perfect for marketing teams tracking email campaign performance and subscriber engagement."
  },
  {
    id: "asana",
    name: "Asana",
    slug: "asana",
    logo: "/lovable-uploads/62d4d4ff-8c3e-4a9b-b2d5-345678901fed.png",
    category: "Project Management",
    description: "Asana is a project management platform that helps teams organize, track, and manage their work and projects efficiently.",
    shortDescription: "Project management and team collaboration platform",
    keyBenefits: [
      "Project progress tracking",
      "Team productivity insights",
      "Task completion analytics",
      "Resource allocation optimization"
    ],
    metrics: [
      "Task completion rates",
      "Project timelines",
      "Team workload",
      "Milestone progress",
      "Time tracking",
      "Resource utilization"
    ],
    features: [
      "Project analytics",
      "Team performance tracking",
      "Task management",
      "Timeline visualization"
    ],
    setupSteps: [
      "Connect Asana workspace",
      "Configure project access",
      "Select teams to monitor",
      "Create project management dashboard"
    ],
    useCase: "Ideal for project managers and teams needing visibility into project progress and team productivity."
  },
  {
    id: "zendesk",
    name: "Zendesk",
    slug: "zendesk",
    logo: "/lovable-uploads/6c02622d-f929-4272-8fb2-56a68e33cc30.png",
    category: "Customer Support",
    description: "Zendesk is a customer service platform that provides ticketing, live chat, and customer support analytics for better customer experiences.",
    shortDescription: "Customer support and service management platform",
    keyBenefits: [
      "Customer satisfaction tracking",
      "Support ticket analytics",
      "Agent performance monitoring",
      "Response time optimization"
    ],
    metrics: [
      "Ticket volume",
      "Response times",
      "Resolution rates",
      "Customer satisfaction",
      "Agent productivity",
      "Escalation rates"
    ],
    features: [
      "Support analytics",
      "Agent performance tracking",
      "Customer satisfaction monitoring",
      "SLA compliance reporting"
    ],
    setupSteps: [
      "Connect Zendesk instance",
      "Configure API access",
      "Select support metrics",
      "Build customer service dashboard"
    ],
    useCase: "Essential for customer support teams tracking service quality and agent performance."
  },
  {
    id: "trello",
    name: "Trello",
    slug: "trello",
    logo: "/lovable-uploads/31fd0b08-30e1-4290-93b6-8547b1d4cfb5.png",
    category: "Project Management",
    description: "Trello is a visual project management tool that uses boards, lists, and cards to help teams organize and prioritize projects.",
    shortDescription: "Visual project management and organization platform",
    keyBenefits: [
      "Visual project tracking",
      "Team collaboration insights",
      "Card movement analytics",
      "Board activity monitoring"
    ],
    metrics: [
      "Card completion rates",
      "Board activity",
      "Team collaboration",
      "Project velocity",
      "Due date tracking",
      "Member productivity"
    ],
    features: [
      "Board analytics",
      "Card tracking",
      "Team activity monitoring",
      "Progress visualization"
    ],
    setupSteps: [
      "Connect Trello account",
      "Configure board access",
      "Select boards to track",
      "Create visual project dashboard"
    ],
    useCase: "Perfect for teams using visual project management and needing insights into project flow and completion."
  },
  {
    id: "stripe",
    name: "Stripe",
    slug: "stripe",
    logo: "/lovable-uploads/ae564825-4d4f-43ea-b2f9-a67a15532b80.png",
    category: "Payments",
    description: "Stripe is a payment processing platform that enables businesses to accept and manage online payments with comprehensive analytics.",
    shortDescription: "Online payment processing and financial platform",
    keyBenefits: [
      "Payment analytics",
      "Revenue tracking",
      "Transaction monitoring",
      "Financial reporting"
    ],
    metrics: [
      "Transaction volume",
      "Revenue trends",
      "Payment success rates",
      "Chargeback rates",
      "Customer lifetime value",
      "Geographic revenue"
    ],
    features: [
      "Payment analytics",
      "Revenue reporting",
      "Transaction tracking",
      "Financial insights"
    ],
    setupSteps: [
      "Connect Stripe account",
      "Configure webhook endpoints",
      "Select payment metrics",
      "Build payment analytics dashboard"
    ],
    useCase: "Essential for businesses processing online payments and needing detailed financial analytics."
  },
  {
    id: "xero",
    name: "Xero",
    slug: "xero",
    logo: "/lovable-uploads/1ab91a6b-e3f8-43f8-9178-1fbd96d033d3.png",
    category: "Accounting",
    description: "Xero is cloud-based accounting software designed for small and medium businesses, offering comprehensive financial management tools.",
    shortDescription: "Cloud accounting and financial management platform",
    keyBenefits: [
      "Real-time financial reporting",
      "Cash flow management",
      "Invoice and expense tracking",
      "Tax compliance reporting"
    ],
    metrics: [
      "Cash flow",
      "Profit and loss",
      "Balance sheet data",
      "Invoice tracking",
      "Expense analysis",
      "Tax reporting"
    ],
    features: [
      "Financial reporting",
      "Bank reconciliation",
      "Invoice management",
      "Expense tracking"
    ],
    setupSteps: [
      "Connect Xero account",
      "Configure data sync",
      "Select financial metrics",
      "Create accounting dashboard"
    ],
    useCase: "Ideal for small to medium businesses needing comprehensive accounting and financial reporting capabilities."
  },
  {
    id: "monday",
    name: "Monday.com",
    slug: "monday",
    logo: "/lovable-uploads/1d9f3afd-8528-4663-b663-8ca0cf42bb4c.png",
    category: "Project Management",
    description: "Monday.com is a work operating system that enables teams to run projects and workflows with confidence and clarity.",
    shortDescription: "Work management and team collaboration platform",
    keyBenefits: [
      "Project timeline tracking",
      "Team workload management",
      "Progress visualization",
      "Resource planning insights"
    ],
    metrics: [
      "Project progress",
      "Task completion",
      "Team capacity",
      "Timeline adherence",
      "Budget tracking",
      "Resource allocation"
    ],
    features: [
      "Project tracking",
      "Team analytics",
      "Workflow monitoring",
      "Progress reporting"
    ],
    setupSteps: [
      "Connect Monday.com account",
      "Configure board access",
      "Select tracking metrics",
      "Build project management dashboard"
    ],
    useCase: "Perfect for teams managing complex projects and needing comprehensive workflow visibility."
  },
  {
    id: "ortto",
    name: "Ortto",
    slug: "ortto",
    logo: "/lovable-uploads/e75b7648-be7f-4dcd-836a-4e02c209286c.png",
    category: "Marketing Automation",
    description: "Ortto is a customer data and marketing automation platform that unifies customer data to create personalized marketing experiences.",
    shortDescription: "Customer data platform and marketing automation",
    keyBenefits: [
      "Unified customer data analytics",
      "Marketing automation insights",
      "Customer journey tracking",
      "Personalization effectiveness"
    ],
    metrics: [
      "Customer engagement scores",
      "Journey completion rates",
      "Automation performance",
      "Personalization ROI",
      "Segmentation analytics",
      "Revenue attribution"
    ],
    features: [
      "Customer data unification",
      "Journey analytics",
      "Automation tracking",
      "Segmentation insights"
    ],
    setupSteps: [
      "Connect Ortto account",
      "Configure data sources",
      "Map customer journeys",
      "Build marketing analytics dashboard"
    ],
    useCase: "Perfect for marketing teams needing unified customer data and sophisticated automation analytics."
  },
  {
    id: "calendly",
    name: "Calendly",
    slug: "calendly",
    logo: "/lovable-uploads/f110feec-9d4f-4c8a-a3e6-456789012345.png",
    category: "Scheduling",
    description: "Calendly is a scheduling automation platform that eliminates the back-and-forth emails to find the perfect time for meetings.",
    shortDescription: "Automated scheduling and meeting coordination platform",
    keyBenefits: [
      "Meeting booking analytics",
      "Schedule optimization insights",
      "Conversion tracking",
      "Time efficiency metrics"
    ],
    metrics: [
      "Meeting bookings",
      "Booking conversion rates",
      "No-show rates",
      "Popular time slots",
      "Meeting duration analytics",
      "Lead qualification scores"
    ],
    features: [
      "Booking analytics",
      "Schedule optimization",
      "Conversion tracking",
      "Availability insights"
    ],
    setupSteps: [
      "Connect Calendly account",
      "Configure event types",
      "Set up tracking parameters",
      "Create scheduling analytics dashboard"
    ],
    useCase: "Essential for sales teams and professionals tracking meeting effectiveness and scheduling optimization."
  },
  {
    id: "zoho",
    name: "Zoho",
    slug: "zoho",
    logo: "/lovable-uploads/ea466603-eb64-4dbb-be17-47a0e25c99e6.png",
    category: "Business Suite",
    description: "Zoho is a comprehensive business software suite offering CRM, project management, accounting, and productivity tools for businesses.",
    shortDescription: "Complete business software suite and productivity platform",
    keyBenefits: [
      "Unified business analytics",
      "Cross-platform data insights",
      "Productivity metrics",
      "Business process optimization"
    ],
    metrics: [
      "Sales performance",
      "Project completion rates",
      "Financial health scores",
      "Team productivity",
      "Customer satisfaction",
      "Process efficiency"
    ],
    features: [
      "Multi-app integration",
      "Unified reporting",
      "Cross-platform analytics",
      "Business intelligence"
    ],
    setupSteps: [
      "Connect Zoho applications",
      "Configure cross-app permissions",
      "Map business processes",
      "Build comprehensive business dashboard"
    ],
    useCase: "Ideal for businesses using multiple Zoho applications and needing unified analytics across all business functions."
  },
  {
    id: "clickup",
    name: "ClickUp",
    slug: "clickup",
    logo: "/lovable-uploads/9bbd560f-2e5a-4b7c-c4f7-567890123456.png",
    category: "Project Management",
    description: "ClickUp is an all-in-one workspace that combines project management, docs, goals, and chat in one platform.",
    shortDescription: "All-in-one workspace and project management platform",
    keyBenefits: [
      "Comprehensive project analytics",
      "Goal tracking and progress",
      "Team productivity insights",
      "Resource utilization optimization"
    ],
    metrics: [
      "Task completion velocity",
      "Goal achievement rates",
      "Team workload distribution",
      "Project timeline accuracy",
      "Resource allocation",
      "Productivity scores"
    ],
    features: [
      "Multi-workspace analytics",
      "Goal tracking",
      "Time tracking insights",
      "Team performance monitoring"
    ],
    setupSteps: [
      "Connect ClickUp workspace",
      "Configure space permissions",
      "Set up goal tracking",
      "Create comprehensive project dashboard"
    ],
    useCase: "Perfect for teams managing complex projects across multiple workspaces and needing unified productivity analytics."
  },
  {
    id: "funnel",
    name: "Funnel",
    slug: "funnel",
    logo: "/lovable-uploads/d973b988-8e3d-4c6f-f7ca-890123456789.png",
    category: "Marketing Analytics",
    description: "Funnel is a marketing data platform that automatically collects, cleans, and prepares marketing data for analysis and reporting.",
    shortDescription: "Marketing data integration and analytics platform",
    keyBenefits: [
      "Unified marketing data view",
      "Cross-channel attribution",
      "ROI optimization insights",
      "Campaign performance tracking"
    ],
    metrics: [
      "Marketing ROI",
      "Cross-channel attribution",
      "Campaign performance",
      "Cost per acquisition",
      "Customer lifetime value",
      "Channel effectiveness"
    ],
    features: [
      "Marketing data aggregation",
      "Attribution modeling",
      "Performance tracking",
      "ROI optimization"
    ],
    setupSteps: [
      "Connect marketing data sources",
      "Configure attribution models",
      "Set up campaign tracking",
      "Build marketing performance dashboard"
    ],
    useCase: "Essential for marketing teams running multi-channel campaigns and needing unified attribution and ROI analytics."
  },
  {
    id: "microsoft-excel",
    name: "Microsoft Excel",
    slug: "microsoft-excel",
    logo: "/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png",
    category: "Data & Spreadsheets",
    description: "Microsoft Excel is the world's leading spreadsheet application, enabling data analysis, visualization, and business intelligence.",
    shortDescription: "Advanced spreadsheet and data analysis platform",
    keyBenefits: [
      "Spreadsheet data visualization",
      "Formula and calculation tracking",
      "Data analysis automation",
      "Business intelligence enhancement"
    ],
    metrics: [
      "Data accuracy scores",
      "Calculation efficiency",
      "Formula complexity",
      "Data update frequency",
      "Version control",
      "Collaboration metrics"
    ],
    features: [
      "Spreadsheet integration",
      "Formula analysis",
      "Data validation",
      "Automated reporting"
    ],
    setupSteps: [
      "Connect Excel files",
      "Configure data ranges",
      "Set up automated imports",
      "Create enhanced visualization dashboard"
    ],
    useCase: "Perfect for businesses relying on Excel for data analysis and wanting enhanced visualization and automated reporting capabilities."
  }
];

export const integrationCategories = [
  "All",
  "Accounting", 
  "CRM & Marketing",
  "CRM",
  "ERP",
  "Inventory",
  "E-commerce",
  "Communication",
  "Analytics",
  "Email Marketing",
  "Project Management",
  "Customer Support",
  "Payments",
  "Marketing Automation",
  "Scheduling",
  "Business Suite",
  "Marketing Analytics",
  "Data & Spreadsheets"
];

export function getIntegrationBySlug(slug: string): Integration | undefined {
  return integrations.find(integration => integration.slug === slug);
}

export function getIntegrationsByCategory(category: string): Integration[] {
  if (category === "All") return integrations;
  return integrations.filter(integration => integration.category === category);
}
