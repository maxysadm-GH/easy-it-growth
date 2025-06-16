
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Clock, BarChart3 } from 'lucide-react';

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-slate-gray to-navy text-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-inter font-bold mb-8 drop-shadow-header">
              Real Results for Real Businesses
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              See how MBACIO helped clients cut IT costs, automate workflows, and streamline operations.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-500 border border-electric-blue/20 bg-white overflow-hidden">
              <CardHeader className="card-spacing">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-electric-blue/10 text-electric-blue rounded-full text-sm font-medium">
                    Manufacturing
                  </span>
                  <span className="text-slate-gray text-sm">Client Success Story</span>
                </div>
                <CardTitle className="text-2xl lg:text-3xl font-inter font-bold text-navy mb-4 group-hover:text-electric-blue transition-colors duration-300">
                  70% Fewer IT Tickets in 90 Days — Without Hiring More Staff
                </CardTitle>
                <p className="text-slate-gray text-sm">Midwest Luxury Manufacturer</p>
              </CardHeader>
              <CardContent className="card-spacing">
                <p className="text-slate-gray leading-relaxed mb-8 text-lg">
                  When a Midwest chocolate manufacturer was drowning in tech tickets and losing track of inventory, 
                  MBACIO implemented automation, modernized MRP workflows, and enabled 24/7 monitoring.
                </p>
                
                {/* Results Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-electric-blue/5 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-electric-blue mx-auto mb-3" />
                    <div className="text-2xl font-bold text-navy mb-1">70%</div>
                    <div className="text-sm text-slate-gray">Reduced daily tickets</div>
                  </div>
                  <div className="text-center p-6 bg-electric-blue/5 rounded-lg">
                    <Clock className="w-8 h-8 text-electric-blue mx-auto mb-3" />
                    <div className="text-2xl font-bold text-navy mb-1">6+</div>
                    <div className="text-sm text-slate-gray">Admin hours reclaimed per week</div>
                  </div>
                  <div className="text-center p-6 bg-electric-blue/5 rounded-lg">
                    <BarChart3 className="w-8 h-8 text-electric-blue mx-auto mb-3" />
                    <div className="text-2xl font-bold text-navy mb-1">24/7</div>
                    <div className="text-sm text-slate-gray">Live dashboards across production & finance</div>
                  </div>
                </div>
                
                <Button className="bg-navy text-white hover:bg-slate-gray font-semibold group/btn">
                  View Full Story
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-5xl font-inter font-bold mb-8 text-electric-blue">
            Ready for Similar Results?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve measurable improvements in your IT operations.
          </p>
          <Button size="lg" className="bg-electric-blue text-white font-semibold text-xl px-10 py-6 glow-hover">
            Book Your Free Assessment
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
