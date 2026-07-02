"use client";

import { useEffect, useState } from "react";
import { X, Sparkles, CheckCircle2 } from "lucide-react";

const STORAGE_KEY = "bd3_startup_popup_dismissed_v1";

const CHANGES = [
  {
    category: "New Features",
    icon: "✨",
    items: [
      "Gold textured name pill with auto-width — fits any name perfectly",
      "Roboto Mono font for the name — clean, bold, monospace style",
      "Advanced name style settings — font size & margin top controls",
      "Dark shadow wings on the name pill for depth and contrast",
    ],
  },
  {
    category: "AI Message",
    icon: "🤖",
    items: [
      "Real-time attempt counter — frontend synced to backend via SSE stream",
      "Server-side character trimming — always returns 250–300 chars",
      "Fixed model: llama-3.3-70b-versatile (was broken on Groq before)",
      "Certain words banned from AI output — messages stay clean and on-brand",
    ],
  },
  {
    category: "Design & UX",
    icon: "🎨",
    items: [
      "Advanced settings open as a popup near the name field — not a separate section",
      "Light / dark theme toggle added to navbar",
    ],
  },
];

interface StartupPopupProps {
  theme?: "dark" | "light";
}

export default function StartupPopup({ theme = "dark" }: StartupPopupProps) {
  const [visible, setVisible] = useState(false);
  const [dontShow, setDontShow] = useState(false);
  const lt = theme === "light";

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  const handleClose = () => {
    if (dontShow) localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  // ── colour tokens ──────────────────────────────────────────────
  const bg         = lt ? "#FFFFFF"                     : "#0D2E55";
  const bgHeader   = lt ? "#FFFFFF"                     : "#0D2E55";
  const border     = lt ? "rgba(99,103,255,0.18)"       : "rgba(32,82,149,0.5)";
  const borderSub  = lt ? "rgba(99,103,255,0.12)"       : "rgba(32,82,149,0.4)";
  const shadow     = lt
    ? "0 24px 80px rgba(99,103,255,0.15), 0 0 0 1px rgba(99,103,255,0.12)"
    : "0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(99,103,255,0.15)";
  const backdrop   = lt ? "rgba(200,210,240,0.7)"       : "rgba(0,0,0,0.72)";
  const titleColor = lt ? "#0A2647"                     : "#E8F0FE";
  const subColor   = lt ? "rgba(10,38,71,0.35)"         : "rgba(196,218,255,0.35)";
  const catColor   = lt ? "rgba(10,38,71,0.45)"         : "rgba(196,218,255,0.45)";
  const itemColor  = lt ? "rgba(10,38,71,0.75)"         : "rgba(196,218,255,0.75)";
  const closeBg    = lt ? "rgba(99,103,255,0.07)"       : "rgba(32,82,149,0.3)";
  const closeBgHov = lt ? "rgba(99,103,255,0.15)"       : "rgba(32,82,149,0.5)";
  const closeColor = lt ? "rgba(10,38,71,0.4)"          : "rgba(196,218,255,0.45)";
  const closeHov   = lt ? "#0A2647"                     : "#E8F0FE";
  const closeBdr   = lt ? "rgba(99,103,255,0.15)"       : "rgba(32,82,149,0.5)";
  const cbBg       = lt ? "rgba(99,103,255,0.06)"       : "rgba(20,66,114,0.3)";
  const cbBdr      = lt ? "rgba(99,103,255,0.25)"       : "rgba(196,218,255,0.25)";
  const dontColor  = lt ? "rgba(10,38,71,0.4)"          : "rgba(196,218,255,0.4)";
  const scrollClr  = lt ? "rgba(99,103,255,0.2) transparent" : "rgba(99,103,255,0.3) transparent";

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: backdrop,
        backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
        padding: "20px",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div style={{
        width: "100%", maxWidth: 560, maxHeight: "90vh", overflowY: "auto",
        background: bg, border: `1px solid ${border}`, borderRadius: 20,
        boxShadow: shadow,
        scrollbarWidth: "thin", scrollbarColor: scrollClr,
      }}>
        {/* Header */}
        <div style={{
          display: "flex", alignItems: "flex-start", justifyContent: "space-between",
          padding: "22px 24px 16px", borderBottom: `1px solid ${borderSub}`,
          position: "sticky", top: 0, background: bgHeader, zIndex: 1,
          borderRadius: "20px 20px 0 0",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <Sparkles size={16} color="#8494FF" />
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#8494FF" }}>
                What&apos;s new
              </span>
            </div>
            <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: titleColor, letterSpacing: "-0.3px" }}>
              Birthday Post Studio
              <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(132,148,255,0.8)", marginLeft: 10 }}>v3</span>
            </h2>
            <p style={{ margin: "4px 0 0", fontSize: 12.5, color: subColor, fontWeight: 400 }}>
              Changes from bd2 → bd3
            </p>
          </div>
          <button
            onClick={handleClose}
            style={{
              width: 32, height: 32, borderRadius: 8, border: `1px solid ${closeBdr}`,
              background: closeBg, color: closeColor,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", flexShrink: 0, marginTop: 2, transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = closeBgHov;
              (e.currentTarget as HTMLButtonElement).style.color = closeHov;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = closeBg;
              (e.currentTarget as HTMLButtonElement).style.color = closeColor;
            }}
          >
            <X size={14} />
          </button>
        </div>

        {/* Change sections */}
        <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 18 }}>
          {CHANGES.map((section) => (
            <div key={section.category}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span style={{ fontSize: 15 }}>{section.icon}</span>
                <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.09em", color: catColor }}>
                  {section.category}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {section.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckCircle2 size={15} color="#34d399" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 13.5, color: itemColor, lineHeight: 1.55 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          padding: "14px 24px 20px", borderTop: `1px solid ${borderSub}`,
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
        }}>
          <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", userSelect: "none" }}>
            <div
              onClick={() => setDontShow((v) => !v)}
              style={{
                width: 18, height: 18, borderRadius: 5,
                border: dontShow ? "none" : `1.5px solid ${cbBdr}`,
                background: dontShow ? "#6367FF" : cbBg,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, transition: "all 0.15s", cursor: "pointer",
                boxShadow: dontShow ? "0 0 0 3px rgba(99,103,255,0.2)" : "none",
              }}
            >
              {dontShow && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span style={{ fontSize: 12, color: dontColor, fontWeight: 500 }}>
              Don&apos;t show this again
            </span>
          </label>
          <button
            onClick={handleClose}
            style={{
              padding: "9px 22px", borderRadius: 10, border: "none", cursor: "pointer",
              background: "#6367FF", color: "#fff", fontSize: 13, fontWeight: 700,
              fontFamily: "inherit", boxShadow: "0 4px 14px rgba(99,103,255,0.35)",
              transition: "all 0.18s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
          >
            Got it ✓
          </button>
        </div>
      </div>
    </div>
  );
}
