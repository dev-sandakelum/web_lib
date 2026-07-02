"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { toPng } from "html-to-image";
import { Download, Sun, Moon } from "lucide-react";
import { PostTemplate3 } from "./post-template";
import { CropModal3 } from "./crop-modal";
import { LoadingOverlay } from "./loading-overlay";
import { TEMPLATES3 } from "./templates";
import StartupPopup from "./startup-popup";
import type { FormData3, ImageTransform3, NameStyle } from "./types";
import { loadImageFile } from "@/lib/utils";
import { Preview, EditPanel, MobileToolbar, PanelSheet } from "./ui";
import { MobilePanelContent } from "./ui/MobilePanelContent";
import "./styles/base.css";
import "./styles/mobile.css";

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

  // Panel state for mobile
  const [mobilePanel, setMobilePanel] = useState<"template" | "person" | "photo" | "message" | "access" | "ai" | null>(null);

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
          </div>
        </nav>

        {/* BODY */}
        <div className="bd3-body" style={{ display: "flex" }}>
          {/* Mobile Toolbar — shown on small screens */}
          <MobileToolbar 
            activePanel={mobilePanel}
            onToolClick={setMobilePanel}
          />

          {/* ═══ EDITOR ═══ — Desktop only or when mobile panel is active */}
          <EditPanel
            form={form}
            onFormChange={set}
            onNameStyleChange={(style) => setForm((p) => ({ ...p, nameStyle: style }))}
            onFileClick={() => fileRef.current?.click()}
            onFileChange={handleFileChange}
            onReEdit={handleReEdit}
            onRefreshMsg={handleRefreshMsg}
            onGenerateMsg={handleGenerateMsg}
            onCopyMsg={handleCopyMsg}
            onAccessChange={handleAccessChange}
            isRefreshing={isRefreshing}
            isMsgGen={isMsgGen}
            msgCopied={msgCopied}
            refreshAttempt={refreshAttempt}
            refreshMaxAttempts={refreshMaxAttempts}
            refreshMatched={refreshMatched}
            generatedMsg={generatedMsg}
          />

          {/* ═══ PREVIEW ═══ */}
          <Preview
            ref={previewRef}
            form={form}
            selectedTemplate={selectedTemplate}
            scale={scale}
            onDownload={handleDownload}
            onEditClick={() => {}}
            isDownloading={isDownloading}
          />

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

        {/* Mobile Panel Sheet — for editing tools on small screens */}
        {mobilePanel && (
          <PanelSheet
            isOpen={!!mobilePanel}
            onClose={() => setMobilePanel(null)}
            title={
              mobilePanel === "template"
                ? "Template"
                : mobilePanel === "person"
                  ? "Person Details"
                  : mobilePanel === "photo"
                    ? "Profile Photo"
                    : mobilePanel === "message"
                      ? "Birthday Message"
                      : mobilePanel === "access"
                        ? "Access Key"
                        : "AI Social Post"
            }
          >
            <MobilePanelContent
              tool={mobilePanel}
              form={form}
              onFormChange={set}
              onNameStyleChange={(style) => setForm((p) => ({ ...p, nameStyle: style }))}
              onFileClick={() => fileRef.current?.click()}
              onFileChange={handleFileChange}
              onReEdit={handleReEdit}
              onRefreshMsg={handleRefreshMsg}
              onGenerateMsg={handleGenerateMsg}
              onCopyMsg={handleCopyMsg}
              onAccessChange={handleAccessChange}
              isRefreshing={isRefreshing}
              isMsgGen={isMsgGen}
              msgCopied={msgCopied}
              refreshAttempt={refreshAttempt}
              refreshMaxAttempts={refreshMaxAttempts}
              refreshMatched={refreshMatched}
              generatedMsg={generatedMsg}
            />
          </PanelSheet>
        )}
      </div>
    </>
  );
}
