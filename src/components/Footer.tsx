
import { Headphones, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  // Fake login state for demonstration. In production, use a real auth system
  const isLoggedIn = false;
  const handleWarrantyClick = (e: React.MouseEvent) => {
    if (!isLoggedIn) {
      e.preventDefault();
      window.location.href = "/login?redirect=/warranty";
    }
  };

  const handleMapClick = () => {
    const address = "2515 Waukegan Road, Bannockburn, IL 60015";
    const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
    const appleMapsUrl = `https://maps.apple.com/?address=${encodeURIComponent(address)}`;
    
    // Try to open Apple Maps on iOS, Google Maps otherwise
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      window.open(appleMapsUrl, '_blank');
    } else {
      window.open(googleMapsUrl, '_blank');
    }
  };

  const handleBookAssessment = () => {
    window.open('https://outlook.office365.com/owa/calendar/MBACIOFreeAssessment@mbacio.com/bookings/', '_blank');
  };
  
  return (
    <footer className="bg-charcoal text-white py-12" id="contact">
      <div className="container mx-auto px-4">
        {/* Contact Info Bar */}
        <div className="border-b border-gray-700 pb-8 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
              <div className="text-gray-300 text-sm cursor-pointer hover:text-accent transition-colors" onClick={handleMapClick}>
                <div>2515 Waukegan Road</div>
                <div>Bannockburn, IL 60015</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-accent flex-shrink-0" />
              <a href="tel:+1-773-657-2300" className="text-gray-300 hover:text-accent transition-colors text-sm">
                (773) 657-2300
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-accent flex-shrink-0" />
              <a href="mailto:info@mbacio.com" className="text-gray-300 hover:text-accent transition-colors text-sm">
                info@mbacio.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-accent flex-shrink-0" />
              <a href="https://mbacio.com" className="text-gray-300 hover:text-accent transition-colors text-sm" rel="noopener noreferrer" target="_blank">
                www.mbacio.com
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <a href="/" className="flex items-center space-x-2 mb-6">
              <img
                src="/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png"
                alt="MBACIO Logo"
                className="h-12 w-auto hover:scale-105 transition-transform duration-300"
                style={{ maxHeight: 48 }}
              />
            </a>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Strategic IT & Automation Partner for Security, Data Visibility & Business Growth.
              Serving manufacturers, law firms, and CPA practices nationwide.
            </p>
            {/* Warranty text as a clickable link */}
            <div className="mb-4">
              <a
                href="/warranty"
                onClick={handleWarrantyClick}
                className="inline-block bg-gradient-yellow text-navy font-bold px-4 py-2 rounded-full shadow-md hover:underline transition-all duration-300 hover:scale-105 text-sm cursor-pointer"
                style={{ textDecoration: 'none' }}
              >
                60-Day Satisfaction Warranty
              </a>
            </div>
            <div className="text-gray-300 text-sm space-y-1">
              <div className="font-semibold mb-2">Business Hours</div>
              <div>Monday - Friday: 9:00 AM - 5:00 PM</div>
              <div>Emergency Support: 24/7</div>
            </div>
          </div>
          
          {/* Services & Solutions */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4 text-accent">Services & Solutions</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/services" className="hover:text-accent transition-colors">IT Consulting & Strategy</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">Managed IT & Security</a></li>
              <li><a href="/data-ai" className="hover:text-accent transition-colors">Automation & AI Solutions</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">MRP & ERP Integration</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">Cloud Migrations</a></li>
              <li><a href="/dashboard-solutions" className="hover:text-accent transition-colors">Dashboard Solutions</a></li>
              <li><a href="/service-plans" className="hover:text-accent transition-colors">Service Plans</a></li>
            </ul>
          </div>
          
          {/* Tools & Assessments */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4 text-accent">Tools & Assessments</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/tools" className="hover:text-accent transition-colors">All Assessment Tools</a></li>
              <li><a href="/tools/automation-roi" className="hover:text-accent transition-colors">Automation ROI Calculator</a></li>
              <li><a href="/tools/cyber-risk" className="hover:text-accent transition-colors">Cyber Risk Assessment</a></li>
              <li><a href="/tools/downtime-cost" className="hover:text-accent transition-colors">Downtime Cost Calculator</a></li>
              <li><a href="/tools/vendor-consolidation" className="hover:text-accent transition-colors">Vendor Consolidation</a></li>
              <li><a href="/tools/cloud-migration" className="hover:text-accent transition-colors">Cloud Migration ROI</a></li>
              <li><a href="/tools/staff-productivity" className="hover:text-accent transition-colors">Staff Productivity</a></li>
              <li><a href="/assessment-risk" className="hover:text-accent transition-colors">Risk Assessment</a></li>
              <li><a href="/assessment-automation" className="hover:text-accent transition-colors">Automation Assessment</a></li>
            </ul>
          </div>
          
          {/* Industries & Resources */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4 text-accent">Industries & Resources</h3>
            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2 text-white">Industries We Serve</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li><a href="/ideal-client/food-beverage" className="hover:text-accent transition-colors">Manufacturing</a></li>
                <li><a href="/services" className="hover:text-accent transition-colors">Professional Services</a></li>
                <li><a href="/ideal-client/cpa-law" className="hover:text-accent transition-colors">Legal & CPA Firms</a></li>
                <li><a href="/ideal-client/erp-mrp" className="hover:text-accent transition-colors">ERP/MRP Users</a></li>
                <li><a href="/ideal-client/finance-leaders" className="hover:text-accent transition-colors">Finance Leaders</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2 text-white">Resources</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li><a href="/blog" className="hover:text-accent transition-colors">Blog & Insights</a></li>
                <li><a href="/case-studies" className="hover:text-accent transition-colors">Case Studies</a></li>
                <li><a href="/why-us" className="hover:text-accent transition-colors">Why Choose MBACIO</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 MBACIO, LLC. All rights reserved. • IT Support for Growing Businesses • Serving Bannockburn & Chicagoland
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
