
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Globe,
  Target,
  Award
} from "lucide-react";

const superpowers = [
  {
    icon: Globe,
    title: "Bilingual Excellence",
    description: "All our agents are fluent in English & Spanish, ensuring seamless communication with your diverse team.",
    highlight: "100% Bilingual Team"
  },
  {
    icon: Target,
    title: "Agile & EOS Methodology",
    description: "Structured project delivery with clear milestones, quarterly reviews, and systematic business growth.",
    highlight: "Proven Framework"
  },
  {
    icon: Award,
    title: "Real-World Experience",
    description: "We use every tool we recommend, ensuring authentic experience and understanding of your challenges.",
    highlight: "Battle-Tested Solutions"
  }
];

const SuperpowersSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
            The MBACIO Superpowers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What makes us different? We don't just provide IT services - we bring unique strengths 
            that transform how your business operates.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {superpowers.map((superpower, idx) => {
            const Icon = superpower.icon;
            return (
              <Card
                key={superpower.title}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-accent/20"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-navy rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-gradient-yellow-end" />
                  </div>
                  <Badge className="mb-4 bg-navy text-white font-bold">
                    {superpower.highlight}
                  </Badge>
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                    {superpower.title}
                  </h3>
                  <p className="text-gray-700 font-inter leading-relaxed">
                    {superpower.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuperpowersSection;
