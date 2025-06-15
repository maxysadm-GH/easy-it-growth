import { Headphones, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/lovable-uploads/ec151905-4eae-4fed-8284-05f239474d3c.png"
                alt="MBACIO Logo"
                className="h-10 w-auto"
                style={{maxHeight: 40}}
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Making I.T. Easy so you can focus on growing your business. Trusted by manufacturers, law firms, and CPA practices nationwide.
            </p>
            <div className="bg-accent/20 text-accent px-4 py-2 rounded-lg inline-block">
              <span className="font-semibold">🔒 Guaranteed Confidentiality. Always.</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-accent transition-colors">IT Support & Monitoring</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Automation & AI Solutions</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">ERP Integration</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Security Management</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cloud Migration</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Vendor Consolidation</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-6">Industries</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-accent transition-colors">Food & Beverage Manufacturing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">CPA Firms</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Law Offices</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Healthcare Practices</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Professional Services</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Small-Medium Manufacturing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-gray-300">
                  <div>2515 Waukegan Road</div>
                  <div>Bannockburn, Illinois 60015</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+1-773-657-2300" className="text-gray-300 hover:text-accent transition-colors">
                  (773) 657-2300
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@mbacio.com" className="text-gray-300 hover:text-accent transition-colors">
                  info@mbacio.com
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Business Hours</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <div>Monday - Friday: 9:00 AM - 5:00 PM</div>
                <div>Emergency Support: 24/7</div>
              </div>
            </div>
          </div>
        </div>

        {/* Warranty Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="bg-navy/30 rounded-lg p-6">
            <h3 className="text-xl font-poppins font-semibold mb-4 text-accent">60-Day Satisfaction Warranty</h3>
            <p className="text-gray-300 leading-relaxed">
              We guarantee complete satisfaction with our IT services for 60 days from project completion. 
              If you're not satisfied, we'll address any issues at no additional cost. 
              <span className="text-accent font-medium"> Warranty excludes issues from undisclosed changes, configurations, or vendor modifications not communicated to MBACIO during onboarding.</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 MBACIO, LLC. All rights reserved. • IT Support for Growing Businesses
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
