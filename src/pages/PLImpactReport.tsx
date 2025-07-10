
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, CheckCircle, BarChart3, TrendingUp, DollarSign } from 'lucide-react';

const PLImpactReport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <section className="pt-32 pb-20">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-2xl mx-auto">
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
                <h1 className="text-4xl font-poppins font-bold text-navy mb-6">
                  Download Starting Now
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Your P&L Impact Report is being prepared and will be in your inbox within the next 5 minutes. 
                  We'll also follow up with insights specific to your manufacturing operations.
                </p>
                <div className="bg-accent/10 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-navy mb-2">What's Next?</h3>
                  <p className="text-gray-700">
                    Our team will reach out within 24 hours to discuss how the metrics in this report 
                    apply to your specific production environment and P&L goals.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8">
                Manufacturing P&L Impact Report
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
                See exactly how OEE improvements, scrap reduction, and predictive maintenance 
                translate to your bottom line with real financial projections.
              </p>
            </div>
          </div>
        </section>

        {/* What's Inside Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-center text-navy mb-16">
                What's Inside This Report
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <Card className="border-2 border-accent/20">
                  <CardContent className="p-8 text-center">
                    <BarChart3 className="w-12 h-12 text-accent mx-auto mb-6" />
                    <h3 className="text-xl font-bold text-navy mb-4">OEE Financial Calculator</h3>
                    <p className="text-gray-700">
                      Interactive calculator showing the dollar impact of each point of OEE improvement 
                      based on your revenue and production volume.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20">
                  <CardContent className="p-8 text-center">
                    <TrendingUp className="w-12 h-12 text-accent mx-auto mb-6" />
                    <h3 className="text-xl font-bold text-navy mb-4">Scrap Cost Analysis</h3>
                    <p className="text-gray-700">
                      Detailed breakdown of how scrap rate reductions translate to gross margin improvements 
                      with industry-specific benchmarks.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20">
                  <CardContent className="p-8 text-center">
                    <DollarSign className="w-12 h-12 text-accent mx-auto mb-6" />
                    <h3 className="text-xl font-bold text-navy mb-4">ROI Projections</h3>
                    <p className="text-gray-700">
                      12-month financial projections showing expected payback periods and cumulative 
                      savings from manufacturing analytics investments.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-navy to-deep-blue text-white rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-accent mb-4">Real Client Example</h3>
                <p className="text-xl text-gray-200 mb-6">
                  Midwest Food Manufacturer: $42M Revenue
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent">7 Points</div>
                    <div className="text-sm text-gray-300">OEE Improvement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">37%</div>
                    <div className="text-sm text-gray-300">Scrap Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">$385K</div>
                    <div className="text-sm text-gray-300">Annual Savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="border-2 border-accent/20">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <Download className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
                      Download Your P&L Impact Report
                    </h3>
                    <p className="text-gray-700">
                      Get instant access to manufacturing financial benchmarks and ROI calculators 
                      used by leading mid-market manufacturers.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-navy font-semibold">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-2"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-navy font-semibold">Work Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-2"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company" className="text-navy font-semibold">Company Name *</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-2"
                          placeholder="ABC Manufacturing"
                        />
                      </div>
                      <div>
                        <Label htmlFor="role" className="text-navy font-semibold">Your Role *</Label>
                        <Input
                          id="role"
                          name="role"
                          type="text"
                          required
                          value={formData.role}
                          onChange={handleInputChange}
                          className="mt-2"
                          placeholder="Operations Manager"
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-gradient-yellow text-navy font-bold text-xl py-6 hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3"
                    >
                      <Download className="w-5 h-5" />
                      Download P&L Impact Report
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By downloading this report, you agree to receive follow-up communications about manufacturing 
                      analytics solutions. We respect your privacy and never share your information.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PLImpactReport;
