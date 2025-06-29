
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import CTAButton from '@/components/ui/cta-button';
import { ArrowRight, Bot, TrendingUp, DollarSign, Shield, Cloud, Users, AlertTriangle } from 'lucide-react';

const tools = [
  {
    title: "AI Readiness Assessment",
    description: "Discover your business's AI potential and get a personalized roadmap for 2024. Based on current AI trends and adoption patterns.",
    icon: Bot,
    href: "/tools/ai-readiness",
    color: "bg-gradient-to-br from-purple-500 to-blue-600",
    badge: "🔥 Trending",
    estimatedTime: "3 minutes"
  },
  {
    title: "IT Staff Productivity Calculator",
    description: "Measure your IT team's efficiency and identify improvement opportunities with actionable insights.",
    icon: Users,
    href: "/tools/staff-productivity",
    color: "bg-gradient-to-br from-green-500 to-teal-600",
    badge: "Popular",
    estimatedTime: "2 minutes"
  },
  {
    title: "Downtime Cost Calculator",
    description: "Calculate the true cost of IT downtime on your business and understand the ROI of reliability investments.",
    icon: AlertTriangle,
    href: "/tools/downtime-cost",
    color: "bg-gradient-to-br from-red-500 to-orange-600",
    badge: "Essential",
    estimatedTime: "2 minutes"
  },
  {
    title: "Vendor Consolidation Savings",
    description: "See how much you could save by consolidating IT vendors and streamlining your technology stack.",
    icon: DollarSign,
    href: "/tools/vendor-consolidation",
    color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    badge: "ROI Focused",
    estimatedTime: "3 minutes"
  },
  {
    title: "Cloud Migration ROI",
    description: "Evaluate the financial benefits and timeline for migrating your systems to the cloud.",
    icon: Cloud,
    href: "/tools/cloud-migration",
    color: "bg-gradient-to-br from-cyan-500 to-blue-600",
    badge: "Strategic",
    estimatedTime: "4 minutes"
  },
  {
    title: "Cybersecurity Risk Assessment",
    description: "Identify potential security vulnerabilities and get recommendations to protect your business.",
    icon: Shield,
    href: "/tools/cyber-risk",
    color: "bg-gradient-to-br from-red-600 to-pink-600",
    badge: "Critical",
    estimatedTime: "5 minutes"
  }
];

const AssessmentTools = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              Free Assessment Tools
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Get instant insights into your business with our collection of free assessment tools. 
              Each tool provides personalized recommendations in just minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-accent/20">
                  <CardContent className="p-0">
                    <div className={`${tool.color} p-6 text-white rounded-t-lg relative overflow-hidden`}>
                      <div className="absolute top-2 right-2">
                        <span className="bg-white/20 text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                          {tool.badge}
                        </span>
                      </div>
                      <Icon className="w-12 h-12 mb-4" />
                      <h3 className="text-xl font-poppins font-bold mb-2">{tool.title}</h3>
                      <p className="text-sm opacity-90">{tool.estimatedTime}</p>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>
                      
                      <Link 
                        to={tool.href}
                        className="inline-flex items-center gap-2 bg-accent text-navy font-bold px-6 py-3 rounded-lg hover:bg-accent/90 transition-all duration-300 group-hover:scale-105"
                      >
                        Start Assessment
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8 text-accent">
            Ready for a Comprehensive Assessment?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Get a personalized consultation with our experts to discuss your specific needs and challenges.
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

export default AssessmentTools;
