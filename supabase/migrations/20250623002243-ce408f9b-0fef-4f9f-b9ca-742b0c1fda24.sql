
-- Fix all remaining Calendly links in blog posts with proper mappings
UPDATE public.blog_posts 
SET cta_link = '/tools/cyber-risk'
WHERE cta_text ILIKE '%security%' OR cta_text ILIKE '%cyber%' OR cta_text ILIKE '%risk assessment%';

UPDATE public.blog_posts 
SET cta_link = '/tools/cloud-migration'
WHERE cta_text ILIKE '%cloud migration%' OR cta_text ILIKE '%migration assessment%';

UPDATE public.blog_posts 
SET cta_link = '/assessment-automation'
WHERE cta_text ILIKE '%automation%' OR cta_text ILIKE '%automation assessment%';

-- Update all remaining Calendly links to Microsoft Bookings with corrected URL format
UPDATE public.blog_posts 
SET cta_link = 'https://outlook.office.com/book/MBACIOITAssessments@mbacio.com/'
WHERE cta_link LIKE '%calendly%';

-- Also update any booking-related CTAs to use the corrected Microsoft Bookings URL
UPDATE public.blog_posts 
SET cta_link = 'https://outlook.office.com/book/MBACIOITAssessments@mbacio.com/'
WHERE cta_text ILIKE '%free assessment%' OR cta_text ILIKE '%book%';
