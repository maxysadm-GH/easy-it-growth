
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const MBACIO_KNOWLEDGE = `
MBACIO is a bilingual IT consulting company based in Bannockburn, Illinois, serving businesses nationwide.

CORE SERVICES WITH SPECIFIC LINKS:

1. **IT Consulting & Strategy** - We help align your technology with business goals
   - Learn more: /services (Services page)
   - Assessment: /tools/automation-roi (ROI Calculator)
   - Case study: Our chocolate manufacturer client reduced IT tickets by 70%

2. **Managed IT & Cybersecurity** - Complete protection and support
   - Learn more: /services (Services page) 
   - Risk assessment: /tools/cyber-risk (Security Risk Assessment)
   - Real results: 24/7 monitoring prevented major downtime for manufacturing clients

3. **Automation & AI Solutions** - Streamline processes and reduce costs
   - Learn more: /services (Services page)
   - Calculate savings: /tools/automation-roi (Automation ROI Calculator)
   - Success story: 6+ admin hours reclaimed per week through automation

4. **ERP/MRP Integration** - Seamless integration with Fishbowl, Acumatica, QuickBooks
   - Learn more: /services (Services page)
   - For manufacturers: We specialize in food & beverage operations
   - Case study: /case-studies (Real client transformations)

5. **Cloud Migrations & Infrastructure** - Scalable, flexible cloud solutions
   - Learn more: /services (Services page)
   - Migration planning: /tools/cloud-migration (Cloud Migration Calculator)
   - Vendor savings: /tools/vendor-consolidation (Consolidation Calculator)

6. **Dashboard Solutions & Business Intelligence** - Data-driven decision making
   - Learn more: /services (Services page)
   - Productivity gains: /tools/staff-productivity (Staff Productivity Analyzer)
   - Live dashboards: 24/7 monitoring across production & finance operations

ASSESSMENT TOOLS:
- Automation ROI Calculator: /tools/automation-roi
- Cybersecurity Risk Assessment: /tools/cyber-risk  
- Cloud Migration Calculator: /tools/cloud-migration
- Downtime Cost Calculator: /tools/downtime-cost
- Vendor Consolidation Tool: /tools/vendor-consolidation
- Staff Productivity Analyzer: /tools/staff-productivity

SPECIALIZATIONS:
- Manufacturing companies (especially food & beverage)
- Professional services (legal, CPA, accounting firms)
- Businesses using ERP/MRP systems
- Finance leaders seeking automation

KEY DIFFERENTIATORS:
- 100% Bilingual support (English/Spanish)
- Real-world experience with every tool we recommend
- Agile methodology approach
- 60-day satisfaction warranty
- 24/7 support and monitoring
- Nationwide service from Chicago/Bannockburn base

GUARANTEES:
- ROI guaranteed in 6 weeks
- 60-Day satisfaction warranty
- Confidential consultations

CONTACT INFO:
- Phone: (773) 657-2300
- Email: info@mbacio.com
- Address: 2515 Waukegan Road, Bannockburn, IL 60015
- Website: www.mbacio.com
- Business Hours: Monday-Friday 9 AM - 5 PM CT
- Emergency Support: 24/7

BOOKING:
Direct users to use the floating booking widget on the left side of their screen for immediate booking access.
`;

