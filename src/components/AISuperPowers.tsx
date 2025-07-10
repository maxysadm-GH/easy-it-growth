
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Zap,
  MessageSquare,
  Phone,
  ArrowRight
} from "lucide-react";

const superpowers = [
  {
    icon: MessageSquare,
    title: "Add AI & Automation to Your Website",
    subtitle: "Go from initial call to a fully integrated AI-powered chat and automation solution on your site in less than one week.",
    benefit: "Start capturing and qualifying leads automatically, 24/7.",
    timeline: "1 Week Implementation",
    cta: "See How It Works"
  },
  {
    icon: Zap,
    title: "Microsoft Copilot for Legal Research",
    subtitle: "We embed AI directly into your team's existing workflow (Word, Outlook, Teams) to slash research time and accelerate document drafting.",
    benefit: "Cut document preparation time by 60% while maintaining accuracy.",
    timeline: "3-Day Setup",
    cta: "Learn More"
  },
  {
    icon: Phone,
    title: "Intelligent Call Management",
    subtitle: "Transform your phone system into an intelligence-gathering asset with automated transcription, sentiment analysis, and meeting summaries.",
    benefit: "Never miss important client details or follow-up opportunities again.",
    timeline: "5-Day Integration",
    cta: "Get Started"
  }
];

const AISuperPowers = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-yellow text-navy font-bold px-6 py-2 text-lg">
            ⚡ Rapid Results with MBACIO
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
            Our AI Superpowers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get measurable results fast. These proven solutions deliver immediate impact 
            for Chicago's leading businesses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {superpowers.map((superpower, idx) => {
            const Icon = superpower.icon;
            return (
              <Card
                key={superpower.title}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-accent/20 h-full"
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-20 h-20 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-navy" />
                  </div>
                  
                  <Badge className="mb-4 bg-navy text-white font-bold self-center">
                    {superpower.timeline}
                  </Badge>
                  
                  <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                    {superpower.title}
                  </h3>
                  
                  <p className="text-gray-700 font-inter leading-relaxed mb-4 flex-grow">
                    {superpower.subtitle}
                  </p>
                  
                  <div className="bg-accent/5 rounded-lg p-4 mb-6">
                    <p className="text-navy font-semibold text-lg">
                      💡 {superpower.benefit}
                    </p>
                  </div>
                  
                  <Button 
                    className="bg-navy text-white hover:bg-deep-blue transition-all duration-300 hover:scale-105 group-hover:shadow-lg mt-auto"
                  >
                    {superpower.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to see what AI can do for your business?
          </p>
          <Button 
            className="bg-gradient-yellow text-navy font-bold text-xl px-12 py-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Book Your Free AI Assessment
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AISuperPowers;
