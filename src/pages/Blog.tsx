
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Tag, User } from 'lucide-react';

const categories = [
  { name: "All", count: 12 },
  { name: "IT Tips", count: 4 },
  { name: "Cybersecurity", count: 3 },
  { name: "AI & Automation", count: 3 },
  { name: "Client Wins", count: 2 }
];

const blogPosts = [
  {
    title: "How We Helped a Midwest Manufacturer Reduce IT Tickets by 70% Using Automation",
    excerpt: "Discover the step-by-step automation strategy that transformed a manufacturing company's IT operations and dramatically reduced support tickets. Learn about the specific tools and processes we implemented.",
    category: "Client Wins",
    date: "December 15, 2024",
    readTime: "5 min read",
    author: "MBACIO Team",
    featured: true,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
  },
  {
    title: "5 Critical Cybersecurity Mistakes Small Manufacturers Make",
    excerpt: "Learn about the most common security vulnerabilities we see in manufacturing environments and how to protect your business from costly breaches.",
    category: "Cybersecurity",
    date: "December 10, 2024",
    readTime: "7 min read",
    author: "MBACIO Security Team",
    featured: false,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop"
  },
  {
    title: "AI Dashboards: Turn Your Business Data Into Competitive Advantage",
    excerpt: "Explore how AI-powered dashboards can provide real-time insights and predictive analytics for better business decisions.",
    category: "AI & Automation",
    date: "December 8, 2024",
    readTime: "6 min read",
    author: "MBACIO AI Team",
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop"
  },
  {
    title: "Microsoft 365 vs Google Workspace: Which is Right for Your Business?",
    excerpt: "A comprehensive comparison of the two leading productivity suites, including security, collaboration features, and cost analysis.",
    category: "IT Tips",
    date: "December 5, 2024",
    readTime: "8 min read",
    author: "MBACIO Consultants",
    featured: false,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop"
  },
  {
    title: "The ROI of Automation: Real Numbers from Real Clients",
    excerpt: "See actual ROI data from our automation implementations and learn how to calculate the potential savings for your business.",
    category: "Client Wins",
    date: "December 1, 2024",
    readTime: "4 min read",
    author: "MBACIO Analytics",
    featured: false,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-deep-blue to-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold mb-8 drop-shadow-header">
              MBACIO Insights
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Expert insights on IT strategy, automation, cybersecurity, and real client success stories.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.name === "All" ? "default" : "outline"}
                className={`${category.name === "All" ? "bg-navy text-white" : "border-navy text-navy hover:bg-navy hover:text-white"} transition-all duration-300`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Featured Post */}
            <div className="mb-12">
              <Card className="group hover:shadow-2xl transition-all duration-500 border border-accent/20 bg-white overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                        <Tag className="w-3 h-3" />
                        {blogPosts[0].category}
                      </span>
                      <span className="text-muted-foreground text-sm">Featured</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-poppins font-bold text-navy mb-4 group-hover:text-accent transition-colors duration-300">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blogPosts[0].date}
                      </div>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    <Button className="bg-navy text-white hover:bg-deep-blue font-semibold w-fit group/btn">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Regular Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-accent/20 bg-white overflow-hidden">
                  <div className="aspect-video">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-poppins font-bold text-navy group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="outline" className="border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-all duration-300 group/btn w-full">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8 text-accent">
            Stay Ahead of the Curve
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Get the latest IT insights, automation strategies, and success stories delivered to your inbox.
          </p>
          <Button size="lg" className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300">
            Subscribe to Our Newsletter
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
