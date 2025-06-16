
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const blogPosts = [
  {
    title: "How We Helped a Midwest Manufacturer Reduce IT Tickets by 70% Using Automation",
    excerpt: "Discover the step-by-step automation strategy that transformed a manufacturing company's IT operations and dramatically reduced support tickets.",
    category: "Client Wins",
    date: "December 15, 2024",
    readTime: "5 min read",
    featured: true
  },
  {
    title: "5 Critical Cybersecurity Mistakes Small Manufacturers Make",
    excerpt: "Learn about the most common security vulnerabilities we see in manufacturing environments and how to protect your business.",
    category: "Cybersecurity",
    date: "December 10, 2024",
    readTime: "7 min read",
    featured: false
  },
  {
    title: "AI Dashboards: Turn Your Business Data Into Competitive Advantage",
    excerpt: "Explore how AI-powered dashboards can provide real-time insights and predictive analytics for better business decisions.",
    category: "AI & Automation",
    date: "December 8, 2024",
    readTime: "6 min read",
    featured: false
  }
];

const BlogTeaser = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6">
            Latest Insights & Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay ahead with expert IT insights, automation strategies, and real client success stories.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-accent/20 bg-white overflow-hidden ${post.featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
                <CardTitle className={`font-poppins font-bold text-navy group-hover:text-accent transition-colors duration-300 ${post.featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative">
                <p className={`text-muted-foreground leading-relaxed mb-6 ${post.featured ? 'text-lg' : 'text-base'}`}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <Button variant="outline" className="border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-all duration-300 group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-navy text-white hover:bg-deep-blue font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;
