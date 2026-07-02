"use client";

import React, { useRef } from "react";
import {
  Palette,
  User,
  Camera,
  MessageSquare,
  Lock,
  Stars,
  Upload,
  Crop,
  Check,
  RefreshCcw,
  Wand2,
  Copy,
} from "lucide-react";
import { SectionCard } from "./SectionCard";
import { Field } from "./Field";
import { TEMPLATES3 } from "../templates";
import type { FormData3, NameStyle } from "../types";

interface EditPanelProps {
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

export function EditPanel({
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
}: EditPanelProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <aside className="bd3-editor" style={{ display: "flex", flexDirection: "column" }}>
      <div className="bd3-editor-scroll">
        <div className="bd3-editor-inner">
          {/* Template */}
          <SectionCard title="Template" icon={<Palette size={13} />} accent="#a78bfa">
            <div className="bd3-tpl-grid">
              {TEMPLATES3.map((tpl) => (
                <button
                  key={tpl.id}
                  onClick={() => onFormChange("templateId", tpl.id)}
                  className={`bd3-tpl-card ${form.templateId === tpl.id ? "selected" : ""}`}
                  style={{ backgroundImage: tpl.background }}
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
          </SectionCard>

          {/* Person Details */}
          <SectionCard
            title="Person Details"
            icon={<User size={13} />}
            accent="#67e8f9"
          >
            <Field label="Full Name">
              <input
                className="bd3-input"
                type="text"
                value={form.name}
                onChange={(e) => onFormChange("name", e.target.value)}
                placeholder="Enter full name"
              />
              {/* Font size slider */}
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
                <span
                  className="bd3-field-hint"
                  style={{ flexShrink: 0, minWidth: 32, textAlign: "right" }}
                >
                  {form.nameStyle.fontSize ?? 48}px
                </span>
              </div>
            </Field>
            <div className="bd3-grid-2">
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
            </div>
            <Field label="University">
              <input
                className="bd3-input"
                type="text"
                value={form.university}
                onChange={(e) => onFormChange("university", e.target.value)}
                placeholder="University of Ruhuna"
              />
            </Field>
          </SectionCard>

          {/* Profile Photo */}
          <SectionCard
            title="Profile Photo"
            icon={<Camera size={13} />}
            accent="#f9a8d4"
          >
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={onFileChange}
              style={{ display: "none" }}
            />

            {form.profileImage ? (
              /* ── Has photo: card with edit + replace ── */
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
                    title="Re-open crop editor with original photo"
                  >
                    <Crop size={12} /> Edit
                  </button>
                  <button
                    className="bd3-photo-action-btn bd3-photo-action-replace"
                    onClick={() => fileRef.current?.click()}
                    title="Upload a different photo"
                  >
                    <Upload size={12} /> Replace
                  </button>
                </div>
              </div>
            ) : (
              /* ── No photo: upload prompt ── */
              <button className="bd3-photo-btn" onClick={onFileClick}>
                <div className="bd3-photo-icon-wrap">
                  <Upload size={19} color="rgba(255,255,255,0.3)" />
                </div>
                <span className="bd3-photo-label">Click to upload photo</span>
                <span className="bd3-photo-sub">PNG, JPG up to 10MB</span>
              </button>
            )}
          </SectionCard>

          {/* Birthday Message */}
          <SectionCard
            title="Birthday Message"
            icon={<MessageSquare size={13} />}
            accent="#86efac"
          >
            <div className="bd3-msg-toolbar">
              {/* char counter */}
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

              {/* refresh button */}
              <button
                className={`bd3-refresh-btn ${isRefreshing ? "bd3-refresh-active" : ""}`}
                onClick={onRefreshMsg}
                disabled={isRefreshing}
                title="AI: generate short message for image (250–300 chars)"
              >
                {isRefreshing ? (
                  <>
                    <svg width="13" height="13" viewBox="0 0 13 13" className="bd3-refresh-ring">
                      <circle
                        cx="6.5"
                        cy="6.5"
                        r="5"
                        fill="none"
                        stroke="rgba(139,92,246,0.25)"
                        strokeWidth="1.5"
                      />
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

            {/* progress bar */}
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
              value={form.message}
              onChange={(e) => onFormChange("message", e.target.value)}
              rows={5}
              placeholder="Enter a heartfelt birthday message..."
            />
          </SectionCard>

          {/* Access Key */}
          <SectionCard title="Access Key" icon={<Lock size={13} />} accent="#fcd34d">
            <Field label="Key">
              <input
                className="bd3-input"
                type="password"
                value={form.access ? "••••••••" : ""}
                onChange={(e) => onAccessChange(e.target.value)}
                placeholder="Enter access key"
              />
            </Field>
            <div
              className={`bd3-access-status ${form.access ? "bd3-access-granted" : "bd3-access-locked"}`}
            >
              <div className="bd3-access-dot" />
              {form.access
                ? "Access granted — post generation unlocked"
                : "Enter key to unlock post generation"}
            </div>
          </SectionCard>

          {/* AI Social Post */}
          <SectionCard
            title="AI Social Post"
            icon={<Stars size={13} />}
            accent="#c4b5fd"
          >
            <div className="bd3-ai-box">
              {generatedMsg ? (
                generatedMsg
              ) : (
                <span className="bd3-ai-empty">
                  Generated social media caption will appear here…
                </span>
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
                style={{ paddingLeft: "14px", paddingRight: "14px" }}
              >
                {msgCopied ? (
                  <Check size={14} color="#34d399" />
                ) : (
                  <Copy size={14} />
                )}
                {msgCopied ? "Copied!" : "Copy"}
              </button>
            </div>
          </SectionCard>
        </div>
      </div>
    </aside>
  );
}
