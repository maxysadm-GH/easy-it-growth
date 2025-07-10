
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PricingCalculator from '../components/PricingCalculator';
import { Check, X } from 'lucide-react';

const PricingROI = () => {
  const features = [
    { name: "Help Desk Support", essential: true, premier: true, elite: true },
    { name: "Anti-Spam & Basic AV", essential: true, premier: true, elite: true },
    { name: "Patching & Updates", essential: true, premier: true, elite: true },
    { name: "Cloud Backup (365: Email, OneDrive, Teams)", essential: true, premier: true, elite: true },
    { name: "SOC Monitoring (24/7)", essential: false, premier: true, elite: true },
    { name: "Next-Gen AI Antivirus", essential: false, premier: true, elite: true },
    { name: "Cybersecurity Awareness Training", essential: false, premier: true, elite: true },
    { name: "DMARC Email Security", essential: false, premier: true, elite: true },
    { name: "AI Threat Detection", essential: false, premier: false, elite: true },
    { name: "Automation (SOA, Password Management)", essential: false, premier: false, elite: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing & ROI Planning</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Transparent pricing based on verified business proposals. Calculate your investment 
            and ROI with our interactive tools. All plans backed by our 6-week ROI guarantee.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <PricingCalculator />
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-navy">Service Tier Comparison</h2>
          <p className="text-center text-gray-600 mb-12">
            Verified feature matrix from MBACIO business proposals
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-4 text-left">Features</th>
                  <th className="p-4 text-center">Essential<br/><span className="text-sm">$75/user + $85/workstation</span></th>
                  <th className="p-4 text-center bg-accent">Premier<br/><span className="text-sm">$125/user + $85/workstation</span></th>
                  <th className="p-4 text-center">Elite<br/><span className="text-sm">$175+/user + $85/workstation</span></th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{feature.name}</td>
                    <td className="p-4 text-center">
                      {feature.essential ? (
                        <Check className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center bg-accent/10">
                      {feature.premier ? (
                        <Check className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {feature.elite ? (
                        <Check className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              All tiers include onsite support. Premier and Elite tiers include enhanced and premium support respectively.
            </p>
            <button 
              onClick={() => window.open('https://outlook.office.com/book/MBACIOConsultation@mbacio.com/', '_blank')}
              className="bg-gradient-yellow text-navy font-bold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300"
            >
              Schedule Free Assessment
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingROI;
