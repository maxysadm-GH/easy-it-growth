import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const posts = [
  {
    title: "5 Signs Your Business Needs IT Automation",
    excerpt: "Discover the top reasons to automate, from process bottlenecks to growth pains.",
    date: "March 15, 2024",
    category: "Automation",
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "QuickBooks Integration Best Practices",
    excerpt: "How to unify QuickBooks with your business workflows for seamless, accurate results.",
    date: "March 10, 2024", 
    category: "Integration",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Cybersecurity for Small Manufacturers",
    excerpt: "Security essentials every manufacturer needs to defend operations and reputation.",
    date: "March 5, 2024",
    category: "Security",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
  }
];

const BlogTeaser = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
            Latest Insights & Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with expert insights on IT automation, security, and business optimization.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-accent/30 bg-white">
              <CardHeader>
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  draggable={false}
                  loading="lazy"
                />
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm bg-accent/20 text-navy px-2 py-1 rounded-full font-medium font-poppins">
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <CardTitle className="text-lg md:text-xl font-poppins font-bold text-navy hover:text-accent transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Button variant="outline" className="border-navy text-navy font-semibold hover:bg-navy hover:text-accent transition">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-navy text-white hover:bg-deep-blue font-semibold">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};
export default BlogTeaser;
