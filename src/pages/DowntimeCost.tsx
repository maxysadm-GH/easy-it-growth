
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const DowntimeCost = () => {
  const [formData, setFormData] = useState({
    employees: '',
    avgWage: '',
    downtimeHours: '4',
    incidentsYear: '6',
    revenueImpact: ''
  });
  const [results, setResults] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const employees = parseInt(formData.employees);
    const wage = parseFloat(formData.avgWage);
    const hours = parseFloat(formData.downtimeHours);
    const incidents = parseInt(formData.incidentsYear);
    const multiplier = parseFloat(formData.revenueImpact);
    
    const productivityLoss = employees * wage * hours;
    const costPerIncident = productivityLoss * multiplier;
    const annualCost = costPerIncident * incidents;
    const annualProductivityLoss = productivityLoss * incidents;
    
    setResults({
      costPerIncident: Math.round(costPerIncident),
      annualCost: Math.round(annualCost),
      productivityLoss: Math.round(annualProductivityLoss)
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
                IT Downtime Cost Calculator
              </h1>
              <p className="text-xl text-gray-600">
                Calculate the true cost of IT downtime for your business
              </p>
            </div>

            <Card className="bg-white shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Number of employees affected by IT downtime:
                    </label>
                    <Input
                      type="number"
                      min="1"
                      max="1000"
                      value={formData.employees}
                      onChange={(e) => setFormData({...formData, employees: e.target.value})}
                      required
                      className="border-2 focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Average hourly wage ($):
                    </label>
                    <Input
                      type="number"
                      min="15"
                      max="150"
                      step="0.01"
                      value={formData.avgWage}
                      onChange={(e) => setFormData({...formData, avgWage: e.target.value})}
                      required
                      className="border-2 focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Average downtime per incident (hours):
                    </label>
                    <Input
                      type="number"
                      min="0.5"
                      max="48"
                      step="0.5"
                      value={formData.downtimeHours}
                      onChange={(e) => setFormData({...formData, downtimeHours: e.target.value})}
                      required
                      className="border-2 focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Downtime incidents per year:
                    </label>
                    <Input
                      type="number"
                      min="1"
                      max="50"
                      value={formData.incidentsYear}
                      onChange={(e) => setFormData({...formData, incidentsYear: e.target.value})}
                      required
                      className="border-2 focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Revenue impact multiplier:
                    </label>
                    <select
                      value={formData.revenueImpact}
                      onChange={(e) => setFormData({...formData, revenueImpact: e.target.value})}
                      required
                      className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-accent focus:outline-none"
                    >
                      <option value="">Select business type...</option>
                      <option value="3">Manufacturing (3x)</option>
                      <option value="2">Professional Services (2x)</option>
                      <option value="4">E-commerce (4x)</option>
                      <option value="1.5">General Business (1.5x)</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full bg-accent text-navy hover:bg-accent/90 font-bold text-lg py-6">
                    Calculate Downtime Cost
                  </Button>
                </form>

                {results && (
                  <div className="mt-12 p-8 bg-gray-50 rounded-xl">
                    <h3 className="text-2xl font-poppins font-bold text-navy mb-6 text-center">
                      Your IT Downtime Cost Analysis
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-lg text-center">
                        <div className="text-3xl font-bold text-navy mb-2">
                          ${results.costPerIncident.toLocaleString()}
                        </div>
                        <div className="text-gray-600">Cost per Incident</div>
                      </div>
                      <div className="bg-white p-6 rounded-lg text-center">
                        <div className="text-3xl font-bold text-navy mb-2">
                          ${results.annualCost.toLocaleString()}
                        </div>
                        <div className="text-gray-600">Annual Downtime Cost</div>
                      </div>
                      <div className="bg-white p-6 rounded-lg text-center">
                        <div className="text-3xl font-bold text-navy mb-2">
                          ${results.productivityLoss.toLocaleString()}
                        </div>
                        <div className="text-gray-600">Annual Productivity Loss</div>
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

export default DowntimeCost;
