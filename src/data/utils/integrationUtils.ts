
import { Integration } from '../types/integration';
import { accountingIntegrations } from '../integrations/accounting';
import { crmIntegrations } from '../integrations/crm';
import { projectManagementIntegrations } from '../integrations/projectManagement';
import { otherIntegrations } from '../integrations/other';

export const allIntegrations: Integration[] = [
  ...accountingIntegrations,
  ...crmIntegrations,
  ...projectManagementIntegrations,
  ...otherIntegrations
];

export function getIntegrationBySlug(slug: string): Integration | undefined {
  return allIntegrations.find(integration => integration.slug === slug);
}

export function getIntegrationsByCategory(category: string): Integration[] {
  if (category === "All") return allIntegrations;
  return allIntegrations.filter(integration => integration.category === category);
}
