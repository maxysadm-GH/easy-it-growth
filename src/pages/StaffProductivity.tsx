
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const StaffProductivity = () => {
  const [results, setResults] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const itStaff = parseInt(formData.get('it-staff') as string);
    const avgSalary = parseFloat(formData.get('avg-salary') as string);
    const ticketsMonthly = parseInt(formData.get('tickets-monthly') as string);
    const resolutionTime = parseFloat(formData.get('resolution-time') as string);
    const routineHours = parseFloat(formData.get('routine-hours') as string);
    const automationPotential = parseFloat(formData.get('automation-potential') as string) / 100;
    
    const hourlyRate = avgSalary / (40 * 52);
    const ticketCost = resolutionTime * hourlyRate;
    const totalWorkHours = itStaff * 40 * 4.33; // Monthly hours
    const ticketHours = ticketsMonthly * resolutionTime;
    const routineMonthlyHours = itStaff * routineHours * 4.33;
    
    // Productivity score calculation
    const ticketEfficiency = Math.min((ticketsMonthly / itStaff / 50) * 40, 40); // Max 40 points
    const timeUtilization = Math.min(((totalWorkHours - routineMonthlyHours) / totalWorkHours) * 30, 30); // Max 30 points
    const automationReadiness = automationPotential * 30; // Max 30 points
    const productivityScore = ticketEfficiency + timeUtilization + automationReadiness;
    
    const automationSavings = routineMonthlyHours * automationPotential * hourlyRate * 12;
    const efficiencyOpportunity = automationPotential * 100;
    
    setResults({
      productivityScore: Math.round(productivityScore),
      costPerTicket: Math.round(ticketCost),
      automationSavings: Math.round(automationSavings),
      efficiencyOpportunity: Math.round(efficiencyOpportunity)
    });
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
              IT Staff Productivity Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Measure your IT team's efficiency and identify improvement opportunities
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of IT staff:
                    </label>
                    <input
                      type="number"
                      name="it-staff"
                      min="1"
                      max="50"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Average IT salary ($):
                    </label>
                    <input
                      type="number"
                      name="avg-salary"
                      min="40000"
                      max="200000"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      IT tickets per month:
                    </label>
                    <input
                      type="number"
                      name="tickets-monthly"
                      min="10"
                      max="2000"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Average resolution time (hours):
                    </label>
                    <input
                      type="number"
                      name="resolution-time"
                      min="0.5"
                      max="24"
                      step="0.5"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hours/week on routine tasks:
                    </label>
                    <input
                      type="number"
                      name="routine-hours"
                      min="1"
                      max="40"
                      defaultValue="15"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Automation potential (%):
                    </label>
                    <input
                      type="number"
                      name="automation-potential"
                      min="10"
                      max="80"
                      defaultValue="50"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-accent text-navy hover:bg-accent/90 font-bold text-lg py-4">
                  Calculate Productivity Score
                </Button>
              </form>
            </CardContent>
          </Card>

          {results && (
            <Card className="border-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-poppins font-bold text-navy mb-6 text-center">
                  Your IT Productivity Analysis
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-navy mb-2">
                      {results.productivityScore}
                    </div>
                    <div className="text-gray-600">Productivity Score (0-100)</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-navy mb-2">
                      ${results.costPerTicket}
                    </div>
                    <div className="text-gray-600">Cost per Ticket</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-navy mb-2">
                      ${results.automationSavings.toLocaleString()}
                    </div>
                    <div className="text-gray-600">Annual Automation Potential</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-navy mb-2">
                      {results.efficiencyOpportunity}%
                    </div>
                    <div className="text-gray-600">Efficiency Opportunity</div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-navy mb-4">Optimize Your IT Team's Performance</h4>
                  <p className="text-gray-600 mb-6">Get a detailed optimization plan from our IT efficiency experts.</p>
                  <Button size="lg" className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6">
                    Get Optimization Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StaffProductivity;
