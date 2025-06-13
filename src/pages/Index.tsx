
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import IdealClients from '../components/IdealClients';
import WhyMBACIO from '../components/WhyMBACIO';
import ThreeStepFramework from '../components/ThreeStepFramework';
import ServicePlans from '../components/ServicePlans';
import AIInsights from '../components/AIInsights';
import AssessmentForms from '../components/AssessmentForms';
import ClientPortal from '../components/ClientPortal';
import BlogTeaser from '../components/BlogTeaser';
import ChatAssistant from '../components/ChatAssistant';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <IdealClients />
      <WhyMBACIO />
      <ThreeStepFramework />
      <ServicePlans />
      <AIInsights />
      <AssessmentForms />
      <ClientPortal />
      <BlogTeaser />
      <ChatAssistant />
      <Footer />
    </div>
  );
};

export default Index;
