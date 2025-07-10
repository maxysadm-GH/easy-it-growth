
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Tools, assessments, and insights to help you make informed IT decisions
          </p>
        </div>
      </section>

      {/* Assessment Tools */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy">Assessment Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Automation ROI Calculator</h3>
              <p className="text-gray-700 mb-4">Calculate the return on investment for your automation projects.</p>
              <a href="/tools/automation-roi" className="text-accent hover:underline font-semibold">
                Use Calculator →
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Cyber Risk Assessment</h3>
              <p className="text-gray-700 mb-4">Evaluate your organization's cybersecurity posture.</p>
              <a href="/tools/assessment-risk" className="text-accent hover:underline font-semibold">
                Start Assessment →
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Downtime Cost Calculator</h3>
              <p className="text-gray-700 mb-4">Understand the true cost of system downtime to your business.</p>
              <a href="/tools/downtime-cost" className="text-accent hover:underline font-semibold">
                Calculate Cost →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Insights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy">Blog & Insights</h2>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8">
              Stay updated with the latest IT trends, best practices, and industry insights.
            </p>
            <a 
              href="/blog" 
              className="bg-gradient-yellow text-navy font-bold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 inline-block"
            >
              Read Our Blog
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
