
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ServicesHero from '../components/services/ServicesHero';
import SuperpowersSection from '../components/services/SuperpowersSection';
import ServicesDetailGrid from '../components/services/ServicesDetailGrid';
import IndustryFocusSection from '../components/services/IndustryFocusSection';
import ServicesCTA from '../components/services/ServicesCTA';
import SEOHead from '../components/SEOHead';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Managed IT, Cybersecurity, Cloud & vCIO Services",
    "provider": {
      "@type": "Organization",
      "name": "MBACIO"
    },
    "description": "Complete IT solutions including managed services, cybersecurity, cloud migration, and virtual CIO services for manufacturing, legal, and CPA firms.",
    "areaServed": [
      {"@type": "City", "name": "Bannockburn"},
      {"@type": "City", "name": "Chicago"}
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Managed IT, Cybersecurity, Cloud & vCIO Services"
        description="Complete technology solutions for Chicago businesses - from 24/7 support to security and automation. Serving manufacturing, legal, and CPA firms in Bannockburn & Chicagoland."
        keywords="managed IT services Chicago, cybersecurity Bannockburn, cloud migration, virtual CIO, IT support manufacturing, legal IT services"
        structuredData={structuredData}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" }
      ]} />
      <Navigation />
      <ServicesHero />
      <SuperpowersSection />
      <ServicesDetailGrid />
      <IndustryFocusSection />
      <ServicesCTA />
      <Footer />
    </div>
  );
};

export default Services;
