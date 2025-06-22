
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';
import { Shield, AlertTriangle, DollarSign, TrendingDown } from 'lucide-react';

const CyberSecurityCharts = () => {
  const costComparisonData = [
    { category: 'Prevention Investment', amount: 48000, color: '#FACF39' },
    { category: 'Breach Cost (Avoided)', amount: 2400000, color: '#112d4e' }
  ];

  const timelineData = [
    { day: 'Day 1', impact: 10, label: 'Initial Breach' },
    { day: 'Day 2', impact: 35, label: 'Systems Compromised' },
    { day: 'Day 3', impact: 60, label: 'Client Data Exposed' },
    { day: 'Day 4', impact: 80, label: 'Operations Halted' },
    { day: 'Day 5', impact: 90, label: 'Media Coverage' },
    { day: 'Day 6', impact: 95, label: 'Regulatory Notice' },
    { day: 'Day 7', impact: 98, label: 'Client Exodus Begins' },
    { day: 'Day 8', impact: 100, label: 'Full Impact Realized' }
  ];

  const hiddenCostsData = [
    { name: 'Direct Costs', value: 30, color: '#112d4e' },
    { name: 'Lost Revenue', value: 25, color: '#1a4578' },
    { name: 'Reputation Damage', value: 20, color: '#FACF39' },
    { name: 'Legal & Compliance', value: 15, color: '#f9c307' },
    { name: 'Recovery Time', value: 10, color: '#fbdb6b' }
  ];

  return (
    <div className="space-y-8">
      {/* Cost Comparison */}
      <Card className="border border-accent/20 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-poppins text-navy flex items-center justify-center gap-3">
            <DollarSign className="w-6 h-6 text-accent" />
            Prevention vs. Breach Cost Reality
          </CardTitle>
          <p className="text-muted-foreground font-inter">
            The stark financial reality of cybersecurity investment
          </p>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              amount: { label: "Amount ($)", color: "hsl(var(--navy))" }
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={costComparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <XAxis 
                  dataKey="category" 
                  tick={{ fontSize: 12, fill: '#112d4e' }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: '#112d4e' }}
                  tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                />
                <ChartTooltip 
                  content={<ChartTooltipContent 
                    formatter={(value) => [`$${Number(value).toLocaleString()}`, "Cost"]}
                  />} 
                />
                <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                  {costComparisonData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          <div className="mt-4 p-4 bg-gradient-to-r from-accent/10 to-transparent rounded-lg">
            <p className="text-navy font-semibold text-center font-inter">
              50x ROI: Every $1 invested in prevention saves $50 in breach costs
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Attack Timeline */}
      <Card className="border border-accent/20 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-poppins text-navy flex items-center justify-center gap-3">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            8-Day Breach Timeline: How Quickly Things Escalate
          </CardTitle>
          <p className="text-muted-foreground font-inter">
            The rapid progression from initial breach to business catastrophe
          </p>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              impact: { label: "Impact (%)", color: "#ef4444" }
            }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timelineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis 
                  dataKey="day" 
                  tick={{ fontSize: 12, fill: '#112d4e' }}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: '#112d4e' }}
                  domain={[0, 100]}
                  tickFormatter={(value) => `${value}%`}
                />
                <ChartTooltip 
                  content={<ChartTooltipContent 
                    formatter={(value, name, props) => [
                      `${value}% Impact`, 
                      props.payload?.label || "Impact"
                    ]}
                  />} 
                />
                <Line 
                  type="monotone" 
                  dataKey="impact" 
                  stroke="#ef4444" 
                  strokeWidth={3}
                  dot={{ fill: '#ef4444', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Hidden Costs Breakdown */}
      <Card className="border border-accent/20 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-poppins text-navy flex items-center justify-center gap-3">
            <TrendingDown className="w-6 h-6 text-red-500" />
            The Hidden Iceberg: True Cost Breakdown
          </CardTitle>
          <p className="text-muted-foreground font-inter">
            Direct costs are just the tip of the iceberg
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <ChartContainer
              config={{
                value: { label: "Percentage", color: "hsl(var(--navy))" }
              }}
              className="h-64"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={hiddenCostsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {hiddenCostsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip 
                    content={<ChartTooltipContent 
                      formatter={(value) => [`${value}%`, "of Total Cost"]}
                    />} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="space-y-3">
              {hiddenCostsData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-inter text-gray-700 flex-1">{item.name}</span>
                  <span className="font-bold text-navy">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CyberSecurityCharts;
