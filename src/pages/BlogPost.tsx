import { useParams, Navigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BlogSubscription from '../components/BlogSubscription';
import BlogContentParser from '../components/BlogContentParser';
import { Button } from '@/components/ui/button';
import { useBlogPost } from '../hooks/useBlogPosts';
import { Calendar, User, Tag, Share2 } from 'lucide-react';
import { useState } from 'react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [imageError, setImageError] = useState(false);
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const { data: post, isLoading, error } = useBlogPost(slug);

  const getWorkingImageUrl = (originalUrl: string | null) => {
    if (imageError || !originalUrl) {
      // Different fallback images based on content
      if (slug?.includes('cyberattack') || slug?.includes('security')) {
        return `https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`;
      }
      return `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`;
    }
    
    if (originalUrl.includes('unsplash.com') && !originalUrl.startsWith('http')) {
      return `https://images.${originalUrl}`;
    }
    
    return originalUrl;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
            <p className="mt-4 text-gray-600 font-inter">Loading blog post...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-poppins font-bold text-navy mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8 font-inter">The blog post you're looking for doesn't exist.</p>
            <Button 
              onClick={() => window.location.href = '/blog'}
              className="bg-accent text-navy font-bold px-6 py-3"
            >
              Back to Blog
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const imageUrl = getWorkingImageUrl(post.hero_image_url);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image with enhanced styling */}
            <div className="mb-8 rounded-xl overflow-hidden shadow-2xl animate-fade-in bg-gray-200 relative">
              <img
                src={imageUrl}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
                onError={() => setImageError(true)}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
            </div>

            {/* Enhanced Post Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                {post.author && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="font-inter font-medium">{post.author}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-inter">{formatDate(post.date || post.created_at)}</span>
                </div>
                {post.seo_keyword && (
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium font-inter">
                      {post.seo_keyword}
                    </span>
                  </div>
                )}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="border-navy text-navy hover:bg-navy hover:text-white"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Enhanced Title */}
            <h1 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-8 animate-fade-in leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Enhanced Content Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 animate-fade-in">
              {/* Use our enhanced content parser */}
              <BlogContentParser 
                content={post.body || ''} 
                seoKeyword={post.seo_keyword}
                title={post.title}
              />

              {/* Embedded content */}
              {post.embedded_c && (
                <div className="my-12 animate-fade-in">
                  <div 
                    className="bg-gradient-to-r from-accent/5 to-transparent p-6 rounded-lg border-l-4 border-accent"
                    dangerouslySetInnerHTML={{ __html: post.embedded_c }}
                  />
                </div>
              )}

              {/* Enhanced CTA Section */}
              {post.cta_text && post.cta_link && (
                <div className="mt-12 pt-8 border-t border-gray-200 text-center animate-fade-in">
                  <div className="bg-gradient-to-br from-navy to-deep-blue p-8 rounded-xl text-white">
                    <h3 className="text-2xl font-poppins font-bold mb-4">Ready to Transform Your Business?</h3>
                    <p className="text-lg mb-6 font-inter opacity-90">
                      Don't wait for a crisis to act. Let's discuss how we can protect and optimize your operations.
                    </p>
                    <Button 
                      size="lg"
                      className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
                      onClick={() => window.open(post.cta_link!, '_blank')}
                    >
                      {post.cta_text}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Subscription Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BlogSubscription />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
