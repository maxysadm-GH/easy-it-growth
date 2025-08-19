import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import BreadcrumbSchema from '../components/BreadcrumbSchema';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Eye, Server, AlertTriangle, CheckCircle } from 'lucide-react';

const Security = () => {
  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        location: 'security_page',
        action: 'assessment'
      });
    }
    window.open('https://calendly.com/mbacio/assessment', '_blank', 'noopener,noreferrer');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Security Information",
    "description": "MBACIO's comprehensive security measures, compliance frameworks, and data protection protocols",
    "url": "https://www.mbacio.com/security"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Security & Compliance – Enterprise-Grade Protection"
        description="Learn about MBACIO's comprehensive security measures, compliance frameworks, and data protection protocols. SOX, HIPAA, PCI DSS compliance available."
        keywords="cybersecurity, IT security, compliance, SOX, HIPAA, PCI DSS, data protection, security audit"
        structuredData={structuredData}
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Security", url: "/security" }
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
              Enterprise-Grade Security
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Comprehensive security measures and compliance frameworks protecting your business and data.
            </p>
          </div>
        </div>
      </section>

      {/* Security Framework */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-navy mb-6">
                Multi-Layered Security Architecture
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our security approach combines prevention, detection, and response to protect against evolving threats.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Lock className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-navy mb-4">Access Controls</h3>
                  <div className="space-y-2 text-gray-700 text-left">
                    <p>• Multi-factor authentication</p>
                    <p>• Role-based permissions</p>
                    <p>• Regular access reviews</p>
                    <p>• Privileged access management</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-navy mb-4">24/7 Monitoring</h3>
                  <div className="space-y-2 text-gray-700 text-left">
                    <p>• Security operations center</p>
                    <p>• Real-time threat detection</p>
                    <p>• Automated incident response</p>
                    <p>• Continuous vulnerability scanning</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-yellow rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Server className="w-8 h-8 text-navy" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-navy mb-4">Data Protection</h3>
                  <div className="space-y-2 text-gray-700 text-left">
                    <p>• End-to-end encryption</p>
                    <p>• Secure data backups</p>
                    <p>• Data loss prevention</p>
                    <p>• Secure data destruction</p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-navy mb-6">
                Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We maintain compliance with industry standards and regulations relevant to your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <CheckCircle className="w-8 h-8 text-accent" />
                    <h3 className="text-2xl font-poppins font-bold text-navy">Regulatory Compliance</h3>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>SOX Compliance:</strong> Sarbanes-Oxley Act controls for public companies and financial reporting.</p>
                    <p><strong>HIPAA:</strong> Healthcare data protection and privacy requirements.</p>
                    <p><strong>PCI DSS:</strong> Payment card industry data security standards.</p>
                    <p><strong>GDPR:</strong> General data protection regulation for EU data handling.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Shield className="w-8 h-8 text-accent" />
                    <h3 className="text-2xl font-poppins font-bold text-navy">Security Frameworks</h3>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>NIST Framework:</strong> National Institute of Standards and Technology cybersecurity framework.</p>
                    <p><strong>ISO 27001:</strong> Information security management system standards.</p>
                    <p><strong>CIS Controls:</strong> Center for Internet Security critical security controls.</p>
                    <p><strong>COBIT:</strong> Control Objectives for Information and Related Technologies.</p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="w-8 h-8 text-accent" />
                  <h2 className="text-2xl font-poppins font-bold text-navy">Incident Response Plan</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-navy mb-4">Immediate Response (0-4 hours)</h3>
                    <div className="space-y-2 text-gray-700">
                      <p>• Threat containment and isolation</p>
                      <p>• Stakeholder notification</p>
                      <p>• Evidence preservation</p>
                      <p>• Impact assessment</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-4">Recovery & Analysis (4-72 hours)</h3>
                    <div className="space-y-2 text-gray-700">
                      <p>• System restoration</p>
                      <p>• Forensic investigation</p>
                      <p>• Root cause analysis</p>
                      <p>• Lessons learned documentation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Assessment CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-8">
              Assess Your Security Posture
            </h2>
            <p className="text-xl text-gray-200 mb-12">
              Get a comprehensive security assessment to identify vulnerabilities and strengthen your defenses.
            </p>
            <Button
              size="lg"
              onClick={handleCTAClick}
              className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
            >
              Schedule Security Assessment
            </Button>
            <p className="text-sm text-gray-300 mt-6">
              Available in English & Spanish • Comprehensive reporting included
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;