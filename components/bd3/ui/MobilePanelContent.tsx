"use client";

import React, { useRef } from "react";
import {
  Check,
  Crop,
  Upload,
  RefreshCcw,
  Wand2,
  Copy,
} from "lucide-react";
import { Field } from "./Field";
import { TEMPLATES3 } from "../templates";
import type { FormData3, NameStyle } from "../types";

type ToolType = "template" | "person" | "photo" | "message" | "access" | "ai";

interface MobilePanelContentProps {
  tool: ToolType;
  form: FormData3;
  onFormChange: (field: keyof FormData3, value: string | null | boolean) => void;
  onNameStyleChange: (style: NameStyle) => void;
  onFileClick: () => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReEdit: () => void;
  onRefreshMsg: () => void;
  onGenerateMsg: () => void;
  onCopyMsg: () => void;
  onAccessChange: (v: string) => void;
  isRefreshing: boolean;
  isMsgGen: boolean;
  msgCopied: boolean;
  refreshAttempt: number;
  refreshMaxAttempts: number;
  refreshMatched: boolean | null;
  generatedMsg: string;
}

export function MobilePanelContent({
  tool,
  form,
  onFormChange,
  onNameStyleChange,
  onFileClick,
  onFileChange,
  onReEdit,
  onRefreshMsg,
  onGenerateMsg,
  onCopyMsg,
  onAccessChange,
  isRefreshing,
  isMsgGen,
  msgCopied,
  refreshAttempt,
  refreshMaxAttempts,
  refreshMatched,
  generatedMsg,
}: MobilePanelContentProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  switch (tool) {
    case "template":
      return (
        <div className="bd3-tpl-grid" style={{ gap: "8px" }}>
          {TEMPLATES3.map((tpl) => (
            <button
              key={tpl.id}
              onClick={() => onFormChange("templateId", tpl.id)}
              className={`bd3-tpl-card ${form.templateId === tpl.id ? "selected" : ""}`}
              style={{ backgroundImage: tpl.background, height: "80px" }}
            >
              <div className="bd3-tpl-overlay">
                <span className="bd3-tpl-name">{tpl.name}</span>
              </div>
              {form.templateId === tpl.id && (
                <div className="bd3-tpl-check">
                  <Check size={11} color="#fff" strokeWidth={3} />
                </div>
              )}
            </button>
          ))}
        </div>
      );

    case "person":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Field label="Full Name">
            <input
              className="bd3-input"
              type="text"
              value={form.name}
              onChange={(e) => onFormChange("name", e.target.value)}
              placeholder="Enter full name"
            />
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 6 }}>
              <span className="bd3-field-label" style={{ flexShrink: 0 }}>
                Font Size
              </span>
              <input
                type="range"
                min={35}
                max={50}
                step={1}
                value={form.nameStyle.fontSize ?? 48}
                onChange={(e) =>
                  onNameStyleChange({
                    ...form.nameStyle,
                    fontSize: Number(e.target.value),
                  })
                }
                className="bd3-slider"
                style={{ flex: 1 }}
              />
              <span className="bd3-field-hint" style={{ flexShrink: 0, minWidth: 32 }}>
                {form.nameStyle.fontSize ?? 48}px
              </span>
            </div>
          </Field>
          <Field label="Batch">
            <input
              className="bd3-input"
              type="text"
              value={form.batch}
              onChange={(e) => onFormChange("batch", e.target.value)}
              placeholder="9th Batch"
            />
          </Field>
          <Field label="Faculty">
            <input
              className="bd3-input"
              type="text"
              value={form.faculty}
              onChange={(e) => onFormChange("faculty", e.target.value)}
              placeholder="Faculty of Tech"
            />
          </Field>
          <Field label="University">
            <input
              className="bd3-input"
              type="text"
              value={form.university}
              onChange={(e) => onFormChange("university", e.target.value)}
              placeholder="University of Ruhuna"
            />
          </Field>
        </div>
      );

    case "photo":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={onFileChange}
            style={{ display: "none" }}
          />
          {form.profileImage ? (
            <div className="bd3-photo-card">
              <img src={form.profileImage} alt="Profile" className="bd3-photo-img" />
              <div className="bd3-photo-info">
                <div className="bd3-photo-ready">Photo ready ✓</div>
                <div className="bd3-photo-hint">Adjust crop or upload a new one</div>
              </div>
              <div className="bd3-photo-actions">
                <button
                  className="bd3-photo-action-btn bd3-photo-action-edit"
                  onClick={onReEdit}
                >
                  <Crop size={12} /> Edit
                </button>
                <button
                  className="bd3-photo-action-btn bd3-photo-action-replace"
                  onClick={() => fileRef.current?.click()}
                >
                  <Upload size={12} /> Replace
                </button>
              </div>
            </div>
          ) : (
            <button className="bd3-photo-btn" onClick={onFileClick}>
              <div className="bd3-photo-icon-wrap">
                <Upload size={19} color="rgba(255,255,255,0.3)" />
              </div>
              <span className="bd3-photo-label">Click to upload photo</span>
              <span className="bd3-photo-sub">PNG, JPG up to 10MB</span>
            </button>
          )}
        </div>
      );

    case "message":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div className="bd3-msg-toolbar">
            <div className="bd3-char-info">
              <span
                className={`bd3-char-count ${
                  isRefreshing
                    ? "bd3-char-searching"
                    : form.message.length >= 250 && form.message.length <= 300
                      ? "bd3-char-good"
                      : ""
                }`}
              >
                {form.message.length} chars
              </span>
              {!isRefreshing && form.message.length > 0 && (
                <span className="bd3-char-range">
                  {form.message.length >= 250 && form.message.length <= 300
                    ? "✓ in range"
                    : "target 250–300"}
                </span>
              )}
            </div>
            <button
              className={`bd3-refresh-btn ${isRefreshing ? "bd3-refresh-active" : ""}`}
              onClick={onRefreshMsg}
              disabled={isRefreshing}
            >
              {isRefreshing ? (
                <>
                  <svg width="13" height="13" viewBox="0 0 13 13" className="bd3-refresh-ring">
                    <circle cx="6.5" cy="6.5" r="5" fill="none" stroke="rgba(139,92,246,0.25)" strokeWidth="1.5" />
                    <circle
                      cx="6.5"
                      cy="6.5"
                      r="5"
                      fill="none"
                      stroke="#a78bfa"
                      strokeWidth="1.5"
                      strokeDasharray="31.4"
                      strokeDashoffset="10"
                      strokeLinecap="round"
                      className="bd3-ring-spin"
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
                <>
                  <RefreshCcw size={11} />
                  AI Refresh
                </>
              )}
            </button>
          </div>
          {isRefreshing && (
            <div className="bd3-refresh-progress">
              <div
                className="bd3-refresh-progress-bar"
                style={{ width: `${(Math.max(refreshAttempt, 1) / refreshMaxAttempts) * 100}%` }}
              />
              <span className="bd3-refresh-progress-label">searching…</span>
            </div>
          )}
          <textarea
            className="bd3-textarea"
            value={form.message}
            onChange={(e) => onFormChange("message", e.target.value)}
            rows={4}
            placeholder="Enter a heartfelt birthday message..."
          />
        </div>
      );

    case "access":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Field label="Key">
            <input
              className="bd3-input"
              type="password"
              value={form.access ? "••••••••" : ""}
              onChange={(e) => onAccessChange(e.target.value)}
              placeholder="Enter access key"
            />
          </Field>
          <div className={`bd3-access-status ${form.access ? "bd3-access-granted" : "bd3-access-locked"}`}>
            <div className="bd3-access-dot" />
            {form.access
              ? "Access granted ✓"
              : "Enter key to unlock"}
          </div>
        </div>
      );

    case "ai":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div className="bd3-ai-box">
            {generatedMsg ? (
              generatedMsg
            ) : (
              <span className="bd3-ai-empty">Generated caption will appear here…</span>
            )}
          </div>
          <div className="bd3-btn-row">
            <button className="bd3-btn-ai" onClick={onGenerateMsg} disabled={isMsgGen}>
              {isMsgGen ? (
                <span className="bd3-pulse">Generating…</span>
              ) : (
                <>
                  <Wand2 size={14} /> Generate
                </>
              )}
            </button>
            <button
              className="bd3-btn-ghost"
              onClick={onCopyMsg}
              disabled={!generatedMsg}
            >
              {msgCopied ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
              {msgCopied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      );

    default:
      return null;
  }
}
