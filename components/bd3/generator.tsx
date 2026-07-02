"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { toPng } from "html-to-image";
import {
  Upload, Download, Copy, Check, RefreshCcw,
  Eye, Pencil, Wand2, User, MessageSquare,
  Lock, Camera, Palette, Stars, Crop, Sun, Moon,
} from "lucide-react";
import { PostTemplate3 } from "./post-template";
import { CropModal3 } from "./crop-modal";
import { LoadingOverlay } from "./loading-overlay";
import { TEMPLATES3 } from "./templates";
import StartupPopup from "./startup-popup";
import type { FormData3, ImageTransform3, NameStyle } from "./types";
import { loadImageFile } from "@/lib/utils";
import "./generator.css";

// Matches MAX_ATTEMPTS on the server — used as fallback display cap
const MAX_ATTEMPTS_DISPLAY = 20;

const DEFAULT_NAME_STYLE: NameStyle = {
  borderRadius: 10,
  fontSize: 48,
  paddingY: 8,
};

const DEFAULT_FORM: FormData3 = {
  name: "",
  batch: "9th Batch",
  faculty: "Faculty of Technology",
  university: "University of Ruhuna",
  profileImage: null,
  message: "Happy birthday, I hope your day is filled with joy and laughter, and that all your dreams come true 💛. Wishing you a year ahead that's successful and happy, with amazing memories to cherish 🎂. Have a fantastic day and an incredible journey ahead ✨ ✨",
  templateId: "t1",
  access: false,
  nameStyle: DEFAULT_NAME_STYLE,
};

