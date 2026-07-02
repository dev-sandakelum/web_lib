"use client";

interface Props {
  accessInput: string;
  accessGranted: boolean;
  onChange: (v: string) => void;
}

export function AccessPanel({ accessInput, accessGranted, onChange }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div className="bd3-field">
        <label className="bd3-field-label">Key</label>
        <input
          className="bd3-input"
          type="password"
          value={accessInput}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter access key"
        />
      </div>
      <div className={`bd3-access-status ${accessGranted ? "bd3-access-granted" : "bd3-access-locked"}`}>
        <div className="bd3-access-dot" />
        {accessGranted
          ? "Access granted — post generation unlocked"
          : "Enter key to unlock post generation"}
      </div>
    </div>
  );
}
