
export interface SmartTip {
  id: string;
  title: string;
  content: string;
  action: string;
  category: string;
  contexts: string[];
}

export const smartTips: SmartTip[] = [
  {
    id: 'health_check',
    title: 'IT Health Check',
    content: 'Regular IT health checks cut downtime by 30%. Want to see how MBACIO can keep your systems running smoothly?',
    action: 'it_health_check',
    category: 'maintenance',
    contexts: ['homepage', 'services', 'tools']
  },
  {
    id: 'automation',
    title: 'Task Automation',
    content: 'Automate just 20% of repetitive tasks and save two full workdays a week. Curious what we can automate for you?',
    action: 'automation_assessment',
    category: 'automation',
    contexts: ['tools', 'services', 'homepage']
  },
  {
    id: 'mfa_security',
    title: 'Security Enhancement',
    content: 'Multi-factor authentication protects your business from common hacks. Need help setting it up across your team?',
    action: 'security_consultation',
    category: 'security',
    contexts: ['services', 'why-us']
  },
  {
    id: 'dashboard_insight',
    title: 'Real-time Dashboards',
    content: 'Real-time dashboards uncover hidden bottlenecks and save thousands. Interested in a demo?',
    action: 'dashboard_demo',
    category: 'analytics',
    contexts: ['tools', 'case-studies']
  },
  {
    id: 'cloud_migration',
    title: 'Cloud Migration',
    content: 'Planning a cloud move? Avoid hidden costs and downtime with MBACIO\'s proven migration approach. Ask me how.',
    action: 'cloud_consultation',
    category: 'infrastructure',
    contexts: ['services', 'tools']
  },
  {
    id: 'backup_strategy',
    title: 'Backup Best Practice',
    content: 'Use the 3-2-1 backup rule: 3 copies, 2 media types, 1 offsite. Want to review your backup strategy?',
    action: 'backup_assessment',
    category: 'security',
    contexts: ['services', 'why-us']
  },
  {
    id: 'cost_efficiency',
    title: 'Cost-Efficient IT',
    content: 'Your IT partner should boost ROI without breaking the bank. MBACIO delivers smart, affordable solutions tailored for you.',
    action: 'roi_discussion',
    category: 'value',
    contexts: ['why-us', 'homepage']
  },
  {
    id: 'ai_automation',
    title: 'AI for Mid-Market',
    content: 'AI automation isn\'t just for big companies. Mid-market firms save time and money fast. Want to learn how?',
    action: 'ai_consultation',
    category: 'automation',
    contexts: ['services', 'case-studies']
  },
  {
    id: 'compliance',
    title: 'Compliance Audit',
    content: 'Stay ahead of industry regulations and avoid fines with MBACIO\'s compliance audits. Shall we schedule one?',
    action: 'compliance_audit',
    category: 'compliance',
    contexts: ['services', 'why-us']
  },
  {
    id: 'custom_integration',
    title: 'Custom Integrations',
    content: 'Off-the-shelf tools rarely fit perfectly. Custom integrations reduce errors and save time. Interested in exploring options?',
    action: 'integration_consultation',
    category: 'integration',
    contexts: ['services', 'tools']
  },
  {
    id: 'user_training',
    title: 'User Training',
    content: 'Technology works best when people know how to use it. Ongoing training boosts adoption and cuts support calls.',
    action: 'training_program',
    category: 'training',
    contexts: ['services', 'why-us']
  },
  {
    id: 'vendor_consolidation',
    title: 'Vendor Consolidation',
    content: 'Too many IT vendors? Consolidation cuts costs and simplifies support. Ask me how MBACIO can help streamline.',
    action: 'vendor_analysis',
    category: 'optimization',
    contexts: ['tools', 'services']
  },
  {
    id: 'monitoring',
    title: 'Proactive Monitoring',
    content: 'Proactive monitoring spots issues before users do. MBACIO\'s solutions keep your systems healthy 24/7.',
    action: 'monitoring_setup',
    category: 'maintenance',
    contexts: ['services', 'why-us']
  },
  {
    id: 'data_insights',
    title: 'Data-Driven Decisions',
    content: 'Raw data is noise without insight. Our dashboards turn data into smart decisions that grow your business.',
    action: 'dashboard_consultation',
    category: 'analytics',
    contexts: ['tools', 'case-studies']
  },
  {
    id: 'ai_assistant',
    title: 'Build Your Own AI',
    content: 'This assistant was built with AI — and it\'s free for you! Want to create your own smart assistant? MBACIO can guide you.',
    action: 'ai_development',
    category: 'innovation',
    contexts: ['homepage', 'services']
  }
];

export const getContextualTips = (context: string, messageCount: number): SmartTip[] => {
  const contextualTips = smartTips.filter(tip => 
    tip.contexts.includes(context) || tip.contexts.includes('homepage')
  );
  
  // Show different tips based on conversation progress
  if (messageCount <= 2) {
    return contextualTips.filter(tip => ['value', 'automation', 'health_check'].includes(tip.category));
  } else if (messageCount <= 5) {
    return contextualTips.filter(tip => ['security', 'analytics', 'optimization'].includes(tip.category));
  } else {
    return contextualTips.filter(tip => ['innovation', 'training', 'compliance'].includes(tip.category));
  }
};
