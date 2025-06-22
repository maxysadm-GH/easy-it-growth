
import React from 'react';
import { Card } from '@/components/ui/card';
import { AlertTriangle, Shield, DollarSign, TrendingUp, Clock, Users } from 'lucide-react';
import CyberSecurityCharts from './CyberSecurityCharts';
import BlogInfographic from './BlogInfographic';

interface BlogContentParserProps {
  content: string;
  seoKeyword?: string | null;
  title: string;
}

const BlogContentParser = ({ content, seoKeyword, title }: BlogContentParserProps) => {
  if (!content) return null;

  // Parse content into sections
  const parseContent = (text: string) => {
    const sections = text.split('\n\n').filter(section => section.trim() !== '');
    const parsedSections: Array<{ type: string; content: string; data?: any }> = [];
    
    let currentIndex = 0;
    
    sections.forEach((section, index) => {
      const trimmedSection = section.trim();
      
      // Skip AI-style headers and replace with natural content flow
      if (trimmedSection.startsWith('###') || trimmedSection.startsWith('****')) {
        return;
      }

      // Add visual breaks and infographics at strategic points
      if (index === Math.floor(sections.length * 0.3) && title.includes('cyberattack')) {
        parsedSections.push({
          type: 'cybersecurity-chart',
          content: 'Cost Impact Visualization',
          data: { type: 'cost-comparison' }
        });
      }

      if (index === Math.floor(sections.length * 0.7) && title.includes('cyberattack')) {
        parsedSections.push({
          type: 'infographic',
          content: 'Attack Timeline',
          data: { type: 'timeline' }
        });
      }

      // Regular content parsing
      parsedSections.push({
        type: 'paragraph',
        content: trimmedSection
      });

      currentIndex++;
    });

    return parsedSections;
  };

  const sections = parseContent(content);

  const renderSection = (section: { type: string; content: string; data?: any }, index: number) => {
    switch (section.type) {
      case 'cybersecurity-chart':
        return (
          <div key={index} className="my-12">
            <CyberSecurityCharts />
          </div>
        );

      case 'infographic':
        return (
          <div key={index} className="my-12">
            <BlogInfographic type={section.data?.type || 'timeline'} />
          </div>
        );

      case 'paragraph':
        // Enhanced paragraph with callouts for key statistics
        const hasStatistic = /\$[\d,.]+(M|K|million|thousand)|[\d,]+%|\d+\s*(days?|hours?|minutes?)/i.test(section.content);
        
        if (hasStatistic && section.content.length < 200) {
          return (
            <Card key={index} className="my-8 p-6 border-l-4 border-l-accent bg-gradient-to-r from-accent/5 to-transparent">
              <p className="text-lg font-semibold text-navy leading-relaxed font-inter flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-accent flex-shrink-0" />
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

      default:
        return null;
    }
  };

  return (
    <div className="prose prose-lg max-w-none">
      {sections.map((section, index) => renderSection(section, index))}
    </div>
  );
};

export default BlogContentParser;
