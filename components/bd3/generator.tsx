
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
        <span className="bd3-section-icon" style={{ color: accent ?? "#8494FF" }}>{icon}</span>
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
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [savedTransform, setSavedTransform] = useState<ImageTransform3 | undefined>();
  const [showCrop, setShowCrop] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
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
  const [showCreator, setShowCreator] = useState(false);
  const [activeMobPanel, setActiveMobPanel] = useState<string | null>(null);
  const [mobToolbarHidden, setMobToolbarHidden] = useState(false);
  const [creatorTab, setCreatorTab] = useState<"about" | "changelog">("about");
  const [showCachePrompt, setShowCachePrompt] = useState(false);

  useEffect(() => {
    // Ask once if user wants to cache the logo image for offline use
    const cacheKey = "bd3_logo_cached_v1";
    if (!localStorage.getItem(cacheKey) && "caches" in window) {
      setShowCachePrompt(true);
    }
  }, []);

  const handleCacheLogo = async (accept: boolean) => {
    setShowCachePrompt(false);
    localStorage.setItem("bd3_logo_cached_v1", "1");
    if (!accept || !("caches" in window)) return;
    try {
      const cache = await caches.open("bd3-assets-v1");
      await cache.addAll(["/bd3/logo.jpeg", "/bd3/happy birthday.png", "/bd3/outline.png", "/bd3/text-bg.jpg", "/bd3/saparater.png"]);
    } catch { /* silent fail */ }
  };
  const [appReady, setAppReady] = useState(false);
  const [splashMounted, setSplashMounted] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setAppReady(true), 900);
    const unmountTimer = setTimeout(() => setSplashMounted(false), 900 + 600);
    return () => { clearTimeout(fadeTimer); clearTimeout(unmountTimer); };
  }, []);

  // ── Mobile pinch-zoom / pan ──
  const [mobTransform, setMobTransform] = useState({ x: 0, y: 0, scale: 1 });
  const mobGestureRef = useRef<{
    startDist: number; startScale: number;
    startMidX: number; startMidY: number;
    startTX: number; startTY: number;
    isPinch: boolean;
    lastX: number; lastY: number;
  } | null>(null);

  const handleMobTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const t1 = e.touches[0], t2 = e.touches[1];
      const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      const midX = (t1.clientX + t2.clientX) / 2;
      const midY = (t1.clientY + t2.clientY) / 2;
      mobGestureRef.current = {
        startDist: dist, startScale: mobTransform.scale,
        startMidX: midX, startMidY: midY,
        startTX: mobTransform.x, startTY: mobTransform.y,
        isPinch: true, lastX: midX, lastY: midY,
      };
    } else if (e.touches.length === 1) {
      mobGestureRef.current = {
        startDist: 0, startScale: mobTransform.scale,
        startMidX: e.touches[0].clientX, startMidY: e.touches[0].clientY,
        startTX: mobTransform.x, startTY: mobTransform.y,
        isPinch: false,
        lastX: e.touches[0].clientX, lastY: e.touches[0].clientY,
      };
    }
  }, [mobTransform]);

  const handleMobTouchMove = useCallback((e: React.TouchEvent) => {
    const g = mobGestureRef.current;
    if (!g) return;
    e.preventDefault();
    if (e.touches.length === 2 && g.isPinch) {
      const t1 = e.touches[0], t2 = e.touches[1];
      const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      const midX = (t1.clientX + t2.clientX) / 2;
      const midY = (t1.clientY + t2.clientY) / 2;
      const newScale = Math.min(Math.max(g.startScale * (dist / g.startDist), 0.2), 5);
      setMobTransform({
        scale: newScale,
        x: g.startTX + (midX - g.startMidX),
        y: g.startTY + (midY - g.startMidY),
      });
    } else if (e.touches.length === 1 && !g.isPinch) {
      const dx = e.touches[0].clientX - g.lastX;
      const dy = e.touches[0].clientY - g.lastY;
      g.lastX = e.touches[0].clientX;
      g.lastY = e.touches[0].clientY;
      setMobTransform(prev => ({ ...prev, x: prev.x + dx, y: prev.y + dy }));
    }
  }, []);

  const handleMobTouchEnd = useCallback(() => {
    mobGestureRef.current = null;
  }, []);

  const resetMobTransform = useCallback(() => setMobTransform({ x: 0, y: 0, scale: 1 }), []);

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
        setSavedTransform(undefined);
        setTempImage(url);
        setShowCrop(true);
      }
    } catch { alert("Error loading image."); }
    finally { if (fileRef.current) fileRef.current.value = ""; }
  };

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

  const handleGenerateMsg = async () => {
    setIsMsgGen(true);
    setGeneratedMsg("");
    try {
      const res = await fetch("/api/bd3/msg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify({
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

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const parts = buffer.split("\n\n");
        buffer = parts.pop() ?? "";

        for (const part of parts) {
          const eventMatch = part.match(/^event:\s*(\w+)/m);
          const dataMatch  = part.match(/^data:\s*(.+)/m);
          if (!eventMatch || !dataMatch) continue;

          const eventName = eventMatch[1];
          let payload: any;
          try { payload = JSON.parse(dataMatch[1]); } catch { continue; }

          if (eventName === "attempt") {
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
    // Reset access if input is cleared
    if (!v) set("access", false);
  };

  const handleEnableAccess = () => {
    set("access", accessInput === PASS_KEY);
  };


  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        .bd3-root {
          width: 100vw; height: 100vh;
          background: #0A2647;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #E8F0FE;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: fixed;
          inset: 0;
        }

        /* ── Light theme overrides ── */
        .bd3-root.light {
          background: #F0F4FF;
          color: #0A2647;
        }
        .bd3-root.light .bd3-nav {
          background: rgba(255,255,255,0.92);
          border-bottom-color: rgba(99,103,255,0.12);
        }
        .bd3-root.light .bd3-nav-title { color: #0A2647; }
        .bd3-root.light .bd3-nav-sub   { color: rgba(10,38,71,0.4); }
        .bd3-root.light .bd3-nav-badge {
          background: rgba(99,103,255,0.06);
          border-color: rgba(99,103,255,0.15);
          color: rgba(10,38,71,0.45);
        }
        .bd3-root.light .bd3-theme-btn {
          border-color: rgba(99,103,255,0.15);
          background: rgba(99,103,255,0.05);
          color: rgba(10,38,71,0.5);
        }
        .bd3-root.light .bd3-theme-btn:hover {
          background: rgba(99,103,255,0.12);
          color: #0A2647;
        }
        .bd3-root.light .bd3-editor {
          background: #FFFFFF;
          border-right-color: rgba(99,103,255,0.12);
        }
        .bd3-root.light .bd3-section {
          background: #FAFCFF;
          border-color: rgba(99,103,255,0.15);
        }
        .bd3-root.light .bd3-section:hover { border-color: rgba(99,103,255,0.28); }
        .bd3-root.light .bd3-section-header {
          background: rgba(99,103,255,0.04);
          border-bottom-color: rgba(99,103,255,0.12);
        }
        .bd3-root.light .bd3-section-title { color: rgba(10,38,71,0.45); }
        .bd3-root.light .bd3-input {
          background: rgba(99,103,255,0.04);
          border-color: rgba(99,103,255,0.15);
          color: #0A2647;
        }
        .bd3-root.light .bd3-input::placeholder { color: rgba(10,38,71,0.28); }
        .bd3-root.light .bd3-input:focus {
          border-color: #6367FF;
          background: rgba(99,103,255,0.06);
        }
        .bd3-root.light .bd3-textarea {
          background: rgba(99,103,255,0.04);
          border-color: rgba(99,103,255,0.15);
          color: #0A2647;
        }
        .bd3-root.light .bd3-textarea::placeholder { color: rgba(10,38,71,0.28); }
        .bd3-root.light .bd3-textarea:focus {
          border-color: #6367FF;
          background: rgba(99,103,255,0.06);
        }
        .bd3-root.light .bd3-field-label { color: rgba(10,38,71,0.45); }
        .bd3-root.light .bd3-char-count  { color: rgba(10,38,71,0.35); }
        .bd3-root.light .bd3-refresh-btn {
          border-color: rgba(99,103,255,0.15);
          background: rgba(99,103,255,0.04);
          color: rgba(10,38,71,0.45);
        }
        .bd3-root.light .bd3-refresh-btn:hover { color: #0A2647; border-color: rgba(99,103,255,0.3); background: rgba(99,103,255,0.09); }
        .bd3-root.light .bd3-photo-btn   { border-color: rgba(99,103,255,0.15); background: rgba(99,103,255,0.03); }
        .bd3-root.light .bd3-photo-btn:hover { border-color: rgba(99,103,255,0.3); background: rgba(99,103,255,0.07); }
        .bd3-root.light .bd3-photo-label { color: rgba(10,38,71,0.4); }
        .bd3-root.light .bd3-photo-sub   { color: rgba(10,38,71,0.28); }
        .bd3-root.light .bd3-photo-card  { border-color: rgba(99,103,255,0.25); background: rgba(99,103,255,0.05); }
        .bd3-root.light .bd3-ai-box {
          background: rgba(99,103,255,0.04);
          border-color: rgba(99,103,255,0.12);
          color: rgba(10,38,71,0.55);
        }
        .bd3-root.light .bd3-ai-empty    { color: rgba(10,38,71,0.28); }
        .bd3-root.light .bd3-btn-ghost {
          border-color: rgba(99,103,255,0.15);
          background: rgba(99,103,255,0.04);
          color: rgba(10,38,71,0.55);
        }
        .bd3-root.light .bd3-btn-ghost:hover { border-color: rgba(99,103,255,0.28); background: rgba(99,103,255,0.09); color: #0A2647; }
        .bd3-root.light .bd3-access-locked {
          border-color: rgba(99,103,255,0.1);
          background: rgba(99,103,255,0.03);
          color: rgba(10,38,71,0.35);
        }
        .bd3-root.light .bd3-action-bar {
          border-top-color: rgba(99,103,255,0.12);
          background: rgba(240,244,255,0.97);
        }
        .bd3-root.light .bd3-preview { background: #E8EEFF; }
        .bd3-root.light .bd3-preview-grid {
          background-image: radial-gradient(rgba(99,103,255,0.1) 1px, transparent 1px);
        }
        .bd3-root.light .bd3-nav-tabs {
          background: rgba(99,103,255,0.06);
          border-color: rgba(99,103,255,0.15);
        }
        .bd3-root.light .bd3-nav-tab.inactive { color: rgba(10,38,71,0.4); }
        .bd3-root.light .bd3-nav-tab.inactive:hover { color: rgba(10,38,71,0.75); background: rgba(99,103,255,0.08); }
        .bd3-root.light .bd3-photo-action-replace {
          border-color: rgba(99,103,255,0.15); color: rgba(10,38,71,0.45);
        }
        .bd3-root.light .bd3-photo-action-replace:hover { border-color: rgba(99,103,255,0.28); background: rgba(99,103,255,0.07) !important; color: #0A2647; }
        .bd3-root.light .bd3-preview-card {
          box-shadow:
            0 8px 32px rgba(99,103,255,0.12),
            0 2px 8px rgba(99,103,255,0.08),
            0 0 0 1px rgba(99,103,255,0.1);
        }
        .bd3-root.light .bd3-preview-card:hover {
          box-shadow:
            0 12px 40px rgba(99,103,255,0.18),
            0 4px 12px rgba(99,103,255,0.1),
            0 0 0 1px rgba(99,103,255,0.15);
        }
        .bd3-root.light .bd3-tpl-card { border-color: rgba(99,103,255,0.12); }
        .bd3-root.light .bd3-char-range { color: rgba(10,38,71,0.25); }

        /* ── Light theme: mobile toolbar ── */
        .bd3-root.light .bd3-mob-toolbar {
          background: rgba(255,255,255,0.98);
          border-color: rgba(99,103,255,0.15);
          box-shadow: 0 4px 16px rgba(99,103,255,0.1);
        }
        .bd3-root.light .bd3-mob-tool-btn {
          color: rgba(10,38,71,0.45);
        }
        .bd3-root.light .bd3-mob-tool-btn:hover,
        .bd3-root.light .bd3-mob-tool-btn.active {
          background: rgba(99,103,255,0.1);
          color: rgba(10,38,71,0.85);
        }
        .bd3-root.light .bd3-mob-tool-btn.active {
          background: rgba(99,103,255,0.15);
          box-shadow: 0 0 0 1.5px rgba(99,103,255,0.4);
        }
        .bd3-root.light .bd3-mob-toolbar-divider {
          background: rgba(99,103,255,0.12);
        }
        .bd3-root.light .bd3-mob-toolbar-toggle {
          background: rgba(99,103,255,0.07);
          color: rgba(10,38,71,0.4);
        }
        .bd3-root.light .bd3-mob-toolbar-toggle:hover {
          background: rgba(99,103,255,0.14);
          color: rgba(10,38,71,0.75);
        }
        .bd3-root.light .bd3-mob-bar-show-btn {
          background: rgba(255,255,255,0.95);
          border-color: rgba(99,103,255,0.2);
          color: rgba(10,38,71,0.5);
          box-shadow: 0 2px 12px rgba(99,103,255,0.12);
        }
        .bd3-root.light .bd3-mob-bar-show-btn:hover {
          background: rgba(99,103,255,0.1);
          color: rgba(10,38,71,0.8);
        }

        /* ── Light theme: bottom sheet ── */
        .bd3-root.light .bd3-mob-sheet {
          background: #FFFFFF;
          border-top-color: rgba(99,103,255,0.15);
          box-shadow: 0 -8px 40px rgba(99,103,255,0.12);
        }
        .bd3-root.light .bd3-mob-sheet-handle {
          background: rgba(99,103,255,0.2);
        }
        .bd3-root.light .bd3-mob-sheet-title-text {
          color: #0A2647;
        }
        .bd3-root.light .bd3-mob-sheet-title-icon {
          background: rgba(99,103,255,0.08);
        }
        .bd3-root.light .bd3-mob-sheet-close {
          background: rgba(99,103,255,0.07);
          color: rgba(10,38,71,0.4);
        }
        .bd3-root.light .bd3-mob-sheet-close:hover {
          background: rgba(99,103,255,0.15);
          color: #0A2647;
        }


        /* ── Navbar ── */
        .bd3-nav {
          height: 56px;
          flex-shrink: 0;
          border-bottom: 1px solid rgba(32,82,149,0.5);
          background: rgba(10,38,71,0.96);
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
          overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .bd3-nav-logo img {
          width: 100%; height: 100%; object-fit: cover; display: block;
        }
        .bd3-nav-title { font-size: 15px; font-weight: 700; color: #E8F0FE; letter-spacing: -0.3px; }
        .bd3-nav-sub { font-size: 10px; color: rgba(196,218,255,0.4); font-weight: 500; letter-spacing: 0.08em; margin-top: 1px; }


        /* ── Navbar right section ── */
        .bd3-nav-right {
          display: flex; align-items: center; gap: 10px;
          margin-left: auto;
        }

        /* desktop download button in navbar */
        .bd3-nav-download {
          display: none;
          align-items: center; gap: 7px;
          padding: 7px 16px; border-radius: 10px; border: none;
          background: #6367FF;
          color: #fff; font-size: 13px; font-weight: 700;
          cursor: pointer; font-family: inherit; white-space: nowrap;
          box-shadow: 0 4px 14px rgba(99,103,255,0.4);
          transition: all 0.18s;
        }
        .bd3-nav-download:hover { background: #5558E8; box-shadow: 0 6px 20px rgba(99,103,255,0.55); transform: translateY(-1px); }
        .bd3-nav-download:active { transform: translateY(0); }
        .bd3-nav-download:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
        @media (min-width: 768px) { .bd3-nav-download { display: flex; } }

        /* resolution badge in navbar */
        .bd3-nav-badge {
          display: none;
          align-items: center; gap: 6px;
          padding: 5px 13px; border-radius: 99px;
          border: 1px solid rgba(32,82,149,0.5);
          background: rgba(32,82,149,0.2);
          font-size: 11px; font-weight: 600;
          color: rgba(196,218,255,0.4);
          letter-spacing: 0.04em; white-space: nowrap;
          user-select: none;
        }
        /* dot indicator */
        .bd3-nav-badge-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #6367FF;
          box-shadow: 0 0 6px rgba(99,103,255,0.7);
          flex-shrink: 0;
        }

        /* theme toggle button */
        .bd3-theme-btn {
          width: 34px; height: 34px; border-radius: 10px;
          border: 1px solid rgba(32,82,149,0.5);
          background: rgba(32,82,149,0.2);
          color: rgba(196,218,255,0.55);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.2s; flex-shrink: 0;
        }
        .bd3-theme-btn:hover {
          border-color: rgba(99,103,255,0.5);
          background: rgba(99,103,255,0.12);
          color: #E8F0FE;
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
          background: rgba(32,82,149,0.25);
          padding: 4px;
          border-radius: 12px;
          border: 1px solid rgba(32,82,149,0.5);
        }
        .bd3-nav-tab {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 14px; border-radius: 9px;
          font-size: 12px; font-weight: 600;
          border: none; cursor: pointer;
          transition: all 0.2s;
          text-transform: capitalize;
        }
        .bd3-nav-tab.active { background: #6367FF; color: #fff; box-shadow: 0 2px 12px rgba(99,103,255,0.4); }
        .bd3-nav-tab.inactive { background: transparent; color: rgba(196,218,255,0.4); }
        .bd3-nav-tab.inactive:hover { color: rgba(196,218,255,0.85); background: rgba(99,103,255,0.1); }

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
          background: #0D2E55;
          border-right: 1px solid rgba(32,82,149,0.4);
          display: flex;
          flex-direction: column;
          min-height: 0;
          overflow: hidden;
        }

        /* scroll wrapper */
        .bd3-editor-scroll {
          flex: 1;
          min-height: 0;
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-width: thin;
          scrollbar-color: rgba(99,103,255,0.35) transparent;
        }
        .bd3-editor-scroll::-webkit-scrollbar { width: 4px; }
        .bd3-editor-scroll::-webkit-scrollbar-track { background: transparent; }
        .bd3-editor-scroll::-webkit-scrollbar-thumb {
          background: rgba(99,103,255,0.35);
          border-radius: 99px;
        }
        .bd3-editor-scroll::-webkit-scrollbar-thumb:hover { background: rgba(99,103,255,0.55); }

        /* content inside the scroll wrapper */
        .bd3-editor-inner {
          padding: 20px 16px 28px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        /* ── Section ── */
        .bd3-section {
          background: #112F56;
          border: 1px solid rgba(32,82,149,0.55);
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.25);
          transition: border-color 0.2s;
          flex-shrink: 0;
        }
        .bd3-section:hover { border-color: rgba(99,103,255,0.3); }
        .bd3-section-header {
          display: flex; align-items: center; gap: 9px;
          padding: 12px 16px;
          border-bottom: 1px solid rgba(32,82,149,0.4);
          background: rgba(10,38,71,0.3);
          border-radius: 16px 16px 0 0;
        }
        .bd3-section-icon { display: flex; align-items: center; flex-shrink: 0; }
        .bd3-section-title {
          font-size: 10.5px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.09em;
          color: rgba(196,218,255,0.4);
        }
        .bd3-section-body {
          padding: 14px 16px 18px;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        /* ── Field ── */
        .bd3-field { display: flex; flex-direction: column; gap: 6px; }
        .bd3-field-header { display: flex; align-items: center; justify-content: space-between; }
        .bd3-field-label { font-size: 11px; font-weight: 600; color: rgba(196,218,255,0.5); letter-spacing: 0.04em; }
        .bd3-field-hint { font-size: 10px; color: rgba(196,218,255,0.35); font-variant-numeric: tabular-nums; }

        /* ── Inputs ── */
        .bd3-input {
          width: 100%; box-sizing: border-box;
          background: rgba(20,66,114,0.5);
          border: 1px solid rgba(32,82,149,0.6);
          border-radius: 10px;
          padding: 10px 13px;
          font-size: 13.5px; font-family: inherit;
          color: #E8F0FE;
          outline: none;
          transition: border-color 0.18s, background 0.18s, box-shadow 0.18s;
          -webkit-font-smoothing: antialiased;
        }
        .bd3-input::placeholder { color: rgba(196,218,255,0.25); }
        .bd3-input:focus {
          border-color: #6367FF;
          background: rgba(20,66,114,0.65);
          box-shadow: 0 0 0 3px rgba(99,103,255,0.15);
        }
        .bd3-input:hover:not(:focus) { border-color: rgba(99,103,255,0.35); }

        .bd3-textarea {
          width: 100%; box-sizing: border-box;
          background: rgba(20,66,114,0.5);
          border: 1px solid rgba(32,82,149,0.6);
          border-radius: 10px;
          padding: 10px 13px;
          font-size: 13px; font-family: inherit; line-height: 1.6;
          color: #E8F0FE; resize: vertical; min-height: 110px;
          outline: none;
          transition: border-color 0.18s, background 0.18s, box-shadow 0.18s;
        }
        .bd3-textarea::placeholder { color: rgba(196,218,255,0.25); }
        .bd3-textarea:focus {
          border-color: #6367FF;
          background: rgba(20,66,114,0.65);
          box-shadow: 0 0 0 3px rgba(99,103,255,0.15);
        }
        .bd3-textarea:hover:not(:focus) { border-color: rgba(99,103,255,0.35); }

        /* ── Scrollbar for textarea ── */
        .bd3-textarea {
          scrollbar-width: thin;
          scrollbar-color: rgba(99,103,255,0.35) transparent;
        }
        .bd3-textarea::-webkit-scrollbar { width: 4px; }
        .bd3-textarea::-webkit-scrollbar-thumb { background: rgba(99,103,255,0.35); border-radius: 4px; }

        /* ── Template Grid ── */
        .bd3-tpl-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .bd3-tpl-card {
          position: relative; height: 82px; border-radius: 12px;
          overflow: hidden; border: 2px solid rgba(32,82,149,0.5);
          cursor: pointer; transition: all 0.22s;
          background-size: cover; background-position: center;
        }
        .bd3-tpl-card:hover { border-color: rgba(99,103,255,0.4); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,0,0,0.4); }
        .bd3-tpl-card.selected { border-color: #6367FF; box-shadow: 0 0 0 3px rgba(99,103,255,0.25), 0 8px 24px rgba(0,0,0,0.5); transform: translateY(-1px); }
        .bd3-tpl-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 55%, transparent 100%);
          display: flex; align-items: flex-end; padding: 9px 10px;
        }
        .bd3-tpl-name { font-size: 10px; font-weight: 700; color: #fff; letter-spacing: 0.06em; text-transform: uppercase; line-height: 1; }
        .bd3-tpl-check {
          position: absolute; top: 8px; right: 8px;
          width: 20px; height: 20px;
          background: #6367FF; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 8px rgba(99,103,255,0.5);
          animation: bd3-pop 0.18s ease-out;
        }
        @keyframes bd3-pop { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }

        /* ── Grid 2 col ── */
        .bd3-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }

        /* ── Photo Upload ── */
        .bd3-photo-btn {
          width: 100%; border-radius: 12px; border: 2px dashed rgba(32,82,149,0.5);
          background: rgba(20,66,114,0.2);
          padding: 22px 16px; cursor: pointer;
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          transition: all 0.2s; box-sizing: border-box;
        }
        .bd3-photo-btn:hover { border-color: rgba(99,103,255,0.4); background: rgba(99,103,255,0.06); }
        .bd3-photo-icon-wrap {
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(99,103,255,0.1);
          display: flex; align-items: center; justify-content: center;
        }
        .bd3-photo-label { font-size: 12.5px; font-weight: 500; color: rgba(196,218,255,0.4); }
        .bd3-photo-sub { font-size: 11px; color: rgba(196,218,255,0.25); }

        /* filled photo card */
        .bd3-photo-card {
          width: 100%; border-radius: 12px;
          border: 1px solid rgba(99,103,255,0.3);
          background: rgba(99,103,255,0.06);
          padding: 12px 14px; box-sizing: border-box;
          display: flex; align-items: center; gap: 12px;
        }
        .bd3-photo-img {
          width: 48px; height: 48px; border-radius: 50%; object-fit: cover; flex-shrink: 0;
          border: 2px solid rgba(99,103,255,0.6);
          box-shadow: 0 0 0 3px rgba(99,103,255,0.14);
        }
        .bd3-photo-info { flex: 1; min-width: 0; }
        .bd3-photo-ready { font-size: 11.5px; font-weight: 600; color: #8494FF; }
        .bd3-photo-hint  { font-size: 10.5px; color: rgba(196,218,255,0.35); margin-top: 2px; }
        .bd3-photo-actions { display: flex; gap: 6px; flex-shrink: 0; }
        .bd3-photo-action-btn {
          display: flex; align-items: center; gap: 5px;
          padding: 6px 10px; border-radius: 8px; border: 1px solid;
          font-size: 11.5px; font-weight: 600; cursor: pointer;
          transition: all 0.15s; font-family: inherit; white-space: nowrap; background: transparent;
        }
        .bd3-photo-action-edit {
          border-color: rgba(99,103,255,0.4); color: #8494FF;
          background: rgba(99,103,255,0.08) !important;
        }
        .bd3-photo-action-edit:hover { border-color: rgba(99,103,255,0.7); background: rgba(99,103,255,0.18) !important; color: #C9BEFF; }
        .bd3-photo-action-replace {
          border-color: rgba(32,82,149,0.5); color: rgba(196,218,255,0.45);
        }
        .bd3-photo-action-replace:hover { border-color: rgba(99,103,255,0.35); background: rgba(99,103,255,0.08) !important; color: rgba(196,218,255,0.85); }

        /* ── Msg toolbar ── */
        .bd3-msg-toolbar { display: flex; align-items: center; justify-content: space-between; }
        .bd3-char-info { display: flex; align-items: center; gap: 6px; }
        .bd3-char-count { font-size: 10.5px; color: rgba(196,218,255,0.4); font-variant-numeric: tabular-nums; transition: color 0.3s; }
        .bd3-char-count.bd3-char-searching { color: #8494FF; }
        .bd3-char-count.bd3-char-good { color: #34d399; }
        .bd3-char-range { font-size: 10px; color: rgba(196,218,255,0.28); }

        /* ── Refresh button ── */
        .bd3-refresh-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 5px 10px; border-radius: 8px;
          border: 1px solid rgba(32,82,149,0.35);
          background: rgba(20,66,114,0.3);
          font-size: 11.5px; font-weight: 600; color: rgba(196,218,255,0.4);
          cursor: pointer; transition: all 0.18s;
        }
        .bd3-refresh-btn:hover { color: rgba(196,218,255,0.85); border-color: rgba(99,103,255,0.3); background: rgba(99,103,255,0.08); }
        .bd3-refresh-btn:disabled { opacity: 0.45; pointer-events: none; }
        .bd3-refresh-btn.bd3-refresh-active {
          border-color: rgba(99,103,255,0.4);
          background: rgba(99,103,255,0.15);
          color: #8494FF;
          opacity: 1;
          pointer-events: none;
        }
        .bd3-refresh-label { font-size: 11px; font-weight: 600; min-width: 40px; }

        /* spinning ring inside button */
        .bd3-refresh-ring { flex-shrink: 0; }
        .bd3-ring-spin {
          transform-origin: 6.5px 6.5px;
          animation: bd3-ring 1s linear infinite;
        }
        @keyframes bd3-ring { to { transform: rotate(360deg); } }

        /* ── Refresh progress bar ── */
        .bd3-refresh-progress {
          position: relative;
          height: 3px;
          background: rgba(32,82,149,0.3);
          border-radius: 99px;
          overflow: visible;
          margin-bottom: 12px;
        }
        .bd3-refresh-progress-bar {
          height: 100%;
          border-radius: 99px;
          background: linear-gradient(90deg, #6367FF, #8494FF, #C9BEFF);
          background-size: 200% 100%;
          transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          animation: bd3-shimmer 1.8s linear infinite;
        }
        @keyframes bd3-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .bd3-refresh-progress-label {
          display: block;
          margin-top: 5px;
          font-size: 9px; font-weight: 600;
          color: rgba(196,218,255,0.35);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .bd3-spin { animation: bd3-spin 0.9s linear infinite; }
        @keyframes bd3-spin { to { transform: rotate(-360deg); } }

        /* ── AI msg box ── */
        .bd3-ai-box {
          background: rgba(10,38,71,0.4);
          border: 1px solid rgba(32,82,149,0.5);
          border-radius: 10px;
          padding: 12px 13px;
          min-height: 76px;
          font-size: 12.5px; line-height: 1.65;
          color: rgba(196,218,255,0.6);
          white-space: pre-line;
          word-break: break-word;
          max-height: 200px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(99,103,255,0.35) transparent;
        }
        .bd3-ai-box::-webkit-scrollbar { width: 3px; }
        .bd3-ai-box::-webkit-scrollbar-thumb { background: rgba(99,103,255,0.35); border-radius: 4px; }
        .bd3-ai-empty { color: rgba(196,218,255,0.25); font-style: italic; }

        /* ── Buttons row ── */
        .bd3-btn-row { display: flex; gap: 8px; }

        /* ── Primary CTA button ── */
        .bd3-btn-primary {
          flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 12px 16px; border-radius: 11px; border: none; cursor: pointer;
          font-size: 13.5px; font-weight: 700; color: #fff;
          background: #6367FF;
          box-shadow: 0 4px 14px rgba(99,103,255,0.4);
          transition: all 0.18s; -webkit-font-smoothing: antialiased;
          font-family: inherit;
        }
        .bd3-btn-primary:hover { background: #5558E8; box-shadow: 0 6px 24px rgba(99,103,255,0.55); transform: translateY(-1px); }
        .bd3-btn-primary:active { transform: translateY(0); box-shadow: 0 2px 10px rgba(99,103,255,0.3); }
        .bd3-btn-primary:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

        /* ── Ghost button ── */
        .bd3-btn-ghost {
          display: flex; align-items: center; justify-content: center; gap: 7px;
          padding: 12px 16px; border-radius: 11px; cursor: pointer;
          border: 1px solid rgba(32,82,149,0.3);
          background: transparent;
          font-size: 13px; font-weight: 600; color: rgba(196,218,255,0.55);
          transition: all 0.18s;
          font-family: inherit;
        }
        .bd3-btn-ghost:hover { border-color: rgba(99,103,255,0.35); background: rgba(99,103,255,0.08); color: rgba(196,218,255,0.9); }
        .bd3-btn-ghost:active { transform: scale(0.97); }
        .bd3-btn-ghost:disabled { opacity: 0.4; cursor: not-allowed; }

        /* ── AI generate btn ── */
        .bd3-btn-ai {
          flex: 1; display: flex; align-items: center; justify-content: center; gap: 7px;
          padding: 11px 14px; border-radius: 10px; border: none; cursor: pointer;
          font-size: 13px; font-weight: 700; color: #fff;
          background: linear-gradient(135deg, #6367FF 0%, #8494FF 100%);
          box-shadow: 0 3px 14px rgba(99,103,255,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
          transition: all 0.18s; font-family: inherit;
        }
        .bd3-btn-ai:hover { opacity: 0.88; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(99,103,255,0.45); }
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
        .bd3-access-locked { border-color: rgba(32,82,149,0.35); background: rgba(20,66,114,0.2); color: rgba(196,218,255,0.3); }
        .bd3-access-locked .bd3-access-dot { background: rgba(196,218,255,0.2); }

        /* ── Bottom action bar ── */
        .bd3-action-bar {
          flex-shrink: 0; padding: 14px 18px;
          border-top: 1px solid rgba(32,82,149,0.45);
          background: rgba(10,38,71,0.95);
          backdrop-filter: blur(10px);
          display: flex; gap: 10px;
        }

        /* ── Preview panel ── */
        .bd3-preview {
          flex: 1;
          min-height: 0;
          min-width: 0;
          background: #071d38;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
          position: relative;
          overflow: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(99,103,255,0.35) transparent;
        }
        .bd3-preview::-webkit-scrollbar { width: 4px; height: 4px; }
        .bd3-preview::-webkit-scrollbar-thumb { background: rgba(99,103,255,0.35); border-radius: 4px; }
        .bd3-preview-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(rgba(99,103,255,0.06) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .bd3-preview-glow {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(99,103,255,0.07) 0%, transparent 70%);
        }
        .bd3-preview-card {
          position: relative; z-index: 10;
          border-radius: 18px; overflow: hidden;
          border: 1px solid rgba(99,103,255,0.15);
          box-shadow: 0 40px 100px rgba(0,0,0,0.85), 0 0 0 1px rgba(99,103,255,0.08);
          transition: box-shadow 0.3s;
        }
        .bd3-preview-card:hover { box-shadow: 0 40px 100px rgba(0,0,0,0.9), 0 0 40px rgba(99,103,255,0.1), 0 0 0 1px rgba(99,103,255,0.15); }

        /* ── Slider (Advanced Settings) ── */
        .bd3-slider {
          width: 100%; height: 4px; border-radius: 99px;
          appearance: none; -webkit-appearance: none;
          background: rgba(32,82,149,0.4);
          outline: none; cursor: pointer;
          accent-color: #6367FF;
        }
        .bd3-slider::-webkit-slider-thumb {
          appearance: none; -webkit-appearance: none;
          width: 16px; height: 16px; border-radius: 50%;
          background: #6367FF;
          box-shadow: 0 0 0 3px rgba(99,103,255,0.25);
          cursor: pointer; transition: box-shadow 0.15s;
        }
        .bd3-slider::-webkit-slider-thumb:hover { box-shadow: 0 0 0 5px rgba(99,103,255,0.35); }
        .bd3-slider:disabled { opacity: 0.35; cursor: not-allowed; }
        .bd3-slider-marks {
          display: flex; justify-content: space-between;
          font-size: 9.5px; color: rgba(196,218,255,0.3);
          margin-top: 3px; font-weight: 500;
        }
        .bd3-slider-auto-btn {
          flex-shrink: 0; padding: 5px 10px; border-radius: 8px;
          border: 1px solid rgba(99,103,255,0.3);
          background: rgba(99,103,255,0.08);
          color: #8494FF; font-size: 11px; font-weight: 600;
          cursor: pointer; white-space: nowrap; font-family: inherit;
          transition: all 0.15s;
        }
        .bd3-slider-auto-btn:hover { background: rgba(99,103,255,0.18); border-color: rgba(99,103,255,0.55); }

        /* ── Access enable button ── */
        .bd3-access-row { display: flex; gap: 8px; align-items: stretch; }
        .bd3-access-row .bd3-input { flex: 1; min-width: 0; }
        .bd3-btn-enable {
          flex-shrink: 0;
          display: flex; align-items: center; gap: 6px;
          padding: 10px 14px; border-radius: 10px; border: 1px solid;
          font-size: 12.5px; font-weight: 700; cursor: pointer;
          font-family: inherit; white-space: nowrap;
          transition: all 0.2s;
        }
        .bd3-btn-enable.locked {
          border-color: rgba(252,211,77,0.35);
          background: rgba(252,211,77,0.08);
          color: #fcd34d;
        }
        .bd3-btn-enable.locked:hover {
          border-color: rgba(252,211,77,0.65);
          background: rgba(252,211,77,0.15);
        }
        .bd3-btn-enable.locked:active { transform: scale(0.96); }
        .bd3-btn-enable.granted {
          border-color: rgba(52,211,153,0.35);
          background: rgba(52,211,153,0.08);
          color: #34d399;
          cursor: default;
        }

        /* ── Animate pulse ── */
        .bd3-pulse { animation: bd3-pulse 1.5s ease-in-out infinite; }
        @keyframes bd3-pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.55; } }

        /* ── Lock/unlock pop animation ── */
        @keyframes bd3-unlock-pop {
          0%   { transform: scale(1) rotate(0deg); }
          30%  { transform: scale(1.35) rotate(-12deg); }
          55%  { transform: scale(0.9) rotate(6deg); }
          75%  { transform: scale(1.12) rotate(-3deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        .bd3-mob-tool-btn .bd3-lock-icon { display: flex; align-items: center; justify-content: center; }
        .bd3-mob-tool-btn.access-granted .bd3-lock-icon { animation: bd3-unlock-pop 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards; }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          /* Hide desktop tabs in navbar */
          .bd3-nav-tabs { display: none !important; }
          /* Hide the desktop editor panel */
          .bd3-editor { display: none !important; }
          /* Preview always fills the body — add top padding for the icon bar */
          .bd3-preview {
            display: flex !important;
            padding: 72px 12px 80px;
            align-items: flex-start;
            justify-content: center;
            overflow: hidden;
            touch-action: none;
            transition: padding-top 0.3s cubic-bezier(0.4,0,0.2,1);
          }
          .bd3-preview.bar-hidden { padding-top: 16px; }

          /* canvas container that receives transform */
          .bd3-mob-canvas {
            display: flex;
            align-items: center;
            justify-content: center;
            will-change: transform;
            cursor: grab;
            user-select: none;
          }
          .bd3-mob-canvas:active { cursor: grabbing; }

          /* reset zoom pill — hidden, now inside bottom nav */
          .bd3-mob-reset-zoom { display: none; }

          /* ── Mobile bottom nav bar ── */
          .bd3-mob-bottom-nav {
            position: fixed; bottom: 0; left: 0; right: 0;
            z-index: 300;
            height: 64px;
            background: rgba(10,30,60,0.96);
            border-top: 1px solid rgba(99,103,255,0.15);
            display: flex; align-items: center;
            padding: 0 12px;
            gap: 8px;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.4);
          }
          .bd3-root.light .bd3-mob-bottom-nav {
            background: rgba(255,255,255,0.98);
            border-top-color: rgba(99,103,255,0.14);
            box-shadow: 0 -4px 20px rgba(99,103,255,0.08);
          }

          /* primary download button — grows */
          .bd3-mob-dl-btn {
            flex: 1;
            height: 42px;
            border-radius: 12px; border: none; cursor: pointer;
            display: flex; align-items: center; justify-content: center; gap: 8px;
            background: #6367FF;
            color: #fff; font-size: 14px; font-weight: 700;
            font-family: inherit;
            box-shadow: 0 4px 16px rgba(99,103,255,0.45);
            transition: all 0.18s;
          }
          .bd3-mob-dl-btn:hover { background: #5558E8; }
          .bd3-mob-dl-btn:active { transform: scale(0.97); }
          .bd3-mob-dl-btn:disabled { opacity: 0.5; cursor: not-allowed; }

          /* icon-only square buttons */
          .bd3-mob-nav-btn {
            width: 44px; height: 42px; flex-shrink: 0;
            border-radius: 12px; border: none; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            background: rgba(99,103,255,0.1);
            border: 1px solid rgba(99,103,255,0.18);
            color: rgba(196,218,255,0.6);
            transition: all 0.18s;
          }
          .bd3-mob-nav-btn:hover { background: rgba(99,103,255,0.2); color: #C9BEFF; }
          .bd3-mob-nav-btn:active { transform: scale(0.94); }
          .bd3-mob-nav-btn.active {
            background: rgba(99,103,255,0.25);
            border-color: rgba(99,103,255,0.4);
            color: #C9BEFF;
          }
          .bd3-root.light .bd3-mob-nav-btn {
            background: rgba(99,103,255,0.06);
            border-color: rgba(99,103,255,0.15);
            color: rgba(10,38,71,0.45);
          }
          .bd3-root.light .bd3-mob-nav-btn:hover { background: rgba(99,103,255,0.12); color: #0A2647; }
          .bd3-root.light .bd3-mob-nav-btn.active {
            background: rgba(99,103,255,0.14);
            border-color: rgba(99,103,255,0.3);
            color: #0A2647;
          }

          /* ── Mobile download FAB — replaced by bottom nav ── */
          .bd3-mobile-dl { display: none !important; }
          /* Hide the old back btn – replaced by toolbar */
          .bd3-back-btn { display: none !important; }

          /* ── Horizontal icon bar — below navbar ── */
          .bd3-mob-toolbar {
            position: fixed;
            top: 56px;
            left: 0; right: 0;
            z-index: 300;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0;
            background: rgba(10,30,60,0.96);
            border: none;
            border-bottom: 1px solid rgba(99,103,255,0.15);
            border-radius: 0;
            padding: 0 4px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.35);
            height: 52px;
            overflow: hidden;
            transition: height 0.3s cubic-bezier(0.4,0,0.2,1);
          }
          .bd3-mob-toolbar.bar-hidden {
            height: 0;
            border-bottom-color: transparent;
            box-shadow: none;
          }
          .bd3-mob-tool-btn {
            flex: 1;
            height: 44px;
            border-radius: 10px;
            border: none; cursor: pointer;
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            gap: 3px;
            background: transparent;
            color: rgba(196,218,255,0.55);
            transition: all 0.18s;
            position: relative;
          }
          .bd3-mob-tool-btn:hover,
          .bd3-mob-tool-btn.active {
            background: rgba(99,103,255,0.18);
            color: #C9BEFF;
          }
          .bd3-mob-tool-btn.active {
            background: rgba(99,103,255,0.28);
            color: #E0DBFF;
            box-shadow: 0 0 0 1.5px rgba(99,103,255,0.5);
          }
          .bd3-mob-tool-btn-dot {
            position: absolute;
            top: 6px; right: calc(50% - 14px);
            width: 5px; height: 5px; border-radius: 50%;
            background: #34d399;
            box-shadow: 0 0 5px rgba(52,211,153,0.8);
          }
          .bd3-mob-tool-label {
            font-size: 8px; font-weight: 700;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            line-height: 1;
          }
          .bd3-mob-toolbar-divider {
            width: 1px; height: 24px; margin: 0 2px;
            background: rgba(99,103,255,0.15);
            border-radius: 99px;
            flex-shrink: 0;
          }

          /* toggle button — right end of the bar, always visible */
          .bd3-mob-toolbar-toggle {
            width: 36px; height: 36px; flex-shrink: 0;
            border-radius: 10px; border: none; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            background: rgba(99,103,255,0.1);
            color: rgba(196,218,255,0.45);
            transition: all 0.2s;
            margin-left: 2px;
          }
          .bd3-mob-toolbar-toggle:hover {
            background: rgba(99,103,255,0.22);
            color: rgba(196,218,255,0.85);
          }
          .bd3-mob-toolbar-toggle:active { transform: scale(0.92); }
          .bd3-mob-toolbar-toggle svg {
            transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1);
          }
          /* chevron flips when bar is hidden */
          .bd3-mob-toolbar-toggle.hidden svg { transform: rotate(180deg); }

          /* show toggle btn outside bar when collapsed — pinned to navbar right */
          .bd3-mob-bar-show-btn {
            display: none;
            position: fixed;
            top: 10px; right: 60px;
            z-index: 350;
            width: 34px; height: 34px;
            border-radius: 10px; border: none; cursor: pointer;
            align-items: center; justify-content: center;
            background: rgba(99,103,255,0.15);
            border: 1px solid rgba(99,103,255,0.25);
            color: rgba(196,218,255,0.65);
            transition: all 0.2s;
          }
          .bd3-mob-bar-show-btn.visible { display: flex; }
          .bd3-mob-bar-show-btn:hover { background: rgba(99,103,255,0.25); color: #E0DBFF; }

          /* tool buttons wrap — horizontal, always shown inside bar */
          .bd3-mob-tools-wrap {
            display: flex; flex-direction: row; gap: 0;
            flex: 1; align-items: center;
            overflow: hidden;
            transition: opacity 0.2s ease;
          }
          .bd3-mob-tools-wrap.visible { opacity: 1; }
          .bd3-mob-tools-wrap.collapsed { opacity: 0; pointer-events: none; }

          /* ── Mobile download FAB ── */
          .bd3-mobile-dl {
            position: fixed; bottom: 20px; left: 16px;
            display: flex; align-items: center; gap: 8px;
            padding: 13px 22px; border-radius: 16px; border: none; cursor: pointer;
            font-size: 14px; font-weight: 700; color: #fff; z-index: 300;
            background: #6367FF;
            box-shadow: 0 8px 32px rgba(99,103,255,0.55);
            font-family: inherit; white-space: nowrap;
          }
          .bd3-mobile-dl:disabled { opacity: 0.55; }

          /* ── Bottom-sheet panel ── */
          .bd3-mob-sheet-backdrop {
            position: fixed; inset: 0; z-index: 400;
            background: rgba(0,0,0,0.5);
            animation: bd3-sheet-fade-in 0.22s ease-out;
          }
          @keyframes bd3-sheet-fade-in {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          .bd3-mob-sheet {
            position: fixed;
            bottom: 0; left: 0; right: 0;
            z-index: 401;
            background: #0D2E55;
            border-top: 1px solid rgba(99,103,255,0.2);
            border-radius: 24px 24px 0 0;
            max-height: 80vh;
            display: flex; flex-direction: column;
            box-shadow: 0 -8px 40px rgba(0,0,0,0.6);
            animation: bd3-sheet-slide-up 0.28s cubic-bezier(0.32, 0.72, 0, 1);
          }
          @keyframes bd3-sheet-slide-up {
            from { transform: translateY(100%); }
            to   { transform: translateY(0); }
          }
          .bd3-mob-sheet-handle-wrap {
            padding: 10px 0 4px;
            display: flex; align-items: center; justify-content: center;
            flex-shrink: 0;
          }
          .bd3-mob-sheet-handle {
            width: 36px; height: 4px; border-radius: 99px;
            background: rgba(99,103,255,0.3);
          }
          .bd3-mob-sheet-header {
            display: flex; align-items: center; justify-content: space-between;
            padding: 0 18px 12px;
            flex-shrink: 0;
          }
          .bd3-mob-sheet-title {
            display: flex; align-items: center; gap: 9px;
          }
          .bd3-mob-sheet-title-icon {
            width: 30px; height: 30px; border-radius: 9px;
            background: rgba(99,103,255,0.12);
            display: flex; align-items: center; justify-content: center;
          }
          .bd3-mob-sheet-title-text {
            font-size: 15px; font-weight: 700; color: #E8F0FE; letter-spacing: -0.2px;
          }
          .bd3-mob-sheet-close {
            width: 30px; height: 30px; border-radius: 9px; border: none;
            background: rgba(32,82,149,0.3); cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            color: rgba(196,218,255,0.55); transition: all 0.15s;
          }
          .bd3-mob-sheet-close:hover { background: rgba(32,82,149,0.55); color: #E8F0FE; }
          .bd3-mob-sheet-scroll {
            flex: 1; min-height: 0;
            overflow-y: auto;
            padding: 0 18px 32px;
            scrollbar-width: thin;
            scrollbar-color: rgba(99,103,255,0.35) transparent;
          }
          .bd3-mob-sheet-scroll::-webkit-scrollbar { width: 3px; }
          .bd3-mob-sheet-scroll::-webkit-scrollbar-thumb { background: rgba(99,103,255,0.35); border-radius: 4px; }
          .bd3-mob-sheet-inner {
            display: flex; flex-direction: column; gap: 14px;
          }
        }
        @media (min-width: 768px) {
          .bd3-editor { display: flex !important; }
          .bd3-preview { display: flex !important; }
          .bd3-back-btn { display: none !important; }
          .bd3-mob-toolbar { display: none !important; }
          .bd3-mob-sheet-backdrop { display: none !important; }
          .bd3-mob-sheet { display: none !important; }
          .bd3-mob-bottom-nav { display: none !important; }
        }

        /* ── Creator popup ── */
        .bd3-creator-backdrop {
          position: fixed; inset: 0; z-index: 1100;
          display: flex; align-items: center; justify-content: center; padding: 20px;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          animation: bd3-modal-in 0.2s ease-out;
        }
        @keyframes bd3-modal-in {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        .bd3-creator-card {
          background: #0D2E55;
          border: 1px solid rgba(32,82,149,0.55);
          border-radius: 20px;
          width: 100%; max-width: 400px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,103,255,0.12);
          overflow: hidden;
        }
        .bd3-creator-header {
          padding: 24px 24px 20px;
          border-bottom: 1px solid rgba(32,82,149,0.4);
          background: rgba(10,38,71,0.4);
          display: flex; align-items: flex-start; justify-content: space-between;
        }
        .bd3-creator-logo-wrap {
          width: 52px; height: 52px; border-radius: 14px;
          overflow: hidden; flex-shrink: 0;
          border: 2px solid rgba(99,103,255,0.3);
          box-shadow: 0 4px 16px rgba(99,103,255,0.2);
        }
        .bd3-creator-logo-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .bd3-creator-app-info { margin-top: 12px; }
        .bd3-creator-app-name {
          font-size: 18px; font-weight: 800; color: #E8F0FE; letter-spacing: -0.3px;
        }
        .bd3-creator-app-ver {
          font-size: 11px; font-weight: 600; color: rgba(132,148,255,0.8);
          margin-left: 8px; vertical-align: middle;
        }
        .bd3-creator-app-sub {
          font-size: 12px; color: rgba(196,218,255,0.4); margin-top: 3px;
        }
        .bd3-creator-close {
          width: 30px; height: 30px; border-radius: 8px; border: none;
          background: rgba(32,82,149,0.3); cursor: pointer; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          color: rgba(196,218,255,0.5); transition: all 0.15s;
        }
        .bd3-creator-close:hover { background: rgba(32,82,149,0.55); color: #E8F0FE; }
        .bd3-creator-body { padding: 20px 24px 24px; display: flex; flex-direction: column; gap: 16px; }
        .bd3-creator-row {
          display: flex; align-items: center; gap: 14px;
        }
        .bd3-creator-avatar {
          width: 44px; height: 44px; border-radius: 50%; flex-shrink: 0;
          background: linear-gradient(135deg, #6367FF, #8494FF);
          display: flex; align-items: center; justify-content: center;
          font-size: 17px; font-weight: 800; color: #fff;
          border: 2px solid rgba(99,103,255,0.4);
          box-shadow: 0 0 0 3px rgba(99,103,255,0.12);
          letter-spacing: -0.5px;
        }
        .bd3-creator-name { font-size: 15px; font-weight: 700; color: #E8F0FE; }
        .bd3-creator-role { font-size: 11.5px; color: rgba(196,218,255,0.45); margin-top: 2px; }
        .bd3-creator-divider {
          height: 1px; background: rgba(32,82,149,0.4); margin: 0 -24px; margin-top: -4px;
        }
        .bd3-creator-meta { display: flex; flex-direction: column; gap: 8px; }
        .bd3-creator-meta-row {
          display: flex; align-items: center; gap: 10px;
          font-size: 12.5px; color: rgba(196,218,255,0.55);
        }
        .bd3-creator-meta-icon { flex-shrink: 0; opacity: 0.6; }
        .bd3-creator-meta-val { color: rgba(196,218,255,0.8); font-weight: 500; }
        .bd3-creator-footer {
          padding: 14px 24px;
          border-top: 1px solid rgba(32,82,149,0.4);
          background: rgba(10,38,71,0.3);
          display: flex; align-items: center; justify-content: space-between;
        }
        .bd3-creator-built {
          font-size: 11px; color: rgba(196,218,255,0.3); font-weight: 500;
        }
        .bd3-creator-built span { color: #8494FF; }
        .bd3-creator-dismiss {
          padding: 7px 18px; border-radius: 9px; border: none; cursor: pointer;
          background: #6367FF; color: #fff;
          font-size: 12.5px; font-weight: 700; font-family: inherit;
          box-shadow: 0 3px 12px rgba(99,103,255,0.35);
          transition: all 0.15s;
        }
        .bd3-creator-dismiss:hover { background: #5558E8; transform: translateY(-1px); box-shadow: 0 5px 18px rgba(99,103,255,0.45); }
        .bd3-creator-dismiss:active { transform: translateY(0); }

        /* logo hover hint */
        .bd3-nav-logo { cursor: pointer; transition: opacity 0.15s; }
        .bd3-nav-logo:hover { opacity: 0.8; }
        .bd3-nav-brand:hover .bd3-nav-logo { opacity: 0.85; }
        .bd3-nav-brand:hover .bd3-nav-title { color: #C9BEFF; }

        /* ── Cache prompt toast ── */
        @keyframes bd3-toast-in {
          from { opacity:0; transform:translateY(12px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .bd3-cache-toast {
          position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%);
          z-index: 2000;
          background: #0D2E55;
          border: 1px solid rgba(99,103,255,0.3);
          border-radius: 16px;
          padding: 14px 18px;
          width: calc(100% - 32px); max-width: 380px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.55), 0 0 0 1px rgba(99,103,255,0.1);
          animation: bd3-toast-in 0.28s cubic-bezier(0.34,1.56,0.64,1);
          display: flex; flex-direction: column; gap: 12px;
        }
        .bd3-root.light .bd3-cache-toast {
          background: #FFFFFF;
          border-color: rgba(99,103,255,0.18);
          box-shadow: 0 8px 32px rgba(99,103,255,0.12);
        }
        .bd3-cache-toast-header {
          display: flex; align-items: center; gap: 10px;
        }
        .bd3-cache-toast-icon {
          width: 34px; height: 34px; border-radius: 10px; flex-shrink: 0;
          background: rgba(99,103,255,0.12);
          display: flex; align-items: center; justify-content: center;
        }
        .bd3-cache-toast-title {
          font-size: 13.5px; font-weight: 700; color: #E8F0FE; letter-spacing: -0.1px;
        }
        .bd3-root.light .bd3-cache-toast-title { color: #0A2647; }
        .bd3-cache-toast-sub {
          font-size: 11.5px; color: rgba(196,218,255,0.45); margin-top: 1px; line-height: 1.5;
        }
        .bd3-root.light .bd3-cache-toast-sub { color: rgba(10,38,71,0.45); }
        .bd3-cache-toast-btns {
          display: flex; gap: 8px;
        }
        .bd3-cache-yes {
          flex: 1; padding: 9px; border-radius: 10px; border: none; cursor: pointer;
          background: #6367FF; color: #fff; font-size: 12.5px; font-weight: 700;
          font-family: inherit; box-shadow: 0 3px 12px rgba(99,103,255,0.35);
          transition: all 0.15s;
        }
        .bd3-cache-yes:hover { background: #5558E8; transform: translateY(-1px); }
        .bd3-cache-no {
          flex: 1; padding: 9px; border-radius: 10px; cursor: pointer;
          border: 1px solid rgba(32,82,149,0.4);
          background: transparent; color: rgba(196,218,255,0.5);
          font-size: 12.5px; font-weight: 600; font-family: inherit;
          transition: all 0.15s;
        }
        .bd3-root.light .bd3-cache-no { border-color: rgba(99,103,255,0.15); color: rgba(10,38,71,0.45); }
        .bd3-cache-no:hover { border-color: rgba(99,103,255,0.35); color: rgba(196,218,255,0.85); }

        /* ── Pre-ready splash screen ── */
        @keyframes bd3-splash-spin  { to { transform: rotate(360deg); } }
        @keyframes bd3-splash-rspin { to { transform: rotate(-360deg); } }
        @keyframes bd3-splash-pulse {
          0%,100% { opacity: 0.4; transform: scale(1); }
          50%      { opacity: 0.85; transform: scale(1.15); }
        }
        @keyframes bd3-splash-bar {
          0%   { width: 0%; opacity: 1; }
          85%  { width: 92%; opacity: 1; }
          100% { width: 100%; opacity: 0.6; }
        }
        @keyframes bd3-splash-dot {
          0%,80%,100% { transform: translateY(0) scale(0.85); opacity: 0.4; }
          40%          { transform: translateY(-9px) scale(1.15); opacity: 1; }
        }
        @keyframes bd3-splash-fadeout {
          0%   { opacity: 1; }
          100% { opacity: 0; }
        }
        .bd3-splash {
          position: fixed; inset: 0; z-index: 9000;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 28px;
          background: #0A2647;
          transition: opacity 0.55s ease;
        }
        .bd3-splash.ready {
          opacity: 0;
          pointer-events: none;
          animation: bd3-splash-fadeout 0.55s ease forwards;
        }
        .bd3-splash-glow {
          position: absolute; width: 480px; height: 480px; border-radius: 50%;
          background: radial-gradient(circle, rgba(99,103,255,0.18) 0%, transparent 68%);
          filter: blur(60px); pointer-events: none;
          animation: bd3-splash-pulse 2.6s ease-in-out infinite;
        }
        .bd3-splash-logo {
          position: relative; z-index: 1;
          width: 80px; height: 80px; border-radius: 22px; overflow: hidden;
          border: 2px solid rgba(99,103,255,0.35);
          box-shadow: 0 0 0 6px rgba(99,103,255,0.1), 0 16px 48px rgba(0,0,0,0.5);
          animation: bd3-splash-pulse 2.6s ease-in-out infinite;
        }
        .bd3-splash-logo img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .bd3-splash-spinner {
          position: relative; z-index: 1;
          width: 96px; height: 96px;
          display: flex; align-items: center; justify-content: center;
        }
        .bd3-splash-track {
          position: absolute; inset: 0; border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.05);
        }
        .bd3-splash-arc {
          position: absolute; inset: 0; border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: #6367FF;
          border-right-color: #8494FF;
          animation: bd3-splash-spin 1.1s linear infinite;
          filter: drop-shadow(0 0 6px rgba(99,103,255,0.7));
        }
        .bd3-splash-arc2 {
          position: absolute; inset: 10px; border-radius: 50%;
          border: 1.5px solid transparent;
          border-bottom-color: rgba(132,148,255,0.5);
          animation: bd3-splash-rspin 1.9s linear infinite;
        }
        .bd3-splash-title {
          position: relative; z-index: 1;
          font-size: 18px; font-weight: 800;
          color: #E8F0FE; letter-spacing: -0.3px;
          text-align: center;
        }
        .bd3-splash-sub {
          position: relative; z-index: 1;
          font-size: 12px; font-weight: 500;
          color: rgba(196,218,255,0.35);
          letter-spacing: 0.06em; text-transform: uppercase;
          margin-top: -20px; text-align: center;
        }
        .bd3-splash-bar-wrap {
          position: relative; z-index: 1;
          width: 180px; height: 3px; border-radius: 99px;
          background: rgba(99,103,255,0.15); overflow: hidden;
        }
        .bd3-splash-bar-fill {
          height: 100%; border-radius: 99px;
          background: linear-gradient(90deg, #6367FF, #8494FF, #C9BEFF);
          animation: bd3-splash-bar 0.85s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .bd3-splash-dots { position: relative; z-index: 1; display: flex; gap: 7px; }
        .bd3-splash-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: linear-gradient(135deg, #6367FF, #8494FF);
          animation: bd3-splash-dot 1.5s ease-in-out infinite;
        }
        .bd3-splash-dot:nth-child(2) { animation-delay: 0.18s; }
        .bd3-splash-dot:nth-child(3) { animation-delay: 0.36s; }
      `}</style>

      <div className={`bd3-root${theme === "light" ? " light" : ""}`}>
        <nav className="bd3-nav">
          <div className="bd3-nav-brand"
            onClick={() => setShowCreator(true)}
            style={{ cursor: "pointer" }}
            title="About this app"
            role="button"
            tabIndex={0}
            onKeyDown={(e: React.KeyboardEvent) => e.key === "Enter" && setShowCreator(true)}
          >
            <div className="bd3-nav-logo">
              <img src="/bd3/logo.jpeg" alt="Birthday Post Studio" />
            </div>
            <div>
              <div className="bd3-nav-title">Birthday Post Studio</div>
              <div className="bd3-nav-sub">v3  ·  9th Batch</div>
            </div>
          </div>
          <div className="bd3-nav-right">
            <div className="bd3-nav-badge">
              <span className="bd3-nav-badge-dot" />
              1080 × 1350 px
            </div>
            <button className="bd3-nav-download" onClick={handleDownload} disabled={isDownloading}>
              {isDownloading ? <span className="bd3-pulse">Downloading…</span> : <><Download size={14} /> Download HD</>}
            </button>
            <button className="bd3-theme-btn" onClick={() => setTheme(t => t === "dark" ? "light" : "dark")} title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
              {theme === "dark" ? <Sun size={15} strokeWidth={2} /> : <Moon size={15} strokeWidth={2} />}
            </button>
            <div className="bd3-nav-tabs">
              {(["edit","preview"] as const).map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`bd3-nav-tab ${activeTab === tab ? "active" : "inactive"}`}>
                  {tab === "edit" ? <Pencil size={11} /> : <Eye size={11} />}
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </nav>
        {/* ── Mobile horizontal icon bar ── */}
        <nav className={`bd3-mob-toolbar${mobToolbarHidden ? " bar-hidden" : ""}`}>
          {/* Tool buttons */}
          <div className={`bd3-mob-tools-wrap${mobToolbarHidden ? " collapsed" : " visible"}`}>
            {([
              { id: "template",  icon: <Palette size={16} />,      label: "Style",   accent: "#8494FF",  dot: false },
              { id: "person",    icon: <User size={16} />,          label: "Person",  accent: "#67e8f9",  dot: false },
              { id: "photo",     icon: <Camera size={16} />,        label: "Photo",   accent: "#f9a8d4",  dot: !!form.profileImage },
              { id: "message",   icon: <MessageSquare size={16} />, label: "Msg",     accent: "#86efac",  dot: false },
              { id: "access",    icon: (
                  <span className="bd3-lock-icon" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {form.access ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        style={{ transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)", filter: form.access ? "drop-shadow(0 0 4px #fcd34d)" : "none" }}>
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        style={{ transition: "all 0.3s" }}>
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    )}
                    <span style={{
                      position: "absolute", width: 4, height: 4, borderRadius: "50%",
                      background: form.access ? "#fcd34d" : "currentColor",
                      opacity: form.access ? 1 : 0.5,
                      top: "52%", left: "50%", transform: "translate(-50%, -50%)",
                      boxShadow: form.access ? "0 0 6px #fcd34d" : "none",
                      transition: "all 0.3s", pointerEvents: "none",
                    }} />
                  </span>
                ), label: "Key", accent: "#fcd34d", dot: !!form.access },
              { id: "ai", icon: <Stars size={16} />, label: "AI", accent: "#c4b5fd", dot: !!generatedMsg },
            ]).map(({ id, icon, label, accent, dot }, i, arr) => (
              <React.Fragment key={id}>
                <button
                  className={`bd3-mob-tool-btn${activeMobPanel === id ? " active" : ""}${id === "access" && form.access ? " access-granted" : ""}`}
                  style={{ color: activeMobPanel === id ? accent : undefined } as React.CSSProperties}
                  onClick={() => setActiveMobPanel(activeMobPanel === id ? null : id)}
                  aria-label={label}
                >
                  {dot && <span className="bd3-mob-tool-btn-dot" />}
                  {icon}
                  <span className="bd3-mob-tool-label">{label}</span>
                </button>
                {i === 2 && i < arr.length - 1 && <div className="bd3-mob-toolbar-divider" />}
              </React.Fragment>
            ))}
          </div>
          {/* Toggle — right end of bar */}
          <button
            className={`bd3-mob-toolbar-toggle${mobToolbarHidden ? " hidden" : ""}`}
            onClick={() => { setMobToolbarHidden(h => !h); setActiveMobPanel(null); }}
            aria-label={mobToolbarHidden ? "Show tools" : "Hide tools"}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 9 12 15 6 9" />
            </svg>
          </button>
        </nav>

        {/* ── Restore bar button — shown when bar is hidden ── */}
        {mobToolbarHidden && (
          <button
            className={`bd3-mob-bar-show-btn visible`}
            onClick={() => setMobToolbarHidden(false)}
            aria-label="Show toolbar"
            title="Show toolbar"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        )}

        {/* ── Mobile bottom-sheet ── */}
        {activeMobPanel && (
          <>
            <div
              className="bd3-mob-sheet-backdrop"
              onClick={() => setActiveMobPanel(null)}
            />
            <div className="bd3-mob-sheet">
              <div className="bd3-mob-sheet-handle-wrap">
                <div className="bd3-mob-sheet-handle" />
              </div>
              <div className="bd3-mob-sheet-header">
                <div className="bd3-mob-sheet-title">
                  <div className="bd3-mob-sheet-title-icon" style={{ background: "rgba(99,103,255,0.12)" }}>
                    {activeMobPanel === "template"  && <Palette size={15} color="#8494FF" />}
                    {activeMobPanel === "person"    && <User size={15} color="#67e8f9" />}
                    {activeMobPanel === "photo"     && <Camera size={15} color="#f9a8d4" />}
                    {activeMobPanel === "message"   && <MessageSquare size={15} color="#86efac" />}
                    {activeMobPanel === "access"    && (form.access
                      ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fcd34d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 4px #fcd34d)" }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>
                      : <Lock size={15} color="#fcd34d" />
                    )}
                    {activeMobPanel === "ai"        && <Stars size={15} color="#c4b5fd" />}
                  </div>
                  <span className="bd3-mob-sheet-title-text">
                    {activeMobPanel === "template"  && "Template"}
                    {activeMobPanel === "person"    && "Person Details"}
                    {activeMobPanel === "photo"     && "Profile Photo"}
                    {activeMobPanel === "message"   && "Birthday Message"}
                    {activeMobPanel === "access"    && "Access Key"}
                    {activeMobPanel === "ai"        && "AI Social Post"}
                  </span>
                </div>
                <button className="bd3-mob-sheet-close" onClick={() => setActiveMobPanel(null)} aria-label="Close panel">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <div className="bd3-mob-sheet-scroll">
                <div className="bd3-mob-sheet-inner">
                  {/* Template panel */}
                  {activeMobPanel === "template" && (
                    <div className="bd3-tpl-grid">
                      {TEMPLATES3.map((tpl) => (
                        <button key={tpl.id} onClick={() => set("templateId", tpl.id)}
                          className={`bd3-tpl-card ${form.templateId === tpl.id ? "selected" : ""}`}
                          style={{ backgroundImage: tpl.background }}>
                          <div className="bd3-tpl-overlay"><span className="bd3-tpl-name">{tpl.name}</span></div>
                          {form.templateId === tpl.id && (
                            <div className="bd3-tpl-check"><Check size={11} color="#fff" strokeWidth={3} /></div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                  {/* Person Details panel */}
                  {activeMobPanel === "person" && (
                    <>
                      <Field label="Full Name">
                        <input className="bd3-input" type="text" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Enter full name" />
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 6 }}>
                          <span className="bd3-field-label" style={{ flexShrink: 0 }}>Font Size</span>
                          <input type="range" min={35} max={50} step={1} value={form.nameStyle.fontSize ?? 48} onChange={(e) => setForm((p) => ({ ...p, nameStyle: { ...p.nameStyle, fontSize: Number(e.target.value) } }))} className="bd3-slider" style={{ flex: 1 }} />
                          <span className="bd3-field-hint" style={{ flexShrink: 0, minWidth: 32, textAlign: "right" }}>{form.nameStyle.fontSize ?? 48}px</span>
                        </div>
                      </Field>
                      <div className="bd3-grid-2">
                        <Field label="Batch"><input className="bd3-input" type="text" value={form.batch} onChange={(e) => set("batch", e.target.value)} placeholder="9th Batch" /></Field>
                        <Field label="Faculty"><input className="bd3-input" type="text" value={form.faculty} onChange={(e) => set("faculty", e.target.value)} placeholder="Faculty of Tech" /></Field>
                      </div>
                      <Field label="University"><input className="bd3-input" type="text" value={form.university} onChange={(e) => set("university", e.target.value)} placeholder="University of Ruhuna" /></Field>
                    </>
                  )}
                  {/* Photo panel */}
                  {activeMobPanel === "photo" && (
                    <>
                      {form.profileImage ? (
                        <div className="bd3-photo-card">
                          <img src={form.profileImage} alt="Profile" className="bd3-photo-img" />
                          <div className="bd3-photo-info">
                            <div className="bd3-photo-ready">Photo ready ✓</div>
                            <div className="bd3-photo-hint">Adjust crop or upload a new one</div>
                          </div>
                          <div className="bd3-photo-actions">
                            <button className="bd3-photo-action-btn bd3-photo-action-edit" onClick={handleReEdit}><Crop size={12} /> Edit</button>
                            <button className="bd3-photo-action-btn bd3-photo-action-replace" onClick={() => fileRef.current?.click()}><Upload size={12} /> Replace</button>
                          </div>
                        </div>
                      ) : (
                        <button className="bd3-photo-btn" onClick={() => fileRef.current?.click()}>
                          <div className="bd3-photo-icon-wrap"><Upload size={19} color="rgba(196,218,255,0.4)" /></div>
                          <span className="bd3-photo-label">Tap to upload photo</span>
                          <span className="bd3-photo-sub">PNG, JPG up to 10MB</span>
                        </button>
                      )}
                    </>
                  )}
                  {/* Message panel */}
                  {activeMobPanel === "message" && (
                    <>
                      <div className="bd3-msg-toolbar">
                        <div className="bd3-char-info">
                          <span className={`bd3-char-count ${isRefreshing ? "bd3-char-searching" : form.message.length >= 250 && form.message.length <= 300 ? "bd3-char-good" : ""}`}>
                            {form.message.length} chars
                          </span>
                          {!isRefreshing && form.message.length > 0 && (
                            <span className="bd3-char-range">
                              {form.message.length >= 250 && form.message.length <= 300 ? "✓ in range" : "target 250–300"}
                            </span>
                          )}
                        </div>
                        <button className={`bd3-refresh-btn ${isRefreshing ? "bd3-refresh-active" : ""}`} onClick={handleRefreshMsg} disabled={isRefreshing}>
                          {isRefreshing ? (
                            <>
                              <svg width="13" height="13" viewBox="0 0 13 13" className="bd3-refresh-ring">
                                <circle cx="6.5" cy="6.5" r="5" fill="none" stroke="rgba(99,103,255,0.25)" strokeWidth="1.5" />
                                <circle cx="6.5" cy="6.5" r="5" fill="none" stroke="#8494FF" strokeWidth="1.5" strokeDasharray="31.4" strokeDashoffset="10" strokeLinecap="round" className="bd3-ring-spin" />
                              </svg>
                              <span className="bd3-refresh-label">
                                {refreshMatched === null ? `try ${Math.max(refreshAttempt, 1)}/${refreshMaxAttempts}` : refreshMatched ? <span style={{ color: "#34d399" }}>matched ✓</span> : <span style={{ color: "#fb923c" }}>best fit</span>}
                              </span>
                            </>
                          ) : (
                            <><RefreshCcw size={11} />AI Refresh</>
                          )}
                        </button>
                      </div>
                      {isRefreshing && (
                        <div className="bd3-refresh-progress">
                          <div className="bd3-refresh-progress-bar" style={{ width: `${(Math.max(refreshAttempt, 1) / refreshMaxAttempts) * 100}%` }} />
                          <span className="bd3-refresh-progress-label">searching for best match…</span>
                        </div>
                      )}
                      <textarea className="bd3-textarea" value={form.message} onChange={(e) => set("message", e.target.value)} rows={6} placeholder="Enter a heartfelt birthday message..." />
                    </>
                  )}
                  {/* Access Key panel */}
                  {activeMobPanel === "access" && (
                    <>
                      <Field label="Key">
                        <div className="bd3-access-row">
                          <input
                            className="bd3-input"
                            type="text"
                            value={accessInput}
                            onChange={(e) => handleAccessChange(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && !form.access && handleEnableAccess()}
                            placeholder="Enter access key"
                          />
                          <button
                            className={`bd3-btn-enable ${form.access ? "granted" : "locked"}`}
                            onClick={!form.access ? handleEnableAccess : undefined}
                          >
                            {form.access ? <><Check size={13} /> Enabled</> : "Enable"}
                          </button>
                        </div>
                      </Field>
                      <div className={`bd3-access-status ${form.access ? "bd3-access-granted" : "bd3-access-locked"}`}>
                        <div className="bd3-access-dot" />
                        {form.access ? "Access granted — post generation unlocked" : "Enter key and tap Enable"}
                      </div>
                    </>
                  )}
                  {/* AI Social Post panel */}
                  {activeMobPanel === "ai" && (
                    <>
                      <div className="bd3-ai-box">
                        {generatedMsg ? generatedMsg : <span className="bd3-ai-empty">Generated social media caption will appear here…</span>}
                      </div>
                      <div className="bd3-btn-row">
                        <button className="bd3-btn-ai" onClick={handleGenerateMsg} disabled={isMsgGen}>
                          {isMsgGen ? <span className="bd3-pulse">Generating…</span> : <><Wand2 size={14} /> Generate</>}
                        </button>
                        <button className="bd3-btn-ghost" onClick={handleCopyMsg} disabled={!generatedMsg} style={{ paddingLeft: "14px", paddingRight: "14px" }}>
                          {msgCopied ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
                          {msgCopied ? "Copied!" : "Copy"}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        <div className="bd3-body">
          <aside className="bd3-editor" style={{ display: activeTab === "preview" ? "none" : "flex", flexDirection: "column" }}>
            <div className="bd3-editor-scroll">
              <div className="bd3-editor-inner">
              <SectionCard title="Template" icon={<Palette size={13} />} accent="#8494FF">
                <div className="bd3-tpl-grid">
                  {TEMPLATES3.map((tpl) => (
                    <button key={tpl.id} onClick={() => set("templateId", tpl.id)} className={`bd3-tpl-card ${form.templateId === tpl.id ? "selected" : ""}`} style={{ backgroundImage: tpl.background }}>
                      <div className="bd3-tpl-overlay"><span className="bd3-tpl-name">{tpl.name}</span></div>
                      {form.templateId === tpl.id && (
                        <div className="bd3-tpl-check"><Check size={11} color="#fff" strokeWidth={3} /></div>
                      )}
                    </button>
                  ))}
                </div>
              </SectionCard>
              <SectionCard title="Person Details" icon={<User size={13} />} accent="#67e8f9">
                <Field label="Full Name">
                  <input className="bd3-input" type="text" value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Enter full name" />
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 6 }}>
                    <span className="bd3-field-label" style={{ flexShrink: 0 }}>Font Size</span>
                    <input type="range" min={35} max={50} step={1} value={form.nameStyle.fontSize ?? 48} onChange={(e) => setForm((p) => ({ ...p, nameStyle: { ...p.nameStyle, fontSize: Number(e.target.value) } }))} className="bd3-slider" style={{ flex: 1 }} />
                    <span className="bd3-field-hint" style={{ flexShrink: 0, minWidth: 32, textAlign: "right" }}>{form.nameStyle.fontSize ?? 48}px</span>
                  </div>
                </Field>
                <div className="bd3-grid-2">
                  <Field label="Batch"><input className="bd3-input" type="text" value={form.batch} onChange={(e) => set("batch", e.target.value)} placeholder="9th Batch" /></Field>
                  <Field label="Faculty"><input className="bd3-input" type="text" value={form.faculty} onChange={(e) => set("faculty", e.target.value)} placeholder="Faculty of Tech" /></Field>
                </div>
                <Field label="University"><input className="bd3-input" type="text" value={form.university} onChange={(e) => set("university", e.target.value)} placeholder="University of Ruhuna" /></Field>
              </SectionCard>
              <SectionCard title="Profile Photo" icon={<Camera size={13} />} accent="#f9a8d4">
                <input ref={fileRef} type="file" accept="image/*" onChange={handleFileChange} style={{ display: "none" }} />
                {form.profileImage ? (
                  <div className="bd3-photo-card">
                    <img src={form.profileImage} alt="Profile" className="bd3-photo-img" />
                    <div className="bd3-photo-info">
                      <div className="bd3-photo-ready">Photo ready ✓</div>
                      <div className="bd3-photo-hint">Adjust crop or upload a new one</div>
                    </div>
                    <div className="bd3-photo-actions">
                      <button className="bd3-photo-action-btn bd3-photo-action-edit" onClick={handleReEdit} title="Re-open crop editor with original photo"><Crop size={12} /> Edit</button>
                      <button className="bd3-photo-action-btn bd3-photo-action-replace" onClick={() => fileRef.current?.click()} title="Upload a different photo"><Upload size={12} /> Replace</button>
                    </div>
                  </div>
                ) : (
                  <button className="bd3-photo-btn" onClick={() => fileRef.current?.click()}>
                    <div className="bd3-photo-icon-wrap"><Upload size={19} color="rgba(196,218,255,0.4)" /></div>
                    <span className="bd3-photo-label">Click to upload photo</span>
                    <span className="bd3-photo-sub">PNG, JPG up to 10MB</span>
                  </button>
                )}
              </SectionCard>
              <SectionCard title="Birthday Message" icon={<MessageSquare size={13} />} accent="#86efac">
                <div className="bd3-msg-toolbar">
                  <div className="bd3-char-info">
                    <span className={`bd3-char-count ${isRefreshing ? "bd3-char-searching" : form.message.length >= 250 && form.message.length <= 300 ? "bd3-char-good" : ""}`}>
                      {form.message.length} chars
                    </span>
                    {!isRefreshing && form.message.length > 0 && (
                      <span className="bd3-char-range">
                        {form.message.length >= 250 && form.message.length <= 300 ? "✓ in range" : "target 250–300"}
                      </span>
                    )}
                  </div>
                  <button className={`bd3-refresh-btn ${isRefreshing ? "bd3-refresh-active" : ""}`} onClick={handleRefreshMsg} disabled={isRefreshing} title="AI: generate short message for image (250–300 chars)">
                    {isRefreshing ? (
                      <>
                        <svg width="13" height="13" viewBox="0 0 13 13" className="bd3-refresh-ring">
                          <circle cx="6.5" cy="6.5" r="5" fill="none" stroke="rgba(99,103,255,0.25)" strokeWidth="1.5" />
                          <circle cx="6.5" cy="6.5" r="5" fill="none" stroke="#8494FF" strokeWidth="1.5" strokeDasharray="31.4" strokeDashoffset="10" strokeLinecap="round" className="bd3-ring-spin" />
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
                      <><RefreshCcw size={11} />AI Refresh</>
                    )}
                  </button>
                </div>
                {isRefreshing && (
                  <div className="bd3-refresh-progress">
                    <div className="bd3-refresh-progress-bar" style={{ width: `${(Math.max(refreshAttempt, 1) / refreshMaxAttempts) * 100}%` }} />
                    <span className="bd3-refresh-progress-label">searching for best match…</span>
                  </div>
                )}
                <textarea className="bd3-textarea" value={form.message} onChange={(e) => set("message", e.target.value)} rows={5} placeholder="Enter a heartfelt birthday message..." />
              </SectionCard>
              <SectionCard title="Access Key" icon={<Lock size={13} />} accent="#fcd34d">
                <Field label="Key">
                  <div className="bd3-access-row">
                    <input
                      className="bd3-input"
                      type="text"
                      value={accessInput}
                      onChange={(e) => handleAccessChange(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && !form.access && handleEnableAccess()}
                      placeholder="Enter access key"
                    />
                    <button
                      className={`bd3-btn-enable ${form.access ? "granted" : "locked"}`}
                      onClick={!form.access ? handleEnableAccess : undefined}
                    >
                      {form.access ? <><Check size={13} /> Enabled</> : "Enable"}
                    </button>
                  </div>
                </Field>
                <div className={`bd3-access-status ${form.access ? "bd3-access-granted" : "bd3-access-locked"}`}>
                  <div className="bd3-access-dot" />
                  {form.access ? "Access granted — post generation unlocked" : "Enter key and click Enable"}
                </div>
              </SectionCard>
              <SectionCard title="AI Social Post" icon={<Stars size={13} />} accent="#c4b5fd">
                <div className="bd3-ai-box">
                  {generatedMsg ? generatedMsg : <span className="bd3-ai-empty">Generated social media caption will appear here…</span>}
                </div>
                <div className="bd3-btn-row">
                  <button className="bd3-btn-ai" onClick={handleGenerateMsg} disabled={isMsgGen}>
                    {isMsgGen ? <span className="bd3-pulse">Generating…</span> : <><Wand2 size={14} /> Generate</>}
                  </button>
                  <button className="bd3-btn-ghost" onClick={handleCopyMsg} disabled={!generatedMsg} style={{ paddingLeft: "14px", paddingRight: "14px" }}>
                    {msgCopied ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
                    {msgCopied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </SectionCard>
              </div>
            </div>
            <div className="bd3-action-bar" style={{ display: "none" }} />
          </aside>
          <main
            ref={previewRef}
            className={`bd3-preview${mobToolbarHidden ? " bar-hidden" : ""}`}
            style={{ display: activeTab === "edit" ? "none" : "flex" }}
            onTouchStart={handleMobTouchStart}
            onTouchMove={handleMobTouchMove}
            onTouchEnd={handleMobTouchEnd}
          >
            <div className="bd3-preview-grid" />
            <div className="bd3-preview-glow" />
            <button className="bd3-back-btn" onClick={() => setActiveTab("edit")}><Pencil size={11} /> Edit</button>
            {/* Mobile: canvas with pinch-zoom/pan transform */}
            <div
              className="bd3-mob-canvas"
              style={{ transform: `translate(${mobTransform.x}px, ${mobTransform.y}px) scale(${mobTransform.scale})` }}
            >
              <div className="bd3-preview-card" style={{ width: `${1080 * scale}px`, height: `${1350 * scale}px` }}>
                <div style={{ width: 1080, height: 1350, transform: `scale(${scale})`, transformOrigin: "top left" }}>
                  <PostTemplate3 data={{ ...form, template: selectedTemplate }} />
                </div>
              </div>
            </div>
            <div className="bd3-preview-badge" style={{ display: "none" }} />
          </main>
        </div>

        {/* ── Mobile bottom nav ── */}
        <nav className="bd3-mob-bottom-nav">
          {/* Focus / reset zoom */}
          <button
            className={`bd3-mob-nav-btn${(mobTransform.scale !== 1 || mobTransform.x !== 0 || mobTransform.y !== 0) ? " active" : ""}`}
            onClick={resetMobTransform}
            title="Reset zoom & position"
            aria-label="Reset zoom"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
            </svg>
          </button>

          {/* Download */}
          <button className="bd3-mob-dl-btn" onClick={handleDownload} disabled={isDownloading}>
            {isDownloading
              ? <span className="bd3-pulse">Generating…</span>
              : <><Download size={17} strokeWidth={2.5} /> Save Image</>
            }
          </button>

          {/* Theme toggle */}
          <button
            className="bd3-mob-nav-btn"
            onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            aria-label="Toggle theme"
          >
            {theme === "dark"
              ? <Sun size={18} strokeWidth={2} />
              : <Moon size={18} strokeWidth={2} />
            }
          </button>
        </nav>
        <div style={{ position: "fixed", left: 0, top: "-3000px", width: 1080, height: 1350, pointerEvents: "none", zIndex: -1 }}>
          <PostTemplate3 ref={hiddenRef} data={{ ...form, template: selectedTemplate }} edit={true} />
        </div>
        {showCrop && tempImage && (
          <CropModal3
            imageUrl={tempImage}
            initialTransform={savedTransform}
            onSave={(img: string, transform: ImageTransform3) => {
              set("profileImage", img);
              setSavedTransform(transform);
              setShowCrop(false);
              setTempImage(null);
            }}
            onClose={() => { setShowCrop(false); setTempImage(null); }}
          />
        )}
        <LoadingOverlay isVisible={showDownloadOverlay} icon="download" message="Generating your HD image…" theme={theme} />
        <StartupPopup theme={theme} />

        {/* ── Logo cache prompt ── */}
        {showCachePrompt && (
          <div className="bd3-cache-toast">
            <div className="bd3-cache-toast-header">
              <div className="bd3-cache-toast-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8494FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </div>
              <div>
                <div className="bd3-cache-toast-title">Save app for offline use?</div>
                <div className="bd3-cache-toast-sub">Cache the logo & images so the app loads faster next time</div>
              </div>
            </div>
            <div className="bd3-cache-toast-btns">
              <button className="bd3-cache-yes" onClick={() => handleCacheLogo(true)}>Save to cache</button>
              <button className="bd3-cache-no" onClick={() => handleCacheLogo(false)}>Not now</button>
            </div>
          </div>
        )}

        {/* ── Pre-ready splash ── */}
        {splashMounted && (
          <div className={`bd3-splash${appReady ? " ready" : ""}`}>
            <div className="bd3-splash-glow" />
            <div className="bd3-splash-logo">
              <img src="/bd3/logo.jpeg" alt="Birthday Post Studio" />
            </div>
            <div className="bd3-splash-spinner">
              <div className="bd3-splash-track" />
              <div className="bd3-splash-arc" />
              <div className="bd3-splash-arc2" />
            </div>
            <div className="bd3-splash-title">Birthday Post Studio</div>
            <div className="bd3-splash-sub">v3 · 9th Batch</div>
            <div className="bd3-splash-bar-wrap">
              <div className="bd3-splash-bar-fill" />
            </div>
            <div className="bd3-splash-dots">
              <div className="bd3-splash-dot" />
              <div className="bd3-splash-dot" />
              <div className="bd3-splash-dot" />
            </div>
          </div>
        )}

        {/* CREATOR INFO POPUP */}
        {showCreator && (
          <div className="bd3-creator-backdrop" onClick={(e) => { if (e.target === e.currentTarget) { setShowCreator(false); setCreatorTab("about"); } }}>
            <div className="bd3-creator-card">
              {/* Header */}
              <div className="bd3-creator-header">
                <div>
                  <div className="bd3-creator-logo-wrap">
                    <img src="/bd3/logo.jpeg" alt="Logo" />
                  </div>
                  <div className="bd3-creator-app-info">
                    <span className="bd3-creator-app-name">Birthday Post Studio</span>
                    <span className="bd3-creator-app-ver">v3</span>
                    <div className="bd3-creator-app-sub">9th Batch · Faculty of Technology · University of Ruhuna</div>
                  </div>
                </div>
                <button className="bd3-creator-close" onClick={() => { setShowCreator(false); setCreatorTab("about"); }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Tab switcher */}
                    <div style={{
                      display: "flex", gap: 4, padding: "10px 16px 0",
                      borderBottom: "1px solid rgba(32,82,149,0.4)",
                    }}>
                      {(["about", "changelog"] as const).map(tab => (
                        <button key={tab} onClick={() => setCreatorTab(tab)} style={{
                          padding: "7px 16px", borderRadius: "9px 9px 0 0",
                          border: "none", cursor: "pointer", fontFamily: "inherit",
                          fontSize: 12, fontWeight: 700, textTransform: "capitalize",
                          letterSpacing: "0.02em",
                          background: creatorTab === tab ? "rgba(99,103,255,0.18)" : "transparent",
                          color: creatorTab === tab ? "#C9BEFF" : "rgba(196,218,255,0.35)",
                          borderBottom: creatorTab === tab ? "2px solid #6367FF" : "2px solid transparent",
                          transition: "all 0.15s",
                        }}>
                          {tab === "about" ? "About" : "Changelog"}
                        </button>
                      ))}
                    </div>

                    {creatorTab === "about" && (
                      <div className="bd3-creator-body">
                        <div className="bd3-creator-row">
                          <img
                            src="/bd3/dev/dev.png"
                            alt="Hasitha Sandakelum"
                            style={{
                              width: 44, height: 44, borderRadius: "50%",
                              objectFit: "cover", flexShrink: 0,
                              border: "2px solid rgba(99,103,255,0.4)",
                              boxShadow: "0 0 0 3px rgba(99,103,255,0.12)",
                            }}
                          />
                          <div>
                            <div className="bd3-creator-name">Hasitha Sandakelum</div>
                            <div className="bd3-creator-role">Full-Stack Developer</div>
                          </div>
                        </div>
                        <div className="bd3-creator-divider" />
                        <div className="bd3-creator-meta">
                          <div className="bd3-creator-meta-row">
                            <svg className="bd3-creator-meta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                            </svg>
                            <span>Stack&nbsp;</span>
                            <span className="bd3-creator-meta-val">Next.js · TypeScript · Groq AI</span>
                          </div>
                          <div className="bd3-creator-meta-row">
                            <svg className="bd3-creator-meta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                            </svg>
                            <span>Output&nbsp;</span>
                            <span className="bd3-creator-meta-val">1080 × 1350 px HD PNG</span>
                          </div>
                          <div className="bd3-creator-meta-row">
                            <svg className="bd3-creator-meta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                            </svg>
                            <span>Built&nbsp;</span>
                            <span className="bd3-creator-meta-val">2025</span>
                          </div>
                        </div>
                        {/* <div style={{
                          marginTop: 4, padding: "10px 14px", borderRadius: 10,
                          background: "rgba(10,38,71,0.4)", border: "1px solid rgba(32,82,149,0.4)",
                          fontSize: 11.5, color: "rgba(196,218,255,0.35)", lineHeight: 1.6,
                          textAlign: "center",
                        }}>
                          Part of <span style={{ color: "#8494FF", fontWeight: 600 }}>9th Batch</span> · University of Ruhuna
                        </div> */}
                      </div>
                    )}

                    {creatorTab === "changelog" && (
                      <div style={{
                        padding: "16px 20px 20px",
                        display: "flex", flexDirection: "column", gap: 18,
                        maxHeight: 340, overflowY: "auto",
                        scrollbarWidth: "thin",
                        scrollbarColor: "rgba(99,103,255,0.3) transparent",
                      }}>
                        {[
                          { category: "New Features", icon: "✨", items: [
                            "Gold textured name pill with auto-width",
                            "Roboto Mono font for the name",
                            "Advanced name style settings — font size controls",
                            "Dark shadow wings on the name pill",
                          ]},
                          { category: "AI Message", icon: "🤖", items: [
                            "Real-time attempt counter via SSE stream",
                            "Server-side character trimming — 250–300 chars",
                            "Fixed model: llama-3.3-70b-versatile",
                            "Banned words to keep AI output clean",
                          ]},
                          { category: "Design & UX", icon: "🎨", items: [
                            "Light / dark theme toggle",
                            "Canva-style mobile toolbar with bottom-sheet panels",
                            "Pinch to zoom & pan the preview on mobile",
                            "Horizontal icon bar below navbar on mobile",
                            "Loading splash screen on startup",
                          ]},
                        ].map(section => (
                          <div key={section.category}>
                            <div style={{
                              display: "flex", alignItems: "center", gap: 7,
                              marginBottom: 9,
                            }}>
                              <span style={{ fontSize: 13 }}>{section.icon}</span>
                              <span style={{
                                fontSize: 10, fontWeight: 700, textTransform: "uppercase",
                                letterSpacing: "0.09em", color: "rgba(196,218,255,0.4)",
                              }}>
                                {section.category}
                              </span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                              {section.items.map((item, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                                    <circle cx="6" cy="6" r="5.5" fill="rgba(99,103,255,0.15)" stroke="rgba(99,103,255,0.4)" strokeWidth="1"/>
                                    <path d="M3.5 6l1.7 1.7L8.5 4.5" stroke="#8494FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                  <span style={{ fontSize: 12.5, color: "rgba(196,218,255,0.65)", lineHeight: 1.55 }}>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="bd3-creator-footer">
                      <span className="bd3-creator-built">
                        {creatorTab === "changelog" ? <>v3 · <span>2025</span></> : <>Part of <span>9th Batch</span></>}
                      </span>
                      <button className="bd3-creator-dismiss" onClick={() => { setShowCreator(false); setCreatorTab("about"); }}>Close</button>
                    </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
