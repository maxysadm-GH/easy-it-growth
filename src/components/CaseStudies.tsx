
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';

const caseStudies = [
  {
    title: "Manufacturing Company Saves 40% on IT Costs",
    company: "Midwest Food Manufacturer",
    industry: "Food & Beverage",
    challenge: "Legacy systems causing production delays and security vulnerabilities",
    solution: "Cloud migration, automation, and cybersecurity overhaul",
    results: [
      "40% reduction in IT costs",
      "99.9% uptime achieved",
      "Zero security incidents"
    ],
    icon: TrendingUp,
    gradient: "from-accent via-gradient-yellow-end to-pale-yellow",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=300&fit=crop&auto=format&q=80"
  },
  {
    title: "Law Firm Achieves Complete Digital Transformation",
    company: "Chicago Legal Group", 
    industry: "Legal Services",
    challenge: "Manual documentation processes and inefficient discovery workflows slowing case preparation",
    solution: "Automated documentation audit, discovery acceleration system, and encrypted client data platform",
    results: [
      "22% productivity increase",
      "Diminished company risk",
      "Secure client data encryption"
    ],
    icon: Shield,
    gradient: "from-navy via-deep-blue to-accent",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop&auto=format&q=80"
  },
  {
    title: "Accounting Firm Automates 44% of Processes",
    company: "Regional CPA Firm",
    industry: "Accounting",
    challenge: "Manual processes slowing growth and increasing client delivery times",
    solution: "Process automation, reporting integrations, and workflow optimization", 
    results: [
      "44% process automation",
      "57% faster client delivery",
      "Near-zero manual errors"
    ],
    icon: Zap,
    gradient: "from-gradient-yellow-start via-accent to-gradient-yellow-end",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop&auto=format&q=80"
  }
];

const CaseStudies = () => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
            Real Results for Real Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how we've helped businesses like yours streamline operations, enhance security, and drive growth through smart IT solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-accent/20 bg-white overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
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

                  <Button variant="outline" className="w-full border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-all duration-300 group/btn">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-navy text-white hover:bg-deep-blue font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
            View All Case Studies
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
