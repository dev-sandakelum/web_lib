"use client";

import { Upload, Crop } from "lucide-react";

interface Props {
  profileImage: string | null;
  fileRef: React.RefObject<HTMLInputElement>;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReEdit: () => void;
}

export function PhotoPanel({ profileImage, fileRef, onFileChange, onReEdit }: Props) {
  return (
    <>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{ display: "none" }}
      />
      {profileImage ? (
        <div className="bd3-photo-card">
          <img src={profileImage} alt="Profile" className="bd3-photo-img" />
          <div className="bd3-photo-info">
            <div className="bd3-photo-ready">Photo ready ✓</div>
            <div className="bd3-photo-hint">Adjust crop or upload a new one</div>
          </div>
          <div className="bd3-photo-actions">
            <button
              className="bd3-photo-action-btn bd3-photo-action-edit"
              onClick={onReEdit}
              title="Re-open crop editor"
            >
              <Crop size={12} /> Edit
            </button>
            <button
              className="bd3-photo-action-btn bd3-photo-action-replace"
              onClick={() => fileRef.current?.click()}
              title="Upload different photo"
            >
              <Upload size={12} /> Replace
            </button>
          </div>
        </div>
      ) : (
        <button className="bd3-photo-btn" onClick={() => fileRef.current?.click()}>
          <div className="bd3-photo-icon-wrap">
            <Upload size={19} color="rgba(196,218,255,0.4)" />
          </div>
          <span className="bd3-photo-label">Click to upload photo</span>
          <span className="bd3-photo-sub">PNG, JPG up to 10MB</span>
        </button>
      )}
    </>
  );
}
