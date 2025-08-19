-- Update all blog posts with optimized SEO meta descriptions, improved keywords, and better CTAs
UPDATE blog_posts SET
  -- AI Food Manufacturing Articles (New ones)
  CASE 
    WHEN title = 'The Future is Now: 5 AI-Powered Innovations Revolutionizing Food Manufacturing' THEN
      seo_keyword = 'AI food manufacturing automation predictive maintenance',
      cta_text = 'Get Your AI Readiness Assessment',
      cta_link = '/tools/ai-readiness-assessment'
      
    WHEN title = 'Unlocking Efficiency: A Step-by-Step Guide to Implementing AI in Your Food Production Line' THEN
      seo_keyword = 'AI implementation food production manufacturing guide',
      cta_text = 'Start Your AI Implementation Journey',
      cta_link = '/tools/ai-readiness-assessment'
      
    WHEN title = 'Beyond the Hype: Real-World Case Studies of AI in the Food Industry' THEN
      seo_keyword = 'AI food industry case studies ROI results',
      cta_text = 'See Our Manufacturing Case Studies',
      cta_link = '/case-studies'
      
    WHEN title = 'AI and Food Safety: How to Build a More Transparent and Secure Food Supply Chain' THEN
      seo_keyword = 'AI food safety supply chain transparency security',
      cta_text = 'Assess Your Security Risks',
      cta_link = '/tools/assessment-risk'
      
    WHEN title = 'The Top 5 Challenges of AI in the Food Industry (and How to Overcome Them)' THEN
      seo_keyword = 'AI food industry challenges solutions implementation',
      cta_text = 'Overcome Implementation Challenges',
      cta_link = '/contact'
      
    -- Existing Articles Optimization
    WHEN title = 'Why Chicago CPA Firms Are Moving to Cloud-Based Solutions' THEN
      seo_keyword = 'Chicago CPA cloud migration accounting firms IT',
      cta_text = 'Get Your Cloud Migration Assessment',
      cta_link = '/tools/assessment-automation'
      
    WHEN title = 'The $2.4 Million Wake-Up Call: How One Cyberattack Changed Everything for a Chicago Law Firm' THEN
      seo_keyword = 'Chicago law firm cybersecurity cyberattack protection',
      cta_text = 'Assess Your Cybersecurity Risks',
      cta_link = '/tools/assessment-risk'
      
    WHEN title = 'From Chaos to Control: How IT Automation Transformed Our Manufacturing Client\'s Operations' THEN
      seo_keyword = 'manufacturing IT automation ERP integration ROI',
      cta_text = 'Calculate Your Automation ROI',
      cta_link = '/tools/automation-roi'
      
    WHEN title = 'Stop Guessing, Start Growing: How Real-Time Dashboards Are Revolutionizing Warehouse Operations' THEN
      seo_keyword = 'warehouse dashboards real-time analytics manufacturing',
      cta_text = 'See Dashboard Solutions',
      cta_link = '/dashboard-solutions'
      
    WHEN title = 'Beyond the Hype: How AI Agents Like Claude & ChatGPT Are Unlocking Hidden Profits for CPA Firms in 2025' THEN
      seo_keyword = 'CPA AI automation ChatGPT accounting efficiency',
      cta_text = 'Discover AI for CPAs',
      cta_link = '/cpa-law-client'
      
    WHEN title = 'The Silent Profit Drain: Unmasking Hidden Costs Through IT Vendor Consolidation' THEN
      seo_keyword = 'IT vendor consolidation cost reduction Chicago',
      cta_text = 'Analyze Your IT Costs',
      cta_link = '/tools/staff-productivity'
      
    WHEN title = 'Beyond Billable Hours: How QBO, Fractional CFOs, and Smart Dashboards Redefine Law Firm Profitability' THEN
      seo_keyword = 'law firm profitability QBO CFO dashboards',
      cta_text = 'Boost Law Firm Profitability',
      cta_link = '/cpa-law-client'
      
    WHEN title = 'From Spreadsheet Chaos to Cloud Clarity: A Mid-Market Manufacturer\'s Digital Transformation Journey' THEN
      seo_keyword = 'manufacturing digital transformation cloud ERP',
      cta_text = 'Start Your Digital Transformation',
      cta_link = '/manufacturing-analytics'
      
    ELSE seo_keyword, cta_text, cta_link
  END
WHERE title IN (
  'The Future is Now: 5 AI-Powered Innovations Revolutionizing Food Manufacturing',
  'Unlocking Efficiency: A Step-by-Step Guide to Implementing AI in Your Food Production Line',
  'Beyond the Hype: Real-World Case Studies of AI in the Food Industry',
  'AI and Food Safety: How to Build a More Transparent and Secure Food Supply Chain',
  'The Top 5 Challenges of AI in the Food Industry (and How to Overcome Them)',
  'Why Chicago CPA Firms Are Moving to Cloud-Based Solutions',
  'The $2.4 Million Wake-Up Call: How One Cyberattack Changed Everything for a Chicago Law Firm',
  'From Chaos to Control: How IT Automation Transformed Our Manufacturing Client\'s Operations',
  'Stop Guessing, Start Growing: How Real-Time Dashboards Are Revolutionizing Warehouse Operations',
  'Beyond the Hype: How AI Agents Like Claude & ChatGPT Are Unlocking Hidden Profits for CPA Firms in 2025',
  'The Silent Profit Drain: Unmasking Hidden Costs Through IT Vendor Consolidation',
  'Beyond Billable Hours: How QBO, Fractional CFOs, and Smart Dashboards Redefine Law Firm Profitability',
  'From Spreadsheet Chaos to Cloud Clarity: A Mid-Market Manufacturer\'s Digital Transformation Journey'
);