
import { Integration } from '../types/integration';

export const accountingIntegrations: Integration[] = [
  {
    id: "quickbooks-online",
    name: "QuickBooks Online",
    slug: "quickbooks-online",
    logo: "/lovable-uploads/d324d6cc-e672-484c-98b4-975a82f442d9.png",
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
    id: "xero",
    name: "Xero",
    slug: "xero",
    logo: "/lovable-uploads/31fd0b08-30e1-4290-93b6-8547b1d4cfb5.png",
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
  }
];
