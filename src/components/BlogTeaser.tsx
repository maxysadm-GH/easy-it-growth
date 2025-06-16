
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const blogPosts = [
  {
    title: "How Smart SMBs Are Using AI to Streamline IT Operations",
    excerpt: "If you're still waiting on reports or solving the same support issues week after week—there's a better way. Learn how AI workflows can reclaim hours of lost productivity.",
    category: "AI & Automation",
    date: "December 15, 2024",
    readTime: "5 min read",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format&q=80"
  },
  {
    title: "5 Critical Cybersecurity Mistakes Small Manufacturers Make",
    excerpt: "These common security vulnerabilities could cost your business everything. Discover the blind spots that hackers exploit and how to protect yourself.",
    category: "Cybersecurity",
    date: "December 10, 2024",
    readTime: "7 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=300&fit=crop&auto=format&q=80"
  },
  {
    title: "The Hidden Cost of IT Downtime: What Every CEO Should Know",
    excerpt: "One hour of downtime could cost your business thousands. See the shocking numbers and learn how to bulletproof your operations.",
    category: "Business Strategy",
    date: "December 8, 2024",
    readTime: "6 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=300&fit=crop&auto=format&q=80"
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
              {/* Image */}
              <div className={`relative overflow-hidden ${post.featured ? 'h-64' : 'h-48'}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

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
