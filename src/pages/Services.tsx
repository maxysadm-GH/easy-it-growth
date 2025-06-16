
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ExpandedServices from '../components/ExpandedServices';
import { Button } from '@/components/ui/button';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              Complete IT Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              From cybersecurity to automation, we provide comprehensive IT services 
              that grow with your business and protect what matters most.
            </p>
            <Button size="lg" className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300">
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ExpandedServices />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8 text-navy">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Every business is unique. Let's discuss how we can tailor our services 
            to meet your specific needs and challenges.
          </p>
          <Button size="lg" className="bg-navy text-white hover:bg-deep-blue font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
