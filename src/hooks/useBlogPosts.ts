
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
    queryKey: ['blog-posts-v3'], // New cache key to force refresh
    queryFn: async () => {
      console.log('🔄 Fetching blog posts from Supabase...');
      
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .order('date', { ascending: false, nullsFirst: false })
          .order('created_at', { ascending: false });

        if (error) {
          console.error('❌ Error fetching blog posts:', error);
          throw error;
        }

        console.log('✅ Blog posts fetched successfully:', data);
        console.log('📊 Number of posts found:', data?.length || 0);
        
        if (data && data.length > 0) {
          console.log('📝 First post title:', data[0].title);
          console.log('📅 First post date:', data[0].date || data[0].created_at);
        }
        
        return data as BlogPost[];
      } catch (error) {
        console.error('💥 Failed to fetch blog posts:', error);
        throw error;
      }
    },
    retry: 3,
    retryDelay: 1000,
    staleTime: 0,
    gcTime: 0,
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
    queryKey: ['blog-post-v3', slug], // New cache key to force refresh
    queryFn: async () => {
      console.log('🔍 Fetching blog post by slug:', slug);
      
      try {
        const { data: allPosts, error } = await supabase
          .from('blog_posts')
          .select('*');
        
        if (error) {
          console.error('❌ Error fetching blog posts for slug matching:', error);
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
    retry: 2,
    retryDelay: 1000,
    staleTime: 0,
    gcTime: 0,
  });
};
