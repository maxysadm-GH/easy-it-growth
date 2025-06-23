
import React, { useState } from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import BlogPostShare from './BlogPostShare';

// Define the BlogPost type locally to match what we expect
interface BlogPost {
  id: string;
  title: string;
  author: string | null;
  date: string | null;
  created_at: string;
  seo_keyword: string | null;
  body: string | null;
  hero_image_url: string | null;
  embedded_c: string | null;
  cta_text: string | null;
  cta_link: string | null;
  slug?: string;
}

interface BlogPostHeaderProps {
  post: BlogPost;
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ post }) => {
  const [imageError, setImageError] = useState(false);

  const getWorkingImageUrl = (originalUrl: string | null) => {
    if (imageError || !originalUrl) {
      // Different fallback images based on content
      if (post.title?.toLowerCase().includes('cyberattack') || post.title?.toLowerCase().includes('security')) {
        return `https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`;
      }
      return `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`;
    }
    
    if (originalUrl.includes('unsplash.com') && !originalUrl.startsWith('http')) {
      return `https://images.${originalUrl}`;
    }
    
    return originalUrl;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const imageUrl = getWorkingImageUrl(post.hero_image_url);

  return (
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
            
            <BlogPostShare title={post.title} />
          </div>

          {/* Enhanced Title */}
          <h1 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-8 animate-fade-in leading-tight">
            {post.title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BlogPostHeader;
