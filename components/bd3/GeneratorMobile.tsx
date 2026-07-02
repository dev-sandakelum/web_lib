"use client";

import React, { useState, useRef, useEffect } from "react";
import { LoadingOverlay } from "./loading-overlay";
import { Preview } from "./ui/Preview";
import { Toolbar } from "./ui/Toolbar";
import { TextEditModal } from "./ui/TextEditModal";
import { MessageEditModal } from "./ui/MessageEditModal";
import { TemplateModal } from "./ui/TemplateModal";
import { PhotoModal } from "./ui/PhotoModal";
import { useFormState } from "./hooks/useFormState";
import { useImageHandling } from "./hooks/useImageHandling";
import { useMessageGeneration } from "./hooks/useMessageGeneration";
import { useDownload } from "./hooks/useDownload";
import { generateFileName } from "./utils/helpers";
import type { ImageTransform3 } from "./types";

export default function BirthdayGeneratorMobile() {
  const { form, set, setForm } = useFormState();
  const imageHandling = useImageHandling();
  const messageGeneration = useMessageGeneration();
  const downloadHook = useDownload();

  const [activePanel, setActivePanel] = useState<"text" | "message" | "template" | "photo" | null>(null);
  const [scale, setScale] = useState(0.3);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const hiddenRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  // Setup ResizeObserver for preview scaling
  useEffect(() => {
    const update = () => {
      if (!previewRef.current) return;
      const cw = previewRef.current.clientWidth - 32;
      const ch = previewRef.current.clientHeight - 32;
      setScale(Math.min(cw / 1080, ch / 1350, 0.72));
    };
    const ro = new ResizeObserver(update);
    if (previewRef.current) ro.observe(previewRef.current);
    window.addEventListener("resize", update);
    update();
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const handleUpdateField = (field: keyof typeof form, value: string) => {
    set(field, value);
  };

  const handleDownload = async () => {
    const fileName = generateFileName(form.name);
    await downloadHook.handleDownload(hiddenRef, fileName);
  };

  const handleSelectTemplate = (templateId: string) => {
    set("templateId", templateId);
  };

  const handleSaveCrop = (transform: ImageTransform3) => {
    imageHandling.setSavedTransform(transform);
    imageHandling.setShowCrop(false);
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await imageHandling.handleFileChange(e);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .bd3-generator-mobile {
          width: 100vw;
          height: 100vh;
          background: #0A2647;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #E8F0FE;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: fixed;
          inset: 0;
        }

        .bd3-generator-mobile.light {
          background: #F0F4FF;
          color: #0A2647;
        }

        /* ── Nav ── */
        .bd3-nav-mobile {
          height: 48px;
          flex-shrink: 0;
          border-bottom: 1px solid rgba(32,82,149,0.5);
          background: rgba(10,38,71,0.96);
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          z-index: 50;
        }

        .bd3-generator-mobile.light .bd3-nav-mobile {
          background: rgba(255,255,255,0.92);
          border-bottom-color: rgba(99,103,255,0.12);
        }

        .bd3-nav-title {
          font-size: 14px;
          font-weight: 700;
          color: #E8F0FE;
        }

        .bd3-generator-mobile.light .bd3-nav-title {
          color: #0A2647;
        }

        /* ── Body ── */
        .bd3-body-mobile {
          display: flex;
          flex: 1;
          min-height: 0;
          overflow: hidden;
        }

        /* ── Preview Area (Center) ── */
        .bd3-preview-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(26,50,90,0.8) 0%, rgba(15,35,65,0.9) 100%);
          position: relative;
          overflow: auto;
          padding: 16px;
        }

        .bd3-generator-mobile.light .bd3-preview-container {
          background: linear-gradient(135deg, #E8EEFF 0%, #F0F4FF 100%);
        }

        .bd3-preview-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(99,103,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .bd3-preview-content {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .bd3-preview-card {
          transform-origin: center;
          transition: transform 0.3s ease-out;
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,103,255,0.1);
        }

        /* ── Toolbar (Left) ── */
        .bd3-toolbar {
          width: 64px;
          flex-shrink: 0;
          background: rgba(10,38,71,0.8);
          border-left: 1px solid rgba(32,82,149,0.5);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 12px 0;
          align-items: center;
          gap: 8px;
        }

        .bd3-generator-mobile.light .bd3-toolbar {
          background: rgba(255,255,255,0.8);
          border-left-color: rgba(99,103,255,0.12);
        }

        .bd3-toolbar-tools {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .bd3-toolbar-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: auto;
        }

        .bd3-toolbar-btn {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          border: 1px solid rgba(32,82,149,0.5);
          background: rgba(32,82,149,0.2);
          color: rgba(196,218,255,0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .bd3-toolbar-btn:hover {
          border-color: rgba(99,103,255,0.5);
          background: rgba(99,103,255,0.12);
          color: #E8F0FE;
        }

        .bd3-toolbar-btn.active {
          border-color: #6367FF;
          background: #6367FF;
          color: #fff;
          box-shadow: 0 0 12px rgba(99,103,255,0.4);
        }

        .bd3-generator-mobile.light .bd3-toolbar-btn {
          border-color: rgba(99,103,255,0.15);
          background: rgba(99,103,255,0.05);
          color: rgba(10,38,71,0.5);
        }

        .bd3-generator-mobile.light .bd3-toolbar-btn:hover {
          border-color: rgba(99,103,255,0.3);
          background: rgba(99,103,255,0.12);
          color: #0A2647;
        }

        .bd3-toolbar-btn.download-btn {
          margin-top: auto;
        }

        .bd3-toolbar-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ── Modal Styles ── */
        .bd3-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 16px;
        }

        .bd3-modal {
          background: #0D2E55;
          border-radius: 16px;
          max-width: 500px;
          width: 100%;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
          display: flex;
          flex-direction: column;
        }

        .bd3-generator-mobile.light .bd3-modal {
          background: #FFFFFF;
        }

        .bd3-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          border-bottom: 1px solid rgba(32,82,149,0.5);
          flex-shrink: 0;
        }

        .bd3-generator-mobile.light .bd3-modal-header {
          border-bottom-color: rgba(99,103,255,0.12);
        }

        .bd3-modal-header h2 {
          font-size: 18px;
          font-weight: 700;
          color: #E8F0FE;
        }

        .bd3-generator-mobile.light .bd3-modal-header h2 {
          color: #0A2647;
        }

        .bd3-modal-close {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: 1px solid rgba(32,82,149,0.5);
          background: transparent;
          color: rgba(196,218,255,0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .bd3-modal-close:hover {
          border-color: rgba(99,103,255,0.5);
          background: rgba(99,103,255,0.12);
          color: #E8F0FE;
        }

        .bd3-modal-body {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .bd3-modal-footer {
          display: flex;
          gap: 12px;
          padding: 16px 20px;
          border-top: 1px solid rgba(32,82,149,0.5);
          flex-shrink: 0;
        }

        .bd3-generator-mobile.light .bd3-modal-footer {
          border-top-color: rgba(99,103,255,0.12);
        }

        /* ── Field Styles ── */
        .bd3-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .bd3-field-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .bd3-field-label {
          font-size: 12px;
          font-weight: 600;
          color: rgba(196,218,255,0.5);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .bd3-generator-mobile.light .bd3-field-label {
          color: rgba(10,38,71,0.45);
        }

        /* ── Input Styles ── */
        .bd3-input {
          width: 100%;
          background: rgba(20,66,114,0.5);
          border: 1px solid rgba(32,82,149,0.6);
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 14px;
          font-family: inherit;
          color: #E8F0FE;
          outline: none;
          transition: all 0.2s;
        }

        .bd3-input::placeholder {
          color: rgba(196,218,255,0.25);
        }

        .bd3-input:focus {
          border-color: #6367FF;
          background: rgba(20,66,114,0.7);
          box-shadow: 0 0 0 3px rgba(99,103,255,0.15);
        }

        .bd3-generator-mobile.light .bd3-input {
          background: rgba(99,103,255,0.04);
          border-color: rgba(99,103,255,0.15);
          color: #0A2647;
        }

        .bd3-generator-mobile.light .bd3-input::placeholder {
          color: rgba(10,38,71,0.28);
        }

        .bd3-generator-mobile.light .bd3-input:focus {
          border-color: #6367FF;
          background: rgba(99,103,255,0.06);
        }

        .bd3-textarea {
          width: 100%;
          background: rgba(20,66,114,0.5);
          border: 1px solid rgba(32,82,149,0.6);
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 14px;
          font-family: inherit;
          line-height: 1.6;
          color: #E8F0FE;
          resize: vertical;
          min-height: 120px;
          max-height: 200px;
          outline: none;
          transition: all 0.2s;
        }

        .bd3-textarea::placeholder {
          color: rgba(196,218,255,0.25);
        }

        .bd3-textarea:focus {
          border-color: #6367FF;
          background: rgba(20,66,114,0.7);
          box-shadow: 0 0 0 3px rgba(99,103,255,0.15);
        }

        .bd3-generator-mobile.light .bd3-textarea {
          background: rgba(99,103,255,0.04);
          border-color: rgba(99,103,255,0.15);
          color: #0A2647;
        }

        .bd3-generator-mobile.light .bd3-textarea::placeholder {
          color: rgba(10,38,71,0.28);
        }

        .bd3-generator-mobile.light .bd3-textarea:focus {
          border-color: #6367FF;
          background: rgba(99,103,255,0.06);
        }

        /* ── Character Count ── */
        .bd3-char-count {
          font-size: 11px;
          color: rgba(196,218,255,0.4);
          font-variant-numeric: tabular-nums;
        }

        .bd3-char-count.bd3-char-searching {
          color: #8494FF;
        }

        .bd3-char-count.bd3-char-good {
          color: #34d399;
        }

        .bd3-char-count.bd3-char-over {
          color: #ef4444;
        }

        .bd3-char-range {
          font-size: 10px;
          color: rgba(196,218,255,0.28);
        }

        .bd3-generator-mobile.light .bd3-char-range {
          color: rgba(10,38,71,0.25);
        }

        /* ── AI Actions ── */
        .bd3-ai-actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        /* ── Button Styles ── */
        .bd3-btn-primary,
        .bd3-btn-secondary {
          padding: 10px 16px;
          border-radius: 8px;
          border: 1px solid;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }

        .bd3-btn-primary {
          background: #6367FF;
          border-color: #6367FF;
          color: #fff;
          flex: 1;
        }

        .bd3-btn-primary:hover {
          background: #5558E8;
          border-color: #5558E8;
          box-shadow: 0 4px 12px rgba(99,103,255,0.3);
        }

        .bd3-btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .bd3-btn-secondary {
          background: rgba(20,66,114,0.3);
          border-color: rgba(32,82,149,0.5);
          color: rgba(196,218,255,0.55);
          flex: 1;
        }

        .bd3-btn-secondary:hover {
          background: rgba(99,103,255,0.12);
          border-color: rgba(99,103,255,0.5);
          color: #E8F0FE;
        }

        .bd3-btn-secondary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ── Refresh Button ── */
        .bd3-refresh-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid rgba(32,82,149,0.35);
          background: rgba(20,66,114,0.3);
          font-size: 12px;
          font-weight: 600;
          color: rgba(196,218,255,0.4);
          cursor: pointer;
          transition: all 0.18s;
          font-family: inherit;
        }

        .bd3-refresh-btn:hover {
          border-color: rgba(99,103,255,0.3);
          background: rgba(99,103,255,0.08);
          color: rgba(196,218,255,0.85);
        }

        .bd3-refresh-btn:disabled {
          opacity: 0.45;
          pointer-events: none;
        }

        .bd3-refresh-btn.bd3-refresh-active {
          border-color: rgba(99,103,255,0.4);
          background: rgba(99,103,255,0.15);
          color: #8494FF;
          pointer-events: none;
        }

        .bd3-spin {
          animation: bd3-spin 0.9s linear infinite;
        }

        @keyframes bd3-spin {
          to { transform: rotate(-360deg); }
        }

        /* ── Photo Styles ── */
        .bd3-photo-btn {
          width: 100%;
          border-radius: 12px;
          border: 2px dashed rgba(32,82,149,0.5);
          background: rgba(20,66,114,0.2);
          padding: 28px 16px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          transition: all 0.2s;
          font-family: inherit;
        }

        .bd3-photo-btn:hover {
          border-color: rgba(99,103,255,0.4);
          background: rgba(99,103,255,0.06);
        }

        .bd3-photo-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(99,103,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bd3-photo-label {
          font-size: 14px;
          font-weight: 600;
          color: rgba(196,218,255,0.4);
        }

        .bd3-photo-sub {
          font-size: 12px;
          color: rgba(196,218,255,0.25);
        }

        .bd3-photo-card {
          width: 100%;
          border-radius: 12px;
          border: 1px solid rgba(99,103,255,0.3);
          background: rgba(99,103,255,0.06);
          padding: 12px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .bd3-photo-img {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          border: 2px solid rgba(99,103,255,0.6);
          box-shadow: 0 0 0 3px rgba(99,103,255,0.14);
        }

        .bd3-photo-info {
          flex: 1;
          min-width: 0;
        }

        .bd3-photo-ready {
          font-size: 12px;
          font-weight: 600;
          color: #8494FF;
        }

        .bd3-photo-hint {
          font-size: 11px;
          color: rgba(196,218,255,0.35);
          margin-top: 2px;
        }

        .bd3-photo-actions {
          display: flex;
          gap: 6px;
          flex-shrink: 0;
        }

        .bd3-photo-action-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 10px;
          border-radius: 8px;
          border: 1px solid;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s;
          font-family: inherit;
          background: transparent;
        }

        .bd3-photo-action-edit {
          border-color: rgba(99,103,255,0.4);
          color: #8494FF;
        }

        .bd3-photo-action-edit:hover {
          border-color: rgba(99,103,255,0.7);
          background: rgba(99,103,255,0.15);
          color: #C9BEFF;
        }

        .bd3-photo-action-replace {
          border-color: rgba(32,82,149,0.5);
          color: rgba(196,218,255,0.45);
        }

        .bd3-photo-action-replace:hover {
          border-color: rgba(99,103,255,0.35);
          background: rgba(99,103,255,0.08);
          color: rgba(196,218,255,0.85);
        }

        /* ── Template Grid ── */
        .bd3-tpl-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .bd3-tpl-card {
          position: relative;
          height: 100px;
          border-radius: 12px;
          overflow: hidden;
          border: 2px solid rgba(32,82,149,0.5);
          cursor: pointer;
          transition: all 0.22s;
          background-size: cover;
          background-position: center;
        }

        .bd3-tpl-card:hover {
          border-color: rgba(99,103,255,0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
        }

        .bd3-tpl-card.selected {
          border-color: #6367FF;
          box-shadow: 0 0 0 3px rgba(99,103,255,0.25), 0 8px 24px rgba(0,0,0,0.5);
          transform: translateY(-2px);
        }

        .bd3-tpl-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 55%, transparent 100%);
          display: flex;
          align-items: flex-end;
          padding: 10px 12px;
        }

        .bd3-tpl-name {
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          line-height: 1;
        }

        .bd3-tpl-check {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 24px;
          height: 24px;
          background: #6367FF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(99,103,255,0.5);
        }

        /* ── Responsive ── */
        @media (max-width: 600px) {
          .bd3-modal {
            max-height: 90vh;
          }

          .bd3-tpl-grid {
            grid-template-columns: 1fr;
          }

          .bd3-modal-footer {
            flex-direction: column;
          }

          .bd3-btn-primary,
          .bd3-btn-secondary {
            width: 100%;
          }
        }
      `}</style>

      <div className={`bd3-generator-mobile ${theme}`}>
        {/* Nav */}
        <div className="bd3-nav-mobile">
          <h1 className="bd3-nav-title">Birthday Post Generator</h1>
        </div>

        {/* Body */}
        <div className="bd3-body-mobile">
          {/* Toolbar */}
          <Toolbar
            activePanel={activePanel}
            onPanelChange={setActivePanel}
            theme={theme}
            onThemeChange={setTheme}
            isDownloading={downloadHook.isDownloading}
            onDownload={handleDownload}
          />

          {/* Preview */}
          <Preview
            form={form}
            scale={scale}
            hiddenRef={hiddenRef}
            previewRef={previewRef}
          />
        </div>

        {/* Modals */}
        {activePanel === "text" && (
          <TextEditModal
            form={form}
            onUpdate={handleUpdateField}
            onClose={() => setActivePanel(null)}
          />
        )}

        {activePanel === "message" && (
          <MessageEditModal
            form={form}
            onUpdate={handleUpdateField}
            onGenerate={() => messageGeneration.handleGenerateMsg(form)}
            onRefresh={() =>
              messageGeneration.handleRefreshMsg((msg) => set("message", msg))
            }
            onCopy={messageGeneration.handleCopyMsg}
            onClose={() => setActivePanel(null)}
            isMsgGen={messageGeneration.isMsgGen}
            isRefreshing={messageGeneration.isRefreshing}
            refreshAttempt={messageGeneration.refreshAttempt}
            refreshMaxAttempts={messageGeneration.refreshMaxAttempts}
            msgCopied={messageGeneration.msgCopied}
          />
        )}

        {activePanel === "template" && (
          <TemplateModal
            selectedTemplateId={form.templateId}
            onSelectTemplate={handleSelectTemplate}
            onClose={() => setActivePanel(null)}
          />
        )}

        {activePanel === "photo" && (
          <PhotoModal
            profileImage={form.profileImage}
            tempImage={imageHandling.tempImage}
            showCrop={imageHandling.showCrop}
            savedTransform={imageHandling.savedTransform}
            onFileChange={handlePhotoUpload}
            onReEdit={imageHandling.handleReEdit}
            onCropSave={handleSaveCrop}
            onCropClose={() => imageHandling.setShowCrop(false)}
            onClose={() => setActivePanel(null)}
            fileRef={imageHandling.fileRef}
          />
        )}

        {/* Loading Overlay */}
        <LoadingOverlay
          isVisible={downloadHook.showDownloadOverlay}
          message="Rendering your birthday post..."
          icon="download"
        />
      </div>
    </>
  );
}
