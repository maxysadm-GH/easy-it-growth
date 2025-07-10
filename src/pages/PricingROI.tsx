
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PricingCalculator from '../components/PricingCalculator';

const PricingROI = () => {
  const handleBooking = () => {
    window.open('https://outlook.office.com/book/MBACIOConsultation@mbacio.com/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing & ROI Planning</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Our service plans are designed for transparency and value. Use the calculator below to 
            estimate the monthly investment for our packaged IT service tiers. For custom automation 
            projects, use our ROI Calculator to build a business case and see the potential return. A final, 
            precise quote is always provided after a strategic consultation.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <PricingCalculator />
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy">Our Service Tiers</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Essential Tier */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Essential</h3>
              <p className="text-3xl font-bold mb-4 text-navy">$4,000/mo</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Help Desk Support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Anti-Spam & Basic AV</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Patching & Updates</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Cloud Backup (365: Email, OneDrive, Teams)</li>
                <li className="flex items-center"><span className="text-red-500 mr-2">✗</span>SOC Monitoring (24/7)</li>
                <li className="flex items-center"><span className="text-red-500 mr-2">✗</span>Next-Gen AI Antivirus</li>
                <li className="flex items-center"><span className="text-red-500 mr-2">✗</span>Cybersecurity Awareness Training</li>
                <li className="flex items-center"><span className="text-red-500 mr-2">✗</span>DMARC Email Security</li>
                <li className="flex items-center"><span className="text-red-500 mr-2">✗</span>AI Threat Detection</li>
                <li className="flex items-center"><span className="text-red-500 mr-2">✗</span>Automation (SOA, Password Management)</li>
              </ul>
              <p className="text-sm mt-4 text-gray-600">Basic Onsite Support</p>
            </div>

            {/* Premier Tier */}
            <div className="bg-gradient-yellow p-6 rounded-lg border-2 border-accent relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Premier</h3>
              <p className="text-3xl font-bold mb-4 text-navy">$6,250/mo</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Help Desk Support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Anti-Spam & Basic AV</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Patching & Updates</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Cloud Backup (365: Email, OneDrive, Teams)</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>SOC Monitoring (24/7)</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Next-Gen AI Antivirus</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Cybersecurity Awareness Training</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>DMARC Email Security</li>
                <li className="flex items-center"><span className="text-red-500 mr-2">✗</span>AI Threat Detection</li>
                <li className="flex items-center"><span className="text-red-500 mr-2">✗</span>Automation (SOA, Password Management)</li>
              </ul>
              <p className="text-sm mt-4 text-gray-600">Enhanced Onsite Support</p>
            </div>

            {/* Elite Tier */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Elite (AI + Strategic Add-ons)</h3>
              <p className="text-3xl font-bold mb-4 text-navy">$6,500/mo</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Help Desk Support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Anti-Spam & Basic AV</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Patching & Updates</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Cloud Backup (365: Email, OneDrive, Teams)</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>SOC Monitoring (24/7)</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Next-Gen AI Antivirus</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Cybersecurity Awareness Training</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>DMARC Email Security</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>AI Threat Detection</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Automation (SOA, Password Management)</li>
              </ul>
              <p className="text-sm mt-4 text-gray-600">Premium Onsite Support</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button 
              onClick={handleBooking}
              className="bg-gradient-yellow text-navy font-bold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300"
            >
              Book Free Assessment
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingROI;
