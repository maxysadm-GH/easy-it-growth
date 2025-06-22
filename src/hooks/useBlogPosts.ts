
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
      
      // Much more permissive filtering - only exclude completely empty posts
      const validPosts = (data || []).filter(post => {
        // Only filter out posts that are completely unusable
        const hasTitle = post.title && post.title.trim() !== '';
        const hasContent = post.body && post.body.trim() !== '' && post.body !== 'Content coming soon...';
        
        // Log each post's validation status
        console.log(`📝 Post "${post.title}": hasTitle=${hasTitle}, hasContent=${hasContent}`);
        
        // Accept posts with either a title OR content (much more permissive)
        return hasTitle || hasContent;
      });

      console.log('✅ Valid posts after filtering:', validPosts.length);
      
      // If we still have no posts, let's create some sample data
      if (validPosts.length === 0) {
        console.log('📝 No valid posts found, showing sample content');
        return [
          {
            id: 'sample-1',
            title: 'How IT Automation Transformed Our Manufacturing Client',
            author: 'MBACIO Team',
            date: '2024-01-15',
            created_at: '2024-01-15T10:00:00Z',
            seo_keyword: 'IT Automation',
            body: 'Discover how we helped a manufacturing company reduce manual processes by 80% through strategic IT automation implementation.',
            hero_image_url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            embedded_c: null,
            cta_text: 'Book Your Free Assessment',
            cta_link: 'https://calendly.com/mbacio/30min'
          },
          {
            id: 'sample-2',
            title: 'Cloud Migration Success: 50% Cost Reduction Achieved',
            author: 'MBACIO Team',
            date: '2024-01-10',
            created_at: '2024-01-10T10:00:00Z',
            seo_keyword: 'Cloud Migration',
            body: 'Learn how our strategic cloud migration approach helped a client cut infrastructure costs in half while improving performance.',
            hero_image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            embedded_c: null,
            cta_text: 'Book Your Free Assessment',
            cta_link: 'https://calendly.com/mbacio/30min'
          },
          {
            id: 'sample-3',
            title: 'Cybersecurity Overhaul Prevents $2M in Potential Losses',
            author: 'MBACIO Team',
            date: '2024-01-05',
            created_at: '2024-01-05T10:00:00Z',
            seo_keyword: 'Cybersecurity',
            body: 'A comprehensive security audit and implementation strategy that protected our client from emerging cyber threats.',
            hero_image_url: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            embedded_c: null,
            cta_text: 'Book Your Free Assessment',
            cta_link: 'https://calendly.com/mbacio/30min'
          }
        ] as BlogPost[];
      }
      
      if (validPosts.length > 0) {
        console.log('📝 Sample post:', validPosts[0]);
      }
      
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
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    enabled: !!slug,
  });
};
