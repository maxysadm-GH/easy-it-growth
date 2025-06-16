
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, Brain, Zap, Shield, Smartphone, Code, Lock, Headphones } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: "Pre-Built Metrics",
    description: "Hundreds of ready-to-use KPIs—just drag & drop into your canvas.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&auto=format&q=80"
  },
  {
    icon: Brain,
    title: "Smart Alerts",
    description: "Automatic email or Slack notifications when key thresholds are crossed.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&auto=format&q=80"
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description: "View dashboards on-the-go with our iOS & Android apps.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop&auto=format&q=80"
  },
  {
    icon: Code,
    title: "Open API",
    description: "Push and pull data programmatically—fully extensible.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop&auto=format&q=80"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "256-bit encryption, SSO, and role-based permissions.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop&auto=format&q=80"
  },
  {
    icon: Headphones,
    title: "White-Glove Setup",
    description: "Our team gets you live in days, with zero code required.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&auto=format&q=80"
  }
];

const DashboardSolutions = () => {
  const handleScheduleDemo = () => {
    window.open('https://calendly.com/mbacio/dashboard-demo', '_blank');
  };

  const handleBookAssessment = () => {
    window.open('https://calendly.com/mbacio/free-assessment', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <title>MBACIO Dashboard Solutions – Real-Time Insights & Automation | Bannockburn & Chicagoland</title>
      <meta name="description" content="Turn raw data into actionable dashboards in minutes. MBACIO Dashboard Solutions offer pre-built metrics, real-time alerts, and 100+ integrations. Serving Bannockburn & Chicagoland." />
      <meta name="keywords" content="dashboard software, BI dashboards, real-time metrics, Bannockburn IL, MBACIO, business intelligence" />
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Bannockburn" />
      <meta name="geo.position" content="42.1998;-87.8074" />
      <meta name="ICBM" content="42.1998, -87.8074" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <img
              src="/lovable-uploads/9047d06d-8e00-44f9-a949-19b842c87735.png"
              alt="MBACIO Dashboard Logo"
              className="w-24 h-24 mx-auto mb-8"
            />
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              MBACIO Dashboard Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Bring all your data into one place, visualize trends instantly, and automate your reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleScheduleDemo}
                size="lg" 
                className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
              >
                Schedule a Dashboard Demo
              </Button>
              <Button 
                onClick={handleBookAssessment}
                size="lg" 
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
              >
                Book Free Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-navy mb-6">
              Don't Just Analyze Your Performance. Improve It.
            </h2>
            <div className="bg-accent/10 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-navy">Use your data to make better, faster decisions.</h3>
              <p className="text-lg text-gray-700 mb-4">
                Visualize business health, automate insights, and empower your team with smarter reporting.
                <br/>All white-labeled to your brand.
              </p>
            </div>
            <ul className="text-left max-w-xl mx-auto space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-accent rounded-full" />
                <span className="text-gray-700">Real-time dashboards & KPIs</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-accent rounded-full" />
                <span className="text-gray-700">Automated, branded reporting for your stakeholders</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 bg-accent rounded-full" />
                <span className="text-gray-700">Actionable alerts & recommendations — not just raw data</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-navy mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to transform your data into competitive advantage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-accent/20">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-accent/90 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-navy" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-poppins font-bold text-navy mb-3 group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Example Graph Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-navy mb-8">
              Real Results from Real Dashboards
            </h2>
            <div className="bg-gray-100 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-navy mb-4">Monthly Support Ticket Trend</h3>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-accent/10 rounded-lg">
                    <div className="text-3xl font-bold text-accent">150</div>
                    <div className="text-sm text-gray-600">Tickets/Day (Before)</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-yellow rounded-lg">
                    <div className="text-3xl font-bold text-navy">45</div>
                    <div className="text-sm text-gray-600">Tickets/Day (After)</div>
                  </div>
                  <div className="text-center p-4 bg-navy/10 rounded-lg">
                    <div className="text-3xl font-bold text-navy">70%</div>
                    <div className="text-sm text-gray-600">Reduction</div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg">
                  After implementing our dashboards, tickets dropped from 150/day to 45/day in 90 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-To-Action */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8 text-accent">
            Ready for Real-Time Insights?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Let's show you how our dashboard solutions can transform your business operations 
            and deliver measurable ROI for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleScheduleDemo}
              size="lg" 
              className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
            >
              Schedule Your Demo
            </Button>
            <Button 
              onClick={handleBookAssessment}
              size="lg" 
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
            >
              Book Free Assessment
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DashboardSolutions;
