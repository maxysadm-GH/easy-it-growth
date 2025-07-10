
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const PricingCalculator = () => {
  const [employees, setEmployees] = useState(25);
  const [taskEmployees, setTaskEmployees] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [hourlyWage, setHourlyWage] = useState(25);

  const monthlyRange = {
    min: Math.round((employees * 150) + (employees * 50)),
    max: Math.round((employees * 200) + (employees * 80))
  };

  const annualCost = taskEmployees * hoursPerWeek * 52 * hourlyWage;

  const handleBooking = () => {
    window.open('https://outlook.office.com/book/MBACIOConsultation@mbacio.com/', '_blank');
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Service Tier Calculator */}
      <Card>
        <CardHeader>
          <CardTitle>Estimate Your Monthly Service Tier Investment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="employees">Number of Employees / Users</Label>
              <Input
                id="employees"
                type="number"
                value={employees}
                onChange={(e) => setEmployees(parseInt(e.target.value) || 0)}
                min="1"
                max="500"
              />
            </div>
            
            <div className="bg-accent/10 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-2">Your Estimated Monthly Investment Range</p>
              <p className="text-2xl font-bold text-accent">
                ~${monthlyRange.min.toLocaleString()} - ${monthlyRange.max.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">per month</p>
            </div>

            <Button 
              onClick={handleBooking}
              className="w-full bg-gradient-yellow text-navy font-bold hover:scale-105 transition-all duration-300"
            >
              Email My Detailed Quote & Comparison
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Automation ROI Calculator */}
      <Card>
        <CardHeader>
          <CardTitle>Calculate the ROI of a Custom Automation Project</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="taskEmployees">Number of employees performing this task:</Label>
              <Input
                id="taskEmployees"
                type="number"
                value={taskEmployees}
                onChange={(e) => setTaskEmployees(parseInt(e.target.value) || 0)}
                min="1"
              />
            </div>
            
            <div>
              <Label htmlFor="hoursPerWeek">Average hours per week spent on this task (per employee):</Label>
              <Input
                id="hoursPerWeek"
                type="number"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(parseInt(e.target.value) || 0)}
                min="1"
              />
            </div>
            
            <div>
              <Label htmlFor="hourlyWage">Average fully-loaded hourly wage of these employees ($):</Label>
              <Input
                id="hourlyWage"
                type="number"
                value={hourlyWage}
                onChange={(e) => setHourlyWage(parseInt(e.target.value) || 0)}
                min="1"
              />
            </div>

            <div className="bg-red-50 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-2">Estimated Annual Cost of Inaction:</p>
              <p className="text-2xl font-bold text-red-600">
                ${annualCost.toLocaleString()}
              </p>
            </div>

            <Button 
              onClick={handleBooking}
              className="w-full bg-gradient-yellow text-navy font-bold hover:scale-105 transition-all duration-300"
            >
              Book a Scoping Call to Validate Your ROI
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PricingCalculator;
