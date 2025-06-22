
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
    queryKey: ['blog-posts-v2'], // Changed query key to force cache bust
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
      console.log('Number of posts found:', data?.length || 0);
      return data as BlogPost[];
    },
    staleTime: 0, // Always refetch
    gcTime: 0, // Don't cache results
  });
};

const createSlugFromTitle = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ['blog-post-v2', slug], // Changed query key to force cache bust
    queryFn: async () => {
      console.log('Fetching blog post by slug:', slug);
      
      // Get all posts and find by matching generated slug
      const { data: allPosts, error } = await supabase
        .from('blog_posts')
        .select('*');
      
      if (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
      }

      console.log('All posts for slug matching:', allPosts?.length || 0);

      // Find post by matching generated slug
      const post = allPosts?.find(post => {
        const generatedSlug = createSlugFromTitle(post.title);
        console.log('Comparing slugs:', generatedSlug, 'vs', slug);
        return generatedSlug === slug;
      });

      if (!post) {
        console.log('No post found for slug:', slug);
        throw new Error('Post not found');
      }

      console.log('Blog post found:', post.title);
      return post as BlogPost;
    },
    staleTime: 0, // Always refetch
    gcTime: 0, // Don't cache results
  });
};
