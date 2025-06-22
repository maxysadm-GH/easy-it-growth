
// Re-export everything from the modular structure
export type { Integration } from './types/integration';
export { integrationCategories } from './categories';
export { allIntegrations as integrations, getIntegrationBySlug, getIntegrationsByCategory } from './utils/integrationUtils';
