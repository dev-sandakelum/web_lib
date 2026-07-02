"use client";

import React from "react";
import {
  Palette,
  User,
  Camera,
  MessageSquare,
  Lock,
  Stars,
} from "lucide-react";

type ToolType = "template" | "person" | "photo" | "message" | "access" | "ai";

interface MobileToolbarProps {
  activePanel: ToolType | null;
  onToolClick: (tool: ToolType) => void;
}

const TOOLS: Array<{
  id: ToolType;
  label: string;
  icon: React.ReactNode;
  color: string;
  accentBg: string;
}> = [
  {
    id: "template",
    label: "Template",
    icon: <Palette size={20} />,
    color: "#a78bfa",
    accentBg: "rgba(167, 139, 250, 0.1)",
  },
  {
    id: "person",
    label: "Person",
    icon: <User size={20} />,
    color: "#67e8f9",
    accentBg: "rgba(103, 232, 249, 0.1)",
  },
  {
    id: "photo",
    label: "Photo",
    icon: <Camera size={20} />,
    color: "#f9a8d4",
    accentBg: "rgba(249, 168, 212, 0.1)",
  },
  {
    id: "message",
    label: "Message",
    icon: <MessageSquare size={20} />,
    color: "#86efac",
    accentBg: "rgba(134, 239, 172, 0.1)",
  },
  {
    id: "access",
    label: "Access",
    icon: <Lock size={20} />,
    color: "#fcd34d",
    accentBg: "rgba(252, 211, 77, 0.1)",
  },
  {
    id: "ai",
    label: "AI Post",
    icon: <Stars size={20} />,
    color: "#c4b5fd",
    accentBg: "rgba(196, 181, 253, 0.1)",
  },
];

export function MobileToolbar({ activePanel, onToolClick }: MobileToolbarProps) {
  return (
    <aside className="bd3-mobile-toolbar">
      {TOOLS.map((tool) => (
        <button
          key={tool.id}
          onClick={() => onToolClick(tool.id)}
          className={`bd3-mobile-tool ${activePanel === tool.id ? "active" : ""}`}
          title={tool.label}
          style={{
            color: tool.color,
            backgroundColor: activePanel === tool.id ? tool.accentBg : "transparent",
          }}
        >
          {tool.icon}
        </button>
      ))}
    </aside>
  );
}