/* ─── Field ─────────────────────────────────────── */
function Field({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
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

/* ─── Section card ───────────────────────────────── */
function SectionCard({ title, icon, children, accent }: {
  title: string; icon: React.ReactNode; children: React.ReactNode; accent?: string;
}) {
  return (
    <div className="bd3-section">
      <div className="bd3-section-header">
        <span className="bd3-section-icon" style={{ color: accent ?? "#a78bfa" }}>{icon}</span>
        <span className="bd3-section-title">{title}</span>
      </div>
      <div className="bd3-section-body">{children}</div>
    </div>
  );
}

/* ═══ Main Component ═══════════════════════════════ */
export default function BirthdayGenerator3() {
  const [form, setForm] = useState<FormData3>(DEFAULT_FORM);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [originalImage, setOriginalImage] = useState<string | null>(null); // raw uncropped url
  const [savedTransform, setSavedTransform] = useState<ImageTransform3 | undefined>();
  const [showCrop, setShowCrop] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  // delayed visibility — overlay only appears after 1s so quick ops skip it
  const [showDownloadOverlay, setShowDownloadOverlay] = useState(false);
  const downloadTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isMsgGen, setIsMsgGen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshAttempt, setRefreshAttempt] = useState(0);
  const [refreshMaxAttempts, setRefreshMaxAttempts] = useState(20);
  const [refreshMatched, setRefreshMatched] = useState<boolean | null>(null);
  const [msgCopied, setMsgCopied] = useState(false);
  const [generatedMsg, setGeneratedMsg] = useState("");
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const [scale, setScale] = useState(0.3);
  const [accessInput, setAccessInput] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const hiddenRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const selectedTemplate = TEMPLATES3.find((t) => t.id === form.templateId) || TEMPLATES3[0];
  const PASS_KEY = process.env.NEXT_PUBLIC_PASS_key_bd3;

  useEffect(() => {
    const update = () => {
      if (!previewRef.current) return;
      const cw = previewRef.current.clientWidth - 64;
      const ch = previewRef.current.clientHeight - 64;
      setScale(Math.min(cw / 1080, ch / 1350, 0.72));
    };
    const ro = new ResizeObserver(update);
    if (previewRef.current) ro.observe(previewRef.current);
    window.addEventListener("resize", update);
    update();
    return () => { ro.disconnect(); window.removeEventListener("resize", update); };
  }, []);

  const set = useCallback(
    (field: keyof FormData3, value: string | null | boolean) =>
      setForm((p) => ({ ...p, [field]: value })),
    []
  );

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const url = await loadImageFile(file);
      if (typeof url === "string") {
        setOriginalImage(url);
        setSavedTransform(undefined); // new photo → no previous transform
        setTempImage(url);
        setShowCrop(true);
      }
    } catch { alert("Error loading image."); }
    finally { if (fileRef.current) fileRef.current.value = ""; }
  };

  // reopen crop modal with the stored original (not the circular crop)
  const handleReEdit = () => {
    if (originalImage) { setTempImage(originalImage); setShowCrop(true); }
  };

  const captureImage = async (): Promise<HTMLCanvasElement> => {
    if (!hiddenRef.current) throw new Error("Render ref not found");
    await toPng(hiddenRef.current, { width: 1080, height: 1350, pixelRatio: 2 });
    const dataUrl = await toPng(hiddenRef.current, { width: 1080, height: 1350, pixelRatio: 2, cacheBust: true });
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const c = document.createElement("canvas");
        c.width = img.width; c.height = img.height;
        c.getContext("2d")!.drawImage(img, 0, 0);
        resolve(c);
      };
      img.onerror = reject;
      img.src = dataUrl;
    });
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    downloadTimerRef.current = setTimeout(() => setShowDownloadOverlay(true), 1000);
    try {
      const canvas = await captureImage();
      const a = document.createElement("a");
      a.download = `birthday-${form.name.replace(/\s+/g, "-") || "post"}.png`;
      a.href = canvas.toDataURL("image/png", 1.0);
      a.click();
    } catch { alert("Error generating image."); }
    finally {
      if (downloadTimerRef.current) clearTimeout(downloadTimerRef.current);
      setShowDownloadOverlay(false);
      setIsDownloading(false);
    }
  };

  // ── AI Social Post: full structured caption ──────────────────────────────
  const handleGenerateMsg = async () => {
    setIsMsgGen(true);
    setGeneratedMsg(""); // clear previous so user sees it's working
    try {
      const res = await fetch("/api/bd3/msg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify({
          // Pass fields directly — the API builds the structured prompt server-side
          name: form.name,
          batch: form.batch,
          faculty: form.faculty,
          university: form.university,
        }),
      });
      if (!res.ok) throw new Error(`Server error ${res.status}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setGeneratedMsg(data.result?.content ?? "");
    } catch (err: any) {
      console.error("[generate]", err);
      setGeneratedMsg("⚠️ Failed to generate — please try again.");
    } finally {
      setIsMsgGen(false);
    }
  };

  // ── AI Refresh: short 250-300 char image message (SSE stream) ───────────
  const handleRefreshMsg = async () => {
    setIsRefreshing(true);
    setRefreshAttempt(0);
    setRefreshMatched(null);

    try {
      const res = await fetch("/api/bd3/msg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify({ enforceCharRange: true }),
      });

      if (!res.ok || !res.body) throw new Error(`Server error ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      // Read the SSE stream — each chunk may contain one or more events
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        // Parse all complete SSE messages in the buffer
        const parts = buffer.split("\n\n");
        buffer = parts.pop() ?? ""; // last part may be incomplete — keep it

        for (const part of parts) {
          const eventMatch = part.match(/^event:\s*(\w+)/m);
          const dataMatch  = part.match(/^data:\s*(.+)/m);
          if (!eventMatch || !dataMatch) continue;

          const eventName = eventMatch[1];
          let payload: any;
          try { payload = JSON.parse(dataMatch[1]); } catch { continue; }

          if (eventName === "attempt") {
            // Real attempt number from the backend — perfectly in sync
            setRefreshAttempt(payload.attempt);
            setRefreshMaxAttempts(payload.maxAttempts);
          } else if (eventName === "done") {
            setRefreshAttempt(payload.attempts ?? 1);
            setRefreshMaxAttempts(payload.maxAttempts ?? MAX_ATTEMPTS_DISPLAY);
            setRefreshMatched(payload.matched ?? true);
            if (payload.result?.content) {
              set("message", payload.result.content);
            }
          }
        }
      }
    } catch (err: any) {
      console.error("[refresh]", err);
      setRefreshMatched(false);
    } finally {
      setTimeout(() => {
        setIsRefreshing(false);
        setRefreshAttempt(0);
        setRefreshMatched(null);
      }, 2000);
    }
  };

  const handleCopyMsg = async () => {
    if (!generatedMsg) return;
    try {
      await navigator.clipboard.writeText(generatedMsg);
      setMsgCopied(true); setTimeout(() => setMsgCopied(false), 2500);
    } catch { alert("Could not copy message."); }
  };

  const handleAccessChange = (v: string) => {
    setAccessInput(v);
    set("access", v === PASS_KEY);
  };

  return (
    <>
      <div className={`bd3-root${theme === "light" ? " light" : ""}`}>
        {/* NAVBAR */}
        <nav className="bd3-nav">
          <div className="bd3-nav-brand">
            <div className="bd3-nav-logo">
              <img src="/bd3/logo.jpeg" alt="Birthday Post Studio" />
            </div>
            <div>
              <div className="bd3-nav-title">Birthday Post Studio</div>
              <div className="bd3-nav-sub">v3 &nbsp;·&nbsp; 9th Batch</div>
            </div>
          </div>

          {/* Right side: badge + download + theme toggle + mobile tabs */}
          <div className="bd3-nav-right">
            {/* Resolution badge — hidden on mobile */}
            <div className="bd3-nav-badge">
              <span className="bd3-nav-badge-dot" />
              1080 × 1350 px
            </div>

            {/* Desktop download button */}
            <button
              className="bd3-nav-download"
              onClick={handleDownload}
              disabled={isDownloading}
            >
              {isDownloading
                ? <span className="bd3-pulse">Downloading…</span>
                : <><Download size={14} /> Download HD</>
              }
            </button>

            {/* Theme toggle */}
            <button
              className="bd3-theme-btn"
              onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark"
                ? <Sun size={15} strokeWidth={2} />
                : <Moon size={15} strokeWidth={2} />
              }
            </button>

            {/* Mobile tabs */}
            <div className="bd3-nav-tabs">
              {(["edit","preview"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`bd3-nav-tab ${activeTab === tab ? "active" : "inactive"}`}
                >
                  {tab === "edit" ? <Pencil size={11} /> : <Eye size={11} />}
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* BODY */}
        <div className="bd3-body">

          {/* ═══ EDITOR ═══ */}
          <aside
            className="bd3-editor"
            style={{ display: activeTab === "preview" ? "none" : "flex", flexDirection: "column" }}
          >
            <div className="bd3-editor-scroll">
              <div className="bd3-editor-inner">

              {/* Template */}
              <SectionCard title="Template" icon={<Palette size={13} />} accent="#a78bfa">
                <div className="bd3-tpl-grid">
                  {TEMPLATES3.map((tpl) => (
                    <button
                      key={tpl.id}
                      onClick={() => set("templateId", tpl.id)}
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
              <SectionCard title="Person Details" icon={<User size={13} />} accent="#67e8f9">
                <Field label="Full Name">
                  <input
                    className="bd3-input"
                    type="text"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Enter full name"
                  />
                  {/* Font size slider — always visible below name input */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 6 }}>
                    <span className="bd3-field-label" style={{ flexShrink: 0 }}>Font Size</span>
                    <input
                      type="range" min={35} max={50} step={1}
                      value={form.nameStyle.fontSize ?? 48}
                      onChange={(e) => setForm((p) => ({ ...p, nameStyle: { ...p.nameStyle, fontSize: Number(e.target.value) } }))}
                      className="bd3-slider"
                      style={{ flex: 1 }}
                    />
                    <span className="bd3-field-hint" style={{ flexShrink: 0, minWidth: 32, textAlign: "right" }}>
                      {form.nameStyle.fontSize ?? 48}px
                    </span>
                  </div>
                </Field>
                <div className="bd3-grid-2">
                  <Field label="Batch">
                    <input className="bd3-input" type="text" value={form.batch} onChange={(e) => set("batch", e.target.value)} placeholder="9th Batch" />
                  </Field>
                  <Field label="Faculty">
                    <input className="bd3-input" type="text" value={form.faculty} onChange={(e) => set("faculty", e.target.value)} placeholder="Faculty of Tech" />
                  </Field>
                </div>
                <Field label="University">
                  <input className="bd3-input" type="text" value={form.university} onChange={(e) => set("university", e.target.value)} placeholder="University of Ruhuna" />
                </Field>
              </SectionCard>

              {/* Profile Photo */}
              <SectionCard title="Profile Photo" icon={<Camera size={13} />} accent="#f9a8d4">
                <input ref={fileRef} type="file" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />

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
                        onClick={handleReEdit}
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
                  <button className="bd3-photo-btn" onClick={() => fileRef.current?.click()}>
                    <div className="bd3-photo-icon-wrap">
                      <Upload size={19} color="rgba(255,255,255,0.3)" />
                    </div>
                    <span className="bd3-photo-label">Click to upload photo</span>
                    <span className="bd3-photo-sub">PNG, JPG up to 10MB</span>
                  </button>
                )}
              </SectionCard>

              {/* Birthday Message */}
              <SectionCard title="Birthday Message" icon={<MessageSquare size={13} />} accent="#86efac">
                <div className="bd3-msg-toolbar">
                  {/* char counter — shows live target range while refreshing */}
                  <div className="bd3-char-info">
                    <span className={`bd3-char-count ${
                      isRefreshing ? "bd3-char-searching" :
                      form.message.length >= 250 && form.message.length <= 300 ? "bd3-char-good" : ""
                    }`}>
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

                  {/* refresh button — morphs during search */}
                  <button
                    className={`bd3-refresh-btn ${isRefreshing ? "bd3-refresh-active" : ""}`}
                    onClick={handleRefreshMsg}
                    disabled={isRefreshing}
                    title="AI: generate short message for image (250–300 chars)"
                  >
                    {isRefreshing ? (
                      <>
                        {/* animated ring */}
                        <svg width="13" height="13" viewBox="0 0 13 13" className="bd3-refresh-ring">
                          <circle cx="6.5" cy="6.5" r="5" fill="none" stroke="rgba(139,92,246,0.25)" strokeWidth="1.5" />
                          <circle cx="6.5" cy="6.5" r="5" fill="none" stroke="#a78bfa" strokeWidth="1.5"
                            strokeDasharray="31.4" strokeDashoffset="10"
                            strokeLinecap="round" className="bd3-ring-spin" />
                        </svg>
                        <span className="bd3-refresh-label">
                          {refreshMatched === null
                            ? `try ${Math.max(refreshAttempt, 1)}/${refreshMaxAttempts}`
                            : refreshMatched
                              ? <span style={{ color: "#34d399" }}>matched ✓</span>
                              : <span style={{ color: "#fb923c" }}>best fit</span>
                          }
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

                {/* progress bar — only visible while retrying */}
                {isRefreshing && (
                  <div className="bd3-refresh-progress">
                    <div
                      className="bd3-refresh-progress-bar"
                      style={{ width: `${(Math.max(refreshAttempt, 1) / refreshMaxAttempts) * 100}%` }}
                    />
                    <span className="bd3-refresh-progress-label">
                      searching for best match…
                    </span>
                  </div>
                )}

                <textarea
                  className="bd3-textarea"
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
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
                    value={accessInput}
                    onChange={(e) => handleAccessChange(e.target.value)}
                    placeholder="Enter access key"
                  />
                </Field>
                <div className={`bd3-access-status ${form.access ? "bd3-access-granted" : "bd3-access-locked"}`}>
                  <div className="bd3-access-dot" />
                  {form.access ? "Access granted — post generation unlocked" : "Enter key to unlock post generation"}
                </div>
              </SectionCard>

              {/* AI Social Post */}
              <SectionCard title="AI Social Post" icon={<Stars size={13} />} accent="#c4b5fd">
                <div className="bd3-ai-box">
                  {generatedMsg
                    ? generatedMsg
                    : <span className="bd3-ai-empty">Generated social media caption will appear here…</span>
                  }
                </div>
                <div className="bd3-btn-row">
                  <button className="bd3-btn-ai" onClick={handleGenerateMsg} disabled={isMsgGen}>
                    {isMsgGen
                      ? <span className="bd3-pulse">Generating…</span>
                      : <><Wand2 size={14} /> Generate</>
                    }
                  </button>
                  <button
                    className="bd3-btn-ghost"
                    onClick={handleCopyMsg}
                    disabled={!generatedMsg}
                    style={{ paddingLeft: "14px", paddingRight: "14px" }}
                  >
                    {msgCopied ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
                    {msgCopied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </SectionCard>

            </div>{/* end bd3-editor-inner */}
            </div>{/* end bd3-editor-scroll */}

            {/* Action Bar — Download is in navbar on desktop, fixed btn on mobile */}
            <div className="bd3-action-bar" style={{ display: "none" }} />
          </aside>

          {/* ═══ PREVIEW ═══ */}
          <main
            ref={previewRef}
            className="bd3-preview"
            style={{ display: activeTab === "edit" ? "none" : "flex" }}
          >
            <div className="bd3-preview-grid" />
            <div className="bd3-preview-glow" />

            <button className="bd3-back-btn" onClick={() => setActiveTab("edit")}>
              <Pencil size={11} /> Edit
            </button>

            <div
              className="bd3-preview-card"
              style={{ width: `${1080 * scale}px`, height: `${1350 * scale}px` }}
            >
              <div style={{ width: 1080, height: 1350, transform: `scale(${scale})`, transformOrigin: "top left" }}>
                <PostTemplate3 data={{ ...form, template: selectedTemplate }} />
              </div>
            </div>

            <div className="bd3-preview-badge" style={{ display: "none" }} />

            {/* Mobile download — fixed bottom, preview tab only */}
            {activeTab === "preview" && (
              <button className="bd3-mobile-dl" onClick={handleDownload} disabled={isDownloading}>
                {isDownloading ? <span className="bd3-pulse">Downloading…</span> : <><Download size={17} /> Save Image</>}
              </button>
            )}
          </main>
        </div>

        {/* HIDDEN RENDER */}
        <div style={{ position: "fixed", left: 0, top: "-3000px", width: 1080, height: 1350, pointerEvents: "none", zIndex: -1 }}>
          <PostTemplate3 ref={hiddenRef} data={{ ...form, template: selectedTemplate }} edit={true} />
        </div>

        {/* CROP MODAL */}
        {showCrop && tempImage && (
          <CropModal3
            imageUrl={tempImage}
            initialTransform={savedTransform}
            onSave={(img, transform) => {
              set("profileImage", img);
              setSavedTransform(transform);
              setShowCrop(false);
              setTempImage(null);
            }}
            onClose={() => { setShowCrop(false); setTempImage(null); }}
          />
        )}

        {/* LOADING OVERLAYS */}
        <LoadingOverlay
          isVisible={showDownloadOverlay}
          icon="download"
          message="Generating your HD image…"
        />

        {/* Startup changelog popup */}
        <StartupPopup />
      </div>
    </>
  );
}
