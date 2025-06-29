
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTAButton from '@/components/ui/cta-button';
import { Shield, Zap, Users, Award, TrendingUp, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: "Smarter Setup",
    description: "Cloud-first infrastructure and seamless tool integrations. No more duct-tape fixes or patchwork solutions.",
    stat: "Future-proof architecture"
  },
  {
    icon: Clock,
    title: "Faster Support",
    description: "24/7 SLA-backed response times to keep your business secure. Experts around the globe who know your environment.",
    stat: "Global expert coverage"
  },
  {
    icon: TrendingUp,
    title: "Clear ROI",
    description: "Reduce IT overhead, cut manual work by up to 37%, and enjoy predictable monthly pricing with measurable outcomes.",
    stat: "37% less manual work"
  },
  {
    icon: Shield,
    title: "Security-First Mindset",
    description: "Every solution is built with enterprise-grade security from day one. Compliance isn't an afterthought—it's our foundation.",
    stat: "Zero security incidents"
  },
  {
    icon: Users,
    title: "White-Glove Service",
    description: "Your dedicated team becomes an extension of your business. No call centers, no tickets—just direct access to experts.",
    stat: "Dedicated team per client"
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Deep expertise in manufacturing, legal, accounting, and healthcare. We understand your industry's unique challenges.",
    stat: "15+ years experience"
  }
];

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              We Don't Just Fix IT. We Build Smarter Systems That Scale With You.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Discover how MBACIO helps growing businesses modernize IT operations 
              with smarter systems, faster support, and measurable ROI.
            </p>
            <CTAButton 
              ctaId="book-assessment"
              variant="yellow"
              size="lg"
              className="text-xl px-10 py-6"
              forcePopup={true}
            />
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="group hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-accent/20 h-full">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-yellow rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-navy" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-poppins font-bold text-navy">{benefit.title}</h3>
                          <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                            {benefit.stat}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8 text-accent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Join hundreds of businesses that have streamlined operations, enhanced security, 
            and accelerated growth with MBACIO's proven approach.
          </p>
          <CTAButton 
            ctaId="book-assessment"
            variant="yellow"
            size="lg"
            className="text-xl px-10 py-6"
            forcePopup={true}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyUs;
