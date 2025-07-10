
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTAButton from '@/components/ui/cta-button';
import { Calculator, Shield, TrendingUp, Zap, Clock, AlertTriangle, Cog, BarChart } from 'lucide-react';

const tools = [
  {
    icon: Zap,
    title: "AI Readiness Assessment",
    description: "Evaluate your organization's readiness for AI implementation and discover automation opportunities.",
    link: "/ai-readiness-assessment",
    duration: "5 minutes",
    benefit: "Custom AI roadmap"
  },
  {
    icon: TrendingUp,
    title: "IT Staff Productivity Calculator",
    description: "Calculate how much time and money you could save by optimizing your IT team's efficiency.",
    link: "/tools/staff-productivity",
    duration: "3 minutes",
    benefit: "ROI projections"
  },
  {
    icon: AlertTriangle,
    title: "Downtime Cost Calculator",
    description: "Discover the true cost of system downtime and the value of reliable infrastructure.",
    link: "/tools/downtime-cost",
    duration: "4 minutes",
    benefit: "Risk assessment"
  },
  {
    icon: Calculator,
    title: "Automation ROI Calculator",
    description: "Calculate the return on investment for workflow automation in your specific industry.",
    link: "/tools/automation-roi",
    duration: "6 minutes",
    benefit: "Business case"
  },
  {
    icon: Shield,
    title: "Risk Assessment Tool",
    description: "Identify cybersecurity vulnerabilities and compliance gaps in your current setup.",
    link: "/tools/assessment-risk",
    duration: "7 minutes",
    benefit: "Security roadmap"
  },
  {
    icon: Cog,
    title: "Automation Assessment",
    description: "Discover which business processes are prime candidates for automation.",
    link: "/tools/assessment-automation",
    duration: "5 minutes",
    benefit: "Automation priorities"
  },
  {
    icon: BarChart,
    title: "Manufacturing Analytics Assessment",
    description: "Evaluate your production data visibility and identify improvement opportunities.",
    link: "/solutions/manufacturing-analytics",
    duration: "8 minutes",
    benefit: "Efficiency gains"
  },
  {
    icon: Clock,
    title: "Vendor Consolidation Assessment",
    description: "Calculate potential savings from consolidating your IT vendors and services.",
    link: "/vendor-consolidation",
    duration: "4 minutes",
    benefit: "Cost savings"
  }
];

const AssessmentTools = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              Free Business Assessment Tools
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Get instant insights into your business operations with our collection of free assessment tools. 
              Discover opportunities for automation, efficiency gains, and cost savings.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <p className="text-lg font-semibold">
                ✨ All tools provide instant results and actionable recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-navy mb-6">
              Choose Your Assessment Tool
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each tool is designed to provide specific insights for your business. 
              Take multiple assessments to get a comprehensive view of your optimization opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div key={index} className="group hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-accent/20 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-navy" />
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {tool.duration}
                      </span>
                      <span className="text-sm font-bold text-navy bg-navy/10 px-3 py-1 rounded-full">
                        {tool.benefit}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-poppins font-bold text-navy mb-4 text-center">
                      {tool.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow text-center">
                      {tool.description}
                    </p>
                    
                    <a 
                      href={tool.link}
                      className="w-full bg-navy text-white hover:bg-deep-blue transition-all duration-300 hover:scale-105 font-bold py-3 px-6 rounded-lg text-center inline-block"
                    >
                      Start Assessment →
                    </a>
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
            Ready for a Comprehensive Business Review?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            While our assessment tools provide valuable insights, nothing beats a personalized consultation. 
            Schedule a free assessment to get a complete analysis of your business optimization opportunities.
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
