
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const VendorConsolidation = () => {
  const [results, setResults] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const numVendors = parseInt(formData.get('num-vendors') as string);
    const totalCost = parseFloat(formData.get('total-vendor-cost') as string);
    const adminHours = parseFloat(formData.get('admin-hours') as string);
    const adminRate = parseFloat(formData.get('admin-rate') as string);
    const incidents = parseInt(formData.get('vendor-incidents') as string);
    const expectedSavings = parseFloat(formData.get('expected-savings') as string) / 100;
    
    const adminCost = adminHours * adminRate;
    const incidentCost = incidents * 4 * adminRate;
    const directSavings = totalCost * expectedSavings;
    const adminTimeSavings = adminCost * 0.6;
    const monthlySavings = directSavings + adminTimeSavings;
    const annualSavings = monthlySavings * 12;
    const efficiencyGain = ((adminTimeSavings + (incidentCost * 0.5)) / (adminCost + incidentCost)) * 100;
    
    setResults({
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      adminTimeSavings: Math.round(adminTimeSavings * 12),
      efficiencyGain: Math.round(efficiencyGain)
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
              Vendor Consolidation Savings Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Calculate potential savings from consolidating your IT vendors
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of current IT vendors:
                    </label>
                    <input
                      type="number"
                      name="num-vendors"
                      min="2"
                      max="20"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total monthly vendor costs ($):
                    </label>
                    <input
                      type="number"
                      name="total-vendor-cost"
                      min="1000"
                      max="100000"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hours/month managing vendors:
                    </label>
                    <input
                      type="number"
                      name="admin-hours"
                      min="1"
                      max="200"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Administrative hourly rate ($):
                    </label>
                    <input
                      type="number"
                      name="admin-rate"
                      min="25"
                      max="150"
                      step="0.01"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vendor-related incidents/month:
                    </label>
                    <input
                      type="number"
                      name="vendor-incidents"
                      min="0"
                      max="20"
                      defaultValue="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expected cost reduction (%):
                    </label>
                    <input
                      type="number"
                      name="expected-savings"
                      min="5"
                      max="40"
                      defaultValue="15"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-accent text-navy hover:bg-accent/90 font-bold text-lg py-4">
                  Calculate Consolidation Savings
                </Button>
              </form>
            </CardContent>
          </Card>

          {results && (
            <Card className="border-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-poppins font-bold text-navy mb-6 text-center">
                  Your Vendor Consolidation Savings
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
                      ${results.annualSavings.toLocaleString()}
                    </div>
                    <div className="text-gray-600">Annual Savings</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-navy mb-2">
                      ${results.adminTimeSavings.toLocaleString()}
                    </div>
                    <div className="text-gray-600">Admin Time Savings</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-navy mb-2">
                      {results.efficiencyGain}%
                    </div>
                    <div className="text-gray-600">Efficiency Improvement</div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-navy mb-4">Ready to Consolidate Your Vendors?</h4>
                  <p className="text-gray-600 mb-6">Our team can help you achieve these savings with strategic consolidation.</p>
                  <Button size="lg" className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6">
                    Get Consolidation Plan
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

export default VendorConsolidation;
