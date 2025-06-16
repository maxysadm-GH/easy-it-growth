
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const tools = [
  {
    iconClass: "icon-automation",
    title: "IT Automation ROI Calculator",
    description: "Calculate the return on investment for automating your business processes. See exactly how much time and money you'll save.",
    path: "/tools/automation-roi",
    status: "available"
  },
  {
    iconClass: "icon-security",
    title: "Cybersecurity Risk Assessment",
    description: "Get your security risk score with our comprehensive assessment. Identify vulnerabilities before they become problems.",
    path: "/tools/cyber-risk",
    status: "coming-soon"
  },
  {
    iconClass: "icon-downtime",
    title: "IT Downtime Cost Calculator",
    description: "Calculate the true cost of IT downtime for your business. Understand the financial impact of system outages.",
    path: "/tools/downtime-cost",
    status: "available"
  },
  {
    iconClass: "icon-vendor",
    title: "Vendor Consolidation Savings",
    description: "Discover how much you could save by consolidating multiple IT vendors.",
    path: "/tools/vendor-consolidation",
    status: "available"
  },
  {
    iconClass: "icon-cloud",
    title: "Cloud Migration ROI",
    description: "Evaluate the return on investment for migrating to the cloud.",
    path: "/tools/cloud-migration",
    status: "available"
  },
  {
    iconClass: "icon-compliance",
    title: "Compliance Cost Calculator",
    description: "Estimate the cost of meeting IT compliance requirements.",
    path: "/tools/compliance-cost",
    status: "coming-soon"
  },
  {
    iconClass: "icon-productivity",
    title: "IT Staff Productivity Calculator",
    description: "Measure and optimize your IT team's productivity metrics.",
    path: "/tools/staff-productivity",
    status: "available"
  }
];

const AssessmentTools = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Professional Icon Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .professional-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: linear-gradient(135deg, #facf39, #f9c307);
          color: #112d4e;
          font-size: 1.8rem;
          font-weight: bold;
          position: relative;
        }

        .icon-automation::before {
          content: "AUTO";
          font-size: 0.7rem;
          font-weight: 700;
        }

        .icon-security {
          background: linear-gradient(135deg, #facf39, #f9c307);
        }
        .icon-security::before {
          content: "";
          width: 24px;
          height: 28px;
          background: #112d4e;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        .icon-downtime::before {
          content: "!";
          font-size: 2rem;
          font-weight: 900;
        }

        .icon-vendor::before {
          content: "VENDOR";
          font-size: 0.6rem;
          font-weight: 700;
        }

        .icon-cloud {
          position: relative;
        }
        .icon-cloud::before {
          content: "";
          width: 30px;
          height: 18px;
          background: #112d4e;
          border-radius: 18px;
          position: absolute;
        }
        .icon-cloud::after {
          content: "";
          width: 20px;
          height: 12px;
          background: #112d4e;
          border-radius: 12px;
          position: absolute;
          top: 18px;
          left: 25px;
        }

        .icon-productivity {
          background: linear-gradient(135deg, #facf39, #f9c307);
        }
        .icon-productivity::before {
          content: "";
          width: 6px;
          height: 20px;
          background: #112d4e;
          box-shadow: 8px 0 0 #112d4e, 16px 0 0 #112d4e;
          transform: translateY(2px);
        }
        .icon-productivity::after {
          content: "";
          width: 6px;
          height: 15px;
          background: #112d4e;
          position: absolute;
          left: 23px;
          top: 27px;
          box-shadow: 16px 0 0 #112d4e;
        }

        .icon-compliance::before {
          content: "✓";
          font-size: 2rem;
          font-weight: 900;
        }
        `
      }} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy to-deep-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8">
              Free IT Assessment Tools
            </h1>
            <p className="text-xl lg:text-2xl mb-12 leading-relaxed opacity-90">
              Get instant insights into your IT operations with our professional assessment tools designed specifically for manufacturers and professional services.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tools.map((tool, idx) => (
              <Card
                key={tool.title}
                className="group bg-white border border-gray-200 hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className={`professional-icon ${tool.iconClass}`}></div>
                  <h3 className="text-xl font-poppins font-bold text-navy mb-4">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  {tool.status === "available" ? (
                    <Link to={tool.path}>
                      <Button className="w-full bg-accent text-navy hover:bg-accent/90 font-bold">
                        Try Tool
                      </Button>
                    </Link>
                  ) : (
                    <Button disabled className="w-full">
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8">
            Ready to Transform Your IT Operations?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Get personalized recommendations based on your assessment results.
          </p>
          <Button size="lg" className="bg-accent text-navy hover:bg-accent/90 font-bold text-xl px-10 py-6">
            Book Your Free Assessment
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AssessmentTools;
