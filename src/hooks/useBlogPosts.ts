
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
      
      // Log each post's details for debugging
      if (data) {
        data.forEach((post, index) => {
          console.log(`📝 Post ${index + 1}:`, {
            id: post.id,
            title: post.title || '[No Title]',
            author: post.author || '[No Author]',
            hasBody: !!(post.body && post.body.trim()),
            bodyLength: post.body ? post.body.length : 0,
            created_at: post.created_at
          });
        });
      }
      
      // Return all posts without filtering - let the UI handle display logic
      return (data || []) as BlogPost[];
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnMount: true, // Force refetch on mount to get fresh data
    refetchOnWindowFocus: false,
  });
};

const createSlugFromTitle = (title: string) => {
  if (!title || title.trim() === '') {
    return 'untitled-post';
  }
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
        if (!post.title) return false;
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
