
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';

const AssessmentForms = () => {
  const { toast } = useToast();
  const [riskEmail, setRiskEmail] = useState('');
  const [automationEmail, setAutomationEmail] = useState('');
  const [riskAnswers, setRiskAnswers] = useState<Record<string, string>>({});
  const [automationAnswers, setAutomationAnswers] = useState<Record<string, string>>({});

  const riskQuestions = [
    {
      id: 'backup',
      question: 'How often do you test your data backups?',
      options: ['Never', 'Annually', 'Quarterly', 'Monthly', 'Weekly']
    },
    {
      id: 'updates',
      question: 'When did you last update your critical business software?',
      options: ['Over a year ago', '6-12 months ago', '3-6 months ago', '1-3 months ago', 'This month']
    },
    {
      id: 'monitoring',
      question: 'Do you have 24/7 system monitoring in place?',
      options: ['No monitoring', 'Basic monitoring', 'Some monitoring', 'Good monitoring', 'Comprehensive monitoring']
    },
    {
      id: 'security',
      question: 'How many different vendors manage your IT security?',
      options: ['5+ vendors', '3-4 vendors', '2-3 vendors', '1-2 vendors', 'Unified security platform']
    },
    {
      id: 'downtime',
      question: 'How much unplanned downtime did you experience last quarter?',
      options: ['Multiple days', '1-2 days', 'Several hours', 'A few hours', 'Minimal/None']
    }
  ];

  const automationQuestions = [
    {
      id: 'manual_tasks',
      question: 'How many hours per week does your team spend on manual, repetitive IT tasks?',
      options: ['20+ hours', '15-20 hours', '10-15 hours', '5-10 hours', 'Less than 5 hours']
    },
    {
      id: 'data_entry',
      question: 'How often do you manually transfer data between systems?',
      options: ['Multiple times daily', 'Daily', 'Weekly', 'Monthly', 'Rarely/Never']
    },
    {
      id: 'reporting',
      question: 'How long does it take to generate monthly business reports?',
      options: ['Several days', '1-2 days', 'Several hours', '1-2 hours', 'Automated/Minutes']
    }
  ];

  const handleRiskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!riskEmail || Object.keys(riskAnswers).length < riskQuestions.length) {
      toast({
        title: "Please complete all fields",
        description: "Email and all questions are required for your assessment.",
        variant: "destructive",
      });
      return;
    }

    // Calculate risk score
    const scores = Object.values(riskAnswers).map(answer => {
      const questionIndex = riskQuestions.findIndex(q => riskAnswers[q.id] === answer);
      const answerIndex = riskQuestions[questionIndex]?.options.indexOf(answer) || 0;
      return 4 - answerIndex; // Higher score = higher risk
    });
    
    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    const riskLevel = totalScore > 15 ? 'High' : totalScore > 10 ? 'Medium' : 'Low';

    toast({
      title: `Risk Assessment Complete - ${riskLevel} Risk`,
      description: "This is an informative estimate, not a formal audit. We'll email you detailed recommendations.",
    });
  };

  const handleAutomationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!automationEmail || Object.keys(automationAnswers).length < automationQuestions.length) {
      toast({
        title: "Please complete all fields", 
        description: "Email and all questions are required for your assessment.",
        variant: "destructive",
      });
      return;
    }

    // Calculate automation potential
    const scores = Object.values(automationAnswers).map(answer => {
      const questionIndex = automationQuestions.findIndex(q => automationAnswers[q.id] === answer);
      const answerIndex = automationQuestions[questionIndex]?.options.indexOf(answer) || 0;
      return answerIndex; // Higher score = more automation potential
    });
    
    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    const potential = totalScore > 8 ? 'High' : totalScore > 5 ? 'Medium' : 'Low';

    toast({
      title: `${potential} Automation Potential Detected`,
      description: "We've identified opportunities to save time and reduce costs through automation.",
    });
  };

  return (
    <section className="py-16 lg:py-24 bg-background" id="assessment">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
            Free IT Assessments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get personalized insights into your IT infrastructure and automation opportunities with our quick assessments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Risk Assessment Form */}
          <Card className="border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins font-bold text-navy">
                How Risky Is Your Tech Setup?
              </CardTitle>
              <p className="text-muted-foreground">
                5-question assessment to identify potential vulnerabilities in your IT infrastructure.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRiskSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="risk-email">Email Address *</Label>
                  <Input
                    id="risk-email"
                    type="email"
                    value={riskEmail}
                    onChange={(e) => setRiskEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {riskQuestions.map((question, index) => (
                  <div key={question.id}>
                    <Label className="text-base font-medium mb-3 block">
                      {index + 1}. {question.question}
                    </Label>
                    <RadioGroup
                      value={riskAnswers[question.id] || ''}
                      onValueChange={(value) => setRiskAnswers(prev => ({...prev, [question.id]: value}))}
                    >
                      {question.options.map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`${question.id}-${option}`} />
                          <Label htmlFor={`${question.id}-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-yellow text-navy hover:opacity-90 font-semibold"
                  size="lg"
                >
                  Get My Risk Assessment
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  This is an informative estimate, not a formal audit.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Automation Assessment Form */}
          <Card className="border-2 border-navy/20">
            <CardHeader>
              <CardTitle className="text-2xl font-poppins font-bold text-navy">
                Is It Worth Automating?
              </CardTitle>
              <p className="text-muted-foreground">
                Quick assessment to identify automation opportunities that could save time and money.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAutomationSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="automation-email">Email Address *</Label>
                  <Input
                    id="automation-email"
                    type="email"
                    value={automationEmail}
                    onChange={(e) => setAutomationEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {automationQuestions.map((question, index) => (
                  <div key={question.id}>
                    <Label className="text-base font-medium mb-3 block">
                      {index + 1}. {question.question}
                    </Label>
                    <RadioGroup
                      value={automationAnswers[question.id] || ''}
                      onValueChange={(value) => setAutomationAnswers(prev => ({...prev, [question.id]: value}))}
                    >
                      {question.options.map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`${question.id}-${option}`} />
                          <Label htmlFor={`${question.id}-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}

                <Button 
                  type="submit" 
                  className="w-full bg-navy text-white hover:bg-deep-blue font-semibold"
                  size="lg"
                >
                  Check Automation Potential
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Placeholder for future n8n automation integration.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AssessmentForms;
