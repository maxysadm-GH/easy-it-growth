
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Factory, BarChart3, TrendingDown, Shield, AlertTriangle, Target, Clock, DollarSign, CheckCircle, Download, PhoneCall } from 'lucide-react';
import BookingPopup from '../components/BookingPopup';

const ManufacturingAnalytics = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookDiscoveryCall = () => {
    setIsBookingOpen(true);
  };

  const handleDownloadReport = () => {
    // Navigate to P&L Impact Report page
    window.location.href = '/tools/pl-impact-report';
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section - Financial Pain Point */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-charcoal to-deep-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-red-600 text-white font-bold px-4 py-2 text-lg mb-6">
                P&L Impact Alert
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8">
                Manufacturing Analytics That Drive Profitability
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                Every point of OEE you gain or scrap you reduce drops directly to your bottom line. 
                We help you find those points by connecting machine data to clear financial impact 
                on your P&L statement.
              </p>
              <div className="flex items-center justify-center gap-8 mb-12 text-lg">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-6 h-6 text-accent" />
                  <span>3-7 Point OEE Improvement</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-accent" />
                  <span>10-20% Scrap Rate Reduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-accent" />
                  <span>15% Lower MRO Spend</span>
                </div>
              </div>
              <Button 
                onClick={handleBookDiscoveryCall}
                className="bg-gradient-yellow text-navy font-bold text-xl px-12 py-6 hover:scale-105 transition-transform duration-300 flex items-center gap-3 mx-auto"
              >
                <PhoneCall className="w-5 h-5" />
                Book a 15-Min OEE Discovery Call
              </Button>
            </div>
          </div>
        </section>

        {/* Challenge Section - P&L Drags */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-center text-navy mb-16">
                Common Drags on Your P&L
              </h2>
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <Card className="border-2 border-red-200 bg-red-50">
                  <CardContent className="p-8">
                    <AlertTriangle className="w-12 h-12 text-red-600 mb-6" />
                    <h3 className="text-xl font-bold text-red-800 mb-4">Unexplained Variances in Cost-Per-Unit</h3>
                    <p className="text-gray-700 mb-4">
                      Your standard cost models say one thing, but your monthly P&L says another. 
                      Hidden scrap, downtime, and waste create variances that erode your planned margins.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Actual throughput 15-25% below theoretical capacity</li>
                      <li>• Material yield rates lower than engineering specifications</li>
                      <li>• Labor efficiency calculations missing true downtime impact</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-orange-200 bg-orange-50">
                  <CardContent className="p-8">
                    <Shield className="w-12 h-12 text-orange-600 mb-6" />
                    <h3 className="text-xl font-bold text-orange-800 mb-4">High Cost of Quality</h3>
                    <p className="text-gray-700 mb-4">
                      Every product recall, warranty claim, and returned shipment eats into your margin. 
                      Reactive inspection catches problems after value has already been added.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Quality costs typically 8-15% of revenue in reactive environments</li>
                      <li>• Warranty reserves growing faster than sales growth</li>
                      <li>• Customer complaints tied to process variations</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-red-200 bg-red-50">
                  <CardContent className="p-8">
                    <Clock className="w-12 h-12 text-red-600 mb-6" />
                    <h3 className="text-xl font-bold text-red-800 mb-4">Unplanned Maintenance Expenses</h3>
                    <p className="text-gray-700 mb-4">
                      Reactive maintenance costs 3-5x more than predictive approaches. 
                      Emergency repairs disrupt schedules and create expedited shipping costs.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• MRO spending 15-20% above industry benchmarks</li>
                      <li>• Rush orders increase procurement costs by 25-40%</li>
                      <li>• Overtime premiums during breakdown recovery</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <p className="text-xl text-gray-700 mb-8">
                  <strong>The Financial Reality:</strong> A typical $25M manufacturer loses $180,000-$400,000 
                  annually to these operational inefficiencies. The data to prevent this already exists 
                  in your equipment—it just needs to be connected and analyzed properly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section - Our Approach */}
        <section className="py-20 bg-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <Factory className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8">
                Our Approach: From Machine Data to Boardroom Clarity
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                From our roots in Chicago's industrial heartland to clients across the nation, 
                we turn machine-level data into executive-ready financial insights that directly 
                impact your P&L performance.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
              <div className="text-center">
                <div className="bg-accent text-navy rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-2xl font-bold text-accent mb-6">Connect & Capture</h3>
                <p className="text-gray-200 leading-relaxed">
                  We integrate with your existing PLCs, SCADA systems, and sensors to capture 
                  real-time production data. No disruption to operations—we work with what you have 
                  to create a unified data foundation for calculating true OEE and throughput metrics.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-accent text-navy rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-2xl font-bold text-accent mb-6">Analyze & Diagnose</h3>
                <p className="text-gray-200 leading-relaxed">
                  Our algorithms identify the biggest contributors to low OEE, calculate true scrap rates, 
                  and correlate quality issues with process parameters. We trace problems to their root 
                  causes—whether it's material variability, equipment drift, or operator techniques.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-accent text-navy rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-2xl font-bold text-accent mb-6">Report & Recommend</h3>
                <p className="text-gray-200 leading-relaxed">
                  Executive dashboards show OEE trends, cost-per-unit variances, and predicted 
                  maintenance needs. Every metric ties back to financial impact—so you can prioritize 
                  improvements based on ROI and present clear business cases for capital investments.
                </p>
              </div>
            </div>

            <div className="bg-deep-blue/50 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-accent mb-4 text-center">Key Metrics We Track</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span><strong>Overall Equipment Effectiveness (OEE)</strong> by line and shift</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span><strong>Scrap Rate</strong> with cost impact and trend analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span><strong>Cost of Quality</strong> including prevention, appraisal, and failure costs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span><strong>Predictive Maintenance</strong> alerts with cost-benefit analysis</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span><strong>Yield</strong> optimization opportunities by product and process</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span><strong>Throughput</strong> bottleneck identification and capacity planning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span><strong>Cost-Per-Unit</strong> variance tracking with root cause analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span><strong>Inventory Turns</strong> optimization through demand forecasting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section - Financial Impact */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-center text-navy mb-16">
                Expected Financial & Operational Impact
              </h2>

              {/* Results Grid */}
              <div className="grid md:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">3-7</div>
                  <div className="text-sm text-gray-600">Point OEE Improvement<br/>Within 12 Months</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">10-20%</div>
                  <div className="text-sm text-gray-600">Scrap Rate Reduction<br/>Through Process Control</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">15%</div>
                  <div className="text-sm text-gray-600">Lower MRO Spend<br/>Via Predictive Maintenance</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">$75K-$250K</div>
                  <div className="text-sm text-gray-600">Annual Savings<br/>Per Production Line</div>
                </div>
              </div>

              {/* Detailed Impact Breakdown */}
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                <Card className="border-2 border-accent/20">
                  <CardContent className="p-8">
                    <Target className="w-12 h-12 text-accent mb-6" />
                    <h3 className="text-xl font-bold text-navy mb-4">OEE Improvement</h3>
                    <p className="text-gray-700 mb-4">
                      Our clients typically see a 3-7 point improvement in OEE within the first 12 months. 
                      Each point of OEE improvement on a $25M revenue line can add $125,000-$200,000 in 
                      additional throughput capacity.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Availability improvements through predictive maintenance</li>
                      <li>• Performance gains via bottleneck elimination</li>
                      <li>• Quality rate increases through process optimization</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20">
                  <CardContent className="p-8">
                    <BarChart3 className="w-12 h-12 text-accent mb-6" />
                    <h3 className="text-xl font-bold text-navy mb-4">Scrap Reduction</h3>
                    <p className="text-gray-700 mb-4">
                      Identify and eliminate sources of waste, often leading to a 10-20% reduction in scrap rate. 
                      For manufacturers with 3-5% scrap rates, this improvement directly adds 0.6-1.0% to gross margin.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Real-time quality monitoring prevents defect propagation</li>
                      <li>• Statistical process control reduces variation</li>
                      <li>• Yield optimization maximizes material utilization</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20">
                  <CardContent className="p-8">
                    <DollarSign className="w-12 h-12 text-accent mb-6" />
                    <h3 className="text-xl font-bold text-navy mb-4">Maintenance Costs</h3>
                    <p className="text-gray-700 mb-4">
                      Move from reactive repairs to predictive maintenance, reducing unplanned downtime 
                      and lowering MRO spend by up to 15%. Emergency repair costs drop by 60-80%.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• Condition-based maintenance scheduling</li>
                      <li>• Parts inventory optimization</li>
                      <li>• Extended equipment lifecycle through proper care</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Case Study Highlight */}
              <Card className="bg-gradient-to-r from-navy to-deep-blue text-white p-8">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <Badge className="bg-accent text-navy font-bold px-3 py-1 mb-4">Client Result</Badge>
                      <h3 className="text-2xl font-bold mb-4">Midwest Food Manufacturer - $42M Revenue</h3>
                      <p className="text-gray-200 mb-4">
                        This food manufacturer was experiencing 5.1% scrap rates and 65% OEE across two production lines. 
                        Our manufacturing analytics platform identified the root causes and provided the data 
                        needed to implement targeted improvements.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-accent" />
                          <span>OEE increased from 65% to 72% (7-point improvement)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-accent" />
                          <span>Scrap rate reduced from 5.1% to 3.2% (37% reduction)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-accent" />
                          <span>Unplanned downtime decreased by 52%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-accent" />
                          <span>Annual savings: $385,000 (ROI achieved in 11 months)</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-6xl font-bold text-accent mb-2">11 Months</div>
                      <div className="text-lg text-gray-200">Payback Period</div>
                      <div className="text-3xl font-bold text-white mt-4">$385,000</div>
                      <div className="text-sm text-gray-300">Annual Savings</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8">
              Start Improving Your OEE and Cost-Per-Unit Today
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
              In a 15-minute discovery call, we'll assess your current OEE performance and identify 
              the top 2-3 opportunities for immediate cost reduction. No generic sales pitch—just 
              specific insights based on your production data and P&L goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={handleBookDiscoveryCall}
                className="bg-gradient-yellow text-navy font-bold text-xl px-12 py-6 hover:scale-105 transition-transform duration-300 flex items-center gap-3"
              >
                <PhoneCall className="w-5 h-5" />
                Book a 15-Min OEE Discovery Call
              </Button>
              <Button 
                onClick={handleDownloadReport}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy font-bold text-xl px-12 py-6 transition-all duration-300 flex items-center gap-3"
              >
                <Download className="w-5 h-5" />
                Download Sample P&L Impact Report
              </Button>
            </div>
            <p className="text-sm text-gray-300 mt-6">
              Free consultation • OEE assessment included • Specific savings opportunities identified
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
