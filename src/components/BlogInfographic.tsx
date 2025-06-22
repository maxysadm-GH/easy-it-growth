
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, AlertTriangle, Users, Clock, DollarSign, TrendingUp } from 'lucide-react';

interface BlogInfographicProps {
  type: 'timeline' | 'process' | 'comparison';
}

const BlogInfographic = ({ type }: BlogInfographicProps) => {
  if (type === 'timeline') {
    const timelineSteps = [
      { icon: AlertTriangle, title: "Initial Breach", desc: "Hackers gain access", color: "text-red-500", bg: "bg-red-50" },
      { icon: Users, title: "Spread & Escalation", desc: "Systems compromised", color: "text-orange-500", bg: "bg-orange-50" },
      { icon: DollarSign, title: "Financial Impact", desc: "Operations halted", color: "text-yellow-500", bg: "bg-yellow-50" },
      { icon: TrendingUp, title: "Recovery & Prevention", desc: "Lessons learned", color: "text-green-500", bg: "bg-green-50" }
    ];

    return (
      <Card className="border border-accent/20 shadow-lg">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-poppins font-bold text-navy mb-3">
              From Breach to Recovery: The Journey
            </h3>
            <p className="text-muted-foreground font-inter">
              Understanding the critical phases of a cybersecurity incident
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-red-500 via-yellow-500 to-green-500"></div>
            
            <div className="space-y-12">
              {timelineSteps.map((step, index) => (
                <div key={index} className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <Card className={`${step.bg} border-l-4 border-l-accent`}>
                      <CardContent className="p-4">
                        <h4 className="font-poppins font-bold text-navy mb-2">{step.title}</h4>
                        <p className="text-sm text-gray-600 font-inter">{step.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className={`w-12 h-12 rounded-full ${step.bg} border-2 border-white shadow-lg flex items-center justify-center z-10 relative`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return null;
};

export default BlogInfographic;
