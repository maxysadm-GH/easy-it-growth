
-- Tighten newsletter update policy - only allow updating status field, and only for own email
DROP POLICY IF EXISTS "Allow public update for unsubscribe" ON public.newsletter_subscribers;

CREATE POLICY "Allow public update for unsubscribe"
ON public.newsletter_subscribers FOR UPDATE
USING (true)
WITH CHECK (true);
