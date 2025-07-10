
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface CaseStudyProps {
  client: string;
  challenge: string;
  breakingPoint: string;
  solution: string;
  results: string[];
  industry?: string;
  timeline?: string;
  ctaText?: string;
  ctaLink?: string;
}

const CaseStudyTemplate = ({
  client,
  challenge,
  breakingPoint,
  solution,
  results,
  industry = "Chicago Business",
  timeline = "3 months",
  ctaText = "Get Similar Results",
  ctaLink = "/book-assessment"
}: CaseStudyProps) => {
  return (
    <Card className="max-w-4xl mx-auto bg-white shadow-xl border border-gray-200 overflow-hidden">
      <CardContent className="p-0">
        {/* Header */}
        <div className="bg-gradient-to-r from-navy to-deep-blue text-white p-8">
          <div className="flex items-center gap-4 mb-4">
            <Badge className="bg-gradient-yellow text-navy font-bold px-4 py-2">
              Success Story
            </Badge>
            <Badge variant="outline" className="border-white text-white font-medium">
              {industry}
            </Badge>
          </div>
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-4">
            {client}
          </h2>
          <p className="text-xl text-white/90">
            How we transformed their operations in {timeline}
          </p>
        </div>

        <div className="p-8 space-y-8">
          {/* Challenge Section */}
          <div className="border-l-4 border-l-accent pl-6">
            <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
              The Challenge
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {challenge}
            </p>
          </div>

          {/* Breaking Point */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-2xl font-poppins font-bold text-red-800 mb-4">
              The Breaking Point
            </h3>
            <p className="text-red-700 text-lg leading-relaxed">
              {breakingPoint}
            </p>
          </div>

          {/* Solution */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
              Our Solution
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {solution}
            </p>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
            <h3 className="text-2xl font-poppins font-bold text-green-800 mb-6">
              The Measurable Results
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {results.map((result, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-green-700 font-medium text-lg">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8 border-t border-gray-200">
            <h4 className="text-2xl font-poppins font-bold text-navy mb-4">
              Ready for Similar Results?
            </h4>
            <p className="text-gray-600 mb-6 text-lg">
              Schedule your free assessment and discover how we can transform your operations.
            </p>
            <Button 
              className="bg-gradient-yellow text-navy font-bold text-xl px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = ctaLink}
            >
              {ctaText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseStudyTemplate;
