
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
    queryKey: ['blog-posts-v5'], // Updated cache key to fetch fresh data
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

      console.log('✅ Blog posts fetched successfully:', data?.length || 0, 'posts found');
      console.log('📝 First post preview:', data?.[0]?.title || 'No posts');
      
      return data as BlogPost[] || [];
    },
    retry: 2,
    retryDelay: 500,
    staleTime: 5 * 60 * 1000, // 5 minutes
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
    queryKey: ['blog-post-v5', slug],
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
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
};
