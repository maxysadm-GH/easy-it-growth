
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import IdealClients from '../components/IdealClients';
import WhyMBACIO from '../components/WhyMBACIO';
import ThreeStepFramework from '../components/ThreeStepFramework';
import ServicePlans from '../components/ServicePlans';
import ExpandedServices from '../components/ExpandedServices';
import AIInsights from '../components/AIInsights';
// import AssessmentForms from '../components/AssessmentForms'; // Removed from homepage
import Integrations from '../components/Integrations';
import ClientPortal from '../components/ClientPortal';
import BlogTeaser from '../components/BlogTeaser';
import ChatAssistant from '../components/ChatAssistant';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <Hero />
      <IdealClients />
      <WhyMBACIO />
      <ExpandedServices />
      <ThreeStepFramework />
      <ServicePlans />
      <AIInsights />
      <Integrations />
      {/* Assessments have moved to subpages */}
      <ClientPortal />
      <BlogTeaser />
      <ChatAssistant />
      <Footer />
    </div>
  );
};

export default Index;

