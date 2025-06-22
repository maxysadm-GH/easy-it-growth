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
      
      // Only filter out completely empty posts (no title AND no body)
      const validPosts = (data || []).filter(post => {
        const hasTitle = post.title && post.title.trim() !== '';
        const hasBody = post.body && post.body.trim() !== '';
        
        // Keep posts that have either a title OR body content
        const isValid = hasTitle || hasBody;
        
        console.log(`📝 Post "${post.title}": hasTitle=${hasTitle}, hasBody=${hasBody}, isValid=${isValid}`);
        
        return isValid;
      });

      console.log('✅ Valid posts after filtering:', validPosts.length);
      
      return validPosts as BlogPost[];
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
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
    queryKey: ['blog-post', slug],
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

      // Find the post that matches the slug
      const post = allPosts?.find(post => {
        const generatedSlug = createSlugFromTitle(post.title);
        console.log('🔗 Comparing slugs:', generatedSlug, 'vs', slug);
        return generatedSlug === slug;
      });

      if (post) {
        console.log('✅ Blog post found:', post.title);
        return post as BlogPost;
      }

      console.log('❌ No post found for slug:', slug);
      throw new Error('Post not found');
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    enabled: !!slug,
  });
};
