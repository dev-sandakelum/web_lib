import React from "react";
import { X } from "lucide-react";
import type { FormData3 } from "../types";

interface TextEditModalProps {
  form: FormData3;
  onUpdate: (field: keyof FormData3, value: string) => void;
  onClose: () => void;
}

export function TextEditModal({ form, onUpdate, onClose }: TextEditModalProps) {
  return (
    <div className="bd3-modal-overlay" onClick={onClose}>
      <div className="bd3-modal" onClick={(e) => e.stopPropagation()}>
        <div className="bd3-modal-header">
          <h2>Edit Text</h2>
          <button className="bd3-modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="bd3-modal-body">
          <div className="bd3-field">
            <label className="bd3-field-label">Name</label>
            <input
              type="text"
              className="bd3-input"
              value={form.name}
              onChange={(e) => onUpdate("name", e.target.value)}
              placeholder="Enter name"
            />
          </div>

          <div className="bd3-field">
            <label className="bd3-field-label">Batch</label>
            <input
              type="text"
              className="bd3-input"
              value={form.batch}
              onChange={(e) => onUpdate("batch", e.target.value)}
              placeholder="Enter batch"
            />
          </div>

          <div className="bd3-field">
            <label className="bd3-field-label">Faculty</label>
            <input
              type="text"
              className="bd3-input"
              value={form.faculty}
              onChange={(e) => onUpdate("faculty", e.target.value)}
              placeholder="Enter faculty"
            />
          </div>

          <div className="bd3-field">
            <label className="bd3-field-label">University</label>
            <input
              type="text"
              className="bd3-input"
              value={form.university}
              onChange={(e) => onUpdate("university", e.target.value)}
              placeholder="Enter university"
            />
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
