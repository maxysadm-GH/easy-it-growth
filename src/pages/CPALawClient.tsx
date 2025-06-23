
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
  FileText,
  TrendingUp,
  Shield,
  Clock,
  Users,
  CheckCircle,
  Lock,
  Search,
  DollarSign
} from "lucide-react";

const CPALawClient = () => {
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
                  <BreadcrumbPage className="text-white">CPA & Professional Services</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-yellow rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-navy" />
              </div>
              <Badge className="bg-gradient-yellow text-navy font-bold px-4 py-2 text-lg">
                Case Study
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-6 drop-shadow-header">
              Professional Services Excellence
              <span className="block text-gradient-yellow-end text-3xl lg:text-4xl mt-2">
                From Paper to Profit Digital Transformation
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              How we helped a mid-sized Chicago law firm achieve 22% productivity increase and 
              dramatically reduce risk through automated documentation and encrypted client data solutions.
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
                      <span>Manual documentation processes slowing case preparation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Inefficient discovery workflows increasing client costs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Security vulnerabilities in client data management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Lack of comprehensive encryption for confidential data</span>
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
                      <span>Automated documentation audit system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Discovery acceleration workflows</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Encrypted client data platform</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive compliance and security framework</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Results Metrics */}
            <div className="bg-gradient-to-r from-navy to-deep-blue rounded-2xl p-8 text-white mb-16">
              <h2 className="text-3xl font-poppins font-bold text-center mb-8 text-gradient-yellow-end">
                Transformation Results
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient-yellow-end mb-2">22%</div>
                  <div className="text-sm text-gray-300">Productivity Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient-yellow-end mb-2">75%</div>
                  <div className="text-sm text-gray-300">Faster Discovery Process</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient-yellow-end mb-2">100%</div>
                  <div className="text-sm text-gray-300">Data Encryption Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient-yellow-end mb-2">$95K</div>
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
              Implementation Strategy
            </h2>
            
            <div className="space-y-8">
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-navy">Documentation Automation</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Implemented intelligent document processing workflows that automatically categorize, 
                    index, and audit legal documents, reducing manual review time by 60%.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-navy mb-2">Before Automation</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 8-12 hours per case for document review</li>
                        <li>• Manual categorization and filing</li>
                        <li>• High risk of human error</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">After Automation</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• 3-4 hours per case with AI assistance</li>
                        <li>• Automated categorization and indexing</li>
                        <li>• 95% accuracy in document processing</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Search className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-navy">Discovery Acceleration</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Advanced search algorithms and AI-powered document analysis streamlined the discovery 
                    process, allowing attorneys to focus on strategy rather than document management.
                  </p>
                  <div className="bg-navy/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div>
                        <strong>Smart Search:</strong>
                        <ul className="ml-4 mt-1">
                          <li>• Natural language queries</li>
                          <li>• Contextual document ranking</li>
                          <li>• Cross-reference identification</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Workflow Automation:</strong>
                        <ul className="ml-4 mt-1">
                          <li>• Automated privilege logs</li>
                          <li>• Batch document processing</li>
                          <li>• Timeline generation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Lock className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-navy">Complete Data Encryption</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Deployed end-to-end encryption for all client data, ensuring complete confidentiality 
                    and compliance with legal industry standards and regulations.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Security Measures</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                      <div>
                        <ul className="space-y-1">
                          <li>• AES-256 encryption at rest</li>
                          <li>• TLS 1.3 for data in transit</li>
                          <li>• Multi-factor authentication</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-1">
                          <li>• Role-based access controls</li>
                          <li>• Audit trails and logging</li>
                          <li>• Regular security assessments</li>
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
              "MBACIO's transformation of our document workflows was game-changing. We're now 
              preparing cases 75% faster, our clients' data is completely secure, and we've 
              reduced operational costs significantly. The team understood our unique needs 
              and delivered beyond expectations."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-yellow rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-navy" />
              </div>
              <div className="text-left">
                <div className="font-bold text-navy text-lg">James Mitchell</div>
                <div className="text-gray-600">Managing Partner</div>
                <div className="text-sm text-gray-500">Mitchell & Associates Law Firm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus & Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-poppins font-bold text-navy mb-4">Geographic & Industry Focus</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Chicago Metro Area & Illinois</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Orange County & San Diego</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>CPA Firms & Accounting Practices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Law Offices & Legal Services</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Financial Services & Consulting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-poppins font-bold text-navy mb-4">Specialized Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Practice Management Integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Document Automation Systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Bilingual Client Portals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Compliance Tracking & Reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Legal Discovery Acceleration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Encrypted Client Data Solutions</span>
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
            Ready to Digitally Transform Your Practice?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Join forward-thinking law firms and CPA practices who trust MBACIO for secure, 
            efficient digital transformation. Let's discuss how we can streamline your operations.
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
                text: "Calculate Productivity ROI",
                url: "/tools/staff-productivity",
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

export default CPALawClient;
