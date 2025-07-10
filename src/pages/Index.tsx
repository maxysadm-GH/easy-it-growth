
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AISuperPowers from '../components/AISuperPowers';
import IdealClients from '../components/IdealClients';
import WhyMBACIO from '../components/WhyMBACIO';
import ThreeStepFramework from '../components/ThreeStepFramework';
import ExpandedServices from '../components/ExpandedServices';
import AIInsights from '../components/AIInsights';
import Integrations from '../components/Integrations';
import CaseStudies from '../components/CaseStudies';
import BlogTeaser from '../components/BlogTeaser';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <AISuperPowers />
      <IdealClients />
      <WhyMBACIO />
      <ThreeStepFramework />
      <AIInsights />
      <ExpandedServices />
      <Integrations />
      <CaseStudies />
      <BlogTeaser />
      <Footer />
    </div>
  );
};

export default Index;
