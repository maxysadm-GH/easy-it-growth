
import { logCTAValidationResults } from './cta-validator';

// Run CTA validation in development mode
if (import.meta.env.DEV) {
  console.log('🔍 Running CTA validation...');
  logCTAValidationResults();
}

export {};
