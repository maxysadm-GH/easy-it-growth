
import { Button } from '@/components/ui/button';

const BlogErrorState = () => {
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
            Unable to Load Posts
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're experiencing technical difficulties. Please try again later.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-yellow text-navy font-bold text-xl px-10 py-6 hover:scale-105 transition-transform duration-300"
            onClick={() => window.location.reload()}
          >
            Retry Loading Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogErrorState;
