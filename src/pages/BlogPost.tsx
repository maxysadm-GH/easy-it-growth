
import { useParams, Navigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BlogSubscription from '../components/BlogSubscription';
import BlogPostHeader from '../components/BlogPostHeader';
import BlogPostContent from '../components/BlogPostContent';
import BlogPostCTA from '../components/BlogPostCTA';
import { Button } from '@/components/ui/button';
import { useBlogPost } from '../hooks/useBlogPosts';
import { Toaster } from '@/components/ui/toaster';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const { data: post, isLoading, error } = useBlogPost(slug);

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header Section with Hero Image and Meta */}
      <BlogPostHeader post={post} />

      {/* Content Section */}
      <BlogPostContent post={post} />

      {/* CTA Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <BlogPostCTA post={post} />
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
      <Toaster />
    </div>
  );
};

export default BlogPost;
