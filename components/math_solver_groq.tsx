'use client';
import React, { useState, useRef } from 'react';
import { Calculator, Keyboard, Loader2, CheckCircle, XCircle, Copy, ChevronDown } from 'lucide-react';

// Math symbols organized by category with shortcuts
const mathSymbols = {
  basic: [
    { symbol: '√', label: '√', shortcut: 'sqrt(' },
    { symbol: '∛', label: '∛', shortcut: 'cbrt(' },
    { symbol: 'π', label: 'π', shortcut: 'pi' },
    { symbol: 'e', label: 'e', shortcut: 'e' },
    { symbol: '∞', label: '∞', shortcut: 'inf' },
    { symbol: '±', label: '±', shortcut: '+-' },
    { symbol: '×', label: '×', shortcut: '*' },
    { symbol: '÷', label: '÷', shortcut: '/' },
    { symbol: '≠', label: '≠', shortcut: '!=' },
    { symbol: '≈', label: '≈', shortcut: '~=' },
    { symbol: '≤', label: '≤', shortcut: '<=' },
    { symbol: '≥', label: '≥', shortcut: '>=' },
  ],
  fractions: [
    { symbol: '½', label: '½', shortcut: '1/2' },
    { symbol: '⅓', label: '⅓', shortcut: '1/3' },
    { symbol: '¼', label: '¼', shortcut: '1/4' },
    { symbol: '⅔', label: '⅔', shortcut: '2/3' },
    { symbol: '¾', label: '¾', shortcut: '3/4' },
    { symbol: '⅕', label: '⅕', shortcut: '1/5' },
    { symbol: '/', label: '÷', shortcut: '/' },
  ],
  powers: [
    { symbol: '²', label: 'x²', shortcut: '^2' },
    { symbol: '³', label: 'x³', shortcut: '^3' },
    { symbol: '^', label: 'x^n', shortcut: '^' },
    { symbol: 'ⁿ', label: 'ⁿ', shortcut: '^n' },
    { symbol: '₀', label: '₀', shortcut: '_0' },
    { symbol: '₁', label: '₁', shortcut: '_1' },
    { symbol: '₂', label: '₂', shortcut: '_2' },
    { symbol: 'ₙ', label: 'ₙ', shortcut: '_n' },
  ],
  trig: [
    { symbol: 'sin', label: 'sin', shortcut: 'sin(' },
    { symbol: 'cos', label: 'cos', shortcut: 'cos(' },
    { symbol: 'tan', label: 'tan', shortcut: 'tan(' },
    { symbol: 'cot', label: 'cot', shortcut: 'cot(' },
    { symbol: 'sec', label: 'sec', shortcut: 'sec(' },
    { symbol: 'csc', label: 'csc', shortcut: 'csc(' },
    { symbol: 'arcsin', label: 'sin⁻¹', shortcut: 'arcsin(' },
    { symbol: 'arccos', label: 'cos⁻¹', shortcut: 'arccos(' },
    { symbol: 'arctan', label: 'tan⁻¹', shortcut: 'arctan(' },
    { symbol: 'sinh', label: 'sinh', shortcut: 'sinh(' },
    { symbol: 'cosh', label: 'cosh', shortcut: 'cosh(' },
    { symbol: 'tanh', label: 'tanh', shortcut: 'tanh(' },
  ],
  calculus: [
    { symbol: '∫', label: '∫', shortcut: 'int(' },
    { symbol: '∑', label: '∑', shortcut: 'sum(' },
    { symbol: '∏', label: '∏', shortcut: 'prod(' },
    { symbol: '∂', label: '∂', shortcut: 'partial' },
    { symbol: '∆', label: '∆', shortcut: 'delta' },
    { symbol: '∇', label: '∇', shortcut: 'grad' },
    { symbol: 'lim', label: 'lim', shortcut: 'lim' },
    { symbol: 'd/dx', label: 'd/dx', shortcut: 'd/dx' },
    { symbol: '∞', label: '∞', shortcut: 'inf' },
  ],
  matrix: [
    { symbol: '[', label: '[', shortcut: '[' },
    { symbol: ']', label: ']', shortcut: ']' },
    { symbol: '|', label: '|', shortcut: '|' },
    { symbol: '⟨', label: '⟨', shortcut: '<' },
    { symbol: '⟩', label: '⟩', shortcut: '>' },
    { symbol: 'det', label: 'det', shortcut: 'det(' },
    { symbol: 'tr', label: 'tr', shortcut: 'tr(' },
    { symbol: '×', label: '×', shortcut: 'x' },
    { symbol: '⊗', label: '⊗', shortcut: 'otimes' },
  ],
  vectors: [
    { symbol: '→', label: '→', shortcut: '->' },
    { symbol: '·', label: '·', shortcut: 'dot' },
    { symbol: '×', label: '×', shortcut: 'cross' },
    { symbol: '‖', label: '‖', shortcut: '||' },
    { symbol: 'î', label: 'î', shortcut: 'i^' },
    { symbol: 'ĵ', label: 'ĵ', shortcut: 'j^' },
    { symbol: 'k̂', label: 'k̂', shortcut: 'k^' },
    { symbol: '∇', label: '∇', shortcut: 'grad' },
  ],
  greek: [
    { symbol: 'α', label: 'α', shortcut: 'alpha' },
    { symbol: 'β', label: 'β', shortcut: 'beta' },
    { symbol: 'γ', label: 'γ', shortcut: 'gamma' },
    { symbol: 'δ', label: 'δ', shortcut: 'delta' },
    { symbol: 'θ', label: 'θ', shortcut: 'theta' },
    { symbol: 'λ', label: 'λ', shortcut: 'lambda' },
    { symbol: 'μ', label: 'μ', shortcut: 'mu' },
    { symbol: 'σ', label: 'σ', shortcut: 'sigma' },
    { symbol: 'φ', label: 'φ', shortcut: 'phi' },
    { symbol: 'ω', label: 'ω', shortcut: 'omega' },
    { symbol: 'Σ', label: 'Σ', shortcut: 'Sigma' },
    { symbol: 'Π', label: 'Π', shortcut: 'Pi' },
  ],
  log: [
    { symbol: 'log', label: 'log', shortcut: 'log(' },
    { symbol: 'ln', label: 'ln', shortcut: 'ln(' },
    { symbol: 'log₂', label: 'log₂', shortcut: 'log2(' },
    { symbol: 'log₁₀', label: 'log₁₀', shortcut: 'log10(' },
    { symbol: 'e^', label: 'eˣ', shortcut: 'exp(' },
  ],
};

