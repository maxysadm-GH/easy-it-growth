
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const BlogSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      // Get the current page path as source
      const source = window.location.pathname;
      
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ 
          email: email.toLowerCase().trim(),
          source: source
        }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already Subscribed",
            description: "This email is already subscribed to our newsletter.",
            variant: "default"
          });
        } else {
          throw error;
        }
      } else {
        setIsSubscribed(true);
        toast({
          title: "Successfully Subscribed!",
          description: "Welcome to our community. You'll receive our latest insights soon.",
          variant: "default"
        });
      }
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Subscription Failed",
        description: "There was an error subscribing. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookAssessment = () => {
    window.open('https://outlook.office365.com/owa/calendar/MBACIOFreeAssessment@mbacio.com/bookings/', '_blank');
  };

  if (isSubscribed) {
    return (
      <Card className="bg-gradient-to-r from-accent/10 to-navy/5 border-accent/20 animate-fade-in">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-poppins font-bold text-navy mb-4">
            Welcome to Our Community!
          </h3>
          <p className="text-gray-600 mb-6 font-inter">
            You're now subscribed to receive our latest insights on IT automation, cybersecurity, and business growth strategies.
          </p>
          <Button 
            onClick={handleBookAssessment}
            size="lg"
            className="bg-gradient-yellow text-navy font-bold text-lg px-8 py-4 hover:scale-105 transition-transform duration-300"
          >
            Book Your Free Assessment
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-r from-navy to-deep-blue text-white overflow-hidden animate-fade-in">
      <CardContent className="p-8">
        <div className="flex items-start gap-6">
          <div className="hidden md:block">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-navy" />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl lg:text-3xl font-poppins font-bold mb-4">
              Get More IT Insights Like This
            </h3>
            <p className="text-gray-200 mb-6 text-lg leading-relaxed font-inter">
              Join 500+ business leaders who receive our weekly insights on automation, cybersecurity, and technology strategies that drive real results.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white text-navy placeholder:text-gray-500 border-0 h-12 text-lg font-inter"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="bg-accent text-navy font-bold text-lg px-8 py-3 hover:bg-gradient-yellow transition-all duration-300 hover:scale-105 whitespace-nowrap"
                disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : 'Get Weekly Insights'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
            
            <p className="text-xs text-gray-300 mt-3 font-inter">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogSubscription;
