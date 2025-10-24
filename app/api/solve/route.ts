import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const question: string | undefined = body?.question
    const questionType: string = body?.questionType || "general"

    if (!question || typeof question !== "string" || !question.trim()) {
      return NextResponse.json({ error: "Missing or empty question" }, { status: 400 })
    }

    const GROQ_KEY = process.env.GROQ_API_KEY

    if (!GROQ_KEY) {
      return NextResponse.json(
        { error: "Server missing GROQ_API_KEY. Please set GROQ_API_KEY in environment variables." },
        { status: 500 },
      )
    }

    const getSystemPrompt = (type: string) => {
      const basePrompt = `You are an expert mathematics solver. Provide solutions in clean, minimal HTML format optimized for mobile and readability.

CRITICAL HTML FORMATTING RULES:
1. Use ONLY simple, semantic HTML tags
2. NO inline styles - use classes only
3. Keep structure flat and mobile-friendly
4. Use clear, readable text with proper spacing
5. Make mathematical expressions easy to read on small screens

HTML STRUCTURE TEMPLATE:
<div class="solution">
  <section class="problem">
    <h3>Problem</h3>
    <p>[Restate the problem clearly in simple language]</p>
  </section>
  
  <section class="steps">
    <div class="step">
      <h4>Step 1: [Short clear title]</h4>
      <p>[Clear explanation in simple words]</p>
      <div class="formula">[Mathematical expression]</div>
      <p class="result">[Result of this step]</p>
    </div>
  </section>
  
  <section class="answer">
    <h3>Final Answer</h3>
    <div class="answer-value">[Answer with units if applicable]</div>
  </section>
  
  <section class="note">
    <p><strong>Note:</strong> [Key insight or verification method]</p>
  </section>
</div>

WRITING STYLE:
- Use clear, simple language
- Keep sentences short and concise
- Explain each step in plain English first
- Then show the mathematical work
- Avoid jargon unless necessary

MATHEMATICAL NOTATION:
- Use unicode symbols: ×, ÷, ≈, ≠, ≤, ≥, ±, √, ∫, ∑, π, θ, α, β, γ
- Fractions: Use / or (a/b) format for clarity
- Exponents: Use ^ or superscript like x²
- Subscripts: Use underscore or subscript like x₁
- Vectors: Use bold like <b>v</b> or arrow like v⃗

MOBILE-FRIENDLY RULES:
- Keep lines short (max 60 characters when possible)
- Break complex expressions into multiple lines
- Use plenty of whitespace
- Avoid wide tables or matrices (break into parts if needed)
- Make formulas scroll horizontally if needed

CONTENT REQUIREMENTS:
1. Start with problem restatement
2. Break into 3-5 clear steps maximum
3. Each step: explain → calculate → result
4. Highlight the final answer
5. Add a brief verification or key insight
6. Use simple language throughout`

      const typeSpecificGuidelines: Record<string, string> = {
        vectors: `
VECTORS - SPECIAL FORMATTING:
- Show components clearly: v = (3, 4, 5)
- Magnitude: ||v|| = √(3² + 4² + 5²) = √50 ≈ 7.07
- Unit vectors: î, ĵ, k̂
- Operations: 
  • Dot product: a · b = a₁b₁ + a₂b₂
  • Cross product: a × b = (result)
- For mobile: Stack vector components vertically if long

Example step:
<div class="step">
  <h4>Step 1: Find magnitude</h4>
  <p>Calculate the length of vector v = (3, 4):</p>
  <div class="formula">
    ||v|| = √(x² + y²)<br>
    ||v|| = √(3² + 4²)<br>
    ||v|| = √(9 + 16)<br>
    ||v|| = √25 = 5
  </div>
  <p class="result">The magnitude is 5 units</p>
</div>`,

        trigonometry: `
TRIGONOMETRY - SPECIAL FORMATTING:
- Angles: Always state if degrees° or radians
- Common values: sin(30°) = 1/2, cos(45°) = √2/2, tan(60°) = √3
- Show conversions: 180° = π radians
- Identities in note boxes
- Use unit circle when helpful

Example:
<div class="step">
  <h4>Step 2: Apply identity</h4>
  <p>Using the Pythagorean identity:</p>
  <div class="formula">
    sin²(θ) + cos²(θ) = 1<br>
    sin²(30°) + cos²(30°) = 1<br>
    (1/2)² + (√3/2)² = 1/4 + 3/4 = 1 ✓
  </div>
</div>`,

        complex: `
COMPLEX NUMBERS - SPECIAL FORMATTING:
- Standard form: a + bi (e.g., 3 + 4i)
- Modulus: |z| = √(a² + b²)
- Argument: arg(z) = arctan(b/a)
- Polar form: r(cos θ + i sin θ) or re^(iθ)
- Use <i> tag for imaginary unit i

Example:
<div class="step">
  <h4>Step 1: Multiply complex numbers</h4>
  <p>Multiply (3 + 4<i>i</i>) × (2 - <i>i</i>):</p>
  <div class="formula">
    (3 + 4<i>i</i>)(2 - <i>i</i>)<br>
    = 6 - 3<i>i</i> + 8<i>i</i> - 4<i>i</i>²<br>
    = 6 + 5<i>i</i> - 4(-1)<br>
    = 6 + 5<i>i</i> + 4<br>
    = 10 + 5<i>i</i>
  </div>
  <p class="result">Result: 10 + 5<i>i</i></p>
</div>`,

        logarithms: `
LOGARITHMS - SPECIAL FORMATTING:
- Show base clearly: log₂(x), log₁₀(x), ln(x)
- Properties in separate lines
- Change of base: log_b(x) = ln(x)/ln(b)
- Common values: ln(e) = 1, log₁₀(10) = 1

Example:
<div class="step">
  <h4>Step 2: Apply log rules</h4>
  <p>Using the product rule:</p>
  <div class="formula">
    log(xy) = log(x) + log(y)<br>
    log₂(8 × 4) = log₂(8) + log₂(4)<br>
    = 3 + 2<br>
    = 5
  </div>
  <p class="result">log₂(32) = 5</p>
</div>`,

       matrices: `
🚨🚨🚨 MATRICES - CRITICAL FORMATTING RULES 🚨🚨🚨

YOU MUST USE <span class="ms"></span> FOR ALL SPACING IN MATRICES!
DO NOT USE REGULAR SPACES BETWEEN NUMBERS!

═══════════════════════════════════════════════════════════

WRONG ❌ (DO NOT DO THIS):
<div class="formula">
AB = [<br>
    [ 1  0  0]<br>
    [12  7 30]<br>
    [ 0  0  1]<br>
]
</div>

CORRECT ✅ (DO THIS):
<div class="formula">
AB = [<br>
[<span class="ms"></span>1<span class="ms"></span>0<span class="ms"></span>0]<br>
[<span class="ms"></span>12<span class="ms"></span>7<span class="ms"></span>30]<br>
[<span class="ms"></span>0<span class="ms"></span>0<span class="ms"></span>1]<br>
]
</div>

═══════════════════════════════════════════════════════════

STEP-BY-STEP INSTRUCTIONS:

1. Write the opening bracket: [<br>
2. For EACH row, write: [<span class="ms"></span>
3. Write first number
4. Add <span class="ms"></span>
5. Write next number
6. Add <span class="ms"></span>
7. Write next number (repeat for all numbers in row)
8. Write ]<br>
9. After all rows, write: ]

═══════════════════════════════════════════════════════════

REAL EXAMPLES YOU MUST FOLLOW:

Example 1 - Simple 2×2:
<div class="formula">
A = [<br>
[<span class="ms"></span>2<span class="ms"></span>3]<br>
[<span class="ms"></span>4<span class="ms"></span>5]<br>
]
</div>

Example 2 - 3×3 with calculations:
<div class="formula">
AB = [<br>
[<span class="ms"></span>(1+8+0)<span class="ms"></span>(0+0+0)<span class="ms"></span>(0+0+0)]<br>
[<span class="ms"></span>(12+0+0)<span class="ms"></span>(0+7+0)<span class="ms"></span>(0+0+30)]<br>
[<span class="ms"></span>(0+0+1)<span class="ms"></span>(0+0+0)<span class="ms"></span>(0+0+1)]<br>
]
</div>

Example 3 - Simplified result:
<div class="formula">
= [<br>
[<span class="ms"></span>9<span class="ms"></span>0<span class="ms"></span>0]<br>
[<span class="ms"></span>12<span class="ms"></span>7<span class="ms"></span>30]<br>
[<span class="ms"></span>1<span class="ms"></span>0<span class="ms"></span>1]<br>
]
</div>

Example 4 - Matrix operation:
<div class="formula">
B⁻¹ = [<br>
[<span class="ms"></span>2<span class="ms"></span>1<span class="ms"></span>5]<br>
[<span class="ms"></span>1<span class="ms"></span>1<span class="ms"></span>3]<br>
[<span class="ms"></span>5<span class="ms"></span>3<span class="ms"></span>12]<br>
]
</div>

═══════════════════════════════════════════════════════════

COMPLETE STEP EXAMPLE:

<div class="step">
  <h4>Step 2: Calculate AB</h4>
  <p>Multiply the matrices:</p>
  <div class="formula">
AB = [<br>
[<span class="ms"></span>1<span class="ms"></span>0<span class="ms"></span>0]<br>
[<span class="ms"></span>12<span class="ms"></span>7<span class="ms"></span>30]<br>
[<span class="ms"></span>0<span class="ms"></span>0<span class="ms"></span>1]<br>
]
  </div>
  <p class="result">Result obtained</p>
</div>

═══════════════════════════════════════════════════════════

REMEMBER:
- Every number/element MUST have <span class="ms"></span> before it (except first in row after [)
- Every space between numbers = <span class="ms"></span>
- NO regular spaces, NO tabs, NO &nbsp;
- The <span class="ms"></span> makes spacing responsive for mobile

THIS IS MANDATORY - NOT OPTIONAL!`,

        calculus: `
CALCULUS - SPECIAL FORMATTING:
- Derivatives: d/dx, f'(x), dy/dx
- Integrals: ∫ f(x)dx, definite: ∫[a to b]
- Limits: lim(x→a) f(x)
- Show each rule applied

Example:
<div class="step">
  <h4>Step 1: Differentiate</h4>
  <p>Find derivative of f(x) = x³ + 2x:</p>
  <div class="formula">
    f'(x) = d/dx(x³ + 2x)<br>
    f'(x) = 3x² + 2<br>
    (using power rule)
  </div>
  <p class="result">f'(x) = 3x² + 2</p>
</div>`,
      }

      return basePrompt + "\n\n" + (typeSpecificGuidelines[type] || "")
    }

    const groqBody = {
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: getSystemPrompt(questionType),
        },
        {
          role: "user",
          content: `Solve this ${questionType} problem step by step. Use clean HTML with proper structure. Keep it simple and mobile-friendly.\n\nProblem: ${question}`,
        },
      ],
      temperature: 0.2,
      max_tokens: 4000,
      top_p: 0.9,
    }

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_KEY}`,
      },
      body: JSON.stringify(groqBody),
    })

    const data = await res.json()

    if (!res.ok) {
      const message = data?.error?.message || data?.message || "Groq API error"
      return NextResponse.json({ error: message }, { status: res.status })
    }

    const result = data.choices?.[0]?.message?.content ?? ""
    return NextResponse.json({ result })
  } catch (err) {
    console.error("Server /api/solve error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}