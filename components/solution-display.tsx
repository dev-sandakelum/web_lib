"use client"

import type React from "react"

interface SolutionDisplayProps {
  content: string
}

export function SolutionDisplay({ content }: SolutionDisplayProps) {
  // Clean and sanitize HTML content
  const cleanHTML = (html: string) => {
    let cleaned = html.replace(/```html\n?/g, "").replace(/```\n?/g, "")
    
    if (!cleaned.includes("<div") && !cleaned.includes("<section")) {
      cleaned = `<div class="solution">${cleaned}</div>`
    }
    
    return cleaned
  }

  return (
    <div className="solution-wrapper">
      <style jsx>{`
        /* Import clean system font stack */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .solution-wrapper {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: #1a1a1a;
          max-width: 100%;
          overflow-x: hidden;
        }

        /* Clean section styling */
        .solution-wrapper :global(.solution) {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .solution-wrapper :global(section) {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 24px;
          transition: box-shadow 0.2s;
        }

        .solution-wrapper :global(section:hover) {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        /* Problem section */
        .solution-wrapper :global(.problem) {
          background: #fafafa;
          border-left: 4px solid #3b82f6;
        }

        .solution-wrapper :global(.problem h3) {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 12px 0;
          letter-spacing: -0.01em;
        }

        .solution-wrapper :global(.problem p) {
          color: #404040;
          margin: 0;
          font-size: 15px;
        }

        /* Steps section */
        .solution-wrapper :global(.steps) {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 0;
          background: transparent;
          border: none;
        }

        .solution-wrapper :global(.step) {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 20px;
          position: relative;
          padding-left: 48px;
        }

        .solution-wrapper :global(.step::before) {
          content: '';
          position: absolute;
          left: 18px;
          top: 18px;
          width: 8px;
          height: 8px;
          background: #3b82f6;
          border-radius: 50%;
        }

        .solution-wrapper :global(.step h4) {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 12px 0;
          letter-spacing: -0.01em;
        }

        .solution-wrapper :global(.step p) {
          color: #525252;
          margin: 10px 0;
          font-size: 15px;
          line-height: 1.6;
        }

        /* Formula styling - clean and minimal */
        .solution-wrapper :global(.formula) {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 18px;
          margin: 14px 0;
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.9;
          color: #1e293b;
          overflow-x: auto;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .solution-wrapper :global(.formula br) {
          display: block;
          content: '';
          margin: 5px 0;
        }

        /* Matrix styling */
        .solution-wrapper :global(.matrix) {
          display: inline-block;
          background: #ffffff;
          border: 2px solid #3b82f6;
          border-radius: 6px;
          padding: 12px 16px;
          margin: 8px 0;
          font-family: 'JetBrains Mono', monospace;
          line-height: 2;
          letter-spacing: 0.8em;
          text-align: left;
        }

        .solution-wrapper :global(.matrix-row) {
          display: block;
          white-space: nowrap;
        }

        /* Matrix spacing helper class */
        .solution-wrapper :global(.ms) {
          display: inline-block;
          width: 2em;
        }

        /* Result highlighting */
        .solution-wrapper :global(.result) {
          background: #f0fdf4;
          border-left: 3px solid #22c55e;
          padding: 12px 16px;
          margin: 14px 0 0 0;
          border-radius: 6px;
          color: #15803d;
          font-weight: 500;
          font-size: 15px;
        }

        /* Final answer section */
        .solution-wrapper :global(.answer) {
          background: linear-gradient(to bottom right, #ecfdf5, #d1fae5);
          border: 2px solid #86efac;
          border-left: 4px solid #22c55e;
        }

        .solution-wrapper :global(.answer h3) {
          font-size: 18px;
          font-weight: 700;
          color: #15803d;
          margin: 0 0 14px 0;
          display: flex;
          align-items: center;
          gap: 8px;
          letter-spacing: -0.01em;
        }

        .solution-wrapper :global(.answer h3::before) {
          content: '✓';
          font-size: 20px;
        }

        .solution-wrapper :global(.answer-value) {
          background: #ffffff;
          border: 2px solid #86efac;
          border-radius: 8px;
          padding: 18px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 18px;
          font-weight: 600;
          color: #15803d;
          text-align: center;
          letter-spacing: -0.02em;
        }

        /* Note section */
        .solution-wrapper :global(.note) {
          background: #fffbeb;
          border: 1px solid #fde68a;
          border-left: 4px solid #f59e0b;
        }

        .solution-wrapper :global(.note p) {
          margin: 0;
          color: #78350f;
          font-size: 14px;
        }

        .solution-wrapper :global(.note strong) {
          color: #92400e;
          font-weight: 600;
        }

        /* Typography */
        .solution-wrapper :global(h3) {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 12px 0;
          letter-spacing: -0.01em;
        }

        .solution-wrapper :global(h4) {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 10px 0;
          letter-spacing: -0.01em;
        }

        .solution-wrapper :global(p) {
          margin: 10px 0;
          line-height: 1.7;
          color: #404040;
        }

        .solution-wrapper :global(strong) {
          font-weight: 600;
          color: #1a1a1a;
        }

        .solution-wrapper :global(em), 
        .solution-wrapper :global(i) {
          font-style: italic;
          color: #6366f1;
          font-weight: 500;
        }

        .solution-wrapper :global(b) {
          font-weight: 600;
        }

        /* Code and mathematical symbols */
        .solution-wrapper :global(code) {
          background: #f1f5f9;
          padding: 2px 6px;
          border-radius: 4px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9em;
          color: #475569;
        }

        .solution-wrapper :global(sup) {
          font-size: 0.7em;
          vertical-align: super;
          line-height: 0;
        }

        .solution-wrapper :global(sub) {
          font-size: 0.7em;
          vertical-align: sub;
          line-height: 0;
        }

        /* Lists */
        .solution-wrapper :global(ul), 
        .solution-wrapper :global(ol) {
          margin: 12px 0;
          padding-left: 24px;
        }

        .solution-wrapper :global(li) {
          margin: 8px 0;
          line-height: 1.6;
          color: #404040;
        }

        /* Ultra Mobile Responsive - Maximum Readability */
        @media (max-width: 640px) {
          .solution-wrapper {
            font-size: 16px;
            line-height: 1.8;
            padding: 0;
          }

          .solution-wrapper :global(.solution) {
            gap: 18px;
            padding: 0;
          }

          .solution-wrapper :global(section) {
            padding: 18px 14px;
            border-radius: 12px;
            margin: 0;
            border-left-width: 3px;
            border-right-width: 0;
          }

          .solution-wrapper :global(.problem) {
            padding: 18px 14px;
            background: #fafafa;
          }

          .solution-wrapper :global(.problem h3) {
            font-size: 19px;
            margin-bottom: 14px;
            line-height: 1.5;
          }

          .solution-wrapper :global(.problem p) {
            font-size: 16px;
            line-height: 1.75;
          }

          .solution-wrapper :global(.steps) {
            gap: 16px;
          }

          .solution-wrapper :global(.step) {
            padding: 16px 14px;
            padding-left: 18px;
            border-left: 3px solid #3b82f6;
            border-radius: 10px;
          }

          .solution-wrapper :global(.step::before) {
            display: none;
          }

          .solution-wrapper :global(.step h4) {
            font-size: 17px;
            margin-bottom: 12px;
            line-height: 1.5;
            font-weight: 600;
          }

          .solution-wrapper :global(.step p) {
            font-size: 16px;
            line-height: 1.8;
            margin: 10px 0;
            color: #404040;
          }

          .solution-wrapper :global(h3) {
            font-size: 19px;
            margin-bottom: 14px;
            line-height: 1.5;
          }

          .solution-wrapper :global(h4) {
            font-size: 17px;
            margin-bottom: 12px;
            line-height: 1.5;
          }

          .solution-wrapper :global(p) {
            font-size: 16px;
            line-height: 1.8;
            margin: 10px 0;
          }

          .solution-wrapper :global(.formula) {
            font-size: 13px;
            padding: 14px 12px;
            line-height: 1.9;
            margin: 12px 0;
            border-radius: 8px;
            background: #f8fafc;
          }

          .solution-wrapper :global(.formula br) {
            margin: 3px 0;
          }

          /* Mobile matrix styling - compact */
          .solution-wrapper :global(.matrix) {
            padding: 10px 12px;
            border-width: 1.5px;
            line-height: 1.7;
            letter-spacing: 0.5em;
            font-size: 13px;
            margin: 6px 0;
          }

          /* Mobile matrix spacing - smaller */
          .solution-wrapper :global(.ms) {
            width: 0.8em;
          }

          .solution-wrapper :global(.result) {
            padding: 12px 14px;
            font-size: 16px;
            margin: 12px 0 0 0;
            line-height: 1.7;
            border-left-width: 3px;
          }

          .solution-wrapper :global(.answer) {
            padding: 18px 14px;
            border-left-width: 4px;
          }

          .solution-wrapper :global(.answer h3) {
            font-size: 19px;
            margin-bottom: 16px;
            line-height: 1.5;
          }

          .solution-wrapper :global(.answer-value) {
            font-size: 17px;
            padding: 16px 14px;
            line-height: 1.6;
          }

          .solution-wrapper :global(.note) {
            padding: 14px;
            border-left-width: 3px;
          }

          .solution-wrapper :global(.note p) {
            font-size: 15px;
            line-height: 1.7;
          }

          .solution-wrapper :global(ul), 
          .solution-wrapper :global(ol) {
            padding-left: 20px;
            margin: 12px 0;
          }

          .solution-wrapper :global(li) {
            margin: 7px 0;
            font-size: 16px;
            line-height: 1.75;
          }

          .solution-wrapper :global(code) {
            font-size: 0.9em;
            padding: 3px 6px;
          }

          .solution-wrapper :global(strong) {
            font-weight: 600;
          }
        }

        /* Extra breathing room for very small screens */
        @media (max-width: 400px) {
          .solution-wrapper {
            font-size: 15px;
            line-height: 1.75;
          }

          .solution-wrapper :global(.solution) {
            gap: 16px;
          }

          .solution-wrapper :global(section) {
            padding: 16px 12px;
          }

          .solution-wrapper :global(.step) {
            padding: 14px 12px;
            padding-left: 16px;
          }

          .solution-wrapper :global(p) {
            font-size: 15px;
            line-height: 1.75;
          }

          .solution-wrapper :global(.formula) {
            font-size: 12px;
            padding: 12px 10px;
          }

          /* Extra small matrix styling */
          .solution-wrapper :global(.matrix) {
            padding: 8px 10px;
            line-height: 1.6;
            letter-spacing: 0.4em;
            font-size: 12px;
          }

          /* Extra small matrix spacing */
          .solution-wrapper :global(.ms) {
            width: 0.5em;
          }

          .solution-wrapper :global(.answer-value) {
            font-size: 16px;
            padding: 14px 12px;
          }
        }

        /* Smooth scrolling for overflow */
        .solution-wrapper :global(*) {
          -webkit-overflow-scrolling: touch;
        }

        /* Print styles */
        @media print {
          .solution-wrapper :global(section) {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          
          .solution-wrapper :global(.step) {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }

        /* Accessibility */
        .solution-wrapper :global(:focus-visible) {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Selection color */
        .solution-wrapper :global(::selection) {
          background: #dbeafe;
          color: #1e3a8a;
        }
      `}</style>
      
      <div 
        dangerouslySetInnerHTML={{ __html: cleanHTML(content) }}
      />
    </div>
  )
}