
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Industries = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Specialized IT solutions tailored to your industry's unique challenges and requirements
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold mb-4 text-navy">Manufacturing</h3>
              <p className="text-gray-700 mb-6">
                ERP integration, MRP optimization, and production automation for food & beverage manufacturers.
              </p>
              <a 
                href="/food-beverage-client" 
                className="bg-gradient-yellow text-navy font-bold px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300 inline-block"
              >
                Learn More
              </a>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold mb-4 text-navy">Law Firms</h3>
              <p className="text-gray-700 mb-6">
                Secure document management, compliance solutions, and client communication systems.
              </p>
              <a 
                href="/cpa-law-client" 
                className="bg-gradient-yellow text-navy font-bold px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300 inline-block"
              >
                Learn More
              </a>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4 text-navy">CPA Firms</h3>
              <p className="text-gray-700 mb-6">
                QuickBooks automation, tax software integration, and secure client portals.
              </p>
              <a 
                href="/finance-leaders-client" 
                className="bg-gradient-yellow text-navy font-bold px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300 inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy">Common Industry Challenges We Solve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-navy">Data Security & Compliance</h3>
              <p className="text-gray-700">Protect sensitive client and business data while meeting industry regulations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-navy">System Integration</h3>
              <p className="text-gray-700">Connect disparate systems for seamless data flow and improved efficiency.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-navy">Process Automation</h3>
              <p className="text-gray-700">Eliminate manual tasks and reduce errors through intelligent automation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-navy">Scalable Infrastructure</h3>
              <p className="text-gray-700">Build IT systems that grow with your business and support expansion.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
