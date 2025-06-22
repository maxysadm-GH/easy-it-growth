
import { useQuery } from '@tanstack/react-query';

// Mock Supabase client for now - this will need to be replaced with actual Supabase integration
const mockSupabase = {
  from: (table: string) => ({
    select: (fields: string) => ({
      order: (field: string, options: any) => ({
        then: () => Promise.resolve({ data: [], error: null })
      }),
      eq: (field: string, value: string) => ({
        single: () => ({
          then: () => Promise.resolve({ data: null, error: null })
        })
      })
    })
  })
};

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  created_at: string;
  seo_keyword: string;
  body: string;
  hero_image_url: string;
  embedded_c: string | null;
  cta_text: string;
  cta_link: string;
  slug?: string;
}

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      console.log('Fetching blog posts from Supabase...');
      
      // Mock data for now until Supabase is properly connected
      const mockData: BlogPost[] = [
        {
          id: '1',
          title: 'The Future of IT Automation in Business',
          author: 'MBACIO Team',
          date: '2024-01-15',
          created_at: '2024-01-15T10:00:00Z',
          seo_keyword: 'IT Automation',
          body: 'In today\'s rapidly evolving business landscape, IT automation has become a cornerstone of operational efficiency and competitive advantage. Organizations that embrace automation are not just streamlining their processes; they\'re positioning themselves for sustainable growth and innovation.\n\nThe benefits of IT automation extend far beyond simple task completion. By automating routine processes, businesses can redirect their human resources toward strategic initiatives that drive real value. This shift allows teams to focus on innovation, customer service, and business development rather than getting bogged down in repetitive tasks.\n\nImplementing effective IT automation requires a strategic approach. Organizations must carefully assess their current processes, identify automation opportunities, and develop a roadmap that aligns with their business objectives. The key is to start small, measure results, and scale successful implementations across the organization.',
          hero_image_url: '/placeholder.svg',
          embedded_c: null,
          cta_text: 'Schedule Your Free IT Assessment',
          cta_link: '/assessment-automation',
          slug: 'future-of-it-automation'
        },
        {
          id: '2',
          title: 'Cybersecurity Best Practices for Small Businesses',
          author: 'Security Team',
          date: '2024-01-10',
          created_at: '2024-01-10T14:30:00Z',
          seo_keyword: 'Cybersecurity',
          body: 'Small businesses are increasingly becoming targets for cybercriminals, making robust cybersecurity measures more critical than ever. The misconception that small businesses are too insignificant to be targeted has proven dangerous and costly for many organizations.\n\nEffective cybersecurity for small businesses starts with understanding the threat landscape. From phishing attacks to ransomware, the variety of threats continues to evolve and become more sophisticated. However, implementing basic security measures can significantly reduce your risk exposure.\n\nEmployee training is one of the most crucial aspects of cybersecurity. Your team is often the first line of defense against cyber threats, and well-trained employees can identify and prevent many common attacks before they cause damage.',
          hero_image_url: '/placeholder.svg',
          embedded_c: null,
          cta_text: 'Get Your Security Assessment',
          cta_link: '/assessment-risk',
          slug: 'cybersecurity-best-practices'
        }
      ];

      console.log('Mock blog posts loaded:', mockData);
      return mockData;
    },
  });
};

export const useBlogPost = (slug: string) => {
  return useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      console.log('Fetching blog post:', slug);
      
      // Mock data - find post by slug
      const mockPosts: BlogPost[] = [
        {
          id: '1',
          title: 'The Future of IT Automation in Business',
          author: 'MBACIO Team',
          date: '2024-01-15',
          created_at: '2024-01-15T10:00:00Z',
          seo_keyword: 'IT Automation',
          body: 'In today\'s rapidly evolving business landscape, IT automation has become a cornerstone of operational efficiency and competitive advantage. Organizations that embrace automation are not just streamlining their processes; they\'re positioning themselves for sustainable growth and innovation.\n\nThe benefits of IT automation extend far beyond simple task completion. By automating routine processes, businesses can redirect their human resources toward strategic initiatives that drive real value. This shift allows teams to focus on innovation, customer service, and business development rather than getting bogged down in repetitive tasks.\n\nImplementing effective IT automation requires a strategic approach. Organizations must carefully assess their current processes, identify automation opportunities, and develop a roadmap that aligns with their business objectives. The key is to start small, measure results, and scale successful implementations across the organization.',
          hero_image_url: '/placeholder.svg',
          embedded_c: null,
          cta_text: 'Schedule Your Free IT Assessment',
          cta_link: '/assessment-automation',
          slug: 'future-of-it-automation'
        },
        {
          id: '2',
          title: 'Cybersecurity Best Practices for Small Businesses',
          author: 'Security Team',
          date: '2024-01-10',
          created_at: '2024-01-10T14:30:00Z',
          seo_keyword: 'Cybersecurity',
          body: 'Small businesses are increasingly becoming targets for cybercriminals, making robust cybersecurity measures more critical than ever. The misconception that small businesses are too insignificant to be targeted has proven dangerous and costly for many organizations.\n\nEffective cybersecurity for small businesses starts with understanding the threat landscape. From phishing attacks to ransomware, the variety of threats continues to evolve and become more sophisticated. However, implementing basic security measures can significantly reduce your risk exposure.\n\nEmployee training is one of the most crucial aspects of cybersecurity. Your team is often the first line of defense against cyber threats, and well-trained employees can identify and prevent many common attacks before they cause damage.',
          hero_image_url: '/placeholder.svg',
          embedded_c: null,
          cta_text: 'Get Your Security Assessment',
          cta_link: '/assessment-risk',
          slug: 'cybersecurity-best-practices'
        }
      ];

      const post = mockPosts.find(p => p.slug === slug);
      if (!post) {
        throw new Error('Post not found');
      }

      console.log('Mock blog post found:', post);
      return post;
    },
  });
};
