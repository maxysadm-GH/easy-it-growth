
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
import Chatbot from '../components/Chatbot';
import TestimonialCard from '../components/TestimonialCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <AISuperPowers />
      <IdealClients />
      <WhyMBACIO />
      <ThreeStepFramework />
      
      {/* Trusted By Industry Leaders Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-navy">Trusted By Industry Leaders</h2>
          
          {/* Client Logos */}
          <div className="flex justify-center items-center space-x-8 mb-16 opacity-60">
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 text-sm">Client Logo</span>
            </div>
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 text-sm">Client Logo</span>
            </div>
            <div className="h-16 w-32 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 text-sm">Client Logo</span>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="MBACIO transformed our manufacturing operations with real-time analytics. We've seen a 23% improvement in OEE and reduced scrap rates by 40%."
              name="Sarah Johnson"
              title="Operations Director"
              company="Midwest Manufacturing Co."
            />
            <TestimonialCard
              quote="Their expertise in legal technology helped us modernize our practice management systems while maintaining strict compliance standards."
              name="Michael Chen"
              title="Managing Partner"
              company="Chen & Associates Law Firm"
            />
            <TestimonialCard
              quote="The automation solutions MBACIO implemented saved us over 30 hours per week in manual processes. ROI was achieved in just 4 months."
              name="Lisa Rodriguez"
              title="CFO"
              company="Precision Accounting Group"
            />
          </div>
        </div>
      </section>

      <AIInsights />
      <ExpandedServices />
      <Integrations />
      <CaseStudies />
      <BlogTeaser />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
