
import { CTA_CONFIGS } from '@/config/cta';

interface CTAValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export const validateCTA = (ctaId: string): CTAValidationResult => {
  const result: CTAValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  const config = CTA_CONFIGS[ctaId];
  
  if (!config) {
    result.isValid = false;
    result.errors.push(`CTA ID "${ctaId}" not found in configuration`);
    return result;
  }

  // Validate required fields
  if (!config.text) {
    result.isValid = false;
    result.errors.push(`CTA "${ctaId}" missing text`);
  }

  if (!config.url) {
    result.isValid = false;
    result.errors.push(`CTA "${ctaId}" missing URL`);
  }

  // Validate URL format
  if (config.url) {
    if (config.type === 'external' && !config.url.startsWith('http')) {
      result.warnings.push(`External CTA "${ctaId}" URL should start with http/https`);
    }
    
    if (config.type === 'internal' && config.url.startsWith('http')) {
      result.warnings.push(`Internal CTA "${ctaId}" URL should be a relative path`);
    }

    // Check for old Calendly links
    if (config.url.includes('calendly.com')) {
      result.isValid = false;
      result.errors.push(`CTA "${ctaId}" still contains Calendly link - should use Microsoft Bookings`);
    }
  }

  return result;
};

export const validateAllCTAs = (): Record<string, CTAValidationResult> => {
  const results: Record<string, CTAValidationResult> = {};
  
  Object.keys(CTA_CONFIGS).forEach(ctaId => {
    results[ctaId] = validateCTA(ctaId);
  });

  return results;
};

export const logCTAValidationResults = () => {
  const results = validateAllCTAs();
  let hasErrors = false;
  
  Object.entries(results).forEach(([ctaId, result]) => {
    if (!result.isValid) {
      hasErrors = true;
      console.error(`❌ CTA "${ctaId}" validation failed:`, result.errors);
    }
    
    if (result.warnings.length > 0) {
      console.warn(`⚠️ CTA "${ctaId}" warnings:`, result.warnings);
    }
  });

  if (!hasErrors) {
    console.log('✅ All CTAs validated successfully');
  }

  return !hasErrors;
};
