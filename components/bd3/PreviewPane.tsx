"use client";

import { Download } from "lucide-react";
import { PostTemplate3 } from "./post-template";
import type { BirthdayPostData3 } from "./types";

interface Props {
  data: BirthdayPostData3;
  scale: number;
  previewRef: React.RefObject<HTMLDivElement>;
  hiddenRef: React.RefObject<HTMLDivElement>;
  isDownloading: boolean;
  onDownload: () => void;
  /** mobile: show fixed bottom download bar */
  mobileDownload?: boolean;
}

export function PreviewPane({
  data, scale, previewRef, hiddenRef, isDownloading, onDownload, mobileDownload,
}: Props) {
  return (
    <>
      {/* Live scaled preview */}
      <main ref={previewRef} className="bd3-preview">
        <div className="bd3-preview-grid" />
        <div className="bd3-preview-glow" />

        <div
          className="bd3-preview-card"
          style={{ width: `${1080 * scale}px`, height: `${1350 * scale}px` }}
        >
          <div
            style={{
              width: 1080, height: 1350,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            <PostTemplate3 data={data} />
          </div>
        </div>
      </main>

      {/* Hidden full-res render for export */}
      <div
        style={{
          position: "fixed", left: 0, top: "-3000px",
          width: 1080, height: 1350,
          pointerEvents: "none", zIndex: -1,
        }}
      >
        <PostTemplate3 ref={hiddenRef} data={data} edit={true} />
      </div>

      {/* Mobile fixed download bar */}
      {mobileDownload && (
        <div className="bd3-mobile-download-bar">
          <button
            className="bd3-mobile-dl-btn"
            onClick={onDownload}
            disabled={isDownloading}
          >
            <Download size={17} />
            {isDownloading ? "Generating…" : "Save Image"}
          </button>
        </div>
      )}
    </>
  );
}
