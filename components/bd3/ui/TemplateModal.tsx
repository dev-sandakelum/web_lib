import React from "react";
import { X, Check } from "lucide-react";
import { TEMPLATES3 } from "../templates";

interface TemplateModalProps {
  selectedTemplateId: string;
  onSelectTemplate: (id: string) => void;
  onClose: () => void;
}

export function TemplateModal({
  selectedTemplateId,
  onSelectTemplate,
  onClose,
}: TemplateModalProps) {
  return (
    <div className="bd3-modal-overlay" onClick={onClose}>
      <div className="bd3-modal" onClick={(e) => e.stopPropagation()}>
        <div className="bd3-modal-header">
          <h2>Select Template</h2>
          <button className="bd3-modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="bd3-modal-body">
          <div className="bd3-tpl-grid">
            {TEMPLATES3.map((template) => (
              <button
                key={template.id}
                className={`bd3-tpl-card ${
                  selectedTemplateId === template.id ? "selected" : ""
                }`}
                onClick={() => onSelectTemplate(template.id)}
                style={{ backgroundImage: template.background }}
              >
                <div className="bd3-tpl-overlay">
                  <span className="bd3-tpl-name">{template.name}</span>
                </div>
                {selectedTemplateId === template.id && (
                  <div className="bd3-tpl-check">
                    <Check size={12} color="#fff" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="bd3-modal-footer">
          <button className="bd3-btn-primary" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
