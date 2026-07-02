"use client";

import React, { useRef } from "react";
import { Pencil, Download } from "lucide-react";
import { PostTemplate3 } from "../post-template";
import type { FormData3, BirthdayTemplate3 } from "../types";

interface PreviewProps {
  form: FormData3;
  selectedTemplate: BirthdayTemplate3;
  scale: number;
  onDownload: () => void;
  onEditClick: () => void;
  isDownloading: boolean;
}

export const Preview = React.forwardRef<HTMLDivElement, PreviewProps>(
  (
    {
      form,
      selectedTemplate,
      scale,
      onDownload,
      onEditClick,
      isDownloading,
    },
    previewRef
  ) => {
    return (
      <main ref={previewRef} className="bd3-preview">
        <div className="bd3-preview-grid" />
        <div className="bd3-preview-glow" />

        <button className="bd3-back-btn" onClick={onEditClick}>
          <Pencil size={11} /> Edit
        </button>

        <div
          className="bd3-preview-card"
          style={{ width: `${1080 * scale}px`, height: `${1350 * scale}px` }}
        >
          <div
            style={{
              width: 1080,
              height: 1350,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            <PostTemplate3 data={{ ...form, template: selectedTemplate }} />
          </div>
        </div>

        {/* Mobile download — fixed bottom, preview tab only */}
        <button
          className="bd3-mobile-dl"
          onClick={onDownload}
          disabled={isDownloading}
        >
          {isDownloading ? (
            <span className="bd3-pulse">Downloading…</span>
          ) : (
            <>
              <Download size={17} /> Save Image
            </>
          )}
        </button>
      </main>
    );
  }
);

Preview.displayName = "Preview";
