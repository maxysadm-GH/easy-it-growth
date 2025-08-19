import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  structuredData?: any;
  ogImage?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  structuredData,
  ogImage = "/lovable-uploads/31fd0b08-30e1-4290-93b6-8547b1d4cfb5.png",
  article
}) => {
  const fullTitle = title.includes('MBACIO') ? title : `${title} | MBACIO`;
  const currentUrl = canonicalUrl || `https://www.mbacio.com${window.location.pathname}`;

  // Default organization structured data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "MBACIO",
    "url": "https://www.mbacio.com/",
    "logo": "https://www.mbacio.com/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png",
    "image": "https://www.mbacio.com/lovable-uploads/31fd0b08-30e1-4290-93b6-8547b1d4cfb5.png",
    "telephone": "+1-773-657-2300",
    "email": "info@mbacio.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2515 Waukegan Road",
      "addressLocality": "Bannockburn",
      "addressRegion": "IL",
      "postalCode": "60015",
      "addressCountry": "US"
    },
    "areaServed": [
      {"@type": "City", "name": "Bannockburn"},
      {"@type": "City", "name": "Chicago"},
      {"@type": "City", "name": "Deerfield"},
      {"@type": "State", "name": "Illinois"}
    ],
    "sameAs": [
      "https://www.linkedin.com/company/mbacio/"
    ],
    "description": "Strategic IT & Automation Partner for Security, Data Visibility & Business Growth. Serving manufacturers, law firms, and CPA practices nationwide.",
    "foundingDate": "2004",
    "priceRange": "$$"
  };

  // Website structured data
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MBACIO",
    "url": "https://www.mbacio.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.mbacio.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="MBACIO" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="MBACIO" />
      <meta property="og:locale" content="en_US" />

      {/* Article specific tags */}
      {article && (
        <>
          {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.author && <meta property="article:author" content={article.author} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags?.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mbacio" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteData)}
      </script>
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;