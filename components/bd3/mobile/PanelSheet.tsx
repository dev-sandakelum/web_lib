"use client";

import { X } from "lucide-react";
import type { PanelId } from "./MobileToolbar";

const PANEL_LABELS: Record<PanelId, string> = {
  template: "Template",
  person:   "Person Details",
  photo:    "Profile Photo",
  message:  "Birthday Message",
  access:   "Access Key",
  ai:       "AI Social Post",
};

const PANEL_COLORS: Record<PanelId, string> = {
  template: "#8494FF",
  person:   "#67e8f9",
  photo:    "#f9a8d4",
  message:  "#86efac",
  access:   "#fcd34d",
  ai:       "#c4b5fd",
};

interface Props {
  panelId: PanelId | null;
  onClose: () => void;
  children: React.ReactNode;
}

export function PanelSheet({ panelId, onClose, children }: Props) {
  if (!panelId) return null;

  return (
    <>
      <style>{`
        .bd3-sheet-backdrop {
          position: fixed; inset: 0; z-index: 90;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          animation: bd3-sheet-bg-in 0.2s ease;
        }
        @keyframes bd3-sheet-bg-in {
          from { opacity: 0; } to { opacity: 1; }
        }
        .bd3-sheet {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          z-index: 100;
          background: #0D2E55;
          border-radius: 20px 20px 0 0;
          border-top: 1px solid rgba(32,82,149,0.55);
          box-shadow: 0 -8px 40px rgba(0,0,0,0.5);
          max-height: 82vh;
          display: flex;
          flex-direction: column;
          animation: bd3-sheet-in 0.28s cubic-bezier(0.32,0.72,0,1);
          overflow: hidden;
        }
        .bd3-root.light .bd3-sheet {
          background: #FFFFFF;
          border-top-color: rgba(99,103,255,0.15);
          box-shadow: 0 -8px 40px rgba(99,103,255,0.12);
        }
        @keyframes bd3-sheet-in {
          from { transform: translateY(100%); opacity: 0.6; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .bd3-sheet-handle-wrap {
          display: flex; justify-content: center; padding: 10px 0 6px;
          flex-shrink: 0;
        }
        .bd3-sheet-handle {
          width: 36px; height: 4px; border-radius: 2px;
          background: rgba(99,103,255,0.3);
        }
        .bd3-root.light .bd3-sheet-handle {
          background: rgba(10,38,71,0.15);
        }
        .bd3-sheet-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 4px 18px 14px;
          flex-shrink: 0;
          border-bottom: 1px solid rgba(32,82,149,0.35);
        }
        .bd3-root.light .bd3-sheet-header {
          border-bottom-color: rgba(99,103,255,0.12);
        }
        .bd3-sheet-title {
          font-size: 15px; font-weight: 700;
          color: #E8F0FE;
          letter-spacing: -0.2px;
        }
        .bd3-root.light .bd3-sheet-title { color: #0A2647; }
        .bd3-sheet-close {
          width: 30px; height: 30px; border-radius: 8px;
          border: 1px solid rgba(32,82,149,0.5);
          background: rgba(32,82,149,0.25);
          color: rgba(196,218,255,0.5);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.15s;
        }
        .bd3-root.light .bd3-sheet-close {
          border-color: rgba(99,103,255,0.15);
          background: rgba(99,103,255,0.05);
          color: rgba(10,38,71,0.45);
        }
        .bd3-sheet-close:hover { background: rgba(99,103,255,0.15); color: #E8F0FE; }
        .bd3-sheet-body {
          flex: 1; min-height: 0;
          overflow-y: auto;
          padding: 16px 18px 32px;
          scrollbar-width: thin;
          scrollbar-color: rgba(99,103,255,0.3) transparent;
        }
        .bd3-sheet-body::-webkit-scrollbar { width: 3px; }
        .bd3-sheet-body::-webkit-scrollbar-thumb {
          background: rgba(99,103,255,0.3); border-radius: 3px;
        }
        .bd3-sheet-accent-bar {
          height: 3px;
          flex-shrink: 0;
        }
      `}</style>

      {/* Backdrop — click to close */}
      <div className="bd3-sheet-backdrop" onClick={onClose} />

      <div className="bd3-sheet">
        {/* Accent color bar at top */}
        <div
          className="bd3-sheet-accent-bar"
          style={{ background: `linear-gradient(90deg, ${PANEL_COLORS[panelId]}, transparent)` }}
        />

        {/* Drag handle */}
        <div className="bd3-sheet-handle-wrap">
          <div className="bd3-sheet-handle" />
        </div>

        {/* Header */}
        <div className="bd3-sheet-header">
          <span
            className="bd3-sheet-title"
            style={{ borderLeft: `3px solid ${PANEL_COLORS[panelId]}`, paddingLeft: 10 }}
          >
            {PANEL_LABELS[panelId]}
          </span>
          <button className="bd3-sheet-close" onClick={onClose}>
            <X size={14} />
          </button>
        </div>

        {/* Content */}
        <div className="bd3-sheet-body">
          {children}
        </div>
      </div>
    </>
  );
}
