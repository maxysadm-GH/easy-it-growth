
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About MBACIO</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Strategic IT & Automation Partner for Security, Data Visibility & Business Growth
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower mid-sized U.S. manufacturers, law firms, and CPA firms with enterprise-grade technology solutions that drive operational excellence, ensure security and compliance, and enable competitive advantage in an increasingly digital marketplace.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be recognized as the premier technology partner for American mid-market organizations, known for deep industry expertise, innovative solutions, and unwavering commitment to client success. By 2030, MBACIO will be the trusted IT advisor to 50+ organizations across the United States, setting the standard for specialized IT services in our target sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MBACIO */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-navy">Why Choose MBACIO</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-navy">Industry Expertise</h3>
                <p className="text-gray-700">Deep understanding of manufacturing, legal, and accounting sectors with specialized solutions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-navy">Proven Results</h3>
                <p className="text-gray-700">Track record of successful implementations and measurable ROI for our clients.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-navy">24/7 Support</h3>
                <p className="text-gray-700">Round-the-clock monitoring and support to keep your business running smoothly.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-navy">Scalable Solutions</h3>
                <p className="text-gray-700">Technology solutions that grow with your business and adapt to changing needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
