
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { useNavigate } from 'react-router-dom';

const BlogTeaser = () => {
  const { data: blogPosts, isLoading, error } = useBlogPosts();
  const navigate = useNavigate();

  console.log('🏠 BlogTeaser FRESH render:', {
    isLoading,
    error: error?.message || null,
    postsCount: blogPosts?.length || 0,
    postsData: blogPosts
  });

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const getExcerpt = (body: string | null, maxLength: number = 150) => {
    if (!body) return 'Read more to discover the full content...';
    return body.length > maxLength ? body.substring(0, maxLength) + '...' : body;
  };

  const formatDate = (dateString: string | null, createdAt: string) => {
    const date = dateString || createdAt;
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleCardClick = (title: string) => {
    const slug = createSlug(title);
    console.log('🔗 Navigating to blog post:', slug);
    navigate(`/blog/${slug}`);
  };

  const handleViewAllClick = () => {
    console.log('📚 Navigating to blog page');
    navigate('/blog');
  };

  // Show loading state
  if (isLoading) {
    console.log('⏳ BlogTeaser showing loading state');
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              Latest Insights & Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay ahead with expert IT insights, automation strategies, and real client success stories.
            </p>
          </div>
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
            <p className="text-gray-600">Loading latest insights...</p>
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    console.log('❌ BlogTeaser showing error state:', error);
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              Latest Insights & Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay ahead with expert IT insights, automation strategies, and real client success stories.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-poppins font-bold text-navy mb-6">
              Unable to Load Posts
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Error: {error.message}. Please try again later.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
              onClick={() => window.location.reload()}
            >
              Retry Loading Posts
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // Check for empty data - this should NOT happen now
  if (!blogPosts || blogPosts.length === 0) {
    console.log('📭 BlogTeaser: No posts available - THIS SHOULD NOT HAPPEN!', { blogPosts });
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
              Latest Insights & Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay ahead with expert IT insights, automation strategies, and real client success stories.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-poppins font-bold text-navy mb-6">
              Data Issue Detected
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We found data in the database but it's not displaying properly. Please refresh the page.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // Show the first 3 blog posts
  const displayPosts = blogPosts.slice(0, 3);
  console.log('📝 BlogTeaser displaying posts:', displayPosts.map(p => ({ id: p.id, title: p.title })));

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
            Latest Insights & Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay ahead with expert IT insights, automation strategies, and real client success stories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {displayPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-accent/20 bg-white overflow-hidden cursor-pointer"
              onClick={() => handleCardClick(post.title)}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.hero_image_url || `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-4">
                  {post.seo_keyword && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      <Tag className="w-3 h-3" />
                      {post.seo_keyword}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.date, post.created_at)}
                  </span>
                </div>
                <CardTitle className="text-xl font-poppins font-bold text-navy group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative">
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  {getExcerpt(post.body)}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {post.author || 'MBACIO Team'}
                  </span>
                  <Button variant="outline" className="border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-all duration-300 group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-navy text-white hover:bg-deep-blue font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            onClick={handleViewAllClick}
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;
