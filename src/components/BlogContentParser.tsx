
import React from 'react';
import { Card } from '@/components/ui/card';
import { AlertTriangle, Shield, DollarSign, TrendingUp, Clock, Users, CheckCircle, Target } from 'lucide-react';
import CyberSecurityCharts from './CyberSecurityCharts';
import BlogInfographic from './BlogInfographic';
import ManufacturingCharts from './ManufacturingCharts';
import CPALawFirmCharts from './CPALawFirmCharts';

interface BlogContentParserProps {
  content: string;
  seoKeyword?: string | null;
  title: string;
}

const BlogContentParser = ({ content, seoKeyword, title }: BlogContentParserProps) => {
  if (!content) return null;

  // Enhanced content cleaning and parsing
  const parseContent = (text: string) => {
    // Remove AI-style formatting markers
    let cleanedText = text
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove ** bold markers
      .replace(/^###\s+/gm, '') // Remove ### headers
      .replace(/^##\s+/gm, '') // Remove ## headers
      .replace(/^\*\*\*\*\s+/gm, '') // Remove **** markers
      .replace(/^•\s+/gm, '') // Remove bullet points
      .replace(/^\-\s+/gm, '') // Remove dash bullet points
      .replace(/^\d+\.\s+/gm, '') // Remove numbered lists
      .replace(/\n{3,}/g, '\n\n'); // Normalize line breaks

    const sections = cleanedText.split('\n\n').filter(section => section.trim() !== '');
    const parsedSections: Array<{ type: string; content: string; data?: any }> = [];
    
    // Determine article type from title and content
    const isCyberSecurity = title.toLowerCase().includes('cyberattack') || title.toLowerCase().includes('security') || title.toLowerCase().includes('breach');
    const isManufacturing = title.toLowerCase().includes('manufacturing') || title.toLowerCase().includes('production') || title.toLowerCase().includes('efficiency');
    const isCPALaw = title.toLowerCase().includes('cpa') || title.toLowerCase().includes('law') || title.toLowerCase().includes('legal') || title.toLowerCase().includes('accounting');

    sections.forEach((section, index) => {
      const trimmedSection = section.trim();
      
      if (!trimmedSection) return;

      // Strategic visual placement based on content position
      const totalSections = sections.length;
      const position = index / totalSections;

      // Opening hook with compelling statistic (10% through)
      if (position > 0.1 && position < 0.2 && hasCompellingStatistic(trimmedSection) && parsedSections.length > 0) {
        parsedSections.push({
          type: 'compelling-stat',
          content: trimmedSection
        });
        return;
      }

      // First major visual (25% through)
      if (position > 0.2 && position < 0.35) {
        if (isCyberSecurity && !hasVisualBeenAdded(parsedSections, 'cybersecurity-timeline')) {
          parsedSections.push({
            type: 'cybersecurity-timeline',
            content: 'Attack Progression Timeline',
            data: { type: 'timeline' }
          });
        } else if (isManufacturing && !hasVisualBeenAdded(parsedSections, 'manufacturing-process')) {
          parsedSections.push({
            type: 'manufacturing-process',
            content: 'Process Optimization Flow',
            data: { type: 'process-flow' }
          });
        } else if (isCPALaw && !hasVisualBeenAdded(parsedSections, 'cpa-workflow')) {
          parsedSections.push({
            type: 'cpa-workflow',
            content: 'Workflow Efficiency Analysis',
            data: { type: 'workflow' }
          });
        }
      }

      // Mid-article charts (50% through)
      if (position > 0.45 && position < 0.6) {
        if (isCyberSecurity && !hasVisualBeenAdded(parsedSections, 'cybersecurity-costs')) {
          parsedSections.push({
            type: 'cybersecurity-costs',
            content: 'True Cost Analysis',
            data: { type: 'cost-breakdown' }
          });
        } else if (isManufacturing && !hasVisualBeenAdded(parsedSections, 'manufacturing-roi')) {
          parsedSections.push({
            type: 'manufacturing-roi',
            content: 'ROI Timeline',
            data: { type: 'roi-timeline' }
          });
        } else if (isCPALaw && !hasVisualBeenAdded(parsedSections, 'cpa-dashboard')) {
          parsedSections.push({
            type: 'cpa-dashboard',
            content: 'Financial Dashboard Preview',
            data: { type: 'dashboard' }
          });
        }
      }

      // Later article infographic (75% through)
      if (position > 0.7 && position < 0.85) {
        if (isCyberSecurity && !hasVisualBeenAdded(parsedSections, 'security-layers')) {
          parsedSections.push({
            type: 'security-layers',
            content: 'Defense Strategy Framework',
            data: { type: 'defense-layers' }
          });
        }
      }

      // Process the text content
      parsedSections.push({
        type: 'story-paragraph',
        content: enhanceStorytelling(trimmedSection)
      });
    });

    return parsedSections;
  };

  const hasCompellingStatistic = (text: string) => {
    return /\$[\d,.]+(M|K|million|thousand|billion)|[\d,]+%|\d+\s*(days?|hours?|minutes?|times?)/i.test(text);
  };

  const hasVisualBeenAdded = (sections: any[], visualType: string) => {
    return sections.some(section => section.type === visualType);
  };

  const enhanceStorytelling = (text: string) => {
    // Add conversational transitions and natural flow
    let enhanced = text;
    
    // Add transition phrases for better flow
    if (enhanced.length > 150 && !enhanced.match(/^(Imagine|Picture|Consider|Think about|What if|Here's what|This is where)/)) {
      const transitions = [
        "Here's what happened next: ",
        "Picture this scenario: ",
        "This is where things get interesting: ",
        "Consider the impact: ",
        "Here's the reality: "
      ];
      const randomTransition = transitions[Math.floor(Math.random() * transitions.length)];
      enhanced = randomTransition + enhanced.charAt(0).toLowerCase() + enhanced.slice(1);
    }

    return enhanced;
  };

  const sections = parseContent(content);

  const renderSection = (section: { type: string; content: string; data?: any }, index: number) => {
    switch (section.type) {
      case 'compelling-stat':
        return (
          <Card key={index} className="my-8 p-8 border-l-4 border-l-accent bg-gradient-to-r from-accent/10 to-transparent">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-poppins font-bold text-navy mb-2">Eye-Opening Reality</h3>
                <p className="text-lg text-gray-700 font-inter leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          </Card>
        );

      case 'cybersecurity-timeline':
        return (
          <div key={index} className="my-12">
            <BlogInfographic type="timeline" />
          </div>
        );

      case 'cybersecurity-costs':
        return (
          <div key={index} className="my-12">
            <CyberSecurityCharts />
          </div>
        );

      case 'security-layers':
        return (
          <div key={index} className="my-12">
            <Card className="border border-accent/20 shadow-lg">
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-3 flex items-center justify-center gap-3">
                    <Shield className="w-6 h-6 text-accent" />
                    MBACIO's Defense Strategy Framework
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    Multi-layered protection that actually works
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-b from-accent/5 to-transparent rounded-lg">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-poppins font-bold text-navy mb-2">Prevention</h4>
                    <p className="text-sm text-gray-600 font-inter">Advanced threat detection and system hardening</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-b from-navy/5 to-transparent rounded-lg">
                    <div className="w-16 h-16 mx-auto mb-4 bg-navy/20 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-navy" />
                    </div>
                    <h4 className="font-poppins font-bold text-navy mb-2">Education</h4>
                    <p className="text-sm text-gray-600 font-inter">Staff training and security awareness programs</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-b from-red-50 to-transparent rounded-lg">
                    <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-8 h-8 text-red-600" />
                    </div>
                    <h4 className="font-poppins font-bold text-navy mb-2">Response</h4>
                    <p className="text-sm text-gray-600 font-inter">Incident response and recovery protocols</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'manufacturing-process':
        return (
          <div key={index} className="my-12">
            <ManufacturingCharts />
          </div>
        );

      case 'manufacturing-roi':
      case 'cpa-workflow':
      case 'cpa-dashboard':
        return (
          <div key={index} className="my-12">
            <CPALawFirmCharts />
          </div>
        );

      case 'story-paragraph':
      default:
        // Enhanced paragraph with better styling
        const hasStatistic = /\$[\d,.]+(M|K|million|thousand)|[\d,]+%|\d+\s*(days?|hours?|minutes?)/i.test(section.content);
        
        if (hasStatistic && section.content.length < 250) {
          return (
            <Card key={index} className="my-8 p-6 border-l-4 border-l-navy bg-gradient-to-r from-navy/5 to-transparent">
              <p className="text-lg font-semibold text-navy leading-relaxed font-inter flex items-center gap-3">
                <Target className="w-5 h-5 text-navy flex-shrink-0" />
                {section.content}
              </p>
            </Card>
          );
        }

        return (
          <div key={index} className="my-6">
            <p className="leading-relaxed text-lg text-gray-700 font-inter">
              {section.content}
            </p>
          </div>
        );
    }
  };

  return (
    <div className="prose prose-lg max-w-none">
      {sections.map((section, index) => renderSection(section, index))}
    </div>
  );
};

export default BlogContentParser;
