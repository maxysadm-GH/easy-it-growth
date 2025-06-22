
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Blog = () => {
  const { data: blogPosts, isLoading, error } = useBlogPosts();
  const navigate = useNavigate();
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
  };

  const getExcerpt = (body: string | null, maxLength: number = 150) => {
    if (!body) return 'Read more to discover the full content...';
    return body.length > maxLength ? body.substring(0, maxLength) + '...' : body;
  };

  const handleImageError = (postId: string) => {
    setImageErrors(prev => ({ ...prev, [postId]: true }));
  };

  const getWorkingImageUrl = (originalUrl: string | null, postId: string) => {
    if (imageErrors[postId] || !originalUrl) {
      // Fallback to a working Unsplash image
      return `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
    }
    
    // If the URL is incomplete, fix it
    if (originalUrl.includes('unsplash.com') && !originalUrl.startsWith('http')) {
      return `https://images.${originalUrl}`;
    }
    
    return originalUrl;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header animate-fade-in">
              MBACIO Blog
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed animate-fade-in">
              Real stories from real businesses. Discover how automation, AI, and smart IT strategies are transforming companies just like yours.
            </p>
            <Button size="lg" className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300 animate-fade-in">
              Book Your Free Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {isLoading && (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
              <p className="text-gray-600">Loading success stories...</p>
            </div>
          )}

          {error && (
            <div className="text-center">
              <h2 className="text-2xl font-poppins font-bold text-navy mb-4">Unable to Load Posts</h2>
              <p className="text-gray-600 mb-8">We're experiencing technical difficulties. Please try again later.</p>
              <Button 
                onClick={() => window.location.reload()}
                className="bg-accent text-navy font-bold px-6 py-3"
              >
                Retry
              </Button>
            </div>
          )}

          {blogPosts && blogPosts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post, index) => {
                const slug = createSlug(post.title);
                const imageUrl = getWorkingImageUrl(post.hero_image_url, post.id);
                
                return (
                  <Card 
                    key={post.id} 
                    className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-accent/20 bg-white overflow-hidden cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => navigate(`/blog/${slug}`)}
                  >
                    {/* Hero Image with error handling */}
                    <div className="relative overflow-hidden h-48 bg-gray-200">
                      <img
                        src={imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => handleImageError(post.id)}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <CardContent className="p-6">
                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-600">
                        {post.author && (
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(post.date || post.created_at)}</span>
                        </div>
                        {post.seo_keyword && (
                          <div className="flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                              {post.seo_keyword}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-poppins font-bold text-navy mb-4 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-700 leading-relaxed mb-6 font-inter line-clamp-3">
                        {getExcerpt(post.body)}
                      </p>

                      {/* Read More */}
                      <div className="flex items-center justify-between">
                        <Button 
                          variant="outline" 
                          className="border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-all duration-300 group/btn"
                        >
                          Read Success Story
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {blogPosts && blogPosts.length === 0 && (
            <div className="text-center">
              <h2 className="text-3xl font-poppins font-bold text-navy mb-6 animate-fade-in">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-inter animate-fade-in">
                We're working on bringing you valuable insights on IT automation, cybersecurity, 
                and business growth strategies. Check back soon for our latest posts.
              </p>
              <Button size="lg" className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300 animate-fade-in">
                Book Your Free Assessment
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
