
import { Card, CardContent } from '@/components/ui/card';
import CTAButton from '@/components/ui/cta-button';

const WhyMBACIO = () => {
  const benefits = [
    {
      title: "Your Strategic IT Partners",
      description: "We go beyond IT—we're your trusted allies in business development, crafting milestone-driven strategies for sustainable growth.",
      metric: "Strategic Partnership"
    },
    {
      title: "Vendor Consolidation", 
      description: "Simplify your IT ecosystem with fewer vendors, clearer accountability, and streamlined support—all aligned with your business objectives.",
      metric: "Single Point of Contact"
    },
    {
      title: "Automation & AI Solutions",
      description: "Deploy intelligent automation that handles routine tasks, freeing your team for strategic work that drives business forward.",
      metric: "80% Less Manual Work"
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Safeguard your business against cyber threats and stay compliant with industry regulations using cutting-edge technologies.",
      metric: "24/7 Protection"
    },
    {
      title: "Proactive Problem Resolution",
      description: "We detect and resolve IT issues before they impact your operations—so you can rest easy while we handle the demanding back-end functions.",
      metric: "99.9% Uptime"
    },
    {
      title: "60-Day Satisfaction Warranty",
      description: "Complete peace of mind with our comprehensive warranty—we stand behind every solution we deliver.",
      metric: "Guaranteed Results"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-navy via-deep-blue to-navy text-white" id="why-mbacio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-6">
            What Makes Us Unique
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Your Strategic Partners for Business Growth Across Finance, Real Estate, and Manufacturing! 
            We craft tailored solutions for networking, hardware, and software, aligning technology seamlessly with your business objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-4 text-accent">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-lg font-poppins font-bold text-white">
                  {benefit.metric}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-poppins font-bold mb-4 text-accent">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                At MBACIO, we are dedicated to delivering affordable, high-touch solutions that enable our clients to streamline systems, protect their data, and drive their business forward. Leave the demanding back-end functions and infrastructure in our capable hands, so you can rest easy at night.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-poppins font-bold mb-4 text-accent">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To provide innovative and efficient solutions for businesses seeking to enhance their performance and profitability. We offer a one-stop destination for all your needs, helping you navigate challenges and drive your business to new heights.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <CTAButton 
            ctaId="book-assessment"
            variant="yellow"
            size="lg"
            className="px-8 py-6 text-lg"
            customConfig={{
              text: "Partner With Us for Strategic Growth"
            }}
            forcePopup={true}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyMBACIO;