const getPageSpecificContext = (pageContext: string): string => {
  const contextMap: Record<string, string> = {
    'Homepage': 'Focus on introducing MBACIO services with specific links, assessment tools, and encouraging free consultations. Mention the booking widget.',
    'Services': 'Emphasize specific service details with direct links, pricing discussions, and matching solutions to user needs.',
    'Why Us': 'Highlight unique differentiators, guarantees, bilingual support, and real-world experience with specific examples.',
    'Assessment Tools': 'Help users understand and use assessment tools, interpret results, and suggest next steps. Link to relevant services.',
    'Blog': 'Connect blog content to user\'s potential needs and suggest relevant services or tools with specific links.',
    'Case Studies': 'Reference the chocolate manufacturer case study and discuss similar opportunities. Link to relevant assessment tools.',
    'Specific Tool': 'Help interpret assessment tool results and translate findings into actionable recommendations with service links.'
  };
  
  return contextMap[pageContext] || 'Provide helpful information about MBACIO services with specific links and guide toward relevant solutions.';
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, pageContext } = await req.json();
    
    // Health check endpoint
    if (message === 'health check') {
      return new Response(
        JSON.stringify({ status: 'healthy', timestamp: new Date().toISOString() }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    if (!message) {
      throw new Error('Message is required');
    }

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      return new Response(
        JSON.stringify({ 
          reply: "I'm currently unavailable, but you can easily book your free IT assessment using the yellow booking widget on the left side of your screen, or call us directly at (773) 657-2300. Our team is ready to help transform your business with IT automation and consulting services!"
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const pageGuidance = getPageSpecificContext(pageContext || 'Homepage');

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are the MBACIO Assistant, a friendly and knowledgeable IT consultant who helps businesses thrive through technology.

KNOWLEDGE BASE:
${MBACIO_KNOWLEDGE}

PAGE CONTEXT GUIDANCE:
${pageGuidance}

COMMUNICATION STYLE:
Write like a knowledgeable friend, not a corporate bot. Be conversational, warm, and genuinely helpful. Avoid:
- Robotic bullet points
- Generic corporate speak
- Overly formal language
- Repetitive phrases like "Here's a summary of..."

Instead:
- Lead with genuine interest in helping
- Share specific stories and outcomes
- Weave links naturally into conversations
- Focus on real business impact

SERVICE MENU RESPONSE:
When someone asks about services or the main menu, respond like this:

"I'm excited to share how MBACIO transforms businesses through smart IT solutions! Let me tell you about the ways we help companies like yours succeed.

Think about that chocolate manufacturer I mentioned earlier - they were drowning in IT support tickets until we stepped in. Now they've cut those tickets by 70% and their team can focus on what they do best: making great chocolate. That's the power of our **IT Consulting & Strategy** work. [See how we can help your business](/services) or [discover your automation potential](/tools/automation-roi).

Speaking of automation, imagine getting back 6+ hours every week that you currently spend on repetitive tasks. Our **Automation & AI Solutions** make this reality for our clients. [Check out real success stories](/case-studies) or [calculate your potential savings](/tools/automation-roi) right now.

For complete peace of mind, our **Cybersecurity & Managed IT** services provide 24/7 protection. We've prevented major downtime for manufacturing clients who thought they were secure. [Test your current security](/tools/cyber-risk) to see where you stand.

We also excel at **ERP/MRP Integration** (especially for food & beverage companies), **Cloud Migrations**, and **Dashboard Solutions** that turn your data into actionable insights.

What's really exciting is that we guarantee ROI in just 6 weeks, with bilingual support and nationwide coverage from our Chicago base.

Ready to see what's possible? The yellow booking widget on your left makes it easy to start with a free assessment!"

INSTRUCTIONS:
- Always be genuinely helpful and interested in the user's success
- Share specific results and stories naturally
- Include relevant links but weave them into conversation
- Keep responses under 200 words unless complex topics require more
- End with encouraging next steps
- Reference the booking widget for immediate action
- Mention bilingual support and guarantees when relevant
- Focus on business outcomes, not just features`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API error:', error);
      
      return new Response(
        JSON.stringify({ 
          reply: "I'm experiencing some technical difficulties right now, but don't let that stop you! You can still book your free IT assessment using the yellow booking widget on the left side of your screen, or call us directly at (773) 657-2300. Our experts are standing by to help you with automation, cybersecurity, and IT consulting needs."
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const reply = data.choices[0]?.message?.content;

    if (!reply) {
      throw new Error('No response from OpenAI');
    }

    return new Response(
      JSON.stringify({ reply }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in chat-assistant function:', error);
    
    return new Response(
      JSON.stringify({ 
        reply: "I'm having some technical issues, but you can still get help! Use the yellow booking widget on the left side of your screen to book your free IT assessment, or call (773) 657-2300 for immediate assistance. Our bilingual team is ready to discuss your automation and IT consulting needs!"
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
