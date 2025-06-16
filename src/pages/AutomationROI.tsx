
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AutomationROI = () => {
  const [formData, setFormData] = useState({
    processHours: '',
    hourlyRate: '',
    automationCost: '',
    timeSavings: '70'
  });
  const [results, setResults] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const hours = parseFloat(formData.processHours);
    const rate = parseFloat(formData.hourlyRate);
    const cost = parseFloat(formData.automationCost);
    const savings = parseFloat(formData.timeSavings) / 100;
    
    const monthlyCost = hours * rate;
    const monthlySavings = monthlyCost * savings;
    const annualSavings = monthlySavings * 12;
    const roi = ((annualSavings - cost) / cost) * 100;
    const payback = cost / monthlySavings;
    
    setResults({
      monthlySavings: Math.round(monthlySavings),
      annualROI: Math.round(roi),
      paybackMonths: Math.round(payback)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/tools" className="inline-flex items-center gap-2 text-navy hover:text-accent mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Assessment Tools
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-navy mb-6">
                IT Automation ROI Calculator
              </h1>
              <p className="text-xl text-gray-600">
                Calculate the return on investment for automating your business processes
              </p>
            </div>

            <Card className="bg-white shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Hours spent on this process per month:
                    </label>
                    <Input
                      type="number"
                      min="1"
                      max="1000"
                      value={formData.processHours}
                      onChange={(e) => setFormData({...formData, processHours: e.target.value})}
                      required
                      className="border-2 focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Average hourly rate of staff ($):
                    </label>
                    <Input
                      type="number"
                      min="15"
                      max="200"
                      step="0.01"
                      value={formData.hourlyRate}
                      onChange={(e) => setFormData({...formData, hourlyRate: e.target.value})}
                      required
                      className="border-2 focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      One-time automation cost ($):
                    </label>
                    <Input
                      type="number"
                      min="1000"
                      max="100000"
                      value={formData.automationCost}
                      onChange={(e) => setFormData({...formData, automationCost: e.target.value})}
                      required
                      className="border-2 focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Expected time savings (%):
                    </label>
                    <Input
                      type="number"
                      min="10"
                      max="95"
                      value={formData.timeSavings}
                      onChange={(e) => setFormData({...formData, timeSavings: e.target.value})}
                      required
                      className="border-2 focus:border-accent"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent text-navy hover:bg-accent/90 font-bold text-lg py-6">
                    Calculate ROI
                  </Button>
                </form>

                {results && (
                  <div className="mt-12 p-8 bg-gray-50 rounded-xl">
                    <h3 className="text-2xl font-poppins font-bold text-navy mb-6 text-center">
                      Your Automation ROI Results
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-lg text-center">
                        <div className="text-3xl font-bold text-navy mb-2">
                          ${results.monthlySavings.toLocaleString()}
                        </div>
                        <div className="text-gray-600">Monthly Savings</div>
                      </div>
                      <div className="bg-white p-6 rounded-lg text-center">
                        <div className="text-3xl font-bold text-navy mb-2">
                          {results.annualROI}%
                        </div>
                        <div className="text-gray-600">Annual ROI</div>
                      </div>
                      <div className="bg-white p-6 rounded-lg text-center">
                        <div className="text-3xl font-bold text-navy mb-2">
                          {results.paybackMonths}
                        </div>
                        <div className="text-gray-600">Payback Period (Months)</div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutomationROI;
