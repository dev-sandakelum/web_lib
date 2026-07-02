"use client";

import { Check } from "lucide-react";
import { TEMPLATES3 } from "../templates";
import type { FormData3 } from "../types";

interface Props {
  templateId: string;
  onSelect: (id: string) => void;
}

export function TemplatePanel({ templateId, onSelect }: Props) {
  return (
    <div className="bd3-tpl-grid">
      {TEMPLATES3.map((tpl) => (
        <button
          key={tpl.id}
          onClick={() => onSelect(tpl.id)}
          className={`bd3-tpl-card ${templateId === tpl.id ? "selected" : ""}`}
          style={{ backgroundImage: tpl.background }}
        >
          <div className="bd3-tpl-overlay">
            <span className="bd3-tpl-name">{tpl.name}</span>
          </div>
          {templateId === tpl.id && (
            <div className="bd3-tpl-check">
              <Check size={11} color="#fff" strokeWidth={3} />
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
