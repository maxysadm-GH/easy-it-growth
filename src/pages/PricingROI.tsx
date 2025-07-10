
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Check, X, Calculator, DollarSign, TrendingUp } from 'lucide-react';

const PricingROI = () => {
  const [users, setUsers] = useState<number>(25);
  const [workstations, setWorkstations] = useState<number>(25);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteData, setQuoteData] = useState({ name: '', email: '' });

  // Automation ROI Calculator state
  const [employees, setEmployees] = useState<number>(3);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(8);
  const [hourlyWage, setHourlyWage] = useState<number>(45);

  // Pricing calculation
  const essential_user_price = 75;
  const premier_user_price = 125;
  const elite_user_price = 175;
  const workstation_price = 85;

  const total_premier = (premier_user_price * users) + (workstation_price * workstations);
  const range_low = Math.round(total_premier * 0.95);
  const range_high = Math.round(total_premier * 1.05);

  // Automation ROI calculation
  const annualCost = employees * hoursPerWeek * hourlyWage * 52;

  const serviceFeatures = [
    { name: "Help Desk Support", essential: true, premier: true, elite: true },
    { name: "Anti-Spam & Basic AV", essential: true, premier: true, elite: true },
    { name: "Patching & Updates", essential: true, premier: true, elite: true },
    { name: "Cloud Backup (365: Email, OneDrive, Teams)", essential: false, premier: true, elite: true },
    { name: "SOC Monitoring (24/7)", essential: false, premier: true, elite: true },
    { name: "Next-Gen AI Antivirus", essential: false, premier: true, elite: true },
    { name: "Cybersecurity Awareness Training", essential: false, premier: true, elite: true },
    { name: "DMARC Email Security", essential: false, premier: true, elite: true },
    { name: "AI Threat Detection", essential: false, premier: false, elite: true },
    { name: "Automation (SSO, Password Management)", essential: false, premier: false, elite: true },
    { name: "Onsite Support", essential: "Add-on", premier: "4 hrs/week", elite: "8 hrs/week" }
  ];

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote requested:', { ...quoteData, users, workstations, estimatedRange: `$${range_low.toLocaleString()} - $${range_high.toLocaleString()}` });
    setQuoteSubmitted(true);
  };

  const handleBookScopingCall = () => {
    window.location.href = '/schedule';
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8">
                Pricing & ROI Planning
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Our service plans are designed for transparency and value. Use the calculator below to estimate 
                the monthly investment for our packaged IT service tiers. For custom automation projects, use our 
                ROI Calculator to build a business case and see the potential return. A final, precise quote is 
                always provided after a strategic consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Service Tier Investment Calculator */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-center text-navy mb-16">
                Estimate Your Monthly Service Tier Investment
              </h2>

              {/* Step 1: User Inputs */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <Card className="border-2 border-accent/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-navy">Step 1: Your Operational Footprint</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="users" className="text-lg font-semibold text-navy">Number of Employees / Users</Label>
                      <Input
                        id="users"
                        type="number"
                        value={users}
                        onChange={(e) => setUsers(Number(e.target.value))}
                        className="mt-2 text-lg p-4"
                        min="1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="workstations" className="text-lg font-semibold text-navy">Number of Workstations / Computers</Label>
                      <Input
                        id="workstations"
                        type="number"
                        value={workstations}
                        onChange={(e) => setWorkstations(Number(e.target.value))}
                        className="mt-2 text-lg p-4"
                        min="1"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Step 3: Estimated Investment */}
                <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10">
                  <CardHeader>
                    <CardTitle className="text-2xl text-navy">Your Estimated Monthly Investment Range</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-5xl font-bold text-accent mb-4">
                        ~${range_low.toLocaleString()} - ${range_high.toLocaleString()}
                      </div>
                      <div className="text-lg text-gray-600 mb-6">per month</div>
                      <p className="text-gray-700 mb-8">
                        This estimate is based on our Premier tier (Most Popular) which includes comprehensive 
                        IT management, security monitoring, and automation features.
                      </p>
                      
                      {!showQuoteForm && !quoteSubmitted && (
                        <Button 
                          onClick={() => setShowQuoteForm(true)}
                          className="bg-gradient-yellow text-navy font-bold text-xl px-8 py-4 hover:scale-105 transition-transform duration-300"
                        >
                          Email My Detailed Quote & Comparison
                        </Button>
                      )}

                      {showQuoteForm && !quoteSubmitted && (
                        <form onSubmit={handleQuoteSubmit} className="space-y-4 mt-6">
                          <Input
                            placeholder="Your Name"
                            value={quoteData.name}
                            onChange={(e) => setQuoteData({...quoteData, name: e.target.value})}
                            required
                          />
                          <Input
                            type="email"
                            placeholder="Work Email"
                            value={quoteData.email}
                            onChange={(e) => setQuoteData({...quoteData, email: e.target.value})}
                            required
                          />
                          <Button 
                            type="submit"
                            className="w-full bg-accent text-white font-bold py-3"
                          >
                            Send My Quote
                          </Button>
                        </form>
                      )}

                      {quoteSubmitted && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-green-800">
                          <h4 className="font-bold mb-2">Thank you!</h4>
                          <p>Your detailed estimate is on its way. We will be in touch shortly to schedule a brief call to review it with you.</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Step 2: Service Tiers Comparison */}
              <div className="mb-12">
                <h3 className="text-2xl font-poppins font-bold text-center text-navy mb-8">
                  Step 2: Our Service Tiers
                </h3>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Essential */}
                  <Card className="border border-gray-200">
                    <CardHeader className="text-center pb-8">
                      <CardTitle>
                        <h4 className="text-2xl font-bold text-navy mb-2">Essential</h4>
                        <div className="text-3xl font-bold text-gray-700 mb-4">
                          ${((essential_user_price * users) + (workstation_price * workstations)).toLocaleString()}/mo
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {serviceFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            {feature.essential === true ? (
                              <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                            ) : feature.essential === false ? (
                              <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                            ) : (
                              <span className="text-sm text-gray-600 flex-shrink-0 w-5">{feature.essential}</span>
                            )}
                            <span className="text-sm">{feature.name}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Premier */}
                  <Card className="border-2 border-accent scale-105 relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-accent text-white font-bold px-4 py-2">MOST POPULAR</Badge>
                    </div>
                    <CardHeader className="text-center pb-8 pt-8">
                      <CardTitle>
                        <h4 className="text-2xl font-bold text-navy mb-2">Premier</h4>
                        <div className="text-3xl font-bold text-accent mb-4">
                          ${total_premier.toLocaleString()}/mo
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {serviceFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            {feature.premier === true ? (
                              <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                            ) : feature.premier === false ? (
                              <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                            ) : (
                              <span className="text-sm text-gray-600 flex-shrink-0 w-5">{feature.premier}</span>
                            )}
                            <span className="text-sm">{feature.name}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Elite */}
                  <Card className="border border-gray-200">
                    <CardHeader className="text-center pb-8">
                      <CardTitle>
                        <h4 className="text-2xl font-bold text-navy mb-2">Elite (AI + Strategic Add-ons)</h4>
                        <div className="text-3xl font-bold text-gray-700 mb-4">
                          ${((elite_user_price * users) + (workstation_price * workstations)).toLocaleString()}/mo
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {serviceFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            {feature.elite === true ? (
                              <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                            ) : feature.elite === false ? (
                              <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                            ) : (
                              <span className="text-sm text-gray-600 flex-shrink-0 w-5">{feature.elite}</span>
                            )}
                            <span className="text-sm">{feature.name}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation ROI Calculator */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-center text-navy mb-8">
                Calculate the ROI of a Custom Automation Project
              </h2>
              <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
                Manual, repetitive tasks are a hidden drain on your profitability. Use this simple calculator 
                to estimate the annual cost of not automating a specific process, and build a clear business case for change.
              </p>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calculator Inputs */}
                <Card className="border-2 border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Calculator className="w-6 h-6 text-accent" />
                      Automation ROI Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="employees" className="text-lg font-semibold text-navy">
                        Number of employees performing this task:
                      </Label>
                      <Input
                        id="employees"
                        type="number"
                        value={employees}
                        onChange={(e) => setEmployees(Number(e.target.value))}
                        className="mt-2 text-lg p-4"
                        min="1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="hours" className="text-lg font-semibold text-navy">
                        Average hours per week spent on this task (per employee):
                      </Label>
                      <Input
                        id="hours"
                        type="number"
                        value={hoursPerWeek}
                        onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                        className="mt-2 text-lg p-4"
                        min="1"
                        step="0.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="wage" className="text-lg font-semibold text-navy">
                        Average fully-loaded hourly wage of these employees ($):
                      </Label>
                      <Input
                        id="wage"
                        type="number"
                        value={hourlyWage}
                        onChange={(e) => setHourlyWage(Number(e.target.value))}
                        className="mt-2 text-lg p-4"
                        min="1"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Results */}
                <Card className="border-2 border-accent/20 bg-gradient-to-br from-red-50 to-red-100">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-red-800">
                      <DollarSign className="w-6 h-6" />
                      The Business Case
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-red-800 mb-4">Estimated Annual Cost of Inaction:</h3>
                      <div className="text-6xl font-bold text-red-600 mb-6">
                        ${annualCost.toLocaleString()}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-red-800 mb-4">Justifying the Investment</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Our custom automation projects are designed to be self-funding, typically delivering 
                        a return on investment within the first 12-18 months. This frees up your most valuable 
                        assets—your people—to focus on growth.
                      </p>
                    </div>

                    <Button 
                      onClick={handleBookScopingCall}
                      className="w-full bg-gradient-yellow text-navy font-bold text-xl py-6 hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3"
                    >
                      <TrendingUp className="w-5 h-5" />
                      Book a Scoping Call to Validate Your ROI
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PricingROI;
