
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
    queryKey: ['blog-posts'], // Fixed: removed Date.now() that caused infinite re-fetching
    queryFn: async () => {
      console.log('🔄 Fetching blog posts from Supabase...');
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('❌ Supabase error:', error);
        throw error;
      }

      console.log('✅ Raw Supabase response:', data);
      console.log('📊 Posts count:', data?.length || 0);
      
      // Filter out posts with missing critical data
      const validPosts = (data || []).filter(post => 
        post.title && 
        post.title.trim() !== '' && 
        post.title !== 'Untitled Post' &&
        post.body && 
        post.body.trim() !== '' && 
        post.body !== 'Content coming soon...'
      );

      console.log('✅ Valid posts after filtering:', validPosts.length);
      
      if (validPosts.length > 0) {
        console.log('📝 Sample post:', validPosts[0]);
      }
      
      return validPosts as BlogPost[];
    },
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
    refetchOnMount: false, // Don't refetch on every mount
    refetchOnWindowFocus: false, // Don't refetch on window focus
  });
};

const createSlugFromTitle = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ['blog-post', slug], // Fixed: removed Date.now()
    queryFn: async () => {
      console.log('🔍 Fetching blog post by slug:', slug);
      
      const { data: allPosts, error } = await supabase
        .from('blog_posts')
        .select('*');
      
      if (error) {
        console.error('❌ Error fetching posts for slug matching:', error);
        throw error;
      }

      console.log('📚 All posts for slug matching:', allPosts?.length || 0);

      const post = allPosts?.find(post => {
        const generatedSlug = createSlugFromTitle(post.title);
        console.log('🔗 Comparing slugs:', generatedSlug, 'vs', slug);
        return generatedSlug === slug;
      });

      if (!post) {
        console.log('❌ No post found for slug:', slug);
        throw new Error('Post not found');
      }

      console.log('✅ Blog post found:', post.title);
      return post as BlogPost;
    },
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
    enabled: !!slug, // Only run query if slug exists
  });
};
