"use client";

import React, { useEffect, useState } from "react";
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

export default function StartupPopup() {
  const [visible, setVisible] = useState(false);
  const [dontShow, setDontShow] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  const handleClose = () => {
    if (dontShow) localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.72)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        padding: "20px",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 560,
          maxHeight: "90vh",
          overflowY: "auto",
          background: "#0e0e1a",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 20,
          boxShadow: "0 24px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(124,58,237,0.15)",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(139,92,246,0.3) transparent",
        }}
      >
        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "22px 24px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          position: "sticky",
          top: 0,
          background: "#0e0e1a",
          zIndex: 1,
          borderRadius: "20px 20px 0 0",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <Sparkles size={16} color="#a78bfa" />
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#a78bfa" }}>
                What&apos;s new
              </span>
            </div>
            <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#f1f1f8", letterSpacing: "-0.3px" }}>
              Birthday Post Studio
              <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(167,139,250,0.8)", marginLeft: 10 }}>v3</span>
            </h2>
            <p style={{ margin: "4px 0 0", fontSize: 12.5, color: "rgba(255,255,255,0.35)", fontWeight: 400 }}>
              Changes from bd2 → bd3
            </p>
          </div>
          <button
            onClick={handleClose}
            style={{
              width: 32, height: 32, borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.45)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", flexShrink: 0, marginTop: 2, transition: "all 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.45)"; }}
          >
            <X size={14} />
          </button>
        </div>

        {/* Change sections */}
        <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 18 }}>
          {CHANGES.map((section) => (
            <div key={section.category}>
              {/* Section header */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <span style={{ fontSize: 15 }}>{section.icon}</span>
                <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.09em", color: "rgba(255,255,255,0.45)" }}>
                  {section.category}
                </span>
              </div>
              {/* Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {section.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckCircle2 size={15} color="#34d399" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.75)", lineHeight: 1.55 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          padding: "14px 24px 20px",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}>
          {/* Don't show again checkbox */}
          <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", userSelect: "none" }}>
            <div
              onClick={() => setDontShow((v) => !v)}
              style={{
                width: 18, height: 18, borderRadius: 5,
                border: dontShow ? "none" : "1.5px solid rgba(255,255,255,0.25)",
                background: dontShow ? "#7c3aed" : "rgba(255,255,255,0.04)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, transition: "all 0.15s", cursor: "pointer",
                boxShadow: dontShow ? "0 0 0 3px rgba(124,58,237,0.2)" : "none",
              }}
            >
              {dontShow && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>
              Don&apos;t show this again
            </span>
          </label>

          {/* Got it button */}
          <button
            onClick={handleClose}
            style={{
              padding: "9px 22px", borderRadius: 10, border: "none", cursor: "pointer",
              background: "linear-gradient(135deg, #7c3aed, #9d3dd1)",
              color: "#fff", fontSize: 13, fontWeight: 700, fontFamily: "inherit",
              boxShadow: "0 4px 14px rgba(124,58,237,0.35)",
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
