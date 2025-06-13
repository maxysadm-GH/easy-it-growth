import { Button } from '@/components/ui/button';
import { Headphones } from 'lucide-react';

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
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-yellow rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-accent">Quick Assessment</h3>
                <p className="text-gray-300">Get your IT Risk Score in 2 minutes</p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Name *</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Business Email *</label>
                  <input 
                    type="email" 
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@company.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Size</label>
                  <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-accent">
                    <option value="" className="text-gray-700">Select size</option>
                    <option value="1-10" className="text-gray-700">1-10 employees</option>
                    <option value="11-50" className="text-gray-700">11-50 employees</option>
                    <option value="51-200" className="text-gray-700">51-200 employees</option>
                    <option value="200+" className="text-gray-700">200+ employees</option>
                  </select>
                </div>

                <Button className="w-full bg-accent text-navy hover:opacity-90 font-semibold py-3">
                  Get My IT Risk Score
                </Button>
                
                <p className="text-xs text-gray-400 text-center">
                  This is an informative estimate, not a formal audit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
