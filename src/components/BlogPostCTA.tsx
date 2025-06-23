
import React from 'react';
import { Button } from '@/components/ui/button';
import { BlogPost } from '@/integrations/supabase/types';

interface BlogPostCTAProps {
  post: BlogPost;
}

const BlogPostCTA: React.FC<BlogPostCTAProps> = ({ post }) => {
  if (!post.cta_text || !post.cta_link) {
    return null;
  }

  const handleCTAClick = () => {
    if (post.cta_link!.startsWith('http')) {
      window.open(post.cta_link!, '_blank');
    } else {
      window.location.href = post.cta_link!;
    }
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 text-center animate-fade-in">
      <div className="bg-gradient-to-br from-navy to-deep-blue p-8 rounded-xl text-white">
        <h3 className="text-2xl font-poppins font-bold mb-4">Ready to Transform Your Business?</h3>
        <p className="text-lg mb-6 font-inter opacity-90">
          Don't wait for a crisis to act. Let's discuss how we can protect and optimize your operations 
          with bilingual support and proven methodologies.
        </p>
        <Button 
          size="lg"
          className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
          onClick={handleCTAClick}
        >
          {post.cta_text}
        </Button>
        <div className="mt-4 text-sm opacity-75">
          🌟 Available in English & Spanish • Agile & EOS Methodology
        </div>
      </div>
    </div>
  );
};

export default BlogPostCTA;
