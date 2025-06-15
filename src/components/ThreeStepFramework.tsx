import React from "react";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Settings, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useRef } from 'react';

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

// Simple custom intersection/animation hook
const useInView = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = React.useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref]);
  return [ref, isInView] as const;
};

const ThreeStepFramework = () => {
  const [stepRef, stepsInView] = useInView();

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
          {/* Chart */}
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
        <div ref={stepRef} className="grid lg:grid-cols-3 gap-8 text-white">
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`
                relative group shadow-lg border-none 
                bg-gradient-to-br from-navy/80 via-deep-blue/80 to-charcoal/80 
                transition duration-300 backdrop-blur-md
                ${
                  stepsInView
                    ? `animate-fade-in`
                    : 'opacity-0 translate-y-8'
                }
                `}
              style={{
                animationDelay: stepsInView ? `${index * 180 + 50}ms` : '0ms',
                animationFillMode: 'both',
              }}
            >
              <CardContent className="p-8">
                <div className="absolute -top-6 left-8">
                  <div className="w-12 h-12 bg-gradient-yellow rounded-full flex items-center justify-center text-navy font-bold text-lg border-4 border-white/10">
                    {step.number}
                  </div>
                </div>
                <div className="mt-8 mb-6">
                  <div className="w-16 h-16 bg-navy/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-poppins font-bold text-accent mb-4">
                  {step.title}
                </h3>
                <p className="text-pale-yellow mb-6 leading-relaxed">
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
        {/* New Contact CTA (replaces yellow dot banner) */}
        <div className="text-center mt-20">
          <Button 
            size="lg"
            className="bg-gradient-yellow text-navy font-bold text-2xl px-12 py-6 shadow-lg hover:scale-105 transition-transform"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Schedule Your Free IT Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepFramework;
