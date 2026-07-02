"use client";

import { Download, Sun, Moon } from "lucide-react";

interface Props {
  theme: "dark" | "light";
  isDownloading: boolean;
  onDownload: () => void;
  onThemeToggle: () => void;
  onLogoClick: () => void;
}

export function NavBar({ theme, isDownloading, onDownload, onThemeToggle, onLogoClick }: Props) {
  return (
    <nav className="bd3-nav">
      <div className="bd3-nav-brand">
        <div className="bd3-nav-logo" onClick={onLogoClick} title="About">
          <img src="/bd3/logo.jpeg" alt="Birthday Post Studio" />
        </div>
        <div>
          <div className="bd3-nav-title">Birthday Post Studio</div>
          <div className="bd3-nav-sub">v3 · 9th Batch</div>
        </div>
      </div>

      <div className="bd3-nav-right">
        {/* Resolution badge — desktop only */}
        <div className="bd3-nav-badge">
          <span className="bd3-nav-badge-dot" />
          1080 × 1350 px
        </div>

        {/* Download — desktop only */}
        <button
          className="bd3-nav-download"
          onClick={onDownload}
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
          onClick={onThemeToggle}
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark"
            ? <Sun size={15} strokeWidth={2} />
            : <Moon size={15} strokeWidth={2} />
          }
        </button>
      </div>
    </nav>
  );
}
