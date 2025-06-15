
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const posts = [
  {
    title: "5 Signs Your Business Needs IT Automation",
    excerpt: "Discover the key indicators that your growing business would benefit from automated IT processes and workflows.",
    date: "March 15, 2024",
    category: "Automation",
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "QuickBooks Integration Best Practices",
    excerpt: "Learn how to seamlessly connect QuickBooks with your existing business tools for maximum efficiency.",
    date: "March 10, 2024", 
    category: "Integration",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Cybersecurity for Small Manufacturers",
    excerpt: "Essential security measures every food & beverage manufacturer should implement to protect their operations.",
    date: "March 5, 2024",
    category: "Security",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
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
            <span className="block mt-2 text-accent font-semibold">Coming soon: AI-generated content powered by n8n automation</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  draggable={false}
                  loading="lazy"
                />
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm bg-accent/20 text-navy px-2 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <CardTitle className="text-xl font-poppins font-bold text-navy hover:text-accent transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
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

