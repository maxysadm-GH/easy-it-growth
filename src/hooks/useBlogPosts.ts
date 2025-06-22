
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

// Sample data that matches what we show in the teaser
const getSamplePosts = (): BlogPost[] => [
  {
    id: 'sample-1',
    title: 'How IT Automation Transformed Our Manufacturing Client',
    author: 'MBACIO Team',
    date: '2024-01-15',
    created_at: '2024-01-15T10:00:00Z',
    seo_keyword: 'IT Automation',
    body: 'Discover how we helped a manufacturing company reduce manual processes by 80% through strategic IT automation implementation.\n\nOur client, a mid-sized manufacturing company, was struggling with inefficient manual processes that were costing them both time and money. They approached MBACIO with a challenge: streamline their operations without disrupting their existing workflow.\n\nThe Challenge\nThe company was facing several critical issues:\n- Manual data entry across multiple systems\n- Inconsistent reporting processes\n- High error rates in inventory management\n- Excessive time spent on routine administrative tasks\n\nOur Solution\nWe implemented a comprehensive IT automation strategy that included:\n- Automated data synchronization between systems\n- Real-time inventory tracking\n- Streamlined reporting dashboards\n- Process automation for routine tasks\n\nThe Results\nWithin 6 months of implementation:\n- 80% reduction in manual data entry\n- 95% improvement in data accuracy\n- 50% faster reporting cycles\n- $200,000+ annual savings in operational costs\n\nThis transformation allowed the company to focus on growth and innovation rather than getting bogged down in administrative tasks.',
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
    body: 'Learn how our strategic cloud migration approach helped a client cut infrastructure costs in half while improving performance.\n\nA growing tech company was facing escalating infrastructure costs and performance bottlenecks with their on-premises setup. They needed a solution that would scale with their growth while reducing operational overhead.\n\nThe Challenge\nThe client was dealing with:\n- Rising hardware maintenance costs\n- Limited scalability options\n- Performance issues during peak usage\n- Complex backup and disaster recovery processes\n\nOur Approach\nWe developed a comprehensive cloud migration strategy:\n- Thorough assessment of existing infrastructure\n- Phased migration approach to minimize downtime\n- Optimization of cloud resources for cost efficiency\n- Implementation of automated scaling and monitoring\n\nThe Results\nPost-migration benefits included:\n- 50% reduction in infrastructure costs\n- 300% improvement in system performance\n- 99.9% uptime achievement\n- Simplified disaster recovery processes\n- Enhanced security posture\n\nThe client now enjoys a modern, scalable infrastructure that grows with their business needs.',
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
    body: 'A comprehensive security audit and implementation strategy that protected our client from emerging cyber threats.\n\nA financial services firm approached us after experiencing several security incidents that highlighted vulnerabilities in their systems. They needed a comprehensive security overhaul to protect their clients and business.\n\nThe Security Gaps\nOur initial assessment revealed:\n- Outdated security protocols\n- Insufficient employee training\n- Lack of multi-factor authentication\n- Inadequate network monitoring\n- Vulnerable third-party integrations\n\nOur Security Strategy\nWe implemented a multi-layered approach:\n- Complete security infrastructure upgrade\n- Advanced threat detection systems\n- Comprehensive employee training program\n- Regular security audits and penetration testing\n- Incident response planning\n\nThe Impact\nWithin the first year:\n- Zero successful security breaches\n- 95% reduction in security incidents\n- Full regulatory compliance achieved\n- Employee security awareness increased by 400%\n- Estimated $2M+ in potential losses prevented\n\nThe client now operates with confidence, knowing their systems and data are protected by enterprise-grade security measures.',
    hero_image_url: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    embedded_c: null,
    cta_text: 'Book Your Free Assessment',
    cta_link: 'https://calendly.com/mbacio/30min'
  }
];

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
      
      // If we have no valid posts from database, return sample data
      if (validPosts.length === 0) {
        console.log('📝 No valid posts found, showing sample content');
        return getSamplePosts();
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

      // First try to find in database posts
      const post = allPosts?.find(post => {
        const generatedSlug = createSlugFromTitle(post.title);
        console.log('🔗 Comparing slugs:', generatedSlug, 'vs', slug);
        return generatedSlug === slug;
      });

      if (post) {
        console.log('✅ Blog post found in database:', post.title);
        return post as BlogPost;
      }

      // If not found in database, check sample posts
      console.log('🔍 Post not found in database, checking sample posts...');
      const samplePosts = getSamplePosts();
      const samplePost = samplePosts.find(post => {
        const generatedSlug = createSlugFromTitle(post.title);
        console.log('🔗 Comparing sample slugs:', generatedSlug, 'vs', slug);
        return generatedSlug === slug;
      });

      if (samplePost) {
        console.log('✅ Sample blog post found:', samplePost.title);
        return samplePost;
      }

      console.log('❌ No post found for slug:', slug);
      throw new Error('Post not found');
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    enabled: !!slug,
  });
};
