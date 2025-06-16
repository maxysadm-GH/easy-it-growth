
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Tag, User } from 'lucide-react';

const blogPosts = [
  {
    title: "How Smart SMBs Are Using AI to Streamline IT Operations",
    excerpt: "If you're still waiting on reports or solving the same support issues week after week—there's a better way. Learn how AI workflows can reclaim hours of lost productivity.",
    category: "AI & Automation",
    date: "December 15, 2024",
    readTime: "5 min read",
    author: "MBACIO Team",
    featured: true,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop"
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy via-slate-gray to-navy text-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-inter font-bold mb-8 drop-shadow-header">
              MBACIO Insights
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Expert insights on IT strategy, automation, cybersecurity, and real client success stories.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            {/* Featured Post */}
            <div className="mb-12">
              <Card className="group hover:shadow-2xl transition-all duration-500 border border-electric-blue/20 bg-white overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="card-spacing lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-electric-blue/10 text-electric-blue rounded-full text-sm font-medium">
                        <Tag className="w-3 h-3" />
                        {blogPosts[0].category}
                      </span>
                      <span className="text-slate-gray text-sm">Featured</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-inter font-bold text-navy mb-4 group-hover:text-electric-blue transition-colors duration-300">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-slate-gray leading-relaxed mb-6 text-lg">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 mb-6 text-sm text-slate-gray">
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
                    <Button className="bg-navy text-white hover:bg-slate-gray font-semibold w-fit group/btn">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* CTA for Assessment */}
            <div className="text-center">
              <Button size="lg" className="bg-electric-blue text-white font-semibold text-xl px-10 py-6 glow-hover">
                Book Your Free Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-navy text-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-5xl font-inter font-bold mb-8 text-electric-blue">
            Stay Ahead of the Curve
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Get the latest IT insights, automation strategies, and success stories delivered to your inbox.
          </p>
          <Button size="lg" className="bg-electric-blue text-white font-semibold text-xl px-10 py-6 glow-hover">
            Subscribe to Our Newsletter
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
