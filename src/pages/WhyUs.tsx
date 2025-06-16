
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Shield, Zap, TrendingUp, Clock, Users, Award } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: "Smarter Setup",
    description: "Cloud-first infrastructure, tool integrations, no more duct-tape fixes. We build systems that scale with your business growth.",
    stat: "Zero downtime migrations"
  },
  {
    icon: Clock,
    title: "Faster Support",
    description: "24/7 SLA-backed response times to keep your business secure. Visibility on continuous improvement—insurance renewal? We make it a breeze.",
    stat: "< 15 min response time"
  },
  {
    icon: Users,
    title: "Global Expertise",
    description: "Experts around the globe who know your environment and work while you sleep! No call centers, just direct access to your dedicated team.",
    stat: "Follow-the-sun support"
  },
  {
    icon: TrendingUp,
    title: "Clear ROI",
    description: "Reduce IT overhead, cut manual work by up to 37%, predictable monthly pricing with measurable outcomes that impact your bottom line.",
    stat: "37% reduction in manual work"
  },
  {
    icon: Shield,
    title: "Predictable Costs",
    description: "No surprise bills or hidden fees. Transparent pricing models that let you budget confidently for your IT infrastructure.",
    stat: "Fixed monthly pricing"
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "60-day satisfaction guarantee backed by measurable outcomes. We stand behind every solution we deliver for your business.",
    stat: "60-day guarantee"
  }
];

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-slate-gray to-navy text-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-inter font-bold mb-8 drop-shadow-header">
              We Don't Just Fix IT. We Build Smarter Systems That Scale With You.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Transform your IT from a cost center into a competitive advantage with strategic partnerships 
              that deliver measurable results and predictable outcomes.
            </p>
            <Button size="lg" className="bg-electric-blue text-white font-semibold text-xl px-10 py-6 glow-hover">
              Book Your Free Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="group hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-2xl card-spacing shadow-lg hover:shadow-2xl border border-electric-blue/20 h-full">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-electric-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-inter font-bold text-navy">{benefit.title}</h3>
                          <span className="text-sm font-semibold text-electric-blue bg-electric-blue/10 px-3 py-1 rounded-full">
                            {benefit.stat}
                          </span>
                        </div>
                        <p className="text-slate-gray leading-relaxed">{benefit.description}</p>
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
      <section className="section-padding bg-navy text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-5xl font-inter font-bold mb-8 text-electric-blue">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Join hundreds of businesses that have streamlined operations, enhanced security, 
            and accelerated growth with MBACIO's proven approach.
          </p>
          <Button size="lg" className="bg-electric-blue text-white font-semibold text-xl px-10 py-6 glow-hover">
            Start Your Free Assessment Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyUs;
