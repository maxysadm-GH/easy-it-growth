
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <section className="py-16 bg-background" id="privacy">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-6 text-navy">
            Privacy Policy
          </h2>
          <p className="text-lg text-gray-600">
            At MBACIO, we value your privacy and are committed to protecting your personal information.
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-navy">Information We Collect</h3>
              <p className="text-gray-700 mb-4">
                When you submit a form on our website or engage with our services, we may collect the following information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Name and contact information</li>
                <li>Email address and phone number</li>
                <li>Company information and IT infrastructure details</li>
                <li>Business requirements and technical specifications</li>
                <li>Communication preferences and service history</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-navy">How We Use Your Information</h3>
              <p className="text-gray-700 mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>To respond to your inquiries and provide requested services</li>
                <li>To deliver IT support, automation, and consulting services</li>
                <li>To provide updates and information related to our services</li>
                <li>To improve our website, services, and customer experience</li>
                <li>To ensure compliance with industry regulations and security standards</li>
                <li>To fulfill our contractual obligations and warranty commitments</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-navy">Data Protection & Confidentiality</h3>
              <p className="text-gray-700 mb-4">
                <strong className="text-accent">🔒 Guaranteed Confidentiality. Always.</strong>
              </p>
              <p className="text-gray-700 mb-4">
                We implement industry-leading security measures to protect your data:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Encrypted data transmission and storage</li>
                <li>Access controls and authentication protocols</li>
                <li>Regular security audits and compliance monitoring</li>
                <li>Staff training on confidentiality and data protection</li>
                <li>Secure backup and disaster recovery procedures</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-navy">Information Sharing</h3>
              <p className="text-gray-700 mb-4">
                We want to assure you that your information will not be shared, sold, or disclosed to third parties for marketing purposes without your explicit consent. We may share information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>With your explicit written consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect the rights, property, or safety of MBACIO, our clients, or others</li>
                <li>With trusted service providers who assist in delivering our services (under strict confidentiality agreements)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-navy">Your Rights & Opt-Out</h3>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Opt-out of receiving future communications at any time</li>
                <li>Request access to your personal information we have on file</li>
                <li>Request correction or deletion of your personal information</li>
                <li>Withdraw consent for data processing (where applicable)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights or unsubscribe from communications, simply contact us at <a href="mailto:info@mbacio.com" className="text-accent hover:underline">info@mbacio.com</a>.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-navy">Contact Us</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="text-gray-700">
                <p><strong>Email:</strong> <a href="mailto:info@mbacio.com" className="text-accent hover:underline">info@mbacio.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+1-773-657-2300" className="text-accent hover:underline">(773) 657-2300</a></p>
                <p><strong>Address:</strong> 2515 Waukegan Road, Bannockburn, Illinois 60015</p>
              </div>
              <p className="text-gray-700 mt-4">
                <em>Last updated: December 2024</em>
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            By submitting your information, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
