"use client";

import React from "react";
import { Download, Sparkles } from "lucide-react";

interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
  icon?: "loading" | "download";
  theme?: "dark" | "light";
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isVisible,
  message = "Generating your birthday post...",
  icon = "loading",
  theme = "dark",
}) => {
  const lt = theme === "light";
  return (
    <>
      <style>{`
        @keyframes bd3ov-spin { to { transform: rotate(360deg); } }
        @keyframes bd3ov-glow-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.12); }
        }
        @keyframes bd3ov-badge-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 8px 32px rgba(99,103,255,0.4), inset 0 1px 0 rgba(255,255,255,0.2); }
          50%       { transform: scale(1.06); box-shadow: 0 12px 48px rgba(99,103,255,0.65), inset 0 1px 0 rgba(255,255,255,0.2); }
        }
        @keyframes bd3ov-dot {
          0%, 80%, 100% { transform: translateY(0) scale(0.85); opacity: 0.45; }
          40%            { transform: translateY(-10px) scale(1.15); opacity: 1; }
        }
        @keyframes bd3ov-shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes bd3ov-fadein  { from { opacity: 0; } to { opacity: 1; } }
        .bd3ov-backdrop {
          position: fixed; inset: 0; z-index: 9999;
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(22px) saturate(1.4);
          -webkit-backdrop-filter: blur(22px) saturate(1.4);
          pointer-events: none; opacity: 0; transition: opacity 0.35s ease;
        }
        .bd3ov-backdrop.visible { opacity: 1; pointer-events: all; animation: bd3ov-fadein 0.35s ease forwards; }
        .bd3ov-card {
          display: flex; flex-direction: column; align-items: center;
          gap: 26px; padding: 52px 56px; border-radius: 28px;
          position: relative; overflow: hidden; min-width: 280px;
        }
        .bd3ov-card::before {
          content: ''; position: absolute; inset: 0; border-radius: inherit;
          background: linear-gradient(135deg, rgba(99,103,255,0.2) 0%, transparent 40%, rgba(132,148,255,0.15) 100%);
          pointer-events: none;
        }
        .bd3ov-glow {
          position: absolute; width: 320px; height: 320px; border-radius: 50%;
          filter: blur(50px); pointer-events: none; animation: bd3ov-glow-pulse 2.4s ease-in-out infinite;
        }
        .bd3ov-spinner { position: relative; width: 110px; height: 110px; z-index: 1; display: flex; align-items: center; justify-content: center; }
        .bd3ov-arc {
          position: absolute; inset: 0; border-radius: 50%; border: 2.5px solid transparent;
          border-top-color: #6367FF; border-right-color: #8494FF;
          animation: bd3ov-spin 1.1s linear infinite;
          filter: drop-shadow(0 0 6px rgba(99,103,255,0.7));
        }
        .bd3ov-arc2 {
          position: absolute; inset: 10px; border-radius: 50%; border: 1.5px solid transparent;
          border-bottom-color: rgba(132,148,255,0.55); animation: bd3ov-spin 1.9s linear infinite reverse;
        }
        .bd3ov-badge {
          position: relative; z-index: 1; width: 48px; height: 48px; border-radius: 50%;
          background: #6367FF; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 32px rgba(99,103,255,0.4), inset 0 1px 0 rgba(255,255,255,0.2);
          animation: bd3ov-badge-pulse 2.2s ease-in-out infinite;
        }
        .bd3ov-dots { display: flex; gap: 7px; align-items: center; z-index: 1; }
        .bd3ov-dot { width: 7px; height: 7px; border-radius: 50%; background: linear-gradient(135deg, #6367FF, #8494FF); animation: bd3ov-dot 1.5s ease-in-out infinite; }
        .bd3ov-dot:nth-child(2) { animation-delay: 0.18s; }
        .bd3ov-dot:nth-child(3) { animation-delay: 0.36s; }
        .bd3ov-sub {
          font-size: 13px; text-align: center; z-index: 1; font-family: Inter, system-ui, sans-serif;
          background-size: 200% 100%; -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; animation: bd3ov-shimmer 2.2s linear infinite; margin: -10px 0 0;
        }
      `}</style>
      <div
        className={`bd3ov-backdrop${isVisible ? " visible" : ""}`}
        style={{ background: lt ? "rgba(240,244,255,0.88)" : "rgba(7,29,56,0.9)" }}
      >
        <div
          className="bd3ov-card"
          style={{
            background: lt ? "#FFFFFF" : "#112F56",
            border: `1px solid ${lt ? "rgba(99,103,255,0.18)" : "rgba(99,103,255,0.2)"}`,
            boxShadow: lt
              ? "0 32px 80px rgba(99,103,255,0.15), 0 0 0 1px rgba(99,103,255,0.1)"
              : "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="bd3ov-glow"
            style={{ background: `radial-gradient(circle, rgba(99,103,255,${lt ? "0.12" : "0.2"}) 0%, transparent 70%)` }}
          />
          <div className="bd3ov-spinner">
            <div style={{
              position: "absolute", inset: 0, borderRadius: "50%",
              border: `2.5px solid ${lt ? "rgba(99,103,255,0.12)" : "rgba(255,255,255,0.06)"}`,
            }} />
            <div className="bd3ov-arc" />
            <div className="bd3ov-arc2" />
            <div className="bd3ov-badge">
              {icon === "download"
                ? <Download size={20} color="#fff" strokeWidth={2.5} />
                : <Sparkles size={20} color="#fff" strokeWidth={2.5} />
              }
            </div>
          </div>
          <p style={{
            fontSize: 17, fontWeight: 700, letterSpacing: "-0.2px",
            textAlign: "center", margin: 0, zIndex: 1,
            fontFamily: "Inter, system-ui, sans-serif",
            color: lt ? "#0A2647" : "#E8F0FE",
          }}>
            {message}
          </p>
          <div className="bd3ov-dots">
            <div className="bd3ov-dot" />
            <div className="bd3ov-dot" />
            <div className="bd3ov-dot" />
          </div>
          <p
            className="bd3ov-sub"
            style={{
              backgroundImage: lt
                ? "linear-gradient(90deg, rgba(10,38,71,0.3) 0%, rgba(10,38,71,0.65) 50%, rgba(10,38,71,0.3) 100%)"
                : "linear-gradient(90deg, rgba(196,218,255,0.28) 0%, rgba(196,218,255,0.6) 50%, rgba(196,218,255,0.28) 100%)",
            }}
          >
            {icon === "download" ? "Rendering your HD 1080 × 1350 image" : "Writing to clipboard..."}
          </p>
        </div>
      </div>
    </>
  );
};
