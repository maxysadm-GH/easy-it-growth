
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Ready to transform your IT infrastructure? Get in touch with our experts today.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-4">Phone</h3>
              <p className="text-gray-600">(773) 657-2300</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <p className="text-gray-600">info@mbacio.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Address</h3>
              <p className="text-gray-600">2515 Waukegan Road<br />Bannockburn, IL 60015</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
