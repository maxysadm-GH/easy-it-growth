
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BlogTeaser from '../components/BlogTeaser';
import CTAButton from '@/components/ui/cta-button';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <title>MBACIO Blog | IT Insights & Success Stories | Bannockburn & Chicagoland</title>
      <meta name="description" content="Real stories from real businesses. Discover how automation, AI, and smart IT strategies are transforming companies just like yours. Serving Bannockburn & Chicagoland." />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              MBACIO Blog
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Real stories from real businesses. Discover how automation, AI, and smart IT strategies are transforming companies just like yours.
            </p>
            <CTAButton 
              ctaId="book-assessment"
              variant="yellow"
              size="lg"
              className="text-xl px-10 py-6"
              forcePopup={true}
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <BlogTeaser />

      <Footer />
    </div>
  );
};

export default Blog;
