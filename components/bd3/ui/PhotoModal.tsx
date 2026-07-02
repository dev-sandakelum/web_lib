import React from "react";
import { X, Camera, Edit3, Upload } from "lucide-react";
import { CropModal3 } from "../crop-modal";
import { LoadingOverlay } from "../loading-overlay";
import type { ImageTransform3 } from "../types";

interface PhotoModalProps {
  profileImage: string | null;
  tempImage: string | null;
  showCrop: boolean;
  savedTransform: ImageTransform3 | undefined;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReEdit: () => void;
  onCropSave: (transform: ImageTransform3) => void;
  onCropClose: () => void;
  onClose: () => void;
  fileRef: React.RefObject<HTMLInputElement | null>;
}

export function PhotoModal({
  profileImage,
  tempImage,
  showCrop,
  savedTransform,
  onFileChange,
  onReEdit,
  onCropSave,
  onCropClose,
  onClose,
  fileRef,
}: PhotoModalProps) {
  return (
    <div className="bd3-modal-overlay" onClick={onClose}>
      <div className="bd3-modal" onClick={(e) => e.stopPropagation()}>
        <div className="bd3-modal-header">
          <h2>Edit Photo</h2>
          <button className="bd3-modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="bd3-modal-body">
          {!profileImage ? (
            <button className="bd3-photo-btn" onClick={() => fileRef.current?.click()}>
              <div className="bd3-photo-icon-wrap">
                <Camera size={24} color="#8494FF" />
              </div>
              <div className="bd3-photo-label">Upload Photo</div>
              <div className="bd3-photo-sub">JPG, PNG • Max 5MB</div>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={onFileChange}
                style={{ display: "none" }}
              />
            </button>
          ) : (
            <div className="bd3-photo-card">
              <img src={profileImage} alt="Profile" className="bd3-photo-img" />
              <div className="bd3-photo-info">
                <div className="bd3-photo-ready">Photo Ready</div>
                <div className="bd3-photo-hint">Click Replace to change</div>
              </div>
              <div className="bd3-photo-actions">
                <button
                  className="bd3-photo-action-btn bd3-photo-action-edit"
                  onClick={onReEdit}
                >
                  <Edit3 size={14} />
                  Edit
                </button>
                <button
                  className="bd3-photo-action-btn bd3-photo-action-replace"
                  onClick={() => fileRef.current?.click()}
                >
                  <Upload size={14} />
                  Replace
                </button>
              </div>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={onFileChange}
                style={{ display: "none" }}
              />
            </div>
          )}
        </div>

        {showCrop && tempImage && (
          <CropModal3
            imageUrl={tempImage}
            initialTransform={savedTransform}
            onSave={(imageData, transform) => {
              onCropSave(transform);
              onCropClose();
            }}
            onClose={onCropClose}
          />
        )}

        <div className="bd3-modal-footer">
          <button className="bd3-btn-primary" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
