-- Update blog post dates to be more realistic (last article published 9 days ago)
-- Today is 2025-08-19, so last article should be 2025-08-10
UPDATE blog_posts 
SET 
  date = CASE 
    WHEN title = 'The Future is Now: 5 AI-Powered Innovations Revolutionizing Food Manufacturing' THEN '2025-08-10'
    WHEN title = 'Unlocking Efficiency: A Step-by-Step Guide to Implementing AI in Your Food Production Line' THEN '2025-08-01' 
    WHEN title = 'Beyond the Hype: Real-World Case Studies of AI in the Food Industry' THEN '2025-07-23'
    WHEN title = 'AI and Food Safety: How to Build a More Transparent and Secure Food Supply Chain' THEN '2025-07-14'
    WHEN title = 'The Top 5 Challenges of AI in the Food Industry (and How to Overcome Them)' THEN '2025-07-05'
    ELSE date
  END
WHERE title IN (
  'The Future is Now: 5 AI-Powered Innovations Revolutionizing Food Manufacturing',
  'Unlocking Efficiency: A Step-by-Step Guide to Implementing AI in Your Food Production Line', 
  'Beyond the Hype: Real-World Case Studies of AI in the Food Industry',
  'AI and Food Safety: How to Build a More Transparent and Secure Food Supply Chain',
  'The Top 5 Challenges of AI in the Food Industry (and How to Overcome Them)'
);