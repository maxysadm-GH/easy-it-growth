
import { Integration } from '../types/integration';

export const otherIntegrations: Integration[] = [
  {
    id: "netsuite",
    name: "NetSuite",
    slug: "netsuite", 
    logo: "/lovable-uploads/6176fded-c097-452c-8848-2cd686b672eb.png",
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
    logo: "/lovable-uploads/7a81da02-7a89-49d6-bb4f-eca861e810b9.png",
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
    logo: "/lovable-uploads/64928a8d-ea10-47d3-a59b-ca0199366b21.png",
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
    logo: "/lovable-uploads/e2a53896-8cd4-4a89-be8f-49b1626c6bcd.png",
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
    logo: "/lovable-uploads/f1f6f28c-8f86-4f88-8d4c-b6d04db33ff9.png",
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
    logo: "/lovable-uploads/4e32134d-7970-408a-9caf-27db1a6c1b51.png",
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
    id: "zendesk",
    name: "Zendesk",
    slug: "zendesk",
    logo: "/lovable-uploads/b090386d-af4c-4f5b-8a64-790f1692b1af.png",
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
    id: "stripe",
    name: "Stripe",
    slug: "stripe",
    logo: "/lovable-uploads/89f94a64-d2ee-47a2-92bd-6b4dd84b72df.png",
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
    id: "ortto",
    name: "Ortto",
    slug: "ortto",
    logo: "/lovable-uploads/a61f16c4-e04a-4117-af09-32fd3d3ca102.png",
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
    logo: "/lovable-uploads/a4e3152b-a59a-46bc-8501-73ff7ede0e88.png",
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
    logo: "/lovable-uploads/0c67f170-1420-4911-a0f4-88f846ec89b2.png",
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
    id: "freshsales",
    name: "Freshsales",
    slug: "freshsales",
    logo: "/lovable-uploads/a377856b-1e04-4820-8359-724542e579de.png",
    category: "CRM",
    description: "Freshsales is a full-featured CRM solution that helps businesses manage leads, contacts, and deals with powerful automation and analytics.",
    shortDescription: "CRM and sales automation platform",
    keyBenefits: [
      "Sales pipeline visibility",
      "Lead conversion analytics",
      "Deal tracking insights",
      "Sales team performance"
    ],
    metrics: [
      "Lead conversion rates",
      "Deal pipeline value",
      "Sales cycle length",
      "Win/loss ratios",
      "Sales rep performance",
      "Revenue forecasting"
    ],
    features: [
      "Pipeline analytics",
      "Lead scoring",
      "Sales automation tracking",
      "Performance reporting"
    ],
    setupSteps: [
      "Connect Freshsales account",
      "Configure pipeline stages",
      "Set up lead scoring",
      "Build sales analytics dashboard"
    ],
    useCase: "Perfect for sales teams needing comprehensive CRM analytics and sales performance insights."
  },
  {
    id: "microsoft-excel",
    name: "Microsoft Excel",
    slug: "microsoft-excel",
    logo: "/lovable-uploads/542b2cef-5386-48bf-87a2-67e10fd094ce.png",
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
