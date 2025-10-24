import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const question: string | undefined = body?.question;

    if (!question || typeof question !== 'string' || !question.trim()) {
      return NextResponse.json({ error: 'Missing or empty question' }, { status: 400 });
    }

    // Read the server-side GROQ API key from environment variables.
    // Set GROQ_API_KEY in your deployment environment (Vercel / .env.local).
    const GROQ_KEY = process.env.GROQ_API_KEY;

    if (!GROQ_KEY) {
      return NextResponse.json(
        { error: 'Server missing GROQ_API_KEY. Please set GROQ_API_KEY in environment variables.' },
        { status: 500 }
      );
    }

    const groqBody = {
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'system',
          content: `You are an expert mathematics solver. When solving problems:

1. ALWAYS show ALL steps clearly and methodically
2. Explain your reasoning at each step
3. Use proper mathematical notation
4. Break down complex problems into smaller parts
5. Verify your final answer
6. For ambiguous problems, state assumptions

Format Guidelines:
- Use clear headers for each major section (wrap in ** like **Step 1**)
- Number your steps (Step 1, Step 2, etc.)
- Show equations on separate lines
- Highlight the FINAL ANSWER at the end with "Final Answer:" prefix
- Use proper mathematical symbols (∫, ∑, √, π, etc.)`
        },
        {
          role: 'user',
          content: `Solve this math problem step by step:\n\n${question}`
        }
      ],
      temperature: 0.2,
      max_tokens: 3000,
      top_p: 0.9
    };

    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GROQ_KEY}`
      },
      body: JSON.stringify(groqBody)
    });

    const data = await res.json();

    if (!res.ok) {
      // Forward useful error messages
      const message = data?.error?.message || data?.message || 'Groq API error';
      return NextResponse.json({ error: message }, { status: res.status });
    }

    const result = data.choices?.[0]?.message?.content ?? '';
    return NextResponse.json({ result });
  } catch (err) {
    console.error('Server /api/solve error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
