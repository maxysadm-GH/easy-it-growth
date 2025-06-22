
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
    queryKey: ['blog-posts-v4'], // New cache key to force refresh
    queryFn: async () => {
      console.log('🔄 Fetching blog posts from Supabase...');
      
      try {
        // Simplified query without complex ordering that might be causing issues
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('❌ Supabase error:', error);
          throw error;
        }

        console.log('✅ Raw Supabase response:', data);
        
        if (!data) {
          console.log('⚠️ No data returned from Supabase');
          return [];
        }
        
        console.log('📊 Number of posts found:', data.length);
        
        if (data.length > 0) {
          console.log('📝 First post:', {
            title: data[0].title,
            id: data[0].id,
            created_at: data[0].created_at
          });
        }
        
        return data as BlogPost[];
      } catch (error) {
        console.error('💥 Query failed:', error);
        
        // Fallback: Try a direct simple query
        console.log('🔄 Attempting fallback query...');
        try {
          const { data: fallbackData, error: fallbackError } = await supabase
            .from('blog_posts')
            .select('id, title, author, date, created_at, seo_keyword, body, hero_image_url, embedded_c, cta_text, cta_link');
            
          if (fallbackError) {
            console.error('❌ Fallback query also failed:', fallbackError);
            throw fallbackError;
          }
          
          console.log('✅ Fallback query successful:', fallbackData?.length || 0, 'posts');
          return fallbackData as BlogPost[] || [];
        } catch (fallbackErr) {
          console.error('💥 All queries failed:', fallbackErr);
          throw fallbackErr;
        }
      }
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
    queryKey: ['blog-post-v4', slug],
    queryFn: async () => {
      console.log('🔍 Fetching blog post by slug:', slug);
      
      try {
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
      } catch (error) {
        console.error('💥 Failed to fetch blog post:', error);
        throw error;
      }
    },
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
};
