"use client";

import { useEffect, useState } from "react";
import { X, Sparkles, CheckCircle2 } from "lucide-react";
import { getLatestMajorChanges } from "./changelog";

const STORAGE_KEY = "bd3_startup_popup_dismissed_v2";

interface StartupPopupProps {
  theme?: "dark" | "light";
}

export default function StartupPopup({ theme = "dark" }: StartupPopupProps) {
  const [visible, setVisible] = useState(false);
  const [dontShow, setDontShow] = useState(false);
  const lt = theme === "light";

  const entry = getLatestMajorChanges();

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  const handleClose = () => {
    if (dontShow) localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible || !entry) return null;

  // ── colour tokens ──────────────────────────────────────────────
  const bg        = lt ? "#FFFFFF"                          : "#0D2E55";
  const border    = lt ? "rgba(99,103,255,0.18)"            : "rgba(32,82,149,0.5)";
  const borderSub = lt ? "rgba(99,103,255,0.12)"            : "rgba(32,82,149,0.4)";
  const shadow    = lt
    ? "0 -8px 40px rgba(99,103,255,0.12), 0 0 0 1px rgba(99,103,255,0.1)"
    : "0 -8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,103,255,0.12)";
  const shadowDt  = lt
    ? "0 24px 80px rgba(99,103,255,0.15), 0 0 0 1px rgba(99,103,255,0.12)"
    : "0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(99,103,255,0.15)";
  const backdrop  = lt ? "rgba(200,210,240,0.65)"           : "rgba(0,0,0,0.65)";
  const titleClr  = lt ? "#0A2647"                          : "#E8F0FE";
  const subClr    = lt ? "rgba(10,38,71,0.35)"              : "rgba(196,218,255,0.35)";
  const catClr    = lt ? "rgba(10,38,71,0.4)"               : "rgba(196,218,255,0.4)";
  const itemClr   = lt ? "rgba(10,38,71,0.75)"              : "rgba(196,218,255,0.75)";
  const closeBg   = lt ? "rgba(99,103,255,0.07)"            : "rgba(32,82,149,0.3)";
  const closeBdr  = lt ? "rgba(99,103,255,0.15)"            : "rgba(32,82,149,0.5)";
  const closeClr  = lt ? "rgba(10,38,71,0.4)"               : "rgba(196,218,255,0.45)";
  const cbBg      = lt ? "rgba(99,103,255,0.06)"            : "rgba(20,66,114,0.3)";
  const cbBdr     = lt ? "rgba(99,103,255,0.25)"            : "rgba(196,218,255,0.25)";
  const dontClr   = lt ? "rgba(10,38,71,0.4)"               : "rgba(196,218,255,0.4)";
  const handleClr = lt ? "rgba(99,103,255,0.2)"             : "rgba(99,103,255,0.3)";
  const scrollClr = lt ? "rgba(99,103,255,0.2) transparent" : "rgba(99,103,255,0.3) transparent";

  return (
    <>
      <style>{`
        @keyframes bd3sp-fadein { from { opacity:0 } to { opacity:1 } }
        @keyframes bd3sp-slideup { from { transform:translateY(100%) } to { transform:translateY(0) } }
        @keyframes bd3sp-popin {
          from { opacity:0; transform:scale(0.94) translateY(12px) }
          to   { opacity:1; transform:scale(1) translateY(0) }
        }
        .bd3sp-backdrop {
          position:fixed; inset:0; z-index:1000;
          display:flex; align-items:flex-end; justify-content:center;
          animation: bd3sp-fadein 0.22s ease forwards;
        }
        .bd3sp-scroll {
          overflow-y:auto; flex:1; min-height:0;
          scrollbar-width:thin;
        }
        @media (max-width: 640px) {
          .bd3sp-backdrop { padding:0; }
          .bd3sp-modal {
            width:100%; max-height:88vh;
            border-radius:24px 24px 0 0;
            display:flex; flex-direction:column;
            animation: bd3sp-slideup 0.32s cubic-bezier(0.32,0.72,0,1) forwards;
          }
          .bd3sp-handle-wrap {
            display:flex; align-items:center; justify-content:center;
            padding:10px 0 6px; flex-shrink:0;
          }
          .bd3sp-close-btn { display:none !important; }
          .bd3sp-header { padding:0 20px 14px; }
          .bd3sp-title { font-size:19px; }
          .bd3sp-body { padding:12px 20px 4px; }
          .bd3sp-footer { padding:12px 20px 28px; }
          .bd3sp-item-text { font-size:13px; }
        }
        @media (min-width: 641px) {
          .bd3sp-backdrop { align-items:center; padding:20px; }
          .bd3sp-modal {
            width:100%; max-width:540px; max-height:90vh;
            border-radius:20px;
            display:flex; flex-direction:column;
            animation: bd3sp-popin 0.22s ease forwards;
          }
          .bd3sp-handle-wrap { display:none; }
          .bd3sp-header { padding:22px 24px 16px; }
          .bd3sp-title { font-size:22px; }
          .bd3sp-body { padding:16px 24px 4px; }
          .bd3sp-footer { padding:14px 24px 20px; }
          .bd3sp-item-text { font-size:13.5px; }
        }
      `}</style>

      <div
        className="bd3sp-backdrop"
        style={{ background: backdrop }}
        onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
      >
        <div
          className="bd3sp-modal"
          style={{
            background: bg,
            border: `1px solid ${border}`,
            overflow: `hidden`,
            boxShadow: typeof window !== "undefined" && window.innerWidth < 641 ? shadow : shadowDt,
          }}
        >
          {/* Mobile drag handle */}
          <div className="bd3sp-handle-wrap">
            <div style={{ width:36, height:4, borderRadius:99, background: handleClr }} />
          </div>

          {/* Header */}
          <div
            className="bd3sp-header"
            style={{
              borderBottom: `1px solid ${borderSub}`,
              display:"flex", alignItems:"flex-start", justifyContent:"space-between",
              flexShrink:0, position:"sticky", top:0, background:bg, zIndex:1,
            }}
          >
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:7, marginBottom:5 }}>
                <Sparkles size={14} color="#8494FF" />
                <span style={{ fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.1em", color:"#8494FF" }}>
                  What&apos;s new
                </span>
                {entry.label && (
                  <span style={{
                    fontSize:9, fontWeight:700, padding:"2px 7px", borderRadius:99,
                    background:"rgba(99,103,255,0.15)", border:"1px solid rgba(99,103,255,0.3)",
                    color:"#8494FF", letterSpacing:"0.06em", textTransform:"uppercase",
                  }}>
                    {entry.label}
                  </span>
                )}
              </div>
              <h2 className="bd3sp-title" style={{ margin:0, fontWeight:800, color:titleClr, letterSpacing:"-0.3px" }}>
                Birthday Post Studio
                <span style={{ fontSize:13, fontWeight:600, color:"rgba(132,148,255,0.8)", marginLeft:8 }}>v{entry.version}</span>
              </h2>
              <p style={{ margin:"3px 0 0", fontSize:12, color:subClr, fontWeight:400 }}>
                {entry.date} · latest major release
              </p>
            </div>
            <button
              className="bd3sp-close-btn"
              onClick={handleClose}
              style={{
                width:30, height:30, borderRadius:8, border:`1px solid ${closeBdr}`,
                background:closeBg, color:closeClr, flexShrink:0, marginTop:2,
                display:"flex", alignItems:"center", justifyContent:"center",
                cursor:"pointer", transition:"all 0.15s",
              }}
            >
              <X size={13} />
            </button>
          </div>

          {/* Scrollable body — only latest major release */}
          <div className="bd3sp-scroll bd3sp-body" style={{ scrollbarColor: scrollClr }}>
            <div style={{ display:"flex", flexDirection:"column", gap:16, paddingBottom:4 }}>
              {entry.sections.map((section) => (
                <div key={section.category}>
                  <div style={{ display:"flex", alignItems:"center", gap:7, marginBottom:9 }}>
                    <span style={{ fontSize:14 }}>{section.icon}</span>
                    <span style={{ fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.09em", color:catClr }}>
                      {section.category}
                    </span>
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
                    {section.items.map((item, i) => (
                      <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:9 }}>
                        <CheckCircle2 size={14} color="#34d399" style={{ flexShrink:0, marginTop:2 }} />
                        <span className="bd3sp-item-text" style={{ color:itemClr, lineHeight:1.55 }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div
            className="bd3sp-footer"
            style={{
              borderTop:`1px solid ${borderSub}`,
              display:"flex", alignItems:"center", justifyContent:"space-between",
              gap:12, flexShrink:0,
            }}
          >
            <label style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer", userSelect:"none" }}>
              <div
                onClick={() => setDontShow(v => !v)}
                style={{
                  width:17, height:17, borderRadius:5,
                  border: dontShow ? "none" : `1.5px solid ${cbBdr}`,
                  background: dontShow ? "#6367FF" : cbBg,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  flexShrink:0, transition:"all 0.15s", cursor:"pointer",
                  boxShadow: dontShow ? "0 0 0 3px rgba(99,103,255,0.2)" : "none",
                }}
              >
                {dontShow && (
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span style={{ fontSize:12, color:dontClr, fontWeight:500 }}>Don&apos;t show again</span>
            </label>
            <button
              onClick={handleClose}
              style={{
                padding:"10px 24px", borderRadius:12, border:"none", cursor:"pointer",
                background:"#6367FF", color:"#fff", fontSize:13, fontWeight:700,
                fontFamily:"inherit", boxShadow:"0 4px 14px rgba(99,103,255,0.35)",
                transition:"all 0.18s", letterSpacing:"-0.1px",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 20px rgba(99,103,255,0.5)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ""; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 14px rgba(99,103,255,0.35)"; }}
            >
              Got it ✓
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
