import React from "react";
import {
  User,
  MessageSquare,
  Palette,
  Camera,
  Download,
  Sun,
  Moon,
} from "lucide-react";

interface ToolbarProps {
  activePanel: "text" | "message" | "template" | "photo" | null;
  onPanelChange: (panel: "text" | "message" | "template" | "photo" | null) => void;
  theme: "dark" | "light";
  onThemeChange: (theme: "dark" | "light") => void;
  isDownloading: boolean;
  onDownload: () => void;
}

export function Toolbar({
  activePanel,
  onPanelChange,
  theme,
  onThemeChange,
  isDownloading,
  onDownload,
}: ToolbarProps) {
  const tools = [
    { id: "text" as const, icon: User, label: "Text" },
    { id: "message" as const, icon: MessageSquare, label: "Message" },
    { id: "template" as const, icon: Palette, label: "Template" },
    { id: "photo" as const, icon: Camera, label: "Photo" },
  ];

  return (
    <div className="bd3-toolbar">
      <div className="bd3-toolbar-tools">
        {tools.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            className={`bd3-toolbar-btn ${activePanel === id ? "active" : ""}`}
            onClick={() => onPanelChange(activePanel === id ? null : id)}
            title={label}
          >
            <Icon size={20} />
          </button>
        ))}
      </div>

      <div className="bd3-toolbar-actions">
        <button
          className="bd3-toolbar-btn theme-btn"
          onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          className="bd3-toolbar-btn download-btn"
          onClick={onDownload}
          disabled={isDownloading}
          title="Download"
        >
          <Download size={20} />
        </button>
      </div>
    </div>
  );
}
