
import React from 'react';
import BlogContentParser from './BlogContentParser';

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

interface BlogPostContentProps {
  post: BlogPost;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ post }) => {
  return (
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostContent;
