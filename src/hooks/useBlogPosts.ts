
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

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

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      console.log('Fetching blog posts from Supabase...');
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('date', { ascending: false, nullsFirst: false })
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
      }

      console.log('Blog posts loaded from Supabase:', data);
      return data as BlogPost[];
    },
  });
};

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      console.log('Fetching blog post by slug:', slug);
      
      // First try to find by exact slug match
      let { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('title', slug.replace(/-/g, ' '))
        .maybeSingle();

      // If not found, try to find by generated slug pattern
      if (!data && !error) {
        const { data: allPosts, error: allError } = await supabase
          .from('blog_posts')
          .select('*');
        
        if (allError) {
          console.error('Error fetching all posts:', allError);
          throw allError;
        }

        // Find post by matching generated slug
        data = allPosts?.find(post => {
          const generatedSlug = post.title?.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '') || `post-${post.id}`;
          return generatedSlug === slug;
        }) || null;
      }

      if (error) {
        console.error('Error fetching blog post:', error);
        throw error;
      }

      if (!data) {
        throw new Error('Post not found');
      }

      console.log('Blog post found:', data);
      return data as BlogPost;
    },
  });
};
