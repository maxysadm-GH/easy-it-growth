
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudMigration = () => {
  const [results, setResults] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const serverCosts = parseFloat(formData.get('server-costs') as string);
    const itStaffCosts = parseFloat(formData.get('it-staff-costs') as string);
    const maintenanceCosts = parseFloat(formData.get('maintenance-costs') as string);
    const cloudEstimate = parseFloat(formData.get('cloud-estimate') as string);
    const migrationCost = parseFloat(formData.get('migration-cost') as string);
    const staffReduction = parseFloat(formData.get('staff-reduction') as string) / 100;
    
    const currentTotal = serverCosts + itStaffCosts + maintenanceCosts;
    const newItCosts = itStaffCosts * (1 - staffReduction);
    const newTotal = cloudEstimate + newItCosts;
    const monthlySavings = currentTotal - newTotal;
    const annualSavings = monthlySavings * 12;
    const paybackPeriod = migrationCost / monthlySavings;
    const threeYearSavings = (annualSavings * 3) - migrationCost;
    const threeYearROI = (threeYearSavings / migrationCost) * 100;
    
    setResults({
      monthlySavings: Math.round(monthlySavings),
      paybackPeriod: Math.round(paybackPeriod),
      threeYearROI: Math.round(threeYearROI),
      totalSavings: Math.round(threeYearSavings)
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
              Cloud Migration ROI Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Evaluate the return on investment for migrating to the cloud
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current monthly server costs ($):
                    </label>
                    <input
                      type="number"
                      name="server-costs"
                      min="500"
                      max="50000"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly IT staff costs ($):
                    </label>
                    <input
                      type="number"
                      name="it-staff-costs"
                      min="3000"
                      max="100000"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly maintenance costs ($):
                    </label>
                    <input
                      type="number"
                      name="maintenance-costs"
                      min="200"
                      max="10000"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated monthly cloud costs ($):
                    </label>
                    <input
                      type="number"
                      name="cloud-estimate"
                      min="500"
                      max="30000"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      One-time migration cost ($):
                    </label>
                    <input
                      type="number"
                      name="migration-cost"
                      min="5000"
                      max="500000"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      IT staff time reduction (%):
                    </label>
                    <input
                      type="number"
                      name="staff-reduction"
                      min="10"
                      max="60"
                      defaultValue="25"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-accent text-navy hover:bg-accent/90 font-bold text-lg py-4">
                  Calculate Cloud Migration ROI
                </Button>
              </form>
            </CardContent>
          </Card>

          {results && (
            <Card className="border-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-poppins font-bold text-navy mb-6 text-center">
                  Your Cloud Migration ROI Analysis
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-navy mb-2">
                      ${results.monthlySavings.toLocaleString()}
                    </div>
                    <div className="text-gray-600">Monthly Savings</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-navy mb-2">
                      {results.paybackPeriod}
                    </div>
                    <div className="text-gray-600">Payback Period (Months)</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-navy mb-2">
                      {results.threeYearROI}%
                    </div>
                    <div className="text-gray-600">3-Year ROI</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-navy mb-2">
                      ${results.totalSavings.toLocaleString()}
                    </div>
                    <div className="text-gray-600">3-Year Total Savings</div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-navy mb-4">Ready to Migrate to the Cloud?</h4>
                  <p className="text-gray-600 mb-6">Our cloud experts can help you achieve these results with a smooth migration.</p>
                  <Button size="lg" className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6">
                    Get Migration Plan
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

export default CloudMigration;
