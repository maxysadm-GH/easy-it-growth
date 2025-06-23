
-- Update all Calendly links in blog posts to point to appropriate assessment tools
UPDATE public.blog_posts 
SET cta_link = '/tools/cloud-migration'
WHERE cta_text ILIKE '%cloud migration%' OR cta_text ILIKE '%migration assessment%';

UPDATE public.blog_posts 
SET cta_link = '/tools/cyber-risk'
WHERE cta_text ILIKE '%security%' OR cta_text ILIKE '%cyber%' OR cta_text ILIKE '%risk assessment%';

UPDATE public.blog_posts 
SET cta_link = '/assessment-automation'
WHERE cta_text ILIKE '%automation%' OR cta_text ILIKE '%automation assessment%';

UPDATE public.blog_posts 
SET cta_link = 'https://outlook.office365.com/owa/calendar/MBACIOFreeAssessment@mbacio.com/bookings/'
WHERE cta_text ILIKE '%free assessment%' OR cta_text ILIKE '%book%' OR cta_link LIKE '%calendly%';

-- Update any remaining Calendly links to Microsoft Bookings
UPDATE public.blog_posts 
SET cta_link = 'https://outlook.office365.com/owa/calendar/MBACIOFreeAssessment@mbacio.com/bookings/'
WHERE cta_link LIKE '%calendly%';
