
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, BarChart3, Settings, Shield, DollarSign, Clock } from 'lucide-react';

const ManufacturingAnalytics = () => {
  const handleBooking = () => {
    window.open('https://outlook.office.com/book/MBACIOConsultation@mbacio.com/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Manufacturing Analytics & Intelligence</h1>
          <p className="text-xl max-w-4xl mx-auto text-gray-300 mb-8">
            Transform your manufacturing operations with real-time OEE tracking, scrap rate analysis, 
            and cost of quality insights. Based in Chicago, serving manufacturers nationwide with 
            enterprise-grade analytics solutions.
          </p>
          <Button 
            onClick={handleBooking}
            className="bg-gradient-yellow text-navy font-bold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300"
          >
            Schedule Manufacturing Assessment
          </Button>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-navy">Critical Manufacturing KPIs We Track</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="w-12 h-12 mx-auto text-accent mb-4" />
                <CardTitle>Overall Equipment Effectiveness (OEE)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Monitor availability, performance, and quality in real-time</p>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-accent">85%+</p>
                  <p className="text-sm text-gray-600">Average OEE improvement</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BarChart3 className="w-12 h-12 mx-auto text-accent mb-4" />
                <CardTitle>Scrap Rate Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Track and reduce material waste across production lines</p>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-accent">3-7%</p>
                  <p className="text-sm text-gray-600">Typical scrap reduction</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <DollarSign className="w-12 h-12 mx-auto text-accent mb-4" />
                <CardTitle>Cost of Quality (COQ)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Measure prevention, appraisal, and failure costs</p>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-2xl font-bold text-accent">$250K+</p>
                  <p className="text-sm text-gray-600">Average annual savings</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-navy">Manufacturing Intelligence Platform</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-navy">Real-Time Production Monitoring</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Live OEE Dashboard:</strong> Track availability, performance, and quality metrics across all production lines
                  </div>
                </li>
                <li className="flex items-start">
                  <BarChart3 className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Downtime Analysis:</strong> Identify bottlenecks and optimize changeover times
                  </div>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Throughput Optimization:</strong> Maximize production efficiency and reduce cycle times
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-navy">Quality & Cost Management</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Quality Control Integration:</strong> Connect inspection data to production metrics
                  </div>
                </li>
                <li className="flex items-start">
                  <DollarSign className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Cost Tracking:</strong> Monitor material costs, labor efficiency, and overhead allocation
                  </div>
                </li>
                <li className="flex items-start">
                  <Settings className="w-6 h-6 text-accent mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Predictive Maintenance:</strong> Reduce unplanned downtime with data-driven insights
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Quantified Manufacturing ROI</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-accent mb-2">15-25%</h3>
              <p>OEE Improvement</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-accent mb-2">$50K-$200K</h3>
              <p>Annual Waste Reduction</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-accent mb-2">6-12 months</h3>
              <p>Typical Payback Period</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-accent mb-2">24/7</h3>
              <p>Real-time Monitoring</p>
            </div>
          </div>
          <Button 
            onClick={handleBooking}
            className="bg-gradient-yellow text-navy font-bold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300"
          >
            Get Your Manufacturing ROI Analysis
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManufacturingAnalytics;
