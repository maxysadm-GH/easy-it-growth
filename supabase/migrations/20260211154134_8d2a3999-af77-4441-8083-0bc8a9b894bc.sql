
-- Drop the existing public read policy
DROP POLICY IF EXISTS "Allow public read access for unsubscribe" ON public.newsletter_subscribers;

-- Only allow authenticated users to read
CREATE POLICY "Allow authenticated read access"
ON public.newsletter_subscribers FOR SELECT
TO authenticated
USING (true);
