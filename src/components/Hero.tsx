
import { Button } from '@/components/ui/button';
import { ArrowDown, Headphones } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-navy mb-6 leading-tight">
              Making I.T. 
              <span className="text-transparent bg-gradient-yellow bg-clip-text"> Easy</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              From food & beverage manufacturers to law and accounting firms — we simplify, automate, and modernize your IT so your team can focus on results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-yellow text-navy hover:opacity-90 font-semibold text-lg px-8 py-6"
              >
                Your business deserves better. Book a free consultation here.
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-navy text-navy hover:bg-navy hover:text-white font-semibold text-lg px-8 py-6"
              >
                Learn Our Process
              </Button>
            </div>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Guaranteed ROI in 6 weeks</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Trusted by 100+ businesses</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="bg-gradient-to-br from-navy to-deep-blue rounded-2xl p-8 lg:p-12 shadow-2xl">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-yellow rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                    <Headphones className="w-16 h-16 text-navy" />
                  </div>
                  <h3 className="text-white font-poppins font-semibold text-xl mb-4">
                    AI-Powered IT Support
                  </h3>
                  <p className="text-gray-300">
                    24/7 monitoring, proactive alerts, and automated solutions that keep your business running smoothly.
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pale-yellow rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-16">
          <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
