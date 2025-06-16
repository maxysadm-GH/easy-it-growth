
import { Headphones, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  // Fake login state for demonstration. In production, use a real auth system
  const isLoggedIn = false;
  const handleWarrantyClick = (e: React.MouseEvent) => {
    if (!isLoggedIn) {
      e.preventDefault();
      window.location.href = "/login?redirect=/warranty";
    }
  };
  
  return (
    <footer className="bg-charcoal text-white py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png"
                alt="MBACIO Logo"
                className="h-12 w-auto"
                style={{ maxHeight: 48 }}
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Chicago's Strategic IT & Automation Partner for Security, Data Visibility & Business Growth.
              Serving manufacturers, law firms, and CPA practices nationwide.
            </p>
            {/* Warranty text as a link requiring login */}
            <div className="mb-4">
              <a
                href="/warranty"
                onClick={handleWarrantyClick}
                className="inline-block bg-gradient-yellow text-navy font-bold px-5 py-2 rounded-full shadow-md hover:underline transition-all duration-300 hover:scale-105"
                style={{ textDecoration: 'none' }}
              >
                60-Day Satisfaction Warranty
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/services" className="hover:text-accent transition-colors">IT Consulting & Strategy</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">Managed IT & Security</a></li>
              <li><a href="/data-ai" className="hover:text-accent transition-colors">Automation & AI Solutions</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">MRP & ERP Integration</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">Cloud Migrations</a></li>
            </ul>
          </div>
          
          {/* Industries */}
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-6">Industries</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/ideal-client/food-beverage" className="hover:text-accent transition-colors">Manufacturing</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">Professional Services</a></li>
              <li><a href="/ideal-client/cpa-law" className="hover:text-accent transition-colors">Legal</a></li>
              <li><a href="/ideal-client/cpa-law" className="hover:text-accent transition-colors">Accounting / CPA Firms</a></li>
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
                  <div>Bannockburn, IL 60015</div>
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
              <div className="flex items-center space-x-3">
                <span className="w-5 h-5 text-accent flex-shrink-0">🌐</span>
                <a href="https://mbacio.com" className="text-gray-300 hover:text-accent transition-colors" rel="noopener noreferrer" target="_blank">
                  www.mbacio.com
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
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
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
