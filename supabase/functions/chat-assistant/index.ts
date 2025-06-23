
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const MBACIO_KNOWLEDGE = `
MBACIO is a bilingual IT consulting company based in Bannockburn, Illinois, serving businesses nationwide.

CORE SERVICES:
- IT Consulting & Strategy
- Managed IT & Cybersecurity  
- Automation & AI Solutions
- ERP/MRP Integration (Fishbowl, Acumatica, QuickBooks)
- Cloud Migrations & Infrastructure
- Dashboard Solutions & Business Intelligence

SPECIALIZATIONS:
- Manufacturing companies (especially food & beverage)
- Professional services (legal, CPA, accounting firms)
- Businesses using ERP/MRP systems
- Finance leaders seeking automation

KEY DIFFERENTIATORS:
- 100% Bilingual support (English/Spanish)
- Real-world experience with every tool they recommend
- Agile methodology approach
- 60-day satisfaction warranty
- 24/7 support and monitoring
- Nationwide service from Chicago/Bannockburn base

ASSESSMENT TOOLS:
- Automation ROI Calculator: Helps calculate potential savings from automation
- Downtime Cost Calculator: Estimates the cost of IT downtime
- Vendor Consolidation Tool: Analyzes potential savings from consolidating vendors
- Cloud Migration Calculator: Estimates cloud migration benefits
- Staff Productivity Analyzer: Measures productivity gains from IT improvements

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
Direct users to book free assessments through the website's booking popup or by calling.
`;

const getPageSpecificContext = (pageContext: string): string => {
  const contextMap: Record<string, string> = {
    'Homepage': 'Focus on introducing MBACIO services, assessment tools, and encouraging free consultations.',
    'Services': 'Emphasize specific service details, pricing discussions, and matching solutions to user needs.',
    'Why Us': 'Highlight unique differentiators, guarantees, bilingual support, and real-world experience.',
    'Assessment Tools': 'Help users understand and use assessment tools, interpret results, and suggest next steps.',
    'Blog': 'Connect blog content to user\'s potential needs and suggest relevant services or tools.',
    'Case Studies': 'Find parallels between case studies and user\'s business, discuss similar opportunities.',
    'Specific Tool': 'Help interpret assessment tool results and translate findings into actionable recommendations.'
  };
  
  return contextMap[pageContext] || 'Provide helpful information about MBACIO services and guide toward relevant solutions.';
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, pageContext } = await req.json();
    
    if (!message) {
      throw new Error('Message is required');
    }

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
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
            content: `You are the MBACIO Assistant, a helpful AI assistant for MBACIO IT consulting company. 

KNOWLEDGE BASE:
${MBACIO_KNOWLEDGE}

PAGE CONTEXT GUIDANCE:
${pageGuidance}

INSTRUCTIONS:
- Always be helpful, professional, and knowledgeable about MBACIO's services
- Provide specific, actionable information about IT solutions
- When discussing services, mention relevant benefits and differentiators
- If asked about pricing, explain that it varies by project and suggest a free assessment
- Always offer to help users book a free consultation when appropriate
- Mention the 60-day satisfaction warranty when relevant
- Be concise but informative - aim for responses under 150 words unless complex explanations are needed
- If you don't know something specific, be honest and offer to connect them with a human
- Remember that MBACIO serves businesses nationwide with bilingual support
- Actively suggest relevant assessment tools when discussing potential problems or improvements
- Guide conversations toward pain point discovery and solution matching
- When users show interest, proactively suggest scheduling consultations

ASSESSMENT TOOLS PROMOTION:
- Mention specific calculators when relevant (ROI, downtime cost, vendor consolidation, etc.)
- Explain how tools help identify opportunities and quantify benefits
- Suggest using multiple tools for comprehensive analysis

LEAD QUALIFICATION:
- Ask about business size, industry, current IT challenges
- Identify automation opportunities and pain points
- Suggest relevant services based on their responses
- Guide toward scheduling when users show qualified interest

SOURCE ATTRIBUTION:
When providing information, you can reference "According to MBACIO's service offerings..." or "Based on MBACIO's expertise..." to show knowledge source.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 400,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`OpenAI API error: ${error}`);
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
        error: 'Sorry, I encountered an error. Please try again or call (773) 657-2300 for immediate assistance.' 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
