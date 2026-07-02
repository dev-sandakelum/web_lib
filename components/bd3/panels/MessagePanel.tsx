"use client";

import { RefreshCcw } from "lucide-react";

interface Props {
  message: string;
  onChange: (v: string) => void;
  isRefreshing: boolean;
  refreshAttempt: number;
  refreshMaxAttempts: number;
  refreshMatched: boolean | null;
  onRefresh: () => void;
}

export function MessagePanel({
  message,
  onChange,
  isRefreshing,
  refreshAttempt,
  refreshMaxAttempts,
  refreshMatched,
  onRefresh,
}: Props) {
  const inRange = message.length >= 250 && message.length <= 300;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {/* Toolbar */}
      <div className="bd3-msg-toolbar">
        <div className="bd3-char-info">
          <span
            className={`bd3-char-count ${
              isRefreshing
                ? "bd3-char-searching"
                : inRange
                ? "bd3-char-good"
                : ""
            }`}
          >
            {message.length} chars
          </span>
          {!isRefreshing && message.length > 0 && (
            <span className="bd3-char-range">
              {inRange ? "✓ in range" : "target 250–300"}
            </span>
          )}
        </div>

        <button
          className={`bd3-refresh-btn ${isRefreshing ? "bd3-refresh-active" : ""}`}
          onClick={onRefresh}
          disabled={isRefreshing}
          title="AI: generate short image message (250–300 chars)"
        >
          {isRefreshing ? (
            <>
              <svg width="13" height="13" viewBox="0 0 13 13" className="bd3-refresh-ring">
                <circle cx="6.5" cy="6.5" r="5" fill="none" stroke="rgba(99,103,255,0.25)" strokeWidth="1.5" />
                <circle
                  cx="6.5" cy="6.5" r="5" fill="none"
                  stroke="#8494FF" strokeWidth="1.5"
                  strokeDasharray="31.4" strokeDashoffset="10"
                  strokeLinecap="round" className="bd3-ring-spin"
                />
              </svg>
              <span className="bd3-refresh-label">
                {refreshMatched === null
                  ? `try ${Math.max(refreshAttempt, 1)}/${refreshMaxAttempts}`
                  : refreshMatched
                  ? <span style={{ color: "#34d399" }}>matched ✓</span>
                  : <span style={{ color: "#fb923c" }}>best fit</span>}
              </span>
            </>
          ) : (
            <><RefreshCcw size={11} /> AI Refresh</>
          )}
        </button>
      </div>

      {/* Progress bar */}
      {isRefreshing && (
        <div className="bd3-refresh-progress">
          <div
            className="bd3-refresh-progress-bar"
            style={{ width: `${(Math.max(refreshAttempt, 1) / refreshMaxAttempts) * 100}%` }}
          />
          <span className="bd3-refresh-progress-label">searching for best match…</span>
        </div>
      )}

      <textarea
        className="bd3-textarea"
        value={message}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        placeholder="Enter a heartfelt birthday message..."
      />
    </div>
  );
}
