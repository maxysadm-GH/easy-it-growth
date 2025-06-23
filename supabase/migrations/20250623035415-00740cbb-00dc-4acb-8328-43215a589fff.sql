
-- Enable RLS on blog_posts table (if not already enabled)
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access to blog posts
-- This allows anyone (authenticated or not) to view blog posts
CREATE POLICY "Anyone can view blog posts" 
  ON public.blog_posts 
  FOR SELECT 
  USING (true);

-- Create policy for authenticated users to insert blog posts
-- This restricts blog creation to authenticated users only
CREATE POLICY "Authenticated users can create blog posts" 
  ON public.blog_posts 
  FOR INSERT 
  TO authenticated
  WITH CHECK (true);

-- Create policy for authenticated users to update blog posts
-- This restricts blog editing to authenticated users only
CREATE POLICY "Authenticated users can update blog posts" 
  ON public.blog_posts 
  FOR UPDATE 
  TO authenticated
  USING (true);

-- Create policy for authenticated users to delete blog posts
-- This restricts blog deletion to authenticated users only
CREATE POLICY "Authenticated users can delete blog posts" 
  ON public.blog_posts 
  FOR DELETE 
  TO authenticated
  USING (true);
