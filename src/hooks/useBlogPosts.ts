
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
    queryKey: ['blog-posts', Date.now()], // Always fresh
    queryFn: async () => {
      console.log('🔄 Fresh fetch: Fetching blog posts from Supabase...');
      
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
      
      if (data && data.length > 0) {
        console.log('📝 Sample post:', data[0]);
      }
      
      return (data as BlogPost[]) || [];
    },
    staleTime: 0, // Always consider data stale
    cacheTime: 0, // Don't cache
    refetchOnMount: true,
    refetchOnWindowFocus: true,
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
    queryKey: ['blog-post', slug, Date.now()],
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
    staleTime: 0,
    cacheTime: 0,
  });
};
