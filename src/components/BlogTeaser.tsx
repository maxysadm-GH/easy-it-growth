
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';
import BlogLoadingState from './BlogLoadingState';

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

  // Show error state with fallback content
  if (error) {
    console.log('❌ BlogTeaser error, but showing sample content anyway');
  }

  // We now guarantee posts will be available (either real or sample)
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
