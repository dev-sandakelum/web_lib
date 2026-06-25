"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { toPng } from "html-to-image";
import {
  Upload, Download, Copy, Check, Sparkles, RefreshCcw,
  Eye, Pencil, Wand2, User, MessageSquare,
  Lock, Camera, Palette, Stars, Crop, Sun, Moon,
} from "lucide-react";
import { PostTemplate3 } from "./post-template";
import { CropModal3 } from "./crop-modal";
import { LoadingOverlay } from "./loading-overlay";
import { TEMPLATES3 } from "./templates";
import type { FormData3, ImageTransform3 } from "./types";
import { loadImageFile } from "@/lib/utils";

const DEFAULT_FORM: FormData3 = {
  name: "",
  batch: "9th Batch",
  faculty: "Faculty of Technology",
  university: "University of Ruhuna",
  profileImage: null,
  message: "Wishing you a spectacular birthday! As you mark another milestone in your life today, take a moment to celebrate not just how far you have come, but the incredible person you are becoming. May this special day be filled with the warmth of love, the echo of laughter, and moments that turn into cherished memories.",
  templateId: "t1",
  access: false,
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
  const [isCopying, setIsCopying] = useState(false);
  // delayed visibility — overlay only appears after 1s so quick ops skip it
  const [showDownloadOverlay, setShowDownloadOverlay] = useState(false);
  const [showCopyOverlay, setShowCopyOverlay] = useState(false);
  const downloadTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isMsgGen, setIsMsgGen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [copied, setCopied] = useState(false);
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
  const PASS_KEY = process.env.NEXT_PUBLIC_PASS_key;

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

  const handleCopyImage = async () => {
    setIsCopying(true);
    copyTimerRef.current = setTimeout(() => setShowCopyOverlay(true), 1000);
    try {
      const canvas = await captureImage();
      // wrap toBlob in a promise so we can await it properly
      await new Promise<void>((resolve, reject) => {
        canvas.toBlob(async (blob) => {
          if (!blob) { reject(new Error("No blob")); return; }
          try {
            await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
            resolve();
          } catch (err) {
            reject(err);
          }
        }, "image/png");
      });
    } catch { alert("Could not copy to clipboard."); }
    finally {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      setShowCopyOverlay(false);
      setIsCopying(false);
    }
  };

  const handleGenerateMsg = async () => {
    setIsMsgGen(true);
    try {
      const res = await fetch("/api/bd/msg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Input:\n- Name: ${form.name}\n- Sender: ${form.batch} ${form.faculty} ${form.university}\n\nInstructions:\nAct as a professional Social Media Admin for a university student union. Write a birthday message:\n1. Tone: Formal, warm, inspirational, slightly poetic.\n2. Structure: Header with festive emojis, Salutation "Dear ${form.name},", Opener, Core Message (growth/light/strength/success), Closing, Sign-off "Best wishes from," + sender, Hashtags at bottom.\n3. Use "\\n" line breaks. Use elegant emojis (✨ 🌟 🥂 🎂 🤍) at end of each line.\nGenerate now.`,
        }),
      });
      const data = await res.json();
      setGeneratedMsg(data.result?.content ?? "");
    } catch (err) { console.error(err); }
    setIsMsgGen(false);
  };

  const handleRefreshMsg = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch("/api/bd/msg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: "Write a warm, authentic birthday wish. Voice: genuine, supportive, uplifting. No names or specific titles. Calm elegant emojis (✨ 💛 🥂 🌿) naturally integrated. STRICT 300-340 characters including spaces and emojis. Output ONLY the wish text.",
        }),
      });
      const data = await res.json();
      set("message", data.result?.content ?? "");
    } catch (err) { console.error(err); }
    setTimeout(() => setIsRefreshing(false), 800);
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

  /* ── JSX ── */
  return (
    <>
      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        .bd3-root {
          width: 100vw; height: 100vh;
          background: #080811;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #f1f1f8;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: fixed;
          inset: 0;
        }
        /* ── Light theme overrides ── */
        .bd3-root.light {
          background: #f4f4f8;
          color: #1a1a2e;
        }
        .bd3-root.light .bd3-nav {
          background: rgba(255,255,255,0.9);
          border-bottom-color: rgba(0,0,0,0.08);
        }
        .bd3-root.light .bd3-nav-title { color: #1a1a2e; }
        .bd3-root.light .bd3-nav-sub   { color: rgba(0,0,0,0.4); }
        .bd3-root.light .bd3-nav-badge {
          background: rgba(0,0,0,0.06);
          border-color: rgba(0,0,0,0.1);
          color: rgba(0,0,0,0.5);
        }
        .bd3-root.light .bd3-theme-btn {
          border-color: rgba(0,0,0,0.12);
          background: rgba(0,0,0,0.04);
          color: rgba(0,0,0,0.55);
        }
        .bd3-root.light .bd3-theme-btn:hover {
          background: rgba(0,0,0,0.09);
          color: #1a1a2e;
        }
        .bd3-root.light .bd3-editor {
          background: #ffffff;
          border-right-color: rgba(0,0,0,0.08);
        }
        .bd3-root.light .bd3-section {
          background: rgba(0,0,0,0.025);
          border-color: rgba(0,0,0,0.08);
        }
        .bd3-root.light .bd3-section:hover { border-color: rgba(0,0,0,0.14); }
        .bd3-root.light .bd3-section-header {
          background: rgba(0,0,0,0.02);
          border-bottom-color: rgba(0,0,0,0.06);
        }
        .bd3-root.light .bd3-section-title { color: rgba(0,0,0,0.45); }
        .bd3-root.light .bd3-input {
          background: rgba(0,0,0,0.03);
          border-color: rgba(0,0,0,0.1);
          color: #1a1a2e;
        }
        .bd3-root.light .bd3-input::placeholder { color: rgba(0,0,0,0.28); }
        .bd3-root.light .bd3-input:focus {
          border-color: rgba(124,58,237,0.5);
          background: rgba(124,58,237,0.04);
        }
        .bd3-root.light .bd3-textarea {
          background: rgba(0,0,0,0.03);
          border-color: rgba(0,0,0,0.1);
          color: #1a1a2e;
        }
        .bd3-root.light .bd3-textarea::placeholder { color: rgba(0,0,0,0.28); }
        .bd3-root.light .bd3-textarea:focus {
          border-color: rgba(124,58,237,0.5);
          background: rgba(124,58,237,0.04);
        }
        .bd3-root.light .bd3-field-label { color: rgba(0,0,0,0.45); }
        .bd3-root.light .bd3-char-count  { color: rgba(0,0,0,0.35); }
        .bd3-root.light .bd3-refresh-btn {
          border-color: rgba(0,0,0,0.1);
          background: rgba(0,0,0,0.03);
          color: rgba(0,0,0,0.45);
        }
        .bd3-root.light .bd3-refresh-btn:hover { color: #1a1a2e; border-color: rgba(0,0,0,0.2); background: rgba(0,0,0,0.08); }
        .bd3-root.light .bd3-photo-btn   { border-color: rgba(0,0,0,0.12); background: rgba(0,0,0,0.02); }
        .bd3-root.light .bd3-photo-btn:hover { border-color: rgba(0,0,0,0.25); background: rgba(0,0,0,0.05); }
        .bd3-root.light .bd3-photo-label { color: rgba(0,0,0,0.38); }
        .bd3-root.light .bd3-photo-sub   { color: rgba(0,0,0,0.25); }
        .bd3-root.light .bd3-photo-card  { border-color: rgba(124,58,237,0.25); background: rgba(124,58,237,0.05); }
        .bd3-root.light .bd3-ai-box {
          background: rgba(0,0,0,0.025);
          border-color: rgba(0,0,0,0.08);
          color: rgba(0,0,0,0.55);
        }
        .bd3-root.light .bd3-ai-empty    { color: rgba(0,0,0,0.25); }
        .bd3-root.light .bd3-btn-ghost {
          border-color: rgba(0,0,0,0.12);
          background: rgba(0,0,0,0.03);
          color: rgba(0,0,0,0.55);
        }
        .bd3-root.light .bd3-btn-ghost:hover { border-color: rgba(0,0,0,0.22); background: rgba(0,0,0,0.07); color: #1a1a2e; }
        .bd3-root.light .bd3-access-locked {
          border-color: rgba(0,0,0,0.08);
          background: rgba(0,0,0,0.02);
          color: rgba(0,0,0,0.35);
        }
        .bd3-root.light .bd3-action-bar {
          border-top-color: rgba(0,0,0,0.08);
          background: rgba(244,244,248,0.95);
        }
        .bd3-root.light .bd3-preview { background: #eaeaf2; }
        .bd3-root.light .bd3-preview-grid {
          background-image: radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px);
        }
        .bd3-root.light .bd3-nav-tabs {
          background: rgba(0,0,0,0.05);
          border-color: rgba(0,0,0,0.1);
        }
        .bd3-root.light .bd3-nav-tab.inactive { color: rgba(0,0,0,0.4); }
        .bd3-root.light .bd3-nav-tab.inactive:hover { color: rgba(0,0,0,0.75); background: rgba(0,0,0,0.07); }
        .bd3-root.light .bd3-photo-action-replace {
          border-color: rgba(0,0,0,0.12); color: rgba(0,0,0,0.45);
        }
        .bd3-root.light .bd3-photo-action-replace:hover { border-color: rgba(0,0,0,0.22); background: rgba(0,0,0,0.07) !important; color: rgba(0,0,0,0.8); }
        .bd3-root.light .bd3-preview-card {
          box-shadow:
            0 8px 32px rgba(100,80,180,0.12),
            0 2px 8px rgba(100,80,180,0.08),
            0 0 0 1px rgba(124,58,237,0.1);
        }
        .bd3-root.light .bd3-preview-card:hover {
          box-shadow:
            0 12px 40px rgba(100,80,180,0.18),
            0 4px 12px rgba(100,80,180,0.1),
            0 0 0 1px rgba(124,58,237,0.15);
        }
        .bd3-root.light .bd3-tpl-card { border-color: rgba(0,0,0,0.1); }

        /* ── Scrollbar (legacy, kept for textarea/ai-box) ── */

        /* ── Navbar ── */
        .bd3-nav {
          height: 56px;
          flex-shrink: 0;
          border-bottom: 1px solid rgba(255,255,255,0.055);
          background: rgba(10,10,18,0.92);
          backdrop-filter: blur(20px) saturate(1.5);
          -webkit-backdrop-filter: blur(20px) saturate(1.5);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          z-index: 50;
        }
        .bd3-nav-brand { display: flex; align-items: center; gap: 12px; }
        .bd3-nav-logo {
          width: 34px; height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg, #7c3aed, #c026d3);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 18px rgba(124,58,237,0.5), inset 0 1px 0 rgba(255,255,255,0.15);
        }
        .bd3-nav-title { font-size: 15px; font-weight: 700; color: #f1f1f8; letter-spacing: -0.3px; }
        .bd3-nav-sub { font-size: 10px; color: rgba(255,255,255,0.3); font-weight: 500; letter-spacing: 0.08em; margin-top: 1px; }

        /* ── Navbar right section ── */
        .bd3-nav-right {
          display: flex; align-items: center; gap: 10px;
          margin-left: auto;
        }

        /* resolution badge in navbar */
        .bd3-nav-badge {
          display: none;
          align-items: center; gap: 6px;
          padding: 5px 13px; border-radius: 99px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          font-size: 11px; font-weight: 600;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.04em; white-space: nowrap;
          user-select: none;
        }
        /* dot indicator */
        .bd3-nav-badge-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #7c3aed;
          box-shadow: 0 0 6px rgba(124,58,237,0.7);
          flex-shrink: 0;
        }

        /* theme toggle button */
        .bd3-theme-btn {
          width: 34px; height: 34px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.55);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.2s; flex-shrink: 0;
        }
        .bd3-theme-btn:hover {
          border-color: rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.1);
          color: #fff;
          transform: rotate(12deg);
        }
        .bd3-theme-btn:active { transform: scale(0.9) rotate(12deg); }

        @media (min-width: 768px) {
          .bd3-nav-badge { display: flex; }
        }

        /* ── Mobile tabs (navbar) ── */
        .bd3-nav-tabs {
          display: none;
          gap: 4px;
          background: rgba(255,255,255,0.05);
          padding: 4px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .bd3-nav-tab {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 14px; border-radius: 9px;
          font-size: 12px; font-weight: 600;
          border: none; cursor: pointer;
          transition: all 0.2s;
          text-transform: capitalize;
        }
        .bd3-nav-tab.active { background: #7c3aed; color: #fff; box-shadow: 0 2px 12px rgba(124,58,237,0.4); }
        .bd3-nav-tab.inactive { background: transparent; color: rgba(255,255,255,0.4); }
        .bd3-nav-tab.inactive:hover { color: rgba(255,255,255,0.75); background: rgba(255,255,255,0.06); }

        /* ── Body ── */
        .bd3-body {
          display: flex;
          flex: 1;
          min-height: 0;
          overflow: hidden;
        }

        /* ── Editor Panel ── */
        .bd3-editor {
          width: 400px;
          flex-shrink: 0;
          background: #0e0e1a;
          border-right: 1px solid rgba(255,255,255,0.055);
          display: flex;
          flex-direction: column;
          min-height: 0;
          overflow: hidden;
        }

        /* scroll wrapper — sits between editor and action bar */
        .bd3-editor-scroll {
          flex: 1;
          min-height: 0;
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-width: thin;
          scrollbar-color: rgba(139,92,246,0.4) transparent;
        }
        .bd3-editor-scroll::-webkit-scrollbar { width: 4px; }
        .bd3-editor-scroll::-webkit-scrollbar-track { background: transparent; }
        .bd3-editor-scroll::-webkit-scrollbar-thumb {
          background: rgba(139,92,246,0.4);
          border-radius: 99px;
        }
        .bd3-editor-scroll::-webkit-scrollbar-thumb:hover { background: rgba(139,92,246,0.65); }

        /* content inside the scroll wrapper */
        .bd3-editor-inner {
          padding: 18px 16px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        /* ── Section ── */
        .bd3-section {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          transition: border-color 0.2s;
          flex-shrink: 0;
        }
        .bd3-section:hover { border-color: rgba(255,255,255,0.13); }
        .bd3-section-header {
          display: flex; align-items: center; gap: 9px;
          padding: 12px 15px 11px;
          border-bottom: 1px solid rgba(255,255,255,0.055);
          background: rgba(255,255,255,0.02);
          border-radius: 14px 14px 0 0;
        }
        .bd3-section-icon { display: flex; align-items: center; flex-shrink: 0; }
        .bd3-section-title {
          font-size: 10.5px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.09em;
          color: rgba(255,255,255,0.45);
        }
        .bd3-section-body {
          padding: 14px 15px 16px;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        /* ── Field ── */
        .bd3-field { display: flex; flex-direction: column; gap: 6px; }
        .bd3-field-header { display: flex; align-items: center; justify-content: space-between; }
        .bd3-field-label { font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.4); letter-spacing: 0.04em; }
        .bd3-field-hint { font-size: 10px; color: rgba(255,255,255,0.22); font-variant-numeric: tabular-nums; }

        /* ── Inputs ── */
        .bd3-input {
          width: 100%; box-sizing: border-box;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 10px;
          padding: 10px 13px;
          font-size: 13.5px; font-family: inherit;
          color: #f1f1f8;
          outline: none;
          transition: border-color 0.18s, background 0.18s, box-shadow 0.18s;
          -webkit-font-smoothing: antialiased;
        }
        .bd3-input::placeholder { color: rgba(255,255,255,0.18); }
        .bd3-input:focus {
          border-color: rgba(124,58,237,0.65);
          background: rgba(124,58,237,0.06);
          box-shadow: 0 0 0 3px rgba(124,58,237,0.12);
        }
        .bd3-input:hover:not(:focus) { border-color: rgba(255,255,255,0.15); }

        .bd3-textarea {
          width: 100%; box-sizing: border-box;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 10px;
          padding: 10px 13px;
          font-size: 13px; font-family: inherit; line-height: 1.6;
          color: #f1f1f8; resize: vertical; min-height: 110px;
          outline: none;
          transition: border-color 0.18s, background 0.18s, box-shadow 0.18s;
        }
        .bd3-textarea::placeholder { color: rgba(255,255,255,0.18); }
        .bd3-textarea:focus {
          border-color: rgba(124,58,237,0.65);
          background: rgba(124,58,237,0.06);
          box-shadow: 0 0 0 3px rgba(124,58,237,0.12);
        }
        .bd3-textarea:hover:not(:focus) { border-color: rgba(255,255,255,0.15); }

        /* ── Scrollbar for textarea ── */
        .bd3-textarea {
          scrollbar-width: thin;
          scrollbar-color: rgba(139,92,246,0.3) transparent;
        }
        .bd3-textarea::-webkit-scrollbar { width: 4px; }
        .bd3-textarea::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.3); border-radius: 4px; }

        /* ── Template Grid ── */
        .bd3-tpl-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .bd3-tpl-card {
          position: relative; height: 82px; border-radius: 12px;
          overflow: hidden; border: 2px solid rgba(255,255,255,0.09);
          cursor: pointer; transition: all 0.22s;
          background-size: cover; background-position: center;
        }
        .bd3-tpl-card:hover { border-color: rgba(255,255,255,0.25); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,0,0,0.4); }
        .bd3-tpl-card.selected { border-color: #7c3aed; box-shadow: 0 0 0 3px rgba(124,58,237,0.25), 0 8px 24px rgba(0,0,0,0.5); transform: translateY(-1px); }
        .bd3-tpl-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 55%, transparent 100%);
          display: flex; align-items: flex-end; padding: 9px 10px;
        }
        .bd3-tpl-name { font-size: 10px; font-weight: 700; color: #fff; letter-spacing: 0.06em; text-transform: uppercase; line-height: 1; }
        .bd3-tpl-check {
          position: absolute; top: 8px; right: 8px;
          width: 20px; height: 20px;
          background: #7c3aed; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 8px rgba(124,58,237,0.5);
          animation: bd3-pop 0.18s ease-out;
        }
        @keyframes bd3-pop { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }

        /* ── Grid 2 col ── */
        .bd3-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }

        /* ── Photo Upload ── */
        .bd3-photo-btn {
          width: 100%; border-radius: 12px; border: 2px dashed rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.02);
          padding: 22px 16px; cursor: pointer;
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          transition: all 0.2s; box-sizing: border-box;
        }
        .bd3-photo-btn:hover { border-color: rgba(255,255,255,0.22); background: rgba(255,255,255,0.05); }
        .bd3-photo-icon-wrap {
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(255,255,255,0.05);
          display: flex; align-items: center; justify-content: center;
        }
        .bd3-photo-label { font-size: 12.5px; font-weight: 500; color: rgba(255,255,255,0.3); }
        .bd3-photo-sub { font-size: 11px; color: rgba(255,255,255,0.18); }

        /* filled photo card */
        .bd3-photo-card {
          width: 100%; border-radius: 12px;
          border: 1px solid rgba(124,58,237,0.3);
          background: rgba(124,58,237,0.06);
          padding: 12px 14px; box-sizing: border-box;
          display: flex; align-items: center; gap: 12px;
        }
        .bd3-photo-img {
          width: 48px; height: 48px; border-radius: 50%; object-fit: cover; flex-shrink: 0;
          border: 2px solid rgba(124,58,237,0.6);
          box-shadow: 0 0 0 3px rgba(124,58,237,0.14);
        }
        .bd3-photo-info { flex: 1; min-width: 0; }
        .bd3-photo-ready { font-size: 11.5px; font-weight: 600; color: #a78bfa; }
        .bd3-photo-hint  { font-size: 10.5px; color: rgba(255,255,255,0.25); margin-top: 2px; }
        .bd3-photo-actions { display: flex; gap: 6px; flex-shrink: 0; }
        .bd3-photo-action-btn {
          display: flex; align-items: center; gap: 5px;
          padding: 6px 10px; border-radius: 8px; border: 1px solid;
          font-size: 11.5px; font-weight: 600; cursor: pointer;
          transition: all 0.15s; font-family: inherit; white-space: nowrap; background: none;
        }
        .bd3-photo-action-edit {
          border-color: rgba(124,58,237,0.4); color: #a78bfa;
          background: rgba(124,58,237,0.08) !important;
        }
        .bd3-photo-action-edit:hover { border-color: rgba(124,58,237,0.7); background: rgba(124,58,237,0.18) !important; color: #c4b5fd; }
        .bd3-photo-action-replace {
          border-color: rgba(255,255,255,0.1); color: rgba(255,255,255,0.4);
        }
        .bd3-photo-action-replace:hover { border-color: rgba(255,255,255,0.22); background: rgba(255,255,255,0.08) !important; color: rgba(255,255,255,0.75); }

        /* ── Msg toolbar ── */
        .bd3-msg-toolbar { display: flex; align-items: center; justify-content: space-between; }
        .bd3-char-count { font-size: 10.5px; color: rgba(255,255,255,0.28); font-variant-numeric: tabular-nums; }
        .bd3-refresh-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 5px 10px; border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.04);
          font-size: 11.5px; font-weight: 600; color: rgba(255,255,255,0.4);
          cursor: pointer; transition: all 0.18s;
        }
        .bd3-refresh-btn:hover { color: rgba(255,255,255,0.8); border-color: rgba(255,255,255,0.18); background: rgba(255,255,255,0.08); }
        .bd3-refresh-btn:disabled { opacity: 0.45; pointer-events: none; }
        .bd3-spin { animation: bd3-spin 0.9s linear infinite; }
        @keyframes bd3-spin { to { transform: rotate(-360deg); } }

        /* ── AI msg box ── */
        .bd3-ai-box {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          padding: 12px 13px;
          min-height: 76px;
          font-size: 12.5px; line-height: 1.65;
          color: rgba(255,255,255,0.55);
          white-space: pre-line;
          word-break: break-word;
          max-height: 200px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(139,92,246,0.3) transparent;
        }
        .bd3-ai-box::-webkit-scrollbar { width: 3px; }
        .bd3-ai-box::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.3); border-radius: 4px; }
        .bd3-ai-empty { color: rgba(255,255,255,0.2); font-style: italic; }

        /* ── Buttons row ── */
        .bd3-btn-row { display: flex; gap: 8px; }

        /* ── Primary CTA button ── */
        .bd3-btn-primary {
          flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 12px 16px; border-radius: 11px; border: none; cursor: pointer;
          font-size: 13.5px; font-weight: 700; color: #fff;
          background: linear-gradient(135deg, #7c3aed, #9d3dd1);
          box-shadow: 0 4px 18px rgba(124,58,237,0.35), inset 0 1px 0 rgba(255,255,255,0.12);
          transition: all 0.18s; -webkit-font-smoothing: antialiased;
          font-family: inherit;
        }
        .bd3-btn-primary:hover { background: linear-gradient(135deg, #6d28d9, #8b2fc9); box-shadow: 0 6px 24px rgba(124,58,237,0.5), inset 0 1px 0 rgba(255,255,255,0.12); transform: translateY(-1px); }
        .bd3-btn-primary:active { transform: translateY(0); box-shadow: 0 2px 10px rgba(124,58,237,0.3); }
        .bd3-btn-primary:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

        /* ── Ghost button ── */
        .bd3-btn-ghost {
          display: flex; align-items: center; justify-content: center; gap: 7px;
          padding: 12px 16px; border-radius: 11px; cursor: pointer;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.55);
          transition: all 0.18s;
          font-family: inherit;
        }
        .bd3-btn-ghost:hover { border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.09); color: rgba(255,255,255,0.9); }
        .bd3-btn-ghost:active { transform: scale(0.97); }
        .bd3-btn-ghost:disabled { opacity: 0.4; cursor: not-allowed; }

        /* ── AI generate btn (gradient outline style) ── */
        .bd3-btn-ai {
          flex: 1; display: flex; align-items: center; justify-content: center; gap: 7px;
          padding: 11px 14px; border-radius: 10px; border: none; cursor: pointer;
          font-size: 13px; font-weight: 700; color: #fff;
          background: linear-gradient(135deg, #6d28d9 0%, #c026d3 100%);
          box-shadow: 0 3px 14px rgba(192,38,211,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
          transition: all 0.18s; font-family: inherit;
        }
        .bd3-btn-ai:hover { opacity: 0.88; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(192,38,211,0.4); }
        .bd3-btn-ai:disabled { opacity: 0.45; cursor: not-allowed; transform: none; }

        /* ── Access status ── */
        .bd3-access-status {
          display: flex; align-items: center; gap: 8px;
          padding: 9px 12px; border-radius: 9px; border: 1px solid;
          font-size: 12px; font-weight: 500;
          transition: all 0.25s;
        }
        .bd3-access-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
        .bd3-access-granted { border-color: rgba(52,211,153,0.3); background: rgba(52,211,153,0.06); color: #6ee7b7; }
        .bd3-access-granted .bd3-access-dot { background: #34d399; box-shadow: 0 0 6px rgba(52,211,153,0.6); }
        .bd3-access-locked { border-color: rgba(255,255,255,0.06); background: rgba(255,255,255,0.02); color: rgba(255,255,255,0.28); }
        .bd3-access-locked .bd3-access-dot { background: rgba(255,255,255,0.2); }

        /* ── Bottom action bar ── */
        .bd3-action-bar {
          flex-shrink: 0; padding: 14px 18px;
          border-top: 1px solid rgba(255,255,255,0.055);
          background: rgba(8,8,17,0.9);
          backdrop-filter: blur(10px);
          display: flex; gap: 10px;
        }

        /* ── Preview panel ── */
        .bd3-preview {
          flex: 1;
          min-height: 0;
          min-width: 0;
          background: #060610;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
          position: relative;
          overflow: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(139,92,246,0.2) transparent;
        }
        .bd3-preview::-webkit-scrollbar { width: 4px; height: 4px; }
        .bd3-preview::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.25); border-radius: 4px; }
        .bd3-preview-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(rgba(255,255,255,0.038) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .bd3-preview-glow {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 70%);
        }
        .bd3-preview-card {
          position: relative; z-index: 10;
          border-radius: 18px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 40px 100px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.04);
          transition: box-shadow 0.3s;
        }
        .bd3-preview-card:hover { box-shadow: 0 40px 100px rgba(0,0,0,0.9), 0 0 40px rgba(124,58,237,0.1), 0 0 0 1px rgba(255,255,255,0.06); }

        /* ── Animate pulse ── */
        .bd3-pulse { animation: bd3-pulse 1.5s ease-in-out infinite; }
        @keyframes bd3-pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.55; } }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .bd3-nav-tabs { display: flex; }
          .bd3-editor { width: 100%; border-right: none; }
          .bd3-preview { padding: 20px 16px 80px; }
          .bd3-mobile-dl {
            position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%);
            display: flex; align-items: center; gap: 8px;
            padding: 14px 28px; border-radius: 16px; border: none; cursor: pointer;
            font-size: 14px; font-weight: 700; color: #fff; z-index: 20;
            background: linear-gradient(135deg, #7c3aed, #c026d3);
            box-shadow: 0 8px 32px rgba(124,58,237,0.45);
            font-family: inherit;
          }
          .bd3-back-btn {
            position: absolute; top: 14px; left: 14px;
            display: flex; align-items: center; gap: 6px;
            padding: 8px 14px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1);
            background: rgba(255,255,255,0.06); backdrop-filter: blur(8px);
            font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.6);
            cursor: pointer; z-index: 20; font-family: inherit;
          }
          .bd3-back-btn:hover { color: #fff; border-color: rgba(255,255,255,0.2); }
        }
        @media (min-width: 768px) {
          .bd3-editor { display: flex !important; }
          .bd3-preview { display: flex !important; }
          .bd3-mobile-dl { display: none !important; }
          .bd3-back-btn { display: none !important; }
        }
      `}</style>

      <div className={`bd3-root${theme === "light" ? " light" : ""}`}>
        {/* NAVBAR */}
        <nav className="bd3-nav">
          <div className="bd3-nav-brand">
            <div className="bd3-nav-logo">
              <Sparkles size={17} color="#fff" />
            </div>
            <div>
              <div className="bd3-nav-title">Birthday Post Studio</div>
              <div className="bd3-nav-sub">v3 &nbsp;·&nbsp; 9th Batch</div>
            </div>
          </div>

          {/* Right side: badge + theme toggle + mobile tabs */}
          <div className="bd3-nav-right">
            {/* Resolution badge — hidden on mobile */}
            <div className="bd3-nav-badge">
              <span className="bd3-nav-badge-dot" />
              1080 × 1350 px
            </div>

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
                  <span className="bd3-char-count">{form.message.length} chars</span>
                  <button
                    className="bd3-refresh-btn"
                    onClick={handleRefreshMsg}
                    disabled={isRefreshing}
                    title="AI: generate short message for image"
                  >
                    <RefreshCcw size={11} className={isRefreshing ? "bd3-spin" : ""} />
                    AI Refresh
                  </button>
                </div>
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

            {/* Action Bar */}
            <div className="bd3-action-bar">
              <button
                className="bd3-btn-primary"
                onClick={handleDownload}
                disabled={isDownloading || isCopying}
              >
                {isDownloading ? (
                  <span className="bd3-pulse">Downloading…</span>
                ) : (
                  <><Download size={16} /> Download HD</>
                )}
              </button>
              <button
                className="bd3-btn-ghost"
                onClick={handleCopyImage}
                disabled={isDownloading || isCopying}
              >
                {copied ? <Check size={15} color="#34d399" /> : <Copy size={15} />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
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

            <button className="bd3-mobile-dl" onClick={handleDownload} disabled={isDownloading || isCopying}>
              {isDownloading ? <span className="bd3-pulse">Downloading…</span> : <><Download size={17} /> Save Image</>}
            </button>
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
        <LoadingOverlay
          isVisible={showCopyOverlay}
          icon="loading"
          message="Copying image to clipboard…"
        />
      </div>
    </>
  );
}
