import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsOfService = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "description": "MBACIO Terms of Service - Legal terms and conditions for our IT consulting and managed services",
    "url": "https://www.mbacio.com/terms-of-service"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Terms of Service – Legal Terms & Conditions"
        description="Read MBACIO's terms of service and legal conditions for our IT consulting, managed services, and technology solutions."
        keywords="terms of service, legal terms, MBACIO conditions, service agreement"
        structuredData={structuredData}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Terms of Service", url: "/terms-of-service" }
      ]} />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-yellow rounded-full flex items-center justify-center mx-auto mb-8">
              <Scale className="w-12 h-12 text-navy" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              Terms of Service
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Legal terms and conditions governing our technology services and client relationships.
            </p>
            <p className="text-sm text-gray-300">Last updated: August 19, 2025</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <FileText className="w-8 h-8 text-accent" />
                    <h2 className="text-2xl font-poppins font-bold text-navy">Service Agreement</h2>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p>By engaging MBACIO for IT consulting, managed services, or related technology solutions, you agree to these terms of service.</p>
                    <p><strong>Scope of Services:</strong> We provide IT consulting, managed services, cybersecurity, cloud solutions, and related technology services as outlined in our service agreements.</p>
                    <p><strong>Professional Standards:</strong> All services are delivered according to industry best practices and applicable professional standards.</p>
                    <p><strong>Client Cooperation:</strong> Successful service delivery requires client cooperation, including timely access to systems, information, and key personnel.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <CheckCircle className="w-8 h-8 text-accent" />
                    <h2 className="text-2xl font-poppins font-bold text-navy">Payment Terms</h2>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Billing:</strong> Services are billed according to the terms specified in individual service agreements.</p>
                    <p><strong>Payment:</strong> Payment is due within 30 days of invoice date unless otherwise specified.</p>
                    <p><strong>Late Payments:</strong> Late payments may result in service suspension and additional fees.</p>
                    <p><strong>Dispute Resolution:</strong> Billing disputes must be raised within 60 days of invoice date.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <AlertTriangle className="w-8 h-8 text-accent" />
                    <h2 className="text-2xl font-poppins font-bold text-navy">Limitations & Liability</h2>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Service Limitations:</strong> Our services are subject to the limitations of technology, third-party systems, and external factors beyond our control.</p>
                    <p><strong>Liability Cap:</strong> Our liability is limited to the amount paid for services in the 12 months preceding any claim.</p>
                    <p><strong>Force Majeure:</strong> We are not liable for delays or failures due to circumstances beyond our reasonable control.</p>
                    <p><strong>Indemnification:</strong> Clients agree to indemnify MBACIO against claims arising from misuse of our services or violation of these terms.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-poppins font-bold text-navy mb-6">60-Day Satisfaction Warranty</h2>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Warranty Coverage:</strong> We guarantee satisfaction with our services for 60 days from go-live date.</p>
                    <p><strong>Remedy:</strong> If not satisfied, we will work at no additional cost to resolve concerns or provide a refund of monthly subscription fees for the affected period.</p>
                    <p><strong>Exclusions:</strong> Warranty excludes third-party license costs, hardware purchases, and circumstances beyond our control.</p>
                    <p><strong>Claims:</strong> Warranty claims must be made within the 60-day period with specific details of concerns.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-poppins font-bold text-navy mb-6">Intellectual Property</h2>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Client Data:</strong> Clients retain ownership of their data and business information.</p>
                    <p><strong>Our IP:</strong> MBACIO retains ownership of our methodologies, tools, and proprietary technologies.</p>
                    <p><strong>Custom Solutions:</strong> Ownership of custom-developed solutions is addressed in individual project agreements.</p>
                    <p><strong>Confidentiality:</strong> Both parties agree to maintain confidentiality of proprietary information.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-poppins font-bold text-navy mb-6">Contact Information</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>Questions about these terms should be directed to:</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p><strong>MBACIO, LLC</strong></p>
                      <p>2515 Waukegan Road</p>
                      <p>Bannockburn, IL 60015</p>
                      <p><strong>Email:</strong> info@mbacio.com</p>
                      <p><strong>Phone:</strong> (773) 657-2300</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;