
import { Integration } from '../types/integration';

export const crmIntegrations: Integration[] = [
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
    logo: "/lovable-uploads/09a53bbc-00d8-4f0d-9f5b-a1aca7c7eb63.png",
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
  }
];
