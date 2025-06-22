
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';
import { DollarSign, Clock, Shield, Users, FileText, TrendingUp } from 'lucide-react';

const CPALawFirmCharts = () => {
  const workflowEfficiencyData = [
    { task: 'Client Intake', manual: 45, optimized: 12, saved: 33 },
    { task: 'Document Review', manual: 120, optimized: 25, saved: 95 },
    { task: 'Billing Process', manual: 30, optimized: 5, saved: 25 },
    { task: 'Compliance Reporting', manual: 180, optimized: 20, saved: 160 },
    { task: 'Client Communication', manual: 60, optimized: 15, saved: 45 }
  ];

  const financialDashboardData = [
    { month: 'Jan', revenue: 85000, expenses: 65000, profit: 20000 },
    { month: 'Feb', revenue: 92000, expenses: 68000, profit: 24000 },
    { month: 'Mar', revenue: 88000, expenses: 64000, profit: 24000 },
    { month: 'Apr', revenue: 105000, expenses: 70000, profit: 35000 },
    { month: 'May', revenue: 118000, expenses: 72000, profit: 46000 },
    { month: 'Jun', revenue: 125000, expenses: 75000, profit: 50000 }
  ];

  const timeSavingsBreakdown = [
    { category: 'Administrative Tasks', hours: 120, color: '#112d4e' },
    { category: 'Client Communications', hours: 80, color: '#1a4578' },
    { category: 'Document Processing', hours: 95, color: '#FACF39' },
    { category: 'Reporting & Compliance', hours: 160, color: '#f9c307' },
    { category: 'Billing & Collections', hours: 45, color: '#fbdb6b' }
  ];

  const complianceMetrics = [
    { metric: 'Audit Readiness', current: 95, target: 98 },
    { metric: 'Document Security', current: 92, target: 95 },
    { metric: 'Client Data Protection', current: 88, target: 95 },
    { metric: 'Regulatory Compliance', current: 90, target: 95 }
  ];

  return (
    <div className="space-y-8">
      {/* Workflow Efficiency */}
      <Card className="border border-accent/20 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-poppins text-navy flex items-center justify-center gap-3">
            <Clock className="w-6 h-6 text-accent" />
            Time Savings Per Task (Hours/Month)
          </CardTitle>
          <p className="text-muted-foreground font-inter">
            See how optimization transforms your daily operations
          </p>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              manual: { label: "Current Process", color: "#ef4444" },
              optimized: { label: "Optimized Process", color: "#FACF39" }
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={workflowEfficiencyData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <XAxis 
                  dataKey="task" 
                  tick={{ fontSize: 11, fill: '#112d4e' }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: '#112d4e' }}
                  label={{ value: 'Hours', angle: -90, position: 'insideLeft' }}
                />
                <ChartTooltip 
                  content={<ChartTooltipContent 
                    formatter={(value, name) => [
                      `${value} hours/month`, 
                      name === 'manual' ? 'Current Process' : 'Optimized Process'
                    ]}
                  />} 
                />
                <Bar dataKey="manual" fill="#ef4444" radius={[4, 4, 0, 0]} />
                <Bar dataKey="optimized" fill="#FACF39" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          <div className="mt-4 p-4 bg-gradient-to-r from-accent/10 to-transparent rounded-lg">
            <p className="text-navy font-semibold text-center font-inter">
              Total monthly time savings: 358 hours = $35,800 in billable time recovery
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Financial Dashboard Preview */}
      <Card className="border border-accent/20 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-poppins text-navy flex items-center justify-center gap-3">
            <DollarSign className="w-6 h-6 text-green-500" />
            Financial Performance Dashboard
          </CardTitle>
          <p className="text-muted-foreground font-inter">
            Real-time visibility into your firm's financial health
          </p>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              revenue: { label: "Revenue", color: "#22c55e" },
              profit: { label: "Profit", color: "#FACF39" }
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={financialDashboardData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12, fill: '#112d4e' }}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: '#112d4e' }}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                />
                <ChartTooltip 
                  content={<ChartTooltipContent 
                    formatter={(value, name) => [
                      `$${Number(value).toLocaleString()}`, 
                      name === 'revenue' ? 'Revenue' : 'Profit'
                    ]}
                  />} 
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#22c55e" 
                  strokeWidth={3}
                  dot={{ fill: '#22c55e', strokeWidth: 2, r: 5 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="profit" 
                  stroke="#FACF39" 
                  strokeWidth={3}
                  dot={{ fill: '#FACF39', strokeWidth: 2, r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-2xl font-bold text-green-600">47%</p>
              <p className="text-sm text-gray-600 font-inter">Profit Increase</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold text-blue-600">$125K</p>
              <p className="text-sm text-gray-600 font-inter">Monthly Revenue</p>
            </div>
            <div className="text-center p-4 bg-accent/10 rounded-lg">
              <p className="text-2xl font-bold text-accent">40%</p>
              <p className="text-sm text-gray-600 font-inter">Profit Margin</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Time Savings Breakdown */}
      <Card className="border border-accent/20 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-poppins text-navy flex items-center justify-center gap-3">
            <TrendingUp className="w-6 h-6 text-accent" />
            Monthly Time Savings by Category
          </CardTitle>
          <p className="text-muted-foreground font-inter">
            Where your efficiency gains come from
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <ChartContainer
              config={{
                hours: { label: "Hours Saved", color: "hsl(var(--navy))" }
              }}
              className="h-64"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={timeSavingsBreakdown}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="hours"
                    label={({ name, hours }) => `${hours}h`}
                  >
                    {timeSavingsBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip 
                    content={<ChartTooltipContent 
                      formatter={(value, name) => [`${value} hours/month`, "Time Saved"]}
                    />} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="space-y-3">
              {timeSavingsBreakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-inter text-gray-700 text-sm">{item.category}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-navy">{item.hours}h</span>
                    <p className="text-xs text-gray-500">${(item.hours * 100).toLocaleString()}/mo</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CPALawFirmCharts;
