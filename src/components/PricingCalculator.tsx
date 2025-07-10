
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const PricingCalculator = () => {
  const [users, setUsers] = useState(25);
  const [workstations, setWorkstations] = useState(25);
  const [email, setEmail] = useState('');
  const [taskEmployees, setTaskEmployees] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [hourlyWage, setHourlyWage] = useState(25);

  // Verified pricing structure from business proposal
  const calculateTierPricing = () => {
    const userCosts = {
      essential: users * 75,
      premier: users * 125,
      elite: users * 175
    };
    
    const workstationCost = workstations * 85;
    
    return {
      essential: userCosts.essential + workstationCost,
      premier: userCosts.premier + workstationCost,
      elite: userCosts.elite + workstationCost
    };
  };

  const pricing = calculateTierPricing();
  const annualAutomationCost = taskEmployees * hoursPerWeek * 52 * hourlyWage;

  const handleEmailQuote = () => {
    if (!email) {
      alert('Please enter your email to receive a detailed quote.');
      return;
    }
    window.open(`https://outlook.office.com/book/MBACIOConsultation@mbacio.com/`, '_blank');
  };

  return (
    <div className="space-y-8">
      {/* Service Tier Calculator */}
      <Card>
        <CardHeader>
          <CardTitle>Estimate Your Monthly Service Investment</CardTitle>
          <p className="text-gray-600">Based on verified pricing from MBACIO business proposals</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="users">Number of Users</Label>
                <Input
                  id="users"
                  type="number"
                  value={users}
                  onChange={(e) => setUsers(parseInt(e.target.value) || 0)}
                  min="1"
                  max="500"
                />
              </div>
              <div>
                <Label htmlFor="workstations">Number of Workstations</Label>
                <Input
                  id="workstations"
                  type="number"
                  value={workstations}
                  onChange={(e) => setWorkstations(parseInt(e.target.value) || 0)}
                  min="1"
                  max="500"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h3 className="font-bold text-lg mb-2">Essential</h3>
                <p className="text-2xl font-bold text-navy">${pricing.essential.toLocaleString()}</p>
                <p className="text-sm text-gray-600">per month</p>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg text-center border-2 border-accent">
                <h3 className="font-bold text-lg mb-2">Premier</h3>
                <p className="text-2xl font-bold text-accent">${pricing.premier.toLocaleString()}</p>
                <p className="text-sm text-gray-600">per month</p>
                <span className="bg-accent text-white px-2 py-1 rounded text-xs">Most Popular</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h3 className="font-bold text-lg mb-2">Elite</h3>
                <p className="text-2xl font-bold text-navy">${pricing.elite.toLocaleString()}+</p>
                <p className="text-sm text-gray-600">per month</p>
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="email">Email for Detailed Quote</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                onClick={handleEmailQuote}
                className="w-full bg-gradient-yellow text-navy font-bold hover:scale-105 transition-all duration-300"
              >
                Email My Detailed Quote & Feature Comparison
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Automation ROI Calculator */}
      <Card>
        <CardHeader>
          <CardTitle>Automation ROI Calculator</CardTitle>
          <p className="text-gray-600">Calculate the cost of manual processes vs. automation</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="taskEmployees">Employees on this task</Label>
                <Input
                  id="taskEmployees"
                  type="number"
                  value={taskEmployees}
                  onChange={(e) => setTaskEmployees(parseInt(e.target.value) || 0)}
                  min="1"
                />
              </div>
              <div>
                <Label htmlFor="hoursPerWeek">Hours per week (per employee)</Label>
                <Input
                  id="hoursPerWeek"
                  type="number"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(parseInt(e.target.value) || 0)}
                  min="1"
                />
              </div>
              <div>
                <Label htmlFor="hourlyWage">Fully-loaded hourly wage ($)</Label>
                <Input
                  id="hourlyWage"
                  type="number"
                  value={hourlyWage}
                  onChange={(e) => setHourlyWage(parseInt(e.target.value) || 0)}
                  min="1"
                />
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg text-center">
              <p className="text-lg font-semibold text-gray-700 mb-2">Annual Cost of Manual Process:</p>
              <p className="text-3xl font-bold text-red-600">
                ${annualAutomationCost.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                This represents your opportunity cost for not automating
              </p>
            </div>

            <Button 
              onClick={handleEmailQuote}
              className="w-full bg-gradient-yellow text-navy font-bold hover:scale-105 transition-all duration-300"
            >
              Schedule Automation Scoping Call
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PricingCalculator;
