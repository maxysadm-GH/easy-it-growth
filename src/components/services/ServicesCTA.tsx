
import CTAButton from '@/components/ui/cta-button';
import { Badge } from '@/components/ui/badge';

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
      <div className="container mx-auto px-4 text-center">
        <Badge className="mb-6 bg-gradient-yellow text-navy font-bold px-4 py-2 text-lg">
          🚀 Ready to Transform?
        </Badge>
        <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8">
          Experience the MBACIO Difference
        </h2>
        <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto">
          Join businesses across Chicago and beyond who trust MBACIO for bilingual IT excellence. 
          Every business is unique - let's discuss how we can tailor our superpowers to your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <CTAButton 
            ctaId="book-assessment"
            variant="yellow"
            size="lg"
            className="text-xl px-10 py-6"
            forcePopup={true}
          />
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-yellow-end mb-2">100%</div>
            <div className="text-sm text-gray-300">Bilingual Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-yellow-end mb-2">3x</div>
            <div className="text-sm text-gray-300">Migrated Our Own Systems</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-yellow-end mb-2">24/7</div>
            <div className="text-sm text-gray-300">Support & Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
