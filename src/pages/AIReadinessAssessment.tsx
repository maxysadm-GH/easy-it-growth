
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTAButton from '@/components/ui/cta-button';

interface AssessmentResult {
  score: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  recommendations: string[];
  strengths: string[];
  gaps: string[];
}

const AIReadinessAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [results, setResults] = useState<AssessmentResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "How would you describe your current use of AI tools in business?",
      options: [
        { text: "We don't use any AI tools", value: 1 },
        { text: "We use basic AI tools like ChatGPT occasionally", value: 2 },
        { text: "We use AI tools regularly for specific tasks", value: 3 },
        { text: "AI is integrated into multiple business processes", value: 4 }
      ]
    },
    {
      question: "How automated are your current business processes?",
      options: [
        { text: "Most tasks are done manually", value: 1 },
        { text: "Some basic automation (email filters, basic workflows)", value: 2 },
        { text: "Several processes are automated", value: 3 },
        { text: "Most routine tasks are fully automated", value: 4 }
      ]
    },
    {
      question: "How comfortable is your team with adopting new technology?",
      options: [
        { text: "Very resistant to change", value: 1 },
        { text: "Cautious but willing with proper training", value: 2 },
        { text: "Generally open to new technology", value: 3 },
        { text: "Eager early adopters", value: 4 }
      ]
    },
    {
      question: "What's your biggest operational challenge right now?",
      options: [
        { text: "Too much manual data entry and paperwork", value: 4 },
        { text: "Poor communication between departments", value: 3 },
        { text: "Difficulty tracking performance and metrics", value: 3 },
        { text: "We're actually doing pretty well", value: 1 }
      ]
    },
    {
      question: "How do you currently handle customer data and insights?",
      options: [
        { text: "Spreadsheets and manual tracking", value: 1 },
        { text: "Basic CRM with limited analytics", value: 2 },
        { text: "Good CRM with some automated insights", value: 3 },
        { text: "Advanced analytics and predictive insights", value: 4 }
      ]
    },
    {
      question: "What's your annual revenue range?",
      options: [
        { text: "Under $1M", value: 1 },
        { text: "$1M - $5M", value: 2 },
        { text: "$5M - $25M", value: 3 },
        { text: "$25M+", value: 4 }
      ]
    }
  ];

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers: number[]) => {
    const totalScore = finalAnswers.reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 4;
    const percentage = Math.round((totalScore / maxScore) * 100);

    let level: 'Beginner' | 'Intermediate' | 'Advanced';
    let recommendations: string[];
    let strengths: string[];
    let gaps: string[];

    if (percentage < 40) {
      level = 'Beginner';
      recommendations = [
        'Start with basic automation tools like Zapier or Microsoft Power Automate',
        'Implement a proper CRM system to centralize customer data',
        'Begin staff training on AI fundamentals',
        'Focus on digitizing manual processes first'
      ];
      strengths = ['Great potential for quick wins', 'Clear room for improvement'];
      gaps = ['Limited automation', 'Manual processes', 'Basic technology adoption'];
    } else if (percentage < 70) {
      level = 'Intermediate';
      recommendations = [
        'Integrate AI-powered analytics into existing systems',
        'Implement predictive insights for better decision making',
        'Automate cross-department workflows',
        'Explore AI-powered customer service solutions'
      ];
      strengths = ['Good foundation in place', 'Team ready for next level'];
      gaps = ['Disconnected systems', 'Limited AI integration', 'Manual reporting'];
    } else {
      level = 'Advanced';
      recommendations = [
        'Implement advanced machine learning for predictive analytics',
        'Create custom AI solutions for your industry',
        'Develop AI-powered competitive advantages',
        'Focus on AI ethics and governance frameworks'
      ];
      strengths = ['Strong tech foundation', 'Forward-thinking team', 'Advanced processes'];
      gaps = ['Opportunity for cutting-edge AI', 'Custom solution potential'];
    }

    setResults({
      score: percentage,
      level,
      recommendations,
      strengths,
      gaps
    });
    setShowResults(true);
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResults(null);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/tools" className="inline-flex items-center gap-2 text-navy hover:text-accent mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Tools
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              AI Readiness Assessment
            </h1>
            <p className="text-xl text-gray-600">
              Discover your business's AI potential and get a personalized roadmap for 2024
            </p>
          </div>

          {!showResults ? (
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-500">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-sm font-medium text-accent">
                      {Math.round(((currentQuestion) / questions.length) * 100)}% Complete
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-accent h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h2 className="text-2xl font-poppins font-bold text-navy mb-8">
                  {questions[currentQuestion].question}
                </h2>

                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleAnswer(option.value)}
                      variant="outline"
                      className="w-full p-6 text-left justify-start hover:bg-accent/10 hover:border-accent transition-all duration-300"
                    >
                      {option.text}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              <Card className="max-w-4xl mx-auto border-accent">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-yellow rounded-full mb-4">
                      <span className="text-3xl font-bold text-navy">{results?.score}%</span>
                    </div>
                    <h3 className="text-3xl font-poppins font-bold text-navy mb-2">
                      AI Readiness Level: {results?.level}
                    </h3>
                    <p className="text-xl text-gray-600">
                      Your personalized AI transformation roadmap is ready
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="flex items-center gap-2 text-xl font-bold text-green-600 mb-4">
                        <CheckCircle className="w-5 h-5" />
                        Your Strengths
                      </h4>
                      <ul className="space-y-2">
                        {results?.strengths.map((strength, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-xl font-bold text-amber-600 mb-4">
                        <AlertCircle className="w-5 h-5" />
                        Growth Opportunities
                      </h4>
                      <ul className="space-y-2">
                        {results?.gaps.map((gap, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{gap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <h4 className="text-xl font-bold text-navy mb-4">
                      Your Personalized AI Roadmap for 2024
                    </h4>
                    <ul className="space-y-3">
                      {results?.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-accent text-navy text-sm font-bold rounded-full flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-gray-700">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center space-y-4">
                    <CTAButton 
                      ctaId="book-assessment"
                      variant="yellow"
                      size="lg"
                      className="text-xl px-10 py-6"
                      forcePopup={true}
                    />
                    <p className="text-sm text-gray-500">
                      Get a detailed AI implementation plan tailored to your business
                    </p>
                    <Button 
                      onClick={resetAssessment}
                      variant="outline"
                      className="mt-4"
                    >
                      Take Assessment Again
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIReadinessAssessment;
