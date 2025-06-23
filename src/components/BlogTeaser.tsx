import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';
import BlogLoadingState from './BlogLoadingState';
import CTAButton from '@/components/ui/cta-button';

const BlogTeaser = () => {
  const { data: blogPosts, isLoading, error } = useBlogPosts();
  const navigate = useNavigate();

  console.log('🏠 BlogTeaser render:', {
    isLoading,
    error: error?.message || null,
    postsCount: blogPosts?.length || 0,
    hasData: !!blogPosts
  });

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
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
    return <BlogLoadingState />;
  }

  // Show error state
  if (error) {
    console.log('❌ BlogTeaser error:', error.message);
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
            <p className="text-gray-600 mb-4">Unable to load blog posts at the moment.</p>
            <Button 
              onClick={() => window.location.reload()}
              className="bg-accent text-navy font-bold px-6 py-3"
            >
              Try Again
            </Button>
          </div>
        </div>
      </section>
    );
  }

  // Show posts (limit to 3 for teaser)
  const displayPosts = (blogPosts || []).slice(0, 3);
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

        {displayPosts.length > 0 ? (
          <>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
              {displayPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  onClick={handleCardClick}
                />
              ))}
            </div>

            <div className="text-center">
              <CTAButton 
                ctaId="view-blog"
                variant="secondary"
                size="lg"
                className="px-8 py-4 text-lg"
              />
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-gray-600 mb-4">No blog posts available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogTeaser;
