
export interface CTAConfig {
  id: string;
  text: string;
  url: string;
  type: 'internal' | 'external';
  category: 'assessment' | 'tool' | 'booking' | 'general';
  description: string;
}

export const CTA_CONFIGS: Record<string, CTAConfig> = {
  // Booking CTAs - Updated with corrected Microsoft Bookings URL
  'book-assessment': {
    id: 'book-assessment',
    text: 'Book Your Free Assessment',
    url: 'https://outlook.office.com/book/MBACIOITAssessments@mbacio.com/',
    type: 'external',
    category: 'booking',
    description: 'Main booking CTA for free assessments'
  },
  
  // Tool CTAs
  'automation-roi': {
    id: 'automation-roi',
    text: 'Calculate Your Automation ROI',
    url: '/tools/automation-roi',
    type: 'internal',
    category: 'tool',
    description: 'ROI calculator for automation investments'
  },
  'cyber-risk': {
    id: 'cyber-risk',
    text: 'Get Security Risk Assessment',
    url: '/tools/cyber-risk',
    type: 'internal',
    category: 'tool',
    description: 'Cybersecurity risk assessment tool'
  },
  'cloud-migration': {
    id: 'cloud-migration',
    text: 'Get Cloud Migration Assessment',
    url: '/tools/cloud-migration',
    type: 'internal',
    category: 'tool',
    description: 'Cloud migration ROI calculator'
  },
  'downtime-cost': {
    id: 'downtime-cost',
    text: 'Calculate Downtime Costs',
    url: '/tools/downtime-cost',
    type: 'internal',
    category: 'tool',
    description: 'Downtime cost calculator'
  },
  'vendor-consolidation': {
    id: 'vendor-consolidation',
    text: 'Calculate Vendor Savings',
    url: '/tools/vendor-consolidation',
    type: 'internal',
    category: 'tool',
    description: 'Vendor consolidation savings calculator'
  },
  'staff-productivity': {
    id: 'staff-productivity',
    text: 'Measure Staff Productivity',
    url: '/tools/staff-productivity',
    type: 'internal',
    category: 'tool',
    description: 'IT staff productivity calculator'
  },
  
  // Assessment CTAs
  'automation-assessment': {
    id: 'automation-assessment',
    text: 'Get Your Automation Assessment',
    url: '/assessment-automation',
    type: 'internal',
    category: 'assessment',
    description: 'Comprehensive automation readiness assessment'
  },
  'risk-assessment': {
    id: 'risk-assessment',
    text: 'Get Risk Assessment',
    url: '/assessment-risk',
    type: 'internal',
    category: 'assessment',
    description: 'Business risk assessment'
  },
  
  // General CTAs
  'view-case-studies': {
    id: 'view-case-studies',
    text: 'View All Case Studies',
    url: '/case-studies',
    type: 'internal',
    category: 'general',
    description: 'Navigate to case studies page'
  },
  'view-blog': {
    id: 'view-blog',
    text: 'View All Articles',
    url: '/blog',
    type: 'internal',
    category: 'general',
    description: 'Navigate to blog page'
  }
};

// Helper function to get CTA config by ID
export const getCTAConfig = (id: string): CTAConfig | null => {
  return CTA_CONFIGS[id] || null;
};

// Helper function to get all CTAs by category
export const getCTAsByCategory = (category: CTAConfig['category']): CTAConfig[] => {
  return Object.values(CTA_CONFIGS).filter(cta => cta.category === category);
};
