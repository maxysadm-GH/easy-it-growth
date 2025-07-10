
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Factory, BarChart3, TrendingUp, Shield, AlertTriangle, Target, Clock, DollarSign, CheckCircle, Download } from 'lucide-react';
import BookingPopup from '../components/BookingPopup';

const ManufacturingAnalytics = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleScheduleAudit = () => {
    setIsBookingOpen(true);
  };

  const handleDownloadCalculator = () => {
    // This would link to a downloadable ROI calculator
    console.log('Download Smart Factory ROI Calculator');
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section - Problem Introduction */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-charcoal to-deep-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-red-600 text-white font-bold px-4 py-2 text-lg mb-6">
                Manufacturing Crisis Alert
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8">
                Your Manufacturing Data Is Costing You Millions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                While your competitors leverage real-time analytics to optimize every aspect of production, 
                fragmented systems and blind spots are quietly eroding your margins, delaying deliveries, 
                and putting your reputation at risk.
              </p>
              <div className="flex items-center justify-center gap-8 mb-12 text-lg">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  <span>15-25% Hidden Waste</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-red-400" />
                  <span>Hours of Daily Firefighting</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-red-400" />
                  <span>Shrinking Profit Margins</span>
                </div>
              </div>
              <Button 
                onClick={handleScheduleAudit}
                className="bg-gradient-yellow text-navy font-bold text-xl px-12 py-6 hover:scale-105 transition-transform duration-300"
              >
                Schedule Your Strategic Audit
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Deep Dive */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-center text-navy mb-16">
                The Manufacturing Intelligence Gap
              </h2>
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <Card className="border-2 border-red-200 bg-red-50">
                  <CardContent className="p-8">
                    <AlertTriangle className="w-12 h-12 text-red-600 mb-6" />
                    <h3 className="text-xl font-bold text-red-800 mb-4">Operational Blindness</h3>
                    <p className="text-gray-700 mb-4">
                      Your production data lives in silos—ERP systems, MES platforms, quality databases, 
                      and spreadsheets that never talk to each other.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Equipment efficiency rates unknown in real-time</li>
                      <li>• Quality issues discovered after damage is done</li>
                      <li>• Inventory levels misaligned with production reality</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-orange-200 bg-orange-50">
                  <CardContent className="p-8">
                    <Clock className="w-12 h-12 text-orange-600 mb-6" />
                    <h3 className="text-xl font-bold text-orange-800 mb-4">Reactive Management</h3>
                    <p className="text-gray-700 mb-4">
                      Your teams spend more time fighting fires than preventing them, 
                      constantly reacting to problems that predictive analytics could have flagged weeks ago.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Unplanned downtime costs $50,000 per hour</li>
                      <li>• Rush orders disrupt optimized schedules</li>
                      <li>• Manual reporting delays critical decisions</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-red-200 bg-red-50">
                  <CardContent className="p-8">
                    <TrendingUp className="w-12 h-12 text-red-600 mb-6" />
                    <h3 className="text-xl font-bold text-red-800 mb-4">Competitive Disadvantage</h3>
                    <p className="text-gray-700 mb-4">
                      While you're manually tracking performance, your competitors are using AI-driven 
                      insights to optimize every decision and capture market share.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• 15-30% higher production costs</li>
                      <li>• Slower response to market demands</li>
                      <li>• Customer satisfaction erosion</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <p className="text-xl text-gray-700 mb-8">
                  <strong>The Bottom Line:</strong> Every day without unified manufacturing intelligence 
                  costs you thousands in lost efficiency, missed opportunities, and competitive position.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="py-20 bg-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <Factory className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8">
                Manufacturing Analytics That Transform Operations
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                From our roots in Chicago's industrial heartland to clients across the nation, 
                we help manufacturers turn fragmented data into their most valuable strategic asset. 
                Our Manufacturing Analytics solution doesn't just report what happened—it predicts 
                what will happen and prescribes exactly what to do about it.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold text-accent mb-6">Unified Data Intelligence</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <span><strong>Real-time integration</strong> of ERP, MES, SCADA, and quality systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <span><strong>Predictive maintenance</strong> that prevents 80% of unplanned downtime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <span><strong>Quality trend analysis</strong> that catches defects before they reach customers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <span><strong>Supply chain optimization</strong> that reduces inventory costs by 25%</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-accent mb-6">Executive Decision Support</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <span><strong>Executive dashboards</strong> with KPIs that matter to your bottom line</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <span><strong>Automated reporting</strong> that saves 20 hours of manual work weekly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <span><strong>Scenario modeling</strong> for capacity planning and investment decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <span><strong>Mobile alerts</strong> that keep you informed of critical issues anywhere</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Section - Results */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-center text-navy mb-16">
                Proven Results Across Industries
              </h2>

              {/* Results Grid */}
              <div className="grid md:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">35%</div>
                  <div className="text-sm text-gray-600">Reduction in Manufacturing Costs</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">78%</div>
                  <div className="text-sm text-gray-600">Decrease in Unplanned Downtime</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">92%</div>
                  <div className="text-sm text-gray-600">Improvement in On-Time Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">$2.4M</div>
                  <div className="text-sm text-gray-600">Average Annual Savings</div>
                </div>
              </div>

              {/* Case Study Highlight */}
              <Card className="bg-gradient-to-r from-navy to-deep-blue text-white p-8 mb-16">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <Badge className="bg-accent text-navy font-bold px-3 py-1 mb-4">Client Success</Badge>
                      <h3 className="text-2xl font-bold mb-4">Automotive Parts Manufacturer</h3>
                      <p className="text-gray-200 mb-4">
                        A $500M automotive supplier was losing $180,000 monthly to production inefficiencies 
                        and quality issues. Our Manufacturing Analytics solution integrated their 
                        12 production lines with real-time monitoring and predictive quality control.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-accent" />
                          <span>Eliminated $2.1M in annual waste and rework</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-accent" />
                          <span>Achieved 99.7% on-time delivery rate</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-accent" />
                          <span>Reduced quality complaints by 85%</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-6xl font-bold text-accent mb-2">18 Months</div>
                      <div className="text-lg text-gray-200">ROI Payback Period</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Industries We Serve */}
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-accent/20 hover:border-accent transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-bold text-navy mb-3">Automotive & Aerospace</h4>
                    <p className="text-sm text-gray-600">Precision manufacturing with zero-defect requirements</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-accent/20 hover:border-accent transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-bold text-navy mb-3">Food & Beverage</h4>
                    <p className="text-sm text-gray-600">Quality control and traceability for consumer safety</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-accent/20 hover:border-accent transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-bold text-navy mb-3">Electronics & Medical</h4>
                    <p className="text-sm text-gray-600">High-precision manufacturing with regulatory compliance</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8">
              Stop Losing Money to Inefficient Manufacturing
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Every day you delay implementing Manufacturing Analytics costs you thousands in lost efficiency. 
              Let our experts conduct a comprehensive audit of your current systems and show you exactly 
              where you're losing money—and how to stop it.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={handleScheduleAudit}
                className="bg-gradient-yellow text-navy font-bold text-xl px-12 py-6 hover:scale-105 transition-transform duration-300"
              >
                Schedule Your Strategic Audit
              </Button>
              <Button 
                onClick={handleDownloadCalculator}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy font-bold text-xl px-12 py-6 transition-all duration-300 flex items-center gap-3"
              >
                <Download className="w-5 h-5" />
                Download: Smart Factory ROI Calculator
              </Button>
            </div>
            <p className="text-sm text-gray-300 mt-6">
              Free 30-minute consultation • No obligations • Immediate insights
            </p>
          </div>
        </section>

        <Footer />
      </div>

      <BookingPopup 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
};

export default ManufacturingAnalytics;
