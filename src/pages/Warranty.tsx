import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, CheckCircle, RefreshCw } from 'lucide-react';

const Warranty = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is covered under the 60-day satisfaction warranty?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you're not completely satisfied within 60 days of go-live, we'll work free until you are—or refund your monthly subscription for that period."
        }
      },
      {
        "@type": "Question", 
        "name": "Are there any exclusions to the warranty?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The warranty excludes third-party license costs and applies to new dashboard or managed-IT engagements signed this quarter."
        }
      },
      {
        "@type": "Question",
        "name": "How do I claim the warranty?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Contact our support team within 60 days of go-live with your concerns. We'll work with you to resolve all issues at no additional cost."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>60-Day Satisfaction Warranty | MBACIO Risk-Free IT Services</title>
        <meta name="description" content="MBACIO's 60-Day Satisfaction Warranty ensures you're completely satisfied with our IT services or we'll work free until you are. Risk-free guarantee for Bannockburn & Chicagoland businesses." />
        <meta name="keywords" content="IT service warranty, satisfaction guarantee, risk-free IT, MBACIO guarantee, Bannockburn IT services" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-yellow rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="w-12 h-12 text-navy" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              60-Day Satisfaction Warranty
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              We're so confident in our ability to deliver results that we guarantee your satisfaction—or we'll make it right at no cost to you.
            </p>
          </div>
        </div>
      </section>

      {/* Warranty Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-poppins font-bold text-navy mb-6">
                  Our Promise to You
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  If you're not completely satisfied within 60 days of go-live, we'll work free until you are—or refund your monthly subscription for that period.
                </p>
                <p className="text-gray-600 mb-8">
                  <strong>Exclusions:</strong> Third-party license costs. Applies to new dashboard or managed-IT engagements signed this quarter.
                </p>
                <a 
                  href="https://outlook.office.com/book/MBACIOITAssessments@mbacio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-gradient-yellow text-navy rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Start Risk-Free
                </a>
              </div>
              <div className="bg-gradient-to-br from-accent/10 to-navy/10 rounded-2xl p-8">
                <div className="text-center">
                  <Clock className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy mb-4">60 Days</h3>
                  <p className="text-gray-700">Full satisfaction guarantee period</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-poppins font-bold text-navy mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <Card className="bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-accent mr-3" />
                    What is covered under the 60-day satisfaction warranty?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our warranty covers all aspects of your engagement—from dashboard development to managed IT services. If any part of our service doesn't meet your expectations within 60 days of go-live, we'll work at no additional cost to resolve your concerns or provide a refund.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-accent mr-3" />
                    Are there any exclusions to the warranty?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The warranty excludes third-party license costs (such as Microsoft 365, QuickBooks, or other software licenses). The warranty applies to new dashboard or managed-IT engagements signed this quarter and covers our professional services and deliverables.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-accent mr-3" />
                    How do I claim the warranty?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Simply contact our support team within 60 days of go-live with your specific concerns. We'll immediately begin working to address all issues at no additional cost. Our goal is your complete satisfaction—we'll keep working until we achieve that.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-accent mr-3" />
                    What happens if you can't resolve my concerns?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    In the rare case that we cannot resolve your concerns to your satisfaction within the 60-day period, we'll refund your monthly subscription costs for that period. We're committed to ensuring you receive the value you expect from our services.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 text-accent mr-3" />
                    Does this apply to both dashboard and managed IT services?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes, our 60-day satisfaction warranty applies to both our dashboard solutions and managed IT service engagements. Whether you're implementing business intelligence dashboards or comprehensive IT management, we stand behind our work with this guarantee.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <RefreshCw className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-8">
              Ready to Experience Risk-Free IT?
            </h2>
            <p className="text-xl text-gray-200 mb-12">
              Start your project with complete confidence. Our 60-day satisfaction warranty ensures you get exactly what you need.
            </p>
            <a 
              href="https://outlook.office.com/book/MBACIOITAssessments@mbacio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-6 text-xl font-bold bg-gradient-yellow text-navy rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start Risk-Free Today
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Warranty;