"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface PanelSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function PanelSheet({ isOpen, onClose, title, children }: PanelSheetProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="bd3-panel-backdrop" onClick={onClose} />

      {/* Sheet */}
      <div className="bd3-panel-sheet">
        {/* Header */}
        <div className="bd3-panel-header">
          <h2 className="bd3-panel-title">{title}</h2>
          <button className="bd3-panel-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="bd3-panel-content">{children}</div>
      </div>
    </>
  );
}
