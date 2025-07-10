
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Copy, Mail } from 'lucide-react';
import { useState } from 'react';

const TestimonialEmailTemplate = () => {
  const [copied, setCopied] = useState(false);

  const emailSubject = "A quick question about your experience";
  
  const emailBody = `Dear [Client Name],

We hope this email finds you well.

We're always striving to improve our services and would be grateful for your feedback. Would you be willing to answer a few quick questions about your experience working with MBACIO? Your insights are invaluable to us.

1. What was the single biggest operational challenge you faced before we worked together?

2. What has been the most significant positive impact of the new automated systems on your team's day-to-day work?

3. Is there anything else you'd like to share about your experience working with our team?

Your responses will help us showcase the value we bring to our clients and assist other businesses facing similar challenges. We would be honored to feature your feedback (with your permission) as a success story.

Thank you for your time and consideration. We truly appreciate your partnership.

Sincerely,

The MBACIO Team
📧 info@mbacio.com
📞 (773) 555-0123
🌐 www.mbacio.com

P.S. If you know of any other Chicago businesses that could benefit from our services, we'd be grateful for the referral!`;

  const fullEmail = `Subject: ${emailSubject}

${emailBody}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openInEmail = () => {
    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);
    window.open(`mailto:?subject=${encodedSubject}&body=${encodedBody}`);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white shadow-xl border border-gray-200">
        <CardContent className="p-8">
          <div className="mb-8">
            <Badge className="bg-gradient-yellow text-navy font-bold px-4 py-2 mb-4">
              Email Template
            </Badge>
            <h2 className="text-3xl font-poppins font-bold text-navy mb-4">
              Testimonial Request Email
            </h2>
            <p className="text-gray-600 text-lg">
              Use this template to request powerful, solution-focused testimonials from satisfied clients.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
            <div className="mb-4">
              <strong className="text-navy font-semibold">Subject:</strong>
              <span className="ml-2 text-gray-700">{emailSubject}</span>
            </div>
            
            <div>
              <strong className="text-navy font-semibold">Body:</strong>
              <div className="mt-2 whitespace-pre-line text-gray-700 leading-relaxed">
                {emailBody}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={copyToClipboard}
              className="bg-navy text-white hover:bg-deep-blue font-semibold px-6 py-3 rounded-lg transition-all duration-300"
            >
              <Copy className="w-5 h-5 mr-2" />
              {copied ? 'Copied!' : 'Copy Email Template'}
            </Button>
            
            <Button
              onClick={openInEmail}
              variant="outline"
              className="border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Open in Email Client
            </Button>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-xl font-poppins font-bold text-navy mb-4">
              📋 How to Use This Template:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Replace [Client Name] with the actual client's name</li>
              <li>• Send 2-4 weeks after project completion for best results</li>
              <li>• Follow up once if no response within one week</li>
              <li>• Always ask permission before featuring their response publicly</li>
              <li>• Use their responses to create compelling case studies</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialEmailTemplate;
