import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "MBACIO Privacy Policy - How we collect, use, and protect your personal information",
    "url": "https://www.mbacio.com/privacy-policy"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Privacy Policy – Data Protection & Security"
        description="Learn how MBACIO protects your personal information and data privacy. Our commitment to security and compliance with privacy regulations."
        keywords="privacy policy, data protection, MBACIO privacy, information security"
        structuredData={structuredData}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Privacy Policy", url: "/privacy-policy" }
      ]} />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-gradient-yellow rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="w-12 h-12 text-navy" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              Privacy Policy
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Your privacy and data security are our top priorities. Learn how we protect your information.
            </p>
            <p className="text-sm text-gray-300">Last updated: August 19, 2025</p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Eye className="w-8 h-8 text-accent" />
                    <h2 className="text-2xl font-poppins font-bold text-navy">Information We Collect</h2>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Contact Information:</strong> Name, email address, phone number, and company details when you contact us or book consultations.</p>
                    <p><strong>Technical Information:</strong> When providing IT services, we may access system logs, performance data, and configuration information necessary for support and optimization.</p>
                    <p><strong>Website Data:</strong> Standard web analytics including IP addresses, browser information, and usage patterns to improve our services.</p>
                    <p><strong>Business Information:</strong> Operational data and system information relevant to our consulting and managed services.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Lock className="w-8 h-8 text-accent" />
                    <h2 className="text-2xl font-poppins font-bold text-navy">How We Use Your Information</h2>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Service Delivery:</strong> To provide IT consulting, managed services, and technical support as requested.</p>
                    <p><strong>Communication:</strong> To respond to inquiries, provide updates, and deliver relevant information about our services.</p>
                    <p><strong>Improvement:</strong> To enhance our services, troubleshoot issues, and develop better solutions.</p>
                    <p><strong>Compliance:</strong> To meet legal and regulatory requirements in the jurisdictions where we operate.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Shield className="w-8 h-8 text-accent" />
                    <h2 className="text-2xl font-poppins font-bold text-navy">Data Protection & Security</h2>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Encryption:</strong> All data transmission and storage use industry-standard encryption protocols.</p>
                    <p><strong>Access Controls:</strong> Strict access controls ensure only authorized personnel can access client information.</p>
                    <p><strong>Regular Audits:</strong> We conduct regular security audits and maintain compliance with industry standards.</p>
                    <p><strong>Incident Response:</strong> Comprehensive incident response procedures protect against and respond to security events.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <UserCheck className="w-8 h-8 text-accent" />
                    <h2 className="text-2xl font-poppins font-bold text-navy">Your Rights</h2>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Access:</strong> You have the right to know what personal information we hold about you.</p>
                    <p><strong>Correction:</strong> You can request corrections to any inaccurate personal information.</p>
                    <p><strong>Deletion:</strong> You may request deletion of your personal information, subject to legal and contractual obligations.</p>
                    <p><strong>Portability:</strong> You can request a copy of your data in a machine-readable format.</p>
                    <p><strong>Objection:</strong> You can object to certain processing of your personal information.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-poppins font-bold text-navy mb-6">Contact Us</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>If you have questions about this Privacy Policy or wish to exercise your rights:</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p><strong>Email:</strong> info@mbacio.com</p>
                      <p><strong>Phone:</strong> (773) 657-2300</p>
                      <p><strong>Address:</strong> 2515 Waukegan Road, Bannockburn, IL 60015</p>
                    </div>
                    <p className="text-sm">We will respond to all requests within 30 days.</p>
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

export default PrivacyPolicy;