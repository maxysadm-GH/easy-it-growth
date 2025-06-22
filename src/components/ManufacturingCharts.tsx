
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, Clock, Cog, Target } from 'lucide-react';

const ManufacturingCharts = () => {
  const processEfficiencyData = [
    { process: 'Order Processing', manual: 120, automated: 15, improvement: 88 },
    { process: 'Inventory Management', manual: 180, automated: 30, improvement: 83 },
    { process: 'Quality Control', manual: 90, automated: 20, improvement: 78 },
    { process: 'Reporting', manual: 240, automated: 10, improvement: 96 }
  ];

  const roiTimelineData = [
    { month: 'Month 1', investment: -50000, savings: 0, netROI: -50000 },
    { month: 'Month 3', investment: -50000, savings: 15000, netROI: -35000 },
    { month: 'Month 6', investment: -50000, savings: 45000, netROI: -5000 },
    { month: 'Month 9', investment: -50000, savings: 80000, netROI: 30000 },
    { month: 'Month 12', investment: -50000, savings: 120000, netROI: 70000 },
    { month: 'Month 18', investment: -50000, savings: 200000, netROI: 150000 }
  ];

  const productivityMetrics = [
    { metric: 'Units/Hour', before: 45, after: 78, target: 80 },
    { metric: 'Error Rate %', before: 5.2, after: 1.1, target: 1.0 },
    { metric: 'Downtime Hours', before: 12, after: 3, target: 2 },
    { metric: 'Setup Time (min)', before: 35, after: 8, target: 5 }
  ];

  return (
    <div className="space-y-8">
      {/* Process Efficiency Comparison */}
      <Card className="border border-accent/20 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-poppins text-navy flex items-center justify-center gap-3">
            <Clock className="w-6 h-6 text-accent" />
            Time Savings: Manual vs. Automated Processes
          </CardTitle>
          <p className="text-muted-foreground font-inter">
            See how automation transforms your daily operations
          </p>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              manual: { label: "Manual (minutes)", color: "#ef4444" },
              automated: { label: "Automated (minutes)", color: "#FACF39" }
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={processEfficiencyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis 
                  dataKey="process" 
                  tick={{ fontSize: 12, fill: '#112d4e' }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: '#112d4e' }}
                  label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }}
                />
                <ChartTooltip 
                  content={<ChartTooltipContent 
                    formatter={(value, name) => [
                      `${value} minutes`, 
                      name === 'manual' ? 'Manual Process' : 'Automated Process'
                    ]}
                  />} 
                />
                <Bar dataKey="manual" fill="#ef4444" radius={[4, 4, 0, 0]} />
                <Bar dataKey="automated" fill="#FACF39" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          <div className="mt-4 p-4 bg-gradient-to-r from-accent/10 to-transparent rounded-lg">
            <p className="text-navy font-semibold text-center font-inter">
              Average 86% time reduction across all processes
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ROI Timeline */}
      <Card className="border border-accent/20 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-poppins text-navy flex items-center justify-center gap-3">
            <TrendingUp className="w-6 h-6 text-green-500" />
            Investment ROI Over Time
          </CardTitle>
          <p className="text-muted-foreground font-inter">
            When does your automation investment start paying for itself?
          </p>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              netROI: { label: "Net ROI ($)", color: "#22c55e" }
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={roiTimelineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
                    formatter={(value) => [`$${Number(value).toLocaleString()}`, "Net ROI"]}
                  />} 
                />
                <Area 
                  type="monotone" 
                  dataKey="netROI" 
                  stroke="#22c55e" 
                  fill="#22c55e" 
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
          <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-transparent rounded-lg border-l-4 border-green-500">
            <p className="text-navy font-semibold text-center font-inter">
              Break-even at 6 months, 300% ROI by month 18
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Productivity Metrics Dashboard */}
      <Card className="border border-accent/20 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-poppins text-navy flex items-center justify-center gap-3">
            <Target className="w-6 h-6 text-accent" />
            Key Performance Indicators: Before vs. After
          </CardTitle>
          <p className="text-muted-foreground font-inter">
            Real performance improvements from our client implementations
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {productivityMetrics.map((metric, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg border">
                <h4 className="font-poppins font-bold text-navy mb-4 text-center">{metric.metric}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 font-inter">Before:</span>
                    <span className="font-bold text-red-600">{metric.before}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 font-inter">After:</span>
                    <span className="font-bold text-green-600">{metric.after}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 font-inter">Target:</span>
                    <span className="font-bold text-accent">{metric.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-gradient-to-r from-accent to-green-500 h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${Math.min(((metric.before - metric.after) / metric.before) * 100, 100)}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManufacturingCharts;
