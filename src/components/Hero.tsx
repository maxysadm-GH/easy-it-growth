import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-navy via-deep-blue to-navy text-white pt-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold leading-tight mb-6">
                Making I.T. Easy
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
                From food & beverage manufacturers to law and accounting firms — we simplify, automate, and modernize your IT so your team can focus on results.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold text-sm">✓</span>
                </div>
                <span className="text-lg">Guaranteed ROI in 6 weeks</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold text-sm">✓</span>
                </div>
                <span className="text-lg">60-Day Satisfaction Warranty</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold text-sm">✓</span>
                </div>
                <span className="text-lg">Serving businesses nationwide</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-yellow text-navy hover:opacity-90 font-semibold text-lg px-8 py-6 w-full sm:w-auto"
              >
                Your business deserves better. Book a free consultation here.
              </Button>
              <p className="text-sm text-gray-400">
                🔒 Guaranteed Confidentiality. Always.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center h-full">
              <img
                src="/lovable-uploads/444b256c-f552-4b14-aecd-395d6963a3ae.png"
                alt="Robot Head Icon"
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
