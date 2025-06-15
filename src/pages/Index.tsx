import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import IdealClients from '../components/IdealClients';
import WhyMBACIO from '../components/WhyMBACIO';
import ThreeStepFramework from '../components/ThreeStepFramework';
import ServicePlans from '../components/ServicePlans';
import ExpandedServices from '../components/ExpandedServices';
import AIInsights from '../components/AIInsights';
import Integrations from '../components/Integrations';
import ClientPortal from '../components/ClientPortal';
import BlogTeaser from '../components/BlogTeaser';
import Chatbot from '../components/Chatbot';
import Footer from '../components/Footer';
import ServicePlansPage from '../pages/ServicePlansPage';
import DashboardSolutions from '../pages/DashboardSolutions';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <Hero />
      <IdealClients />
      <WhyMBACIO />
      <ThreeStepFramework />
      <AIInsights />
      <ExpandedServices />
      <Integrations />
      {/* Add easy access links for key subpages */}
      <div className="container mx-auto px-4 py-10 text-center">
        <a
          href="/service-plans"
          className="inline-block bg-gradient-yellow hover:opacity-90 text-navy font-poppins font-bold text-lg px-8 py-4 rounded-lg mt-6 shadow transition"
        >
          Compare our Essential, Premier & Elite Plans
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
