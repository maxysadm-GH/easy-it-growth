
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTAButton from '@/components/ui/cta-button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import {
  Settings,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  CheckCircle,
  BarChart3,
  Cog
} from "lucide-react";

const ERPMRPClient = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb className="mb-8">
              <BreadcrumbList className="text-white/80">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="hover:text-white">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/services" className="hover:text-white">Services</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">Manufacturing Excellence</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-yellow rounded-xl flex items-center justify-center">
                <Settings className="w-8 h-8 text-navy" />
              </div>
              <Badge className="bg-gradient-yellow text-navy font-bold px-4 py-2 text-lg">
                Case Study
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-6 drop-shadow-header">
              Manufacturing Excellence
              <span className="block text-gradient-yellow-end text-3xl lg:text-4xl mt-2">
                ERP & MRP Integration Success Story
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              How we helped a Los Angeles food manufacturer reduce downtime by 60% and transform 
              their operations through integrated ERP/MRP systems and real-time dashboards.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="border-2 border-red-200 bg-red-50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-poppins font-bold text-red-800 mb-6 flex items-center gap-3">
                    <Clock className="w-8 h-8" />
                    The Challenge
                  </h2>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Slow, siloed data across Fishbowl and QuickBooks Online</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Manual order syncing leading to costly errors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Compliance audit preparation taking weeks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>No real-time visibility into production schedules</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-poppins font-bold text-green-800 mb-6 flex items-center gap-3">
                    <CheckCircle className="w-8 h-8" />
                    MBACIO's Solution
                  </h2>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Secure, cloud-based ERP/MRP integration architecture</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Automated order syncing and inventory management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Real-time unified dashboards for all stakeholders</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive IT security and compliance framework</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Results Metrics */}
            <div className="bg-gradient-to-r from-navy to-deep-blue rounded-2xl p-8 text-white mb-16">
              <h2 className="text-3xl font-poppins font-bold text-center mb-8 text-gradient-yellow-end">
                Measurable Results
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient-yellow-end mb-2">60%</div>
                  <div className="text-sm text-gray-300">Reduction in Downtime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient-yellow-end mb-2">95%</div>
                  <div className="text-sm text-gray-300">Order Accuracy Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient-yellow-end mb-2">2 Days</div>
                  <div className="text-sm text-gray-300">Audit Preparation Time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient-yellow-end mb-2">$180K</div>
                  <div className="text-sm text-gray-300">Annual Cost Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Implementation */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-poppins font-bold text-navy mb-12 text-center">
              Implementation Details
            </h2>
            
            <div className="space-y-8">
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Cog className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-navy">System Integration</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We architected a secure, real-time integration between Fishbowl MRP and QuickBooks Online, 
                    eliminating manual data entry and ensuring synchronized inventory, orders, and financial data.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-navy mb-2">Before Integration</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Manual data entry between systems</li>
                        <li>• 4-6 hour daily reconciliation process</li>
                        <li>• Frequent inventory discrepancies</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">After Integration</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Real-time automated synchronization</li>
                        <li>• 15-minute daily verification process</li>
                        <li>• 99.5% inventory accuracy rate</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-navy">Real-Time Dashboards</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Custom Power BI dashboards provide instant visibility into production schedules, 
                    inventory levels, and financial performance with bilingual support for all stakeholders.
                  </p>
                  <div className="bg-navy/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">Key Dashboard Features</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div>
                        <strong>Production Metrics:</strong>
                        <ul className="ml-4 mt-1">
                          <li>• Real-time production status</li>
                          <li>• Quality control indicators</li>
                          <li>• Equipment utilization rates</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Financial Insights:</strong>
                        <ul className="ml-4 mt-1">
                          <li>• Cost per unit analysis</li>
                          <li>• Profit margin tracking</li>
                          <li>• Cash flow projections</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl font-inter italic text-gray-700 mb-8 leading-relaxed">
              "MBACIO transformed our operations completely. We went from spending hours on manual 
              data reconciliation to having real-time insights at our fingertips. The bilingual 
              support was crucial for our diverse team, and the compliance preparation went from 
              weeks to just days."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-yellow rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-navy" />
              </div>
              <div className="text-left">
                <div className="font-bold text-navy text-lg">Maria Rodriguez</div>
                <div className="text-gray-600">Operations Director</div>
                <div className="text-sm text-gray-500">LA Food Manufacturing Co.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus & Keywords */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-poppins font-bold text-navy mb-4">Industry Focus</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>California Manufacturing (Los Angeles, Orange County, Bay Area)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Contract Manufacturers & Food Production</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Electronics & Consumer Goods Manufacturing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Supply Chain & Distribution Centers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-poppins font-bold text-navy mb-4">Related Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>ERP Integration & Optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>MRP System Implementation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>IoT Sensor Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Supply Chain Dashboards</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Bilingual Production Reporting</span>
                    </li>
                  </ul>
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
            Ready to Transform Your Manufacturing Operations?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Get the same results as our LA manufacturing client. Let's discuss how MBACIO 
            can integrate your ERP/MRP systems and provide real-time visibility into your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <CTAButton 
              ctaId="book-assessment"
              variant="yellow"
              size="lg"
              className="text-xl px-10 py-6"
            />
            <CTAButton 
              customConfig={{
                text: "Calculate Your ROI",
                url: "/tools/automation-roi",
                type: "internal"
              }}
              variant="outline"
              size="lg"
              className="text-xl px-10 py-6 border-white text-white hover:bg-white hover:text-navy"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ERPMRPClient;
