
import { useBlogPosts } from '../hooks/useBlogPosts';
import { useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';
import BlogLoadingState from './BlogLoadingState';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const BlogGrid = () => {
  const { data: blogPosts, isLoading, error } = useBlogPosts();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9; // Show 9 posts per page (3x3 grid)

  console.log('📰 BlogGrid render state:', {
    isLoading,
    hasError: !!error,
    errorMessage: error?.message || null,
    postsCount: blogPosts?.length || 0,
    currentPage,
    postsPerPage
  });

  const createSlug = (title: string) => {
    if (!title || title.trim() === '') {
      return 'untitled-post';
    }
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleCardClick = (title: string) => {
    const slug = createSlug(title);
    console.log('🔗 Navigating to blog post:', slug, 'from title:', title);
    navigate(`/blog/${slug}`);
  };

  // Show loading state
  if (isLoading) {
    console.log('⏳ BlogGrid showing loading state');
    return <BlogLoadingState />;
  }

  // Show error state
  if (error) {
    console.log('❌ BlogGrid error state:', error.message);
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 mb-4">Unable to load blog posts at the moment.</p>
        <p className="text-sm text-gray-500 mb-4">Error: {error.message}</p>
        <Button 
          onClick={() => window.location.reload()}
          className="bg-accent text-navy font-bold px-6 py-3"
        >
          Try Again
        </Button>
      </div>
    );
  }

  const allPosts = blogPosts || [];
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = allPosts.slice(startIndex, endIndex);

  console.log('📊 BlogGrid pagination:', {
    totalPosts: allPosts.length,
    totalPages,
    currentPage,
    startIndex,
    endIndex,
    currentPostsCount: currentPosts.length
  });

  if (allPosts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 mb-4">No blog posts available to display.</p>
        <Button 
          onClick={() => window.location.reload()}
          className="bg-accent text-navy font-bold px-6 py-3"
        >
          Refresh
        </Button>
      </div>
    );
  }

  return (
    <div className="py-12">
      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
        {currentPosts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            onClick={handleCardClick}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center">
          <Pagination>
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(currentPage - 1);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                </PaginationItem>
              )}
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    isActive={page === currentPage}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(currentPage + 1);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      )}

      {/* Results summary */}
      <div className="text-center mt-8 text-sm text-gray-600">
        Showing {startIndex + 1}-{Math.min(endIndex, allPosts.length)} of {allPosts.length} articles
      </div>
    </div>
  );
};

export default BlogGrid;
