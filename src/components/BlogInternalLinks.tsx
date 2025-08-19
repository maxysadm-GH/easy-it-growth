import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

const InternalLink: React.FC<InternalLinkProps> = ({ href, children, external = false }) => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'internal_link_click', {
        link_url: href,
        link_text: children
      });
    }
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = href;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="text-accent hover:text-navy font-semibold underline underline-offset-2 hover:underline-offset-4 transition-all duration-200 inline-flex items-center gap-1"
    >
      {children}
      {external && <ExternalLink className="w-3 h-3" />}
    </button>
  );
};

interface BlogInternalLinksProps {
  currentPostTitle?: string;
}

const BlogInternalLinks: React.FC<BlogInternalLinksProps> = ({ currentPostTitle }) => {
  const internalLinks = [
    {
      title: "Services & Solutions",
      description: "Explore our complete technology solutions",
      href: "/services",
      ctaText: "View All Services"
    },
    {
      title: "Data & AI Solutions", 
      description: "Transform your data into actionable insights",
      href: "/data-ai",
      ctaText: "See Dashboard Examples"
    },
    {
      title: "Client Success Stories",
      description: "Real results from businesses like yours",
      href: "/case-studies",
      ctaText: "Read Case Studies"
    }
  ];

  return (
    <div className="my-12 p-8 bg-gradient-to-br from-navy/5 to-accent/5 rounded-xl border border-gray-200">
      <h3 className="text-2xl font-poppins font-bold text-navy mb-6 text-center">
        Ready to Take Action?
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {internalLinks.map((link, index) => (
          <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <h4 className="font-poppins font-bold text-navy mb-2">{link.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{link.description}</p>
              <InternalLink href={link.href}>
                <span className="inline-flex items-center gap-2">
                  {link.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </InternalLink>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogInternalLinks;
export { InternalLink };