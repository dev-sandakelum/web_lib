"use client";

import type { FormData3 } from "../types";

interface Props {
  form: FormData3;
  setForm: React.Dispatch<React.SetStateAction<FormData3>>;
  set: (field: keyof FormData3, value: string | null | boolean) => void;
}

export function PersonPanel({ form, set, setForm }: Props) {
  return (
    <div className="bd3-section-body" style={{ padding: 0, gap: 11 }}>
      <div className="bd3-field">
        <div className="bd3-field-header">
          <label className="bd3-field-label">Full Name</label>
        </div>
        <input
          className="bd3-input"
          type="text"
          value={form.name}
          onChange={(e) => set("name", e.target.value)}
          placeholder="Enter full name"
        />
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 6 }}>
          <span className="bd3-field-label" style={{ flexShrink: 0 }}>Font Size</span>
          <input
            type="range" min={35} max={50} step={1}
            value={form.nameStyle.fontSize ?? 48}
            onChange={(e) =>
              setForm((p) => ({
                ...p,
                nameStyle: { ...p.nameStyle, fontSize: Number(e.target.value) },
              }))
            }
            className="bd3-slider"
            style={{ flex: 1 }}
          />
          <span className="bd3-field-hint" style={{ flexShrink: 0, minWidth: 32, textAlign: "right" }}>
            {form.nameStyle.fontSize ?? 48}px
          </span>
        </div>
      </div>

      <div className="bd3-grid-2">
        <div className="bd3-field">
          <label className="bd3-field-label">Batch</label>
          <input
            className="bd3-input"
            type="text"
            value={form.batch}
            onChange={(e) => set("batch", e.target.value)}
            placeholder="9th Batch"
          />
        </div>
        <div className="bd3-field">
          <label className="bd3-field-label">Faculty</label>
          <input
            className="bd3-input"
            type="text"
            value={form.faculty}
            onChange={(e) => set("faculty", e.target.value)}
            placeholder="Faculty of Tech"
          />
        </div>
      </div>

      <div className="bd3-field">
        <label className="bd3-field-label">University</label>
        <input
          className="bd3-input"
          type="text"
          value={form.university}
          onChange={(e) => set("university", e.target.value)}
          placeholder="University of Ruhuna"
        />
      </div>
    </div>
  );
}
