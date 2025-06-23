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
      console.log('🔄 Starting blog posts fetch from Supabase...');
      
      try {
        // First, let's check if we can connect to Supabase at all
        console.log('🔍 Testing Supabase connection...');
        
        const { data, error, count } = await supabase
          .from('blog_posts')
          .select('*', { count: 'exact' })
          .order('created_at', { ascending: false });

        console.log('📊 Supabase response details:', {
          data: data,
          dataLength: data?.length || 0,
          error: error,
          count: count,
          hasData: !!data,
          isArray: Array.isArray(data)
        });

        if (error) {
          console.error('❌ Supabase query error:', {
            message: error.message,
            details: error.details,
            hint: error.hint,
            code: error.code
          });
          throw error;
        }

        // Log each individual post for debugging
        if (data && data.length > 0) {
          console.log('✅ Found blog posts:', data.length);
          data.forEach((post, index) => {
            console.log(`📝 Post ${index + 1}:`, {
              id: post.id,
              title: post.title || '[No Title]',
              author: post.author || '[No Author]',
              created_at: post.created_at,
              hasBody: !!(post.body && post.body.trim()),
              bodyPreview: post.body ? post.body.substring(0, 50) + '...' : '[No Body]'
            });
          });
        } else {
          console.log('⚠️ No blog posts found in database');
          console.log('🔍 Raw data from Supabase:', data);
        }
        
        return (data || []) as BlogPost[];
      } catch (fetchError) {
        console.error('💥 Blog posts fetch failed:', fetchError);
        throw fetchError;
      }
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
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
