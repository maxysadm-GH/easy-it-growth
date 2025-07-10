
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  CheckCircle,
  Clock,
  TrendingUp,
  Users,
  Zap,
  Target,
  ArrowRight,
  Phone
} from "lucide-react";

const problems = [
  "Manually entering data across multiple systems",
  "Struggling with slow client intake processes", 
  "Worrying about human error in compliance paperwork",
  "Difficulty tracking project progress and deadlines"
];

const industryApplications = [
  {
    industry: "Law Firms",
    example: "Automate case file creation and schedule client depositions without manual intervention.",
    icon: "⚖️"
  },
  {
    industry: "Accounting Firms", 
    example: "Instantly extract data from thousands of receipts and invoices during tax season, eliminating manual entry.",
    icon: "📊"
  },
  {
    industry: "Food & Beverage",
    example: "Connect your inventory system to production-line sensors for real-time supply tracking and automated re-ordering.",
    icon: "🏭"
  }
];

const technologies = [
  "Microsoft Copilot for intelligent document processing",
  "Intelligent VoIP from Dialpad for automated transcription",
  "Custom-built AI agents for workflow orchestration",
  "ERP/MRP system integrations for seamless data flow"
];

const IntelligentWorkflowAutomation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy to-deep-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gradient-yellow text-navy font-bold px-6 py-2 text-lg">
              ⚡ Intelligent Workflow Automation for Chicago Businesses
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8">
              Unlock Peak Efficiency: Automate Your Workflows and Unleash Your Team's Potential
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed mb-12 text-white/90">
              Your team's talent is wasted on repetitive, manual tasks that drain your budget and slow down client service. What if you could automate the administrative burden and unleash your firm's true potential?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-yellow text-navy font-bold text-xl px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Schedule Your Automation Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy font-bold text-xl px-8 py-4 rounded-lg transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Call (773) 555-0123
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-navy mb-8 text-center">
              You're Likely Experiencing...
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              These common operational challenges that are silently draining your team's productivity and your bottom line:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {problems.map((problem, idx) => (
                <Card key={idx} className="border-l-4 border-l-accent bg-gray-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-accent font-bold">!</span>
                      </div>
                      <p className="text-gray-700 font-medium text-lg">{problem}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-8">
                Our Solution: A Fully Integrated Digital Workforce
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                MBACIO transforms your operations with intelligent workflow automation. We integrate AI-powered tools to eliminate manual data entry, streamline client intake, and automate repetitive tasks. This frees your team to focus on high-value work, improves accuracy, and accelerates project completion.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-4">Save 15+ Hours Weekly</h3>
                  <p className="text-gray-600">Eliminate repetitive tasks and let your team focus on revenue-generating activities.</p>
                </CardContent>
              </Card>

              <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-4">99.9% Accuracy</h3>
                  <p className="text-gray-600">Eliminate human error in data processing and compliance documentation.</p>
                </CardContent>
              </Card>

              <Card className="text-center bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-4">3x Faster Processing</h3>
                  <p className="text-gray-600">Accelerate project completion and improve client satisfaction ratings.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-6">
                Industry-Specific Applications
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                See how intelligent workflow automation transforms operations across Chicago's leading industries:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {industryApplications.map((app, idx) => (
                <Card key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-6">{app.icon}</div>
                    <h3 className="text-2xl font-poppins font-bold mb-4 text-gradient-yellow-end">
                      For {app.industry}
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      "{app.example}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-navy mb-6">
                The Technology We Master
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                We achieve this transformation by mastering and integrating best-in-class platforms:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {technologies.map((tech, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-lg">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-navy to-deep-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-6">
              Ready to Automate Your Way to Peak Efficiency?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Schedule your comprehensive automation audit and discover exactly how much time and money your firm could save with intelligent workflow automation.
            </p>
            <Button className="bg-gradient-yellow text-navy font-bold text-xl px-12 py-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Schedule Your Automation Audit
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            <p className="text-white/70 mt-6">
              🔒 100% Confidential Assessment • ⚡ Same-Day Response Guaranteed
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntelligentWorkflowAutomation;
