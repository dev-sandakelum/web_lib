import React, { useMemo } from "react";
import { X, RefreshCcw, Copy, Check } from "lucide-react";
import type { FormData3 } from "../types";

const MIN_CHARS = 170;
const MAX_CHARS = 230;

interface MessageEditModalProps {
  form: FormData3;
  onUpdate: (field: keyof FormData3, value: string) => void;
  onGenerate: () => void;
  onRefresh: () => void;
  onCopy: () => void;
  onClose: () => void;
  isMsgGen: boolean;
  isRefreshing: boolean;
  refreshAttempt: number;
  refreshMaxAttempts: number;
  msgCopied: boolean;
}

export function MessageEditModal({
  form,
  onUpdate,
  onGenerate,
  onRefresh,
  onCopy,
  onClose,
  isMsgGen,
  isRefreshing,
  refreshAttempt,
  refreshMaxAttempts,
  msgCopied,
}: MessageEditModalProps) {
  const charCount = form.message.length;
  const charStatus = useMemo(() => {
    if (charCount < MIN_CHARS) return "searching";
    if (charCount >= MIN_CHARS && charCount <= MAX_CHARS) return "good";
    return "over";
  }, [charCount]);

  return (
    <div className="bd3-modal-overlay" onClick={onClose}>
      <div className="bd3-modal" onClick={(e) => e.stopPropagation()}>
        <div className="bd3-modal-header">
          <h2>Edit Message</h2>
          <button className="bd3-modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="bd3-modal-body">
          <div className="bd3-field">
            <div className="bd3-field-header">
              <label className="bd3-field-label">Birthday Message</label>
              <span className={`bd3-char-count bd3-char-${charStatus}`}>
                {charCount}/{MAX_CHARS}
              </span>
            </div>
            <textarea
              className="bd3-textarea"
              value={form.message}
              onChange={(e) => onUpdate("message", e.target.value)}
              placeholder="Enter your birthday message"
            />
            <div className="bd3-char-range">
              Recommended: {MIN_CHARS}–{MAX_CHARS} characters
            </div>
          </div>

          <div className="bd3-ai-actions">
            <button
              className="bd3-btn-secondary"
              onClick={onGenerate}
              disabled={isMsgGen || !form.name}
            >
              {isMsgGen ? "Generating..." : "Generate AI Message"}
            </button>

            <button
              className={`bd3-refresh-btn ${isRefreshing ? "bd3-refresh-active" : ""}`}
              onClick={onRefresh}
              disabled={isRefreshing}
            >
              <RefreshCcw size={14} className={isRefreshing ? "bd3-spin" : ""} />
              {isRefreshing ? `${refreshAttempt}/${refreshMaxAttempts}` : "Refresh"}
            </button>
          </div>
        </div>

        <div className="bd3-modal-footer">
          <button
            className="bd3-btn-secondary"
            onClick={onCopy}
            disabled={!form.message}
          >
            {msgCopied ? <Check size={16} /> : <Copy size={16} />}
            {msgCopied ? "Copied!" : "Copy"}
          </button>
          <button className="bd3-btn-primary" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
