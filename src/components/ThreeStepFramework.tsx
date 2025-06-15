import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Settings, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const dataLine = [
  { step: 'Assessment', value: 1 },
  { step: 'Stabilization', value: 2 },
  { step: 'Operational Efficiency', value: 3 }
];

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Assessment",
    description: "Comprehensive audit of your current IT infrastructure, identifying vulnerabilities, inefficiencies, and opportunities for improvement.",
    deliverables: ["Security Risk Analysis", "Cost Optimization Report", "Automation Opportunities"]
  },
  {
    number: "02", 
    icon: Settings,
    title: "Stabilization",
    description: "Immediate implementation of critical fixes, security updates, and foundational improvements to create a stable IT environment.",
    deliverables: ["Security Hardening", "System Optimization", "Backup & Recovery Setup"]
  },
  {
    number: "03",
    icon: Calendar,
    title: "Operational Efficiency",
    description: "Deploy automation, AI-powered monitoring, and proactive maintenance systems for long-term operational excellence.",
    deliverables: ["Automated Monitoring", "AI-Powered Alerts", "Ongoing Optimization"]
  }
];

const ThreeStepFramework = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-navy via-deep-blue to-charcoal text-white relative" id="framework">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-yellow text-navy px-6 py-2 rounded-full font-semibold mb-6">
            ⚡ HIGHLIGHTED FRAMEWORK
          </div>
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-white mb-6">
            Our 3-Step Framework
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            <span className="font-bold text-accent">Guaranteed ROI in 6 weeks</span> through our proven methodology that transforms your IT from a cost center to a competitive advantage.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-8 mb-16 relative">
          {/* Chartwell-style chart improved - less white, more accent */}
          <ResponsiveContainer width="100%" height={110} className="!w-full lg:!w-4/5 xl:!w-2/3">
            <LineChart
              data={dataLine}
              margin={{ top: 30, right: 48, left: 48, bottom: 0 }}
            >
              <XAxis dataKey="step" interval={0} tick={{ fill: "#FACF39", fontWeight: 700, fontSize: 18 }} axisLine={{ stroke: "#FACF39" }} tickLine={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#FACF39"
                strokeWidth={7}
                dot={{ strokeWidth: 6, r: 10, fill: '#28344b', stroke: '#FACF39' }}
                isAnimationActive
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 text-white">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative group shadow-lg border-none bg-gradient-to-tr from-navy/70 via-deep-blue/60 to-charcoal/80 hover:bg-white/10 transition duration-300 backdrop-blur-md"
            >
              <CardContent className="p-8">
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-gradient-yellow rounded-full flex items-center justify-center text-navy font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="mt-8 mb-6">
                  <div className="w-16 h-16 bg-navy/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-navy" />
                  </div>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-accent mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {step.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent text-sm uppercase tracking-wide">Key Deliverables:</h4>
                  <ul className="ml-2 space-y-1">
                    {step.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full inline-block" />
                        <span className="text-sm text-gray-100">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Ready to Transform Your IT Operations? Section */}
        <div className="text-center bg-charcoal/80 mt-20 p-6 rounded-2xl flex flex-col items-center shadow-lg">
          <span className="inline-block bg-[#bdbdbd] px-7 py-2 font-poppins text-2xl font-bold text-gray-900 rounded shadow mb-2" style={{ background: "#bdbdbd" }}>
            Ready to Transform
            <span style={{ color: '#FACF39'}}>•</span>
            Your IT Operations?
          </span>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepFramework;
