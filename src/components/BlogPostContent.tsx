
import React from 'react';
import DOMPurify from 'dompurify';
import BlogContentParser from './BlogContentParser';
import BlogInternalLinks from './BlogInternalLinks';
import MidArticleCTA from './MidArticleCTA';

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

            {/* Mid-article CTA - appears after content */}
            <MidArticleCTA 
              variant={post.seo_keyword?.includes('security') || post.seo_keyword?.includes('cyber') ? 'security' : 
                      post.seo_keyword?.includes('dashboard') || post.seo_keyword?.includes('analytics') ? 'dashboard' : 
                      'assessment'}
            />

            {/* Internal links section */}
            <BlogInternalLinks currentPostTitle={post.title} />

            {/* Embedded content */}
            {post.embedded_c && (
              <div className="my-12 animate-fade-in">
              <div 
                  className="bg-gradient-to-r from-accent/5 to-transparent p-6 rounded-lg border-l-4 border-accent"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.embedded_c, {
                    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'a', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div', 'img', 'blockquote'],
                    ALLOWED_ATTR: ['href', 'target', 'rel', 'src', 'alt', 'class', 'style']
                  }) }}
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
