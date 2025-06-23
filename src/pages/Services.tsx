
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ServicesHero from '../components/services/ServicesHero';
import SuperpowersSection from '../components/services/SuperpowersSection';
import ServicesGrid from '../components/services/ServicesGrid';
import IndustryFocusSection from '../components/services/IndustryFocusSection';
import ServicesCTA from '../components/services/ServicesCTA';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <ServicesHero />
      <SuperpowersSection />
      <ServicesGrid />
      <IndustryFocusSection />
      <ServicesCTA />
      <Footer />
    </div>
  );
};

export default Services;
