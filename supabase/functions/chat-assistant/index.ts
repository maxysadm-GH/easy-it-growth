
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

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    
    if (!message) {
      throw new Error('Message is required');
    }

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

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

INSTRUCTIONS:
- Always be helpful, professional, and knowledgeable about MBACIO's services
- Provide specific, actionable information about IT solutions
- When discussing services, mention relevant benefits and differentiators
- If asked about pricing, explain that it varies by project and suggest a free assessment
- Always offer to help users book a free consultation when appropriate
- Mention the 60-day satisfaction warranty when relevant
- Be concise but informative
- If you don't know something specific, be honest and offer to connect them with a human
- Remember that MBACIO serves businesses nationwide with bilingual support

SOURCE ATTRIBUTION:
When providing information, you can reference "According to MBACIO's service offerings..." or "Based on MBACIO's expertise..." to show knowledge source.`
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
