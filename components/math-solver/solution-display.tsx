"use client"

interface SolutionDisplayProps {
  content: string
}

export function SolutionDisplay({ content }: SolutionDisplayProps) {
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .solution-wrapper {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 15px;
          line-height: 1.6;
          color: #1a1a1a;
          max-width: 100%;
          overflow-x: hidden;
        }

        .solution-wrapper :global(.solution) {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .solution-wrapper :global(section) {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 14px;
          transition: box-shadow 0.2s;
        }

        .solution-wrapper :global(section:hover) {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .solution-wrapper :global(.problem) {
          background: #fafafa;
        }

        .solution-wrapper :global(.problem h3) {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 10px 0;
          letter-spacing: -0.01em;
        }

        .solution-wrapper :global(.problem p) {
          color: #404040;
          margin: 0;
          font-size: 14px;
          line-height: 1.5;
        }

        .solution-wrapper :global(.steps) {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
          background: transparent;
          border: none;
        }

        .solution-wrapper :global(.step) {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 12px 12px 12px 32px;
          position: relative;
        }

        .solution-wrapper :global(.step::before) {
          content: '';
          position: absolute;
          left: 12px;
          top: 16px;
          width: 6px;
          height: 6px;
          background: #3b82f6;
          border-radius: 50%;
        }

        .solution-wrapper :global(.step h4) {
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 8px 0;
          letter-spacing: -0.01em;
        }

        .solution-wrapper :global(.step p) {
          color: #525252;
          margin: 6px 0;
          font-size: 13px;
          line-height: 1.5;
        }

        .solution-wrapper :global(.formula) {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 12px;
          margin: 10px 0;
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          font-size: 12px;
          line-height: 1.6;
          color: #1e293b;
          overflow-x: auto;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .solution-wrapper :global(.ms) {
          display: inline-block;
          width: 1.6em;
        }

        .solution-wrapper :global(.result) {
          background: #f0fdf4;
          padding: 10px;
          margin: 10px 0 0 0;
          border-radius: 6px;
          color: #15803d;
          font-weight: 500;
          font-size: 13px;
        }

        .solution-wrapper :global(.answer) {
          background: linear-gradient(to bottom right, #ecfdf5, #d1fae5);
          border: 2px solid #86efac;
          padding: 14px;
        }

        .solution-wrapper :global(.answer h3) {
          font-size: 16px;
          font-weight: 700;
          color: #15803d;
          margin: 0 0 10px 0;
          display: flex;
          align-items: center;
          gap: 6px;
          letter-spacing: -0.01em;
        }

        .solution-wrapper :global(.answer h3::before) {
          content: '✓';
          font-size: 18px;
        }

        .solution-wrapper :global(.answer-value) {
          background: #ffffff;
          border: 2px solid #86efac;
          border-radius: 6px;
          padding: 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          font-weight: 400;
          color: #15803d;
          text-align: center;
          letter-spacing: -0.02em;
          word-break: break-word;
        }

        .solution-wrapper :global(.note) {
          background: #fffbeb;
          border: 1px solid #fde68a;
          padding: 12px;
        }

        .solution-wrapper :global(.note p) {
          margin: 0;
          color: #78350f;
          font-size: 13px;
          line-height: 1.5;
        }

        .solution-wrapper :global(.note strong) {
          color: #92400e;
          font-weight: 600;
        }

        .solution-wrapper :global(h3) {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 8px 0;
          letter-spacing: -0.01em;
        }

        .solution-wrapper :global(h4) {
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 6px 0;
          letter-spacing: -0.01em;
        }

        .solution-wrapper :global(p) {
          margin: 6px 0;
          line-height: 1.5;
          color: #404040;
          font-size: 14px;
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

        .solution-wrapper :global(code) {
          background: #f1f5f9;
          padding: 2px 4px;
          border-radius: 3px;
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

        .solution-wrapper :global(ul), 
        .solution-wrapper :global(ol) {
          margin: 8px 0;
          padding-left: 18px;
        }

        .solution-wrapper :global(li) {
          margin: 4px 0;
          line-height: 1.5;
          color: #404040;
          font-size: 14px;
        }

        /* Mobile Responsive */
        @media (max-width: 640px) {
          .solution-wrapper {
            font-size: 13px;
            line-height: 1.5;
          }

          .solution-wrapper :global(.solution) {
            gap: 12px;
          }

          .solution-wrapper :global(section) {
            padding: 10px;
            border-radius: 8px;
          }

          .solution-wrapper :global(.problem) {
            padding: 10px;
          }

          .solution-wrapper :global(.problem h3) {
            font-size: 14px;
            margin-bottom: 6px;
          }

          .solution-wrapper :global(.problem p) {
            font-size: 12px;
          }

          .solution-wrapper :global(.steps) {
            gap: 10px;
          }

          .solution-wrapper :global(.step) {
            padding: 10px 10px 10px 28px;
            border-radius: 6px;
          }

          .solution-wrapper :global(.step::before) {
            left: 10px;
            top: 14px;
            width: 5px;
            height: 5px;
          }

          .solution-wrapper :global(.step h4) {
            font-size: 13px;
            margin-bottom: 6px;
          }

          .solution-wrapper :global(.step p) {
            font-size: 12px;
            margin: 4px 0;
          }

          .solution-wrapper :global(h3) {
            font-size: 14px;
            margin-bottom: 6px;
          }

          .solution-wrapper :global(h4) {
            font-size: 13px;
            margin-bottom: 4px;
          }

          .solution-wrapper :global(p) {
            font-size: 12px;
            margin: 4px 0;
          }

          .solution-wrapper :global(.formula) {
            font-size: 11px;
            padding: 10px;
            margin: 8px 0;
            line-height: 1.5;
          }

          .solution-wrapper :global(.ms) {
            width: 1.4em;
          }

          .solution-wrapper :global(.result) {
            padding: 8px;
            font-size: 12px;
            margin: 8px 0 0 0;
          }

          .solution-wrapper :global(.answer) {
            padding: 10px;
          }

          .solution-wrapper :global(.answer h3) {
            font-size: 14px;
            margin-bottom: 8px;
            gap: 4px;
          }

          .solution-wrapper :global(.answer h3::before) {
            font-size: 16px;
          }

          .solution-wrapper :global(.answer-value) {
            font-size: 13px;
            padding: 10px;
          }

          .solution-wrapper :global(.note) {
            padding: 10px;
          }

          .solution-wrapper :global(.note p) {
            font-size: 12px;
          }

          .solution-wrapper :global(ul), 
          .solution-wrapper :global(ol) {
            padding-left: 16px;
            margin: 8px 0;
          }

          .solution-wrapper :global(li) {
            margin: 3px 0;
            font-size: 12px;
          }

          .solution-wrapper :global(code) {
            font-size: 0.85em;
            padding: 1px 3px;
          }
        }

        @media (max-width: 400px) {
          .solution-wrapper {
            font-size: 12px;
          }

          .solution-wrapper :global(.solution) {
            gap: 10px;
          }

          .solution-wrapper :global(section) {
            padding: 8px;
          }

          .solution-wrapper :global(.step) {
            padding: 8px 8px 8px 24px;
          }

          .solution-wrapper :global(.step::before) {
            left: 8px;
            top: 12px;
            width: 4px;
            height: 4px;
          }

          .solution-wrapper :global(p) {
            font-size: 11px;
          }

          .solution-wrapper :global(.formula) {
            font-size: 10px;
            padding: 8px;
          }

          .solution-wrapper :global(.answer-value) {
            font-size: 12px;
            padding: 8px;
          }
        }

        .solution-wrapper :global(*) {
          -webkit-overflow-scrolling: touch;
        }

        @media print {
          .solution-wrapper :global(section) {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }

        .solution-wrapper :global(:focus-visible) {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        .solution-wrapper :global(::selection) {
          background: #dbeafe;
          color: #1e3a8a;
        }
      `}</style>

      <div dangerouslySetInnerHTML={{ __html: cleanHTML(content) }} />
    </div>
  )
}
