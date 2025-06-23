
import CTAButton from '@/components/ui/cta-button';
import { Badge } from '@/components/ui/badge';

const ServicesHero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-yellow text-navy font-bold px-4 py-2 text-lg">
            🌟 Bilingual IT Excellence
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
            Complete IT Solutions
            <span className="block text-gradient-yellow-end">En Español También</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
            Discover MBACIO's full-service IT offerings with bilingual support, Agile methodology, 
            and real-world experience using every tool we recommend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              ctaId="book-assessment"
              variant="yellow"
              size="lg"
              className="text-xl px-10 py-6"
            />
            <CTAButton 
              customConfig={{
                text: "Calculate Your IT ROI",
                url: "/automation-roi",
                type: "internal"
              }}
              variant="outline"
              size="lg"
              className="text-xl px-10 py-6 border-white text-white hover:bg-white hover:text-navy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
