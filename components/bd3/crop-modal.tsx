"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { X, RotateCcw, Check, ZoomOut, ZoomIn, RotateCw, FlipHorizontal, Move } from "lucide-react";
import type { ImageTransform3 } from "./types";

interface CropModalProps {
  imageUrl: string;
  initialTransform?: ImageTransform3;
  onSave: (imageData: string, transform: ImageTransform3) => void;
  onClose: () => void;
}

export const CropModal3: React.FC<CropModalProps> = ({ imageUrl, initialTransform, onSave, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [transform, setTransform] = useState<ImageTransform3>({ x: 0, y: 0, scale: 1, rotation: 0, flip: false });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  // base scale so image fills the circle at scale=1
  const baseScaleRef = useRef(1);

  const SIZE = 420;
  const RADIUS = 175;

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      imgRef.current = img;
      // compute a base scale so the shorter side fills the circle diameter
      const diameter = RADIUS * 2;
      const fit = Math.max(diameter / img.width, diameter / img.height);
      baseScaleRef.current = fit;
      // restore previous transform if editing, otherwise start fresh
      setTransform(initialTransform ?? { x: 0, y: 0, scale: 1, rotation: 0, flip: false });
      setTimeout(() => renderCanvas(), 0);
    };
    img.src = imageUrl;
  }, [imageUrl]);

  useEffect(() => { renderCanvas(); }, [transform]);

  const renderCanvas = () => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cx = SIZE / 2, cy = SIZE / 2;
    ctx.clearRect(0, 0, SIZE, SIZE);

    // ── 1. Fill entire canvas with dark background ──
    ctx.fillStyle = "#071d38";
    ctx.fillRect(0, 0, SIZE, SIZE);

    // ── 2. Subtle dot grid over the whole canvas ──
    ctx.fillStyle = "rgba(99,103,255,0.04)";
    for (let x = 0; x < SIZE; x += 20) {
      for (let y = 0; y < SIZE; y += 20) {
        ctx.beginPath(); ctx.arc(x, y, 0.8, 0, Math.PI * 2); ctx.fill();
      }
    }

    // ── 3. Draw image clipped to circle (no compositing tricks) ──
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, RADIUS, 0, Math.PI * 2);
    ctx.clip();                                    // clip region = circle

    const { x, y, scale, rotation, flip } = transform;
    const bs = baseScaleRef.current;              // base scale: image fills circle at scale=1
    const effective = bs * scale;
    ctx.translate(cx + x, cy + y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(flip ? -effective : effective, effective);
    ctx.drawImage(img, -img.width / 2, -img.height / 2);
    ctx.restore();                                 // clip removed here

    // ── 4. Dim the area OUTSIDE the circle (pure source-over, no compositing) ──
    ctx.save();
    ctx.fillStyle = "rgba(7,29,56,0.65)";
    ctx.beginPath();
    ctx.rect(0, 0, SIZE, SIZE);                    // outer rectangle
    ctx.arc(cx, cy, RADIUS, 0, Math.PI * 2, true); // hole = clockwise circle subtracted
    ctx.fill("evenodd");                            // fills rect minus circle
    ctx.restore();

    // ── 5. Gradient ring border ──
    const grad = ctx.createLinearGradient(cx - RADIUS, cy - RADIUS, cx + RADIUS, cy + RADIUS);
    grad.addColorStop(0,   "rgba(99,103,255,0.9)");
    grad.addColorStop(0.5, "rgba(132,148,255,0.9)");
    grad.addColorStop(1,   "rgba(99,103,255,0.9)");
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.arc(cx, cy, RADIUS, 0, Math.PI * 2); ctx.stroke();

    // ── 6. Inner subtle ring ──
    ctx.strokeStyle = "rgba(99,103,255,0.12)";
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(cx, cy, RADIUS - 6, 0, Math.PI * 2); ctx.stroke();
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - transform.x, y: e.clientY - transform.y });
    (e.target as HTMLCanvasElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    setTransform((p) => ({ ...p, x: e.clientX - dragStart.x, y: e.clientY - dragStart.y }));
  };

  const handleSave = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx || !imgRef.current) return;
    canvas.width = 600; canvas.height = 600;
    const cs = 300;
    const { x, y, scale, rotation, flip } = transform;
    const previewToOutput = 600 / SIZE;
    const bs = baseScaleRef.current;
    const effective = bs * scale * previewToOutput;
    ctx.save();
    ctx.beginPath(); ctx.arc(cs, cs, cs, 0, Math.PI * 2); ctx.clip();
    ctx.translate(cs + x * previewToOutput, cs + y * previewToOutput);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(flip ? -effective : effective, effective);
    ctx.drawImage(imgRef.current, -imgRef.current.width / 2, -imgRef.current.height / 2);
    ctx.restore();
    onSave(canvas.toDataURL("image/png"), transform);
  };

  return (
    <>
      <style>{`
        .bd3-modal-backdrop {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(0,0,0,0.82);
          backdrop-filter: blur(16px) saturate(1.2);
          display: flex; align-items: center; justify-content: center; padding: 16px;
          animation: bd3-modal-in 0.22s ease-out;
        }
        @keyframes bd3-modal-in {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        .bd3-modal-card {
          background: #0D2E55;
          border: 1px solid rgba(32,82,149,0.5);
          border-radius: 20px;
          width: 100%; max-width: 470px;
          box-shadow: 0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,103,255,0.1);
          display: flex; flex-direction: column; overflow: hidden;
        }
        .bd3-modal-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 18px;
          border-bottom: 1px solid rgba(32,82,149,0.4);
          background: rgba(10,38,71,0.4);
        }
        .bd3-modal-title-wrap { display: flex; align-items: center; gap: 10px; }
        .bd3-modal-icon {
          width: 30px; height: 30px; border-radius: 8px;
          background: rgba(99,103,255,0.2);
          border: 1px solid rgba(99,103,255,0.35);
          display: flex; align-items: center; justify-content: center;
        }
        .bd3-modal-title { font-size: 14px; font-weight: 700; color: #E8F0FE; letter-spacing: -0.2px; }
        .bd3-modal-subtitle { font-size: 11px; color: rgba(196,218,255,0.35); margin-top: 1px; }
        .bd3-modal-close {
          width: 30px; height: 30px; border-radius: 8px; border: none;
          background: rgba(32,82,149,0.3); cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: rgba(196,218,255,0.5); transition: all 0.15s;
        }
        .bd3-modal-close:hover { background: rgba(32,82,149,0.5); color: #E8F0FE; }

        .bd3-canvas-wrap {
          background: #071d38; display: flex; justify-content: center; align-items: center;
          padding: 20px; position: relative;
        }
        .bd3-canvas-hint {
          position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
          display: flex; align-items: center; gap: 5px;
          background: rgba(7,29,56,0.7); backdrop-filter: blur(8px);
          border: 1px solid rgba(32,82,149,0.35);
          padding: 4px 10px; border-radius: 99px;
          font-size: 10.5px; color: rgba(196,218,255,0.4); white-space: nowrap;
          pointer-events: none;
        }

        .bd3-controls { padding: 16px 18px; display: flex; flex-direction: column; gap: 14px; }
        .bd3-zoom-row { display: flex; align-items: center; gap: 10px; }
        .bd3-zoom-label { font-size: 10.5px; font-weight: 600; color: rgba(196,218,255,0.35); letter-spacing: 0.06em; }
        .bd3-slider {
          flex: 1; height: 3px; border-radius: 99px;
          appearance: none; -webkit-appearance: none;
          background: rgba(32,82,149,0.4); outline: none; cursor: pointer;
          accent-color: #6367FF;
        }
        .bd3-slider::-webkit-slider-thumb {
          -webkit-appearance: none; width: 16px; height: 16px;
          border-radius: 50%; background: #6367FF;
          box-shadow: 0 0 0 3px rgba(99,103,255,0.25), 0 2px 6px rgba(0,0,0,0.4);
          cursor: grab; transition: box-shadow 0.15s;
        }
        .bd3-slider::-webkit-slider-thumb:active { cursor: grabbing; box-shadow: 0 0 0 5px rgba(99,103,255,0.3); }
        .bd3-slider::-moz-range-thumb {
          width: 16px; height: 16px; border-radius: 50%; background: #6367FF;
          border: none; box-shadow: 0 0 0 3px rgba(99,103,255,0.25); cursor: grab;
        }

        .bd3-transform-btns { display: flex; align-items: center; gap: 8px; }
        .bd3-transform-label { font-size: 10.5px; font-weight: 600; color: rgba(196,218,255,0.35); letter-spacing: 0.06em; margin-right: 4px; }
        .bd3-tbtn {
          display: flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 9px;
          border: 1px solid rgba(32,82,149,0.5);
          background: rgba(20,66,114,0.3);
          color: rgba(196,218,255,0.5); cursor: pointer;
          transition: all 0.15s;
        }
        .bd3-tbtn:hover { border-color: rgba(99,103,255,0.5); background: rgba(99,103,255,0.1); color: #C9BEFF; }
        .bd3-tbtn.active { border-color: rgba(99,103,255,0.6); background: rgba(99,103,255,0.12); color: #8494FF; }

        .bd3-modal-footer {
          display: flex; gap: 10px; padding: 14px 18px;
          border-top: 1px solid rgba(32,82,149,0.4);
          background: rgba(10,38,71,0.5);
        }
        .bd3-modal-reset {
          display: flex; align-items: center; gap: 7px;
          padding: 10px 16px; border-radius: 10px;
          border: 1px solid rgba(32,82,149,0.5);
          background: transparent; cursor: pointer;
          font-size: 12.5px; font-weight: 600; color: rgba(196,218,255,0.45);
          transition: all 0.15s; font-family: inherit;
        }
        .bd3-modal-reset:hover { color: #C9BEFF; border-color: rgba(99,103,255,0.4); background: rgba(99,103,255,0.08); }
        .bd3-modal-apply {
          flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 10px 16px; border-radius: 10px; border: none; cursor: pointer;
          font-size: 13px; font-weight: 700; color: #fff;
          background: #6367FF;
          box-shadow: 0 4px 16px rgba(99,103,255,0.35), inset 0 1px 0 rgba(255,255,255,0.1);
          transition: all 0.15s; font-family: inherit;
        }
        .bd3-modal-apply:hover { background: #5558E8; transform: translateY(-1px); box-shadow: 0 6px 22px rgba(99,103,255,0.45); }
        .bd3-modal-apply:active { transform: translateY(0); }
      `}</style>

      <div className="bd3-modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <div className="bd3-modal-card">
          {/* Header */}
          <div className="bd3-modal-header">
            <div className="bd3-modal-title-wrap">
              <div className="bd3-modal-icon">
                <Camera size={14} color="#8494FF" />
              </div>
              <div>
                <div className="bd3-modal-title">Adjust Photo</div>
                <div className="bd3-modal-subtitle">Drag to reposition · Pinch to zoom</div>
              </div>
            </div>
            <button className="bd3-modal-close" onClick={onClose}><X size={16} /></button>
          </div>

          {/* Canvas */}
          <div className="bd3-canvas-wrap">
            <canvas
              ref={canvasRef}
              width={SIZE}
              height={SIZE}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={() => setIsDragging(false)}
              onPointerLeave={() => setIsDragging(false)}
              style={{ maxWidth: "100%", height: "auto", touchAction: "none", cursor: isDragging ? "grabbing" : "grab", borderRadius: "12px", display: "block" }}
            />
            <div className="bd3-canvas-hint"><Move size={10} /> Drag to reposition</div>
          </div>

          {/* Controls */}
          <div className="bd3-controls">
            {/* Zoom */}
            <div className="bd3-zoom-row">
              <ZoomOut size={15} color="rgba(196,218,255,0.35)" />
              <input
                type="range" min="0.2" max="3" step="0.01"
                value={transform.scale}
                onChange={(e) => setTransform((p) => ({ ...p, scale: parseFloat(e.target.value) }))}
                className="bd3-slider"
              />
              <ZoomIn size={15} color="rgba(196,218,255,0.35)" />
              <span style={{ fontSize: 11, color: "rgba(196,218,255,0.35)", minWidth: 34, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                {Math.round(transform.scale * 100)}%
              </span>
            </div>

            {/* Transform buttons */}
            <div className="bd3-transform-btns">
              <span className="bd3-transform-label">Transform</span>
              <button className="bd3-tbtn" onClick={() => setTransform((p) => ({ ...p, rotation: p.rotation - 90 }))} title="Rotate left">
                <RotateCcw size={16} />
              </button>
              <button className="bd3-tbtn" onClick={() => setTransform((p) => ({ ...p, rotation: p.rotation + 90 }))} title="Rotate right">
                <RotateCw size={16} />
              </button>
              <button className={`bd3-tbtn ${transform.flip ? "active" : ""}`} onClick={() => setTransform((p) => ({ ...p, flip: !p.flip }))} title="Flip horizontal">
                <FlipHorizontal size={16} />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="bd3-modal-footer">
            <button className="bd3-modal-reset" onClick={() => setTransform({ x: 0, y: 0, scale: 1, rotation: 0, flip: false })}>
              <RotateCcw size={14} /> Reset
            </button>
            <button className="bd3-modal-apply" onClick={handleSave}>
              <Check size={15} /> Apply Photo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// Camera icon (local use in modal)
function Camera({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  );
}
