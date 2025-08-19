import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, Calculator, TrendingUp, Mail } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string, company: string) => void;
  calculationResult: any;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose, onSubmit, calculationResult }) => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'lead_capture', {
        tool: 'automation_roi',
        value: calculationResult.annualSavings
      });
    }
    
    await onSubmit(email, company);
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-yellow rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="w-8 h-8 text-navy" />
          </div>
          <CardTitle className="text-2xl font-poppins font-bold text-navy">
            Get Your Detailed ROI Report
          </CardTitle>
          <p className="text-gray-600">
            Unlock your personalized automation roadmap and savings breakdown
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Business Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.name@company.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Your Company Name"
                required
              />
            </div>
            
            <div className="bg-accent/10 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-700 mb-2">Your Potential Annual Savings:</p>
              <p className="text-3xl font-bold text-accent">${calculationResult.annualSavings?.toLocaleString()}</p>
            </div>

            <div className="flex gap-3">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting} className="flex-1 bg-gradient-yellow text-navy font-bold">
                {isSubmitting ? 'Generating...' : 'Get My Report'}
              </Button>
            </div>
          </form>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            🔒 We respect your privacy. No spam, unsubscribe anytime.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

interface AssessmentResultsProps {
  results: any;
  onGetDetailedReport: () => void;
}

const AssessmentResults: React.FC<AssessmentResultsProps> = ({ results, onGetDetailedReport }) => {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">Annual Savings</p>
            <p className="text-2xl font-bold text-accent">${results.annualSavings?.toLocaleString()}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-navy/20 to-navy/5 border-navy/30">
          <CardContent className="p-6 text-center">
            <Calculator className="w-8 h-8 text-navy mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">ROI</p>
            <p className="text-2xl font-bold text-navy">{results.roi}%</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-green-500/30">
          <CardContent className="p-6 text-center">
            <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">Payback Period</p>
            <p className="text-2xl font-bold text-green-600">{results.paybackMonths} months</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-poppins font-bold text-navy">Quick Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {results.recommendations?.map((rec: string, index: number) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">{rec}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA for Detailed Report */}
      <Card className="bg-gradient-to-br from-navy to-deep-blue text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-poppins font-bold mb-4">Want the Complete Analysis?</h3>
          <p className="mb-6 opacity-90">
            Get a detailed 15-page report with implementation roadmap, vendor comparisons, and exact cost breakdowns.
          </p>
          <Button
            onClick={onGetDetailedReport}
            size="lg"
            className="bg-gradient-yellow text-navy font-bold hover:scale-105 transition-transform duration-300"
          >
            Get Detailed ROI Report (Free)
          </Button>
          <p className="text-xs opacity-75 mt-3">
            ✨ Includes custom automation roadmap • No obligation
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export { LeadCaptureModal, AssessmentResults };