import React from "react";

export function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="bd3-field">
      <div className="bd3-field-header">
        <label className="bd3-field-label">{label}</label>
        {hint && <span className="bd3-field-hint">{hint}</span>}
      </div>
      {children}
    </div>
  );
}
