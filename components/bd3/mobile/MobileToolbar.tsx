"use client";

import { Palette, User, Camera, MessageSquare, Lock, Stars } from "lucide-react";

export type PanelId = "template" | "person" | "photo" | "message" | "access" | "ai";

const TOOLS: { id: PanelId; Icon: React.FC<any>; label: string; color: string }[] = [
  { id: "template",  Icon: Palette,       label: "Template", color: "#8494FF" },
  { id: "person",    Icon: User,          label: "Person",   color: "#67e8f9" },
  { id: "photo",     Icon: Camera,        label: "Photo",    color: "#f9a8d4" },
  { id: "message",   Icon: MessageSquare, label: "Message",  color: "#86efac" },
  { id: "access",    Icon: Lock,          label: "Access",   color: "#fcd34d" },
  { id: "ai",        Icon: Stars,         label: "AI Post",  color: "#c4b5fd" },
];

interface Props {
  activePanel: PanelId | null;
  onSelect: (id: PanelId) => void;
}

export function MobileToolbar({ activePanel, onSelect }: Props) {
  return (
    <>
      <style>{`
        .bd3-toolbar {
          position: fixed;
          left: 0; top: 50%;
          transform: translateY(-50%);
          z-index: 80;
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 6px 0;
          background: rgba(10,38,71,0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-right: 1px solid rgba(32,82,149,0.5);
          border-radius: 0 14px 14px 0;
          box-shadow: 4px 0 24px rgba(0,0,0,0.35);
        }
        .bd3-root.light .bd3-toolbar {
          background: rgba(255,255,255,0.92);
          border-right-color: rgba(99,103,255,0.15);
          box-shadow: 4px 0 24px rgba(99,103,255,0.1);
        }
        .bd3-tool-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          width: 52px;
          padding: 9px 6px 7px;
          border: none;
          background: transparent;
          cursor: pointer;
          border-radius: 10px;
          margin: 0 4px;
          transition: background 0.15s;
          position: relative;
        }
        .bd3-tool-btn:hover {
          background: rgba(99,103,255,0.1);
        }
        .bd3-tool-btn.active {
          background: rgba(99,103,255,0.18);
        }
        .bd3-tool-btn.active::after {
          content: '';
          position: absolute;
          right: -4px; top: 50%;
          transform: translateY(-50%);
          width: 3px; height: 28px;
          background: #6367FF;
          border-radius: 2px 0 0 2px;
        }
        .bd3-tool-label {
          font-size: 8.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(196,218,255,0.4);
          text-transform: uppercase;
          font-family: inherit;
        }
        .bd3-root.light .bd3-tool-label {
          color: rgba(10,38,71,0.4);
        }
        .bd3-tool-btn.active .bd3-tool-label {
          color: #8494FF;
        }
        .bd3-root.light .bd3-tool-btn.active .bd3-tool-label {
          color: #6367FF;
        }
      `}</style>

      <div className="bd3-toolbar">
        {TOOLS.map(({ id, Icon, label, color }) => (
          <button
            key={id}
            className={`bd3-tool-btn ${activePanel === id ? "active" : ""}`}
            onClick={() => onSelect(id)}
            title={label}
          >
            <Icon
              size={18}
              color={activePanel === id ? color : "rgba(196,218,255,0.45)"}
              strokeWidth={activePanel === id ? 2.5 : 1.8}
            />
            <span className="bd3-tool-label">{label}</span>
          </button>
        ))}
      </div>
    </>
  );
}
