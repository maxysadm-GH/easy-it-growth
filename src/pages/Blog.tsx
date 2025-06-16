
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              MBACIO Blog
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Stay ahead with MBACIO insights on IT strategy, automation, AI, cybersecurity, and business growth.
            </p>
            <Button size="lg" className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300">
              Book Your Free Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200">
              <CardContent className="p-8">
                <div className="text-sm text-accent font-medium mb-4">Featured Post</div>
                <h2 className="text-2xl lg:text-3xl font-poppins font-bold text-navy mb-6">
                  How Smart SMBs Are Using AI to Streamline IT Operations
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  If you're still waiting on reports or solving the same support issues week after week—there's a better way. 
                  Learn how AI workflows can reclaim hours of lost productivity and transform your IT operations into a competitive advantage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span>Published: Coming Soon</span>
                  </div>
                  <Button className="bg-gradient-yellow text-navy font-bold px-6 py-3 hover:scale-105 transition-transform duration-300">
                    Book Your Free Assessment →
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-6 text-navy">
            More Insights Coming Soon
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're working on bringing you valuable insights on IT automation, cybersecurity, 
            and business growth strategies. Subscribe to our newsletter to be notified when new posts go live.
          </p>
          <Button size="lg" className="bg-accent text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300">
            Book Your Free Assessment
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
