import React, { useMemo } from "react";
import { PostTemplate3 } from "../post-template";
import { TEMPLATES3 } from "../templates";
import type { FormData3 } from "../types";

interface PreviewProps {
  form: FormData3;
  scale: number;
  hiddenRef: React.RefObject<HTMLDivElement | null>;
  previewRef: React.RefObject<HTMLDivElement | null>;
}

export function Preview({ form, scale, hiddenRef, previewRef }: PreviewProps) {
  const selectedTemplate = useMemo(
    () => TEMPLATES3.find((t) => t.id === form.templateId) || TEMPLATES3[0],
    [form.templateId]
  );

  return (
    <div className="bd3-preview-container" ref={previewRef}>
      <div className="bd3-preview-grid" />
      <div className="bd3-preview-content">
        <div
          className="bd3-preview-card"
          style={{
            transform: `scale(${scale})`,
          }}
        >
          <PostTemplate3
            data={{
              name: form.name,
              batch: form.batch,
              faculty: form.faculty,
              university: form.university,
              profileImage: form.profileImage,
              message: form.message,
              template: selectedTemplate,
              access: form.access,
              nameStyle: form.nameStyle,
            }}
          />
        </div>
      </div>

      {/* Hidden render element for download */}
      <div ref={hiddenRef} style={{ display: "none" }}>
        <PostTemplate3
          data={{
            name: form.name,
            batch: form.batch,
            faculty: form.faculty,
            university: form.university,
            profileImage: form.profileImage,
            message: form.message,
            template: selectedTemplate,
            access: form.access,
            nameStyle: form.nameStyle,
          }}
        />
      </div>
    </div>
  );
}
