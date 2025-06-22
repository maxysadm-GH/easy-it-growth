
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const BlogEmptyState = () => {
  const navigate = useNavigate();

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
        <div className="text-center">
          <h3 className="text-2xl font-poppins font-bold text-navy mb-6">
            Coming Soon
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're working on bringing you valuable insights. Check back soon for our latest posts.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
            onClick={() => navigate('/blog')}
          >
            Book Your Free Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogEmptyState;
