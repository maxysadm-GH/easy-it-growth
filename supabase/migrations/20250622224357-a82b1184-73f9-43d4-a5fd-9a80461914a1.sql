
-- Fix NULL dates and update CTA links to booking system
UPDATE blog_posts 
SET 
  date = CASE 
    WHEN date IS NULL OR date = '' THEN TO_CHAR(created_at, 'YYYY-MM-DD')
    ELSE date 
  END,
  author = CASE 
    WHEN author IS NULL OR author = '' THEN 'MBACIO Team'
    ELSE author 
  END,
  cta_text = CASE 
    WHEN cta_text IS NULL OR cta_text = '' THEN 'Book Your Free Assessment'
    ELSE cta_text 
  END,
  cta_link = CASE 
    WHEN cta_link IS NULL OR cta_link = '' OR cta_link LIKE '%calendly%' THEN 'https://calendly.com/mbacio/30min'
    ELSE cta_link 
  END;

-- Clean up any posts with missing critical data
UPDATE blog_posts 
SET 
  title = 'Untitled Post'
WHERE title IS NULL OR title = '';

UPDATE blog_posts 
SET 
  body = 'Content coming soon...'
WHERE body IS NULL OR body = '';

-- Add default hero images for posts without them
UPDATE blog_posts 
SET 
  hero_image_url = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
WHERE hero_image_url IS NULL OR hero_image_url = '';
