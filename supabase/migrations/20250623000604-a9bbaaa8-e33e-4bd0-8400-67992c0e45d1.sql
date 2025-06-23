
-- Create newsletter_subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  source TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS)
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (for unsubscribe functionality)
CREATE POLICY "Allow public read access for unsubscribe" 
  ON public.newsletter_subscribers 
  FOR SELECT 
  USING (true);

-- Create policy for public insert (for subscriptions)
CREATE POLICY "Allow public insert for subscriptions" 
  ON public.newsletter_subscribers 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy for public update (for unsubscribe)
CREATE POLICY "Allow public update for unsubscribe" 
  ON public.newsletter_subscribers 
  FOR UPDATE 
  USING (true);

-- Create index for email lookups
CREATE INDEX idx_newsletter_subscribers_email ON public.newsletter_subscribers(email);
CREATE INDEX idx_newsletter_subscribers_status ON public.newsletter_subscribers(status);
