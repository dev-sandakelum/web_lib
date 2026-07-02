import React from "react";

export function SectionCard({
  title,
  icon,
  children,
  accent,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <div className="bd3-section">
      <div className="bd3-section-header">
        <span className="bd3-section-icon" style={{ color: accent ?? "#a78bfa" }}>
          {icon}
        </span>
        <span className="bd3-section-title">{title}</span>
      </div>
      <div className="bd3-section-body">{children}</div>
    </div>
  );
}
