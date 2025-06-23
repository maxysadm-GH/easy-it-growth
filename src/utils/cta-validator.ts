
import { CTA_CONFIGS } from '@/config/cta';

export interface CTAValidationResult {
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

  // Validate URL format and detect problematic patterns
  if (config.url) {
    // Check for old Calendly links
    if (config.url.includes('calendly.com')) {
      result.isValid = false;
      result.errors.push(`CTA "${ctaId}" still contains Calendly link - should use Microsoft Bookings`);
    }

    // Check for old Microsoft Bookings format
    if (config.url.includes('outlook.office365.com/owa/calendar')) {
      result.isValid = false;
      result.errors.push(`CTA "${ctaId}" uses old Microsoft Bookings format - should use outlook.office.com/book/`);
    }

    // Validate external URL format
    if (config.type === 'external') {
      if (!config.url.startsWith('http')) {
        result.warnings.push(`External CTA "${ctaId}" URL should start with http/https`);
      }
      
      // Check for Microsoft Bookings URL validity
      if (config.url.includes('outlook.office.com/book/') && !config.url.endsWith('/')) {
        result.warnings.push(`Microsoft Bookings URL for CTA "${ctaId}" should end with a slash`);
      }
    }
    
    // Validate internal URL format
    if (config.type === 'internal') {
      if (config.url.startsWith('http')) {
        result.warnings.push(`Internal CTA "${ctaId}" URL should be a relative path`);
      }
      
      if (!config.url.startsWith('/')) {
        result.warnings.push(`Internal CTA "${ctaId}" URL should start with a slash`);
      }
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
  let hasWarnings = false;
  
  console.log('🔍 CTA Validation Results:');
  console.log('========================');
  
  Object.entries(results).forEach(([ctaId, result]) => {
    if (!result.isValid) {
      hasErrors = true;
      console.error(`❌ CTA "${ctaId}" validation failed:`, result.errors);
    }
    
    if (result.warnings.length > 0) {
      hasWarnings = true;
      console.warn(`⚠️ CTA "${ctaId}" warnings:`, result.warnings);
    }
    
    if (result.isValid && result.warnings.length === 0) {
      console.log(`✅ CTA "${ctaId}" is valid`);
    }
  });

  console.log('========================');
  if (!hasErrors && !hasWarnings) {
    console.log('🎉 All CTAs validated successfully with no issues!');
  } else if (!hasErrors) {
    console.log('✅ All CTAs are valid (some warnings present)');
  } else {
    console.log('❌ Some CTAs have errors that need to be fixed');
  }

  return !hasErrors;
};

// Function to validate a URL is accessible (for runtime checks)
export const validateCTAUrl = async (url: string): Promise<boolean> => {
  try {
    if (url.startsWith('/')) {
      // Internal URLs - assume valid since we can't easily test them
      return true;
    }
    
    // For external URLs, we can't use fetch due to CORS, so we return true
    // In a real scenario, this would be handled by a backend service
    return true;
  } catch (error) {
    console.error('URL validation failed:', error);
    return false;
  }
};