export default function MathSolver() {
  // Add your Groq API keys here in the code
  const apiKeys = [
    'process.env.GK1',
    'process.env.GK2',
    'process.env.GK3',
    'process.env.GK4',
    'process.env.GK5',
    'process.env.GK6',
    'process.env.GK7',
    'process.env.GK8',
    'process.env.GK9',
    'process.env.GK10',
    'process.env.GK11',
    'process.env.GK12',
    'process.env.GK13',
    'process.env.GK14',
    'process.env.GK15',
    'process.env.GK16',
    'process.env.GK17',
    'process.env.GK18',
    'process.env.GK19',
    'process.env.GK20',
    // Add more API keys as needed
  ];
  
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeCategory, setActiveCategory] = useState('basic');
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Insert symbol at cursor position
  const insertSymbol = (symbol: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = question;
    const before = text.substring(0, start);
    const after = text.substring(end);
    
    setQuestion(before + symbol + after);
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + symbol.length, start + symbol.length);
    }, 0);
  };

  // Copy answer to clipboard
  const copyAnswer = async () => {
    try {
      await navigator.clipboard.writeText(answer);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Format answer with better readability
  const formatAnswer = (text: string) => {
    // Split into sections
    const lines = text.split('\n');
    const formatted: React.ReactNode[] = [];
  let currentSection: string[] = [];

    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      
      // Detect headers (lines with ** or all caps or ending with :)
      if (trimmed.match(/^\*\*.*\*\*$/) || (trimmed.length > 0 && trimmed === trimmed.toUpperCase() && trimmed.length < 50) || trimmed.match(/^[A-Z][^.!?]*:$/)) {
        if (currentSection.length > 0) {
          formatted.push(
            <p key={`p-${idx}`} className="mb-3 leading-relaxed">
              {currentSection.join(' ')}
            </p>
          );
          currentSection = [];
        }
        formatted.push(
          <h3 key={`h-${idx}`} className="text-lg font-semibold text-indigo-900 mt-4 mb-2">
            {trimmed.replace(/\*\*/g, '').replace(/:$/, '')}
          </h3>
        );
      }
      // Detect step markers
      else if (trimmed.match(/^(Step \d+|Part \d+|\d+\.|\d+\))/i)) {
        if (currentSection.length > 0) {
          formatted.push(
            <p key={`p-${idx}`} className="mb-3 leading-relaxed">
              {currentSection.join(' ')}
            </p>
          );
          currentSection = [];
        }
        formatted.push(
          <div key={`step-${idx}`} className="bg-blue-50 border-l-4 border-blue-500 p-3 my-3 rounded-r">
            <p className="font-medium text-blue-900">{line}</p>
          </div>
        );
      }
      // Detect equations (lines with =, mathematical symbols)
      else if (trimmed.match(/[=∫∑∏∂√π]/) && trimmed.length < 100) {
        if (currentSection.length > 0) {
          formatted.push(
            <p key={`p-${idx}`} className="mb-3 leading-relaxed">
              {currentSection.join(' ')}
            </p>
          );
          currentSection = [];
        }
        formatted.push(
          <div key={`eq-${idx}`} className="bg-gray-50 p-3 my-2 rounded font-mono text-center border border-gray-200">
            <code className="text-gray-800 text-base">{line}</code>
          </div>
        );
      }
      // Detect final answer
      else if (trimmed.match(/^(Final Answer|Answer|Result|Solution):/i)) {
        if (currentSection.length > 0) {
          formatted.push(
            <p key={`p-${idx}`} className="mb-3 leading-relaxed">
              {currentSection.join(' ')}
            </p>
          );
          currentSection = [];
        }
        formatted.push(
          <div key={`final-${idx}`} className="bg-green-50 border-2 border-green-500 p-4 my-4 rounded-lg">
            <p className="font-bold text-green-900 text-lg">{line}</p>
          </div>
        );
      }
      // Regular text
      else if (trimmed.length > 0) {
        currentSection.push(line);
      }
      // Empty line - flush current section
      else if (currentSection.length > 0) {
        formatted.push(
          <p key={`p-${idx}`} className="mb-3 leading-relaxed">
            {currentSection.join(' ')}
          </p>
        );
        currentSection = [];
      }
    });

    // Flush remaining
    if (currentSection.length > 0) {
      formatted.push(
        <p key="p-final" className="mb-3 leading-relaxed">
          {currentSection.join(' ')}
        </p>
      );
    }

    return formatted;
  };

  // Solve math problem using Groq
  const solveMath = async () => {
    if (!question.trim()) {
      setError('Please enter a math question');
      return;
    }

    if (apiKeys.length === 0 || !apiKeys[0] || apiKeys[0] === 'gsk_your_first_api_key_here') {
      setError('Please add your Groq API keys in the code');
      return;
    }

    const currentKey = apiKeys[currentKeyIndex];
    
    setLoading(true);
    setError('');
    setAnswer('');

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentKey}`
        },
        body: JSON.stringify({
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
- Use proper mathematical symbols (∫, ∑, √, π, etc.)

Example format:
**Understanding the Problem**
[explanation]

**Step 1: [Action]**
[work shown]
equation = result

**Step 2: [Action]**
[work shown]

**Final Answer:**
[clear final result]`
            },
            {
              role: 'user',
              content: `Solve this math problem step by step:\n\n${question}`
            }
          ],
          temperature: 0.2,
          max_tokens: 3000,
          top_p: 0.9
        })
      });

      if (!response.ok) {
        if (response.status === 429) {
          const nextIndex = (currentKeyIndex + 1) % apiKeys.length;
          setCurrentKeyIndex(nextIndex);
          throw new Error(`Rate limit reached. Switching to API key ${nextIndex + 1}. Please try again.`);
        }
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to get response from Groq');
      }

      const data = await response.json();
      const result = data.choices[0]?.message?.content || 'No solution generated';
      setAnswer(result);
    } catch (err: unknown) {
      let message = 'An error occurred';
      if (err instanceof Error && err.message) message = err.message;
      else if (typeof err === 'string') message = err;
      setError(message);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-2 sm:p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 pt-4 sm:pt-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <Calculator className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">AI Math Solver</h1>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">Powered by Groq (Llama 3.3 70B)</p>
        </div>

        {/* Question Input */}
        <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-6 mb-4 sm:mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">Your Math Question</h2>
            <button
              onClick={() => setShowKeyboard(!showKeyboard)}
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors text-sm"
            >
              <Keyboard className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{showKeyboard ? 'Hide' : 'Show'}</span>
              <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${showKeyboard ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <textarea
            ref={textareaRef}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your math problem... 
Examples:
• Solve: sin²(x) + cos²(x) = ?
• Find det([[1,2],[3,4]])
• Integrate: ∫(2x + 3)dx from 0 to 5
• Vector: (3î + 4ĵ) · (2î - ĵ)
• log₂(64) + ln(e³)"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-sm sm:text-base"
            rows={6}
          />

          {/* Math Keyboard */}
          {showKeyboard && (
            <div className="mt-4 p-3 sm:p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
              <div className="flex gap-1 sm:gap-2 mb-3 overflow-x-auto pb-2 scrollbar-thin">
                {Object.keys(mathSymbols).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                      activeCategory === category
                        ? 'bg-indigo-600 text-white shadow-md scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-1.5 sm:gap-2">
                {mathSymbols[activeCategory as keyof typeof mathSymbols].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => insertSymbol(item.symbol)}
                    className="px-2 sm:px-3 py-2 sm:py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-indigo-50 hover:border-indigo-400 hover:shadow-md active:scale-95 transition-all text-sm sm:text-base font-medium"
                    title={item.shortcut}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-3 text-xs text-gray-500 text-center">
                Tap symbols to insert them into your question
              </div>
            </div>
          )}

          <button
            onClick={solveMath}
            disabled={loading || !question.trim()}
            className="mt-4 w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed font-semibold transition-all shadow-lg hover:shadow-xl disabled:shadow-none flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                Solving...
              </>
            ) : (
              <>
                <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
                Solve Problem
              </>
            )}
          </button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 flex items-start gap-2 sm:gap-3 shadow-md">
            <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-red-800 mb-1 text-sm sm:text-base">Error</h3>
              <p className="text-red-700 text-xs sm:text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Answer Display */}
        {answer && (
          <div className="bg-white rounded-lg shadow-xl p-4 sm:p-5 md:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">Solution</h2>
              </div>
              <button
                onClick={copyAnswer}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-xs sm:text-sm font-medium"
              >
                <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            
            <div className="prose prose-sm sm:prose max-w-none">
              <div className="text-gray-800 text-sm sm:text-base leading-relaxed">
                {formatAnswer(answer)}
              </div>
            </div>
          </div>
          
        )}
      </div>
    </div>
  );
}