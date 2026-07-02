"use client";

import { Wand2, Copy, Check } from "lucide-react";

interface Props {
  generatedMsg: string;
  isMsgGen: boolean;
  msgCopied: boolean;
  onGenerate: () => void;
  onCopy: () => void;
}

export function AiPostPanel({ generatedMsg, isMsgGen, msgCopied, onGenerate, onCopy }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div className="bd3-ai-box">
        {generatedMsg
          ? generatedMsg
          : <span className="bd3-ai-empty">Generated social media caption will appear here…</span>
        }
      </div>
      <div className="bd3-btn-row">
        <button className="bd3-btn-ai" onClick={onGenerate} disabled={isMsgGen}>
          {isMsgGen
            ? <span className="bd3-pulse">Generating…</span>
            : <><Wand2 size={14} /> Generate</>
          }
        </button>
        <button
          className="bd3-btn-ghost"
          onClick={onCopy}
          disabled={!generatedMsg}
          style={{ paddingLeft: 14, paddingRight: 14 }}
        >
          {msgCopied ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
          {msgCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
