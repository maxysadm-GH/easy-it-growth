
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Clock, BarChart } from 'lucide-react';

const CaseStudies = () => {
  const handleBookAssessment = () => {
    window.open('https://outlook.office365.com/owa/calendar/MBACIOFreeAssessment@mbacio.com/bookings/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <title>IT Operations Case Studies | MBACIO Success Stories | Bannockburn & Chicagoland</title>
      <meta name="description" content="Real IT automation and dashboard results for manufacturers, law firms, and CPA practices. See how MBACIO delivered ROI and operational efficiency. Serving Bannockburn & Chicagoland." />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              Real IT Operations Results for Real Businesses
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              See how MBACIO helped clients cut IT operations costs, automate workflows, and streamline operations with dashboard insights. Serving Bannockburn & Chicagoland.
            </p>
            <Button 
              onClick={handleBookAssessment}
              size="lg" 
              className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
            >
              Book Your Free Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200">
              <CardContent className="p-8">
                <div className="text-sm text-accent font-medium mb-4">Client Success Story</div>
                <div className="text-sm text-gray-500 mb-6">Midwest Luxury Manufacturer - Bannockburn IL</div>
                
                <h2 className="text-2xl lg:text-3xl font-poppins font-bold text-navy mb-6">
                  70% Fewer IT Support Tickets in 90 Days — Without Hiring More Staff
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  When a Midwest chocolate manufacturer was drowning in tech tickets and losing track of inventory, 
                  MBACIO implemented automation, modernized MRP workflows, and enabled 24/7 monitoring with real-time dashboards.
                </p>

                {/* Results Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-navy mb-2">70%</div>
                    <div className="text-sm text-gray-600">Reduced daily IT support tickets</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg">
                    <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-navy mb-2">6+</div>
                    <div className="text-sm text-gray-600">Admin hours reclaimed per week through automation</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg">
                    <BarChart className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-navy mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Live dashboards across production & finance operations</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span>Industry: Manufacturing • Timeline: 90 Days • Location: Bannockburn IL</span>
                  </div>
                  <Button className="bg-gradient-yellow text-navy font-bold px-6 py-3 hover:scale-105 transition-transform duration-300">
                    View Full Story →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8 text-accent">
            Ready for Your IT Operations Success Story?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Let's discuss how we can transform your IT operations and deliver 
            measurable ROI for your business with automation and dashboard solutions.
          </p>
          <Button 
            onClick={handleBookAssessment}
            size="lg" 
            className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
          >
            Book Your Free Assessment
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
