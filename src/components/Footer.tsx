
import { Headphones, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <footer className="bg-navy text-white py-12" id="contact">
      <div className="container mx-auto container-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6 transition-transform duration-300 hover:scale-105">
              <img
                src="/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png"
                alt="MBACIO Logo"
                className="h-12 w-auto"
                style={{ maxHeight: 48 }}
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Chicago's Strategic IT & Automation Partner for Security, Data Visibility & Business Growth.
              Serving manufacturers, law firms, and CPA practices nationwide.
            </p>
            {/* Warranty text as a link requiring login */}
            <div className="mb-4">
              <a
                href="/warranty"
                onClick={handleWarrantyClick}
                className="inline-block bg-electric-blue text-white font-semibold px-5 py-2 rounded-full shadow-md hover:underline transition-all duration-300 glow-hover"
                style={{ textDecoration: 'none' }}
              >
                60-Day Satisfaction Warranty
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-inter font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/services" className="hover:text-electric-blue transition-colors">IT Consulting & Strategy</Link></li>
              <li><Link to="/services" className="hover:text-electric-blue transition-colors">Managed IT & Security</Link></li>
              <li><Link to="/data-ai" className="hover:text-electric-blue transition-colors">Automation & AI Solutions</Link></li>
              <li><Link to="/services" className="hover:text-electric-blue transition-colors">MRP & ERP Integration</Link></li>
              <li><Link to="/services" className="hover:text-electric-blue transition-colors">Cloud Migrations</Link></li>
            </ul>
          </div>
          
          {/* Industries */}
          <div>
            <h3 className="text-xl font-inter font-semibold mb-6">Industries</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/ideal-client/food-beverage" className="hover:text-electric-blue transition-colors">Manufacturing</Link></li>
              <li><Link to="/services" className="hover:text-electric-blue transition-colors">Professional Services</Link></li>
              <li><Link to="/ideal-client/cpa-law" className="hover:text-electric-blue transition-colors">Legal</Link></li>
              <li><Link to="/ideal-client/cpa-law" className="hover:text-electric-blue transition-colors">Accounting / CPA Firms</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-inter font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-electric-blue flex-shrink-0" />
                <div className="text-gray-300">
                  <div>2515 Waukegan Road</div>
                  <div>Bannockburn, IL 60015</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-electric-blue flex-shrink-0" />
                <a href="tel:+1-773-657-2300" className="text-gray-300 hover:text-electric-blue transition-colors">
                  (773) 657-2300
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-electric-blue flex-shrink-0" />
                <a href="mailto:info@mbacio.com" className="text-gray-300 hover:text-electric-blue transition-colors">
                  info@mbacio.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-5 h-5 text-electric-blue flex-shrink-0">🌐</span>
                <a href="https://mbacio.com" className="text-gray-300 hover:text-electric-blue transition-colors" rel="noopener noreferrer" target="_blank">
                  www.mbacio.com
                </a>
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
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
