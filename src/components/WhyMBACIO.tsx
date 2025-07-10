
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import BookingPopup from './BookingPopup';
import {
  Target,
  Award,
  Globe,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Agile & EOS Methodology",
    description: "Structured project delivery with clear milestones, quarterly reviews, and systematic business growth frameworks.",
    highlight: "Proven Framework"
  },
  {
    icon: Award,
    title: "Real-World Experience",
    description: "We use every tool we recommend in our own business, ensuring authentic experience and understanding of your challenges.",
    highlight: "Battle-Tested Solutions"
  },
  {
    icon: Globe,
    title: "Bilingual Excellence",
    description: "All our agents are fluent in English & Spanish, ensuring seamless communication with your diverse team and clients.",
    highlight: "100% Bilingual Team"
  }
];

const WhyMBACIO = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookAssessment = () => {
    console.log('📞 WhyMBACIO CTA clicked - opening booking popup');
    setIsBookingOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-navy text-white font-bold px-6 py-2 text-lg">
              🎯 Why Choose MBACIO
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              The MBACIO Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart? We don't just provide IT services - we bring unique strengths 
              that transform how your business operates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-2 border-accent/20"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-navy rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-gradient-yellow-end" />
                    </div>
                    <Badge className="mb-4 bg-gradient-yellow text-navy font-bold">
                      {feature.highlight}
                    </Badge>
                    <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 font-inter leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Mission and Vision Section - Fixed Alignment */}
          <div className="bg-navy rounded-2xl p-8 md:p-12 text-white max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-left">
                <h3 className="text-3xl font-poppins font-bold text-gradient-yellow-end mb-6">
                  Our Mission
                </h3>
                <p className="text-lg leading-relaxed text-white/90">
                  At MBACIO, we are dedicated to delivering affordable, high-touch solutions that enable our clients to streamline systems, protect their data, and drive their business forward. Leave the demanding back-end functions and infrastructure in our capable hands, so you can rest easy at night.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-3xl font-poppins font-bold text-gradient-yellow-end mb-6">
                  Our Vision
                </h3>
                <p className="text-lg leading-relaxed text-white/90">
                  To provide innovative and efficient solutions for businesses seeking to enhance their performance and profitability. We offer a one-stop destination for all your needs, helping you navigate challenges and drive your business to new heights.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                onClick={handleBookAssessment}
                className="bg-gradient-yellow text-navy font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Partner With Us for Strategic Growth
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Popup */}
      <BookingPopup 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
};

export default WhyMBACIO;
