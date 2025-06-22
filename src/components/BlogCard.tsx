
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  author: string | null;
  date: string | null;
  created_at: string;
  seo_keyword: string | null;
  body: string | null;
  hero_image_url: string | null;
}

interface BlogCardProps {
  post: BlogPost;
  onClick: (title: string) => void;
}

const BlogCard = ({ post, onClick }: BlogCardProps) => {
  const getExcerpt = (body: string | null, maxLength: number = 150) => {
    if (!body || body.trim() === '') return 'Read more to discover the full content...';
    return body.length > maxLength ? body.substring(0, maxLength) + '...' : body;
  };

  const formatDate = (dateString: string | null, createdAt: string) => {
    const date = dateString || createdAt;
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card 
      className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-accent/20 bg-white overflow-hidden cursor-pointer"
      onClick={() => onClick(post.title)}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={post.hero_image_url || `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <CardHeader className="relative">
        <div className="flex items-center gap-3 mb-4">
          {post.seo_keyword && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
              <Tag className="w-3 h-3" />
              {post.seo_keyword}
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-muted-foreground text-sm">
            <Calendar className="w-3 h-3" />
            {formatDate(post.date, post.created_at)}
          </span>
        </div>
        <CardTitle className="text-xl font-poppins font-bold text-navy group-hover:text-accent transition-colors duration-300">
          {post.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative">
        <p className="text-muted-foreground leading-relaxed mb-6 text-base">
          {getExcerpt(post.body)}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {post.author || 'MBACIO Team'}
          </span>
          <Button variant="outline" className="border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-all duration-300 group/btn">
            Read More
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
