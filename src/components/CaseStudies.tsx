
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';

const caseStudies = [
  {
    title: "Manufacturing Company Saves 40% on IT Operations Costs",
    company: "Midwest Food Manufacturer",
    industry: "Food & Beverage Manufacturing",
    challenge: "Legacy systems causing production delays and security vulnerabilities in Bannockburn IL region",
    solution: "Cloud migration, automation, and cybersecurity overhaul with 24/7 dashboard monitoring",
    results: [
      "40% reduction in IT operations costs",
      "99.9% uptime achieved across all systems",
      "Zero security incidents since implementation"
    ],
    icon: TrendingUp,
    gradient: "from-accent via-gradient-yellow-end to-pale-yellow",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=300&fit=crop&auto=format&q=80",
    alt: "Manufacturing facility with automated production line and IT dashboard monitoring"
  },
  {
    title: "Law Firm Achieves Complete Digital Transformation with ROI",
    company: "Chicago Legal Group", 
    industry: "Legal Services",
    challenge: "Manual documentation processes and inefficient discovery workflows slowing case preparation for Chicagoland clients",
    solution: "Automated documentation audit, discovery acceleration system, and encrypted client data platform with dashboard support",
    results: [
      "22% productivity increase in legal operations",
      "Diminished company risk through automation",
      "Secure client data encryption with 24/7 monitoring"
    ],
    icon: Shield,
    gradient: "from-navy via-deep-blue to-accent",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop&auto=format&q=80",
    alt: "Legal professionals working with digital documents and automated workflows in modern office"
  },
  {
    title: "Accounting Firm Automates 44% of Processes with Dashboard Insights",
    company: "Regional CPA Firm",
    industry: "Accounting & Professional Services",
    challenge: "Manual processes slowing growth and increasing client delivery times in competitive Bannockburn market",
    solution: "Process automation, reporting integrations, workflow optimization, and real-time dashboards for ROI tracking", 
    results: [
      "44% process automation across all operations",
      "57% faster client delivery and support",
      "Near-zero manual errors with dashboard monitoring"
    ],
    icon: Zap,
    gradient: "from-gradient-yellow-start via-accent to-gradient-yellow-end",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=300&fit=crop&auto=format&q=80",
    alt: "CPA professionals using automated accounting software and data dashboards for client reporting"
  }
];

const CaseStudies = () => {
  const handleViewCaseStudies = () => {
    window.location.href = '/case-studies';
  };

  const handleBookAssessment = () => {
    window.open('https://calendly.com/mbacio/free-assessment', '_blank');
  };

  const handleViewFullStory = (studySlug: string) => {
    window.location.href = `/case-studies/${studySlug}`;
  };

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
            Real Results for Real Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how we've helped businesses like yours streamline IT operations, enhance security, and drive ROI growth through smart automation and dashboard solutions. Serving Bannockburn & Chicagoland.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            const studySlug = study.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-accent/20 bg-white overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                </div>
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">{study.industry}</span>
                      <div className="text-xs text-accent font-semibold">{study.company}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-poppins font-bold text-navy group-hover:text-accent transition-colors duration-300">
                    {study.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <div className="mb-4">
                    <h4 className="font-semibold text-navy mb-2">Challenge:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-2">Solution:</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <span className="w-2 h-2 bg-accent rounded-full" />
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span>Industry: {study.industry.split(' ')[0]} • Timeline: 90 Days • Location: Bannockburn IL</span>
                    </div>
                    <Button 
                      onClick={() => handleViewFullStory(studySlug)}
                      variant="outline" 
                      className="border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-all duration-300 group/btn"
                    >
                      View Full Story
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            onClick={handleViewCaseStudies}
            size="lg" 
            className="bg-navy text-white hover:bg-deep-blue font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 mr-4"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            onClick={handleBookAssessment}
            size="lg" 
            className="bg-gradient-yellow text-navy font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
          >
            Book Your Free Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
